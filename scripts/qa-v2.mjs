import { spawn } from 'node:child_process';
import { mkdir, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const baseUrl = process.argv[2] || 'http://127.0.0.1:4173/v2/';
const profileDir = join(tmpdir(), `resume-v2-qa-${process.pid}`);
const outputDir = join(tmpdir(), 'resume-v2-qa');

await mkdir(profileDir, { recursive: true });
await mkdir(outputDir, { recursive: true });

const chrome = spawn(chromePath, [
  '--headless=new',
  '--disable-gpu',
  '--hide-scrollbars',
  '--remote-debugging-port=0',
  `--user-data-dir=${profileDir}`,
  'about:blank',
], { stdio: ['ignore', 'ignore', 'pipe'] });

let browserSocket;
const startup = new Promise((resolve, reject) => {
  let stderr = '';
  const timeout = setTimeout(() => reject(new Error('Chrome did not expose a debugging endpoint.')), 10000);

  chrome.stderr.on('data', (chunk) => {
    stderr += chunk.toString();
    const match = stderr.match(/DevTools listening on (ws:\/\/[^\s]+)/);
    if (match) {
      clearTimeout(timeout);
      browserSocket = match[1];
      resolve();
    }
  });
  chrome.once('error', reject);
  chrome.once('exit', (code) => {
    if (!browserSocket) reject(new Error(`Chrome exited during startup (${code}).`));
  });
});

class CdpClient {
  constructor(url) {
    this.socket = new WebSocket(url);
    this.nextId = 1;
    this.pending = new Map();
    this.events = new Map();
  }

  async connect() {
    await new Promise((resolve, reject) => {
      this.socket.addEventListener('open', resolve, { once: true });
      this.socket.addEventListener('error', reject, { once: true });
    });
    this.socket.addEventListener('message', ({ data }) => {
      const message = JSON.parse(data);
      if (message.id) {
        const pending = this.pending.get(message.id);
        if (!pending) return;
        this.pending.delete(message.id);
        if (message.error) pending.reject(new Error(message.error.message));
        else pending.resolve(message.result);
        return;
      }

      const handlers = this.events.get(message.method) || [];
      handlers.forEach((handler) => handler(message.params));
    });
  }

  send(method, params = {}) {
    const id = this.nextId++;
    this.socket.send(JSON.stringify({ id, method, params }));
    return new Promise((resolve, reject) => this.pending.set(id, { resolve, reject }));
  }

  once(method) {
    return new Promise((resolve) => {
      const handler = (params) => {
        this.events.set(method, (this.events.get(method) || []).filter((item) => item !== handler));
        resolve(params);
      };
      this.events.set(method, [...(this.events.get(method) || []), handler]);
    });
  }

  on(method, handler) {
    this.events.set(method, [...(this.events.get(method) || []), handler]);
  }

  close() {
    this.socket.close();
  }
}

const failures = [];
const browserErrors = [];
let client;

function assert(condition, message) {
  if (!condition) failures.push(message);
}

async function evaluate(expression) {
  const result = await client.send('Runtime.evaluate', {
    expression,
    awaitPromise: true,
    returnByValue: true,
  });
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.text);
  return result.result.value;
}

try {
  await startup;
  const port = new URL(browserSocket).port;
  const target = await fetch(`http://127.0.0.1:${port}/json/new?${encodeURIComponent(baseUrl)}`, {
    method: 'PUT',
  }).then((response) => response.json());

  client = new CdpClient(target.webSocketDebuggerUrl);
  await client.connect();
  await Promise.all([
    client.send('Page.enable'),
    client.send('Runtime.enable'),
    client.send('Network.enable'),
    client.send('Log.enable'),
  ]);

  client.on('Runtime.exceptionThrown', ({ exceptionDetails }) => {
    browserErrors.push(`JavaScript exception: ${exceptionDetails.text}`);
  });
  client.on('Log.entryAdded', ({ entry }) => {
    if (entry.level === 'error') browserErrors.push(`Console error: ${entry.text}`);
  });
  client.on('Network.responseReceived', ({ response }) => {
    if (response.status >= 400) browserErrors.push(`HTTP ${response.status}: ${response.url}`);
  });
  client.on('Network.loadingFailed', ({ errorText, canceled }) => {
    if (!canceled) browserErrors.push(`Request failed: ${errorText}`);
  });

  for (const viewport of [
    { name: 'desktop', width: 1440, height: 1000 },
    { name: 'compact-desktop', width: 1024, height: 1100 },
    { name: 'tablet', width: 768, height: 1024 },
    { name: 'mobile', width: 375, height: 812 },
  ]) {
    await client.send('Emulation.setDeviceMetricsOverride', {
      width: viewport.width,
      height: viewport.height,
      deviceScaleFactor: 1,
      mobile: viewport.width === 375,
    });
    const loaded = client.once('Page.loadEventFired');
    await client.send('Page.navigate', { url: `${baseUrl}?qa=${viewport.name}` });
    await loaded;
    await new Promise((resolve) => setTimeout(resolve, 300));

    await evaluate(`(async () => {
      document.documentElement.style.scrollBehavior = 'auto';
      const images = [...document.images];
      images.forEach((image) => { image.loading = 'eager'; });
      scrollTo(0, document.documentElement.scrollHeight);
      await Promise.race([
        Promise.all(images.map((image) => image.decode().catch(() => undefined))),
        new Promise((resolve) => setTimeout(resolve, 8000)),
      ]);
      scrollTo(0, 0);
      await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    })()`);

    const result = await evaluate(`(() => {
      const visible = (element) => {
        const style = getComputedStyle(element);
        const rect = element.getBoundingClientRect();
        return style.display !== 'none' && style.visibility !== 'hidden' && rect.width > 0 && rect.height > 0;
      };
      const escaped = [...document.querySelectorAll('body *')]
        .filter((element) => visible(element) && !element.matches('.skip-link'))
        .map((element) => ({
          tag: element.tagName.toLowerCase(),
          className: element.className,
          left: Math.round(element.getBoundingClientRect().left),
          right: Math.round(element.getBoundingClientRect().right),
        }))
        .filter(({ left, right }) => left < -1 || right > innerWidth + 1);
      return {
        innerWidth,
        scrollWidth: document.documentElement.scrollWidth,
        brokenImages: [...document.images].filter((image) => !image.complete || image.naturalWidth === 0).map((image) => image.src),
        escaped,
        toolLogos: document.querySelectorAll('.tool-grid img').length,
        experienceBrands: document.querySelectorAll('.experience-brand').length,
        h1Count: document.querySelectorAll('h1').length,
        headingOrder: [...document.querySelectorAll('h1,h2,h3')].map((heading) => Number(heading.tagName.slice(1))),
        missingTargets: [...document.querySelectorAll('a[href^="#"]')]
          .map((link) => link.getAttribute('href').slice(1))
          .filter((id) => id && !document.getElementById(id)),
        unsafeNewTabs: [...document.querySelectorAll('a[target="_blank"]')]
          .filter((link) => !link.relList.contains('noopener') || !link.relList.contains('noreferrer'))
          .map((link) => link.href),
        pdfLinks: [...document.links].filter((link) => link.href.toLowerCase().endsWith('.pdf')).length,
        lang: document.documentElement.lang,
        bodyBackground: getComputedStyle(document.body).backgroundColor,
      };
    })()`);

    assert(result.scrollWidth <= result.innerWidth, `${viewport.name}: horizontal overflow (${result.scrollWidth}px > ${result.innerWidth}px)`);
    assert(result.brokenImages.length === 0, `${viewport.name}: broken images: ${result.brokenImages.join(', ')}`);
    assert(result.escaped.length === 0, `${viewport.name}: elements outside viewport: ${JSON.stringify(result.escaped.slice(0, 5))}`);
    assert(result.toolLogos === 18, `${viewport.name}: expected 18 tool logos, found ${result.toolLogos}`);
    assert(result.experienceBrands === 8, `${viewport.name}: expected 8 experience brands, found ${result.experienceBrands}`);
    assert(result.h1Count === 1, `${viewport.name}: expected one h1, found ${result.h1Count}`);
    assert(result.headingOrder.every((level, index, levels) => index === 0 || level - levels[index - 1] <= 1), `${viewport.name}: heading levels are out of order`);
    assert(result.missingTargets.length === 0, `${viewport.name}: missing internal targets: ${result.missingTargets.join(', ')}`);
    assert(result.unsafeNewTabs.length === 0, `${viewport.name}: unsafe new-tab links: ${result.unsafeNewTabs.join(', ')}`);
    assert(result.pdfLinks === 0, `${viewport.name}: PDF link must remain absent`);
    assert(result.lang === 'en', `${viewport.name}: document language is not English`);

    const screenshot = await client.send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
    await writeFile(join(outputDir, `${viewport.name}.png`), Buffer.from(screenshot.data, 'base64'));

    if (viewport.name === 'desktop') {
      for (const sectionId of ['toolkit', 'evidence', 'experience']) {
        await evaluate(`document.getElementById('${sectionId}').scrollIntoView()`);
        await new Promise((resolve) => setTimeout(resolve, 120));
        const sectionScreenshot = await client.send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
        await writeFile(join(outputDir, `desktop-${sectionId}.png`), Buffer.from(sectionScreenshot.data, 'base64'));
      }
    }

    if (viewport.name === 'mobile') {
      const menuResult = await evaluate(`(async () => {
        const toggle = document.querySelector('.menu-toggle');
        toggle.focus();
        const focus = getComputedStyle(toggle);
        toggle.click();
        const opened = toggle.getAttribute('aria-expanded') === 'true' && document.querySelector('.site-nav').classList.contains('is-open');
        document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
        return {
          opened,
          closed: toggle.getAttribute('aria-expanded') === 'false',
          focusVisible: focus.outlineStyle !== 'none' && focus.outlineWidth !== '0px',
          focusReturned: document.activeElement === toggle,
        };
      })()`);
      assert(menuResult.opened, 'mobile: navigation did not open');
      assert(menuResult.closed, 'mobile: navigation did not close with Escape');
      assert(menuResult.focusVisible, 'mobile: menu toggle has no visible focus outline');
      assert(menuResult.focusReturned, 'mobile: focus did not return to the menu toggle');
    }
  }

  await client.send('Emulation.setEmulatedMedia', {
    media: 'screen',
    features: [{ name: 'prefers-reduced-motion', value: 'reduce' }],
  });
  const reducedMotion = await evaluate(`getComputedStyle(document.documentElement).scrollBehavior`);
  assert(reducedMotion === 'auto', `reduced motion: expected auto scroll behavior, found ${reducedMotion}`);

  browserErrors.forEach((error) => failures.push(error));
  if (failures.length) {
    console.error(`V2 browser QA failed with ${failures.length} issue(s):`);
    failures.forEach((failure) => console.error(`- ${failure}`));
    process.exitCode = 1;
  } else {
    console.log(`V2 browser QA passed at 1440px, 1024px, 768px, and 375px.`);
    console.log(`Verified 18 tool logos, 8 experience treatments, zero broken images, zero overflow, mobile keyboard navigation, reduced motion, and zero browser errors.`);
    console.log(`Screenshots: ${outputDir}`);
  }
} finally {
  client?.close();
  chrome.kill('SIGTERM');
  await Promise.race([
    new Promise((resolve) => chrome.once('exit', resolve)),
    new Promise((resolve) => setTimeout(resolve, 1500)),
  ]);
  await rm(profileDir, { recursive: true, force: true, maxRetries: 3, retryDelay: 100 });
}

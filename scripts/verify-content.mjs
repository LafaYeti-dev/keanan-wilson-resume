import fs from 'node:fs';

const source = fs.readFileSync(new URL('../source/resume-content.md', import.meta.url), 'utf8');
const page = fs.readFileSync(new URL('../index.html', import.meta.url), 'utf8');

function decodeEntities(value) {
  const namedEntities = new Map([
    ['amp', '&'],
    ['apos', "'"],
    ['gt', '>'],
    ['lt', '<'],
    ['quot', '"'],
  ]);

  return value
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/&#([0-9]+);/g, (_, code) => String.fromCodePoint(Number.parseInt(code, 10)))
    .replace(/&([a-z]+);/gi, (entity, name) => namedEntities.get(name) ?? entity);
}

function normalize(value) {
  return decodeEntities(value).replace(/\s+/g, ' ').trim();
}

function sourceLineToText(line) {
  return normalize(line
    .replace(/^•\s*/, '')
    .replace(/🔗\s*/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\*/g, ''));
}

const pageText = normalize(page
  .replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
  .replace(/<style\b[\s\S]*?<\/style>/gi, ' ')
  .replace(/<\/?(?:article|body|div|footer|h[1-6]|head|header|html|li|main|nav|p|section|ul)\b[^>]*>/gi, ' ')
  .replace(/<[^>]+>/g, ''));

const authoritativeLines = source
  .split(/\r?\n/)
  .filter((line) => line.trim() && !line.startsWith('# ') && !line.startsWith('> '))
  .map(sourceLineToText)
  .filter(Boolean)
  .flatMap((line) => line.includes(' · ') ? line.split(' · ') : [line]);

const missingLines = authoritativeLines.filter((line) => !pageText.includes(line));

const sourceUrls = [...new Set(
  [...source.matchAll(/\]\((https?:\/\/[^)]+)\)/g)].map((match) => match[1]),
)];
const pageHrefs = new Set(
  [...page.matchAll(/href="([^"]+)"/g)].map((match) => decodeEntities(match[1])),
);
const missingUrls = sourceUrls.filter((url) => !pageHrefs.has(url));

const requiredFragments = [
  'Featured Projects',
  'Bowers &amp; Wilkins - Pi8 Earbuds Product Launch',
  'src="./assets/projects/sound-united/bowers-wilkins-pi8-earbuds.webp"',
  'href="./styles.css?v=20260714-4"',
  'src="./script.js"',
];
const missingFragments = requiredFragments.filter((fragment) => !page.includes(fragment));
const rootRelativeAssets = [...page.matchAll(/(?:href|src)="(\/[^/"][^"]*)"/g)].map((match) => match[1]);

if (missingLines.length || missingUrls.length || missingFragments.length || rootRelativeAssets.length) {
  if (missingLines.length) {
    console.error('Missing authoritative content lines:');
    missingLines.forEach((line) => console.error(`- ${line}`));
  }

  if (missingUrls.length) {
    console.error('Missing authoritative links:');
    missingUrls.forEach((url) => console.error(`- ${url}`));
  }

  if (missingFragments.length) {
    console.error('Missing required site fragments:');
    missingFragments.forEach((fragment) => console.error(`- ${fragment}`));
  }

  if (rootRelativeAssets.length) {
    console.error('GitHub Pages-incompatible root-relative assets:');
    rootRelativeAssets.forEach((asset) => console.error(`- ${asset}`));
  }

  process.exit(1);
}

console.log(`Content verification passed: ${authoritativeLines.length} authoritative lines and ${sourceUrls.length} source links found.`);

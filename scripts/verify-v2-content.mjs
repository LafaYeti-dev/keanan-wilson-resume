import fs from 'node:fs';

const source = fs.readFileSync(new URL('../source/resume-content.md', import.meta.url), 'utf8');
const page = fs.readFileSync(new URL('../v2/index.html', import.meta.url), 'utf8');

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
  .replace(/<\/?(?:article|body|div|footer|h[1-6]|head|header|html|li|main|nav|p|section|span|ul)\b[^>]*>/gi, ' ')
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

const toolLogoCount = [...page.matchAll(/assets\/brands\/tools\//g)].length;
const experienceBrandCount = [...page.matchAll(/class="experience-brand/g)].length;
const missingRequirements = [];

if (toolLogoCount !== 18) {
  missingRequirements.push(`Expected 18 tool logos, found ${toolLogoCount}.`);
}

if (experienceBrandCount !== 8) {
  missingRequirements.push(`Expected 8 experience brand treatments, found ${experienceBrandCount}.`);
}

if (!page.includes('href="./styles.css?v=20260908-4"')) {
  missingRequirements.push('Missing versioned v2 stylesheet reference.');
}

if (!page.includes('src="../assets/profile/keanan-wilson-portrait.jpg"')) {
  missingRequirements.push('Missing project-relative portrait reference.');
}

const rootRelativeAssets = [...page.matchAll(/(?:href|src)="(\/[^/"][^"]*)"/g)].map((match) => match[1]);

if (missingLines.length || missingUrls.length || missingRequirements.length || rootRelativeAssets.length) {
  missingLines.forEach((line) => console.error(`Missing authoritative content: ${line}`));
  missingUrls.forEach((url) => console.error(`Missing authoritative link: ${url}`));
  missingRequirements.forEach((requirement) => console.error(requirement));
  rootRelativeAssets.forEach((asset) => console.error(`Root-relative asset: ${asset}`));
  process.exit(1);
}

console.log(`V2 content verification passed: ${authoritativeLines.length} authoritative lines, ${sourceUrls.length} links, 18 tool logos, and 8 experience brand treatments found.`);

import fs from 'node:fs';
import path from 'node:path';

const file = path.resolve('content/site-content.json');
const content = JSON.parse(fs.readFileSync(file, 'utf8'));
const errors = [];

const required = (value, label) => {
  if (value === undefined || value === null || value === '') errors.push(`${label} is required`);
};

const email = (value, label) => {
  required(value, label);
  if (typeof value === 'string' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    errors.push(`${label} is not a valid email`);
  }
};

const safeUrl = (value, label) => {
  required(value, label);
  if (typeof value !== 'string') return;
  let parsed;
  try {
    parsed = new URL(value);
  } catch {
    errors.push(`${label} is not a valid URL`);
    return;
  }
  if (parsed.protocol !== 'https:') errors.push(`${label} must use https`);
  if (!['www.nutech-integrasi.com','nutech-integrasi.com'].includes(parsed.hostname)) {
    errors.push(`${label} must point to an approved Nutech domain`);
  }
};

required(content.site?.established, 'site.established');
required(content.site?.group, 'site.group');
email(content.site?.emails?.info, 'site.emails.info');
email(content.site?.emails?.hr, 'site.emails.hr');
email(content.site?.emails?.wbs, 'site.emails.wbs');

for (const [name, office] of Object.entries(content.site?.offices ?? {})) {
  required(office.label, `site.offices.${name}.label`);
  required(office.address, `site.offices.${name}.address`);
}

const collections = [
  ['home.solutions', content.home?.solutions],
  ['home.capabilities', content.home?.capabilities],
  ['home.projects', content.home?.projects],
  ['home.deploymentPhotos', content.home?.deploymentPhotos],
  ['solutions.domains', content.solutions?.domains],
  ['solutions.featuredProducts', content.solutions?.featuredProducts],
  ['career.openings', content.career?.openings],
  ['governance.documents', content.governance?.documents],
  ['governance.annualReports', content.governance?.annualReports],
];

for (const [label, value] of collections) {
  if (!Array.isArray(value) || value.length === 0) errors.push(`${label} must be a non-empty array`);
}

for (const [i, item] of (content.home?.deploymentPhotos ?? []).entries()) {
  safeUrl(item.src, `home.deploymentPhotos[${i}].src`);
  required(item.title, `home.deploymentPhotos[${i}].title`);
}

for (const [i, item] of (content.solutions?.featuredProducts ?? []).entries()) {
  safeUrl(item.url, `solutions.featuredProducts[${i}].url`);
  required(item.name, `solutions.featuredProducts[${i}].name`);
}

for (const [i, item] of (content.career?.openings ?? []).entries()) {
  required(item.title, `career.openings[${i}].title`);
  if (!Array.isArray(item.requirements) || item.requirements.length === 0) {
    errors.push(`career.openings[${i}].requirements must be a non-empty array`);
  }
}

if (errors.length) {
  console.error('Content validation failed:');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log('Content validation passed.');

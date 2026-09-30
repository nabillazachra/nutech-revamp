#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const outDir = path.resolve('out');
const requiredFiles = [
  'index.html',
  'solutions/index.html',
  'experience/index.html',
  'experience/mrt-jakarta-emv/index.html',
  'company/index.html',
  'gcg/index.html',
  'career/index.html',
  'contact/index.html',
  '404.html',
  'robots.txt',
  'sitemap.xml',
  'health.json',
];

const errors = [];

for (const file of requiredFiles) {
  const fullPath = path.join(outDir, file);
  if (!fs.existsSync(fullPath)) errors.push('Missing static export file: ' + file);
  else console.log('OK ' + file);
}

const homepage = path.join(outDir, 'index.html');
if (fs.existsSync(homepage)) {
  const html = fs.readFileSync(homepage, 'utf8');
  if (!html.includes('noindex')) errors.push('Preview export must include noindex');
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  if (basePath && !html.includes(basePath + '/_next/')) {
    errors.push('Exported asset URLs do not include GitHub Pages base path');
  }
}

const robots = path.join(outDir, 'robots.txt');
if (fs.existsSync(robots)) {
  const text = fs.readFileSync(robots, 'utf8');
  if (!text.includes('Disallow: /')) errors.push('Preview robots.txt must block indexing');
}

const health = path.join(outDir, 'health.json');
if (fs.existsSync(health)) {
  const data = JSON.parse(fs.readFileSync(health, 'utf8'));
  if (data.status !== 'ok') errors.push('health.json must report ok');
}

if (errors.length) {
  console.error('Static export smoke test failed:');
  for (const error of errors) console.error('- ' + error);
  process.exit(1);
}

console.log('Static export smoke test passed.');

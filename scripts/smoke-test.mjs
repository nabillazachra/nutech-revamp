#!/usr/bin/env node
import { spawn } from 'node:child_process';

const baseUrl = 'http://127.0.0.1:3000';
const routes = [
  '/',
  '/solutions',
  '/experience',
  '/experience/mrt-jakarta-emv',
  '/company',
  '/gcg',
  '/career',
  '/contact',
  '/robots.txt',
  '/sitemap.xml',
];

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function waitForServer() {
  for (let attempt = 0; attempt < 30; attempt += 1) {
    try {
      const response = await fetch(baseUrl, { redirect: 'manual' });
      if (response.ok) return;
    } catch {}
    await sleep(1000);
  }
  throw new Error('Next.js server did not become ready in time');
}

function assertHeader(response, name, expected) {
  const value = response.headers.get(name);
  if (!value || !value.toLowerCase().includes(expected.toLowerCase())) {
    throw new Error(`Expected ${name} to include "${expected}", got "${value}"`);
  }
}

const server = spawn('npm', ['run', 'start'], {
  env: { ...process.env, HOSTNAME: '127.0.0.1', PORT: '3000', ALLOW_INDEXING: 'false' },
  stdio: 'inherit',
});

try {
  await waitForServer();

  for (const route of routes) {
    const response = await fetch(baseUrl + route, { redirect: 'manual' });
    if (!response.ok) {
      throw new Error(`${route} returned HTTP ${response.status}`);
    }
    console.log(`OK ${response.status} ${route}`);
  }

  const homepage = await fetch(baseUrl);
  assertHeader(homepage, 'x-content-type-options', 'nosniff');
  assertHeader(homepage, 'x-frame-options', 'DENY');
  assertHeader(homepage, 'referrer-policy', 'strict-origin-when-cross-origin');
  assertHeader(homepage, 'content-security-policy', "default-src 'self'");

  const robots = await (await fetch(baseUrl + '/robots.txt')).text();
  if (!robots.includes('Disallow: /')) {
    throw new Error('Preview robots.txt must block indexing when ALLOW_INDEXING=false');
  }

  const html = await homepage.text();
  if (!html.includes('noindex')) {
    throw new Error('Preview HTML must include noindex metadata when ALLOW_INDEXING=false');
  }

  console.log('Runtime smoke test passed.');
} finally {
  server.kill('SIGTERM');
}

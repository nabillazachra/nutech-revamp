# Nutech Integrasi — Landing Page Revamp Concept

A first-pass corporate website revamp built with **React + Next.js App Router**.

## Deliverables
- `docs/ux-research.md` — desk research, heuristic audit, user hypotheses and recommended IA
- `docs/lofi-homepage.md` — homepage low-fidelity structure
- `app/page.js` — React homepage implementation
- `app/globals.css` — responsive design system and styling
- `components/` — reusable brand/icon components

## Stack
- Next.js 15
- React 19
- CSS (no UI framework dependency in the prototype)

Why Next.js: SEO, server rendering, routing, image optimization, metadata, good Core Web Vitals baseline and straightforward expansion into product/case-study pages.

## Run locally
```bash
npm install
npm run dev
```
Then open `http://localhost:3000`.

## Production follow-up
1. Replace text-based prototype logo with official SVG/PNG brand asset.
2. Replace abstract project visuals with approved Nutech photography.
3. Add real solution detail pages and case-study pages.
4. Connect CMS (recommended: headless WordPress, Strapi or Sanity depending governance).
5. Build URL redirect map from the current WordPress site.
6. Add GA4, Search Console, schema.org Organization/Service metadata and consent layer.
7. Accessibility + Lighthouse QA before deployment.

## Brand note
The prototype uses an approximate orange/graphite palette derived from Nutech's public visual identity. Corporate brand guideline values should override these tokens when the official guideline is available.

## Routes

- `/` — Hi-Fi editorial homepage
- `/solutions` — Product & solution overview
- `/company` — Company positioning, vision, mission and capabilities
- `/gcg` — Good Corporate Governance information architecture
- `/career` — Career opportunities
- `/contact` — Corporate contact channels

## Current design phase

The repository is now at **Hi-Fi v1**. The visual direction intentionally avoids generic SaaS/card-heavy patterns and uses a more corporate editorial system: stronger typography, linear information hierarchy, technical system diagrams, restrained orange accents and fewer decorative UI elements.

Next production passes should prioritize approved Nutech brand assets, authentic project photography, case-study detail pages, CMS-backed content, redirect mapping from the existing site, accessibility validation and analytics.

## Security baseline

This repository is configured as a public-safe frontend baseline:

- exact direct dependency versions;
- patched Next.js 15 release line;
- security response headers and a restrictive baseline CSP;
- no runtime secrets required by the prototype;
- `.env*` files ignored except `.env.example`;
- GitHub Dependabot for npm and Actions updates;
- CI production dependency audit and production build;
- GitHub CodeQL static analysis;
- `SECURITY.md` responsible-disclosure guidance.

### Secret handling

Keep API keys, CMS credentials, SMTP credentials, database URLs, tokens, and private endpoints in the deployment environment only. Never place a secret in a variable prefixed with `NEXT_PUBLIC_`, because those values are bundled for the browser.

### CSP note

Next.js currently emits framework inline bootstrap scripts for this App Router setup, so the baseline policy permits inline framework scripts. When the project gains authentication, forms, CMS mutation, or other sensitive flows, move to a nonce-based CSP generated per request and remove `unsafe-inline` from `script-src`.

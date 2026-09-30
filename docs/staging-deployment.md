# Staging deployment

## Recommended provider

Vercel is the preferred staging target for this Next.js App Router project because it can build the repository without changing the application architecture.

## Required environment values

### Preview / staging

```
ALLOW_INDEXING=false
```

`SITE_URL` is optional for Vercel preview deployments because the application can derive its current preview hostname from `VERCEL_URL`.

### Production

```
SITE_URL=https://www.nutech-integrasi.com
ALLOW_INDEXING=true
```

Do not set `ALLOW_INDEXING=true` on preview deployments.

## Deployment acceptance checks

Before a preview is accepted:

1. CI must pass.
2. CodeQL must pass.
3. `/api/health` must return HTTP 200.
4. `/robots.txt` must contain `Disallow: /` on staging.
5. The rendered HTML must include `noindex` on staging.
6. Security response headers must be present.
7. Homepage, Solutions, Experience, one case-study detail, Company, GCG, Career and Contact must return HTTP 200.
8. Desktop and mobile layouts must be visually reviewed.
9. External Nutech media must load without mixed content.
10. No production DNS changes are made during staging review.

## Production cutover prerequisites

- approved official logo master;
- approved high-resolution project assets moved off legacy WordPress media paths where possible;
- legacy URL redirect map;
- final CMS integration;
- analytics/privacy configuration;
- accessibility QA;
- Core Web Vitals review;
- backup and rollback plan;
- production DNS change approved by Nutech.

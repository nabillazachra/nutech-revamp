# GitHub Pages deployment

## Hosting model

This project is deployed as a **static Next.js export** to GitHub Pages.

Repository:

`nabillazachra/nutech-revamp`

Expected project-site URL:

`https://nabillazachra.github.io/nutech-revamp/`

## One-time repository setting

GitHub Pages must be enabled once by the repository owner:

**Settings → Pages → Build and deployment → Source → GitHub Actions**

The workflow cannot perform this account-level enablement with the repository GitHub Actions token.

## Build configuration

The Pages workflow sets:

```
NEXT_PUBLIC_BASE_PATH=/nutech-revamp
SITE_URL=https://nabillazachra.github.io/nutech-revamp
ALLOW_INDEXING=true
```

CI uses the same base path but keeps `ALLOW_INDEXING=false` so it can verify preview noindex behavior.

## Pipeline

Every push to `main` runs:

1. dependency installation;
2. corporate content validation;
3. production dependency security audit;
4. static Next.js export;
5. static export smoke test in CI;
6. CodeQL;
7. GitHub Pages artifact build and deployment.

## Static-hosting constraints

GitHub Pages does not provide a Node.js/Next.js runtime.

Therefore:

- application pages must be statically exportable;
- dynamic case-study routes must use `generateStaticParams`;
- no server actions;
- no runtime API endpoints;
- no middleware dependency;
- no server-side form processing;
- security response headers normally configured by Next.js cannot be relied on.

A static `health.json` marker is published instead of a runtime health API.

## Production checklist

- official Nutech logo master;
- approved project imagery stored under controlled assets;
- accessibility review;
- mobile/desktop visual QA;
- legacy URL redirect strategy if the GitHub Pages URL later replaces the existing public site;
- analytics/privacy review;
- CMS strategy appropriate for static generation or a separate content build trigger.

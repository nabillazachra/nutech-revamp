# CMS-ready content architecture

## Current model

The UI reads corporate content through `lib/content.js`.

Current source:

```
content/site-content.json
        ↓
lib/content.js
        ↓
Next.js server components
```

This deliberately keeps page components independent from the storage mechanism.

## Recommended production path

Because the current Nutech website already uses WordPress, the lowest-friction migration path is **headless WordPress** first:

```
WordPress CMS
   ↓ REST API / WPGraphQL
lib/content.js
   ↓
Next.js App Router
```

The frontend routes and components do not need to change when the source switches from local JSON to WordPress. Only the adapter should change.

Alternative CMS platforms such as Strapi or Sanity can use the same adapter boundary if governance or editorial requirements justify moving away from WordPress.

## Content groups

The current content model separates:

- corporate identity and contact data;
- homepage solution and capability teasers;
- product / solution catalogue;
- company purpose, vision and mission;
- career openings;
- governance documents and annual-report years;
- case-study data in `content/experience.js`.

## Validation

`npm run validate:content` runs before every production CI build.

The validator currently checks:

- required corporate fields;
- valid email formatting;
- non-empty required collections;
- HTTPS for public content links;
- external URLs restricted to approved Nutech domains;
- career requirements present for each role.

This is intentionally dependency-free so content validation does not introduce another supply-chain package.

## Migration rules

1. CMS data must be treated as untrusted input.
2. Do not render arbitrary CMS HTML with `dangerouslySetInnerHTML`.
3. Prefer structured fields and React components.
4. Restrict remote images to approved asset origins.
5. Store credentials only as server-side environment variables.
6. Never expose WordPress application passwords, GraphQL tokens or CMS credentials using `NEXT_PUBLIC_`.
7. Preview/staging deployments remain `noindex`.
8. Production indexing is enabled only with `ALLOW_INDEXING=true`.
9. Legacy WordPress URLs require an explicit redirect map before production cutover.
10. Case-study performance metrics must remain unpublished until approved for external communication.

## Future adapter contract

A future CMS adapter should continue exporting these functions:

- `getSiteContent()`
- `getHomeContent()`
- `getSolutionsContent()`
- `getCompanyContent()`
- `getCareerContent()`
- `getGovernanceContent()`
- `getContactContent()`

This keeps CMS implementation details out of the presentation layer.

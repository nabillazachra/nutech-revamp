export const dynamic = 'force-static';

export default function robots() {
  const allowIndexing = process.env.ALLOW_INDEXING === 'true';
  const siteUrl = process.env.SITE_URL || 'https://www.nutech-integrasi.com';

  return {
    rules: allowIndexing
      ? [{ userAgent: '*', allow: '/' }]
      : [{ userAgent: '*', disallow: '/' }],
    sitemap: allowIndexing ? `${siteUrl}/sitemap.xml` : undefined,
  };
}

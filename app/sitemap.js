export default function sitemap() {
  const siteUrl = process.env.SITE_URL || 'https://www.nutech-integrasi.com';
  const routes = ['', '/solutions', '/experience', '/company', '/gcg', '/career', '/contact'];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}

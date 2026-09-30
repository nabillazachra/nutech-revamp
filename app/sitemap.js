import { experienceCases } from '../content/experience';

export default function sitemap() {
  const siteUrl = process.env.SITE_URL || 'https://www.nutech-integrasi.com';
  const routes = ['', '/solutions', '/experience', '/company', '/gcg', '/career', '/contact'];
  const caseRoutes = experienceCases.map((item)=>`/experience/${item.slug}`);

  return [...routes, ...caseRoutes].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.startsWith('/experience/') ? 0.7 : 0.8,
  }));
}

import './globals.css';
import { getSiteContent } from '../lib/content';
import { getSiteUrl } from '../lib/site-url';

const allowIndexing = process.env.ALLOW_INDEXING === 'true';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const siteUrl = getSiteUrl();
const { site } = getSiteContent();

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Nutech Integrasi | ICT System Integrator',
    template: '%s | Nutech Integrasi',
  },
  description:
    'PT Nutech Integrasi delivers end-to-end ICT system integration across transportation, payments, security, telemetry, financial services, maintenance and repair.',
  applicationName: 'Nutech Integrasi',
  icons: {
    icon: basePath + '/favicon.png',
    shortcut: basePath + '/favicon.png',
    apple: basePath + '/favicon.png',
  },
  robots: {
    index: allowIndexing,
    follow: allowIndexing,
    googleBot: {
      index: allowIndexing,
      follow: allowIndexing,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_ID',
    siteName: 'Nutech Integrasi',
    url: siteUrl,
    title: 'Nutech Integrasi | ICT System Integrator',
    description:
      'Integrated ICT solutions for transportation, payment, security, telemetry and enterprise operations.',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'PT Nutech Integrasi',
  url: siteUrl,
  foundingDate: site.established,
  email: site.emails.info,
  telephone: site.phones.management,
  parentOrganization: {
    '@type': 'Organization',
    name: site.group,
  },
  logo: siteUrl + '/brand/nutech-logo-light.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.offices.management.address,
    addressLocality: 'Jakarta Selatan',
    addressRegion: 'DKI Jakarta',
    postalCode: '12510',
    addressCountry: 'ID',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="referrer" content="strict-origin-when-cross-origin" />
      </head>
      <body>
        <a className="skipLink" href="#page-content">Skip to content</a>
        <div id="page-content" tabIndex="-1">{children}</div>
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      </body>
    </html>
  );
}

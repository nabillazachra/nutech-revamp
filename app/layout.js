import './globals.css';
import { getSiteContent } from '../lib/content';

const allowIndexing = process.env.ALLOW_INDEXING === 'true';
const siteUrl = process.env.SITE_URL || 'https://www.nutech-integrasi.com';
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
  alternates: {
    canonical: '/',
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
    url: '/',
    title: 'Nutech Integrasi | ICT System Integrator',
    description:
      'Integrated ICT solutions for transportation, payment, security, telemetry and enterprise operations.',
  },
  twitter: {
    card: 'summary_large_image',
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
      <body>
        <a className="skipLink" href="#page-content">Skip to content</a>
        <div id="page-content" tabIndex="-1">{children}</div>
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      </body>
    </html>
  );
}

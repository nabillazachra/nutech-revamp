import './globals.css';

const allowIndexing = process.env.ALLOW_INDEXING === 'true';

export const metadata = {
  title: {
    default: 'Nutech Integrasi | ICT System Integrator',
    template: '%s | Nutech Integrasi',
  },
  description:
    'PT Nutech Integrasi delivers end-to-end ICT system integration across transportation, payments, security, telemetry, financial services, maintenance and repair.',
  applicationName: 'Nutech Integrasi',
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a className="skipLink" href="#page-content">Skip to content</a>
        <div id="page-content" tabIndex="-1">{children}</div>
      </body>
    </html>
  );
}

import './globals.css';

export const metadata = {
  title: 'Nutech Integrasi | Simplifying Mobility with Integration',
  description:
    'PT Nutech Integrasi delivers end-to-end ICT system integration for transportation, payments, security, telemetry, financial services, maintenance and repair.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

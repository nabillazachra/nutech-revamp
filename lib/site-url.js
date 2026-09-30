export function getSiteUrl(){
  return (process.env.SITE_URL || 'https://nabillazachra.github.io/nutech-revamp').replace(/\/$/, '');
}

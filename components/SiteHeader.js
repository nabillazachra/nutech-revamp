import Link from 'next/link';
import Brand from './Brand';
import { Icon } from './Icons';

const nav = [
  ['Solutions','/solutions'],
  ['Experience','/experience'],
  ['Company','/company'],
  ['GCG','/gcg'],
  ['Career','/career'],
];

export default function SiteHeader({ active = '' }) {
  return (
    <header className="siteHeader">
      <div className="container navBar">
        <Link href="/" aria-label="Nutech Integrasi home"><Brand /></Link>
        <nav className="desktopNav" aria-label="Primary navigation">
          {nav.map(([label,href]) => (
            <Link key={label} className={active === label.toLowerCase() ? 'active' : ''} href={href}>{label}</Link>
          ))}
        </nav>
        <Link className="navCta" href="/contact">Talk to Nutech <Icon name="arrow" size={16}/></Link>
      </div>
    </header>
  );
}

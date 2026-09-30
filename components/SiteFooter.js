import Link from 'next/link';
import Brand from './Brand';
import { getContactContent } from '../lib/content';

const { emails, phones, offices } = getContactContent();

export default function SiteFooter(){
  return (
    <footer>
      <div className="container footerGrid footerGridWide">
        <div>
          <Brand light />
          <p>PT Nutech Integrasi<br/>ICT System Integrator · TelkomGroup</p>
        </div>
        <div>
          <strong>Explore</strong>
          <Link href="/solutions">Solutions</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/company">Company</Link>
        </div>
        <div>
          <strong>Corporate</strong>
          <Link href="/gcg">GCG</Link>
          <Link href="/career">Career</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <strong>Management Office</strong>
          <span>{offices.management.name}</span>
          <span>{offices.management.address.split(',')[0]}</span>
          <span>{offices.management.address.split(',').slice(1).join(',').trim()}</span>
          <a href={'tel:'+phones.management}>{phones.management}</a>
          <a href={'mailto:'+emails.info}>{emails.info}</a>
        </div>
      </div>
      <div className="container footerBottom">© 2026 PT Nutech Integrasi — Website revamp concept</div>
    </footer>
  );
}

import Link from 'next/link';
import Brand from './Brand';

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
          <Link href="/#experience">Experience</Link>
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
          <span>Gedung Nutech</span>
          <span>Jl. Buncit Raya Kav. 99</span>
          <span>Pejaten Barat, Jakarta Selatan 12510</span>
          <a href="tel:+622127808111">+62 21 2780 8111</a>
          <a href="mailto:info@nutech-integrasi.com">info@nutech-integrasi.com</a>
        </div>
      </div>
      <div className="container footerBottom">© 2026 PT Nutech Integrasi — Website revamp concept</div>
    </footer>
  );
}

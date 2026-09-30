import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { Icon } from '../../components/Icons';

export const metadata = {
  title: 'Good Corporate Governance | Nutech Integrasi',
  description: 'Good Corporate Governance information and public corporate governance references for PT Nutech Integrasi.',
};

const docs=['Corporate Governance Guidelines','Corporate Code of Conduct','Board of Commissioners Work Guidelines','Board of Directors Work Guidelines','Risk Management Guidelines','Accounting Policy Guidelines','Procurement Guidelines','Gratification Policy','Whistle Blower System Policy','Information Security Policy','Compliance Guidelines','Anti-Fraud Policy','Safety Management Policy','Consumer Protection Policy'];

export default function GcgPage(){
  return <main>
    <SiteHeader active="gcg"/>
    <section className="pageHero">
      <div className="container pageHeroGrid">
        <div><span className="kicker">GOOD CORPORATE GOVERNANCE</span><h1>Governance information made easier to <em>find and review.</em></h1></div>
        <p>This revamp groups governance references into a clearer information architecture while retaining the public-document context available on Nutech's existing corporate site.</p>
      </div>
    </section>
    <section className="section alt">
      <div className="container governanceGrid">
        {docs.map((doc,i)=><article key={doc}><span>{String(i+1).padStart(2,'0')}</span><h3>{doc}</h3><a href="https://www.nutech-integrasi.com/gcg/" target="_blank" rel="noopener noreferrer">Open current source <Icon name="arrow" size={16}/></a></article>)}
      </div>
    </section>
    <section className="section">
      <div className="container editorialBand">
        <div><span className="kicker">ANNUAL REPORT</span><h2>Corporate reporting, year by year.</h2></div>
        <div className="yearPills">{['2025','2024','2023','2022','2021'].map(y=><a key={y} href="https://www.nutech-integrasi.com/gcg/" target="_blank" rel="noopener noreferrer">{y}</a>)}</div>
      </div>
    </section>
    <SiteFooter/>
  </main>
}

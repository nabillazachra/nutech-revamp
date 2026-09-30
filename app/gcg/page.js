import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { Icon } from '../../components/Icons';

export const metadata = {
  title: 'Good Corporate Governance | Nutech Integrasi',
  description: 'Good Corporate Governance information, annual reports and complaint channels for PT Nutech Integrasi.',
};

const docs=[
  'Corporate Governance Guidelines',
  'Corporate Code of Conduct',
  'Board of Commissioners Work Guidelines',
  'Board of Directors Work Guidelines',
  'Risk Management Guidelines',
  'Accounting Policy Guidelines',
  'Procurement Guidelines',
  'Gratification Policy',
  'Whistle Blower System Policy',
  'Information Security Policy',
  'Communication Policy & Procedure',
  'Compliance Guidelines',
  'Anti-Fraud Policy',
  'Safety Management Policy',
  'Consumer Protection Policy'
];

export default function GcgPage(){
  return <main>
    <SiteHeader active="gcg"/>
    <section className="pageHero">
      <div className="container pageHeroGrid">
        <div><span className="kicker">GOOD CORPORATE GOVERNANCE</span><h1>Governance information made easier to <em>find and review.</em></h1></div>
        <p>The revamp preserves Nutech's public governance content while grouping policies, reports and complaint channels into a clearer corporate information structure.</p>
      </div>
    </section>

    <section className="section alt">
      <div className="container governanceGrid">
        {docs.map((doc,i)=><article key={doc}>
          <span>{String(i+1).padStart(2,'0')}</span>
          <h3>{doc}</h3>
          <a href="https://www.nutech-integrasi.com/gcg/" target="_blank" rel="noopener noreferrer">Open current source <Icon name="arrow" size={16}/></a>
        </article>)}
      </div>
    </section>

    <section className="section">
      <div className="container editorialBand">
        <div><span className="kicker">ANNUAL REPORT</span><h2>Corporate reporting, year by year.</h2></div>
        <div className="yearPills">
          {['2025','2024','2023','2022','2021'].map(y=><a key={y} href="https://www.nutech-integrasi.com/gcg/" target="_blank" rel="noopener noreferrer">{y}</a>)}
        </div>
      </div>
    </section>

    <section className="section dark gcgComplaint">
      <div className="container editorialBand">
        <div>
          <span className="kicker light">COMPLAINT & WBS CHANNEL</span>
          <h2>Published channels for complaints and whistleblowing.</h2>
        </div>
        <div className="complaintLinks">
          <a href="tel:+6281117003237">0811-17003237 <Icon name="arrow" size={17}/></a>
          <a href="mailto:nutech.wbs@nutech-integrasi.com">nutech.wbs@nutech-integrasi.com <Icon name="arrow" size={17}/></a>
        </div>
      </div>
    </section>
    <SiteFooter/>
  </main>
}

import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { Icon } from '../../components/Icons';
import { getContactContent } from '../../lib/content';

export const metadata = {
  title: 'Contact | Nutech Integrasi',
  description: 'Contact PT Nutech Integrasi for system integration, transportation, payment, security and maintenance solutions.',
};

const { emails, phones, offices } = getContactContent();

export default function ContactPage(){
  return <main>
    <SiteHeader/>
    <section className="pageHero contactHero">
      <div className="container pageHeroGrid">
        <div><span className="kicker">CONTACT NUTECH</span><h1>Start with the operational problem. <em>We connect the system.</em></h1></div>
        <p>Use Nutech's published corporate channels for business and solution enquiries. This prototype intentionally avoids collecting personal information through an unsecured web form.</p>
      </div>
    </section>

    <section className="section">
      <div className="container contactGrid contactGridFour">
        <a className="contactCard" href={'mailto:'+emails.info}>
          <Icon name="mail" size={28}/>
          <small>Email</small>
          <h3>{emails.info}</h3>
          <span>Corporate & solution enquiries</span>
        </a>
        <a className="contactCard" href={'tel:'+phones.management}>
          <Icon name="integration" size={28}/>
          <small>Management Office</small>
          <h3>{phones.management}</h3>
          <span>Gedung Nutech · Buncit Raya</span>
        </a>
        <div className="contactCard">
          <Icon name="pin" size={28}/>
          <small>Management Office</small>
          <h3>{offices.management.address.split(',')[0]}</h3>
          <span>{offices.management.address.split(',').slice(1).join(',').trim()}</span>
        </div>
        <div className="contactCard">
          <Icon name="pin" size={28}/>
          <small>Operational & Warehouse</small>
          <h3>{offices.warehouse.address.split(',')[0]}</h3>
          <span>{offices.warehouse.address.split(',').slice(1).join(',').trim()} · {phones.warehouse}</span>
        </div>
      </div>
    </section>

    <section className="section alt">
      <div className="container editorialBand">
        <div>
          <span className="kicker">BUSINESS ENQUIRY</span>
          <h2>Bring the requirement, not a pre-selected technology stack.</h2>
        </div>
        <p>Nutech's role as a system integrator means the conversation can begin from the operational objective, system boundary, interfaces, SLA, lifecycle support and deployment constraints.</p>
      </div>
    </section>
    <SiteFooter/>
  </main>
}

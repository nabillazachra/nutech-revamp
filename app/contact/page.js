import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { Icon } from '../../components/Icons';

export const metadata = {
  title: 'Contact | Nutech Integrasi',
  description: 'Contact PT Nutech Integrasi for system integration, transportation, payment, security and maintenance solutions.',
};

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
        <a className="contactCard" href="mailto:info@nutech-integrasi.com">
          <Icon name="mail" size={28}/>
          <small>Email</small>
          <h3>info@nutech-integrasi.com</h3>
          <span>Corporate & solution enquiries</span>
        </a>
        <a className="contactCard" href="tel:+622127808111">
          <Icon name="integration" size={28}/>
          <small>Management Office</small>
          <h3>+62 21 2780 8111</h3>
          <span>Gedung Nutech · Buncit Raya</span>
        </a>
        <div className="contactCard">
          <Icon name="pin" size={28}/>
          <small>Management Office</small>
          <h3>Jl. Buncit Raya Kav. 99</h3>
          <span>Pejaten Barat, Pasar Minggu, Jakarta Selatan 12510</span>
        </div>
        <div className="contactCard">
          <Icon name="pin" size={28}/>
          <small>Operational & Warehouse</small>
          <h3>Jl. Tanjung Barat No. 17</h3>
          <span>Pasar Minggu, Jakarta Selatan 12510 · +62 21 780 3827</span>
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

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
        <p>Use the channels below for corporate and solution enquiries. No web form is introduced in this prototype, avoiding unnecessary collection of personal information before a secure backend is defined.</p>
      </div>
    </section>
    <section className="section">
      <div className="container contactGrid">
        <a className="contactCard" href="mailto:info@nutech-integrasi.com"><Icon name="mail" size={28}/><small>Email</small><h3>info@nutech-integrasi.com</h3><span>Corporate & solution enquiries</span></a>
        <a className="contactCard" href="tel:+62217803827"><Icon name="integration" size={28}/><small>Phone</small><h3>+62 21 780 3827</h3><span>Business hours · Jakarta</span></a>
        <div className="contactCard"><Icon name="pin" size={28}/><small>Office</small><h3>Jl. Tanjung Barat Raya No. 17</h3><span>Pasar Minggu, Jakarta Selatan, Indonesia</span></div>
      </div>
    </section>
    <SiteFooter/>
  </main>
}

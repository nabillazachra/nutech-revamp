import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { Icon } from '../../components/Icons';
import { getCompanyContent } from '../../lib/content';

export const metadata = {
  title: 'Company | Nutech Integrasi',
  description: 'About PT Nutech Integrasi, an ICT system integrator established in 2006 and part of TelkomGroup.',
};

const { purpose, vision, capabilities, mission } = getCompanyContent();

export default function CompanyPage(){
  return <main>
    <SiteHeader active="company"/>
    <section className="pageHero">
      <div className="container pageHeroGrid">
        <div><span className="kicker">ABOUT NUTECH</span><h1>Integrating technology for public infrastructure <em>since 2006.</em></h1></div>
        <p>PT Nutech Integrasi is part of TelkomGroup and focuses on Information & Communication Technology system integration across transportation, finance, logistics, utilities and other operational environments.</p>
      </div>
    </section>
    <section className="section alt">
      <div className="container companyStatement">
        <div><small>Purpose</small><h2>{purpose}</h2></div>
        <div><small>Vision</small><h2>{vision}</h2></div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="sectionHead"><div><span className="kicker">NUTECH FOCUSES</span><h2>Capability across the solution lifecycle.</h2></div><p>These four focus areas remain the backbone of how Nutech positions and delivers integrated ICT solutions.</p></div>
        <div className="capabilityGrid">{capabilities.map(({icon,title,description},i)=><article key={title}><div><span>0{i+1}</span><Icon name={icon}/></div><h3>{title}</h3><p>{description}</p></article>)}</div>
      </div>
    </section>
    <section className="section dark">
      <div className="container missionGrid">
        <div><span className="kicker light">MISSION</span><h2>Operate with customer value, safety and digital talent at the core.</h2></div>
        <ol>{mission.map(item=><li key={item}>{item}</li>)}</ol>
      </div>
    </section>
    <SiteFooter/>
  </main>
}

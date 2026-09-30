import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { Icon } from '../../components/Icons';

export const metadata = {
  title: 'Company | Nutech Integrasi',
  description: 'About PT Nutech Integrasi, an ICT system integrator established in 2006 and part of TelkomGroup.',
};

const values=[
  ['integration','System Integration & Solution','Combining software, hardware, network and specialized products around customer requirements.'],
  ['local','Production & Local Content','Developing domestic capability and local engineering for relevant ICT products and solutions.'],
  ['wrench','Operation & Maintenance','Structured service operations supporting continuity, availability and maintainability.'],
  ['repair','Repair Facility','Repair capability and technical support designed to improve asset serviceability and turnaround.'],
];

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
        <div><small>Purpose</small><h2>Become a trusted and healthy growth company.</h2></div>
        <div><small>Vision</small><h2>Trusted and reliable partner in developing digital ecosystems for public transportation & security systems.</h2></div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="sectionHead"><div><span className="kicker">NUTECH FOCUSES</span><h2>Capability across the solution lifecycle.</h2></div><p>These four focus areas remain the backbone of how Nutech positions and delivers integrated ICT solutions.</p></div>
        <div className="capabilityGrid">{values.map(([icon,title,desc],i)=><article key={title}><div><span>0{i+1}</span><Icon name={icon}/></div><h3>{title}</h3><p>{desc}</p></article>)}</div>
      </div>
    </section>
    <section className="section dark">
      <div className="container missionGrid">
        <div><span className="kicker light">MISSION</span><h2>Operate with customer value, safety and digital talent at the core.</h2></div>
        <ol><li>Deliver added value to customers and stakeholders.</li><li>Provide convenience and safety in the mass transportation ecosystem.</li><li>Develop digital talent and culture.</li></ol>
      </div>
    </section>
    <SiteFooter/>
  </main>
}

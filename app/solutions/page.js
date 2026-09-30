import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { Icon } from '../../components/Icons';

export const metadata = {
  title: 'Solutions | Nutech Integrasi',
  description: 'Explore Nutech Integrasi solutions across intelligent transportation, electronic payment, security and telemetry, and financial services.',
};

const domains = [
  ['transit','Intelligent Transportation System','Integrated mobility systems spanning automated fare collection, reservation and queueing, toll collection, smart parking, fleet and supporting transport platforms.', ['Railway / BRT / Seaport AFC','Reservation & Queueing','Electronic Toll Collection','Smart Parking & Fleet']],
  ['payment','Electronic Payment Integration','Integration across smartcard, e-money, EDC, internet payment and settlement layers for multi-channel transaction ecosystems.', ['Smartcard Platform','E-money Integration','EDC Integration','Payment Gateway & Settlement']],
  ['shield','Security, Sensory & Telemetry','Connected physical security and sensing capabilities for transportation, smart buildings, public infrastructure and operational monitoring.', ['Access Control & Surveillance','Biometric Solution','Early Warning System','Telemetry & Sensor Integration']],
  ['banking','Financial & Banking Solution','Device and software integration for transaction environments, supported by enterprise-grade banking hardware and integration services.', ['ATM / CRM / VTM','EDC & Mobile POS','Intelligent Deposit Machine','OEM Cash & Coin Modules']],
];

export default function SolutionsPage(){
  return <main>
    <SiteHeader active="solutions"/>
    <section className="pageHero darkHero">
      <div className="container pageHeroGrid">
        <div><span className="kicker light">PRODUCT & SOLUTION</span><h1>Technology domains designed to work <em>as one.</em></h1></div>
        <p>Nutech combines devices, applications, networks and integration services so each solution can operate inside a larger customer ecosystem—not as an isolated product.</p>
      </div>
    </section>
    <section className="section">
      <div className="container solutionRows">
        {domains.map(([icon,title,desc,items],i)=><article className="solutionRow" key={title}>
          <div className="solutionNumber">0{i+1}</div>
          <div className="solutionIcon"><Icon name={icon} size={30}/></div>
          <div><h2>{title}</h2><p>{desc}</p></div>
          <ul>{items.map(item=><li key={item}>{item}</li>)}</ul>
        </article>)}
      </div>
    </section>
    <section className="section alt">
      <div className="container editorialBand">
        <div><span className="kicker">DELIVERY MODEL</span><h2>Hardware. Software. Integration. Lifecycle support.</h2></div>
        <p>The core value is not a catalogue of devices. It is the ability to assemble customer-specific systems across solution engineering, local production, operation & maintenance, and repair.</p>
      </div>
    </section>
    <SiteFooter/>
  </main>
}

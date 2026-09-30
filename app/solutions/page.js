import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { Icon } from '../../components/Icons';

export const metadata = {
  title: 'Solutions | Nutech Integrasi',
  description: 'Explore Nutech Integrasi solutions across intelligent transportation, electronic payment, security and telemetry, financial services, geospatial systems and operational technology.',
};

const domains = [
  ['transit','Intelligent Transportation System','Integrated mobility systems spanning automated fare collection, reservation and queueing, toll collection, smart parking, fleet and supporting transport platforms.', ['Railway / BRT / Seaport AFC','Reservation & Queueing','Electronic Toll Collection','Smart Parking & Fleet']],
  ['payment','Electronic Payment Integration','Integration across smartcard, e-money, EDC, internet payment and settlement layers for multi-channel transaction ecosystems.', ['Smartcard Platform','E-money Integration','EDC Integration','Payment Gateway & Settlement']],
  ['shield','Security, Sensory & Telemetry','Connected physical security and sensing capabilities for transportation, smart buildings, public infrastructure and operational monitoring.', ['Access Control & Surveillance','Biometric Solution','Early Warning System','Telemetry & Sensor Integration']],
  ['banking','Financial & Banking Solution','Device and software integration for transaction environments, supported by enterprise-grade banking hardware and integration services.', ['ATM / CRM / VTM','EDC & Mobile POS','Intelligent Deposit Machine','OEM Cash & Coin Modules']],
];

const featuredProducts = [
  ['Ticket Vending Machine','Fare media distribution and self-service ticketing','https://www.nutech-integrasi.com/ticket-vending-machine/'],
  ['Electronic Gate System','Controlled passenger access integrated with fare collection','https://www.nutech-integrasi.com/electronic-gate-system/'],
  ['Point-of-Sales System','Transaction interface for operational and payment environments','https://www.nutech-integrasi.com/point-of-sales-system/'],
  ['On-Bus Validator','QR and prepaid-card validation for bus operations','https://www.nutech-integrasi.com/on-bus-validator/'],
  ['Smart Card Management System','Smart-card lifecycle and operational management','https://www.nutech-integrasi.com/smart-card-management-system/'],
  ['FENITA Platform','Fleet Management in Transportation platform','https://www.nutech-integrasi.com/fleet-management-in-transportation-fenita-platform/'],
  ['Geographic Information System','Geospatial applications for assets, operations and field intelligence','https://www.nutech-integrasi.com/geographic-information-system-gis/'],
  ['Structure Health Monitoring System','Infrastructure condition and structural monitoring','https://www.nutech-integrasi.com/structure-health-monitoring-system/'],
];

const geospatial = [
  'Interactive operational maps',
  'Real-time asset & productivity monitoring',
  'Fleet movement tracking',
  'Fieldworker management',
  'Pipeline risk analysis',
  'Underground-asset inspection',
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
      <div className="container">
        <div className="showcaseHead compactHead">
          <div><span className="sectionIndex">05</span><span className="kicker">FEATURED PRODUCTS</span></div>
          <h2>Existing portfolio, reorganized for discovery.</h2>
          <p>These product families already exist in Nutech's public portfolio. The revamp surfaces them as a scannable product layer instead of burying them inside long pages.</p>
        </div>
        <div className="featuredProductGrid">
          {featuredProducts.map(([name,desc,url],i)=><a className="featuredProduct" key={name} href={url} target="_blank" rel="noopener noreferrer">
            <span>{String(i+1).padStart(2,'0')}</span>
            <div><h3>{name}</h3><p>{desc}</p></div>
            <Icon name="arrow" size={17}/>
          </a>)}
        </div>
      </div>
    </section>

    <section className="section geospatialSection">
      <div className="container geospatialGrid">
        <div>
          <span className="kicker light">EXTENDED CAPABILITY / GIS</span>
          <h2>Operational intelligence becomes spatial.</h2>
          <p>Nutech's current GIS portfolio extends system integration into geospatial monitoring, asset visualization and field operations.</p>
          <a className="textLink lightTextLink" href="https://www.nutech-integrasi.com/geographic-information-system-gis/" target="_blank" rel="noopener noreferrer">View current GIS portfolio <Icon name="arrow" size={16}/></a>
        </div>
        <div className="geospatialList">
          {geospatial.map((item,i)=><div key={item}><span>{String(i+1).padStart(2,'0')}</span><p>{item}</p></div>)}
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container editorialBand">
        <div><span className="kicker">DELIVERY MODEL</span><h2>Hardware. Software. Integration. Lifecycle support.</h2></div>
        <p>The core value is not a catalogue of devices. It is the ability to assemble customer-specific systems across solution engineering, local production, operation & maintenance, and repair.</p>
      </div>
    </section>
    <SiteFooter/>
  </main>
}

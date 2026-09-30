import Brand from '../components/Brand';
import { Icon } from '../components/Icons';

const solutions = [
  ['transit','Intelligent Transportation System','AFC, ticketing, fleet, queueing and smart parking integrated into one operational ecosystem.'],
  ['payment','Electronic Payment Integration','Payment acceptance, e-money, settlement and transaction integration across digital channels.'],
  ['shield','Security, Sensory & Telemetry','Access control, CCTV, sensors and telemetry for connected operational environments.'],
  ['banking','Financial & Banking Solution','Integration for ATM, CRM, VTM, EDC, mobile POS and supporting transaction systems.'],
];

const capabilities = [
  ['integration','System Integration','Connect hardware, software, network and specialized devices into one accountable solution.'],
  ['local','Production & Local Content','Support domestic engineering, production and customer-specific deployment requirements.'],
  ['wrench','Operation & Maintenance','Preventive and corrective support designed around availability and service continuity.'],
  ['repair','Repair Facility','Repair and recovery capability to reduce downtime and extend asset serviceability.'],
];

const projects = [
  ['2024','MRT Jakarta','EMV Contactless Payment'],
  ['2013–','KAI Commuter','E-Ticketing Ecosystem'],
  ['2018–','ASDP Indonesia Ferry','Digital Ticketing'],
  ['2024','Batam International Port','Immigration Autogate'],
];

export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <div className="container navBar">
          <a href="#top" aria-label="Nutech Integrasi home"><Brand /></a>
          <nav className="desktopNav" aria-label="Primary">
            <a href="#solutions">Solutions</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#experience">Experience</a>
            <a href="#company">Company</a>
            <a href="/career">Career</a>
          </nav>
          <a className="navCta" href="#contact">Talk to Nutech <Icon name="arrow" size={16}/></a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="gridBg" aria-hidden="true" />
        <div className="container heroGrid">
          <div>
            <span className="eyebrow">ICT SYSTEM INTEGRATOR • SINCE 2006</span>
            <h1>Technology that keeps <em>people, payments</em> and mobility moving.</h1>
            <p>Nutech Integrasi connects hardware, software, networks and field operations into dependable digital ecosystems for transportation and enterprise services.</p>
            <div className="actions">
              <a className="btn primary" href="#solutions">Explore solutions <Icon name="arrow" size={18}/></a>
              <a className="btn secondary" href="#experience">See experience</a>
            </div>
          </div>
          <div className="ecosystem" aria-label="Illustration of Nutech integration ecosystem">
            <div className="ecoHeader"><span>Integrated Ecosystem</span><span>LIVE</span></div>
            <div className="ecoCanvas">
              <div className="hub"><Icon name="integration" size={30}/><strong>NUTECH</strong><small>Integration Layer</small></div>
              <div className="sat s1"><Icon name="transit"/><span>Mobility</span></div>
              <div className="sat s2"><Icon name="payment"/><span>Payment</span></div>
              <div className="sat s3"><Icon name="shield"/><span>Security</span></div>
              <div className="sat s4"><Icon name="map"/><span>Data</span></div>
            </div>
            <div className="ecoFooter"><span>Scope <b>End-to-End</b></span><span>Delivery <b>HW + SW + Integration</b></span></div>
          </div>
        </div>
        <div className="container proof">
          <div><b>2006</b><span>Established</span></div>
          <div><b>TelkomGroup</b><span>Digital ecosystem</span></div>
          <div><b>End-to-End</b><span>System integration</span></div>
          <div><b>Indonesia</b><span>Local engineering</span></div>
        </div>
      </section>

      <section className="section intro" id="company">
        <div className="container twoCol">
          <div><span className="kicker">WHAT NUTECH DOES</span><h2>From isolated technology to one operational ecosystem.</h2></div>
          <p>Complex infrastructure rarely fails because of one device. The challenge is making payment, gates, applications, networks, sensors and operations work as one dependable service.</p>
        </div>
      </section>

      <section className="section dark" id="solutions">
        <div className="container">
          <div className="sectionHead"><div><span className="kicker light">PRODUCT & SOLUTION</span><h2>Four solution domains.<br/>One integration mindset.</h2></div><p>Structured around Nutech's established portfolio for faster scanning by business and technical decision-makers.</p></div>
          <div className="cards">{solutions.map(([icon,title,body],i)=><article className="card" key={title}><div className="cardTop"><span>0{i+1}</span><Icon name={icon}/></div><h3>{title}</h3><p>{body}</p></article>)}</div>
        </div>
      </section>

      <section className="section" id="capabilities">
        <div className="container">
          <div className="sectionHead"><div><span className="kicker">LIFECYCLE CAPABILITY</span><h2>More than technology delivery.</h2></div><p>Capability spans the system lifecycle—from integration and local production to maintenance and repair.</p></div>
          <div className="capList">{capabilities.map(([icon,title,body],i)=><article className="cap" key={title}><span>0{i+1}</span><Icon name={icon}/><h3>{title}</h3><p>{body}</p></article>)}</div>
        </div>
      </section>

      <section className="section alt" id="experience">
        <div className="container">
          <div className="sectionHead"><div><span className="kicker">SELECTED EXPERIENCE</span><h2>Built around real operations.</h2></div><p>Public portfolio across railway, mass transit, ferry, payments and security deployments in Indonesia.</p></div>
          <div className="projectGrid">{projects.map(([year,name,type],i)=><article className="project" key={name}><div className="visual"><span>{String(i+1).padStart(2,'0')}</span></div><small>{year} • {type}</small><h3>{name}</h3></article>)}</div>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="container cta">
          <div><span className="kicker light">START A CONVERSATION</span><h2>Building a connected mobility or enterprise ecosystem?</h2><p>Discuss integration, payment, transport, security or maintenance requirements with Nutech Integrasi.</p></div>
          <div className="ctaLinks">
            <a href="mailto:info@nutech-integrasi.com">info@nutech-integrasi.com <Icon name="arrow" size={18}/></a>
            <a href="https://www.nutech-integrasi.com" target="_blank" rel="noopener noreferrer">Current corporate site <Icon name="arrow" size={18}/></a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footerGrid">
          <div><Brand light/><p>PT Nutech Integrasi<br/>ICT System Integrator</p></div>
          <div><strong>Navigate</strong><a href="#solutions">Solutions</a><a href="#capabilities">Capabilities</a><a href="#experience">Experience</a><a href="/career">Career</a></div>
          <div><strong>Contact</strong><a href="mailto:info@nutech-integrasi.com">info@nutech-integrasi.com</a></div>
        </div>
        <div className="container footerBottom">© 2026 PT Nutech Integrasi — Revamp concept</div>
      </footer>
    </main>
  );
}

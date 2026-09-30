import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import { Icon } from '../components/Icons';

const solutions = [
  ['transit','Intelligent Transportation','AFC, queueing, toll, parking and transport operations.'],
  ['payment','Electronic Payment','Smartcard, e-money, gateway and settlement integration.'],
  ['shield','Security & Telemetry','Access control, CCTV, sensing and operational monitoring.'],
  ['banking','Financial & Banking','ATM, CRM, VTM, EDC and transaction-device integration.'],
];

const capabilities = [
  ['integration','System Integration','Connect hardware, software, network and specialized devices into one accountable system.'],
  ['local','Production & Local Content','Support domestic engineering, production and customer-specific deployment needs.'],
  ['wrench','Operation & Maintenance','Preventive and corrective services designed around service continuity.'],
  ['repair','Repair Facility','Technical repair capability to improve turnaround and asset serviceability.'],
];

const projects = [
  ['01','MRT Jakarta','EMV contactless payment','Urban rail'],
  ['02','KAI Commuter','E-ticketing ecosystem','Commuter rail'],
  ['03','ASDP Indonesia Ferry','Digital ticketing','Maritime'],
  ['04','Batam International Port','Immigration autogate','Border security'],
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero hifiHero" id="top">
        <div className="heroAccent" aria-hidden="true" />
        <div className="container hifiHeroGrid">
          <div className="heroCopy">
            <div className="heroMeta"><span>ICT SYSTEM INTEGRATOR</span><span>EST. 2006</span></div>
            <h1>Integrating the systems behind <em>how Indonesia moves.</em></h1>
            <p>Nutech Integrasi brings together devices, software, payment, network and field operations into one dependable digital ecosystem.</p>
            <div className="actions">
              <Link className="btn primary" href="/solutions">Explore solutions <Icon name="arrow" size={18}/></Link>
              <Link className="textLink" href="/company">About Nutech <Icon name="arrow" size={16}/></Link>
            </div>
          </div>

          <div className="heroPanel">
            <div className="heroPanelTop">
              <span>Integration blueprint</span>
              <strong>01 / 04</strong>
            </div>
            <div className="heroPanelBody">
              <div className="systemStack">
                <div><small>Field layer</small><b>Gate · Validator · CCTV · Sensor</b></div>
                <span />
                <div><small>Platform layer</small><b>AFC · Payment · Monitoring · CMS</b></div>
                <span />
                <div className="activeLayer"><small>Integration layer</small><b>Nutech System Integration</b></div>
                <span />
                <div><small>Business layer</small><b>Operations · Settlement · Analytics</b></div>
              </div>
            </div>
            <div className="heroPanelFoot">
              <span>Hardware</span><span>Software</span><span>Integration</span><span>Maintenance</span>
            </div>
          </div>
        </div>

        <div className="container trustStrip">
          <div><span>Part of</span><strong>TelkomGroup</strong></div>
          <div><span>Delivery</span><strong>End-to-End ICT</strong></div>
          <div><span>Capability</span><strong>Local Engineering</strong></div>
          <div><span>Coverage</span><strong>Indonesia</strong></div>
        </div>
      </section>

      <section className="section editorialIntro" id="company">
        <div className="container editorialIntroGrid">
          <div className="sectionIndex">01</div>
          <div>
            <span className="kicker">POSITIONING</span>
            <h2>Not another device vendor. An integration partner for operational systems.</h2>
          </div>
          <p>Nutech's value sits between technology components and day-to-day operations: making multiple products, platforms and stakeholders work together as one service.</p>
        </div>
      </section>

      <section className="section solutionShowcase" id="solutions">
        <div className="container">
          <div className="showcaseHead">
            <div><span className="sectionIndex">02</span><span className="kicker">PRODUCT & SOLUTION</span></div>
            <h2>Four domains.<br/>One integration mindset.</h2>
            <p>Solution categories are preserved from Nutech's public portfolio, but reorganized for faster executive and technical scanning.</p>
          </div>

          <div className="solutionEditorialGrid">
            {solutions.map(([icon,title,body],i)=>(
              <Link className="solutionEditorialCard" href="/solutions" key={title}>
                <div className="solutionCardMeta"><span>0{i+1}</span><Icon name={icon} size={25}/></div>
                <div><h3>{title}</h3><p>{body}</p></div>
                <div className="solutionArrow"><Icon name="arrow" size={18}/></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section capabilityEditorial" id="capabilities">
        <div className="container">
          <div className="capEditorialTop">
            <div><span className="sectionIndex">03</span><span className="kicker">DELIVERY CAPABILITY</span></div>
            <h2>From design to operation.</h2>
          </div>
          <div className="capEditorialList">
            {capabilities.map(([icon,title,body],i)=>(
              <article key={title}>
                <div className="capNum">0{i+1}</div>
                <div className="capIcon"><Icon name={icon} size={26}/></div>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section experienceEditorial" id="experience">
        <div className="container">
          <div className="experienceLead">
            <div><span className="sectionIndex">04</span><span className="kicker light">SELECTED EXPERIENCE</span></div>
            <h2>Systems built for real public operations.</h2>
            <p>Selected implementation areas from Nutech's public portfolio across mobility, payments and security.</p>
          </div>
          <div className="experienceRail">
            {projects.map(([no,name,work,sector])=>(
              <article key={name}>
                <div className="experienceNo">{no}</div>
                <div className="experienceSector">{sector}</div>
                <h3>{name}</h3>
                <p>{work}</p>
              </article>
            ))}
          </div>
          <div className="experienceMore">
            <Link className="textLink lightTextLink" href="/experience">Explore selected experience <Icon name="arrow" size={16}/></Link>
          </div>
        </div>
      </section>

      <section className="section insightBand">
        <div className="container insightGrid">
          <div>
            <span className="sectionIndex">05</span>
            <span className="kicker">WHY IT MATTERS</span>
            <h2>One operational outcome requires many technologies to behave like one system.</h2>
          </div>
          <div className="insightList">
            <div><span>01</span><p>Reduce fragmentation between devices, applications and operators.</p></div>
            <div><span>02</span><p>Make maintenance and lifecycle ownership clearer after go-live.</p></div>
            <div><span>03</span><p>Support local requirements without losing enterprise-grade integration.</p></div>
          </div>
        </div>
      </section>

      <section className="section contactEditorial" id="contact">
        <div className="container contactEditorialInner">
          <div>
            <span className="kicker light">START A CONVERSATION</span>
            <h2>Have a system that needs to connect, scale or operate more reliably?</h2>
          </div>
          <div>
            <p>Bring the operational problem. Nutech can map the hardware, software, integration and lifecycle scope around it.</p>
            <Link className="btn lightButton" href="/contact">Talk to Nutech <Icon name="arrow" size={18}/></Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

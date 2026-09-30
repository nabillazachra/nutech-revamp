import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import { Icon } from '../components/Icons';
import { getHomeContent } from '../lib/content';

const { solutions, capabilities, projects } = getHomeContent();

export default function Home() {

  return (
    <main>
      <SiteHeader />

      <section className="homeV2Hero" id="top">
        <div className="container homeV2HeroGrid">
          <div className="homeV2Copy">
            <div className="homeV2Eyebrow">
              <span>ICT SYSTEM INTEGRATOR</span>
              <span>EST. 2006</span>
            </div>

            <h1>
              Integrating the systems behind
              <em> how Indonesia moves.</em>
            </h1>

            <p>
              Nutech Integrasi connects devices, software, payment, network and
              field operations into one dependable digital ecosystem.
            </p>

            <div className="homeV2Actions">
              <Link className="btn primary" href="/solutions">
                Explore solutions <Icon name="arrow" size={18}/>
              </Link>
              <Link className="homeV2TextLink" href="/experience">
                View experience <Icon name="arrow" size={16}/>
              </Link>
            </div>

            <div className="homeV2Proof">
              <div><small>Part of</small><strong>TelkomGroup</strong></div>
              <div><small>Delivery</small><strong>End-to-End ICT</strong></div>
              <div><small>Capability</small><strong>Local Engineering</strong></div>
            </div>
          </div>

          <div className="homeV3HeroVisual" aria-label="Nutech system integration illustration">
            <div className="heroV3Grid" aria-hidden="true" />
            <div className="heroV3Topline">
              <span>SYSTEM INTEGRATION / INDONESIA</span>
              <span>LIVE ARCHITECTURE</span>
            </div>

            <div className="heroV3Core">
              <div className="heroV3CoreRing">
                <div className="heroV3CoreInner">
                  <Icon name="integration" size={34}/>
                  <small>INTEGRATION LAYER</small>
                  <strong>NUTECH</strong>
                </div>
              </div>
            </div>

            <div className="heroV3Node nodeMobility">
              <span>01</span>
              <Icon name="transit" size={22}/>
              <div><small>MOBILITY</small><strong>Gate · AFC · Fleet</strong></div>
            </div>
            <div className="heroV3Node nodePaymentV3">
              <span>02</span>
              <Icon name="payment" size={22}/>
              <div><small>PAYMENT</small><strong>EMV · E-Money · Settlement</strong></div>
            </div>
            <div className="heroV3Node nodeSecurityV3">
              <span>03</span>
              <Icon name="shield" size={22}/>
              <div><small>SECURITY</small><strong>Access · CCTV · Telemetry</strong></div>
            </div>
            <div className="heroV3Node nodeDataV3">
              <span>04</span>
              <Icon name="map" size={22}/>
              <div><small>DATA</small><strong>Monitoring · GIS · Analytics</strong></div>
            </div>

            <svg className="heroV3Network" viewBox="0 0 1000 700" preserveAspectRatio="none" aria-hidden="true">
              <path d="M246 170 H360 V286 H430" />
              <path d="M754 206 H640 V286 H570" />
              <path d="M252 530 H360 V414 H430" />
              <path d="M748 518 H640 V414 H570" />
            </svg>

            <div className="heroV3Footer">
              <span>Hardware</span>
              <span>Software</span>
              <span>Integration</span>
              <span>Lifecycle Support</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section editorialIntro" id="company">
        <div className="container editorialIntroGrid">
          <div className="sectionIndex">01</div>
          <div>
            <span className="kicker">POSITIONING</span>
            <h2>Not another device vendor. An integration partner for operational systems.</h2>
          </div>
          <p>
            Nutech's value sits between technology components and day-to-day
            operations: making products, platforms and stakeholders work
            together as one service.
          </p>
        </div>
      </section>

      <section className="section solutionV2" id="solutions">
        <div className="container">
          <div className="solutionV2Head">
            <div>
              <span className="sectionIndex">02</span>
              <span className="kicker">PRODUCT & SOLUTION</span>
            </div>
            <h2>Four domains.<br/>One integration mindset.</h2>
          </div>

          <div className="solutionV2Layout">
            <div className="solutionV2List">
              {solutions.map(({icon,title,body},i)=>(
                <Link className="solutionV2Row" href="/solutions" key={title}>
                  <span className="solutionV2Number">0{i+1}</span>
                  <span className="solutionV2Icon"><Icon name={icon} size={24}/></span>
                  <span className="solutionV2Copy">
                    <strong>{title}</strong>
                    <small>{body}</small>
                  </span>
                  <span className="solutionV2Arrow"><Icon name="arrow" size={17}/></span>
                </Link>
              ))}
            </div>

            <div className="solutionV2Visual">
              <div className="solutionBlueprintHeader">
                <span>INTEGRATION MAP</span>
                <span>END-TO-END</span>
              </div>

              <div className="solutionBlueprint">
                <div className="blueprintNode nodeField">
                  <small>FIELD</small>
                  <strong>Device</strong>
                </div>
                <div className="blueprintNode nodePayment">
                  <small>TRANSACTION</small>
                  <strong>Payment</strong>
                </div>
                <div className="blueprintNode nodeCore">
                  <small>INTEGRATION</small>
                  <strong>NUTECH</strong>
                </div>
                <div className="blueprintNode nodeOps">
                  <small>OPERATIONS</small>
                  <strong>Monitoring</strong>
                </div>
                <div className="blueprintNode nodeData">
                  <small>BUSINESS</small>
                  <strong>Data</strong>
                </div>
                <svg className="solutionBlueprintNetwork" viewBox="0 0 1000 700" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M210 150 H362 V282 H470" />
                  <path d="M790 190 H638 V282 H530" />
                  <path d="M220 552 H362 V418 H470" />
                  <path d="M780 536 H638 V418 H530" />
                </svg>
              </div>

              <div className="solutionBlueprintFooter">
                <span>Hardware</span>
                <span>Software</span>
                <span>Integration</span>
                <span>Lifecycle</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section capabilityEditorial" id="capabilities">
        <div className="container">
          <div className="capEditorialTop">
            <div>
              <span className="sectionIndex">03</span>
              <span className="kicker">DELIVERY CAPABILITY</span>
            </div>
            <h2>From design to operation.</h2>
          </div>

          <div className="capEditorialList">
            {capabilities.map(({icon,title,body},i)=>(
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

      <section className="section experienceV2" id="experience">
        <div className="container">
          <div className="experienceV2Head">
            <div>
              <span className="sectionIndex">04</span>
              <span className="kicker light">SELECTED EXPERIENCE</span>
            </div>
            <h2>Systems built for real public operations.</h2>
          </div>

          <div className="experienceV2Grid">
            <div className="experienceV2Feature experienceSystemVisual" aria-label="Nutech implementation system diagram">
              <div className="experienceSystemTop">
                <span>IMPLEMENTATION SYSTEM VIEW</span>
                <span>PUBLIC PORTFOLIO</span>
              </div>

              <div className="experienceSystemCanvas">
                <div className="experienceSystemCore">
                  <Icon name="integration" size={30}/>
                  <small>SYSTEM INTEGRATION</small>
                  <strong>NUTECH</strong>
                </div>

                <div className="experienceSystemLane laneFare">
                  <span>01</span>
                  <Icon name="transit" size={21}/>
                  <div><small>FARE COLLECTION</small><strong>Gate · Validator · TVM</strong></div>
                </div>
                <div className="experienceSystemLane lanePay">
                  <span>02</span>
                  <Icon name="payment" size={21}/>
                  <div><small>PAYMENT</small><strong>EMV · E-Money · Settlement</strong></div>
                </div>
                <div className="experienceSystemLane laneSecurity">
                  <span>03</span>
                  <Icon name="shield" size={21}/>
                  <div><small>SECURITY</small><strong>Access · Autogate · CCTV</strong></div>
                </div>
                <div className="experienceSystemLane laneOps">
                  <span>04</span>
                  <Icon name="map" size={21}/>
                  <div><small>OPERATIONS</small><strong>Monitoring · GIS · Analytics</strong></div>
                </div>

                <svg className="experienceSystemNetwork" viewBox="0 0 1000 700" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M220 152 H360 V282 H445" />
                  <path d="M780 204 H640 V282 H555" />
                  <path d="M228 532 H360 V418 H445" />
                  <path d="M772 514 H640 V418 H555" />
                </svg>
              </div>

              <div className="experienceSystemFoot">
                <span>Resolution-independent technical visual</span>
                <Link href="/experience">
                  Explore implementation portfolio <Icon name="arrow" size={16}/>
                </Link>
              </div>
            </div>

            <div className="experienceV2List">
              {projects.map(({name,work,sector},i)=>(
                <Link href="/experience" className="experienceV2Item" key={name}>
                  <span className="experienceV2No">{String(i+1).padStart(2,'0')}</span>
                  <div>
                    <small>{sector}</small>
                    <h3>{name}</h3>
                    <p>{work}</p>
                  </div>
                  <Icon name="arrow" size={17}/>
                </Link>
              ))}
            </div>
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
            <p>
              Bring the operational problem. Nutech can map the hardware,
              software, integration and lifecycle scope around it.
            </p>
            <Link className="btn lightButton" href="/contact">
              Talk to Nutech <Icon name="arrow" size={18}/>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

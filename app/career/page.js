import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { Icon } from '../../components/Icons';

export const metadata = {
  title: 'Career | Nutech Integrasi',
  description: 'Explore career opportunities at PT Nutech Integrasi.',
};

const openings = [
  ['Account Manager','Business & Commercial',['Bachelor degree in business, marketing, transportation management, engineering or related field','Minimum 5 years in sales, account management or business development','Transportation/logistics or technology-sector exposure preferred','Strong English communication, negotiation and stakeholder management']],
  ['Node JS Programmer','Engineering',['Bachelor degree or equivalent in Computer Science or related field','Minimum 2 years experience','NodeJS, JavaScript, PostgreSQL, Docker and RabbitMQ','REST API, Linux environment and modern JavaScript framework exposure']],
  ['Mobile Apps Programmer (Flutter)','Engineering',['Professional mobile application development experience','Released application portfolio on Google Play and/or App Store','Flutter, React Native or Java Android','REST API, state management, OOP and Git']],
  ['React JS Programmer','Engineering',['Strong HTML5, CSS3 and JavaScript fundamentals','ReactJS / NextJS or comparable modern frontend framework','RESTful API and asynchronous request handling','Cross-browser debugging, Git and SEO fundamentals']],
  ['Java Programmer','Engineering',['Bachelor degree in computer, telecommunications, electrical or related engineering','2–3 years Java development experience','Java Spring Boot is mandatory','PostgreSQL/Oracle, microservices, Kafka and source-code management']],
];

export default function CareerPage(){
  return <main>
    <SiteHeader active="career"/>
    <section className="careerHero hifiCareerHero">
      <div className="container careerHeroGrid">
        <div>
          <span className="kicker">CAREER AT NUTECH</span>
          <h1>Build systems that move beyond the <em>screen.</em></h1>
        </div>
        <div>
          <p>Join teams working across transportation, payment, digital platforms, system integration and field operations.</p>
          <a className="btn primary" href="#openings">View openings <Icon name="arrow" size={18}/></a>
        </div>
      </div>
    </section>

    <section className="section editorialIntro">
      <div className="container editorialIntroGrid">
        <div className="sectionIndex">01</div>
        <div><span className="kicker">WHY NUTECH</span><h2>Work on technology that has visible operational impact.</h2></div>
        <p>Nutech projects connect applications with gates, devices, payment systems, networks and field operations—giving teams exposure to software and infrastructure in real-world use.</p>
      </div>
    </section>

    <section className="section alt" id="openings">
      <div className="container">
        <div className="showcaseHead compactHead">
          <div><span className="sectionIndex">02</span><span className="kicker">CURRENT OPPORTUNITIES</span></div>
          <h2>Find where you can contribute.</h2>
          <p>Roles and condensed requirements below are migrated from Nutech's current public Career page. Official recruitment information remains the source of truth.</p>
        </div>

        <div className="jobs jobsDetailed">
          {openings.map(([title,area,requirements],i)=><article key={title}>
            <span>0{i+1}</span>
            <div>
              <small>{area}</small>
              <h3>{title}</h3>
              <ul>{requirements.map(req=><li key={req}>{req}</li>)}</ul>
            </div>
            <a href={'mailto:hrd@nutech-integrasi.com?subject='+encodeURIComponent(title+'_Jakarta')}>Apply <Icon name="arrow" size={17}/></a>
          </article>)}
        </div>

        <div className="applicationNote">
          <span className="kicker">APPLICATION FORMAT</span>
          <p>Send your complete resume, optional portfolio and expected salary to <a href="mailto:hrd@nutech-integrasi.com">hrd@nutech-integrasi.com</a> with subject <strong>Position_Name_Location</strong>.</p>
        </div>
      </div>
    </section>

    <section className="section careerContact">
      <div className="container editorialBand">
        <div><span className="kicker light">GENERAL APPLICATION</span><h2>Not seeing your role yet?</h2></div>
        <a className="btn lightButton" href="mailto:hrd@nutech-integrasi.com">Send your CV <Icon name="arrow" size={18}/></a>
      </div>
    </section>
    <SiteFooter/>
  </main>
}

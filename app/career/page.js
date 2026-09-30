import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { Icon } from '../../components/Icons';

export const metadata = {
  title: 'Career | Nutech Integrasi',
  description: 'Explore career opportunities at PT Nutech Integrasi.',
};

const openings = [
  ['Account Manager','Business & Commercial','Build strategic customer relationships and translate business needs into integrated solutions.'],
  ['Node JS Programmer','Engineering','Develop backend applications, APIs and integration services for digital platforms.'],
  ['Mobile Apps Programmer (Flutter)','Engineering','Build reliable mobile applications connected to APIs and operational services.'],
  ['React JS Programmer','Engineering','Develop maintainable, responsive web interfaces using modern JavaScript.'],
  ['Java Programmer','Engineering','Develop Java services and enterprise integrations using robust backend architecture.'],
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
          <p>Roles below reflect vacancies published on Nutech's corporate career page. Detailed requirements remain subject to official recruitment information.</p>
        </div>
        <div className="jobs jobsEditorial">
          {openings.map(([title,area,summary],i)=><article key={title}>
            <span>0{i+1}</span>
            <div><small>{area}</small><h3>{title}</h3><p>{summary}</p></div>
            <a href={'mailto:hrd@nutech-integrasi.com?subject='+encodeURIComponent(title+'_Application')}>Apply <Icon name="arrow" size={17}/></a>
          </article>)}
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

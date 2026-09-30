import Brand from '../../components/Brand';
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
    <header className="siteHeader"><div className="container navBar"><a href="/" aria-label="Nutech home"><Brand/></a><nav className="desktopNav" aria-label="Primary"><a href="/#solutions">Solutions</a><a href="/#capabilities">Capabilities</a><a href="/#experience">Experience</a><a href="/#company">Company</a><a className="active" href="/career">Career</a></nav><a className="navCta" href="mailto:info@nutech-integrasi.com">Talk to Nutech <Icon name="arrow" size={16}/></a></div></header>
    <section className="careerHero"><div className="gridBg"/><div className="container"><span className="kicker">CAREER AT NUTECH</span><h1>Build technology that moves <em>Indonesia.</em></h1><p>Join teams working across transportation, payment, digital platforms, system integration and field operations.</p><div className="actions"><a className="btn primary" href="#openings">View openings <Icon name="arrow" size={18}/></a><a className="btn secondary" href="mailto:hrd@nutech-integrasi.com">Send your CV</a></div></div></section>
    <section className="section"><div className="container twoCol"><div><span className="kicker">WHY NUTECH</span><h2>Work on systems that operate beyond the screen.</h2></div><p>Nutech projects connect software with gates, devices, payment systems, networks and field operations—giving teams exposure to technology with visible operational impact.</p></div></section>
    <section className="section alt" id="openings"><div className="container"><div className="sectionHead"><div><span className="kicker">CURRENT OPPORTUNITIES</span><h2>Find where you can contribute.</h2></div><p>These roles reflect vacancies published on Nutech's corporate career page. Detailed requirements remain subject to official recruitment information.</p></div><div className="jobs">{openings.map(([title,area,summary],i)=><article key={title}><span>0{i+1}</span><div><small>{area}</small><h3>{title}</h3><p>{summary}</p></div><a href={`mailto:hrd@nutech-integrasi.com?subject=${encodeURIComponent(title+'_Application')}`}>Apply <Icon name="arrow" size={17}/></a></article>)}</div></div></section>
    <footer><div className="container footerGrid"><div><Brand light/><p>PT Nutech Integrasi</p></div><div><strong>Navigate</strong><a href="/">Home</a><a href="/#solutions">Solutions</a><a href="/career">Career</a></div><div><strong>Recruitment</strong><a href="mailto:hrd@nutech-integrasi.com">hrd@nutech-integrasi.com</a></div></div></footer>
  </main>
}

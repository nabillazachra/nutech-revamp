import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { Icon } from '../../components/Icons';
import { experienceCases } from '../../content/experience';

export const metadata = {
  title: 'Experience | Nutech Integrasi',
  description: 'Selected public implementation experience of PT Nutech Integrasi across transportation, payment, security and digital infrastructure.',
};

const implementationSurfaces = [
  ['transit','Passenger & Fare Collection','Gate, validator, ticketing and passenger-access systems.'],
  ['payment','Payment & Settlement','EMV, e-money, transaction processing and settlement integration.'],
  ['shield','Security & Access','Autogate, physical access, surveillance and security integration.'],
  ['map','Monitoring & Geospatial','Operational monitoring, GIS, analytics and field intelligence.'],
];

export default function ExperiencePage(){
  return <main>
    <SiteHeader active="experience"/>
    <section className="pageHero darkHero experiencePageHero">
      <div className="container pageHeroGrid">
        <div>
          <span className="kicker light">SELECTED EXPERIENCE</span>
          <h1>Public implementations across <em>mobility, payment and security.</em></h1>
        </div>
        <p>This page consolidates projects and milestones already published by Nutech into a clearer case-study index. It intentionally avoids adding performance claims that are not documented in first-party sources.</p>
      </div>
    </section>

    <section className="section">
      <div className="container experienceCaseList">
        {experienceCases.map((item,i)=><article className="experienceCase" key={item.slug}>
          <div className="experienceCaseNo">{String(i+1).padStart(2,'0')}</div>
          <div className="experienceCaseMeta">
            <span>{item.year}</span>
            <span>{item.sector}</span>
          </div>
          <div className="experienceCaseMain">
            <h2>{item.title}</h2>
            <p>{item.summary}</p>
            <div className="tagRow">{item.tags.map(tag=><span key={tag}>{tag}</span>)}</div>
          </div>
          <div className="experienceCaseActions">
            <Link href={'/experience/'+item.slug}>Case detail <Icon name="arrow" size={16}/></Link>
            <a href={item.source} target="_blank" rel="noopener noreferrer">Public source</a>
          </div>
        </article>)}
      </div>
    </section>

    <section className="section implementationSurfaceSection">
      <div className="container">
        <div className="showcaseHead compactHead">
          <div><span className="sectionIndex">08</span><span className="kicker">IMPLEMENTATION SURFACES</span></div>
          <h2>Project context without low-resolution imagery.</h2>
          <p>Until approved high-resolution project photography is supplied, the portfolio uses resolution-independent technical visuals rather than stretching legacy WordPress images.</p>
        </div>

        <div className="implementationSurfaceList">
          {implementationSurfaces.map(([icon,title,description],i)=><article key={title}>
            <span>{String(i+1).padStart(2,'0')}</span>
            <Icon name={icon} size={25}/>
            <div><h3>{title}</h3><p>{description}</p></div>
          </article>)}
        </div>
      </div>
    </section>

    <section className="section alt">
      <div className="container editorialBand">
        <div>
          <span className="kicker">PORTFOLIO PRINCIPLE</span>
          <h2>Case studies should prove integration scope, not just show logos.</h2>
        </div>
        <p>In the production version, each project can expand into a dedicated page containing the operational challenge, system boundary, Nutech scope, architecture, delivered components and measurable outcomes where those figures are approved for publication.</p>
      </div>
    </section>

    <SiteFooter/>
  </main>
}

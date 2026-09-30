import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { Icon } from '../../components/Icons';
import { experienceCases } from '../../content/experience';

export const metadata = {
  title: 'Experience | Nutech Integrasi',
  description: 'Selected public implementation experience of PT Nutech Integrasi across transportation, payment, security and digital infrastructure.',
};

const fieldVisuals = [
  {
    src:'https://www.nutech-integrasi.com/wp-content/uploads/2014/09/image-7-1024x469.jpg',
    title:'Electronic Parking Terminal',
    label:'Payment & Parking'
  },
  {
    src:'https://www.nutech-integrasi.com/wp-content/uploads/2014/09/image-56-1024x356.jpg',
    title:'Airport Bus Management System',
    label:'Operational Monitoring'
  },
  {
    src:'https://www.nutech-integrasi.com/wp-content/uploads/2014/09/image-5-958x1024.jpg',
    title:'Rest Area Monitoring System',
    label:'Traffic & Analytics'
  },
  {
    src:'https://www.nutech-integrasi.com/wp-content/uploads/2014/08/image-8-1024x409.jpg',
    title:'LRT Sumsel AFC',
    label:'Automated Fare Collection'
  },
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

    <section className="section fieldVisualSection">
      <div className="container">
        <div className="showcaseHead compactHead">
          <div><span className="sectionIndex">08</span><span className="kicker">FIELD VISUALS</span></div>
          <h2>Real deployments, not stock imagery.</h2>
          <p>These transitional visuals are sourced from Nutech's current public website and are used here to establish the right photography direction for the production site.</p>
        </div>
        <div className="fieldVisualGrid">
          {fieldVisuals.map((item,i)=><figure className="fieldVisual" key={item.title}>
            <div className="fieldVisualImage">
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
              <span>{String(i+1).padStart(2,'0')}</span>
            </div>
            <figcaption>
              <small>{item.label}</small>
              <h3>{item.title}</h3>
            </figcaption>
          </figure>)}
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

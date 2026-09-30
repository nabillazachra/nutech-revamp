import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { Icon } from '../../components/Icons';

export const metadata = {
  title: 'Experience | Nutech Integrasi',
  description: 'Selected public implementation experience of PT Nutech Integrasi across transportation, payment, security and digital infrastructure.',
};

const cases = [
  {
    year:'2024',
    sector:'Urban Rail / Payment',
    title:'MRT Jakarta — EMV Contactless Payment',
    body:'Nutech recorded direct implementation of an EMV project at MRT Jakarta in its 2024 corporate milestone timeline, extending its transportation portfolio into open-loop contactless payment.',
    tags:['EMV','Payment Integration','Mass Transit'],
    source:'https://www.nutech-integrasi.com/wp-content/uploads/2025/07/Annual-Report-Nutech-2024.pdf'
  },
  {
    year:'2018–2024',
    sector:'Maritime / Ticketing',
    title:'ASDP — E-Ticketing Ecosystem',
    body:'Nutech identifies ASDP as a major client since 2018 and as a partner in managing the e-ticketing ecosystem across ASDP port operations.',
    tags:['E-Ticketing','Operations','Seaport'],
    source:'https://www.nutech-integrasi.com/wp-content/uploads/2025/07/Annual-Report-Nutech-2024.pdf'
  },
  {
    year:'2024',
    sector:'Border Security',
    title:'Batam Center — Immigration Autogate',
    body:'Ten immigration autogates were installed at Batam Center International Port at the end of 2024: five for arrivals and five for departures.',
    tags:['Autogate','Immigration','Access System'],
    source:'https://www.nutech-integrasi.com/wp-content/uploads/2025/07/Annual-Report-Nutech-2024.pdf'
  },
  {
    year:'2023',
    sector:'Urban Rail',
    title:'LRT Jabodebek — Ticketing & Launch Support',
    body:'Nutech documented the soft launching of LRT Jabodebek in August 2023 and has public corporate milestones related to ticketing implementation for the network.',
    tags:['AFC','Railway','System Integration'],
    source:'https://www.nutech-integrasi.com/wp-content/uploads/2025/03/Annual-Report-Thn-2023-PT-Nutech-Integrasi-Versi-Indonesia-V1.pdf'
  },
  {
    year:'2017',
    sector:'Airport Rail',
    title:'Railink — Soekarno-Hatta Airport Rail AFC',
    body:'The Railink airport railway e-ticketing solution includes ticket vending machines, pedestrian gate systems, online reservation and payment integration.',
    tags:['TVM','Gate','Reservation','Payment'],
    source:'https://www.nutech-integrasi.com/news/'
  },
  {
    year:'Public Portfolio',
    sector:'Bus / Fare Validation',
    title:'DAMRI — On-Bus Validator',
    body:'Nutech publishes an on-bus validator implementation for DAMRI that accepts QR tickets and direct prepaid-card tap payments onboard.',
    tags:['Validator','QR','Prepaid Card'],
    source:'https://www.nutech-integrasi.com/product-launching-dan-kunjungan/'
  },
  {
    year:'2018',
    sector:'Light Rail',
    title:'LRT Sumsel — Automated Fare Collection',
    body:'The LRT Sumsel AFC implementation combines QR-code fare verification with electronic-money integration for passenger ticketing.',
    tags:['AFC','QR','E-Money'],
    source:'https://www.nutech-integrasi.com/2014/08/25/lrt-sumsel/'
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
        {cases.map((item,i)=><article className="experienceCase" key={item.title}>
          <div className="experienceCaseNo">{String(i+1).padStart(2,'0')}</div>
          <div className="experienceCaseMeta">
            <span>{item.year}</span>
            <span>{item.sector}</span>
          </div>
          <div className="experienceCaseMain">
            <h2>{item.title}</h2>
            <p>{item.body}</p>
            <div className="tagRow">{item.tags.map(tag=><span key={tag}>{tag}</span>)}</div>
          </div>
          <a className="experienceSource" href={item.source} target="_blank" rel="noopener noreferrer">
            Public source <Icon name="arrow" size={16}/>
          </a>
        </article>)}
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

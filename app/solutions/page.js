import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { Icon } from '../../components/Icons';
import { getSolutionsContent } from '../../lib/content';

export const metadata = {
  title: 'Solutions | Nutech Integrasi',
  description: 'Explore Nutech Integrasi solutions across intelligent transportation, electronic payment, security and telemetry, financial services, geospatial systems and operational technology.',
};

const { domains, featuredProducts, geospatial } = getSolutionsContent();

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
        {domains.map(({icon,title,description,items},i)=><article className="solutionRow" key={title}>
          <div className="solutionNumber">0{i+1}</div>
          <div className="solutionIcon"><Icon name={icon} size={30}/></div>
          <div><h2>{title}</h2><p>{description}</p></div>
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
          {featuredProducts.map(({name,description,url},i)=><a className="featuredProduct" key={name} href={url} target="_blank" rel="noopener noreferrer">
            <span>{String(i+1).padStart(2,'0')}</span>
            <div><h3>{name}</h3><p>{description}</p></div>
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

import Link from 'next/link';
import { notFound } from 'next/navigation';
import SiteHeader from '../../../components/SiteHeader';
import SiteFooter from '../../../components/SiteFooter';
import { Icon } from '../../../components/Icons';
import { experienceCases, getExperienceCase } from '../../../content/experience';

export function generateStaticParams(){
  return experienceCases.map((item)=>({ slug:item.slug }));
}

export async function generateMetadata({ params }){
  const { slug } = await params;
  const item = getExperienceCase(slug);
  if(!item) return {};
  return {
    title:item.title,
    description:item.summary,
  };
}

export default async function ExperienceDetailPage({ params }){
  const { slug } = await params;
  const item = getExperienceCase(slug);
  if(!item) notFound();

  return <main>
    <SiteHeader active="experience"/>

    <section className="caseDetailHero">
      <div className="container caseDetailHeroGrid">
        <div>
          <Link className="caseBack" href="/experience">← Experience</Link>
          <span className="kicker">{item.sector}</span>
          <h1>{item.title}</h1>
        </div>
        <div className="caseDetailMeta">
          <div><small>Period</small><strong>{item.year}</strong></div>
          <div><small>Evidence</small><strong>Public Nutech source</strong></div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container caseDetailGrid">
        <div className="caseDetailLabel">01 / CONTEXT</div>
        <div className="caseDetailBody">
          <h2>Operational challenge</h2>
          <p>{item.challenge}</p>
        </div>
      </div>
    </section>

    <section className="section alt">
      <div className="container caseDetailGrid">
        <div className="caseDetailLabel">02 / NUTECH SCOPE</div>
        <div className="caseDetailBody">
          <h2>Integration scope</h2>
          <div className="scopeList">
            {item.scope.map((scope,i)=><div key={scope}><span>{String(i+1).padStart(2,'0')}</span><p>{scope}</p></div>)}
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container caseDetailGrid">
        <div className="caseDetailLabel">03 / DOCUMENTED OUTCOME</div>
        <div className="caseDetailBody">
          <h2>What can be stated publicly</h2>
          <p>{item.outcome}</p>
          <div className="tagRow">{item.tags.map(tag=><span key={tag}>{tag}</span>)}</div>
        </div>
      </div>
    </section>

    <section className="caseEvidence">
      <div className="container caseEvidenceInner">
        <div>
          <span className="kicker light">SOURCE DISCIPLINE</span>
          <h2>Claims stay tied to public evidence.</h2>
          <p>The revamp separates documented facts from future marketing copy, so unpublished project metrics or technical details are not presented as verified facts.</p>
        </div>
        <a className="btn lightButton" href={item.source} target="_blank" rel="noopener noreferrer">
          Open public source <Icon name="arrow" size={18}/>
        </a>
      </div>
    </section>

    <SiteFooter/>
  </main>
}

import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import { Icon } from '../components/Icons';

export default function NotFound(){
  return <main>
    <SiteHeader/>
    <section className="notFound">
      <div className="container notFoundInner">
        <span className="kicker">404 / PAGE NOT FOUND</span>
        <h1>This route is not part of the system.</h1>
        <p>The page may have moved during the Nutech website restructuring.</p>
        <Link className="btn primary" href="/">Return home <Icon name="arrow" size={18}/></Link>
      </div>
    </section>
    <SiteFooter/>
  </main>
}

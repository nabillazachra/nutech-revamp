export default function Brand({ light = false }) {
  return (
    <div className={`brand ${light ? 'brandLight' : ''}`} aria-label="Nutech Integrasi">
      <div className="brandWordmark">
        <span className="brandNu">nu</span><span className="brandTech">t<span className="brandE">e</span>ch</span>
      </div>
      <div className="brandSub">by Telkom Indonesia</div>
    </div>
  );
}

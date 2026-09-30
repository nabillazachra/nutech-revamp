export default function Brand({ light = false }) {
  return (
    <div className={`brand ${light ? 'brandLight' : ''}`} aria-label="Nutech Integrasi">
      <div className="brandWordmark"><span>nu</span>tech</div>
      <div className="brandSub">by Telkom Indonesia</div>
    </div>
  );
}

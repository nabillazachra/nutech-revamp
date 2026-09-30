const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Brand({ light = false }) {
  return (
    <span className={`brand brandAsset ${light ? 'brandLight' : ''}`} aria-label="Nutech Integrasi by Telkom Indonesia">
      <img
        className="brandLogo"
        src={basePath + '/brand/nutech-logo-light.png'}
        alt="Nutech by Telkom Indonesia"
        width="520"
        height="224"
        decoding="async"
      />
    </span>
  );
}

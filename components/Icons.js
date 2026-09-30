export function Icon({ name, size = 24 }) {
  const common = { width:size, height:size, viewBox:'0 0 24 24', fill:'none', stroke:'currentColor', strokeWidth:1.8, strokeLinecap:'round', strokeLinejoin:'round', 'aria-hidden':true };
  const paths = {
    transit:<><path d="M5 17h14"/><path d="M7 17l-2 4"/><path d="M17 17l2 4"/><rect x="5" y="3" width="14" height="14" rx="3"/><path d="M8 7h8"/><path d="M8 12h.01"/><path d="M16 12h.01"/></>,
    payment:<><rect x="3" y="5" width="18" height="14" rx="3"/><path d="M3 10h18"/><path d="M7 15h4"/></>,
    shield:<><path d="M12 3l7 3v5c0 4.8-2.8 8-7 10-4.2-2-7-5.2-7-10V6l7-3z"/><path d="M9 12l2 2 4-4"/></>,
    banking:<><path d="M3 10h18"/><path d="M5 10v8"/><path d="M9 10v8"/><path d="M15 10v8"/><path d="M19 10v8"/><path d="M2 20h20"/><path d="M12 3l9 5H3l9-5z"/></>,
    integration:<><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8.4 10.8l7.2-3.6"/><path d="M8.4 13.2l7.2 3.6"/></>,
    local:<><path d="M12 21s7-4.2 7-10V5l-7-2-7 2v6c0 5.8 7 10 7 10z"/><path d="M9 12h6"/><path d="M12 9v6"/></>,
    wrench:<><path d="M14.7 6.3a4 4 0 01-5 5L4 17l3 3 5.7-5.7a4 4 0 005-5l-2.2 2.2-2-2L15.7 7.3z"/></>,
    repair:<><path d="M5 7h14"/><path d="M7 3h10l2 4H5l2-4z"/><rect x="5" y="7" width="14" height="13" rx="2"/><path d="M9 11h6"/><path d="M9 15h3"/></>,
    arrow:<><path d="M5 12h14"/><path d="M14 7l5 5-5 5"/></>,
    map:<><path d="M9 18l-6 3V6l6-3 6 3 6-3v15l-6 3-6-3z"/><path d="M9 3v15"/><path d="M15 6v15"/></>,
    mail:<><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></>,
    pin:<><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1116 0z"/><circle cx="12" cy="10" r="2.5"/></>,
  };
  return <svg {...common}>{paths[name] ?? paths.integration}</svg>;
}

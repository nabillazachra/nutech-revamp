export const experienceCases = [
  {
    slug:'mrt-jakarta-emv',
    year:'2024',
    sector:'Urban Rail / Payment',
    title:'MRT Jakarta — EMV Contactless Payment',
    summary:'Nutech recorded direct implementation of an EMV project at MRT Jakarta in its 2024 corporate milestone timeline, extending its transportation portfolio into open-loop contactless payment.',
    challenge:'Urban rail payment environments require passenger throughput, transaction security and interoperability to coexist without adding operational friction at the gate.',
    scope:['EMV payment integration','Mass-transit payment ecosystem','System integration across operational interfaces'],
    outcome:'Public corporate reporting confirms the project implementation. Quantitative performance figures should only be added after approval from the project owner.',
    tags:['EMV','Payment Integration','Mass Transit'],
    source:'https://www.nutech-integrasi.com/wp-content/uploads/2025/07/Annual-Report-Nutech-2024.pdf'
  },
  {
    slug:'asdp-e-ticketing',
    year:'2018–2024',
    sector:'Maritime / Ticketing',
    title:'ASDP — E-Ticketing Ecosystem',
    summary:'Nutech identifies ASDP as a major client since 2018 and as a partner in managing the e-ticketing ecosystem across ASDP port operations.',
    challenge:'Maritime ticketing spans reservation, passenger processing, payment and port operations, requiring consistent transaction and service handling across multiple operational points.',
    scope:['E-ticketing ecosystem','Operational integration','Lifecycle support across port operations'],
    outcome:'Nutech public reporting identifies the relationship and e-ticketing context. Site-specific metrics remain subject to customer approval.',
    tags:['E-Ticketing','Operations','Seaport'],
    source:'https://www.nutech-integrasi.com/wp-content/uploads/2025/07/Annual-Report-Nutech-2024.pdf'
  },
  {
    slug:'batam-autogate',
    year:'2024',
    sector:'Border Security',
    title:'Batam Center — Immigration Autogate',
    summary:'Ten immigration autogates were installed at Batam Center International Port at the end of 2024: five for arrivals and five for departures.',
    challenge:'Border processing needs secure identity verification while reducing manual processing friction across arrival and departure flows.',
    scope:['Immigration autogate deployment','Arrival and departure lanes','Physical access and system integration'],
    outcome:'The 2024 Annual Report records ten autogates at Batam Center International Port, split evenly between arrival and departure areas.',
    tags:['Autogate','Immigration','Access System'],
    source:'https://www.nutech-integrasi.com/wp-content/uploads/2025/07/Annual-Report-Nutech-2024.pdf'
  },
  {
    slug:'lrt-jabodebek',
    year:'2023',
    sector:'Urban Rail',
    title:'LRT Jabodebek — Ticketing & Launch Support',
    summary:'Nutech documented the soft launching of LRT Jabodebek in August 2023 and has public corporate milestones related to ticketing implementation for the network.',
    challenge:'A new urban rail service requires passenger access, ticketing and supporting operational systems to be synchronized before public service begins.',
    scope:['Ticketing ecosystem support','Railway system integration','Launch-stage operational readiness'],
    outcome:'Nutech public corporate reporting documents participation around the LRT Jabodebek launch period. Detailed technical scope should be verified against approved project documentation before publication.',
    tags:['AFC','Railway','System Integration'],
    source:'https://www.nutech-integrasi.com/wp-content/uploads/2025/03/Annual-Report-Thn-2023-PT-Nutech-Integrasi-Versi-Indonesia-V1.pdf'
  },
  {
    slug:'railink-airport-rail',
    year:'2017',
    sector:'Airport Rail',
    title:'Railink — Soekarno-Hatta Airport Rail AFC',
    summary:'The Railink airport railway e-ticketing solution includes ticket vending machines, pedestrian gate systems, online reservation and payment integration.',
    challenge:'Airport railway passengers need a ticketing journey that connects self-service purchase, reservation, payment and station access.',
    scope:['Ticket vending machine','Pedestrian gate system','Online reservation','Payment integration'],
    outcome:'Nutech public portfolio material describes an integrated Railink e-ticketing scope across customer-facing and backend components.',
    tags:['TVM','Gate','Reservation','Payment'],
    source:'https://www.nutech-integrasi.com/news/'
  },
  {
    slug:'damri-on-bus-validator',
    year:'Public Portfolio',
    sector:'Bus / Fare Validation',
    title:'DAMRI — On-Bus Validator',
    summary:'Nutech publishes an on-bus validator implementation for DAMRI that accepts QR tickets and direct prepaid-card tap payments onboard.',
    challenge:'Bus fare collection needs compact onboard validation that can support different fare media without slowing passenger boarding.',
    scope:['On-bus validation','QR ticket validation','Prepaid-card acceptance'],
    outcome:'Nutech public product material documents QR and prepaid-card validation in the DAMRI implementation.',
    tags:['Validator','QR','Prepaid Card'],
    source:'https://www.nutech-integrasi.com/product-launching-dan-kunjungan/'
  },
  {
    slug:'lrt-sumsel-afc',
    year:'2018',
    sector:'Light Rail',
    title:'LRT Sumsel — Automated Fare Collection',
    summary:'The LRT Sumsel AFC implementation combines QR-code fare verification with electronic-money integration for passenger ticketing.',
    challenge:'AFC for light rail needs reliable passenger verification while accommodating multiple supported fare media.',
    scope:['Automated fare collection','QR verification','Electronic-money integration'],
    outcome:'Nutech public portfolio material describes both QR-code and electronic-money support within the LRT Sumsel AFC environment.',
    tags:['AFC','QR','E-Money'],
    source:'https://www.nutech-integrasi.com/2014/08/25/lrt-sumsel/'
  },
];

export function getExperienceCase(slug){
  return experienceCases.find((item)=>item.slug===slug);
}

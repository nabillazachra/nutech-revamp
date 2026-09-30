# Content migration source map

This file records the public source pages used to preserve context from the current PT Nutech Integrasi website during the revamp.

## Corporate positioning
- https://www.nutech-integrasi.com/
- Preserved context: TelkomGroup affiliation, System Integration & Solution, Production & Local Content, Maintenance, Repair Facility.

## Product & solution
- https://www.nutech-integrasi.com/product-solution-2/
- https://www.nutech-integrasi.com/ticket-vending-machine/
- https://www.nutech-integrasi.com/electronic-gate-system/
- https://www.nutech-integrasi.com/point-of-sales-system/
- https://www.nutech-integrasi.com/on-bus-validator/
- https://www.nutech-integrasi.com/smart-card-management-system/
- https://www.nutech-integrasi.com/fleet-management-in-transportation-fenita-platform/
- https://www.nutech-integrasi.com/geographic-information-system-gis/
- https://www.nutech-integrasi.com/structure-health-monitoring-system/

## Geographic Information System
- https://www.nutech-integrasi.com/geographic-information-system-gis/
- Preserved context includes interactive operational maps, real-time asset/productivity monitoring, fleet tracking, fieldworker management, pipeline-risk analysis and underground-asset inspection.

## Career
- https://www.nutech-integrasi.com/career/
- Current published roles migrated in condensed form: Account Manager, Node JS Programmer, Mobile Apps Programmer (Flutter), React JS Programmer and Java Programmer.
- Application guidance retained: resume, optional portfolio, expected salary and subject format Position_Name_Location.

## Good Corporate Governance
- https://www.nutech-integrasi.com/gcg/
- Preserved policy-document categories, annual-report years currently published (2025–2021), complaint number and WBS email.

## Corporate contact
- Public footer/contact information on current Nutech pages.
- Management Office: Gedung Nutech, Jl. Buncit Raya Kav. 99, Pejaten Barat, Pasar Minggu, Jakarta Selatan 12510. Tel. +62 21 27808111.
- Operational & Warehouse: Jl. Tanjung Barat No. 17, Pasar Minggu, Jakarta Selatan 12510. Tel. +62 21 7803827.

## Asset policy
Public content may be referenced for information architecture and migration, but production deployment should use approved first-party master brand assets and project photography supplied/approved by PT Nutech Integrasi. The current prototype intentionally does not hotlink third-party or unverified image assets.


## Selected experience
- 2024 Annual Report: MRT Jakarta EMV, ASDP e-ticketing context and Batam Center Immigration Autogate.
- 2023 Annual Report: LRT Jabodebek soft launching.
- https://www.nutech-integrasi.com/news/ — Railink airport railway e-ticketing scope.
- https://www.nutech-integrasi.com/product-launching-dan-kunjungan/ — DAMRI On-Bus Validator.
- https://www.nutech-integrasi.com/2014/08/25/lrt-sumsel/ — LRT Sumsel AFC.


## Visual asset policy

Legacy project photographs from the existing WordPress site are **not rendered in the current UI** unless an approved high-resolution master is available.

Current production-facing visual rules:

- official Nutech logo is stored locally under `public/brand/`;
- favicon is stored locally;
- homepage hero and system visuals are resolution-independent CSS/SVG-style graphics;
- Experience implementation visuals are resolution-independent technical schematics;
- low-resolution WordPress derivatives such as `-1024x...` are intentionally excluded from rendered pages;
- approved high-resolution project photography can be introduced later when internal master files are provided.

This avoids stretching legacy assets on retina/4K displays and removes runtime dependency on old WordPress media URLs.

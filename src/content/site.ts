export const site = {
  name: "NASHCO Rentals, LLC",
  shortName: "NASHCO Rentals",
  tagline: "Heavy equipment rental and civil support for Texas' most demanding builders.",
  principles: ["Reliability", "Partnership", "Discipline"],
  serviceArea: "Texas and surrounding states",
  headquarters: {
    city: "Leona",
    county: "Leon County",
    state: "TX",
    country: "US",
    lat: 31.1468,
    lng: -95.9766,
  },
  contact: {
    email: "heath@rentnashco.com",
    phone: "(000) 000-0000", // TODO: replace with published business line
    phoneHref: "tel:+10000000000",
  },
  domain: "rentnashco.com",
  url: "https://rentnashco.com",
  insurance: {
    general: "$2M General Liability", // TBC — confirm exact limits
    auto: "Commercial Auto",
    umbrella: "Umbrella coverage",
  },
} as const;

export const industries = [
  {
    slug: "ev-gigafactory",
    name: "EV & Gigafactory",
    blurb:
      "Site prep, earthwork, and logistics support for electric-vehicle manufacturing campuses and supply-chain facilities.",
  },
  {
    slug: "lng-infrastructure",
    name: "LNG & Energy Infrastructure",
    blurb:
      "Reliable fleet for pipeline, LNG export, and midstream civil packages where schedule slippage is not an option.",
  },
  {
    slug: "data-centers",
    name: "Data Centers",
    blurb:
      "Pad-ready excavation and haul support for hyperscale and colocation builds across Texas.",
  },
  {
    slug: "site-development",
    name: "Site Development",
    blurb:
      "Bare and operated rentals for grading, utilities, and mass excavation on commercial and industrial sites.",
  },
  {
    slug: "municipal-dot",
    name: "Municipal & DOT",
    blurb:
      "Public-works support with documented insurance, maintenance logs, and schedule-forward dispatch.",
  },
] as const;

export const services = [
  {
    name: "Bare Rental",
    description:
      "Late-model iron delivered to your site. You supply the operator and fuel; we supply the reliability.",
  },
  {
    name: "Operated Rental",
    description:
      "Our experienced operators, our equipment, one invoice. Turnkey for GCs without roster capacity.",
  },
  {
    name: "Sub-Rentals",
    description:
      "Specialty attachments and supplemental iron sourced on request.",
  },
  {
    name: "Civil Support",
    description:
      "Earthwork, site prep, haul coordination, and general civil support scoped to your project.",
  },
  {
    name: "Project Logistics",
    description:
      "Multi-asset mobilization, staging, and schedule coordination for enterprise-scale builds.",
  },
] as const;

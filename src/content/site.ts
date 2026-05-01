// Single source of truth for non-fleet site content.
// Per-asset SKU listings have been retired — see _archive/fleet for legacy data.
// All TODO markers are deliberately left visible until Heath supplies values.

export const site = {
  name: "NASHCO Rentals, LLC",
  shortName: "NASHCO Rentals",
  positioning:
    "24/7 bare rental dispatch for Texas megaprojects — owned fleet plus sub-rent network, single PO, single point of contact.",
  principles: ["Reliability", "Partnership", "Discipline"],
  serviceArea: "Texas and surrounding states",
  headquarters: {
    city: "Leona",
    county: "Leon County",
    state: "TX",
    country: "US",
    lat: 31.1468,
    lng: -95.9766,
    // TODO: confirm street address — currently published only at city/county level.
    streetAddress: "[TODO: confirm street address]",
  },
  founded: "[TODO: confirm founding year]",
  contact: {
    email: "heath@rentnashco.com",
    backupEmail: "heathnash83@gmail.com",
    phone: "[TODO: confirm dispatch line]",
    phoneHref: "tel:+10000000000",
  },
  domain: "rentnashco.com",
  url: "https://rentnashco.com",
  insurance: {
    // TODO: confirm exact GL / Auto / WC / Excess / Pollution limits.
    coverage: "GL · Commercial Auto · Workers' Comp · Excess · Pollution",
    note: "Certificates of Insurance issued on request",
  },
  // ISN/Avetta status — show badges only when verified subscription is active.
  // Until verified, the "ready prequal package" language stays on the
  // /capabilities compliance section because it is defensible.
  // TODO: flip `verified: true` when subscriptions are confirmed active.
  prequal: { isnVerified: false, avettaVerified: false },
  // Owned fleet count — keep this aligned with the asset register.
  // 10 light towers, 8 articulated dump trucks, 5 excavators (mini through 35-ton, tracked + wheeled),
  // 1 motor grader, 2 service / fuel-lube trucks. 26 owned assets total.
  fleetCounts: {
    lightTowers: 10,
    dumpTrucks: 8,
    excavators: 5,
    motorGraders: 1,
    serviceTrucks: 2,
    total: 26,
  },
} as const;

// ---------------------------------------------------------------------------
// Capabilities — what we deliver. Categories, not SKUs.
// ---------------------------------------------------------------------------

export const capabilities = [
  {
    slug: "site-lighting",
    name: "Site Lighting",
    summary:
      "24/7 light towers for round-the-clock work fronts. Owned fleet, scalable to 50+ units via dispatch network.",
    detail:
      "24/7 light tower fleet — diesel and dual-fuel options, towable, suitable for lay-down yards, perimeter, modular yard, and night civil. Owned fleet of 10 units, scalable beyond 50 via dispatch network. Continuous-run service support included.",
  },
  {
    slug: "civil-iron",
    name: "Civil Iron",
    summary:
      "Excavators, articulated dump trucks, motor graders. Bare rental for client-operated civil scope.",
    detail:
      "Excavators (mini, midi, wheeled, and 35-ton tracked), articulated dump trucks, motor graders. Bare rental — client provides operators. Suited for site prep, mass earthworks, pad work, haul road maintenance. Owned fleet currently includes Caterpillar, Develon, and John Deere units.",
  },
  {
    slug: "site-support",
    name: "Site Support",
    summary:
      "Service and fuel-lube trucks running 24/7 to keep iron in service. On-site dispatch coordination.",
    detail:
      "Service / fuel-lube trucks running 24/7 to keep iron in service. On-site dispatch coordination across multiple work fronts. Dispatch is Texas-based — no out-of-state mobilization delay.",
  },
  {
    slug: "full-package-bare-rental",
    name: "Full-Package Bare Rental",
    summary:
      "Aerial, climate, storage, gensets, fence, trailers — delivered through our sub-rent network. One PO, full site coverage.",
    // TODO: replace 'major Texas equipment dealers' with named partners + logos once master sub-rent agreements are signed.
    detail:
      "Through master sub-rent agreements with major Texas equipment dealers, Nashco delivers a single-PO bare rental package covering aerial, climate, storage, gensets, fence, and trailers — one invoice, one dispatch contact, one billing cycle for the entire site.",
  },
] as const;

// ---------------------------------------------------------------------------
// Compliance & onboarding — defensible language only.
// ---------------------------------------------------------------------------

export const compliance = [
  "ISN / Avetta / Veriforce-ready prequal package available on request",
  "Insurance: GL, Commercial Auto, Workers' Comp, Excess, Pollution [TODO: confirm exact limits]",
  "OSHA-compliant safety program; TRIR / EMR available on request",
  "Texas-based dispatch — no out-of-state mobilization delay",
  "Bonding capacity for single-job and aggregate megaproject scopes [TODO: confirm bonding capacity]",
] as const;

// ---------------------------------------------------------------------------
// Projects — active references and capability targets.
// ---------------------------------------------------------------------------

// Tesla GFTX reference is intentionally generic — no phase names, no scope detail.
// TODO: expand Tesla reference detail only after Kelly Nelson reference letter
// is signed AND civil contractor confirms public naming is permitted under MSA.
export const activeProjects = [
  {
    name: "Tesla Giga Texas (GFTX)",
    location: "Travis County, TX",
    summary:
      "Active on Tesla Giga Texas (Travis County, TX) since 2024 — 25+ assets, 24/7 continuous duty across multiple work fronts.",
    referenceLetterUrl: null as string | null, // TODO: link to Kelly Nelson reference letter PDF when signed.
  },
] as const;

export const capabilityTargets = [
  { name: "OpenAI / Crusoe Stargate", location: "Abilene, TX" },
  { name: "Lancium Frontier Campus", location: "Shackelford County, TX" },
  { name: "Fermi America Advanced Energy & Intelligence Campus", location: "Amarillo, TX" },
  { name: "NextDecade Rio Grande LNG", location: "Brownsville, TX" },
  { name: "Texas LNG", location: "Brownsville, TX" },
  { name: "Sempra Port Arthur LNG", location: "Port Arthur, TX" },
  { name: "GlobalWafers Sherman Fab", location: "Sherman, TX" },
  { name: "Texas Energy Fund power generation projects", location: "Statewide, TX" },
] as const;

// "Built For" — sectors this fleet and dispatch posture is tuned for.
export const builtFor = [
  "Data centers and AI compute campuses (Stargate, hyperscale, colo)",
  "LNG export terminals (Brownsville, Sabine Pass, Freeport, Port Arthur)",
  "Semiconductor fabs and wafer plants",
  "EV, robotics, and advanced industrial manufacturing",
  "Gas-fired power generation (Texas Energy Fund projects)",
] as const;

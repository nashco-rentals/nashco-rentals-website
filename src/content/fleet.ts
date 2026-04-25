export type FleetCategory = "excavator" | "dump-truck" | "sub-rental";

export type FleetAsset = {
  slug: string;
  make: string;
  model: string;
  year: number;
  qty: number;
  category: FleetCategory;
  class: string;
  headline: string;
  specs: Array<{ label: string; value: string }>;
  applications: string[];
  status: "available" | "limited" | "on-request";
  image?: string; // /fleet/<slug>.<ext> — omit when no photo yet
};

export const fleet: FleetAsset[] = [
  {
    slug: "develon-dx350",
    make: "Develon",
    model: "DX350 LC-7",
    year: 2024,
    qty: 2,
    category: "excavator",
    class: "35-ton tracked excavator",
    headline: "35-ton workhorse for mass excavation and heavy civil production.",
    specs: [
      { label: "Operating weight", value: "~77,500 lb" },
      { label: "Engine", value: "Scania DC13, Tier 4 Final" },
      { label: "Bucket capacity", value: "Up to 2.2 yd³" },
      { label: "Max dig depth", value: "~24 ft" },
      { label: "Year", value: "2024" },
    ],
    applications: ["Mass excavation", "Pad prep", "Utility trenching", "Loadout"],
    status: "available",
    image: "/fleet/develon-dx350.webp",
  },
  {
    slug: "cat-306",
    make: "Caterpillar",
    model: "306 (wheeled)",
    year: 2019,
    qty: 1,
    category: "excavator",
    class: "Compact wheeled excavator",
    headline: "Rubber-tire compact for urban sites, landscaping, and quick redeploys.",
    specs: [
      { label: "Operating weight", value: "~14,500 lb" },
      { label: "Configuration", value: "Wheeled" },
      { label: "Typical applications", value: "Utility work, finish grading" },
      { label: "Year", value: "2019" },
    ],
    applications: ["Utility work", "Finish grading", "Tight-access jobs"],
    status: "available",
  },
  {
    slug: "mini-cat",
    make: "Caterpillar",
    model: "Mini Excavator",
    year: 2023,
    qty: 1,
    category: "excavator",
    class: "Mini excavator",
    headline: "Late-model mini for precision work, backfill, and site cleanup.",
    specs: [
      { label: "Category", value: "Mini excavator" },
      { label: "Year", value: "2023" },
      { label: "Typical applications", value: "Backfill, trench work" },
    ],
    applications: ["Backfill", "Trenching", "Site cleanup"],
    status: "available",
  },
  {
    slug: "john-deere-260-dump",
    make: "John Deere",
    model: "260E Articulated Dump Truck",
    year: 2021,
    qty: 8,
    category: "dump-truck",
    class: "Off-highway articulated dump truck",
    headline: "Eight-unit haul fleet for continuous dirt operations.",
    specs: [
      { label: "Payload class", value: "~30-ton articulated" },
      { label: "Fleet size", value: "8 units" },
      { label: "Year", value: "2021" },
      { label: "Configuration", value: "6x6 articulated" },
    ],
    applications: ["Mass haul", "Cut-and-fill", "Aggregate cycles"],
    status: "available",
    image: "/fleet/john-deere-260.png",
  },
];

export const fleetSummary = {
  excavators: fleet.filter((f) => f.category === "excavator").reduce((a, f) => a + f.qty, 0),
  dumpTrucks: fleet.filter((f) => f.category === "dump-truck").reduce((a, f) => a + f.qty, 0),
  avgFleetAge: "Late-model — 2019 to 2024",
};

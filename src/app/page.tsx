import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { site, industries, services } from "@/content/site";
import { fleet, fleetSummary } from "@/content/fleet";

export default function Home() {
  return (
    <>
      <SchemaMarkup />
      <Nav />
      <main className="flex-1">
        <Hero />
        <Principles />
        <FleetSnapshot />
        <Industries />
        <ServicesStrip />
        <CapabilitiesProof />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

/* -------------------- Hero -------------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-ink-900">
      {/* Placeholder hero backdrop:
          REPLACE with full-bleed on-site photo of a Develon DX350 or the dump-truck fleet at work.
          Shot list: low-angle sunrise/sunset, Texas site context, operator in cab, dust or movement. */}
      <div aria-hidden className="absolute inset-0 bg-grid opacity-60" />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 60% at 80% 30%, rgba(37,99,235,0.18) 0%, rgba(10,13,20,0) 60%), radial-gradient(40% 40% at 10% 80%, rgba(59,130,246,0.12) 0%, rgba(10,13,20,0) 70%)",
        }}
      />

      <Container className="relative grid gap-12 py-24 md:grid-cols-12 md:py-32">
        <div className="md:col-span-7">
          <div className="eyebrow">Heavy Equipment Rental · Texas</div>
          <h1 className="mt-5 font-[family-name:var(--font-display)] text-[2.5rem] font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.25rem] lg:leading-[1.02]">
            <span className="text-brushed">Iron that shows up.</span>
            <br />
            <span className="text-steel-100">Operators who deliver.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-steel-300">
            {site.tagline}{" "}
            Late-model excavators, a disciplined haul fleet, and the
            reliability Tier-1 contractors expect on timelines that don&apos;t
            forgive slippage.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/fleet"
              className="btn-brushed inline-flex h-12 items-center rounded-sm px-6 text-sm font-bold uppercase tracking-[0.14em]"
            >
              View the Fleet
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center rounded-sm border border-cobalt-500 bg-cobalt-500/10 px-6 text-sm font-bold uppercase tracking-[0.14em] text-cobalt-400 transition hover:bg-cobalt-500 hover:text-white"
            >
              Request Quote
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-steel-400">
            <span className="flex items-center gap-2">
              <Dot /> Based in {site.headquarters.city}, {site.headquarters.state}
            </span>
            <span className="flex items-center gap-2">
              <Dot /> {site.serviceArea}
            </span>
            <span className="flex items-center gap-2">
              <Dot /> Fully insured · COI on request
            </span>
          </div>
        </div>

        <aside className="md:col-span-5">
          <div className="relative rounded-sm border border-white/10 bg-ink-800/60 p-6 backdrop-blur">
            <div className="eyebrow">Fleet at a glance</div>
            <div className="mt-6 space-y-5">
              <StatRow
                number={String(fleetSummary.excavators)}
                label="Excavators"
                sub="Develon DX350 · CAT 306 · Mini CAT"
              />
              <StatRow
                number={String(fleetSummary.dumpTrucks)}
                label="Articulated dump trucks"
                sub="2021 John Deere 260E"
              />
            </div>
            <div className="hairline my-6" />
            <div className="flex items-center justify-between text-xs text-steel-400">
              <span>Avg fleet age</span>
              <span className="text-steel-200">{fleetSummary.avgFleetAge}</span>
            </div>
          </div>
        </aside>
      </Container>
    </section>
  );
}

function Dot() {
  return <span className="inline-block h-1.5 w-1.5 rounded-full bg-cobalt-500" />;
}

function StatRow({ number, label, sub }: { number: string; label: string; sub: string }) {
  return (
    <div className="flex items-baseline gap-4">
      <div className="min-w-[3rem] font-[family-name:var(--font-display)] text-4xl font-bold text-brushed">
        {number}
      </div>
      <div>
        <div className="text-sm font-semibold text-steel-100">{label}</div>
        <div className="text-xs text-steel-400">{sub}</div>
      </div>
    </div>
  );
}

/* -------------------- Principles -------------------- */
function Principles() {
  const items = [
    {
      name: "Reliability",
      blurb:
        "Iron that starts. Trucks that show. Dispatch you can plan around. Our maintenance discipline is the product.",
    },
    {
      name: "Partnership",
      blurb:
        "We don't rent and run. Your PM has a direct line, and we scale up or down with the job — not against it.",
    },
    {
      name: "Discipline",
      blurb:
        "Documented service records, clean COIs, and on-site conduct that represents your project well.",
    },
  ];
  return (
    <section className="border-b border-white/5 py-20 md:py-28">
      <Container>
        <div className="max-w-2xl">
          <div className="eyebrow">How we operate</div>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-steel-100 sm:text-3xl md:text-4xl">
            Three principles. Every asset. Every job.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((p, i) => (
            <div
              key={p.name}
              className="group relative rounded-sm border border-white/8 bg-ink-800/40 p-8 transition hover:border-cobalt-500/40"
            >
              <div className="font-[family-name:var(--font-display)] text-sm font-semibold text-cobalt-400">
                0{i + 1}
              </div>
              <div className="mt-4 font-[family-name:var(--font-display)] text-2xl font-semibold text-steel-100">
                {p.name}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-steel-300">{p.blurb}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* -------------------- Fleet snapshot -------------------- */
function FleetSnapshot() {
  const featured = fleet.filter((f) => f.category !== "sub-rental").slice(0, 4);
  return (
    <section className="border-b border-white/5 bg-ink-950 py-20 md:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="eyebrow">The Fleet</div>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-steel-100 sm:text-3xl md:text-4xl">
              Late-model iron, production-ready.
            </h2>
            <p className="mt-4 text-steel-300">
              Every asset is maintained to a documented schedule. Specs are
              nominal — request a capability sheet for any project-specific
              configuration.
            </p>
          </div>
          <Link
            href="/fleet"
            className="text-sm font-semibold uppercase tracking-[0.14em] text-cobalt-400 hover:text-steel-100"
          >
            Full fleet &rarr;
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((asset) => (
            <article
              key={asset.slug}
              className="group overflow-hidden rounded-sm border border-white/8 bg-ink-800/60 transition hover:border-cobalt-500/40"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-ink-700 via-ink-800 to-ink-900">
                {asset.image ? (
                  <Image
                    src={asset.image}
                    alt={`${asset.make} ${asset.model}`}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-grid opacity-30" />
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-steel-400">
                        Photo pending
                      </div>
                    </div>
                  </>
                )}
                <div className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-sm border border-cobalt-500/40 bg-ink-900/80 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-cobalt-400">
                  {asset.qty > 1 ? `${asset.qty} Units` : "1 Unit"}
                </div>
              </div>
              <div className="p-5">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cobalt-400">
                  {asset.year} · {asset.make}
                </div>
                <h3 className="mt-1.5 font-[family-name:var(--font-display)] text-lg font-semibold text-steel-100">
                  {asset.model}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-steel-400">{asset.class}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* -------------------- Industries -------------------- */
function Industries() {
  return (
    <section className="border-b border-white/5 py-20 md:py-28">
      <Container>
        <div className="max-w-2xl">
          <div className="eyebrow">Industries served</div>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-steel-100 sm:text-3xl md:text-4xl">
            Built for the projects that can&apos;t afford to wait.
          </h2>
          <p className="mt-4 text-steel-300">
            We support Tier-1 GCs and industrial end-users on the work that
            defines Texas&apos; next decade.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {industries.map((ind, i) => (
            <div
              key={ind.slug}
              className="flex h-full flex-col rounded-sm border border-white/8 bg-ink-800/40 p-6 transition hover:border-cobalt-500/40"
            >
              <div className="font-[family-name:var(--font-display)] text-xs font-semibold text-cobalt-400">
                0{i + 1}
              </div>
              <div className="mt-3 font-[family-name:var(--font-display)] text-lg font-semibold text-steel-100">
                {ind.name}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-steel-400">{ind.blurb}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* -------------------- Services -------------------- */
function ServicesStrip() {
  return (
    <section className="border-b border-white/5 bg-ink-950 py-20 md:py-28">
      <Container>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="eyebrow">What we deliver</div>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-steel-100 sm:text-3xl md:text-4xl">
              Rentals, operated iron, and civil support.
            </h2>
            <p className="mt-4 text-steel-300">
              One phone call. One invoice. Scoped the way your project needs.
            </p>
            <Link
              href="/services"
              className="mt-6 inline-flex text-sm font-semibold uppercase tracking-[0.14em] text-cobalt-400 hover:text-steel-100"
            >
              All services &rarr;
            </Link>
          </div>
          <div className="md:col-span-8">
            <ul className="divide-y divide-white/8 border-y border-white/8">
              {services.map((s) => (
                <li
                  key={s.name}
                  className="flex items-start gap-6 py-5 transition hover:bg-ink-800/30"
                >
                  <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cobalt-500" />
                  <div>
                    <div className="font-[family-name:var(--font-display)] text-lg font-semibold text-steel-100">
                      {s.name}
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-steel-300">
                      {s.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* -------------------- Proof / capabilities -------------------- */
function CapabilitiesProof() {
  const items = [
    { k: "Late-model fleet", v: "2019 – 2024" },
    { k: "Service area", v: "Texas + neighbors" },
    { k: "Insurance", v: site.insurance.general },
    { k: "Response", v: "Quotes in 24 hrs" },
  ];
  return (
    <section className="border-b border-white/5 py-16 md:py-20">
      <Container>
        <div className="hairline" />
        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
          {items.map((i) => (
            <div key={i.k}>
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-steel-400">
                {i.k}
              </div>
              <div className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold text-brushed">
                {i.v}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* -------------------- Final CTA -------------------- */
function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 70% at 70% 50%, rgba(37,99,235,0.22) 0%, rgba(10,13,20,0) 70%)",
        }}
      />
      <Container className="relative">
        <div className="grid gap-10 rounded-sm border border-white/10 bg-ink-800/50 p-10 md:grid-cols-2 md:p-14">
          <div>
            <div className="eyebrow">Next step</div>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl">
              <span className="text-brushed">Tell us the job.</span>
              <br />
              <span className="text-steel-100">We&apos;ll tell you what&apos;s available.</span>
            </h2>
            <p className="mt-4 max-w-md text-steel-300">
              Send equipment needs, dates, and site location. Most quotes go out
              the same day.
            </p>
          </div>
          <div className="flex flex-col items-start justify-center gap-4">
            <Link
              href="/contact"
              className="btn-brushed inline-flex h-12 items-center rounded-sm px-6 text-sm font-bold uppercase tracking-[0.14em]"
            >
              Request a Quote
            </Link>
            <a
              href={site.contact.phoneHref}
              className="text-sm font-semibold text-steel-200 hover:text-steel-100"
            >
              Or call {site.contact.phone}
            </a>
            <a
              href={`mailto:${site.contact.email}`}
              className="text-sm text-steel-400 hover:text-steel-200"
            >
              {site.contact.email}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

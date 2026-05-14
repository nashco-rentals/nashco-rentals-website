import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { site, capabilities, builtFor } from "@/content/site";

export default function Home() {
  return (
    <>
      <SchemaMarkup />
      <Nav />
      <main className="flex-1">
        <Hero />
        <TrustStrip />
        <CapabilityBlocks />
        <OperatingPosture />
        <BuiltFor />
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
      {/* Hero photo: LTX-2.3 generated, John Deere 260E ADT + light towers at
          dusk, Nashco logo applied as fleet decal on the cab door. Generated
          asset (not on-site photography) — re-render in LTX if/when fleet
          aesthetic changes. */}
      <Image
        src="/hero.jpg"
        alt="Nashco Rentals fleet at dusk — articulated dump truck with Nashco branding flanked by illuminated diesel light towers on a Texas industrial site"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Darkening + cobalt-tint gradient anchored bottom-left, where the H1
          sits — keeps the headline + sub copy + CTAs readable over the
          photo without crushing the equipment subject. */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(10,13,20,0.85) 0%, rgba(10,13,20,0.65) 35%, rgba(10,13,20,0.30) 60%, rgba(10,13,20,0.10) 100%), linear-gradient(180deg, rgba(10,13,20,0) 60%, rgba(10,13,20,0.55) 100%)",
        }}
      />

      <Container className="relative grid gap-12 py-24 md:grid-cols-12 md:py-32">
        <div className="md:col-span-8">
          <div className="eyebrow">Bare Rental Dispatch · Texas Megaprojects</div>
          <h1 className="mt-5 font-[family-name:var(--font-display)] text-[2.5rem] font-bold leading-[1.04] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.25rem] lg:leading-[1.02]">
            <span className="text-brushed">Iron On Time.</span>
            <br />
            <span className="text-steel-100">On Spec. On Texas Megaprojects.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-steel-100/95 [text-shadow:_0_1px_2px_rgba(0,0,0,0.6)]">
            Nashco is a 24/7 bare rental dispatch operation supplying light
            towers, civil iron, and site-support equipment to Texas industrial
            construction. Owned fleet plus a sub-rent network — one PO, full
            package, single point of contact.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="btn-brushed inline-flex h-12 items-center rounded-sm px-6 text-sm font-bold uppercase tracking-[0.14em]"
            >
              Request a Capability Brief
            </Link>
            <a
              href={site.contact.phoneHref}
              className="inline-flex h-12 items-center rounded-sm border border-cobalt-500 bg-cobalt-500/30 px-6 text-sm font-bold uppercase tracking-[0.14em] text-cobalt-400 backdrop-blur-sm transition hover:bg-cobalt-500 hover:text-white"
            >
              Call Dispatch
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* -------------------- Trust strip -------------------- */
function TrustStrip() {
  // ISN/Avetta verified badge intentionally omitted until subscription is
  // confirmed active. Defensible "ready prequal package" language lives on
  // /capabilities under the Compliance section.
  // TODO: confirm bonding capacity language once underwriter confirms limits.
  //
  // Tesla GFTX is intentionally NOT named here. Naming Tesla without prior
  // written consent likely violates MSA flow-down confidentiality, and the
  // GFTX work is performed under the Proscape Development DBA — not under
  // Nashco Rentals, LLC. Re-introduce a customer-named credential only when:
  //   (a) Tesla / civil contractor confirms public naming is permitted, AND
  //   (b) the work has transitioned from Proscape DBA to Nashco LLC.
  const items = [
    "Live fleet at some of Texas' largest industrial sites since 2024",
    "24/7 Texas-based dispatch",
    "Insured for industrial-scale projects · COI on request",
  ];
  return (
    <section className="border-b border-white/5 bg-ink-950 py-8">
      <Container>
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-center text-xs font-semibold uppercase tracking-[0.14em] text-steel-300 sm:text-sm">
          {items.map((line) => (
            <li key={line} className="flex items-center gap-3">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-cobalt-500" />
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* -------------------- Capability blocks -------------------- */
function CapabilityBlocks() {
  return (
    <section className="border-b border-white/5 py-20 md:py-28">
      <Container>
        <div className="max-w-2xl">
          <div className="eyebrow">Capabilities</div>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-steel-100 sm:text-3xl md:text-4xl">
            Owned fleet for what we run every day.
            <br />
            Sub-rent network for the rest of the package.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c, i) => (
            <Link
              key={c.slug}
              href={`/capabilities#${c.slug}`}
              className="group flex flex-col rounded-sm border border-white/8 bg-ink-800/40 p-6 transition hover:border-cobalt-500/40"
            >
              <div className="font-[family-name:var(--font-display)] text-sm font-semibold text-cobalt-400">
                0{i + 1}
              </div>
              <div className="mt-4 font-[family-name:var(--font-display)] text-xl font-semibold text-steel-100">
                {c.name}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-steel-300">
                {c.summary}
              </p>
              <div className="mt-6 text-[11px] font-semibold uppercase tracking-[0.14em] text-cobalt-400 transition group-hover:text-steel-100">
                Read more &rarr;
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* -------------------- Operating posture (was: Reference) -------------------- */
//
// Customer-named reference (Tesla GFTX) intentionally NOT shown here. See the
// TrustStrip comment above for the two conditions required before any
// customer-named credential goes back on this page.
//
// Until those conditions are met, this block makes a defensible posture claim
// that is true of the operating fleet without naming customers or projects.
function OperatingPosture() {
  return (
    <section className="border-b border-white/5 bg-ink-950 py-20 md:py-28">
      <Container>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="eyebrow">Operating posture</div>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-steel-100 sm:text-3xl md:text-4xl">
              Built for 24/7 work fronts on Texas megaproject sites.
            </h2>
          </div>
          <div className="md:col-span-7">
            <div className="rounded-sm border border-white/10 bg-ink-800/60 p-8 md:p-10">
              <p className="leading-relaxed text-steel-300">
                Owned fleet operating in continuous duty across Texas
                industrial construction since 2024. Light towers, civil iron,
                and site support — dispatched same-day from a Texas-based
                operator, scaled with the schedule, not against it.
              </p>
              <p className="mt-4 leading-relaxed text-steel-300">
                Project-specific references and COIs available on request
                through prequal.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* -------------------- Built For -------------------- */
function BuiltFor() {
  return (
    <section className="border-b border-white/5 py-20 md:py-28">
      <Container>
        <div className="max-w-2xl">
          <div className="eyebrow">Built for</div>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-steel-100 sm:text-3xl md:text-4xl">
            Built for Texas megaprojects.
          </h2>
          <p className="mt-4 text-steel-300">
            Nashco&apos;s fleet, dispatch, and sub-rent network are tuned for
            the construction phases of:
          </p>
        </div>

        <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {builtFor.map((line, i) => (
            <li
              key={line}
              className="flex items-start gap-4 rounded-sm border border-white/8 bg-ink-800/40 p-6"
            >
              <div className="font-[family-name:var(--font-display)] text-sm font-semibold text-cobalt-400">
                0{i + 1}
              </div>
              <p className="text-sm leading-relaxed text-steel-200">{line}</p>
            </li>
          ))}
        </ul>
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
              <span className="text-brushed">Need a bare rental package</span>
              <br />
              <span className="text-steel-100">on your site?</span>
            </h2>
            <p className="mt-4 max-w-md text-steel-300">
              Send a short message. We respond within 4 hours during business
              hours, same day for active dispatch.
            </p>
          </div>
          <div className="flex flex-col items-start justify-center gap-4">
            <Link
              href="/contact"
              className="btn-brushed inline-flex h-12 items-center rounded-sm px-6 text-sm font-bold uppercase tracking-[0.14em]"
            >
              Request a Capability Brief
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

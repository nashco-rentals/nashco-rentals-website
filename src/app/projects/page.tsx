import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { capabilityTargets } from "@/content/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Capability targets across Texas megaprojects — data centers, LNG terminals, semiconductor fabs, and gas-fired power generation. Project-specific references available on request.",
};

// Customer-named "Active" reference (Tesla GFTX) intentionally NOT shown here.
// Two reasons:
//   1. Naming Tesla without prior written consent likely violates MSA flow-down
//      confidentiality.
//   2. The work at GFTX is performed under the Proscape Development DBA, not
//      under Nashco Rentals, LLC — so Nashco the entity cannot defensibly
//      claim that credential to a procurement lead doing diligence.
// Re-introduce a customer-named "Active" block here only when:
//   (a) Tesla / civil contractor confirms public naming is permitted, AND
//   (b) the work is transitioned from Proscape DBA to Nashco LLC.
// Until then, the page is "capability targets" only — public-tier project
// names where we'd genuinely deploy on request.

export default function ProjectsPage() {
  return (
    <PageShell
      eyebrow="Projects"
      title={
        <>
          <span className="text-brushed">Built for Texas&apos;</span>
          <br />
          <span className="text-steel-100">largest industrial builds.</span>
        </>
      }
      intro={
        <p>
          Capability targets below — Texas megaprojects within our deployment
          range. For project-specific references and COIs during prequal,
          request a capability brief through the contact page.
        </p>
      }
    >
      <section>
        <div className="eyebrow">Operating posture</div>
        <div className="mt-6 rounded-sm border border-white/10 bg-ink-800/40 p-8 md:p-10">
          <p className="max-w-3xl leading-relaxed text-steel-300">
            Owned fleet operating in continuous duty across Texas industrial
            construction since 2024. Light towers, civil iron, and site support
            — dispatched same-day from a Texas-based operator, scaled with the
            schedule. Project-specific references and COIs available on request
            through prequal.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <div className="eyebrow">Active reference</div>
        <div className="mt-6 rounded-sm border border-white/10 bg-ink-800/40 p-8 md:p-10">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-steel-100 sm:text-3xl">
            Texas Giga build · Travis County
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-steel-300">
            Bare rental fleet running 24/7 on continuous civil construction
            since 2024 — light towers, civil iron, dump trucks, motor graders,
            and service trucks across multiple work fronts. Reference letter
            and project-specific COIs available on request through prequal.
          </p>
          {/* TODO: when Kelly Nelson reference letter is signed, host as /docs/nashco-tx-giga-reference.pdf and convert this line to a real link. Confirm permission to name "Tesla" before any further specificity. */}
          <p className="mt-6 text-xs uppercase tracking-[0.2em] text-steel-500">
            Reference letter (PDF) — available on request
          </p>
        </div>
      </section>

      <section className="mt-16">
        <div className="eyebrow">Capability targets</div>
        <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-display)] text-2xl font-semibold text-steel-100 sm:text-3xl">
          Texas megaprojects within our deployment range.
        </h2>
        <p className="mt-3 max-w-2xl text-steel-300">
          Reach out for project-specific capability briefs.
        </p>

        <ul className="mt-10 grid gap-3 md:grid-cols-2">
          {capabilityTargets.map((t) => (
            <li
              key={t.name}
              className="flex items-baseline justify-between gap-4 rounded-sm border border-white/8 bg-ink-800/40 px-5 py-4"
            >
              <span className="font-[family-name:var(--font-display)] text-sm font-semibold text-steel-100">
                {t.name}
              </span>
              <span className="shrink-0 text-xs text-steel-400">{t.location}</span>
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}

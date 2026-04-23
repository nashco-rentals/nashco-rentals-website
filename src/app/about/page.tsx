import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "NASHCO Rentals, LLC — a Texas-based heavy equipment rental and civil support company built on reliability, partnership, and discipline.",
};

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About NASHCO"
      title={
        <>
          <span className="text-brushed">Texas-based.</span>{" "}
          <span className="text-steel-100">Built for the work.</span>
        </>
      }
      intro={
        <p>
          NASHCO Rentals, LLC is a heavy equipment rental and civil support
          company based in {site.headquarters.city}, {site.headquarters.state}.
          We serve Tier-1 contractors, industrial end-users, and infrastructure
          builders across {site.serviceArea.toLowerCase()}.
        </p>
      }
    >
      <div className="grid gap-12 md:grid-cols-2">
        <section>
          <div className="eyebrow">Operating principles</div>
          <ul className="mt-6 space-y-6">
            {[
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
            ].map((p) => (
              <li key={p.name} className="border-l-2 border-cobalt-500 pl-5">
                <div className="font-[family-name:var(--font-display)] text-lg font-semibold text-steel-100">
                  {p.name}
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-steel-300">{p.blurb}</p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <div className="eyebrow">Service posture</div>
          <dl className="mt-6 grid gap-5">
            <div className="rounded-sm border border-white/8 bg-ink-800/40 p-5">
              <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-steel-400">
                Headquarters
              </dt>
              <dd className="mt-2 text-steel-100">
                {site.headquarters.city}, {site.headquarters.county},{" "}
                {site.headquarters.state}
              </dd>
            </div>
            <div className="rounded-sm border border-white/8 bg-ink-800/40 p-5">
              <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-steel-400">
                Service area
              </dt>
              <dd className="mt-2 text-steel-100">{site.serviceArea}</dd>
            </div>
            <div className="rounded-sm border border-white/8 bg-ink-800/40 p-5">
              <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-steel-400">
                Insurance
              </dt>
              <dd className="mt-2 text-steel-100">
                {site.insurance.general}
                <div className="mt-1 text-sm text-steel-400">
                  Certificates of Insurance issued on request.
                </div>
              </dd>
            </div>
            <div className="rounded-sm border border-white/8 bg-ink-800/40 p-5">
              <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-steel-400">
                Safety
              </dt>
              <dd className="mt-2 text-steel-100">
                Documented maintenance logs on every asset. On-site conduct
                standards for operators and subs.
              </dd>
            </div>
          </dl>
        </section>
      </div>
    </PageShell>
  );
}

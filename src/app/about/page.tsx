import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Nashco is a Texas-based bare rental and dispatch operation supplying industrial construction across the state — light towers, civil iron, and site support, plus a full-package sub-rent network.",
};

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About Nashco"
      title={
        <>
          <span className="text-brushed">Texas-based.</span>{" "}
          <span className="text-steel-100">Built for the work.</span>
        </>
      }
      intro={
        <p>
          Nashco is a Texas-based bare rental and dispatch operation supplying
          industrial construction across the state. We supply iron and the
          dispatch infrastructure to keep it running — light towers, civil
          equipment, site support — directly from owned fleet, plus a
          full-package bare rental capability through our sub-rent network with
          the major Texas dealers.
        </p>
      }
    >
      <div className="grid gap-12 md:grid-cols-2">
        <section>
          <p className="text-steel-300">
            We work where construction is hardest: 24/7 sites, mega-scale
            civil, modular assembly, and time-critical commissioning. We&apos;re
            the call you make when downtime isn&apos;t an option.
          </p>

          <div className="hairline mt-10" />

          <dl className="mt-10 space-y-6 text-sm">
            <div>
              <dt className="eyebrow">Founded</dt>
              <dd className="mt-2 text-steel-200">{site.founded}</dd>
            </div>
            <div>
              <dt className="eyebrow">Headquartered</dt>
              <dd className="mt-2 text-steel-200">
                {site.headquarters.city}, {site.headquarters.county},{" "}
                {site.headquarters.state}
                <div className="mt-1 text-xs text-steel-500">
                  {site.headquarters.streetAddress}
                </div>
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Owner</dt>
              <dd className="mt-2 text-steel-200">Heath Nash</dd>
            </div>
            <div>
              <dt className="eyebrow">Service area</dt>
              <dd className="mt-2 text-steel-200">{site.serviceArea}</dd>
            </div>
          </dl>
        </section>

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
                <p className="mt-1.5 text-sm leading-relaxed text-steel-300">
                  {p.blurb}
                </p>
              </li>
            ))}
          </ul>

          <div className="hairline mt-10" />

          <div className="mt-10">
            <div className="eyebrow">Certifications &amp; memberships</div>
            <p className="mt-3 text-sm text-steel-300">
              {/* Per Heath: ISN/Avetta badges only display when subscriptions are
                  verified active. Until then, only the defensible "ready prequal
                  package available on request" language is shown. */}
              ISN / Avetta / Veriforce-ready prequal package available on
              request.
              <br />
              <span className="text-steel-500">
                [TODO: confirm ISN / Avetta verified status; add badges only when
                subscriptions are active.]
              </span>
            </p>
          </div>
        </section>
      </div>
    </PageShell>
  );
}

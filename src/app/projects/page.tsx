import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { activeProjects, capabilityTargets } from "@/content/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Active references and capability targets across Texas megaprojects — data centers, LNG terminals, semiconductor fabs, and gas-fired power generation.",
};

export default function ProjectsPage() {
  return (
    <PageShell
      eyebrow="Projects"
      title={
        <>
          <span className="text-brushed">Active on Texas&apos;</span>
          <br />
          <span className="text-steel-100">largest industrial builds.</span>
        </>
      }
      intro={
        <p>
          Reference scope below. For project-specific capability briefs, request
          one through the contact page.
        </p>
      }
    >
      <section>
        <div className="eyebrow">Active</div>
        <div className="mt-6 grid gap-6">
          {activeProjects.map((p) => (
            <article
              key={p.name}
              className="rounded-sm border border-white/10 bg-ink-800/40 p-8 md:p-10"
            >
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cobalt-400">
                {p.location}
              </div>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold text-steel-100 sm:text-3xl">
                {p.name}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-steel-300">
                {p.summary}
              </p>
              {p.referenceLetterUrl ? (
                <a
                  href={p.referenceLetterUrl}
                  className="mt-6 inline-flex text-sm font-semibold uppercase tracking-[0.14em] text-cobalt-400 hover:text-steel-100"
                >
                  Read the reference letter (PDF) &rarr;
                </a>
              ) : (
                <div className="mt-6 text-xs text-steel-500">
                  {/* TODO: replace with link to Kelly Nelson reference letter PDF once signed. */}
                  [TODO: link reference letter once signed]
                </div>
              )}
            </article>
          ))}
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

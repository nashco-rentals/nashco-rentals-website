import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Request a Capability Brief",
  description:
    "Request a capability brief from Nashco. We respond within 4 hours during business hours, same day for active dispatch on Texas megaprojects.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="flex-1 border-t border-white/5">
        <Container className="py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="eyebrow">Contact dispatch</div>
              <h1 className="mt-5 font-[family-name:var(--font-display)] text-[2.25rem] font-bold leading-[1.05] tracking-tight sm:text-4xl md:text-5xl">
                <span className="text-brushed">Need a bare rental package</span>
                <br />
                <span className="text-steel-100">on your site?</span>
              </h1>
              <p className="mt-6 text-steel-300">
                Send a short message. We respond within 4 hours during business
                hours, same day for active dispatch.
              </p>

              <div className="hairline mt-10" />

              <dl className="mt-10 space-y-6 text-sm">
                <div>
                  <dt className="eyebrow">Email</dt>
                  <dd className="mt-2 text-steel-200">
                    <a
                      href={`mailto:${site.contact.email}`}
                      className="hover:text-steel-100"
                    >
                      {site.contact.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow">Phone</dt>
                  <dd className="mt-2 text-steel-200">
                    <a
                      href={site.contact.phoneHref}
                      className="hover:text-steel-100"
                    >
                      {site.contact.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow">Address</dt>
                  <dd className="mt-2 text-steel-200">
                    {site.headquarters.city}, {site.headquarters.county},{" "}
                    {site.headquarters.state}
                    <div className="mt-1 text-xs text-steel-500">
                      {site.headquarters.streetAddress}
                    </div>
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow">Hours</dt>
                  <dd className="mt-2 text-steel-200">
                    24/7 dispatch · Office Mon–Fri 8a–6p CT
                  </dd>
                </div>
              </dl>
            </div>

            <div className="md:col-span-7">
              <div className="rounded-sm border border-white/10 bg-ink-800/40 p-6 md:p-10">
                <QuoteForm />
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

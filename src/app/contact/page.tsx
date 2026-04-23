import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Request a quote for heavy equipment rental and civil support from NASHCO Rentals. Most quotes returned the same business day.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="flex-1 border-t border-white/5">
        <Container className="py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="eyebrow">Request a quote</div>
              <h1 className="mt-5 font-[family-name:var(--font-display)] text-[2.25rem] font-bold leading-[1.05] tracking-tight sm:text-4xl md:text-5xl">
                <span className="text-brushed">Tell us the job.</span>
                <br />
                <span className="text-steel-100">We&apos;ll tell you what&apos;s available.</span>
              </h1>
              <p className="mt-6 text-steel-300">
                Send equipment, dates, and site location. Most requests get a
                response within one business day — often the same day.
              </p>

              <div className="hairline mt-10" />

              <dl className="mt-10 space-y-6 text-sm">
                <div>
                  <dt className="eyebrow">Direct</dt>
                  <dd className="mt-2 space-y-1 text-steel-200">
                    <div>
                      <a
                        href={`mailto:${site.contact.email}`}
                        className="hover:text-steel-100"
                      >
                        {site.contact.email}
                      </a>
                    </div>
                    <div>
                      <a
                        href={site.contact.phoneHref}
                        className="hover:text-steel-100"
                      >
                        {site.contact.phone}
                      </a>
                    </div>
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow">Based in</dt>
                  <dd className="mt-2 text-steel-200">
                    {site.headquarters.city}, {site.headquarters.state} · serving{" "}
                    {site.serviceArea.toLowerCase()}
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow">Insurance</dt>
                  <dd className="mt-2 text-steel-200">
                    {site.insurance.general} · COI on request
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

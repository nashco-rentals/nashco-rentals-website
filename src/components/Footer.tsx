import Link from "next/link";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/5 bg-ink-950">
      <Container className="grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-steel-300">
            Heavy equipment rental and civil support built on reliability,
            partnership, and discipline. Based in {site.headquarters.city}, {site.headquarters.state} —
            serving {site.serviceArea.toLowerCase()}.
          </p>
        </div>

        <div>
          <div className="eyebrow">Company</div>
          <ul className="mt-4 space-y-2 text-sm text-steel-300">
            <li><Link href="/fleet" className="hover:text-steel-100">Fleet</Link></li>
            <li><Link href="/services" className="hover:text-steel-100">Services</Link></li>
            <li><Link href="/industries" className="hover:text-steel-100">Industries</Link></li>
            <li><Link href="/about" className="hover:text-steel-100">About</Link></li>
          </ul>
        </div>

        <div>
          <div className="eyebrow">Contact</div>
          <ul className="mt-4 space-y-2 text-sm text-steel-300">
            <li>
              <a href={`mailto:${site.contact.email}`} className="hover:text-steel-100">
                {site.contact.email}
              </a>
            </li>
            <li>
              <a href={site.contact.phoneHref} className="hover:text-steel-100">
                {site.contact.phone}
              </a>
            </li>
            <li className="text-steel-400">
              {site.headquarters.city}, {site.headquarters.state}
            </li>
          </ul>
        </div>
      </Container>

      <div className="hairline" />

      <Container className="flex flex-col items-start gap-2 py-6 text-xs text-steel-400 md:flex-row md:items-center md:justify-between">
        <div>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</div>
        <div>Texas DBA · Fully insured · Equal opportunity vendor</div>
      </Container>
    </footer>
  );
}

import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

const siteUrl = "https://rentnashco.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nashco Rentals — 24/7 Bare Rental Dispatch for Texas Megaprojects",
    template: "%s · Nashco Rentals",
  },
  description:
    "24/7 bare rental dispatch supplying light towers, civil iron, and site-support equipment to Texas industrial construction. Owned fleet plus sub-rent network — one PO, single point of contact.",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Nashco Rentals",
    title: "Nashco Rentals — 24/7 Bare Rental Dispatch for Texas Megaprojects",
    description:
      "Light towers, civil iron, site support. Owned fleet plus sub-rent network. One PO, full package, single point of contact.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nashco Rentals",
    description:
      "24/7 bare rental dispatch for Texas megaprojects. Owned fleet plus sub-rent network.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink-900 text-steel-100">
        {children}
      </body>
    </html>
  );
}

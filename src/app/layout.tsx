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
    default: "NASHCO Rentals — Heavy Equipment Rental & Civil Support, Texas",
    template: "%s · NASHCO Rentals",
  },
  description:
    "Texas-based heavy equipment rental and civil support for Tier-1 contractors, industrial, and infrastructure builders. Late-model excavators and dump trucks, reliable dispatch, enterprise-grade service.",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "NASHCO Rentals",
    title: "NASHCO Rentals — Heavy Equipment Rental & Civil Support",
    description:
      "Texas-based heavy equipment rental and civil support. Reliability, Partnership, Discipline.",
  },
  twitter: {
    card: "summary_large_image",
    title: "NASHCO Rentals",
    description:
      "Texas-based heavy equipment rental and civil support.",
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

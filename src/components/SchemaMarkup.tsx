import { site, capabilities } from "@/content/site";

export function SchemaMarkup() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "EquipmentRental"],
    "@id": `${site.url}#business`,
    name: site.name,
    alternateName: site.shortName,
    url: site.url,
    email: site.contact.email,
    telephone: site.contact.phone,
    description: site.positioning,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.headquarters.city,
      addressRegion: site.headquarters.state,
      addressCountry: site.headquarters.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.headquarters.lat,
      longitude: site.headquarters.lng,
    },
    areaServed: [
      { "@type": "State", name: "Texas" },
      { "@type": "Place", name: site.serviceArea },
    ],
    // Capability-level offers — no per-SKU listings, since the owned fleet is
    // committed long-term and individual asset availability isn't public.
    makesOffer: capabilities.map((c) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: c.name,
        description: c.summary,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
    />
  );
}

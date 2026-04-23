import { site } from "@/content/site";
import { fleet } from "@/content/fleet";

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
    description: site.tagline,
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
    makesOffer: fleet.map((f) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: `${f.year} ${f.make} ${f.model}`,
        category: f.class,
        description: f.headline,
        brand: f.make,
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

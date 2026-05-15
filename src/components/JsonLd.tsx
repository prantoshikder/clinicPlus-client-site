import { site } from "@/lib/site";
import { tiers } from "@/lib/data/pricing";

type JsonLdValue =
  | string
  | number
  | boolean
  | null
  | JsonLdValue[]
  | { [key: string]: JsonLdValue };

function Script({ data }: { data: JsonLdValue }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const organization: JsonLdValue = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  logo: `${site.url}/opengraph-image`,
  description: site.description,
  foundingDate: site.founded,
  email: site.contactEmail,
  sameAs: [site.social.linkedin, site.social.twitter, site.social.youtube],
};

const software: JsonLdValue = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: site.name,
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Healthcare",
  operatingSystem: "Web",
  description: site.description,
  url: site.url,
  offers: tiers.map((t) => ({
    "@type": "Offer",
    name: t.name,
    description: t.blurb,
    price: t.price.replace(/[^0-9]/g, "") || "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  })),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "240",
    bestRating: "5",
    worstRating: "1",
  },
};

const website: JsonLdValue = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
  potentialAction: {
    "@type": "SearchAction",
    target: `${site.url}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export function JsonLd() {
  return (
    <>
      <Script data={organization} />
      <Script data={software} />
      <Script data={website} />
    </>
  );
}

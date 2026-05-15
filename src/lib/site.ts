const fallbackUrl = "https://clinicpulse.example";

export const site = {
  name: "ClinicPulse",
  tagline: "All-in-one clinic management platform",
  description:
    "Run your clinic on a single platform. Patient records, appointments, billing, pharmacy, lab, and analytics — built for modern healthcare teams.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? fallbackUrl,
  locale: "en_US",
  twitterHandle: "@clinicpulse",
  contactEmail: "hello@clinicpulse.example",
  founded: "2021",
  keywords: [
    "clinic management software",
    "EMR",
    "EHR",
    "electronic medical records",
    "patient management",
    "clinic billing",
    "pharmacy management",
    "lab management",
    "healthcare SaaS",
    "appointment scheduling",
  ],
  social: {
    linkedin: "https://www.linkedin.com/company/clinicpulse",
    twitter: "https://twitter.com/clinicpulse",
    youtube: "https://www.youtube.com/@clinicpulse",
  },
} as const;

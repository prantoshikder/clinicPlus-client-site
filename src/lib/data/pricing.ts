export type Tier = {
  name: string;
  price: string;
  cadence: string;
  blurb: string;
  cta: string;
  featured: boolean;
  features: string[];
};

export const tiers: Tier[] = [
  {
    name: "Starter",
    price: "$49",
    cadence: "/provider / month",
    blurb: "For solo practices and small clinics getting digital.",
    cta: "Start free trial",
    featured: false,
    features: [
      "Up to 3 providers",
      "Scheduling & EMR",
      "Patient portal",
      "Email support",
    ],
  },
  {
    name: "Growth",
    price: "$89",
    cadence: "/provider / month",
    blurb: "For multi-provider clinics ready to scale operations.",
    cta: "Book a demo",
    featured: true,
    features: [
      "Everything in Starter",
      "Billing & claims",
      "Pharmacy & inventory",
      "Custom roles & audit log",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "annual",
    blurb: "For groups, hospitals, and regional networks.",
    cta: "Talk to sales",
    featured: false,
    features: [
      "Everything in Growth",
      "Multi-site analytics",
      "SSO & dedicated infra",
      "On-prem option",
      "Implementation manager",
    ],
  },
];

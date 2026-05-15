export type ModuleBlock = {
  eyebrow: string;
  title: string;
  body: string;
  points: string[];
  image: string;
  reverse: boolean;
};

export const moduleBlocks: ModuleBlock[] = [
  {
    eyebrow: "Front desk",
    title: "Check-in flows that don't stall the queue",
    body: "Patients self-register from a kiosk or phone. Staff see arrivals, room assignments, and wait times live on one screen.",
    points: [
      "Self-service intake forms",
      "Insurance eligibility check",
      "Multi-clinic queue routing",
    ],
    image:
      "https://images.unsplash.com/photo-1551601651-bc60f254d532?auto=format&fit=crop&w=1600&q=85",
    reverse: false,
  },
  {
    eyebrow: "In the exam room",
    title: "Charts that finish themselves",
    body: "Templates, voice notes, and reusable problem lists keep documentation fast. Orders, prescriptions, and referrals go out without leaving the chart.",
    points: [
      "Specialty-specific templates",
      "ePrescriptions with interaction checks",
      "One-click referral letters",
    ],
    image:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=1600&q=85",
    reverse: true,
  },
  {
    eyebrow: "Back office",
    title: "Billing that closes the loop",
    body: "Capture every billable item from clinical workflows. Reconcile payments, post claims, and chase outstanding balances without a spreadsheet.",
    points: [
      "Auto-coded invoices from notes",
      "Insurance + cash + corporate billing",
      "Aged receivables dashboard",
    ],
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=85",
    reverse: false,
  },
];

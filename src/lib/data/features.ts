import {
  CalendarCheck2,
  FileHeart,
  CreditCard,
  Pill,
  FlaskConical,
  LineChart,
  type LucideIcon,
} from "lucide-react";

export type Feature = {
  icon: LucideIcon;
  title: string;
  body: string;
};

export const features: Feature[] = [
  {
    icon: CalendarCheck2,
    title: "Smart scheduling",
    body: "Online booking, recurring visits, no-show reminders, and provider calendars synced across rooms and devices.",
  },
  {
    icon: FileHeart,
    title: "Electronic records",
    body: "Structured charts, vitals, allergies, immunizations, and templated notes that follow the patient between providers.",
  },
  {
    icon: CreditCard,
    title: "Billing & claims",
    body: "Invoice on the spot, accept cards or insurance, and submit claims with built-in code validation.",
  },
  {
    icon: Pill,
    title: "Pharmacy & inventory",
    body: "Track stock by batch and expiry, dispense at point-of-care, and flag low inventory before it runs out.",
  },
  {
    icon: FlaskConical,
    title: "Lab & diagnostics",
    body: "Send orders, capture results, and attach reports back to the patient chart with one click.",
  },
  {
    icon: LineChart,
    title: "Operations analytics",
    body: "Live dashboards for revenue, occupancy, and care quality — drill down to a clinic, room, or provider.",
  },
];

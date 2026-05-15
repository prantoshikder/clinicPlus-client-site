import {
  CalendarCheck2,
  FileHeart,
  Users,
  CreditCard,
  Pill,
  FlaskConical,
  Video,
  LineChart,
  Stethoscope,
  Building2,
  HeartPulse,
  Brain,
  Smile,
  BookOpen,
  Code,
  GraduationCap,
  Newspaper,
  MessageCircle,
  Briefcase,
  Handshake,
  Lock,
  Mail,
  Activity,
  Globe,
  Phone,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  description?: string;
  icon?: LucideIcon;
};

export type NavSection = {
  title?: string;
  items: NavItem[];
};

export type FeaturedCard = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  label: string;
};

export type NavMenu = {
  label: string;
  href?: string;
  groups?: NavSection[];
  columns?: 1 | 2;
  featured?: FeaturedCard;
};

export const topNav: NavMenu[] = [
  {
    label: "Platform",
    columns: 2,
    groups: [
      {
        title: "Clinical",
        items: [
          {
            label: "Scheduling",
            href: "#platform",
            description: "Online booking, reminders, queues",
            icon: CalendarCheck2,
          },
          {
            label: "Electronic records",
            href: "#platform",
            description: "Charts, vitals, problem lists",
            icon: FileHeart,
          },
          {
            label: "Patient portal",
            href: "#platform",
            description: "Self-service for your patients",
            icon: Users,
          },
          {
            label: "Telemedicine",
            href: "#platform",
            description: "Secure video consultations",
            icon: Video,
          },
        ],
      },
      {
        title: "Operations",
        items: [
          {
            label: "Billing & claims",
            href: "#platform",
            description: "Invoices, insurance, AR",
            icon: CreditCard,
          },
          {
            label: "Pharmacy & inventory",
            href: "#platform",
            description: "Stock, batches, dispensing",
            icon: Pill,
          },
          {
            label: "Lab & diagnostics",
            href: "#platform",
            description: "Orders, results, attachments",
            icon: FlaskConical,
          },
          {
            label: "Analytics",
            href: "#platform",
            description: "Live ops dashboards",
            icon: LineChart,
          },
        ],
      },
    ],
    featured: {
      eyebrow: "What's new",
      title: "AI-assisted note taking",
      description: "Voice → structured chart in seconds, with provider review.",
      href: "#ai",
      label: "Read announcement",
    },
  },
  {
    label: "Solutions",
    columns: 2,
    groups: [
      {
        title: "By practice",
        items: [
          {
            label: "Family practice",
            href: "#solutions",
            description: "Day-to-day primary care",
            icon: HeartPulse,
          },
          {
            label: "Specialty clinics",
            href: "#solutions",
            description: "Templates per specialty",
            icon: Stethoscope,
          },
          {
            label: "Diagnostic centers",
            href: "#solutions",
            description: "Imaging, lab, pathology",
            icon: Activity,
          },
          {
            label: "Hospital groups",
            href: "#solutions",
            description: "Multi-site, multi-region",
            icon: Building2,
          },
        ],
      },
      {
        title: "By focus",
        items: [
          {
            label: "Dental practices",
            href: "#solutions",
            description: "Dental-specific charts",
            icon: Smile,
          },
          {
            label: "Mental health",
            href: "#solutions",
            description: "Long-form notes, intake",
            icon: Brain,
          },
          {
            label: "Telehealth providers",
            href: "#solutions",
            description: "Remote-first workflows",
            icon: Video,
          },
          {
            label: "Multi-site networks",
            href: "#solutions",
            description: "One platform, many clinics",
            icon: Globe,
          },
        ],
      },
    ],
  },
  {
    label: "Resources",
    columns: 2,
    groups: [
      {
        title: "Learn",
        items: [
          {
            label: "Documentation",
            href: "#resources",
            description: "Setup guides and how-tos",
            icon: BookOpen,
          },
          {
            label: "API reference",
            href: "#resources",
            description: "Integrate ClinicPulse",
            icon: Code,
          },
          {
            label: "Help center",
            href: "#resources",
            description: "Searchable answers",
            icon: MessageCircle,
          },
        ],
      },
      {
        title: "Insights",
        items: [
          {
            label: "Blog",
            href: "#resources",
            description: "Practice tips and product news",
            icon: Newspaper,
          },
          {
            label: "Case studies",
            href: "#customers",
            description: "How clinics use ClinicPulse",
            icon: Sparkles,
          },
          {
            label: "Webinars",
            href: "#resources",
            description: "Live and on-demand training",
            icon: GraduationCap,
          },
        ],
      },
    ],
  },
  {
    label: "Company",
    columns: 1,
    groups: [
      {
        items: [
          {
            label: "About",
            href: "#company",
            description: "Our team and mission",
            icon: Users,
          },
          {
            label: "Careers",
            href: "#company",
            description: "We're hiring across teams",
            icon: Briefcase,
          },
          {
            label: "Partners",
            href: "#company",
            description: "Implementers and resellers",
            icon: Handshake,
          },
          {
            label: "Security & compliance",
            href: "#company",
            description: "HIPAA, ISO 27001, SOC 2",
            icon: Lock,
          },
          {
            label: "Contact sales",
            href: "#company",
            description: "Talk to a human",
            icon: Mail,
          },
          {
            label: "Support",
            href: "#company",
            description: "24/7 help for customers",
            icon: Phone,
          },
        ],
      },
    ],
  },
  { label: "Pricing", href: "#pricing" },
];

export const footerNav: { title: string; links: NavItem[] }[] = [
  {
    title: "Platform",
    links: [
      { label: "Scheduling", href: "#platform" },
      { label: "EMR", href: "#platform" },
      { label: "Billing", href: "#platform" },
      { label: "Pharmacy", href: "#platform" },
      { label: "Lab", href: "#platform" },
      { label: "Analytics", href: "#platform" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Family practice", href: "#solutions" },
      { label: "Specialty clinics", href: "#solutions" },
      { label: "Diagnostic centers", href: "#solutions" },
      { label: "Hospital groups", href: "#solutions" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#company" },
      { label: "Customers", href: "#customers" },
      { label: "Careers", href: "#company" },
      { label: "Press", href: "#company" },
      { label: "Contact", href: "#company" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#resources" },
      { label: "Help center", href: "#resources" },
      { label: "Status", href: "#resources" },
      { label: "Security", href: "#company" },
      { label: "Changelog", href: "#resources" },
    ],
  },
];

export const footerLegal: NavItem[] = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "DPA", href: "#" },
];

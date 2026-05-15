export type Testimonial = {
  body: string;
  name: string;
  role: string;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    body: "We replaced four separate tools with ClinicPulse in six weeks. Reception is calmer, billing is cleaner, and our doctors stopped staying late on charts.",
    name: "Dr. Priya Mehrotra",
    role: "Medical Director, Willowtree Family Care",
    avatar:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=240&q=90&crop=faces",
  },
  {
    body: "The pharmacy and inventory module alone paid for the platform. We finally know what we have in stock without counting boxes on a Friday night.",
    name: "Samuel Okafor",
    role: "Operations Lead, Atrium Family Clinics",
    avatar:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=240&q=90&crop=faces",
  },
  {
    body: "Onboarding was painless. Our staff picked it up in a day and our patients now book themselves online — that part used to be a phone-call factory.",
    name: "Maria Vasquez",
    role: "Practice Manager, Lumen Care",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=240&q=90&crop=faces",
  },
];

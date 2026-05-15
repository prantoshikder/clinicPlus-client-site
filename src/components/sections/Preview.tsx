import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Activity, Calendar, ShieldCheck, Sparkles } from "lucide-react";

const callouts = [
  {
    icon: Activity,
    title: "Live ops view",
    body: "Bookings, occupancy, revenue, and queues — refreshed every minute.",
  },
  {
    icon: Calendar,
    title: "Multi-clinic calendar",
    body: "Drag-and-drop scheduling across rooms, providers, and locations.",
  },
  {
    icon: ShieldCheck,
    title: "Audit-ready",
    body: "Every record change is logged with who, what, and when.",
  },
  {
    icon: Sparkles,
    title: "AI-assisted notes",
    body: "Voice → structured chart in seconds, with provider review.",
  },
];

export function Preview() {
  return (
    <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-2/3 bg-linear-to-b from-(--color-brand-50) to-transparent" />
      <Container>
        <SectionHeader
          eyebrow="Built for the way clinics actually work"
          title="A workspace your team will keep open all day"
          description="Everything that matters at a glance — not buried six clicks deep in a menu."
          align="center"
        />

        <div className="mt-12 md:mt-16 relative">
          <div className="relative mx-auto max-w-5xl rounded-3xl ring-1 ring-(--color-brand-900)/10 bg-white shadow-2xl shadow-(--color-brand-900)/15 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=90"
              alt="ClinicPulse analytics dashboard preview"
              width={2000}
              height={1333}
              sizes="(min-width: 1024px) 1000px, 100vw"
              loading="lazy"
              className="w-full h-auto object-cover aspect-[3/2]"
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-(--color-brand-900)/10 via-transparent to-transparent" />
          </div>

          <div className="hidden lg:block absolute -left-4 top-12 rounded-2xl bg-white ring-1 ring-(--color-brand-900)/10 shadow-xl p-4 w-72">
            <p className="text-xs uppercase tracking-wide text-(--color-muted)">
              This week
            </p>
            <p className="mt-1 text-2xl font-semibold">$ 184,920</p>
            <p className="text-xs text-(--color-brand-600)">+18% vs last week</p>
            <div className="mt-3 grid grid-cols-7 gap-1.5 items-end h-12">
              {[40, 60, 35, 80, 55, 90, 70].map((h, i) => (
                <span
                  key={i}
                  style={{ height: `${h}%` }}
                  className="rounded-sm bg-(--color-brand-300)"
                />
              ))}
            </div>
          </div>

          <div className="hidden lg:flex absolute -right-4 bottom-10 items-center gap-3 rounded-2xl bg-white ring-1 ring-(--color-brand-900)/10 shadow-xl p-4 w-64">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-(--color-brand-50) text-(--color-brand-600)">
              <Calendar className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold">8 rooms ready</p>
              <p className="text-xs text-(--color-muted)">Next slot in 7 min</p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {callouts.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-(--color-border) bg-white p-5"
            >
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-(--color-brand-50) text-(--color-brand-600)">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold">{title}</h3>
              <p className="mt-1.5 text-sm text-(--color-muted) leading-relaxed">
                {body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

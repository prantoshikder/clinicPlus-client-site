import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { features, type Feature } from "@/lib/data/features";

function FeatureCard({ icon: Icon, title, body }: Feature) {
  return (
    <div className="group rounded-2xl border border-(--color-border) bg-white p-6 hover:shadow-md hover:border-(--color-brand-300) transition">
      <div className="grid h-11 w-11 place-items-center rounded-xl bg-(--color-brand-50) text-(--color-brand-600) group-hover:bg-(--color-brand-500) group-hover:text-white transition">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-5 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-(--color-muted) leading-relaxed">{body}</p>
    </div>
  );
}

export function Features() {
  return (
    <section id="platform" className="py-16 sm:py-20 md:py-28">
      <Container>
        <SectionHeader
          eyebrow="Platform"
          title="One system for the whole clinic"
          description="Replace a stack of disconnected tools with a single record of truth. Every module shares the same patient, the same calendar, and the same financials."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </Container>
    </section>
  );
}

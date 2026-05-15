import { Container } from "@/components/ui/Container";
import { sectionStats } from "@/lib/data/stats";

export function Stats() {
  return (
    <section className="py-16">
      <Container>
        <div className="rounded-3xl bg-(--color-foreground) text-white p-8 sm:p-10 md:p-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {sectionStats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-(--color-brand-300)">
                  {s.value}
                </p>
                <p className="mt-2 text-sm text-white/70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

import { Container } from "@/components/ui/Container";
import { partners } from "@/lib/data/partners";

export function TrustBar() {
  return (
    <section className="border-y border-(--color-border) bg-(--color-surface)">
      <Container className="py-10">
        <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-(--color-muted)">
          Trusted by healthcare teams worldwide
        </p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {partners.map((p) => (
            <div
              key={p}
              className="text-center text-sm md:text-base font-semibold tracking-tight text-(--color-muted)/80 hover:text-(--color-foreground) transition"
            >
              {p}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

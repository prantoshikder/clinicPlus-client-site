import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { tiers, type Tier } from "@/lib/data/pricing";
import { cn } from "@/lib/cn";

function TierCard({ t }: { t: Tier }) {
  return (
    <div
      className={cn(
        "rounded-2xl border p-7 flex flex-col bg-white",
        t.featured
          ? "border-(--color-brand-500) ring-2 ring-(--color-brand-500)/30 shadow-xl"
          : "border-(--color-border)",
      )}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{t.name}</h3>
        {t.featured && (
          <span className="text-[10px] font-semibold tracking-widest uppercase rounded-full bg-(--color-brand-500) text-white px-2 py-1">
            Popular
          </span>
        )}
      </div>
      <p className="mt-2 text-sm text-(--color-muted)">{t.blurb}</p>
      <div className="mt-6 flex items-end gap-1">
        <span className="text-4xl font-semibold tracking-tight">{t.price}</span>
        <span className="text-sm text-(--color-muted) mb-1">{t.cadence}</span>
      </div>
      <ul className="mt-6 space-y-3 text-sm">
        {t.features.map((f) => (
          <li key={f} className="flex gap-2">
            <Check className="h-4 w-4 text-(--color-brand-600) mt-0.5" />
            {f}
          </li>
        ))}
      </ul>
      <Button
        href="#demo"
        variant={t.featured ? "primary" : "secondary"}
        size="md"
        className="mt-8"
      >
        {t.cta}
      </Button>
    </div>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-20 md:py-28 bg-(--color-surface)">
      <Container>
        <SectionHeader
          eyebrow="Pricing"
          title="Plans that grow with your clinic"
          description="Start small, add modules as you go. No setup fees on Starter and Growth."
          align="center"
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <TierCard key={t.name} t={t} />
          ))}
        </div>
      </Container>
    </section>
  );
}

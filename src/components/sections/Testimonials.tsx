import Image from "next/image";
import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { testimonials, type Testimonial } from "@/lib/data/testimonials";

function QuoteCard({ q }: { q: Testimonial }) {
  return (
    <figure className="rounded-2xl border border-(--color-border) bg-white p-6 flex flex-col">
      <div className="flex gap-0.5 text-(--color-brand-500)">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <blockquote className="mt-4 text-[15px] leading-relaxed text-(--color-foreground)">
        “{q.body}”
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 pt-6 border-t border-(--color-border)">
        <Image
          src={q.avatar}
          alt={`Photo of ${q.name}`}
          width={88}
          height={88}
          sizes="44px"
          loading="lazy"
          className="h-11 w-11 rounded-full object-cover ring-2 ring-(--color-brand-100)"
        />
        <div>
          <p className="text-sm font-semibold">{q.name}</p>
          <p className="text-xs text-(--color-muted)">{q.role}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  return (
    <section id="customers" className="py-16 sm:py-20 md:py-28">
      <Container>
        <SectionHeader
          eyebrow="Customers"
          title="Loved by clinics that take time seriously"
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((q) => (
            <QuoteCard key={q.name} q={q} />
          ))}
        </div>
      </Container>
    </section>
  );
}

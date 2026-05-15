import Image from "next/image";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { moduleBlocks, type ModuleBlock } from "@/lib/data/modules";
import { cn } from "@/lib/cn";

function ModuleRow({ block }: { block: ModuleBlock }) {
  return (
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
      <div className={cn(block.reverse && "lg:order-2")}>
        <span className="text-xs font-semibold tracking-widest uppercase text-(--color-brand-600)">
          {block.eyebrow}
        </span>
        <h3 className="mt-3 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
          {block.title}
        </h3>
        <p className="mt-4 text-(--color-muted) leading-relaxed">{block.body}</p>
        <ul className="mt-6 space-y-3">
          {block.points.map((p) => (
            <li key={p} className="flex items-start gap-3">
              <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-(--color-brand-100) text-(--color-brand-700)">
                <Check className="h-3 w-3" />
              </span>
              <span className="text-sm">{p}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={cn(block.reverse && "lg:order-1")}>
        <div className="group/img relative rounded-2xl overflow-hidden ring-1 ring-(--color-brand-900)/10 bg-white shadow-xl shadow-(--color-brand-900)/10">
          <Image
            src={block.image}
            alt={`Illustration for ${block.title}`}
            width={1600}
            height={1200}
            sizes="(min-width: 1024px) 540px, 100vw"
            loading="lazy"
            className="w-full h-auto object-cover aspect-[4/3] transition duration-700 ease-out group-hover/img:scale-[1.03]"
          />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-(--color-brand-900)/20 via-transparent to-transparent" />
        </div>
      </div>
    </div>
  );
}

export function Modules() {
  return (
    <section id="modules" className="py-16 sm:py-20 md:py-28 bg-(--color-surface)">
      <Container>
        <SectionHeader
          eyebrow="Modules"
          title="Built for every desk in the clinic"
        />

        <div className="mt-12 md:mt-16 space-y-14 md:space-y-20">
          {moduleBlocks.map((b) => (
            <ModuleRow key={b.title} block={b} />
          ))}
        </div>
      </Container>
    </section>
  );
}

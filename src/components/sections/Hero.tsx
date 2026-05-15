import Image from "next/image";
import { ArrowRight, PlayCircle, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { heroStats } from "@/lib/data/stats";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-(--color-brand-50) to-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(3,27,78,0.16),transparent_60%)]" />
      <Container className="py-14 sm:py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white border border-(--color-border) px-3 py-1 text-xs font-medium text-(--color-brand-700)">
              <ShieldCheck className="h-3.5 w-3.5" />
              HIPAA-ready · ISO 27001
            </span>

            <h1 className="mt-5 text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] sm:leading-[1.05] tracking-tight">
              Run your entire clinic on a{" "}
              <span className="text-(--color-brand-600)">single platform</span>.
            </h1>

            <p className="mt-5 text-base sm:text-lg text-(--color-muted) leading-relaxed">
              ClinicPulse unifies appointments, electronic records, billing,
              pharmacy, lab, and analytics — so your team spends less time on
              paperwork and more time on patients.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="#demo" size="lg">
                Start free trial
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="#video" variant="secondary" size="lg">
                <PlayCircle className="h-4 w-4 text-(--color-brand-600)" />
                Watch 2-min tour
              </Button>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-3 sm:gap-6 max-w-md">
              {heroStats.map((s) => (
                <div key={s.label}>
                  <dt className="text-[10px] sm:text-xs uppercase tracking-wide text-(--color-muted)">
                    {s.label}
                  </dt>
                  <dd className="mt-1 text-xl sm:text-2xl font-semibold">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl ring-1 ring-(--color-brand-900)/10 bg-white shadow-2xl shadow-(--color-brand-900)/15 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=90"
                alt="Clinician reviewing a patient chart on ClinicPulse"
                width={1600}
                height={1067}
                sizes="(min-width: 1024px) 600px, (min-width: 640px) 80vw, 100vw"
                className="w-full h-auto object-cover"
                priority
                fetchPriority="high"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-(--color-brand-900)/15 via-transparent to-transparent" />
            </div>

            <div className="hidden md:block absolute -left-6 bottom-6 rounded-xl bg-white border border-(--color-border) shadow-lg p-4 w-64">
              <p className="text-xs text-(--color-muted)">Today</p>
              <p className="mt-1 text-sm font-semibold">42 appointments booked</p>
              <div className="mt-3 h-1.5 rounded-full bg-(--color-brand-100)">
                <div className="h-1.5 w-3/4 rounded-full bg-(--color-brand-500)" />
              </div>
              <p className="mt-2 text-xs text-(--color-muted)">
                12% above weekly average
              </p>
            </div>

            <div className="hidden md:flex absolute -right-4 -top-4 items-center gap-3 rounded-xl bg-white border border-(--color-border) shadow-lg p-3">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-(--color-brand-100) text-(--color-brand-700) font-semibold">
                AK
              </div>
              <div>
                <p className="text-sm font-medium">Dr. Adaeze K.</p>
                <p className="text-xs text-(--color-muted)">Lab result ready</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

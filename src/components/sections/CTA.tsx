import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-(--color-brand-600) text-white p-8 sm:p-10 md:p-16">
          <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.18),transparent_60%)]" />
          <div className="relative grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
                See ClinicPulse running on your workflows.
              </h2>
              <p className="mt-4 text-white/80 text-base sm:text-lg max-w-lg">
                A 30-minute walkthrough on a sandbox shaped around your clinic
                — not a generic demo.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:justify-end">
              <Button href="#demo" variant="invert" size="lg">
                Book a demo
                <ArrowRight className="h-4 w-4" />
              </Button>
              <a
                href="#trial"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-5 h-12 text-sm font-medium hover:bg-white/10 transition"
              >
                Start 14-day trial
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

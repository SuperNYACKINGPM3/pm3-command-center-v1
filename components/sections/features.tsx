import {
  BrainCircuit,
  CalendarCheck2,
  Calculator,
  ListChecks,
  NotebookPen,
  Power,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { FEATURE_CARDS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { FadeIn } from "@/components/motion/fade-in";
import { Container } from "@/components/ui/container";

const ICONS: Record<string, LucideIcon> = {
  BrainCircuit,
  Power,
  Calculator,
  NotebookPen,
  CalendarCheck2,
  ShieldCheck,
  ListChecks,
};

export function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-radial-fade opacity-50" />
      <Container className="relative">
        <SectionHeading
          eyebrow="Inside the Command Center"
          title="The Tools That Enforce the Doctrine"
          description="Frameworks only work if something holds you to them. These are the systems that do."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURE_CARDS.map((card, i) => {
            const Icon = ICONS[card.icon] ?? ShieldCheck;
            return (
              <FadeIn key={card.title} delay={(i % 3) * 0.08}>
                <GlassCard strong className="h-full p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-gradient shadow-glow">
                    <Icon className="h-5 w-5 text-ink-950" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-fg">{card.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-fg-muted">{card.description}</p>
                </GlassCard>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

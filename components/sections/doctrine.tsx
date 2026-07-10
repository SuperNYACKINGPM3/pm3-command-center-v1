import { ArrowDown, BrainCircuit, ScrollText, UserCheck } from "lucide-react";
import { DOCTRINE_STEPS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { FadeIn } from "@/components/motion/fade-in";
import { Container } from "@/components/ui/container";

const ICONS = [BrainCircuit, ScrollText, UserCheck];

export function Doctrine() {
  return (
    <section id="doctrine" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-radial-fade opacity-60" />
      <Container className="relative">
        <SectionHeading
          eyebrow="The PM3 Doctrine"
          title="AI Generates. Wisdom Verifies. Human Judgment Decides."
          description="Every decision in the Command Center passes through three layers before it becomes action."
        />

        <div className="mt-16 flex flex-col items-center gap-4">
          {DOCTRINE_STEPS.map((step, i) => {
            const Icon = ICONS[i] ?? BrainCircuit;
            return (
              <div key={step.step} className="flex w-full max-w-2xl flex-col items-center">
                <FadeIn delay={i * 0.1} className="w-full">
                  <GlassCard strong className="w-full p-8 text-center sm:p-10">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-gradient shadow-glow">
                      <Icon className="h-6 w-6 text-ink-950" />
                    </div>
                    <p className="mt-5 text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">
                      Step {step.step}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-semibold text-fg">{step.title}</h3>
                    <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-fg-muted">
                      {step.description}
                    </p>
                  </GlassCard>
                </FadeIn>
                {i < DOCTRINE_STEPS.length - 1 ? (
                  <ArrowDown className="my-3 h-5 w-5 text-gold-400/60" aria-hidden />
                ) : null}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

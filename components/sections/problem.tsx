import { Flame, Repeat, Scale, ShieldOff, Swords, TrendingDown, type LucideIcon } from "lucide-react";
import { PROBLEM_CARDS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { FadeIn } from "@/components/motion/fade-in";
import { Container } from "@/components/ui/container";

const ICONS: Record<string, LucideIcon> = {
  ShieldOff,
  Flame,
  Swords,
  Repeat,
  TrendingDown,
  Scale,
};

export function Problem() {
  return (
    <section id="problem" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="The Problem"
          title="Why Traders Lose"
          description="It's rarely the strategy. It's the decision made outside the strategy — in the moment, under pressure, without a plan."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROBLEM_CARDS.map((card, i) => {
            const Icon = ICONS[card.icon] ?? ShieldOff;
            return (
              <FadeIn key={card.title} delay={i * 0.06}>
                <GlassCard className="h-full p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10">
                    <Icon className="h-5 w-5 text-red-400" />
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

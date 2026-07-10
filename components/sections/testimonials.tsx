import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { FadeIn } from "@/components/motion/fade-in";
import { Container } from "@/components/ui/container";

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="What Traders Say"
          title="Discipline, In Their Own Words"
          description="Illustrative sample quotes showing the kind of shift the doctrine is designed to create — not verified customer reviews."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.08}>
              <GlassCard className="relative flex h-full flex-col p-7">
                <span className="absolute right-5 top-5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-fg-muted">
                  Sample
                </span>
                <Quote className="h-6 w-6 text-gold-400/60" />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-fg">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 border-t border-white/5 pt-4">
                  <p className="text-sm font-semibold text-fg">{t.name}</p>
                  <p className="text-xs text-fg-muted">{t.role}</p>
                </div>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

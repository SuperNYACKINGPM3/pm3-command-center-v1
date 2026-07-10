import { Container } from "@/components/ui/container";
import { GlassCard } from "@/components/ui/glass-card";
import { FadeIn } from "@/components/motion/fade-in";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <section className="relative py-32">
      <Container>
        <FadeIn className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">
            Last updated {updated}
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-fg">
            {title}
          </h1>

          <GlassCard hover={false} className="mt-10 p-8 sm:p-10">
            <div className="prose-invert flex flex-col gap-6 text-sm leading-relaxed text-fg-muted [&_h2]:font-display [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-fg [&_p]:text-fg-muted [&_strong]:text-fg">
              {children}
            </div>
          </GlassCard>
        </FadeIn>
      </Container>
    </section>
  );
}

import {
  Calculator,
  CheckCircle2,
  Crosshair,
  LineChart,
  NotebookPen,
  RefreshCcw,
  SearchCode,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { PIPELINE_STAGES } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/motion/fade-in";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  LineChart,
  SearchCode,
  CheckCircle2,
  ShieldCheck,
  Calculator,
  Crosshair,
  NotebookPen,
  RefreshCcw,
};

export function DisciplineStack() {
  return (
    <section id="discipline-stack" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="The Discipline Stack"
          title="One Repeatable Pipeline. Every Trade."
          description="Discipline isn't a feeling — it's a pipeline. Every trade moves through the same eight gates before it's logged and reviewed."
        />

        <div className="relative mx-auto mt-16 max-w-3xl">
          <div
            aria-hidden
            className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-gold-400/60 via-gold-400/20 to-transparent sm:left-7"
          />
          <ol className="flex flex-col gap-3">
            {PIPELINE_STAGES.map((stage, i) => {
              const Icon = ICONS[stage.icon] ?? LineChart;
              return (
                <FadeIn key={stage.title} delay={i * 0.05}>
                  <li
                    className={cn(
                      "glass-panel flex items-center gap-5 rounded-2xl p-5 transition-all duration-300 hover:border-gold-400/30 sm:p-6"
                    )}
                  >
                    <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gold-gradient shadow-glow sm:h-14 sm:w-14">
                      <Icon className="h-5 w-5 text-ink-950 sm:h-6 sm:w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2.5">
                        <span className="font-mono text-xs text-gold-400/70">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="font-display text-base font-semibold text-fg sm:text-lg">
                          {stage.title}
                        </h3>
                      </div>
                      <p className="mt-1 text-sm text-fg-muted">{stage.description}</p>
                    </div>
                  </li>
                </FadeIn>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}

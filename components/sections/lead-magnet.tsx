"use client";

import { CheckCircle2, Download, FileText } from "lucide-react";
import { LEAD_MAGNET_POINTS } from "@/lib/constants";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";

export function LeadMagnet() {
  return (
    <section id="lead-magnet" className="relative py-24 sm:py-32">
      <Container>
        <FadeIn>
          <GlassCard strong hover={false} className="overflow-hidden p-8 sm:p-12 md:p-16">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
              <div>
                <Badge>Free Download</Badge>
                <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
                  The PM3 Discipline Doctrine
                </h2>
                <p className="mt-4 text-base text-fg-muted sm:text-lg">
                  A free PDF that lays out the exact framework behind the Command Center — start
                  reading before you even finish setting up your account.
                </p>

                <ul className="mt-7 flex flex-col gap-3">
                  {LEAD_MAGNET_POINTS.map((point) => (
                    <li key={point.label} className="flex items-start gap-3 text-sm text-fg">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-400" />
                      {point.label}
                    </li>
                  ))}
                </ul>

                <Button
                  size="lg"
                  className="mt-8"
                  onClick={() => document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <Download className="h-4 w-4" />
                  Get the Free PDF
                </Button>
              </div>

              <div className="relative mx-auto hidden w-full max-w-xs md:block">
                <div className="animate-float">
                  <div className="glass-panel-strong relative aspect-[3/4] rounded-2xl border-gold-400/20 p-6 shadow-glow-lg">
                    <FileText className="h-8 w-8 text-gold-400" />
                    <p className="mt-6 font-display text-xl font-semibold leading-tight text-fg">
                      The PM3
                      <br />
                      Discipline
                      <br />
                      Doctrine
                    </p>
                    <div className="mt-6 space-y-2">
                      {[1, 2, 3, 4].map((n) => (
                        <div key={n} className="h-1.5 rounded-full bg-white/10" style={{ width: `${100 - n * 12}%` }} />
                      ))}
                    </div>
                    <p className="absolute bottom-6 left-6 text-xs uppercase tracking-widest text-gold-400/70">
                      PM3™
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </FadeIn>
      </Container>
    </section>
  );
}

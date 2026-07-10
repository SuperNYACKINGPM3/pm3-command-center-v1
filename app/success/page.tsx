import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Mail } from "lucide-react";
import { SITE } from "@/lib/constants";
import { Container } from "@/components/ui/container";
import { GlassCard } from "@/components/ui/glass-card";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "You're In",
  description: "Welcome to the PM3 Trading Command Center. Check your inbox to get started.",
  robots: { index: false, follow: false },
};

export default function SuccessPage() {
  return (
    <section className="relative flex min-h-[80vh] items-center py-32">
      <div className="pointer-events-none absolute inset-0 bg-radial-fade" />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <GlassCard strong hover={false} className="p-10 sm:p-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gold-gradient shadow-glow-lg">
              <CheckCircle2 className="h-8 w-8 text-ink-950" />
            </div>

            <h1 className="mt-6 font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
              Welcome to {SITE.product}.
            </h1>
            <p className="mt-4 text-base text-fg-muted sm:text-lg">Check your inbox.</p>

            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-fg-muted">
              <Mail className="h-4 w-4 text-gold-400" />
              Your Discipline Doctrine PDF and welcome email are on the way.
            </div>

            <ButtonLink href="/" className="mt-8" size="lg">
              Back to Home
            </ButtonLink>
          </GlassCard>
        </div>
      </Container>
    </section>
  );
}

import { ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { FadeIn } from "@/components/motion/fade-in";
import { Container } from "@/components/ui/container";
import { EmailSignupForm } from "@/components/forms/email-signup-form";

export function EmailSignup() {
  return (
    <section id="signup" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-radial-fade" />
      <Container className="relative">
        <SectionHeading
          eyebrow="Get Free Access"
          title="Join the Command Center"
          description="Get the Discipline Doctrine PDF and a 6-part email series on risk, psychology, and execution — free."
        />

        <FadeIn delay={0.1} className="mx-auto mt-12 max-w-lg">
          <GlassCard strong hover={false} className="p-8 sm:p-10">
            <EmailSignupForm />
            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-fg-muted/70">
              <ShieldCheck className="h-3.5 w-3.5 text-gold-400" />
              No spam. Unsubscribe anytime.
            </div>
          </GlassCard>
        </FadeIn>
      </Container>
    </section>
  );
}

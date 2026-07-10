import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { Doctrine } from "@/components/sections/doctrine";
import { DisciplineStack } from "@/components/sections/discipline-stack";
import { Features } from "@/components/sections/features";
import { LeadMagnet } from "@/components/sections/lead-magnet";
import { EmailSignup } from "@/components/sections/email-signup";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Doctrine />
      <DisciplineStack />
      <Features />
      <LeadMagnet />
      <EmailSignup />
      <Testimonials />
      <Faq />
    </>
  );
}

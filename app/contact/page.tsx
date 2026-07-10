import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { SITE } from "@/lib/constants";
import { LegalPage } from "@/components/layout/legal-page";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with the ${SITE.product} team.`,
};

export default function ContactPage() {
  return (
    <LegalPage title="Contact" updated="July 2026">
      <p>
        Questions about {SITE.product}, the Discipline Doctrine, or your subscription? Reach out and
        we&rsquo;ll get back to you.
      </p>

      <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
        <Mail className="h-5 w-5 flex-shrink-0 text-gold-400" />
        <a
          href="mailto:support@pm3tradingcommandcenter.com"
          className="text-fg underline-offset-4 hover:underline"
        >
          support@pm3tradingcommandcenter.com
        </a>
      </div>

      <p className="text-xs text-fg-muted/70">
        Replace this address with your live support inbox before deploying to production.
      </p>
    </LegalPage>
  );
}

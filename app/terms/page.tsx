import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { LegalPage } from "@/components/layout/legal-page";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `The terms governing your use of ${SITE.product}.`,
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use" updated="July 2026">
      <h2>Educational Purpose Only</h2>
      <p>
        {SITE.product} provides educational content about trading discipline, risk management,
        psychology, and decision-making frameworks. Nothing on this site constitutes financial,
        investment, legal, or tax advice, and nothing here is a recommendation to buy, sell, or hold
        any security or financial instrument.
      </p>

      <h2>No Signals, No Guarantees</h2>
      <p>
        We do not provide trading signals, buy/sell alerts, or managed trading services. We do not
        guarantee profits, and we do not represent that any framework, tool, or piece of content will
        prevent losses. Trading and investing involve substantial risk of loss and are not suitable
        for every individual.
      </p>

      <h2>Your Responsibility</h2>
      <p>
        Any trading decisions you make remain entirely your own. You are solely responsible for
        evaluating your own risk tolerance, conducting your own research, and, where appropriate,
        consulting a licensed financial professional before making trading or investment decisions.
      </p>

      <h2>Intellectual Property</h2>
      <p>
        PM3™, PM3 Trading Command Center™, Aristotle Check™, and Trading Kill Switch™ are trademarks
        of PM3. Content on this site, including the Discipline Doctrine PDF and email sequence, is
        provided for your personal, non-commercial use and may not be reproduced or redistributed
        without permission.
      </p>

      <h2>No Warranty</h2>
      <p>
        This site and its content are provided &ldquo;as is&rdquo; without warranties of any kind,
        express or implied, including but not limited to accuracy, completeness, or fitness for a
        particular purpose.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, PM3 will not be liable for any trading losses or other
        damages arising from your use of this site or reliance on its content.
      </p>

      <h2>Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. Continued use of the site after changes are
        posted constitutes acceptance of the revised Terms.
      </p>
    </LegalPage>
  );
}

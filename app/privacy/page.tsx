import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { LegalPage } from "@/components/layout/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${SITE.product} collects, uses, and protects your information.`,
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="July 2026">
      <p>
        This Privacy Policy explains how {SITE.product} (&ldquo;PM3&rdquo;, &ldquo;we&rdquo;,
        &ldquo;us&rdquo;) collects, uses, and protects information when you visit this website or
        subscribe to our email list.
      </p>

      <h2>Information We Collect</h2>
      <p>
        When you join the Command Center email list, we collect: your <strong>first name</strong>,{" "}
        <strong>email address</strong>, <strong>signup date</strong>, and, where available, the{" "}
        <strong>UTM source</strong>, <strong>landing page</strong>, and <strong>referral source</strong>{" "}
        associated with your signup. We do not collect payment information, brokerage credentials, or
        trading account data through this site.
      </p>

      <h2>How We Use Your Information</h2>
      <p>
        We use the information you provide to send you the Discipline Doctrine PDF, the associated
        email sequence, and periodic updates related to PM3. We do not sell your personal information
        to third parties.
      </p>

      <h2>Email Provider</h2>
      <p>
        Your email address is stored and processed by our third-party email service provider
        (ConvertKit or MailerLite, depending on configuration) in order to deliver the content you
        requested. Their respective privacy policies govern how they handle data on our behalf.
      </p>

      <h2>Your Rights</h2>
      <p>
        You may unsubscribe at any time using the link included in every email we send. You may also
        request access to, correction of, or deletion of your personal information by contacting us
        through the Contact page.
      </p>

      <h2>Cookies &amp; Analytics</h2>
      <p>
        This site may use minimal, privacy-respecting analytics to understand aggregate traffic
        patterns. We do not use this data to individually identify visitors.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this policy from time to time. Material changes will be reflected by updating
        the date at the top of this page.
      </p>
    </LegalPage>
  );
}

import type { EmailProvider } from "@/lib/types";
import { ConvertKitProvider } from "@/lib/email/convertkit";
import { MailerLiteProvider } from "@/lib/email/mailerlite";

/**
 * Returns the active email provider adapter based on EMAIL_PROVIDER.
 * Swap providers by changing one env var — no call-site changes needed.
 */
export function getEmailProvider(): EmailProvider {
  const provider = (process.env.EMAIL_PROVIDER ?? "convertkit").toLowerCase();

  switch (provider) {
    case "mailerlite":
      return new MailerLiteProvider();
    case "convertkit":
    default:
      return new ConvertKitProvider();
  }
}

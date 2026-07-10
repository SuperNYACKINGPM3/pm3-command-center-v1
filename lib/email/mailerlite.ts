import type { EmailProvider, SubscribePayload, SubscribeResult } from "@/lib/types";

const MAILERLITE_API_BASE = "https://connect.mailerlite.com/api";

/**
 * MailerLite adapter. Creates/updates a subscriber and assigns them to the
 * configured group, storing UTM / landing page / referral as custom fields.
 * https://developers.mailerlite.com/docs/subscribers.html
 */
export class MailerLiteProvider implements EmailProvider {
  private apiKey = process.env.MAILERLITE_API_KEY;
  private groupId = process.env.MAILERLITE_GROUP_ID;

  async subscribe(payload: SubscribePayload): Promise<SubscribeResult> {
    if (!this.apiKey || !this.groupId) {
      console.warn(
        "[MailerLiteProvider] MAILERLITE_API_KEY or MAILERLITE_GROUP_ID is not set — skipping live subscribe call."
      );
      return { success: true };
    }

    try {
      const response = await fetch(`${MAILERLITE_API_BASE}/subscribers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({
          email: payload.email,
          fields: {
            name: payload.firstName,
            signup_date: payload.signupDate,
            utm_source: payload.utmSource ?? "",
            landing_page: payload.landingPage,
            referral: payload.referral ?? "",
          },
          groups: [this.groupId],
        }),
      });

      if (!response.ok) {
        const body = await response.text();
        console.error("[MailerLiteProvider] subscribe failed", response.status, body);
        return { success: false, error: "Could not complete signup with MailerLite." };
      }

      return { success: true };
    } catch (error) {
      console.error("[MailerLiteProvider] subscribe error", error);
      return { success: false, error: "Could not reach MailerLite." };
    }
  }
}

import type { EmailProvider, SubscribePayload, SubscribeResult } from "@/lib/types";

const CONVERTKIT_API_BASE = "https://api.convertkit.com/v3";

/**
 * ConvertKit adapter. Adds a subscriber to the configured form and tags
 * the signup with UTM / landing page / referral metadata as custom fields.
 * https://developers.convertkit.com/#add-subscriber-to-a-form
 */
export class ConvertKitProvider implements EmailProvider {
  private apiKey = process.env.CONVERTKIT_API_KEY;
  private formId = process.env.CONVERTKIT_FORM_ID;

  async subscribe(payload: SubscribePayload): Promise<SubscribeResult> {
    if (!this.apiKey || !this.formId) {
      console.warn(
        "[ConvertKitProvider] CONVERTKIT_API_KEY or CONVERTKIT_FORM_ID is not set — skipping live subscribe call."
      );
      return { success: true };
    }

    try {
      const response = await fetch(
        `${CONVERTKIT_API_BASE}/forms/${this.formId}/subscribe`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            api_key: this.apiKey,
            email: payload.email,
            first_name: payload.firstName,
            fields: {
              signup_date: payload.signupDate,
              utm_source: payload.utmSource ?? "",
              landing_page: payload.landingPage,
              referral: payload.referral ?? "",
            },
          }),
        }
      );

      if (!response.ok) {
        const body = await response.text();
        console.error("[ConvertKitProvider] subscribe failed", response.status, body);
        return { success: false, error: "Could not complete signup with ConvertKit." };
      }

      return { success: true };
    } catch (error) {
      console.error("[ConvertKitProvider] subscribe error", error);
      return { success: false, error: "Could not reach ConvertKit." };
    }
  }
}

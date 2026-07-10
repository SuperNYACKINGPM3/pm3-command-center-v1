import { z } from "zod";

export const subscribeSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, "First name is required.")
    .max(80, "First name is too long."),
  email: z.string().trim().email("Enter a valid email address.").max(254),
  agreedToEmails: z.literal(true, {
    errorMap: () => ({ message: "You must agree to receive emails." }),
  }),
  utmSource: z.string().trim().max(200).nullable().optional(),
  landingPage: z.string().trim().max(500),
  referral: z.string().trim().max(200).nullable().optional(),
});

export type SubscribeInput = z.infer<typeof subscribeSchema>;

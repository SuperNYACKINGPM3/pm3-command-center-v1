export interface NavLink {
  label: string;
  href: string;
}

export interface ProblemCard {
  title: string;
  description: string;
  icon: string;
}

export interface DoctrineStep {
  step: string;
  title: string;
  description: string;
}

export interface PipelineStage {
  title: string;
  description: string;
  icon: string;
}

export interface FeatureCard {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface LeadMagnetPoint {
  label: string;
}

/**
 * Payload captured by the email signup form and forwarded to the
 * configured email provider adapter.
 */
export interface SubscribePayload {
  firstName: string;
  email: string;
  agreedToEmails: boolean;
  signupDate: string;
  utmSource: string | null;
  landingPage: string;
  referral: string | null;
}

export interface SubscribeResult {
  success: boolean;
  error?: string;
}

/**
 * Common interface every email marketing provider adapter must implement,
 * so providers can be swapped via the EMAIL_PROVIDER env var without
 * touching the form, API route, or any UI code.
 */
export interface EmailProvider {
  subscribe(payload: SubscribePayload): Promise<SubscribeResult>;
}

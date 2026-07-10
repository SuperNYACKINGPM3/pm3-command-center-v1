import { NextResponse } from "next/server";
import { getEmailProvider } from "@/lib/email";
import { subscribeSchema } from "@/lib/validation";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request body." }, { status: 400 });
  }

  const parsed = subscribeSchema.safeParse(body);

  if (!parsed.success) {
    const message = parsed.error.issues[0]?.message ?? "Invalid submission.";
    return NextResponse.json({ success: false, error: message }, { status: 400 });
  }

  const provider = getEmailProvider();
  const result = await provider.subscribe({
    firstName: parsed.data.firstName,
    email: parsed.data.email,
    agreedToEmails: parsed.data.agreedToEmails,
    signupDate: new Date().toISOString(),
    utmSource: parsed.data.utmSource ?? null,
    landingPage: parsed.data.landingPage,
    referral: parsed.data.referral ?? null,
  });

  if (!result.success) {
    return NextResponse.json(
      { success: false, error: result.error ?? "Signup failed." },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true });
}

"use client";

import { Suspense, useState, type FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "error";

function EmailSignupFormInner() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    if (!agreed) {
      setError("Please agree to receive emails to continue.");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          email,
          agreedToEmails: agreed,
          utmSource: searchParams.get("utm_source"),
          landingPage: typeof window !== "undefined" ? window.location.pathname : "/",
          referral: typeof document !== "undefined" ? document.referrer || null : null,
        }),
      });

      const data = (await response.json()) as { success: boolean; error?: string };

      if (!response.ok || !data.success) {
        setStatus("error");
        setError(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      router.push("/success");
    } catch {
      setStatus("error");
      setError("Something went wrong. Please check your connection and try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      <div>
        <label htmlFor="firstName" className="mb-1.5 block text-sm font-medium text-fg">
          First Name
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          required
          autoComplete="given-name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Jordan"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-fg placeholder:text-fg-muted/50 outline-none transition-colors focus:border-gold-400/50"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-fg">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="jordan@example.com"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-fg placeholder:text-fg-muted/50 outline-none transition-colors focus:border-gold-400/50"
        />
      </div>

      <label className="flex items-start gap-3 pt-1 text-sm text-fg-muted">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          required
          className="mt-0.5 h-4 w-4 flex-shrink-0 rounded border-white/20 bg-white/5 accent-gold-400"
        />
        I agree to receive emails.
      </label>

      {error ? <p className="text-sm text-red-400">{error}</p> : null}

      <Button
        type="submit"
        size="lg"
        disabled={status === "submitting"}
        className={cn("mt-2 w-full", status === "submitting" && "cursor-wait")}
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            Get Free Access
            <Send className="h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
}

export function EmailSignupForm() {
  return (
    <Suspense fallback={<div className="h-[340px] animate-pulse rounded-xl bg-white/5" />}>
      <EmailSignupFormInner />
    </Suspense>
  );
}

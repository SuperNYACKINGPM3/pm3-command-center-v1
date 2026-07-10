# PM3 Trading Command Center™

**The Discipline Doctrine.**

A production-ready Next.js landing page for the PM3 Trading Command Center — built to convert
visitors into email subscribers who want to learn risk management, execution discipline, and
AI-assisted decision-making. This is **not** a signal service and makes no profit guarantees; the
copy and structure are intentionally FTC-compliant.

> Doctrine: *AI generates. Wisdom verifies. Human judgment decides.*

## Tech Stack

- **Next.js 14** (App Router, TypeScript, Route Handlers)
- **React 18**
- **Tailwind CSS** — custom black / charcoal / gold glassmorphism theme
- **Framer Motion** — scroll reveals, hero animation, scroll progress bar
- **Lucide Icons**
- **Zod** — server-side form validation

## Project Structure

```
app/                      Routes (App Router)
  layout.tsx              Root layout, fonts, SEO metadata, JSON-LD
  page.tsx                Home page — assembles all sections
  success/page.tsx         Post-signup confirmation page
  privacy/ terms/ contact/ Legal + contact pages
  api/subscribe/route.ts  Signup API route (validates + forwards to email provider)
  sitemap.ts robots.ts     SEO
  opengraph-image.tsx      Dynamically generated OG image

components/
  ui/                      Button, GlassCard, Badge, Container, SectionHeading
  layout/                  Navbar, Footer, FloatingCta, ScrollProgress, ThemeToggle, LegalPage
  motion/                  FadeIn / FadeInStagger scroll-reveal wrappers
  sections/                Hero, Problem, Doctrine, DisciplineStack, Features,
                           LeadMagnet, EmailSignup, Testimonials, Faq
  forms/                   EmailSignupForm (client component)

lib/
  constants.ts             All on-page copy/content (single source of truth)
  types.ts                 Shared TypeScript types
  validation.ts            Zod schema for the signup payload
  email/                   Swappable email-provider adapters
    index.ts               Factory — reads EMAIL_PROVIDER env var
    convertkit.ts
    mailerlite.ts

content/emails/            The 6-email welcome automation sequence (Markdown, provider-agnostic)
styles/globals.css         Tailwind layers + theme variables + glassmorphism utilities
public/                    Static assets (favicon)
```

## Getting Started

```bash
npm install
cp .env.example .env.local   # then fill in the values you have
npm run dev
```

Visit `http://localhost:3000`. The signup form works end-to-end without any API keys — submissions
are validated and accepted, and the app redirects to `/success`. Nothing is sent to a real email
provider until you configure one (see below).

Other scripts:

```bash
npm run build       # production build
npm run start       # run the production build
npm run lint        # eslint
npm run typecheck   # tsc --noEmit
```

## Email Provider Setup

The signup form abstracts the email provider behind `lib/email/index.ts` so you can swap providers
by changing one environment variable — no component or API route changes required.

1. Copy `.env.example` to `.env.local`.
2. Set `EMAIL_PROVIDER` to either `convertkit` or `mailerlite`.
3. Fill in the matching credentials:
   - **ConvertKit**: `CONVERTKIT_API_KEY`, `CONVERTKIT_FORM_ID`
   - **MailerLite**: `MAILERLITE_API_KEY`, `MAILERLITE_GROUP_ID`

Each subscriber is stored with: first name, email, signup date, UTM source, landing page, and
referral — captured automatically from the signup form.

To add a new provider, implement the `EmailProvider` interface in `lib/types.ts` (a single
`subscribe()` method), drop the file in `lib/email/`, and register it in the `getEmailProvider()`
switch in `lib/email/index.ts`.

## Email Automation Sequence

`content/emails/` contains the 6-part welcome sequence referenced in the signup flow, as
provider-agnostic Markdown with front matter (`subject`, `send` timing, `preview_text`):

1. Welcome
2. The Discipline Doctrine
3. Why Traders Blow Accounts
4. Position Sizing
5. Trading Psychology
6. The Aristotle Check™

Import these into your ConvertKit or MailerLite automation/sequence builder as the trigger sequence
for new subscribers.

## SEO

- Metadata, OpenGraph, and Twitter card tags are set in `app/layout.tsx` from `lib/constants.ts`.
- `app/opengraph-image.tsx` generates a real OG image at request time — no static asset to keep in
  sync.
- `app/sitemap.ts` and `app/robots.ts` are generated dynamically from `NEXT_PUBLIC_SITE_URL`.
- Organization structured data (JSON-LD) is injected in the root layout.

Set `NEXT_PUBLIC_SITE_URL` to your production domain before deploying so canonical URLs, the
sitemap, and OG metadata are correct.

## Deployment

### Vercel (recommended)

1. Push this repository to GitHub.
2. Import it in [Vercel](https://vercel.com/new).
3. Add the environment variables from `.env.example` in Project Settings → Environment Variables.
4. Deploy. Vercel auto-detects Next.js — no build configuration needed.

### Any Node host

```bash
npm run build
npm run start   # serves on port 3000 by default
```

Set the same environment variables in your hosting provider's dashboard/secret manager.

### Dependency Security Note

This project pins `next@14.2.35`, the latest patch on the 14.x line, which resolves the critical
DoS advisory present in earlier 14.2.x releases. A handful of remaining `npm audit` advisories only
have fixed versions on Next.js 16, a breaking major upgrade intentionally left out of this template.
Run `npm audit` before deploying and evaluate whether upgrading to Next 15/16 makes sense for your
fork.

## Design System Notes

- Theme tokens (`--bg`, `--fg`, `--fg-muted`, etc.) live in `styles/globals.css` and are consumed
  via Tailwind color aliases (`bg-bg`, `text-fg`, `text-fg-muted`) so components never hardcode
  hex values.
- Dark is the primary, brand-defining theme; a light mode is available via the navbar toggle
  (`components/layout/theme-toggle.tsx`) and persisted to `localStorage`.
- Glassmorphism surfaces use the `.glass-panel` / `.glass-panel-strong` utility classes.
- All content-bearing copy (cards, FAQ, testimonials, pipeline stages) lives in
  `lib/constants.ts` — update copy there rather than in component files.

## Compliance

Copy across the site avoids income claims, guarantees, and "get rich quick" framing by design. The
footer includes a standing risk disclosure, and the FAQ explicitly states this is not a signal
service and profits are not guaranteed. Review `lib/constants.ts` (`FAQ_ITEMS`) and
`components/layout/footer.tsx` before making copy changes to keep this intact.

## License

Proprietary — PM3™. All trademarks referenced (PM3™, PM3 Trading Command Center™, Aristotle
Check™, Trading Kill Switch™) belong to their respective owner.

---

## Other Projects in This Repository

This repository also hosts unrelated PM3-branded prototypes that predate this landing page and are
kept for reference:

- `intelligence-compounding-ledger/` — pointer/README for a separate module, not part of this
  Next.js app.
- `docs/agent-stack-prototype.md` — the original repository README, describing an unrelated
  Slack-based AI agent stack prototype (this file's previous content, preserved verbatim).

The trading landing page above (root `app/`, `components/`, `lib/`, etc.) is a standalone Next.js
project and does not depend on anything in that folder.

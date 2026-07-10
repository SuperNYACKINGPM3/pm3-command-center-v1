import Link from "next/link";
import { FOOTER_LINKS, SITE } from "@/lib/constants";
import { Container } from "@/components/ui/container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 py-14">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <Link href="/" className="flex items-center gap-2 font-display text-lg font-bold">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold-gradient text-sm font-black text-ink-950">
                P3
              </span>
              <span>{SITE.name}</span>
            </Link>
            <p className="mt-3 max-w-sm text-sm text-fg-muted">{SITE.tagline}</p>
            <p className="mt-1 max-w-sm text-xs text-fg-muted/70">{SITE.doctrine}</p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-fg-muted transition-colors hover:text-gold-400"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 border-t border-white/5 pt-6">
          <p className="text-xs leading-relaxed text-fg-muted/70">
            &copy; {year} {SITE.product}. All rights reserved. PM3™, PM3 Trading Command Center™,
            Aristotle Check™, and Trading Kill Switch™ are trademarks of PM3.
          </p>
          <p className="mt-3 max-w-3xl text-xs leading-relaxed text-fg-muted/60">
            Trading involves substantial risk of loss and is not suitable for every investor. Nothing
            on this site is investment, legal, or tax advice, nor a recommendation or offer to buy or
            sell any security. PM3 does not provide trading signals and does not guarantee profits or
            protect against losses. Past performance, where discussed, is not indicative of future
            results. Educational content only — trade at your own risk and consult a licensed
            professional before making financial decisions.
          </p>
        </div>
      </Container>
    </footer>
  );
}

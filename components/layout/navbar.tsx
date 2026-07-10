"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="container">
        <div
          className={cn(
            "flex items-center justify-between rounded-2xl px-4 transition-all duration-300 sm:px-5",
            scrolled ? "glass-panel-strong py-2.5 shadow-glass" : "py-1"
          )}
        >
          <Link href="/" className="flex items-center gap-2 font-display text-lg font-bold tracking-tight">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold-gradient text-sm font-black text-ink-950">
              P3
            </span>
            <span className="text-fg">{SITE.name}</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-fg-muted transition-colors hover:text-gold-400"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <Button
              size="md"
              onClick={() => document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" })}
            >
              Join Free
            </Button>
          </div>

          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-fg md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open ? (
          <div className="glass-panel-strong mt-2 flex flex-col gap-1 rounded-2xl p-4 shadow-glass md:hidden">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-fg-muted transition-colors hover:bg-white/5 hover:text-gold-400"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex items-center justify-between gap-3 px-3">
              <ThemeToggle />
              <Button
                className="flex-1"
                onClick={() => {
                  setOpen(false);
                  document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Join Free
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}

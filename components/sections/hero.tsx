"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden pt-32 pb-20">
      <div className="pointer-events-none absolute inset-0 bg-radial-fade" />
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_10%,transparent_70%)]" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-10%] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-gold-400/20 blur-[140px] animate-pulse-slow"
      />

      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex justify-center"
          >
            <Badge>
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
              The Discipline Doctrine
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-fg sm:text-6xl md:text-7xl"
          >
            Trading Doesn&rsquo;t Need
            <br className="hidden sm:block" /> More Indicators.
            <br />
            It Needs{" "}
            <span className="text-gradient-gold bg-gradient-200 animate-gradient-x">
              Better Decisions.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-7 max-w-2xl text-balance text-base text-fg-muted sm:text-lg md:text-xl"
          >
            The PM3 Trading Command Center helps traders build discipline, manage risk, and execute
            consistently using AI-assisted decision frameworks.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              onClick={() => document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" })}
            >
              Join Free
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => document.getElementById("doctrine")?.scrollIntoView({ behavior: "smooth" })}
            >
              See the Framework
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-6 text-xs uppercase tracking-[0.25em] text-fg-muted/60"
          >
            No signals. No guarantees. Just discipline.
          </motion.p>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-fg-muted/50"
      >
        <ChevronDown className="h-5 w-5" />
      </motion.div>
    </section>
  );
}

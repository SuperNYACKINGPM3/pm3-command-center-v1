"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function FloatingCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const signupEl = document.getElementById("signup");
    if (!signupEl) return;

    const onScroll = () => {
      const heroHeight = window.innerHeight * 0.9;
      const signupTop = signupEl.getBoundingClientRect().top + window.scrollY;
      const pastHero = window.scrollY > heroHeight;
      const beforeSignup = window.scrollY + window.innerHeight < signupTop;
      setVisible(pastHero && beforeSignup);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-x-0 bottom-5 z-40 flex justify-center px-4 sm:bottom-6 sm:left-auto sm:right-6 sm:justify-end"
        >
          <Button
            size="md"
            className="shadow-glow-lg"
            onClick={() => document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" })}
          >
            Join the Command Center
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

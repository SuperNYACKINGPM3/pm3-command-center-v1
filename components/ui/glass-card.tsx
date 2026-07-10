import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  strong?: boolean;
  hover?: boolean;
}

export function GlassCard({ strong, hover = true, className, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl shadow-glass",
        strong ? "glass-panel-strong" : "glass-panel",
        hover &&
          "transition-all duration-300 hover:border-gold-400/30 hover:shadow-glow hover:-translate-y-1",
        className
      )}
      {...props}
    />
  );
}

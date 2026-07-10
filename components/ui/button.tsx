import Link from "next/link";
import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

interface ButtonBaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gold-gradient text-ink-950 shadow-glow hover:shadow-glow-lg hover:scale-[1.02] font-semibold",
  secondary:
    "glass-panel text-fg hover:bg-white/10 border-white/15 font-medium",
  ghost: "text-fg-muted hover:text-fg font-medium",
};

const sizeClasses: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full transition-all duration-300 ease-out active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonBaseProps & ButtonHTMLAttributes<HTMLButtonElement>
>(({ variant = "primary", size = "md", className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
    {...props}
  />
));
Button.displayName = "Button";

interface ButtonLinkProps extends ButtonBaseProps {
  href: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  ...rest
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
      {...rest}
    >
      {children}
    </Link>
  );
}

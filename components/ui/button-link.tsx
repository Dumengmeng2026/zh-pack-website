import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "light" | "outline-light" | "dark";
  className?: string;
};

const variants = {
  primary:
    "bg-[var(--color-brand)] text-white hover:bg-[var(--color-brand-dark)]",
  light: "bg-white text-[var(--color-ink)] hover:bg-white/90",
  "outline-light":
    "border border-white/25 bg-transparent text-white hover:border-white/60 hover:bg-white/5",
  dark: "bg-[var(--color-ink)] text-white hover:bg-black",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-3 rounded-sm px-6 text-sm font-bold transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/brand/logo";
import { Container } from "@/components/ui/container";
import { primaryNavigation } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-white/95 backdrop-blur-md">
      <Container className="flex h-18 items-center justify-between lg:h-20">
        <Logo />

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
          {primaryNavigation.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`text-sm font-semibold transition-colors hover:text-[var(--color-brand)] ${
                  isActive ? "text-[var(--color-brand)]" : "text-[var(--color-ink)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex min-h-11 items-center justify-center rounded-sm bg-[var(--color-brand)] px-5 text-sm font-bold text-white transition-colors hover:bg-[var(--color-brand-dark)]"
          >
            Get a Quote
          </Link>
        </div>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-sm border border-[var(--color-line)] lg:hidden"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="sr-only">Menu</span>
          <span aria-hidden="true" className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-0.5 w-5 bg-[var(--color-ink)] transition-transform ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-[var(--color-ink)] transition-opacity ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-[var(--color-ink)] transition-transform ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </Container>

      <div
        id="mobile-navigation"
        className={`${isOpen ? "grid" : "hidden"} border-t border-[var(--color-line)] bg-white lg:hidden`}
      >
        <Container className="grid gap-1 py-4">
          {primaryNavigation.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-sm px-3 py-3 text-base font-semibold ${
                  isActive
                    ? "bg-[var(--color-surface)] text-[var(--color-brand)]"
                    : "text-[var(--color-ink)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-3 inline-flex min-h-12 items-center justify-center rounded-sm bg-[var(--color-brand)] px-5 text-sm font-bold text-white"
          >
            Get a Quote
          </Link>
        </Container>
      </div>
    </header>
  );
}

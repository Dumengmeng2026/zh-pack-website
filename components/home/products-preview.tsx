import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";

const products = [
  {
    title: "EPE Foam Sheet",
    type: "Material supply",
    href: "/products#epe-foam-sheet",
  },
  {
    title: "Custom Foam Insert",
    type: "Precision fit",
    href: "/products#custom-foam-insert",
  },
  {
    title: "EPE Foam Packaging",
    type: "Product protection",
    href: "/products#epe-foam-packaging",
  },
  {
    title: "Industrial Protective Packaging",
    type: "Heavy duty",
    href: "/products#industrial-protective-packaging",
  },
] as const;

export function ProductsPreview() {
  return (
    <section className="home-dark-section border-t border-white/10 py-24 text-white sm:py-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-24">
          <div>
            <p className="home-kicker">Product capabilities</p>
            <h2 className="mt-7 max-w-4xl text-5xl font-medium leading-[0.96] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Protection shaped around the product.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-white/52 sm:text-lg sm:leading-8 lg:pb-2">
            From material supply to fully engineered inserts, each solution is built
            around product geometry, handling risk, presentation, and transit conditions.
          </p>
        </div>

        <div className="mt-16 grid overflow-hidden border border-white/14 lg:grid-cols-[1.18fr_0.82fr]">
          <div className="relative min-h-[420px] overflow-hidden border-b border-white/14 lg:min-h-[640px] lg:border-b-0 lg:border-r">
            <Image
              src="/images/placeholder-product-capabilities.png"
              alt="Temporary visual of EPE foam sheets and custom protective packaging products"
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover object-center transition-transform duration-700 hover:scale-[1.015]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d110f]/82 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10">
              <p className="home-kicker">Featured application</p>
              <p className="mt-4 max-w-md text-2xl font-medium leading-tight tracking-[-0.035em] sm:text-3xl">
                Precision protection for sensitive electronic display modules.
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            {products.map((product) => (
              <Link
                key={product.title}
                href={product.href}
                className="group flex min-h-36 flex-1 items-center justify-between gap-6 border-b border-white/14 p-7 transition-colors last:border-b-0 hover:bg-white/[0.035] sm:p-9"
              >
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[var(--color-brand-bright)]">
                    {product.type}
                  </p>
                  <h3 className="mt-3 max-w-sm text-xl font-medium leading-tight tracking-[-0.025em] sm:text-2xl">
                    {product.title}
                  </h3>
                </div>
                <span
                  aria-hidden="true"
                  className="text-xl text-white/35 transition-all group-hover:translate-x-1 group-hover:text-white"
                >
                  ↗
                </span>
              </Link>
            ))}
          </div>
        </div>

        <Link
          href="/products"
          className="mt-8 inline-flex items-center gap-4 text-sm font-bold text-white transition-colors hover:text-[var(--color-brand-bright)]"
        >
          View all products <span aria-hidden="true">→</span>
        </Link>
      </Container>
    </section>
  );
}

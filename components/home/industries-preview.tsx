import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";

const industries = [
  ["Electronics", "Sensitive components and finished devices"],
  ["Automotive", "Parts, assemblies, and service kits"],
  ["Machinery", "Industrial components and precision tools"],
  ["Medical Equipment", "Delicate instruments and equipment"],
  ["Furniture", "Surface, edge, and corner protection"],
  ["Consumer Products", "Presentation and transit protection"],
];

export function IndustriesPreview() {
  return (
    <section className="home-dark-section border-t border-white/10 py-24 text-white sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          <div>
            <p className="home-kicker">Industries</p>
            <h2 className="mt-7 max-w-3xl text-5xl font-medium leading-[0.96] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Different products. One protection system.
            </h2>
            <p className="mt-8 max-w-lg text-base leading-7 text-white/52 sm:text-lg sm:leading-8">
              Material and geometry are adjusted to product sensitivity, handling risks,
              presentation requirements, and shipping routes.
            </p>
          </div>

          <div>
            <div className="relative mb-10 min-h-[360px] overflow-hidden border border-white/14 sm:min-h-[460px]">
              <Image
                src="/images/placeholder-industries.png"
                alt="Temporary visual of EPE foam packaging applications across multiple industries"
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d110f]/62 via-transparent to-transparent" />
              <p className="absolute bottom-6 left-6 max-w-sm text-sm leading-6 text-white/76 sm:bottom-8 sm:left-8">
                Temporary application image. Replace with customer-approved product
                photography when available.
              </p>
            </div>
            <div className="border-t border-white/14">
            {industries.map(([title, description]) => (
              <Link
                key={title}
                href="/industries"
                className="group grid gap-3 border-b border-white/14 py-7 transition-colors hover:border-white/35 sm:grid-cols-[0.9fr_1.1fr_auto] sm:items-center sm:py-9"
              >
                <h3 className="text-xl font-medium tracking-[-0.025em] sm:text-2xl">
                  {title}
                </h3>
                <p className="text-sm leading-6 text-white/45 sm:text-base sm:leading-7">
                  {description}
                </p>
                <span
                  aria-hidden="true"
                  className="text-xl text-white/28 transition-all group-hover:translate-x-1 group-hover:text-[var(--color-brand-bright)]"
                >
                  ↗
                </span>
              </Link>
            ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

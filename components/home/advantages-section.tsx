import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

const proofPoints = [
  { value: siteConfig.factoryArea, label: "Factory area" },
  { value: siteConfig.dailyCapacity, label: "Daily production capacity" },
  { value: siteConfig.equipment, label: "Production equipment" },
  { value: siteConfig.employees, label: "Team members" },
];

const advantages = [
  {
    title: "Material to finished packaging",
    description:
      "One manufacturing system controls foam production, cutting, shaping, inspection, and packing.",
    href: "/manufacturing",
  },
  {
    title: "Engineered for the actual product",
    description:
      "Density, thickness, geometry, tolerance, and handling risks guide every custom structure.",
    href: "/products",
  },
  {
    title: "Inspection before release",
    description:
      "Material, thickness, density, dimensions, and finished packaging are checked before shipment.",
    href: "/quality",
  },
];

export function AdvantagesSection() {
  return (
    <section className="home-dark-section border-t border-white/10 py-24 text-white sm:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1.16fr_0.84fr] lg:gap-24">
          <div>
            <p className="home-kicker">Integrated manufacturing</p>
            <h2 className="mt-7 max-w-4xl text-5xl font-medium leading-[0.94] tracking-[-0.06em] sm:text-6xl lg:text-[5.6rem]">
              Built to control the whole protection system.
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-7 text-white/58 sm:text-lg sm:leading-8">
              Custom protective packaging becomes more reliable when material,
              conversion, quality, and export preparation operate as one connected
              process.
            </p>
          </div>

          <div className="relative min-h-[520px] overflow-hidden border border-white/12 lg:min-h-[620px]">
            <Image
              src="/images/placeholder-integrated-factory.png"
              alt="Temporary visual of an integrated EPE foam manufacturing facility"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d110f] via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 grid grid-cols-2 border-l border-t border-white/18 bg-[#0d110f]/88 backdrop-blur-sm">
              {proofPoints.map((item) => (
                <div key={item.label} className="border-b border-r border-white/14 p-5 sm:p-6">
                  <strong className="block text-xl font-medium tracking-[-0.04em] text-white sm:text-2xl">
                    {item.value}
                  </strong>
                  <span className="mt-2 block text-[9px] font-bold uppercase leading-4 tracking-[0.16em] text-white/42">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-white/14">
          {advantages.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group grid gap-5 border-b border-white/14 py-8 transition-colors hover:border-white/35 sm:grid-cols-[0.8fr_1.2fr_auto] sm:items-center sm:py-10"
            >
              <h3 className="text-xl font-medium tracking-[-0.03em] sm:text-2xl">
                {item.title}
              </h3>
              <p className="max-w-2xl text-sm leading-6 text-white/48 sm:text-base sm:leading-7">
                {item.description}
              </p>
              <span
                aria-hidden="true"
                className="text-xl text-[var(--color-brand-bright)] transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          ))}
        </div>

        <p className="mt-7 text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-brand-bright)]">
          Manufacturing experience since {siteConfig.manufacturingSince}
        </p>
      </Container>
    </section>
  );
}

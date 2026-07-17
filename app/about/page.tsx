import type { Metadata } from "next";
import Image from "next/image";
import { MediaPanel } from "@/components/internal/media-panel";
import { PageHero } from "@/components/internal/page-hero";
import { QuoteBanner } from "@/components/internal/quote-banner";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "About Us",
  description: "Learn about Henan Zhonghuan Packaging Co., Ltd., its EPE foam manufacturing capacity, quality control, and export support.",
  path: "/about",
});

const strengths = [
  {
    title: "Factory",
    description: `${siteConfig.factoryArea} manufacturing facility.`,
    image: "/images/internal/factory-production-hall.png",
    alt: "ZH PACK EPE foam manufacturing facility",
  },
  {
    title: "Production Capacity",
    description: `${siteConfig.dailyCapacity} EPE foam output.`,
    image: "/images/internal/manufacturing-production-flow.png",
    alt: "EPE foam production line and organized manufacturing flow",
  },
  {
    title: "Quality Control",
    description: "Inspection built into material and production stages.",
    image: "/images/internal/quality-material-testing.png",
    alt: "Quality technician testing EPE foam material",
  },
  {
    title: "Global Shipping",
    description: "Packaging programs prepared for export requirements.",
    image: "/images/internal/product-complete-packaging.png",
    alt: "Completed protective packaging prepared for export shipment",
  },
];

const factoryFacts = [
  [String(siteConfig.manufacturingSince), "Manufacturing Origin"],
  [String(siteConfig.founded), "Zhonghuan Established"],
  [siteConfig.factoryArea, "Factory Area"],
  [siteConfig.employees, "Employees"],
  [siteConfig.equipment, "Equipment"],
  [siteConfig.dailyCapacity, "Daily Capacity"],
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About ZH PACK"
        title="Built for reliable protective packaging."
        description="ZH PACK supports custom EPE foam packaging projects from initial material planning through finished export packing."
        visualLabel="Factory Overview"
        imageSrc="/images/internal/factory-production-hall.png"
        imageAlt="EPE foam production hall with sheet manufacturing equipment"
      />

      <section className="bg-[var(--color-ink)] text-white">
        <Container className="grid grid-cols-2 border-x border-white/15 md:grid-cols-3 lg:grid-cols-6">
          {factoryFacts.map(([value, label]) => (
            <div
              key={label}
              className="min-h-36 border-r border-b border-white/15 p-5 last:border-r-0 md:p-6 lg:border-b-0"
            >
              <p className="text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">{value}</p>
              <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.14em] text-white/45">
                {label}
              </p>
            </div>
          ))}
        </Container>
      </section>

      <section className="bg-[var(--color-surface)] py-24 sm:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="Our Focus"
                title="One manufacturing partner, one clear process."
                description="Henan Zhonghuan Packaging Co., Ltd. was established in 2023, building on manufacturing operations that began in 2010."
              />
              <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden border border-[var(--color-line)] bg-[var(--color-line)]">
                {[
                  "Material Control",
                  "Custom Processing",
                  "Final Inspection",
                  "Export Packing",
                ].map((item) => (
                  <div key={item} className="bg-white p-5 text-sm font-semibold sm:p-6">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <MediaPanel
              label="Production and engineering team"
              imageSrc="/images/internal/about-engineering-team.png"
              imageAlt="Packaging engineers reviewing a custom EPE foam insert in the production facility"
            />
          </div>
        </Container>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <Container>
          <SectionHeading eyebrow="Capabilities" title="The essentials behind every project." />
          <div className="mt-14 grid gap-px overflow-hidden border border-[var(--color-line)] bg-[var(--color-line)] md:grid-cols-2 lg:grid-cols-12">
            {strengths.map((item, index) => (
              <article
                key={item.title}
                className={`group bg-white ${index === 0 || index === 3 ? "lg:col-span-7" : "lg:col-span-5"}`}
              >
                <div className="relative min-h-64 overflow-hidden sm:min-h-72">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 58vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                </div>
                <div className="p-7 sm:p-8">
                  <h2 className="text-xl font-semibold tracking-[-0.03em]">{item.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <QuoteBanner title="Build a protective packaging program with ZH PACK." />
    </>
  );
}

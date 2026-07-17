import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/internal/page-hero";
import { QuoteBanner } from "@/components/internal/quote-banner";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Manufacturing",
  description: "See the ZH PACK EPE foam packaging manufacturing process from raw material to shipping.",
  path: "/manufacturing",
  keywords: ["EPE Foam Production", "Foam Precision Cutting"],
});

const process = [
  ["01", "Raw Material", "Material selection and incoming checks."],
  ["02", "Foam Production", "Foam prepared to project requirements."],
  ["03", "Precision Cutting", "Parts cut to defined dimensions."],
  ["04", "Custom Shaping", "Structures formed around product needs."],
  ["05", "Quality Inspection", "Material, dimensions, and fit reviewed."],
  ["06", "Packing", "Finished parts protected for transport."],
  ["07", "Shipping", "Orders prepared for domestic or export delivery."],
];

const systems = [
  {
    title: "Material",
    description: "Control the foundation of protection.",
    image: "/images/internal/factory-production-hall.png",
    alt: "EPE foam material preparation in the manufacturing facility",
  },
  {
    title: "Conversion",
    description: "Cut and shape around product geometry.",
    image: "/images/internal/manufacturing-precision-cutting.png",
    alt: "Precision cutting of a custom EPE foam insert",
  },
  {
    title: "Inspection",
    description: "Verify output before final packing.",
    image: "/images/internal/quality-dimension-fit.png",
    alt: "Dimension and fit inspection of finished foam packaging",
  },
];

export default function ManufacturingPage() {
  return (
    <>
      <PageHero
        eyebrow="Manufacturing"
        title="A controlled path from material to shipment."
        description="ZH PACK brings foam preparation, precision processing, inspection, and export packing into one visible production sequence."
        visualLabel="Production Process"
        imageSrc="/images/internal/manufacturing-production-flow.png"
        imageAlt="Organized EPE foam production and packing workflow"
      />

      <section className="bg-[var(--color-ink)] py-24 text-white sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="Production Flow"
            title="Seven stages. One accountable process."
            inverse
          />

          <ol className="mt-16 border-y border-white/15">
            {process.map(([number, title, description], index) => (
              <li
                key={title}
                className="group relative grid gap-4 border-b border-white/15 py-7 last:border-b-0 sm:grid-cols-[5rem_0.8fr_1.2fr_auto] sm:items-center"
              >
                <span className="text-xs font-bold text-[var(--color-brand)]">{number}</span>
                <h2 className="text-lg font-semibold tracking-[-0.02em]">{title}</h2>
                <p className="max-w-lg text-sm leading-6 text-white/55">{description}</p>
                <span className="hidden text-right text-xs font-semibold text-white/35 sm:block">
                  {index < process.length - 1 ? "Next" : "Release"}
                </span>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-[var(--color-surface)] py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="Manufacturing System"
            title="Built around control points."
            description="Twelve equipment units support material preparation, precision processing, custom shaping, and final inspection."
          />
          <div className="mt-14 grid gap-px overflow-hidden border border-[var(--color-line)] bg-[var(--color-line)] lg:grid-cols-12">
            {systems.map((item, index) => (
              <article
                key={item.title}
                className={`group bg-white ${index === 0 ? "lg:col-span-5" : index === 1 ? "lg:col-span-7" : "lg:col-span-12 lg:grid lg:grid-cols-[1.35fr_0.65fr]"}`}
              >
                <div className="relative min-h-72 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes={
                      index === 2
                        ? "(min-width: 1024px) 65vw, 100vw"
                        : "(min-width: 1024px) 55vw, 100vw"
                    }
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                </div>
                <div className="flex min-h-40 flex-col justify-end p-7 sm:p-8">
                  <h2 className="text-xl font-semibold tracking-[-0.03em]">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <QuoteBanner title="Bring us the product challenge. We will map the packaging process." />
    </>
  );
}

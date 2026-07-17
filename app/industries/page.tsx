import type { Metadata } from "next";
import { MediaPanel } from "@/components/internal/media-panel";
import { PageHero } from "@/components/internal/page-hero";
import { QuoteBanner } from "@/components/internal/quote-banner";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Industries",
  description:
    "EPE foam protective packaging for electronics, automotive, machinery, medical equipment, furniture, and consumer products.",
  path: "/industries",
  keywords: ["Industrial Foam Packaging", "Electronics Protective Packaging"],
});

const industries = [
  {
    title: "Electronics",
    description: "Shock protection and organized presentation for displays, controls, and components.",
    image: "/images/internal/industry-electronics.png",
    alt: "Electronic display and circuit components protected in a custom EPE foam insert",
  },
  {
    title: "Automotive",
    description: "Component separation and transit protection for control units and machined parts.",
    image: "/images/internal/industry-automotive.png",
    alt: "Automotive control unit and components protected by EPE foam trays",
  },
  {
    title: "Machinery",
    description: "Durable support for precision industrial parts, tools, and export shipments.",
    image: "/images/internal/industry-machinery.png",
    alt: "Industrial machine parts secured in EPE foam inside an export crate",
  },
  {
    title: "Medical Equipment",
    description: "Clean, precise fit for sensitive devices, accessories, and service cases.",
    image: "/images/internal/industry-medical.png",
    alt: "Medical diagnostic equipment organized in a precision-cut EPE foam case",
  },
  {
    title: "Furniture",
    description: "Surface, edge, and corner protection for panels and finished products in transit.",
    image: "/images/internal/industry-furniture.png",
    alt: "Furniture panels protected by EPE foam edge guards and wrapping",
  },
  {
    title: "Consumer Products",
    description: "Custom structures for product sets, appliances, glassware, and branded delivery.",
    image: "/images/internal/industry-consumer-products.png",
    alt: "Consumer product set arranged in custom EPE foam presentation packaging",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Protective packaging across critical sectors."
        description="Custom EPE foam structures adapt to product shape, handling risk, and shipping conditions across multiple industries."
        visualLabel="Electronics protection"
        imageSrc="/images/internal/industry-electronics.png"
        imageAlt="Electronic display module protected in a custom EPE foam insert"
      />

      <section className="bg-[var(--color-surface)] py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="Applications"
            title="Designed around the product, not the category."
            description="Packaging structures are adjusted to product geometry, handling risks, presentation needs, and the shipping environment."
          />

          <div className="mt-16 grid gap-7 lg:grid-cols-2">
            {industries.map((industry, index) => (
              <article
                key={industry.title}
                className={`overflow-hidden bg-white ${index === 0 || index === 5 ? "lg:col-span-2 lg:grid lg:grid-cols-[1.35fr_0.65fr]" : ""}`}
              >
                <MediaPanel
                  label={industry.title}
                  imageSrc={industry.image}
                  imageAlt={industry.alt}
                  sizes={index === 0 || index === 5 ? "(min-width: 1024px) 60vw, 100vw" : "(min-width: 1024px) 45vw, 100vw"}
                  className={index === 0 || index === 5 ? "min-h-[420px]" : "min-h-[330px]"}
                />
                <div className="flex min-h-52 flex-col justify-end p-7 sm:p-9">
                  <h2 className="text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">
                    {industry.title}
                  </h2>
                  <p className="mt-4 max-w-md text-sm leading-6 text-[var(--color-muted)]">
                    {industry.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <QuoteBanner title="Tell us your product, handling risks, and shipping route." />
    </>
  );
}

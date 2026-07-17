import type { Metadata } from "next";
import { MediaPanel } from "@/components/internal/media-panel";
import { PageHero } from "@/components/internal/page-hero";
import { QuoteBanner } from "@/components/internal/quote-banner";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "EPE Foam Packaging Products",
  description: "EPE foam sheet, custom foam inserts, EPE foam packaging, and industrial protective packaging from ZH PACK.",
  path: "/products",
  keywords: ["EPE Foam Sheet", "Industrial Protective Packaging"],
});

const products = [
  {
    id: "epe-foam-sheet",
    number: "01",
    title: "EPE Foam Sheet",
    description: "Flexible foam material for wrapping, layering, separation, and further converting.",
    applications: ["Layer Pads", "Surface Protection", "Fabrication", "Wrapping"],
    image: "/images/internal/product-epe-sheet.png",
    imageAlt: "White EPE foam sheets in several thicknesses",
  },
  {
    id: "custom-foam-insert",
    number: "02",
    title: "Custom Foam Insert",
    description: "Precision-cut inserts shaped around product geometry and presentation requirements.",
    applications: ["Cases", "Tool Kits", "Electronics", "Product Sets"],
    image: "/images/internal/product-custom-insert.png",
    imageAlt: "Precision-cut EPE foam insert for electronic components",
  },
  {
    id: "epe-foam-packaging",
    number: "03",
    title: "EPE Foam Packaging",
    description: "Complete protective structures for cushioning, spacing, and transit protection.",
    applications: ["Inner Packaging", "End Caps", "Trays", "Cushioning"],
    image: "/images/internal/product-complete-packaging.png",
    imageAlt: "Complete EPE foam protection system around an electronic display",
  },
  {
    id: "industrial-protective-packaging",
    number: "04",
    title: "Industrial Protective Packaging",
    description: "Robust packaging concepts for machinery, components, and demanding transport conditions.",
    applications: ["Machinery", "Components", "Export Crates", "Heavy Products"],
    image: "/images/internal/product-industrial-protection.png",
    imageAlt: "Industrial machinery component protected by heavy-duty EPE foam supports",
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="EPE foam packaging, made to fit."
        description="Material supply and custom protective packaging structures for OEM, ODM, and industrial projects."
        visualLabel="Product Range"
        imageSrc="/images/internal/products-family.png"
        imageAlt="ZH PACK range of EPE foam sheets, inserts, trays, and protective components"
      />

      <section className="bg-[var(--color-surface)] py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="Product Categories"
            title="Four starting points for custom protection."
            description="Choose the closest category, then share the product, dimensions, protection risks, and target quantity."
          />

          <div className="mt-16 grid gap-6">
            {products.map((product, index) => (
              <article
                key={product.id}
                id={product.id}
                className="scroll-mt-28 overflow-hidden border border-[var(--color-line)] bg-white lg:grid lg:grid-cols-2"
              >
                <MediaPanel
                  label={product.title}
                  imageSrc={product.image}
                  imageAlt={product.imageAlt}
                  className={index % 2 === 1 ? "lg:order-2" : ""}
                />
                <div className="flex min-h-[360px] flex-col justify-between p-7 sm:p-10 lg:p-14">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-brand)]">
                      Product Category
                    </p>
                    <h2 className="mt-5 text-3xl font-semibold tracking-[-0.045em] sm:text-5xl">
                      {product.title}
                    </h2>
                    <p className="mt-5 max-w-xl text-base leading-7 text-[var(--color-muted)]">
                      {product.description}
                    </p>
                    <div className="mt-8 flex flex-wrap gap-2">
                      {product.applications.map((application) => (
                        <span
                          key={application}
                          className="border border-[var(--color-line)] bg-[var(--color-surface)] px-3 py-2 text-xs font-semibold"
                        >
                          {application}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-10">
                    <ButtonLink href="/contact">
                      Inquire About This Product
                    </ButtonLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <QuoteBanner title="Share a drawing, sample, or product dimensions to begin." />
    </>
  );
}

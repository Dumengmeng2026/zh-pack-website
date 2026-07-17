import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";
import { MediaPanel } from "@/components/internal/media-panel";
import { PageHero } from "@/components/internal/page-hero";
import { Container } from "@/components/ui/container";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Request a Quote",
  description: "Contact ZH PACK about custom EPE foam packaging, foam inserts, and OEM or ODM protective packaging projects.",
  path: "/contact",
  keywords: ["EPE Foam Packaging Quote", "Custom Packaging Inquiry"],
});

const projectNotes = [
  ["01", "Product", "Share the product type, size, weight, or drawing."],
  ["02", "Protection", "Describe handling, storage, and shipping conditions."],
  ["03", "Quantity", "Add estimated order volume and target timing."],
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start your packaging project."
        description="Share the product, dimensions, quantity, or drawing. ZH PACK will use the details to prepare the next step."
        visualLabel="Project Inquiry"
        imageSrc="/images/internal/contact-project-review.png"
        imageAlt="Packaging engineer and export project manager reviewing a customer sample and foam insert"
        showCta={false}
      />

      <section className="bg-[var(--color-surface)] py-24 sm:py-32">
        <Container className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16 xl:gap-24">
          <aside>
            <p className="eyebrow">Before You Send</p>
            <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl">
              A few details help us quote faster.
            </h2>
            <div className="mt-8 grid gap-3 border-y border-[var(--color-line)] py-6 text-sm">
              <a
                href={`mailto:${siteConfig.email}`}
                className="w-fit font-semibold transition-colors hover:text-[var(--color-brand)]"
              >
                {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="w-fit font-semibold transition-colors hover:text-[var(--color-brand)]"
              >
                {siteConfig.phone}
              </a>
              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit font-semibold text-[var(--color-brand)]"
              >
                WhatsApp Contact ↗
              </a>
              <address className="mt-2 max-w-md text-xs not-italic leading-5 text-[var(--color-muted)]">
                {siteConfig.address}
              </address>
            </div>
            <div className="mt-10 border-y border-[var(--color-line)]">
              {projectNotes.map(([number, title, description]) => (
                <div
                  key={title}
                  className="grid grid-cols-[3rem_1fr] gap-3 border-b border-[var(--color-line)] py-6 last:border-b-0"
                >
                  <span className="text-xs font-bold text-[var(--color-brand)]">{number}</span>
                  <div>
                    <h3 className="text-base font-semibold">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <MediaPanel
              label="Drawing Review"
              imageSrc="/images/internal/about-engineering-team.png"
              imageAlt="Engineering team reviewing a custom EPE foam insert and technical drawing"
              className="mt-8 min-h-[300px]"
            />
          </aside>

          <div className="border border-[var(--color-line)] bg-white p-6 sm:p-9 lg:p-12">
            <div className="mb-9 border-b border-[var(--color-line)] pb-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-brand)]">
                RFQ Form
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                Request a Quote
              </h2>
            </div>
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}

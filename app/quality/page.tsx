import type { Metadata } from "next";
import { MediaPanel } from "@/components/internal/media-panel";
import { PageHero } from "@/components/internal/page-hero";
import { QuoteBanner } from "@/components/internal/quote-banner";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Quality Control",
  description: "Material, thickness, density, dimension, and final inspection for EPE foam packaging.",
  path: "/quality",
  keywords: ["Foam Density Testing", "Packaging Quality Inspection"],
});

const checks = [
  ["01", "Material Inspection", "Confirm incoming material condition and specification."],
  ["02", "Thickness Testing", "Verify foam thickness against project requirements."],
  ["03", "Density Testing", "Check material density for protective performance."],
  ["04", "Dimension Checking", "Measure critical dimensions and product fit."],
  ["05", "Final Inspection", "Review finished parts before packing and release."],
];

export default function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality Control"
        title="Inspection built into the process."
        description="Quality checks are structured around material condition, physical properties, dimensions, and final packaging readiness."
        visualLabel="Inspection System"
        imageSrc="/images/internal/quality-material-testing.png"
        imageAlt="Quality inspector measuring EPE foam thickness and material properties"
      />

      <section className="bg-[var(--color-ink)] py-24 text-white sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="Quality Gates"
            title="Five checks before release."
            description="Material, physical properties, dimensions, and finished packaging are checked before release."
            inverse
          />
          <ol className="mt-14 border-y border-white/15">
            {checks.map(([number, title, description]) => (
              <li
                key={title}
                className="grid gap-4 border-b border-white/15 py-7 last:border-b-0 sm:grid-cols-[5rem_0.8fr_1.2fr] sm:items-center"
              >
                <span className="text-xs font-bold text-[var(--color-brand)]">{number}</span>
                <h2 className="text-lg font-semibold tracking-[-0.02em]">{title}</h2>
                <p className="max-w-xl text-sm leading-6 text-white/55">{description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <Container className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <MediaPanel
            label="Dimension and fit inspection"
            imageSrc="/images/internal/quality-dimension-fit.png"
            imageAlt="Technician checking the dimensions and fit of an EPE foam insert around a display module"
          />
          <div className="flex flex-col justify-center">
            <SectionHeading
              eyebrow="Control Points"
              title="Clear criteria. Consistent output."
              description="Inspection records connect material requirements, critical dimensions, and final packaging approval."
            />
          </div>
        </Container>
      </section>

      <QuoteBanner title="Discuss the protection and tolerance requirements for your project." />
    </>
  );
}

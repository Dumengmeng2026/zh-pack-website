import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";

const checks = [
  ["Material Inspection", "Incoming material and surface condition"],
  ["Thickness Testing", "Material thickness against specification"],
  ["Density Testing", "Cushioning density for the intended application"],
  ["Dimension Checking", "Cut geometry and fit against approved dimensions"],
  ["Final Inspection", "Finished packaging before packing and release"],
];

export function QualityPreview() {
  return (
    <section className="home-dark-section border-t border-white/10 py-24 text-white sm:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:gap-24">
          <div>
            <p className="home-kicker">Quality control</p>
            <h2 className="mt-7 max-w-4xl text-5xl font-medium leading-[0.95] tracking-[-0.055em] sm:text-6xl lg:text-[5.25rem]">
              Quality is checked through the process, not added at the end.
            </h2>
          </div>
          <div>
            <p className="max-w-xl text-base leading-7 text-white/52 sm:text-lg sm:leading-8">
              Each production stage feeds the next with measurable requirements for
              material, thickness, density, dimensions, and finished condition.
            </p>
            <Link
              href="/quality"
              className="mt-8 inline-flex items-center gap-4 text-sm font-bold transition-colors hover:text-[var(--color-brand-bright)]"
            >
              View quality control <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="relative mt-16 min-h-[420px] overflow-hidden border border-white/14 sm:min-h-[620px]">
          <Image
            src="/images/placeholder-quality-control.png"
            alt="Temporary visual of dimensional inspection for custom EPE foam packaging"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d110f]/36 via-transparent to-transparent" />
          <p className="absolute bottom-6 left-6 max-w-sm text-sm leading-6 text-white/78 sm:bottom-9 sm:left-9">
            Temporary quality-control image. Replace with verified factory inspection
            photography when available.
          </p>
        </div>

        <div className="grid border-l border-t border-white/14 sm:grid-cols-2 lg:grid-cols-5">
          {checks.map(([title, detail]) => (
            <div
              key={title}
              className="min-h-52 border-b border-r border-white/14 p-6 sm:min-h-60 sm:p-7"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand-bright)] shadow-[0_0_20px_rgba(62,197,99,0.75)]" />
              <h3 className="mt-12 text-lg font-medium tracking-[-0.02em] sm:text-xl">
                {title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-white/42">{detail}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

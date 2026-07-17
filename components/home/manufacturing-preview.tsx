import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";

const process = [
  "Raw Material",
  "Foam Production",
  "Precision Cutting",
  "Custom Shaping",
  "Quality Inspection",
  "Packing",
  "Shipping",
];

export function ManufacturingPreview() {
  return (
    <section className="home-dark-section border-t border-white/10 py-24 text-white sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <div className="flex flex-col justify-between">
            <div>
              <p className="home-kicker">Manufacturing</p>
              <h2 className="mt-7 text-5xl font-medium leading-[0.96] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                From raw foam to ready-to-ship protection.
              </h2>
              <p className="mt-8 max-w-lg text-base leading-7 text-white/52 sm:text-lg sm:leading-8">
                A visible, controlled path through every production stage, supported by
                an experienced team and in-process inspection.
              </p>
            </div>
            <Link
              href="/manufacturing"
              className="mt-10 inline-flex w-fit items-center gap-4 text-sm font-bold transition-colors hover:text-[var(--color-brand-bright)]"
            >
              Explore manufacturing <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="relative min-h-[520px] overflow-hidden border border-white/14 sm:min-h-[650px]">
            <Image
              src="/images/factory-finishing-line.jpg"
              alt="ZH PACK workers inspecting custom EPE foam packaging"
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover object-[50%_32%] grayscale-[18%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d110f] via-[#0d110f]/16 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 grid gap-5 p-7 sm:grid-cols-2 sm:p-10">
              <p className="max-w-sm text-2xl font-medium leading-tight tracking-[-0.03em] sm:text-3xl">
                Hands-on finishing and inspection before packing.
              </p>
              <p className="max-w-sm text-sm leading-6 text-white/55 sm:justify-self-end sm:text-right">
                Custom shaping, fit checks, visual inspection, and packing preparation
                remain connected to the production floor.
              </p>
            </div>
          </div>
        </div>

        <ol className="mt-16 border-y border-white/14">
          {process.map((step, index) => (
            <li
              key={step}
              className="grid grid-cols-[1fr_auto] items-center gap-6 border-b border-white/14 py-5 last:border-b-0 sm:grid-cols-[10rem_1fr_auto] sm:py-6"
            >
              <span className="hidden text-[10px] font-bold uppercase tracking-[0.17em] text-white/28 sm:block">
                Production stage
              </span>
              <h3 className="text-lg font-medium tracking-[-0.02em] sm:text-xl">
                {step}
              </h3>
              <span
                aria-hidden="true"
                className={index === process.length - 1 ? "text-[var(--color-brand-bright)]" : "text-white/24"}
              >
                {index === process.length - 1 ? "Ready" : "↓"}
              </span>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

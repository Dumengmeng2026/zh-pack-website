import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

export function HomeCta() {
  return (
    <section className="home-dark-section border-t border-white/10 py-24 text-white sm:py-32">
      <Container>
        <div className="relative overflow-hidden border border-white/14 px-6 py-14 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <Image
            src="/images/placeholder-global-shipping.png"
            alt="Temporary visual of export-ready EPE foam packaging prepared for global shipping"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080b09] via-[#080b09]/88 to-[#080b09]/24" />
          <div className="relative grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="home-kicker">Start a project</p>
              <h2 className="mt-7 max-w-4xl text-5xl font-medium leading-[0.95] tracking-[-0.055em] sm:text-6xl lg:text-[5.5rem]">
                Tell us what needs protecting.
              </h2>
              <p className="mt-7 max-w-xl text-base leading-7 text-white/48 sm:text-lg sm:leading-8">
                Share the product, quantity, destination, and any drawings. Our team will
                review the requirement and prepare the next step.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <ButtonLink href="/contact" className="min-w-48">
                Get a Quote <span aria-hidden="true">↗</span>
              </ButtonLink>
              <ButtonLink
                href={`mailto:${siteConfig.email}`}
                variant="outline-light"
                className="min-w-48"
              >
                Email Inquiry
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

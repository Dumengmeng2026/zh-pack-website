import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { Container } from "@/components/ui/container";
import { capabilityNavigation, primaryNavigation, siteConfig } from "@/lib/site";

const resourceLinks = [
  { label: "Quality Control", href: "/quality" },
  { label: "Factory Overview", href: "/about" },
  { label: "OEM / ODM Manufacturing", href: "/manufacturing" },
] as const;

const encodedAddress = encodeURIComponent(siteConfig.address);
const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY?.trim();
const googleMapsHref = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
const googleMapsEmbedHref = googleMapsApiKey
  ? `https://www.google.com/maps/embed/v1/place?key=${encodeURIComponent(googleMapsApiKey)}&q=${encodedAddress}&zoom=13&maptype=satellite&language=en`
  : null;

const footerLinkClass =
  "w-fit text-[0.94rem] leading-6 text-white/64 transition-colors duration-200 hover:text-white";

export function SiteFooter() {
  return (
    <footer className="bg-[#080b09] text-white">
      <Container className="pb-7 pt-8 sm:pt-10 lg:pt-12">
        <section className="grid border-y border-white/14 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="py-9 sm:py-11 lg:pr-16">
            <h2 className="max-w-3xl text-[clamp(2rem,4.2vw,4.25rem)] font-semibold leading-[0.96] tracking-[-0.055em] text-white">
              Packaging designed around your product.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-white/52 sm:text-base sm:leading-7">
              Send your dimensions, risk points, and shipping route. Our team will
              recommend the right EPE structure.
            </p>
          </div>

          <div className="flex items-center border-t border-white/14 py-8 lg:border-l lg:border-t-0 lg:pl-10">
            <Link
              href="/contact"
              className="group flex w-full items-center justify-between bg-[var(--color-brand)] px-6 py-5 text-sm font-bold text-white transition-colors duration-200 hover:bg-[var(--color-brand-dark)] sm:max-w-md"
            >
              Start a packaging project
              <span aria-hidden="true" className="text-lg transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </section>

        <div className="grid gap-x-10 gap-y-12 py-12 md:grid-cols-2 lg:grid-cols-[1.2fr_0.62fr_0.92fr_1.25fr] lg:py-14 xl:gap-x-16">
          <div className="max-w-sm">
            <Logo inverse size="large" />
            <p className="mt-6 text-base font-semibold leading-6 text-white/90">
              {siteConfig.legalName}
            </p>
            <p className="mt-3 max-w-xs text-sm leading-6 text-white/48">
              Professional EPE foam packaging manufacturing for custom protective
              packaging programs worldwide.
            </p>

            <dl className="mt-8 grid grid-cols-2 border-t border-white/14 pt-5">
              <div>
                <dt className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-white/38">
                  Experience
                </dt>
                <dd className="mt-2 text-lg font-semibold tracking-[-0.03em] text-white">
                  Since {siteConfig.manufacturingSince}
                </dd>
              </div>
              <div className="border-l border-white/14 pl-5">
                <dt className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-white/38">
                  Daily capacity
                </dt>
                <dd className="mt-2 text-lg font-semibold tracking-[-0.03em] text-white">
                  {siteConfig.dailyCapacity}
                </dd>
              </div>
            </dl>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/40">
              Company
            </p>
            <nav aria-label="Footer company navigation" className="mt-6 grid gap-3.5">
              {primaryNavigation.slice(1).map((item) => (
                <Link key={item.href} href={item.href} className={footerLinkClass}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="grid content-start gap-9 sm:grid-cols-2 md:grid-cols-1">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/40">
                Capabilities
              </p>
              <nav aria-label="Footer capability navigation" className="mt-6 grid gap-3.5">
                {capabilityNavigation.map((item) => (
                  <Link key={item.href} href={item.href} className={footerLinkClass}>
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/40">
                Resources
              </p>
              <nav aria-label="Footer resources navigation" className="mt-6 grid gap-3.5">
                {resourceLinks.map((item) => (
                  <Link key={item.label} href={item.href} className={footerLinkClass}>
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/40">
              Direct contact
            </p>
            <div className="mt-6 grid gap-3.5 text-[0.94rem] text-white/72">
              <a
                href={`mailto:${siteConfig.email}`}
                className="w-fit break-all transition-colors duration-200 hover:text-white"
              >
                {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="w-fit transition-colors duration-200 hover:text-white"
              >
                {siteConfig.phone}
              </a>
              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit transition-colors duration-200 hover:text-white"
              >
                WhatsApp Contact ↗
              </a>
            </div>

            <address className="mt-7 max-w-sm text-sm not-italic leading-6 text-white/45">
              {siteConfig.address}
            </address>

            <div className="mt-6 overflow-hidden border border-white/14 bg-white/[0.025]">
              {googleMapsEmbedHref ? (
                <iframe
                  title="ZH PACK factory location on Google Maps"
                  src={googleMapsEmbedHref}
                  width="100%"
                  height="174"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="block border-0 grayscale-[0.18]"
                />
              ) : (
                <a
                  href={googleMapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-5 transition-colors duration-200 hover:bg-white/[0.045]"
                >
                  <span className="block text-[0.65rem] font-bold uppercase tracking-[0.14em] text-white/38">
                    Factory location
                  </span>
                  <span className="mt-3 block text-sm font-semibold text-white">
                    Jiaozuo, Henan, China
                  </span>
                  <span className="mt-5 flex items-center justify-between text-xs font-bold text-[var(--color-brand-bright)]">
                    Open in Google Maps
                    <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
                      ↗
                    </span>
                  </span>
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/14 pt-6 text-xs leading-5 text-white/38 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span>OEM / ODM Protective Packaging</span>
            <Link href="/sitemap.xml" className="transition-colors duration-200 hover:text-white">
              Sitemap
            </Link>
            <Link href="/contact" className="transition-colors duration-200 hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

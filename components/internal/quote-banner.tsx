import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

type QuoteBannerProps = {
  eyebrow?: string;
  title?: string;
};

export function QuoteBanner({
  eyebrow = "Start a Project",
  title = "Need packaging designed around your product?",
}: QuoteBannerProps) {
  return (
    <section className="bg-[var(--color-brand)] py-16 text-white sm:py-20">
      <Container className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/65">
            {eyebrow}
          </p>
          <h2 className="mt-4 max-w-4xl text-3xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl">
            {title}
          </h2>
        </div>
        <ButtonLink
          href="/contact"
          variant="light"
          className="min-w-44 !text-[#111111]"
        >
          Request a Quote
        </ButtonLink>
      </Container>
    </section>
  );
}

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { MediaPanel } from "@/components/internal/media-panel";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  visualLabel: string;
  imageSrc: string;
  imageAlt: string;
  imageClassName?: string;
  showCta?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  description,
  visualLabel,
  imageSrc,
  imageAlt,
  imageClassName,
  showCta = true,
}: PageHeroProps) {
  return (
    <section className="bg-[#111513] py-10 text-white sm:py-14 lg:py-16">
      <Container className="grid items-stretch gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 xl:gap-20">
        <div className="flex flex-col justify-center py-6 lg:py-10">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-6 max-w-3xl text-[clamp(3rem,5.3vw,5.8rem)] font-semibold leading-[0.96] tracking-[-0.055em]">
            {title}
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-white/62 sm:text-lg">
            {description}
          </p>
          {showCta ? (
            <div className="mt-9">
              <ButtonLink href="/contact">Get a Quote</ButtonLink>
            </div>
          ) : null}
        </div>
        <MediaPanel
          label={visualLabel}
          imageSrc={imageSrc}
          imageAlt={imageAlt}
          imageClassName={imageClassName}
          priority
          className="min-h-[430px] lg:min-h-[590px]"
        />
      </Container>
    </section>
  );
}

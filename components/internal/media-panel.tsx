import Image from "next/image";

type MediaPanelProps = {
  label: string;
  imageSrc: string;
  imageAlt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
};

export function MediaPanel({
  label,
  imageSrc,
  imageAlt,
  className = "",
  imageClassName = "object-cover",
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: MediaPanelProps) {
  return (
    <figure
      className={`group relative min-h-[360px] overflow-hidden bg-[#121614] text-white ${className}`}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority={priority}
        sizes={sizes}
        className={`${imageClassName} transition-transform duration-700 ease-out group-hover:scale-[1.015]`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-black/10" />
      <figcaption className="absolute inset-x-6 bottom-6 border-t border-white/30 pt-4 text-xs font-semibold text-white sm:inset-x-8 sm:bottom-8">
        {label}
      </figcaption>
    </figure>
  );
}

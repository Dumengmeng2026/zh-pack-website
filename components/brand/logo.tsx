import Link from "next/link";

type LogoProps = {
  inverse?: boolean;
  monochrome?: boolean;
  size?: "default" | "large";
};

type BrandMarkProps = {
  monochrome?: boolean;
  className?: string;
};

export function BrandMark({ monochrome = false, className = "" }: BrandMarkProps) {
  const outerLight = monochrome ? "currentColor" : "#65b735";
  const outerMid = monochrome ? "currentColor" : "#1b8f3a";
  const outerDark = monochrome ? "currentColor" : "#087b31";

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 76 84"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M38 3 70 22 58 29 38 17 17 29v37L5 59V22L38 3Z"
        fill={outerLight}
      />
      <path d="m38 3 32 19-12 7-20-12V3Z" fill={outerMid} />
      <path d="M70 35v27L38 81 26 74l32-19V42l12-7Z" fill={outerMid} />
      <path d="m58 55 12-7v14L38 81v-14l20-12Z" fill={outerDark} />
      <path d="m38 26 14 8-14 8-14-8 14-8Z" fill={outerLight} />
      <path d="m24 34 14 8v16l-14-8V34Z" fill={outerMid} />
      <path d="m52 34-14 8v16l14-8V34Z" fill={outerDark} />
    </svg>
  );
}

export function Logo({ inverse = false, monochrome = false, size = "default" }: LogoProps) {
  const markSize = size === "large" ? "h-14 w-13" : "h-11 w-10";
  const wordmarkSize =
    size === "large"
      ? "text-[1.45rem] sm:text-[1.6rem]"
      : "text-[1.2rem] sm:text-[1.3rem]";

  return (
    <Link
      href="/"
      aria-label="ZH PACK home"
      className={`inline-flex shrink-0 items-center gap-2.5 ${
        inverse ? "text-white" : "text-[var(--color-ink)]"
      }`}
    >
      <BrandMark monochrome={monochrome} className={`${markSize} shrink-0`} />
      <span
        aria-hidden="true"
        className={`flex items-baseline font-black leading-none tracking-[-0.055em] ${wordmarkSize}`}
      >
        <span>ZH</span>
        <span className={monochrome ? "ml-1.5" : "ml-1.5 text-[var(--color-brand)]"}>
          PACK
        </span>
      </span>
    </Link>
  );
}

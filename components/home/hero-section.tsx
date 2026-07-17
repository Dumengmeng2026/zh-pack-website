const heroBackgroundImage =
  process.env.NEXT_PUBLIC_HOME_HERO_IMAGE?.trim() ||
  "/images/zh-pack-hero-effect-board.png";

export function HeroSection() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-[#050807] text-white">
      <h1 className="sr-only">
        Protection shaped around your product - Electronic Display Module EPE
        Foam Packaging
      </h1>
      <div
        className="absolute inset-0 -z-20 bg-contain bg-center bg-no-repeat lg:bg-cover"
        style={{
          backgroundImage: `url("${heroBackgroundImage}")`,
          filter: "brightness(1.16) contrast(1.14) saturate(1.03)",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_42%_58%,rgba(27,143,58,0.08),transparent_28%)]" />
      <div
        aria-hidden="true"
        className="absolute left-0 top-[calc(50%-28.15vw)] h-[7vw] w-[19%] lg:top-0 lg:h-[12%]"
        style={{
          background:
            "linear-gradient(110deg, #07100d 0%, #07100d 72%, rgba(7, 16, 13, 0) 100%)",
          maskImage:
            "linear-gradient(to bottom, #000 0%, #000 74%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, #000 0%, #000 74%, transparent 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute left-[27.45%] top-[calc(50%-10.2vw)] h-[2.8vw] w-[1.8vw] lg:top-[30.1%] lg:h-[4.4%] lg:w-[1.8%]"
        style={{
          background:
            "radial-gradient(ellipse at center, #13201d 0%, #101917 70%, transparent 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute left-[32.65%] top-[calc(50%+5.2vw)] h-[2.2vw] w-[1.4vw] lg:top-[59.1%] lg:h-[3.2%] lg:w-[1.4%]"
        style={{
          background:
            "radial-gradient(ellipse at center, #173126 0%, #11261e 68%, transparent 100%)",
        }}
      />
    </section>
  );
}

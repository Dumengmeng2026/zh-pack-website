import type { Metadata } from "next";
import { AdvantagesSection } from "@/components/home/advantages-section";
import { HeroSection } from "@/components/home/hero-section";
import { HomeCta } from "@/components/home/home-cta";
import { IndustriesPreview } from "@/components/home/industries-preview";
import { ManufacturingPreview } from "@/components/home/manufacturing-preview";
import { ProductsPreview } from "@/components/home/products-preview";
import { QualityPreview } from "@/components/home/quality-preview";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Professional EPE Foam Packaging Manufacturer",
  description:
    "Custom EPE foam packaging, foam inserts, and protective packaging solutions from Henan Zhonghuan Packaging Co., Ltd.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <HeroSection />
      <AdvantagesSection />
      <ProductsPreview />
      <ManufacturingPreview />
      <IndustriesPreview />
      <QualityPreview />
      <HomeCta />
    </>
  );
}

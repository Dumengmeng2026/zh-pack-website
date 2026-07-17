import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

const coreKeywords = [
  "EPE Foam Packaging Manufacturer",
  "Custom Foam Packaging",
  "EPE Foam Insert",
  "Protective Packaging Manufacturer",
  "Foam Packaging China",
];

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: PageMetadataInput): Metadata {
  const url = new URL(path, siteConfig.url).toString();

  return {
    title,
    description,
    keywords: [...coreKeywords, ...keywords],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: siteConfig.name,
      title: `${title} | ${siteConfig.name}`,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
    },
  };
}

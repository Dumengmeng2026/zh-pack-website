import type { Metadata, Viewport } from "next";
import { MarketingScripts } from "@/components/analytics/marketing-scripts";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: "ZH PACK | Professional EPE Foam Packaging Manufacturer",
    template: "%s | ZH PACK",
  },
  description: siteConfig.description,
  authors: [{ name: siteConfig.legalName, url: siteConfig.url }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  category: "Manufacturing",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "ZH PACK | Professional EPE Foam Packaging Manufacturer",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "ZH PACK | Professional EPE Foam Packaging Manufacturer",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#222222" },
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.legalName,
  alternateName: siteConfig.name,
  url: siteConfig.url,
  email: siteConfig.email,
  telephone: siteConfig.phoneHref,
  foundingDate: String(siteConfig.founded),
  description: siteConfig.description,
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: 80,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "No. 15 Chezhan Street, Zhandian Town, Wuzhi County",
    addressLocality: "Jiaozuo",
    addressRegion: "Henan Province",
    addressCountry: "CN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: siteConfig.phoneHref,
    email: siteConfig.email,
    availableLanguage: ["English", "Chinese"],
    areaServed: "Worldwide",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="flex min-h-full flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
          }}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <MarketingScripts />
      </body>
    </html>
  );
}

export const siteConfig = {
  name: "ZH PACK",
  legalName: "Henan Zhonghuan Packaging Co., Ltd.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://zhonghuanpackaging.com",
  description:
    "Professional EPE foam packaging manufacturer providing custom foam inserts and protective packaging solutions.",
  email: "sales@zhonghuanpackaging.com",
  phone: "+86 19059582665",
  phoneHref: "+8619059582665",
  whatsappHref: "https://wa.me/8619059582665",
  address:
    "No. 15 Chezhan Street, Zhandian Town, Wuzhi County, Jiaozuo, Henan Province, P.R. China",
  founded: 2023,
  manufacturingSince: 2010,
  factoryArea: "18,323 m²",
  employees: "80",
  equipment: "12 units",
  dailyCapacity: "50 tons/day",
} as const;

export const primaryNavigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" },
] as const;

export const capabilityNavigation = [
  { label: "EPE Foam Sheet", href: "/products#epe-foam-sheet" },
  { label: "Custom Foam Insert", href: "/products#custom-foam-insert" },
  { label: "Protective Packaging", href: "/products#protective-packaging" },
  { label: "Quality Control", href: "/quality" },
] as const;

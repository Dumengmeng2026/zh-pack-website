import type { SchemaTypeDefinition } from "sanity";

import { aboutPage } from "./singletons/aboutPage";
import { contactPage } from "./singletons/contactPage";
import { homePage } from "./singletons/homePage";
import { manufacturingPage } from "./singletons/manufacturingPage";
import { qualityPage } from "./singletons/qualityPage";
import { siteSettings } from "./singletons/siteSettings";
import { industry } from "./documents/industry";
import { product } from "./documents/product";
import { imageWithAlt } from "./objects/imageWithAlt";
import { seo } from "./objects/seo";

export const schemaTypes: SchemaTypeDefinition[] = [
  imageWithAlt,
  seo,
  siteSettings,
  homePage,
  aboutPage,
  manufacturingPage,
  qualityPage,
  contactPage,
  product,
  industry,
];


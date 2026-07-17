"use client";

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { dataset, projectId } from "./src/sanity/env";
import { schemaTypes } from "./src/sanity/schemaTypes";
import { structure } from "./src/sanity/structure";

export default defineConfig({
  name: "zh-pack-studio",
  title: "ZH PACK 内容后台",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [structureTool({ structure }), visionTool()],
  schema: { types: schemaTypes },
  document: {
    newDocumentOptions: (prev) =>
      prev.filter(
        (item) =>
          ![
            "siteSettings",
            "homePage",
            "aboutPage",
            "manufacturingPage",
            "qualityPage",
            "contactPage",
          ].includes(item.templateId),
      ),
    actions: (prev, context) =>
      [
        "siteSettings",
        "homePage",
        "aboutPage",
        "manufacturingPage",
        "qualityPage",
        "contactPage",
      ].includes(context.schemaType)
        ? prev.filter(({ action }) => action !== "delete" && action !== "duplicate")
        : prev,
  },
});


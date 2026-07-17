import { defineField, defineType } from "sanity";

export const seo = defineType({
  name: "seo",
  title: "SEO 设置",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "英文 SEO 标题",
      type: "string",
      validation: (rule) => rule.max(60).warning("建议不超过 60 个字符"),
    }),
    defineField({
      name: "description",
      title: "英文 SEO 描述",
      type: "text",
      rows: 3,
      validation: (rule) => rule.max(160).warning("建议不超过 160 个字符"),
    }),
    defineField({
      name: "keywords",
      title: "关键词",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "image",
      title: "社交分享图片",
      type: "imageWithAlt",
    }),
  ],
});


import { defineArrayMember, defineField, defineType } from "sanity";

export const aboutPage = defineType({
  name: "aboutPage",
  title: "关于我们",
  type: "document",
  fields: [
    defineField({ name: "eyebrow", title: "英文小标题", type: "string", initialValue: "ABOUT ZH PACK" }),
    defineField({ name: "title", title: "英文主标题", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "intro", title: "英文企业介绍", type: "text", rows: 5 }),
    defineField({ name: "heroImage", title: "头图", type: "imageWithAlt" }),
    defineField({
      name: "capabilities",
      title: "核心能力",
      type: "array",
      of: [defineArrayMember({ type: "object", fields: [
        defineField({ name: "title", title: "英文标题", type: "string", validation: (rule) => rule.required() }),
        defineField({ name: "description", title: "英文说明", type: "text", rows: 3 }),
        defineField({ name: "image", title: "图片", type: "imageWithAlt" }),
      ], preview: { select: { title: "title", subtitle: "description", media: "image" } } })],
      validation: (rule) => rule.max(8),
    }),
    defineField({ name: "seo", title: "页面 SEO", type: "seo" }),
  ],
  preview: { prepare: () => ({ title: "关于我们" }) },
});

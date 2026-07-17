import { defineArrayMember, defineField, defineType } from "sanity";

export const manufacturingPage = defineType({
  name: "manufacturingPage",
  title: "制造能力",
  type: "document",
  fields: [
    defineField({ name: "eyebrow", title: "英文小标题", type: "string" }),
    defineField({ name: "title", title: "英文主标题", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "description", title: "英文说明", type: "text", rows: 4 }),
    defineField({ name: "heroImage", title: "头图", type: "imageWithAlt" }),
    defineField({
      name: "process",
      title: "生产流程",
      type: "array",
      of: [defineArrayMember({ type: "object", fields: [
        defineField({ name: "title", title: "英文步骤名称", type: "string", validation: (rule) => rule.required() }),
        defineField({ name: "description", title: "英文说明", type: "text", rows: 3 }),
        defineField({ name: "image", title: "步骤图片", type: "imageWithAlt" }),
      ], preview: { select: { title: "title", subtitle: "description", media: "image" } } })],
      validation: (rule) => rule.min(1).max(12),
    }),
    defineField({ name: "seo", title: "页面 SEO", type: "seo" }),
  ],
  preview: { prepare: () => ({ title: "制造能力" }) },
});

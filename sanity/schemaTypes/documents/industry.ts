import { defineField, defineType } from "sanity";

export const industry = defineType({
  name: "industry",
  title: "行业应用",
  type: "document",
  fields: [
    defineField({ name: "title", title: "英文行业名称", type: "string", validation: (rule) => rule.required().max(80) }),
    defineField({ name: "slug", title: "网址标识", type: "slug", options: { source: "title", maxLength: 96 }, validation: (rule) => rule.required() }),
    defineField({ name: "description", title: "英文行业说明", type: "text", rows: 4, validation: (rule) => rule.required() }),
    defineField({ name: "image", title: "行业图片", type: "imageWithAlt", validation: (rule) => rule.required() }),
    defineField({ name: "order", title: "显示顺序", type: "number", initialValue: 10, validation: (rule) => rule.integer().min(0) }),
    defineField({ name: "active", title: "在网站显示", type: "boolean", initialValue: true }),
    defineField({ name: "seo", title: "行业 SEO", type: "seo" }),
  ],
  orderings: [{ title: "显示顺序", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "title", media: "image", active: "active" }, prepare: ({ title, media, active }) => ({ title, media, subtitle: active ? "已显示" : "已隐藏" }) },
});

import { defineField, defineType } from "sanity";

export const contactPage = defineType({
  name: "contactPage",
  title: "联系我们",
  type: "document",
  fields: [
    defineField({ name: "eyebrow", title: "英文小标题", type: "string" }),
    defineField({ name: "title", title: "英文主标题", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "description", title: "英文说明", type: "text", rows: 4 }),
    defineField({ name: "image", title: "联系页图片", type: "imageWithAlt" }),
    defineField({ name: "responsePromise", title: "英文回复承诺", type: "string", initialValue: "We usually reply within one business day." }),
    defineField({ name: "seo", title: "页面 SEO", type: "seo" }),
  ],
  preview: { prepare: () => ({ title: "联系我们" }) },
});

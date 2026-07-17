import { defineArrayMember, defineField, defineType } from "sanity";

export const qualityPage = defineType({
  name: "qualityPage",
  title: "质量控制",
  type: "document",
  fields: [
    defineField({ name: "eyebrow", title: "英文小标题", type: "string" }),
    defineField({ name: "title", title: "英文主标题", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "description", title: "英文说明", type: "text", rows: 4 }),
    defineField({ name: "heroImage", title: "头图", type: "imageWithAlt" }),
    defineField({ name: "checks", title: "检验项目", type: "array", of: [defineArrayMember({ type: "object", fields: [
      defineField({ name: "title", title: "英文项目名称", type: "string", validation: (rule) => rule.required() }),
      defineField({ name: "description", title: "英文说明", type: "text", rows: 3 }),
      defineField({ name: "image", title: "图片", type: "imageWithAlt" }),
    ], preview: { select: { title: "title", subtitle: "description", media: "image" } } })] }),
    defineField({ name: "standards", title: "可验证的标准/合规说明", description: "仅填写公司确实能满足并可提供证明的标准。", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "seo", title: "页面 SEO", type: "seo" }),
  ],
  preview: { prepare: () => ({ title: "质量控制" }) },
});

import { defineArrayMember, defineField, defineType } from "sanity";

export const homePage = defineType({
  name: "homePage",
  title: "首页",
  type: "document",
  groups: [
    { name: "hero", title: "首屏", default: true },
    { name: "sections", title: "页面区块" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({ name: "eyebrow", title: "首屏英文小标题", type: "string", group: "hero", initialValue: "INTERACTIVE EPE ENGINEERING" }),
    defineField({ name: "title", title: "首屏英文主标题", type: "text", rows: 3, group: "hero", initialValue: "Protection shaped around your product", validation: (rule) => rule.required().max(100) }),
    defineField({ name: "heroImage", title: "首屏背景图", type: "imageWithAlt", group: "hero" }),
    defineField({
      name: "sections",
      title: "首页内容区块",
      description: "可调整顺序、隐藏或修改文字；保持现有视觉布局。",
      type: "array",
      group: "sections",
      of: [defineArrayMember({
        type: "object",
        name: "homeSection",
        title: "首页区块",
        fields: [
          defineField({ name: "key", title: "区块类型", type: "string", options: { list: [
            { title: "制造优势", value: "advantages" },
            { title: "产品", value: "products" },
            { title: "制造流程", value: "manufacturing" },
            { title: "行业应用", value: "industries" },
            { title: "质量控制", value: "quality" },
            { title: "询盘行动区", value: "cta" },
          ] }, validation: (rule) => rule.required() }),
          defineField({ name: "eyebrow", title: "英文小标题", type: "string" }),
          defineField({ name: "heading", title: "英文标题", type: "string" }),
          defineField({ name: "description", title: "英文说明", type: "text", rows: 3 }),
          defineField({ name: "image", title: "区块图片", type: "imageWithAlt" }),
          defineField({ name: "hidden", title: "暂时隐藏", type: "boolean", initialValue: false }),
        ],
        preview: { select: { title: "heading", subtitle: "key", media: "image" } },
      })],
    }),
    defineField({ name: "seo", title: "页面 SEO", type: "seo", group: "seo" }),
  ],
  preview: { prepare: () => ({ title: "首页", subtitle: "首屏与内容区块" }) },
});

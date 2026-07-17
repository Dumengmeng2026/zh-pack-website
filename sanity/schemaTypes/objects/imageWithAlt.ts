import { defineField, defineType } from "sanity";

export const imageWithAlt = defineType({
  name: "imageWithAlt",
  title: "图片",
  type: "image",
  options: { hotspot: true },
  fields: [
    defineField({
      name: "alt",
      title: "英文替代文字",
      description: "用于无障碍访问和图片 SEO，请描述图片内容。",
      type: "string",
      validation: (rule) => rule.required().max(160),
    }),
    defineField({
      name: "caption",
      title: "英文图片说明",
      type: "string",
    }),
  ],
});


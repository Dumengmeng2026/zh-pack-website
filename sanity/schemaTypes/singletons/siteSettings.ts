import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "网站全局设置",
  type: "document",
  groups: [
    { name: "company", title: "公司信息", default: true },
    { name: "contact", title: "联系信息" },
    { name: "facts", title: "工厂数据" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({ name: "brandName", title: "英文品牌名", type: "string", group: "company", initialValue: "ZH PACK", validation: (rule) => rule.required() }),
    defineField({ name: "legalName", title: "英文公司全称", type: "string", group: "company", initialValue: "Henan Zhonghuan Packaging Co., Ltd.", validation: (rule) => rule.required() }),
    defineField({ name: "tagline", title: "英文品牌定位", type: "string", group: "company", initialValue: "Professional EPE Foam Packaging Manufacturer" }),
    defineField({ name: "logo", title: "彩色 Logo", type: "imageWithAlt", group: "company" }),
    defineField({ name: "email", title: "联系邮箱", type: "email", group: "contact", initialValue: "sales@zhonghuanpackaging.com", validation: (rule) => rule.required() }),
    defineField({ name: "phone", title: "联系电话", type: "string", group: "contact", initialValue: "+86 19059582665", validation: (rule) => rule.required() }),
    defineField({ name: "whatsapp", title: "WhatsApp 号码", type: "string", group: "contact", initialValue: "+86 19059582665" }),
    defineField({ name: "address", title: "英文工厂地址", type: "text", rows: 3, group: "contact", initialValue: "No. 15 Chezhan Street, Zhandian Town, Wuzhi County, Jiaozuo, Henan Province, P.R. China", validation: (rule) => rule.required() }),
    defineField({ name: "manufacturingSince", title: "制造经验起始年份", type: "number", group: "facts", initialValue: 2010, validation: (rule) => rule.required().integer().min(1900).max(2100) }),
    defineField({ name: "companyFounded", title: "中环成立年份", type: "number", group: "facts", initialValue: 2023, validation: (rule) => rule.integer().min(1900).max(2100) }),
    defineField({ name: "factoryArea", title: "厂房面积（平方米）", type: "number", group: "facts", initialValue: 18323, validation: (rule) => rule.required().positive() }),
    defineField({ name: "employees", title: "员工人数", type: "number", group: "facts", initialValue: 80, validation: (rule) => rule.required().integer().positive() }),
    defineField({ name: "equipment", title: "设备数量", type: "number", group: "facts", initialValue: 12, validation: (rule) => rule.required().integer().positive() }),
    defineField({ name: "dailyCapacity", title: "日产能（吨）", type: "number", group: "facts", initialValue: 50, validation: (rule) => rule.required().positive() }),
    defineField({ name: "defaultSeo", title: "默认 SEO", type: "seo", group: "seo" }),
  ],
  preview: { prepare: () => ({ title: "网站全局设置", subtitle: "公司、联系信息与工厂数据" }) },
});

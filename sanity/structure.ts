import type { StructureResolver } from "sanity/structure";

const singletons = new Set([
  "siteSettings",
  "homePage",
  "aboutPage",
  "manufacturingPage",
  "qualityPage",
  "contactPage",
]);

const singletonItem = (
  S: Parameters<StructureResolver>[0],
  typeName: string,
  title: string,
) =>
  S.listItem()
    .title(title)
    .id(typeName)
    .child(S.document().schemaType(typeName).documentId(typeName));

export const structure: StructureResolver = (S) =>
  S.list()
    .title("ZH PACK 网站内容")
    .items([
      singletonItem(S, "siteSettings", "网站全局设置"),
      S.divider(),
      singletonItem(S, "homePage", "首页"),
      singletonItem(S, "aboutPage", "关于我们"),
      S.documentTypeListItem("product").title("产品"),
      singletonItem(S, "manufacturingPage", "制造能力"),
      S.documentTypeListItem("industry").title("行业应用"),
      singletonItem(S, "qualityPage", "质量控制"),
      singletonItem(S, "contactPage", "联系我们"),
      ...S.documentTypeListItems().filter(
        (item) => !singletons.has(item.getId() ?? "") && !["product", "industry"].includes(item.getId() ?? ""),
      ),
    ]);


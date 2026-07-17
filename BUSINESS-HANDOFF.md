# ZH PACK 独立站 — Business 团队交接说明

## 项目目标

面向欧美市场的 B2B EPE 珍珠棉包装制造企业独立站。网站不是商城，核心路径是：访问 → 建立信任 → 提交询盘。

## 品牌与公司信息

- 品牌：ZH PACK
- 英文公司名：Henan Zhonghuan Packaging Co., Ltd.
- 定位：Professional EPE Foam Packaging Manufacturer
- 主色：#1B8F3A
- 深灰：#222222
- 正式域名：https://www.zhonghuanpackaging.com
- 邮箱：sales@zhonghuanpackaging.com
- 电话 / WhatsApp：+86 19059582665
- 地址：No. 15 Chezhan Street, Zhandian Town, Wuzhi County, Jiaozuo, Henan Province, P.R. China

## 公开工厂数据

- 原厂制造经验：Since 2010
- 中环成立：2023
- 厂房面积：18,323 m²
- 员工：80 人
- 设备：12 台
- 日产能：50 吨 EPE 珍珠棉

## 技术方案

- Next.js 16 / App Router
- TypeScript
- Tailwind CSS 4
- Vercel 部署
- Sanity CMS（正在接入）
- 包管理器：pnpm

## 页面范围

- Home
- About
- Products
- Manufacturing
- Industries
- Quality Control
- Contact
- Sanity Studio：`/studio`

## 当前设计约束

- 首页首屏现有 EPE 包裹电子显示模组的主视觉保持不变。
- 风格：Minimal / Premium / Industrial / Technology。
- 不使用廉价模板风格、复杂动画、中国风或大段文字堆积。
- 缺失的内容图片目前允许使用高质量概念图，后续由厂家真实素材替换。
- 后台应允许修改文案、图片、产品、行业和显示顺序，但不能让客户随意破坏页面布局。

## Sanity 项目信息

- Sanity Project ID：`pn818q0d`
- Dataset：`production`
- 后台计划地址：`https://www.zhonghuanpackaging.com/studio`
- 环境变量示例见 `.env.example`
- 不要将写入 Token、API 密钥或登录凭据提交到代码仓库。

## 当前进度

- 网站页面、响应式、SEO、域名和 Vercel 生产部署已经完成基础版本。
- Sanity 官方依赖和受控内容模型已经加入。
- Sanity 模型包含全局设置、首页、关于、产品、制造、行业、质量和联系页面。
- 前台目前仍使用既有静态内容，避免 CMS 尚未录入时页面变空。
- 下一阶段需要：完成构建验证、配置 Sanity CORS、部署 `/studio`、录入或迁移初始内容，然后逐页切换为 CMS 读取并保留静态回退。

## 安全规则

- 不要上传 `.env.local`、`.vercel`、Token、密码、API Key、`node_modules` 或 `.next`。
- Google Maps Embed Key 只能通过 Vercel 环境变量维护。
- 联系表单中的客户个人数据不存入公开 Sanity Dataset。
- 对外标准、认证和性能数据只能发布可提供证明的内容。

## 团队开始开发

1. 安装 Node.js 与 pnpm。
2. 在项目目录运行 `pnpm install`。
3. 复制 `.env.example` 为 `.env.local`，按团队环境填写。
4. 运行 `pnpm dev`，访问 `http://localhost:3000`。
5. 修改前先运行 `pnpm lint`，交付前运行 `pnpm build`。
6. 团队应使用私有 Git 仓库协作，不要多人反复覆盖同一压缩包。


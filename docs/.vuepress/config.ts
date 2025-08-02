import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  title: "InSUEP",
  description:
    "上海电力大学学生共同编写的信息平台，为新老学生提供校园生活的方方面面的信息指南",

  lang: "zh-CN",

  head: [
    ["link", { rel: "icon", href: "/logo.jpg" }],
    [
      "link",
      {
        rel: "icon",
        href: `/logo.jpg`,
        type: "image/jpg",
        sizes: "192x192",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        href: `/logo.jpg`,
        type: "image/jpg",
        sizes: "192x192",
      },
    ],
    // ["meta", { name: "theme-color", content: "#1325ee" }],
    // [
    //   "link",
    //   {
    //     rel: "apple-touch-icon",
    //     href: `/assets/icon/apple-touch-icon.png`,
    //   },
    // ],
    // [
    //   "meta",
    //   {
    //     name: "apple-mobile-web-app-status-bar-style",
    //     content: "black",
    //   },
    // ],
    //     [
    //       "script",
    //       {},
    //       `\
    // window.difyChatbotConfig = {
    //   token: 'nsFTs8LGewxcPpgf',
    //   baseUrl: 'https://search-ai.cn',
    // }
    // `,
    //     ],
    // [
    //   "script",
    //   {
    //     src: "https://search-ai.cn/embed.min.js",
    //     id: "nsFTs8LGewxcPpgf",
    //     defer: "",
    //   },
    // ],
  ],

  bundler: viteBundler(),

  theme,

  // extendsPage: (page) => {
  //   if (page.filePathRelative) {
  //     page.data.filePathRelative = page.filePathRelative
  //       .replace(/README\.md$/, "index.yml")
  //       .replace(/\.md$/, ".yml");
  //   }
  // },

  shouldPrefetch: false,
  shouldPreload: false,
});

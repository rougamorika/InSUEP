// vuepress.config.js
import { viteBundler } from '@vuepress/bundler-vite'
import { hopeTheme } from "vuepress-theme-hope";

export default {
  title: 'inSUEP',
  description: '一个 VuePress 站点',
  bundler: viteBundler(),
  theme: hopeTheme({
    logo: '/logo.png',
    navbar: [
      '/',
      '/new_md.md', // 添加到导航栏
    ],
    sidebar: "structure",
    plugins: {
      mdEnhance: {
        container: true,
      },
      // search: {
      //   locales: {
      //     '/': {
      //       placeholder: '搜索',
      //     },
      //   },
      // },
    },
    markdown: {
      tabs: true,
      gfm: true,
    },
  }),
};

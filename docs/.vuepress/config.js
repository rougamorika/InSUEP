// docs/.vuepress/config.js (或者 docs/.vuepress/config.ts)

import { viteBundler } from '@vuepress/bundler-vite'
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import { defineUserConfig } from 'vuepress';
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  base: '/', // 部署站点的基础路径, 通常保持默认的 '/' 即可

  lang: 'zh-CN',  // 根据你的文档语言设置
  title: 'InSUEP',
  description: '信息共享，让电专不再电专',

  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),

  theme: hopeTheme({
    navbar: [  // 导航栏配置
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/components/' }, // 指向你的组件文档
      { text: 'GitHub', link: 'https://github.com/EmptyDust/InSUEP' },
    ],
    sidebar: {  // 侧边栏配置
      '/guide/': [
        {
          text: '指南',
          children: [
            '/guide/README.md',
            '/guide/getting-started.md',
            '/guide/configuration.md',
          ],
        },
      ],
      '/components/': 'structure', // 根据目录结构生成侧边栏
    },

    // 额外功能
    editLink: true,
    lastUpdated: true,
    contributors: true,
  }),

  //插件
  plugins: [
     [
        '@vuepress/plugin-search',
        {
          locales: {
            '/': {
              placeholder: 'Search',
            },
            '/zh/': {
              placeholder: '搜索',
            },
          },
        },
      ],
      mdEnhancePlugin({
        gfm: true, 
        container: true, 
        tabs: true
      }),
  ]

});
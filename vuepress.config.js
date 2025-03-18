// vuepress.config.js
import { viteBundler } from '@vuepress/bundler-vite'
import { hopeTheme } from 'vuepress-theme-hope'

export default {
  title: 'inSUEP',
  description: '一个 VuePress 站点',
  bundler: viteBundler(),
  theme: hopeTheme({
    logo: '/logo.png',
    repo: 'https://github.com/EmptyDust/InSUEP', // GitHub 仓库 URL (可选)
    docsDir: 'docs', // 文档目录 (可选，默认为 "docs")
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '新页面',
        link: '/guide/new_md.md',
      },
    ],
    sidebar: 'structure',
    displayFooter: true, // 是否显示页脚
    footer: 'CC BY-NC-ND 4.0 Licensed | Copyright © 2024 inSUEP', // 自定义页脚内容
    copyright: 'Copyright © 2024 inSUEP', // 版权信息

    encrypt: {
      // 加密配置 (可选)
      global: false, // 是否全局加密
    },

    plugins: {
      mdEnhance: {
        container: true, // 启用自定义容器
        // 更多 mdEnhance 插件配置...
      },
      search: {
        locales: {
          '/': {
            placeholder: '搜索',
          },
        },
      },
      blog: {
        // 配置博客插件
        excerptLength: 100, //截取摘要的长度 (可选)
        // 更多博客插件配置...
      },
    },

    markdown: {
      tabs: true,
      gfm: true,
    },

    hotReload: true, // 启用热重载 (可选)
  }),
}

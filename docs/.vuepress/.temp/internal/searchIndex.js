export const SEARCH_INDEX = [
  {
    "title": "功能项目主页",
    "headers": [
      {
        "level": 2,
        "title": "🛠 安装",
        "slug": "🛠-安装",
        "link": "#🛠-安装",
        "children": []
      },
      {
        "level": 2,
        "title": "🚀 使用",
        "slug": "🚀-使用",
        "link": "#🚀-使用",
        "children": []
      },
      {
        "level": 2,
        "title": "官方 QQ 群",
        "slug": "官方-qq-群",
        "link": "#官方-qq-群",
        "children": []
      }
    ],
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "这不是一个首页",
    "headers": [],
    "path": "/test.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "MyButton 组件",
    "headers": [
      {
        "level": 2,
        "title": "示例用法",
        "slug": "示例用法",
        "link": "#示例用法",
        "children": []
      }
    ],
    "path": "/components/Test.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "我的新页面",
    "headers": [
      {
        "level": 2,
        "title": "任务列表",
        "slug": "任务列表",
        "link": "#任务列表",
        "children": []
      },
      {
        "level": 2,
        "title": "自定义容器",
        "slug": "自定义容器",
        "link": "#自定义容器",
        "children": []
      }
    ],
    "path": "/guide/new_md.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Components",
    "headers": [],
    "path": "/components/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Guide",
    "headers": [],
    "path": "/guide/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Category",
    "headers": [],
    "path": "/category/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Tag",
    "headers": [],
    "path": "/tag/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Articles",
    "headers": [],
    "path": "/article/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Star",
    "headers": [],
    "path": "/star/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Timeline",
    "headers": [],
    "path": "/timeline/",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}

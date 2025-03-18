export const SEARCH_INDEX = [
  {
    "title": "我的新页面",
    "headers": [],
    "path": "/new_md.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "首页",
    "headers": [],
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

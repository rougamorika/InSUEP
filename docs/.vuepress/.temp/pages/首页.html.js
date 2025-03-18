import comp from "D:/github/InSUEP/docs/.vuepress/.temp/pages/首页.html.vue"
const data = JSON.parse("{\"path\":\"/%E9%A6%96%E9%A1%B5.html\",\"title\":\"这是一个首页\",\"lang\":\"en-US\",\"frontmatter\":{},\"readingTime\":{\"minutes\":0.08,\"words\":23},\"filePathRelative\":\"首页.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

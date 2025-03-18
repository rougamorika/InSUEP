import comp from "D:/github/InSUEP/docs/.vuepress/.temp/pages/new_md.html.vue"
const data = JSON.parse("{\"path\":\"/new_md.html\",\"title\":\"我的新页面\",\"lang\":\"en-US\",\"frontmatter\":{},\"readingTime\":{\"minutes\":0.21,\"words\":64},\"filePathRelative\":\"new_md.md\"}")
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

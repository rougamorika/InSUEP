import comp from "D:/github/InSUEP/docs/.vuepress/.temp/pages/components/Test.html.vue"
const data = JSON.parse("{\"path\":\"/components/Test.html\",\"title\":\"MyButton 组件\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"readingTime\":{\"minutes\":0.14,\"words\":43},\"filePathRelative\":\"components/Test.md\"}")
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

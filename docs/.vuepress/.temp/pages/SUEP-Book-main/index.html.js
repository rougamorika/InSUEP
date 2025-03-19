import comp from "D:/github/InSUEP/docs/.vuepress/.temp/pages/SUEP-Book-main/index.html.vue"
const data = JSON.parse("{\"path\":\"/SUEP-Book-main/\",\"title\":\"SUEP Book Main\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"SUEP Book Main\",\"article\":false,\"feed\":false,\"sitemap\":false},\"git\":{},\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null,\"excerpt\":\"\"}")
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

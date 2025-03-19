import comp from "D:/github/InSUEP/docs/.vuepress/.temp/pages/SUEP-Book-main/homepage.html.vue"
const data = JSON.parse("{\"path\":\"/SUEP-Book-main/homepage.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"git\":{},\"readingTime\":{\"minutes\":0.82,\"words\":246},\"filePathRelative\":\"SUEP-Book-main/homepage.md\",\"excerpt\":\"<p style=\\\"text-align: center;\\\">\\n     \\n    \\n</p>\\n<p style=\\\"text-align: center;\\\">致所有上海电力大学的学生（曾经、当前、未来）</p>\"}")
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

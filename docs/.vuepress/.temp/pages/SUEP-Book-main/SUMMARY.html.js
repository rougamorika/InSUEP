import comp from "D:/github/InSUEP/docs/.vuepress/.temp/pages/SUEP-Book-main/SUMMARY.html.vue"
const data = JSON.parse("{\"path\":\"/SUEP-Book-main/SUMMARY.html\",\"title\":\"目录\",\"lang\":\"en-US\",\"frontmatter\":{},\"git\":{},\"readingTime\":{\"minutes\":1.69,\"words\":507},\"filePathRelative\":\"SUEP-Book-main/SUMMARY.md\",\"excerpt\":\"\\n<h2>序</h2>\\n<ul>\\n<li><a href=\\\"/SUEP-Book-main/\\\" target=\\\"_blank\\\">写在前面</a></li>\\n<li><a href=\\\"/SUEP-Book-main/Prologue/%E5%BC%80%E5%8F%91%E8%80%85%E6%96%87%E6%A1%A3.html\\\" target=\\\"_blank\\\">开发者须知</a></li>\\n<li><a href=\\\"/SUEP-Book-main/Prologue/%E5%A3%B0%E6%98%8E.html\\\" target=\\\"_blank\\\">声明</a></li>\\n</ul>\"}")
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

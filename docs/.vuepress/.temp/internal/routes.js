export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/components/Test.html", { loader: () => import(/* webpackChunkName: "components_Test.html" */"D:/github/InSUEP/docs/.vuepress/.temp/pages/components/Test.html.js"), meta: {"title":"MyButton 组件"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/github/InSUEP/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/components/", { loader: () => import(/* webpackChunkName: "components_index.html" */"D:/github/InSUEP/docs/.vuepress/.temp/pages/components/index.html.js"), meta: {"title":"Components"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/github/InSUEP/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}

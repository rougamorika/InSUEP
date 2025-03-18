export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/components/Test.html", { loader: () => import(/* webpackChunkName: "components_Test.html" */"D:/github/InSUEP/docs/.vuepress/.temp/pages/components/Test.html.js"), meta: {"title":"MyButton 组件"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/github/InSUEP/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/components/", { loader: () => import(/* webpackChunkName: "components_index.html" */"D:/github/InSUEP/docs/.vuepress/.temp/pages/components/index.html.js"), meta: {"title":"Components"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/github/InSUEP/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
]);

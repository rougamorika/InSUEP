import { Contributors } from "D:/github/InSUEP/node_modules/@vuepress/plugin-git/lib/client/components/Contributors.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", Contributors);
  },
};

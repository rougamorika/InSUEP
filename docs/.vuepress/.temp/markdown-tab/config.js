import { Tabs } from "D:/github/InSUEP/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "D:/github/InSUEP/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("Tabs", Tabs);
  },
};

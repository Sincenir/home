import { defineConfig } from "vitepress";
import { zh } from "./zh";


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Sincenir",
  description: "Sincnier's Homepage",

  locales: {
    root: { label: "简体中文", ...zh },
    en: { label: "English" },
  },

  // themeConfig: {
  //   // https://vitepress.dev/reference/default-theme-config
  //   nav: langNav[currentLang].nav,

  //   sidebar: [
  //     {
  //       text: "Examples",
  //       items: [
  //         { text: "Markdown Examples", link: "/markdown-examples" },
  //         { text: "Runtime API Examples", link: "/api-examples" },
  //       ],
  //     },
  //   ],

  //   socialLinks: [
  //     { icon: "github", link: "https://github.com/vuejs/vitepress" },
  //   ],
  // },
});

import { defineConfig } from "vitepress";
import { zh } from "./zh";
import { shared } from "./shared";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ...shared,
  locales: {
    root: { label: "简体中文", ...zh },
    en: { label: "English" },
  },
});

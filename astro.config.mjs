// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [tailwind()],
  devToolbar: {
    enabled: false,
  },
  build: {
    inlineStylesheets: "always",
  },
});
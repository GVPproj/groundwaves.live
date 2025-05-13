import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sanityIntegration from "@sanity/astro";
import { loadEnv } from "vite";
import netlify from "@astrojs/netlify";

const { PUBLIC_SANITY_STUDIO_PROJECT_ID, PUBLIC_SANITY_STUDIO_DATASET } =
  loadEnv(process.env.NODE_ENV, process.cwd(), "");

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://groundwaves.live",
  output: "static",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sanityIntegration({
      projectId: PUBLIC_SANITY_STUDIO_PROJECT_ID,
      dataset: PUBLIC_SANITY_STUDIO_DATASET,
      useCdn: true,
      studioBasePath: "/admin",
    }),
    react(),
  ],
  adapter: netlify(),
});

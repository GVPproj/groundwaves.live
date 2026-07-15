import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sanityIntegration from "@sanity/astro";
import { loadEnv } from "vite";
import netlify from "@astrojs/netlify";

const { PUBLIC_SANITY_STUDIO_PROJECT_ID, PUBLIC_SANITY_STUDIO_DATASET } =
  loadEnv(process.env.NODE_ENV, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  site: "https://groundwaves.live",
  output: "static",
  integrations: [
    sanityIntegration({
      // Fall back to placeholders so the client can be constructed without
      // real credentials (e.g. local dev without a .env). Fetches are guarded
      // by `safeFetch` in src/lib/sanity.ts and simply return empty data.
      projectId: PUBLIC_SANITY_STUDIO_PROJECT_ID || "placeholder",
      dataset: PUBLIC_SANITY_STUDIO_DATASET || "production",
      useCdn: true,
      studioBasePath: "/admin",
    }),
    react(),
  ],
  adapter: netlify(),
});

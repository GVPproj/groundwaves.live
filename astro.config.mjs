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

  // Dev is exposed over the tailnet via `tailscale serve --https=4323`, which
  // proxies to IPv4 loopback and forwards the ts.net Host header.
  server: { host: "127.0.0.1", port: 4323 },

  vite: {
    server: {
      // Only accept tailnet hostnames — avoids disabling host checks
      // entirely, which would open the dev server to DNS rebinding.
      // strictPort: the tailscale proxy targets 4323, so failing loudly beats
      // silently falling back to another port.
      allowedHosts: [".ts.net"],
      strictPort: true,
    },
  },

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

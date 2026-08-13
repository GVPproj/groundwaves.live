import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";
import { structure } from "./structure";
import { defaultDocumentNode } from "./structure/defaultDocumentNode";

// Astro serves this config through Vite (import.meta.env), but the Sanity CLI
// — `sanity schema extract`, used by `npm run codegen` — loads it via esbuild
// in CJS, where `import.meta` is empty. process.env covers that case.
const env: Record<string, string | undefined> =
  import.meta.env ?? process.env;

export default defineConfig({
  name: "default",
  title: "Groundwaves CMS",
  projectId: env.PUBLIC_SANITY_STUDIO_PROJECT_ID,
  dataset: env.PUBLIC_SANITY_STUDIO_DATASET,
  plugins: [structureTool({ structure, defaultDocumentNode }), visionTool()],
  schema: {
    types: schemaTypes,
  },
});

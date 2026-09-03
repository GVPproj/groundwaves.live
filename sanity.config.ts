import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";
import { structure } from "./structure";
import { defaultDocumentNode } from "./structure/defaultDocumentNode";

// Astro serves this config through Vite (import.meta.env), but the Sanity CLI
// — `sanity schema extract`, used by `pnpm run codegen` — loads it via esbuild
// in CJS, where `import.meta` is empty. process.env covers that case.
const projectId =
  import.meta.env?.PUBLIC_SANITY_STUDIO_PROJECT_ID ??
  process.env.PUBLIC_SANITY_STUDIO_PROJECT_ID;
const dataset =
  import.meta.env?.PUBLIC_SANITY_STUDIO_DATASET ??
  process.env.PUBLIC_SANITY_STUDIO_DATASET;

export default defineConfig({
  name: "default",
  title: "Groundwaves CMS",
  projectId,
  dataset,
  plugins: [structureTool({ structure, defaultDocumentNode }), visionTool()],
  schema: {
    types: schemaTypes,
  },
});

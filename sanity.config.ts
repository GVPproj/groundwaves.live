import "dotenv/config";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
// import { sanityClient } from "sanity:client";
import { schemaTypes } from "./schemaTypes";
import { structure } from "./structure";
import { defaultDocumentNode } from "./structure/defaultDocumentNode";

// const { projectId, dataset } = sanityClient.config();

export default defineConfig({
  name: "default",
  title: "Groundwaves CMS",
  projectId: process.env.PUBLIC_SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.PUBLIC_SANITY_STUDIO_DATASET,
  plugins: [structureTool({ structure, defaultDocumentNode }), visionTool()],
  schema: {
    types: schemaTypes,
  },
});

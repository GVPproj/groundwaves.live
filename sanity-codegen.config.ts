import { SanityCodegenConfig } from "@sanity/codegen";

const config: SanityCodegenConfig = {
  schemaPath: "./sanity.config.ts",
  outputPath: "./src/types/sanity.ts",
  generateTypedQueries: true,
};

export default config;

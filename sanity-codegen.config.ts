import { CodegenConfig } from "@sanity/codegen";

const config: CodegenConfig = {
  schemaPath: "./sanity.config.ts",
  outputPath: "./src/types/sanity.ts",
  generateTypedQueries: true,
};

export default config;

import { defineField, defineType } from "sanity";

export const indexContentType = defineType({
  name: "indexContent",
  title: "Front Page Content",
  type: "document",
  fields: [
    defineField({
      name: "headline",
      type: "string",
    }),
    defineField({
      name: "heroText",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});

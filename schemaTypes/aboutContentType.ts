import { defineField, defineType } from "sanity";

export const aboutContentType = defineType({
  name: "aboutContent",
  title: "About Page Content",
  type: "document",
  fields: [
    defineField({
      name: "aboutText",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});

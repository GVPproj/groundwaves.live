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
    defineField({
      name: "imageGallery",
      title: "Image gallery",
      type: "array",
      of: [{ type: "image" }],
    }),
  ],
});

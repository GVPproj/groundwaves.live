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
    // Deliberately no `alt` field: this gallery is the hero's decorative
    // background crossfade, carrying no information the page doesn't already
    // state in text. These images render alt="" on purpose.
    defineField({
      name: "imageGallery",
      title: "Image gallery",
      type: "array",
      of: [{ type: "image" }],
    }),
  ],
});

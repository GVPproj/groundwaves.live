import { defineField, defineType } from "sanity";
import { DoorsOpenInput } from "./components/DoorsOpenInput";

export const eventType = defineType({
  name: "event",
  title: "Event",
  type: "document",
  groups: [
    { name: "details", title: "Details" },
    { name: "editorial", title: "Editorial" },
  ],
  fields: [
    defineField({
      name: "name",
      type: "string",
      group: ["details", "editorial"],
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "name" },
      validation: (rule) =>
        rule.required().error(`Required to generate a page on the website`),
      hidden: ({ document }) => !document?.name,
      group: "details",
    }),
    defineField({
      name: "eventType",
      type: "string",
      options: {
        list: ["in-person", "virtual"],
        layout: "radio",
      },
      group: "details",
    }),
    defineField({
      name: "venue",
      type: "reference",
      to: [{ type: "venue" }],
      readOnly: ({ value, document }) =>
        !value && document?.eventType === "virtual",
      group: "details",
      hidden: ({ document }) => document?.eventType !== "in-person",
    }),
    defineField({
      name: "date",
      type: "datetime",
      group: "details",
    }),
    defineField({
      name: "endDate",
      type: "datetime",
      group: "details",
    }),
    defineField({
      name: "doorsOpen",
      type: "number",
      description:
        "Number of minutes between doors opening and event start time",
      initialValue: 60,
      group: "details",
      components: {
        input: DoorsOpenInput,
      },
    }),
    defineField({
      name: "headline",
      type: "reference",
      to: [{ type: "artist" }],
      group: "details",
    }),
    defineField({
      name: "image",
      type: "image",
      group: "editorial",
      // Posters carry the lineup, date and pricing, and none of that appears
      // anywhere else on the event page. Without this field every poster
      // renders alt="" and is exposed to screen readers as decorative.
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
          description:
            "Describe the poster for people who can't see it — include any lineup, date or pricing that only appears in the image.",
        }),
      ],
    }),
    defineField({
      name: "eventCopy",
      type: "array",
      of: [{ type: "block" }],
      group: "editorial",
    }),
    defineField({
      name: "tickets",
      type: "url",
      group: "details",
    }),
    defineField({
      name: "youtubeEmbeds",
      description:
        "Add a full URL like this for each one: https://youtu.be/2JrMJE5odOU?si=Ryg76xdySlZVaFJz",
      type: "array",
      of: [{ type: "string" }],
      group: ["editorial"],
    }),
  ],
  preview: {
    select: {
      name: "name",
      venue: "venue.name",
      artist: "headline.name",
      date: "date",
    },
    prepare({ name, venue, artist, date }) {
      const nameFormatted = name || "Untitled event";
      const dateFormatted = date
        ? new Date(date).toLocaleDateString(undefined, {
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
          })
        : "No date";

      return {
        title: artist ? `${nameFormatted} (${artist})` : nameFormatted,
        subtitle: venue ? `${dateFormatted} at ${venue}` : dateFormatted,
      };
    },
  },
});

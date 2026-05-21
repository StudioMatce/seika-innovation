// Singleton: sezione "Seika Innovation" (chi siamo) della homepage.
import { defineField, defineType } from "sanity";

export const chiSiamo = defineType({
  name: "chiSiamo",
  title: "Homepage — Chi siamo",
  type: "document",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "heading", title: "Titolo H2", type: "string" }),
    defineField({
      name: "bodyColumns",
      title: "Body (2 colonne — 1 string per colonna)",
      type: "array",
      of: [{ type: "text", rows: 4 }],
      validation: (Rule) => Rule.length(2),
    }),
    defineField({
      name: "image",
      title: "Immagine",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt text", type: "string" })],
    }),
  ],
  preview: { prepare: () => ({ title: "Homepage — Chi siamo" }) },
});

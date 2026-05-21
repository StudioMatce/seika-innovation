// Singleton: sezione "Metodo Seika" (homepage).
import { defineField, defineType } from "sanity";

export const metodo = defineType({
  name: "metodo",
  title: "Homepage — Metodo",
  type: "document",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "heading", title: "Titolo H2", type: "string" }),
    defineField({ name: "body", title: "Body", type: "text", rows: 3 }),
    defineField({
      name: "steps",
      title: "Step del metodo",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "number", title: "Numero (es. '01')", type: "string" }),
            defineField({ name: "title", title: "Titolo step", type: "string" }),
            defineField({ name: "description", title: "Descrizione", type: "text", rows: 3 }),
            defineField({
              name: "image",
              title: "Immagine",
              type: "image",
              options: { hotspot: true },
              fields: [defineField({ name: "alt", title: "Alt text", type: "string" })],
            }),
          ],
          preview: {
            select: { title: "title", subtitle: "number", media: "image" },
            prepare: ({ title, subtitle, media }) => ({
              title: `${subtitle ?? ""} ${title ?? ""}`.trim(),
              media,
            }),
          },
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Homepage — Metodo" }) },
});

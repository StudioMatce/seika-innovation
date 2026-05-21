// Singleton: sezione "Risultati" (homepage).
import { defineField, defineType } from "sanity";

export const risultatiSection = defineType({
  name: "risultatiSection",
  title: "Homepage — Risultati",
  type: "document",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "heading", title: "Titolo H2", type: "string" }),
    defineField({ name: "body", title: "Body", type: "text", rows: 3 }),
    defineField({
      name: "metrics",
      title: "Cards risultati",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "eyebrow", title: "Eyebrow card", type: "string" }),
            defineField({ name: "value", title: "Valore (es. '−35%')", type: "string" }),
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "description", title: "Descrizione", type: "text", rows: 3 }),
            defineField({
              name: "image",
              title: "Immagine",
              type: "image",
              options: { hotspot: true },
              fields: [defineField({ name: "alt", title: "Alt text", type: "string" })],
            }),
            defineField({
              name: "imageFirstOnDesktop",
              title: "Su desktop: immagine prima del testo?",
              type: "boolean",
              initialValue: false,
            }),
          ],
          preview: { select: { title: "value", subtitle: "label", media: "image" } },
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Homepage — Risultati" }) },
});

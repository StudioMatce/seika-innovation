// Singleton: sezione "Manifesto" (homepage).
// Note: le pill label (human, data, ai, ...) restano HARDCODED come parte del design.
import { defineField, defineType } from "sanity";

export const manifesto = defineType({
  name: "manifesto",
  title: "Homepage — Manifesto",
  type: "document",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "heading", title: "Titolo H2", type: "string" }),
    defineField({ name: "body", title: "Body", type: "text", rows: 4 }),
    defineField({ name: "cta", title: "CTA", type: "ctaObject" }),
    defineField({
      name: "stages",
      title: "3 stage del manifesto",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Titolo (può contenere a-capo: usa \\n)",
              type: "text",
              rows: 2,
            }),
            defineField({ name: "description", title: "Descrizione", type: "text", rows: 3 }),
          ],
          preview: { select: { title: "title", subtitle: "description" } },
        },
      ],
      validation: (Rule) => Rule.length(3),
    }),
  ],
  preview: { prepare: () => ({ title: "Homepage — Manifesto" }) },
});

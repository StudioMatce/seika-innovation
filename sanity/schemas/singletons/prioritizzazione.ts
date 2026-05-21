// Singleton: sezione "Prioritizzazione" (homepage).
import { defineField, defineType } from "sanity";

export const prioritizzazione = defineType({
  name: "prioritizzazione",
  title: "Homepage — Prioritizzazione",
  type: "document",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "heading", title: "Titolo H2", type: "string" }),
    defineField({ name: "body", title: "Body", type: "text", rows: 3 }),
    defineField({
      name: "evaluationCard",
      title: "Card 'Cosa valutiamo'",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Titolo", type: "string" }),
        defineField({ name: "intro", title: "Intro", type: "text", rows: 2 }),
        defineField({
          name: "bullets",
          title: "Lista bullet",
          type: "array",
          of: [{ type: "string" }],
        }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Homepage — Prioritizzazione" }) },
});

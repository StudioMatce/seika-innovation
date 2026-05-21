// Collection: pagine città in /dove-operiamo/[slug] (es. /dove-operiamo/treviso).
// Schema fisso (3 sezioni come Treviso); aggiungere campi opzionali se servono in futuro.
import { defineField, defineType } from "sanity";

export const city = defineType({
  name: "city",
  title: "Città (Dove Operiamo)",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nome città",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug URL",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "heading", title: "Titolo H1", type: "string" }),
        defineField({ name: "body", title: "Body", type: "text", rows: 3 }),
        defineField({ name: "cta", title: "CTA", type: "ctaObject" }),
      ],
    }),
    defineField({
      name: "approccio",
      title: "Approccio (con stats)",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "heading", title: "Titolo H2", type: "string" }),
        defineField({ name: "body", title: "Body", type: "text", rows: 3 }),
        defineField({
          name: "stats",
          title: "Statistiche",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({ name: "label", title: "Label", type: "string" }),
                defineField({ name: "number", title: "Valore (es. '120')", type: "string" }),
                defineField({ name: "title", title: "Titolo", type: "string" }),
                defineField({ name: "description", title: "Descrizione", type: "text", rows: 2 }),
              ],
              preview: { select: { title: "number", subtitle: "title" } },
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "territorio",
      title: "Territorio (con stage)",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "heading", title: "Titolo H2", type: "string" }),
        defineField({ name: "body", title: "Body", type: "text", rows: 3 }),
        defineField({ name: "cta", title: "CTA", type: "ctaObject" }),
        defineField({
          name: "stages",
          title: "Stage (3)",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "title",
                  title: "Titolo (con \\n per a-capo)",
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
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        defineField({ name: "metaTitle", title: "Meta title", type: "string" }),
        defineField({
          name: "metaDescription",
          title: "Meta description",
          type: "text",
          rows: 2,
        }),
      ],
    }),
  ],
  preview: { select: { title: "name", subtitle: "slug.current" } },
});

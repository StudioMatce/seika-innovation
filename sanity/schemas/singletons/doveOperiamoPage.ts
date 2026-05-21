// Singleton: pagina /dove-operiamo (indice). Le città specifiche sono document
// separati nella collection `city`.
import { defineField, defineType } from "sanity";

export const doveOperiamoPage = defineType({
  name: "doveOperiamoPage",
  title: "Pagina Dove Operiamo",
  type: "document",
  fields: [
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
      name: "presenza",
      title: "Presenza sul territorio",
      type: "object",
      fields: [
        defineField({ name: "heading", title: "Titolo", type: "string" }),
        defineField({ name: "body", title: "Body", type: "text", rows: 3 }),
        defineField({ name: "cta", title: "CTA", type: "ctaObject" }),
        defineField({
          name: "image",
          title: "Immagine territorio",
          type: "image",
          options: { hotspot: true },
          fields: [defineField({ name: "alt", title: "Alt text", type: "string" })],
        }),
        defineField({
          name: "cities",
          title: "Lista città",
          type: "array",
          of: [{ type: "string" }],
        }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Pagina Dove Operiamo" }) },
});

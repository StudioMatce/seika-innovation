// Collection: case study mostrati nella sezione CaseStudy della homepage.
// Ordinabili tramite il campo `order` (1, 2, 3, ...).
import { defineField, defineType } from "sanity";

export const caseStudy = defineType({
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Immagine",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt text", type: "string" })],
    }),
    defineField({ name: "tag", title: "Tag/Settore", type: "string" }),
    defineField({ name: "title", title: "Titolo", type: "string" }),
    defineField({ name: "description", title: "Descrizione", type: "text", rows: 3 }),
    defineField({
      name: "percentage",
      title: "Percentuale (es. '-35%')",
      type: "string",
    }),
    defineField({
      name: "fillPercent",
      title: "Riempimento barra (0–100)",
      type: "number",
      validation: (Rule) => Rule.min(0).max(100),
    }),
    defineField({ name: "barLabel", title: "Label sotto la barra", type: "string" }),
    defineField({
      name: "order",
      title: "Ordine di visualizzazione",
      type: "number",
      initialValue: 1,
    }),
  ],
  orderings: [
    {
      title: "Ordine personalizzato",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: { select: { title: "title", subtitle: "tag", media: "image" } },
});

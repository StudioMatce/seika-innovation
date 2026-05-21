// Collection: domande della sezione FAQ. Ordinabili via `order`.
import { defineField, defineType } from "sanity";

export const faqItem = defineType({
  name: "faqItem",
  title: "FAQ",
  type: "document",
  fields: [
    defineField({
      name: "n",
      title: "Numero (es. '01')",
      type: "string",
    }),
    defineField({
      name: "question",
      title: "Domanda",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "answer",
      title: "Risposta",
      type: "text",
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),
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
  preview: { select: { title: "question", subtitle: "n" } },
});

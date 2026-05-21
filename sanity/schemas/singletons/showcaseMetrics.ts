// Singleton: le 3 metriche dello ShowCase (banda super-dark sotto la Hero).
import { defineField, defineType } from "sanity";

export const showcaseMetrics = defineType({
  name: "showcaseMetrics",
  title: "Homepage — ShowCase metriche",
  type: "document",
  fields: [
    defineField({
      name: "metrics",
      title: "Metriche",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "value",
              title: "Valore (es. '35%' o '200 +')",
              type: "string",
            }),
            defineField({ name: "label", title: "Label", type: "text", rows: 2 }),
            defineField({
              name: "fill",
              title: "Riempimento barra (0–100)",
              type: "number",
              validation: (Rule) => Rule.min(0).max(100),
            }),
          ],
          preview: { select: { title: "value", subtitle: "label" } },
        },
      ],
      validation: (Rule) => Rule.length(3),
    }),
  ],
  preview: { prepare: () => ({ title: "Homepage — ShowCase metriche" }) },
});

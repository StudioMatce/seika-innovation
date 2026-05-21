// Singleton: pagina /servizi. Contiene tutti i contenuti specifici di quella pagina
// (hero + cards intro + lista dettagliata dei servizi). Dataset SEPARATO dai servizi
// della home per evitare cross-coupling (scelta dell'utente).
import { defineField, defineType } from "sanity";

export const serviziPage = defineType({
  name: "serviziPage",
  title: "Pagina Servizi",
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
      name: "cards",
      title: "Cards intro",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow sezione", type: "string" }),
        defineField({
          name: "items",
          title: "Cards (3)",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "image",
                  title: "Immagine",
                  type: "image",
                  options: { hotspot: true },
                  fields: [defineField({ name: "alt", title: "Alt text", type: "string" })],
                }),
                defineField({ name: "title", title: "Titolo", type: "string" }),
                defineField({ name: "description", title: "Descrizione", type: "text", rows: 3 }),
                defineField({ name: "href", title: "Link", type: "string" }),
              ],
              preview: { select: { title: "title", subtitle: "description", media: "image" } },
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "lista",
      title: "Lista dettagliata servizi",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "number", title: "Numero (es. '01')", type: "string" }),
            defineField({ name: "title", title: "Titolo", type: "string" }),
            defineField({
              name: "sectors",
              title: "Settori",
              type: "array",
              of: [{ type: "string" }],
            }),
            defineField({ name: "description", title: "Descrizione", type: "text", rows: 4 }),
            defineField({
              name: "bullets",
              title: "Bullet points",
              type: "array",
              of: [{ type: "string" }],
            }),
            defineField({
              name: "slug",
              title: "Slug (per ancora #...)",
              type: "string",
            }),
          ],
          preview: { select: { title: "title", subtitle: "number" } },
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Pagina Servizi" }) },
});

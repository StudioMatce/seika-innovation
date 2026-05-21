// Singleton: sezione Servizi nella homepage (intro + lista dei 3 servizi sintetici).
// NOTA: scelta dell'utente — i Servizi sulla home sono un dataset SEPARATO da quelli
// di /servizi (ServiziLista, ServiziCards) per evitare cross-coupling.
import { defineField, defineType } from "sanity";

export const homepageServizi = defineType({
  name: "homepageServizi",
  title: "Homepage — Servizi",
  type: "document",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "heading", title: "Titolo H2", type: "string" }),
    defineField({ name: "body", title: "Body", type: "text", rows: 3 }),
    defineField({
      name: "services",
      title: "Servizi (3 card)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "Titolo", type: "string" }),
            defineField({ name: "description", title: "Descrizione", type: "text", rows: 3 }),
            defineField({
              name: "href",
              title: "Link 'Scopri di più'",
              type: "string",
            }),
          ],
          preview: { select: { title: "title", subtitle: "description" } },
        },
      ],
      validation: (Rule) => Rule.length(3),
    }),
  ],
  preview: { prepare: () => ({ title: "Homepage — Servizi" }) },
});

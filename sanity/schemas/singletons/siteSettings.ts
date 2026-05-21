// Singleton: configurazione globale del sito (footer, contatti, social, policies).
import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Impostazioni sito",
  type: "document",
  fields: [
    defineField({ name: "companyName", title: "Ragione sociale", type: "string" }),
    defineField({ name: "tagline", title: "Tagline (sotto al nome)", type: "string" }),
    defineField({ name: "phone", title: "Telefono", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "vatNumber", title: "P. IVA", type: "string" }),
    defineField({
      name: "addressLines",
      title: "Indirizzo (1 riga per ogni line)",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "socials",
      title: "Social",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "platform",
              title: "Piattaforma",
              type: "string",
              options: { list: ["linkedin", "instagram", "twitter", "youtube"] },
            }),
            defineField({ name: "url", title: "URL", type: "url" }),
          ],
          preview: { select: { title: "platform", subtitle: "url" } },
        },
      ],
    }),
    defineField({
      name: "policies",
      title: "Policies (footer)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "Etichetta", type: "string" }),
            defineField({ name: "href", title: "URL", type: "string" }),
          ],
          preview: { select: { title: "label", subtitle: "href" } },
        },
      ],
    }),
    defineField({ name: "copyright", title: "Copyright", type: "string" }),
  ],
  preview: { prepare: () => ({ title: "Impostazioni sito" }) },
});

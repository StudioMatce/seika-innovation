// Object type: CTA (testo + href). Riutilizzato in tutti i singleton/page che hanno un bottone.
import { defineField, defineType } from "sanity";

export const ctaObject = defineType({
  name: "ctaObject",
  title: "CTA",
  type: "object",
  fields: [
    defineField({
      name: "text",
      title: "Testo bottone",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "href",
      title: "Link",
      description: "URL assoluto, path interno (es. /dove-operiamo) o ancora (es. #contatti)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
});

// Singleton: sezione CTA finale (homepage). Riutilizzata anche nelle pagine interne via
// proprietà override sui rispettivi singleton (serviziPage / doveOperiamoPage / city).
import { defineField, defineType } from "sanity";

export const ctaFinale = defineType({
  name: "ctaFinale",
  title: "Homepage — CTA finale",
  type: "document",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "heading", title: "Titolo H2", type: "string" }),
    defineField({ name: "body", title: "Body", type: "text", rows: 3 }),
    defineField({ name: "cta", title: "CTA", type: "ctaObject" }),
  ],
  preview: { prepare: () => ({ title: "Homepage — CTA finale" }) },
});

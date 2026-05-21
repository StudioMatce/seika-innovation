// Singleton: contenuti della Hero della homepage.
import { defineField, defineType } from "sanity";

export const homepageHero = defineType({
  name: "homepageHero",
  title: "Homepage — Hero",
  type: "document",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow (label verde sopra al titolo)", type: "string" }),
    defineField({ name: "heading", title: "Titolo H1", type: "string" }),
    defineField({ name: "body", title: "Body", type: "text", rows: 4 }),
    defineField({ name: "cta", title: "CTA", type: "ctaObject" }),
  ],
  preview: { prepare: () => ({ title: "Homepage — Hero" }) },
});

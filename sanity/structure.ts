// Custom Studio structure: forza i singleton a comparire come "1 doc fisso" (no "create new",
// no lista) e raggruppa le collection con la loro lista ordinabile.
import type { StructureResolver } from "sanity/structure";
import { singletonTypes } from "./schemas";

// Mappa nome → label nello Studio sidebar (è meglio non legarsi al campo title del schema
// per poter dare label più friendly all'editor).
const singletonLabels: Record<(typeof singletonTypes)[number], string> = {
  siteSettings: "Impostazioni sito",
  homepageHero: "Homepage — Hero",
  showcaseMetrics: "Homepage — ShowCase metriche",
  homepageServizi: "Homepage — Servizi",
  chiSiamo: "Homepage — Chi siamo",
  metodo: "Homepage — Metodo",
  prioritizzazione: "Homepage — Prioritizzazione",
  risultatiSection: "Homepage — Risultati",
  manifesto: "Homepage — Manifesto",
  ctaFinale: "Homepage — CTA finale",
  serviziPage: "Pagina Servizi",
  doveOperiamoPage: "Pagina Dove Operiamo",
};

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Contenuti")
    .items([
      // Gruppo: impostazioni globali
      S.listItem()
        .title("Impostazioni sito")
        .id("siteSettings")
        .child(S.document().schemaType("siteSettings").documentId("siteSettings")),

      S.divider(),

      // Gruppo: homepage (tutti i singleton homepage*)
      S.listItem()
        .title("Homepage")
        .child(
          S.list()
            .title("Homepage")
            .items(
              (
                [
                  "homepageHero",
                  "showcaseMetrics",
                  "homepageServizi",
                  "chiSiamo",
                  "metodo",
                  "prioritizzazione",
                  "risultatiSection",
                  "manifesto",
                  "ctaFinale",
                ] as const
              ).map((type) =>
                S.listItem()
                  .title(singletonLabels[type])
                  .id(type)
                  .child(S.document().schemaType(type).documentId(type)),
              ),
            ),
        ),

      // Gruppo: pagine interne
      S.listItem()
        .title("Pagine")
        .child(
          S.list()
            .title("Pagine")
            .items([
              S.listItem()
                .title(singletonLabels.serviziPage)
                .id("serviziPage")
                .child(S.document().schemaType("serviziPage").documentId("serviziPage")),
              S.listItem()
                .title(singletonLabels.doveOperiamoPage)
                .id("doveOperiamoPage")
                .child(S.document().schemaType("doveOperiamoPage").documentId("doveOperiamoPage")),
            ]),
        ),

      S.divider(),

      // Collections — liste editabili con orderable
      S.documentTypeListItem("caseStudy").title("Case Study"),
      S.documentTypeListItem("faqItem").title("FAQ"),
      S.documentTypeListItem("city").title("Città (Dove Operiamo)"),
    ]);

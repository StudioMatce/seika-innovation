// Lettura env Sanity. I default ("placeholder" / "production" / api version)
// permettono al build di passare anche senza env settate — utile sia in CI (es. Azure
// SWA dove le env del portal sono runtime, non build-time) sia prima che il cliente
// attivi l'account Sanity. A runtime, se è ancora "placeholder", la pagina /studio
// risponde 404 (vedi src/app/studio/[[...index]]/page.tsx).

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-03-04";

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "placeholder";

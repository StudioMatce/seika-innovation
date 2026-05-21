// Helper per generare URL di immagini Sanity (ridimensionate, croppate, formati moderni).
// Uso: `urlFor(image).width(800).auto('format').url()` nei componenti.

import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";
import { dataset, projectId } from "./env";

const builder = createImageUrlBuilder({ projectId, dataset });

export function urlFor(source: Image) {
  return builder.image(source);
}

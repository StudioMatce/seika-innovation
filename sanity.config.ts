// Sanity Studio config — caricato sia dal CLI `sanity` (es. sanity deploy) sia
// dal route /studio embedded via <NextStudio config={config} />.

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

import { apiVersion, dataset, projectId } from "./sanity/env";
import { schemaTypes, singletonTypes } from "./sanity/schemas";
import { structure } from "./sanity/structure";

// Singleton: bloccare le azioni di duplicate/create dai menu standard Studio.
// Nessuno (editor o noi) deve poter creare/duplicare un secondo doc per gli stessi.
const singletonSet = new Set<string>(singletonTypes);

export default defineConfig({
  name: "default",
  title: "Seika Innovation",
  projectId,
  dataset,
  apiVersion,
  plugins: [structureTool({ structure }), visionTool({ defaultApiVersion: apiVersion })],
  schema: {
    types: schemaTypes,
  },
  document: {
    // Disabilita "Create new" e "Duplicate" per i tipi singleton
    actions: (input, context) =>
      singletonSet.has(context.schemaType)
        ? input.filter(({ action }) => action !== "duplicate" && action !== "delete")
        : input,
    newDocumentOptions: (prev, { creationContext }) =>
      creationContext.type === "global"
        ? prev.filter((item) => !singletonSet.has(item.templateId))
        : prev,
  },
});

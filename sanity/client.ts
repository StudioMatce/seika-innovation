// Client Sanity per fetch dal codice server/client. Usato dai componenti che leggono CMS.
// useCdn=true ottimizza i fetch via edge cache; in dev/preview/draft mode passeremo
// useCdn=false direttamente al fetch.

import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "./env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  perspective: "published",
});

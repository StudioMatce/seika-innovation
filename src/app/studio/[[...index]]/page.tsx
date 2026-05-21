// Route /studio: Sanity Studio embedded.
// La catch-all [[...index]] permette sotto-route dello Studio (es. /studio/desk/...).
// "use client" è obbligatorio: lo Studio usa React context (createContext) che non
// può essere chiamato da un Server Component.

"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export default function StudioPage() {
  return <NextStudio config={config} />;
}

// Route /studio: Sanity Studio embedded.
// Server Component che fa da gate: se NEXT_PUBLIC_SANITY_PROJECT_ID è ancora
// "placeholder" (cioè il cliente non ha attivato l'account), la route ritorna 404
// così in produzione non si vede mai lo Studio con errore di connessione.

import { notFound } from "next/navigation";
import StudioClient from "./StudioClient";

export default function StudioPage() {
  if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID === "placeholder") {
    notFound();
  }
  return <StudioClient />;
}

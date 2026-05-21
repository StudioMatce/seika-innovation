// Wrapper client-only del NextStudio: lo Studio Sanity usa React context internamente
// e va per forza in un Client Component. Separato dal page.tsx così la page può
// restare Server Component e decidere via env se mostrarlo o ritornare 404.

"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export default function StudioClient() {
  return <NextStudio config={config} />;
}

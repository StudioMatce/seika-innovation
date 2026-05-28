// URL canonico del sito — fonte di verità per metadataBase, sitemap, robots, OG.
// Si può sovrascrivere via env (es. in preview) senza toccare il codice.
// IMPORTANTE: nessun trailing slash, così absoluteUrl("/foo") produce ".../foo" pulito.

const FALLBACK_URL = "https://www.seikainnovation.com";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? FALLBACK_URL
).replace(/\/$/, "");

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

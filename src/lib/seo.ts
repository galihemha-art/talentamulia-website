export const SITE_URL = "https://talentamulia.co.id";

/** Absolute canonical URL for a route path, e.g. "/faq" -> "https://talentamulia.co.id/faq" */
export function canonicalUrl(path: string) {
  if (!path || path === "/") return `${SITE_URL}/`;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/** og:url meta entry for a route path */
export function ogUrl(path: string) {
  return { property: "og:url", content: canonicalUrl(path) };
}

/** canonical link entry for a route path */
export function canonicalLink(path: string) {
  return { rel: "canonical", href: canonicalUrl(path) };
}

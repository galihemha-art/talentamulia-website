import type { Artikel } from "@/lib/artikel-data";
import type { AuthorId } from "@/lib/authors";
import { AUTHORS } from "@/lib/authors";

/** Base URL of the headless WordPress CMS. */
export const WP_API_BASE =
  (import.meta.env["VITE_API_URL"] as string | undefined)?.replace(/\/$/, "") ??
  "https://cms.talentamulia.co.id";

const WP_V2 = `${WP_API_BASE}/wp-json/wp/v2`;

export type WordPressRendered = { rendered: string; protected?: boolean };

export type WordPressPost = {
  id: number;
  slug: string;
  date: string;
  modified: string;
  status: string;
  link: string;
  title: WordPressRendered;
  excerpt: WordPressRendered;
  content: WordPressRendered;
  author: number;
  categories: number[];
  featured_media?: number;
};

export type WordPressMedia = {
  id: number;
  source_url?: string;
  alt_text?: string;
  media_details?: { sizes?: Record<string, { source_url?: string }> };
};

export type WordPressCategory = {
  id: number;
  name: string;
  slug: string;
  count: number;
};

/** Article shape used by the UI. Author may be unmapped (WordPress-only author). */
export type ArtikelView = Omit<Artikel, "authorId"> & {
  authorId: AuthorId | null;
  authorName: string;
  /** Featured image URL from WordPress, when available and valid. */
  image: string | null;
  imageAlt: string | null;
  /** true when the item comes from WordPress */
  source: "wordpress" | "local";
};

/** Minimal shape needed by article cards/grids. */
export type ArtikelCardData = Pick<Artikel, "slug" | "kategori" | "title" | "excerpt"> & {
  image?: string | null;
  imageAlt?: string | null;
};

/** Accept only absolute http(s) image URLs. */
export function isValidImageUrl(url: unknown): url is string {
  if (typeof url !== "string" || url.length === 0) return false;
  try {
    const parsed = new URL(url);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

export const FALLBACK_AUTHOR_NAME = "Tim Talenta Mulia";

const HTML_ENTITIES: Record<string, string> = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: " ",
  hellip: "…",
  ndash: "–",
  mdash: "—",
  rsquo: "’",
  lsquo: "‘",
  ldquo: "“",
  rdquo: "”",
};

export function decodeEntities(input: string): string {
  return input
    .replace(/&#(\d+);/g, (_, code: string) => String.fromCharCode(Number(code)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, code: string) => String.fromCharCode(parseInt(code, 16)))
    .replace(/&([a-zA-Z]+);/g, (m, name: string) => HTML_ENTITIES[name] ?? m);
}

/** Strip all HTML tags and decode entities into plain text. */
export function htmlToText(html: string): string {
  return decodeEntities(
    html
      .replace(/<script[\s\S]*?<\/script>/gi, "")
      .replace(/<style[\s\S]*?<\/style>/gi, "")
      .replace(/<[^>]+>/g, " "),
  )
    .replace(/\s+/g, " ")
    .trim();
}

/** Convert WordPress block HTML into an array of plain-text paragraphs. */
export function htmlToParagraphs(html: string): string[] {
  const cleaned = html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "");

  const blocks = cleaned
    .split(/<\/(?:p|h[1-6]|li|blockquote|div)>/i)
    .map((block) => htmlToText(block))
    .filter((text) => text.length > 0);

  if (blocks.length > 0) return blocks;
  const text = htmlToText(cleaned);
  return text ? [text] : [];
}

function toIsoDate(value: string): string {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? value : date.toISOString().slice(0, 10);
}

async function wpFetch<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${WP_V2}${path}`, {
      headers: { Accept: "application/json" },
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) {
      console.error(`WordPress request failed [${res.status}] ${path}: ${await res.text()}`);
      return null;
    }
    return (await res.json()) as T;
  } catch (error) {
    console.error(`WordPress request error ${path}:`, error);
    return null;
  }
}

export async function fetchCategories(): Promise<WordPressCategory[]> {
  const data = await wpFetch<WordPressCategory[]>("/categories?per_page=100");
  return data ?? [];
}

/**
 * Map a WordPress author id to a local AUTHORS entry when a mapping exists.
 * No mapping is configured yet — WordPress authors fall back to a safe label.
 */
const WP_AUTHOR_MAP: Record<number, AuthorId> = {};

export function resolveAuthor(wpAuthorId: number): { id: AuthorId | null; name: string } {
  const mapped = WP_AUTHOR_MAP[wpAuthorId];
  if (mapped) return { id: mapped, name: AUTHORS[mapped].name };
  return { id: null, name: FALLBACK_AUTHOR_NAME };
}

export function pickMediaUrl(media: WordPressMedia | undefined | null): string | null {
  if (!media) return null;
  const large = media.media_details?.sizes?.["large"]?.source_url;
  const full = media.media_details?.sizes?.["full"]?.source_url;
  const candidate = large ?? full ?? media.source_url;
  return isValidImageUrl(candidate) ? candidate : null;
}

/** Fetch media items by id. Returns a map of id -> media. */
export async function fetchMediaByIds(ids: number[]): Promise<Map<number, WordPressMedia>> {
  const unique = [...new Set(ids.filter((id) => Number.isInteger(id) && id > 0))];
  const map = new Map<number, WordPressMedia>();
  if (unique.length === 0) return map;
  const items = await wpFetch<WordPressMedia[]>(
    `/media?include=${unique.join(",")}&per_page=${Math.min(unique.length, 100)}`,
  );
  for (const item of items ?? []) map.set(item.id, item);
  return map;
}

export async function fetchMediaById(id: number): Promise<WordPressMedia | null> {
  if (!Number.isInteger(id) || id <= 0) return null;
  return await wpFetch<WordPressMedia>(`/media/${id}`);
}

export function toArtikelView(
  post: WordPressPost,
  categories: WordPressCategory[],
  media?: WordPressMedia | null,
): ArtikelView {
  const rawCategoryName =
    post.categories
      .map((id) => categories.find((c) => c.id === id)?.name)
      .find((name): name is string => Boolean(name) && name !== "Uncategorized") ??
    categories.find((c) => c.id === post.categories[0])?.name ??
    "Artikel";
  // Use the real WordPress category name as-is (only HTML entities decoded).
  const categoryName = decodeEntities(rawCategoryName);


  const author = resolveAuthor(post.author);
  const paragraphs = htmlToParagraphs(post.content?.rendered ?? "");
  const excerpt = htmlToText(post.excerpt?.rendered ?? "") || paragraphs[0] || "";

  return {
    slug: post.slug,
    kategori: categoryName,
    title: htmlToText(post.title?.rendered ?? ""),
    excerpt,
    paragraphs,
    publishedAt: toIsoDate(post.date),
    updatedAt: toIsoDate(post.modified),
    authorId: author.id,
    authorName: author.name,
    image: pickMediaUrl(media),
    imageAlt: media?.alt_text ? decodeEntities(media.alt_text) : null,
    source: "wordpress",
  };
}

export function localToView(a: Artikel): ArtikelView {
  return { ...a, authorName: AUTHORS[a.authorId].name, image: null, imageAlt: null, source: "local" };
}

/** Published post slugs, newest first. Returns [] when the CMS is unreachable. */
export async function fetchPublishedSlugs(limit = 100): Promise<string[]> {
  const posts = await wpFetch<Pick<WordPressPost, "slug">[]>(
    `/posts?status=publish&per_page=${limit}&orderby=date&order=desc&_fields=slug`,
  );
  return (posts ?? []).map((p) => p.slug).filter((s): s is string => Boolean(s));
}

/** All published posts, newest first. Returns [] when the CMS is unreachable. */
export async function fetchPublishedArticles(limit = 50): Promise<ArtikelView[]> {
  const [posts, categories] = await Promise.all([
    wpFetch<WordPressPost[]>(`/posts?status=publish&per_page=${limit}&orderby=date&order=desc`),
    fetchCategories(),
  ]);
  if (!posts || posts.length === 0) return [];
  const media = await fetchMediaByIds(posts.map((p) => p.featured_media ?? 0));
  return posts.map((p) => toArtikelView(p, categories, media.get(p.featured_media ?? 0)));
}

/** Single published post by slug, or null when missing/unreachable. */
export async function fetchArticleBySlug(slug: string): Promise<ArtikelView | null> {
  const posts = await wpFetch<WordPressPost[]>(
    `/posts?slug=${encodeURIComponent(slug)}&status=publish`,
  );
  const post = posts?.[0];
  if (!post) return null;
  const [categories, media] = await Promise.all([
    fetchCategories(),
    post.featured_media ? fetchMediaById(post.featured_media) : Promise.resolve(null),
  ]);
  return toArtikelView(post, categories, media);
}

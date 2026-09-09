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
  /** Optional custom fields exposed by WordPress/ACF REST. */
  acf?: Record<string, unknown> | null;
  /** Optional registered post meta exposed by WordPress REST. */
  meta?: Record<string, unknown> | null;
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

export type WordPressUser = {
  id: number;
  name?: string;
};

/** Article shape used by the UI. Author may be unmapped (WordPress-only author). */
export type ArticleFact = { value: string; label: string };
export type ArticleProfessionalId = "andiani" | "tri-novia" | "maulidah" | "eka" | "mamluatul";
export type ArticleSource = {
  title: string;
  publisher?: string;
  url: string;
  publicationDate?: string;
};
export type ArticleApproachStep = { title: string; body: string };
export type ArticleServiceId =
  | "consultation"
  | "online"
  | "parenting"
  | "assessment"
  | "talent"
  | "coaching"
  | "leadership"
  | "wellbeing"
  | "healthcare";
export type ArticleBenefit = { title: string; body: string };
export type ArticleCtaConfig = {
  heading: string;
  body: string;
  primaryLabel: string;
  primaryUrl: string;
  secondaryLabel?: string;
  secondaryUrl?: string;
};
export type ArticlePerson = {
  name: string;
  role?: string;
  credentials?: string;
  profileUrl?: string;
};
export type ArticleEnhancementModules = {
  entity: boolean;
  facts: boolean;
  approach: boolean;
  services: boolean;
  whyTalentaMulia: boolean;
  professionals: boolean;
  sources: boolean;
  faq: boolean;
  cta: boolean;
};

/** CMS-ready model for the reusable SEO & Trust Article fields. */
export type ArticleEnhancement = {
  modules: ArticleEnhancementModules;
  entitySummary?: string;
  facts?: ArticleFact[];
  selectedProfessionals?: ArticleProfessionalId[];
  author?: ArticlePerson;
  reviewer?: ArticlePerson;
  scientificSources?: ArticleSource[];
  approachSteps?: ArticleApproachStep[];
  selectedServices?: ArticleServiceId[];
  whyTalentaMulia?: ArticleBenefit[];
  ctaConfig?: ArticleCtaConfig;
  faqs?: { q: string; a: string }[];
};

export type ArtikelView = Omit<Artikel, "authorId"> & {
  authorId: AuthorId | null;
  authorName: string;
  /** Sanitized rich HTML body (WordPress only; null for local articles). */
  contentHtml: string | null;
  /** Featured image URL from WordPress, when available and valid. */
  image: string | null;
  imageAlt: string | null;
  /** true when the item comes from WordPress */
  source: "wordpress" | "local";
  /** Optional editorial fields. Hidden by the article template when unavailable. */
  reviewerName?: string | null;
  enhancement?: ArticleEnhancement;
  references?: ArticleSource[];
  faqs?: { q: string; a: string }[];
};

const DEFAULT_MODULES: ArticleEnhancementModules = {
  entity: true,
  facts: true,
  approach: true,
  services: true,
  whyTalentaMulia: true,
  professionals: true,
  sources: true,
  faq: true,
  cta: true,
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function cleanText(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  const clean = htmlToText(value).trim();
  return clean && !/^(isi data|placeholder|tbd)$/i.test(clean) ? clean : undefined;
}

function safeEditorialUrl(value: unknown, internalOnly = false): string | undefined {
  if (typeof value !== "string") return undefined;
  if (internalOnly && value.startsWith("/")) return value;
  try {
    const url = new URL(value);
    if (url.protocol !== "https:" && url.protocol !== "http:") return undefined;
    return url.toString();
  } catch {
    return undefined;
  }
}

function stringArray<T extends string>(value: unknown, allowed: readonly T[]): T[] | undefined {
  if (!Array.isArray(value)) return undefined;
  const filtered = value.filter((item): item is T => typeof item === "string" && allowed.includes(item as T));
  return filtered.length ? filtered : undefined;
}

const PROFESSIONAL_IDS: ArticleProfessionalId[] = ["andiani", "tri-novia", "maulidah", "eka", "mamluatul"];
const SERVICE_IDS: ArticleServiceId[] = ["consultation", "online", "parenting", "assessment", "talent", "coaching", "leadership", "wellbeing", "healthcare"];

/**
 * Maps optional WordPress custom fields into safe frontend data. Unknown,
 * placeholder, and invalid URL values are ignored instead of rendered.
 */
/** Accepts an object or a JSON string (WP registered meta often stores JSON). */
function asEnhancementRecord(value: unknown): Record<string, unknown> | undefined {
  if (isRecord(value)) return value;
  if (typeof value === "string") {
    const trimmed = value.trim();
    if (!trimmed.startsWith("{")) return undefined;
    try {
      const parsed: unknown = JSON.parse(trimmed);
      return isRecord(parsed) ? parsed : undefined;
    } catch {
      return undefined;
    }
  }
  return undefined;
}

/**
 * Picks the enhancement payload from ACF first, then registered REST post meta.
 */
export function pickArticleEnhancementSource(post: {
  acf?: Record<string, unknown> | null;
  meta?: Record<string, unknown> | null;
}): unknown {
  const acf = isRecord(post.acf) ? post.acf : undefined;
  const fromAcf = acf ? asEnhancementRecord(acf["articleEnhancement"]) : undefined;
  if (fromAcf) return fromAcf;

  const meta = isRecord(post.meta) ? post.meta : undefined;
  const fromMeta = meta ? asEnhancementRecord(meta["articleEnhancement"]) : undefined;
  if (fromMeta) return fromMeta;

  // Legacy shape: flat ACF fields without a wrapper object.
  return acf;
}

export function parseArticleEnhancement(source: unknown): ArticleEnhancement | undefined {
  const record = asEnhancementRecord(source);
  if (!record) return undefined;
  const raw = asEnhancementRecord(record["articleEnhancement"]) ?? record;
  const rawModules = isRecord(raw["modules"]) ? raw["modules"] : {};
  const modules = Object.fromEntries(
    Object.entries(DEFAULT_MODULES).map(([key, fallback]) => [key, typeof rawModules[key] === "boolean" ? rawModules[key] : fallback]),
  ) as ArticleEnhancementModules;

  const sources = Array.isArray(raw["scientificSources"])
    ? raw["scientificSources"].flatMap((item): ArticleSource[] => {
        if (!isRecord(item)) return [];
        const title = cleanText(item["title"]);
        const url = safeEditorialUrl(item["url"]);
        if (!title || !url) return [];
        const publisher = cleanText(item["publisher"]);
        const publicationDate = cleanText(item["publicationDate"]);
        return [{
          title,
          url,
          ...(publisher ? { publisher } : {}),
          ...(publicationDate ? { publicationDate } : {}),
        }];
      })
    : undefined;
  const faqs = Array.isArray(raw["faqs"])
    ? raw["faqs"].flatMap((item): { q: string; a: string }[] => {
        if (!isRecord(item)) return [];
        const q = cleanText(item["q"]);
        const a = cleanText(item["a"]);
        return q && a ? [{ q, a }] : [];
      })
    : undefined;
  const facts = Array.isArray(raw["facts"])
    ? raw["facts"].flatMap((item): ArticleFact[] => {
        if (!isRecord(item)) return [];
        const value = cleanText(item["value"]);
        const label = cleanText(item["label"]);
        return value && label ? [{ value, label }] : [];
      })
    : undefined;
  const approachSteps = Array.isArray(raw["approachSteps"])
    ? raw["approachSteps"].flatMap((item): ArticleApproachStep[] => {
        if (!isRecord(item)) return [];
        const title = cleanText(item["title"]);
        const body = cleanText(item["body"]);
        return title && body ? [{ title, body }] : [];
      })
    : undefined;
  const whyTalentaMulia = Array.isArray(raw["whyTalentaMulia"])
    ? raw["whyTalentaMulia"].flatMap((item): ArticleBenefit[] => {
        if (!isRecord(item)) return [];
        const title = cleanText(item["title"]);
        const body = cleanText(item["body"]);
        return title && body ? [{ title, body }] : [];
      })
    : undefined;
  const rawAuthor = isRecord(raw["author"]) ? raw["author"] : undefined;
  const customAuthorName = rawAuthor ? cleanText(rawAuthor["name"]) : undefined;
  const customAuthorRole = rawAuthor ? cleanText(rawAuthor["role"]) : undefined;
  const customAuthorCredentials = rawAuthor ? cleanText(rawAuthor["credentials"]) : undefined;
  const authorProfileUrl = rawAuthor ? safeEditorialUrl(rawAuthor["profileUrl"], true) : undefined;
  const customAuthor = customAuthorName
    ? {
        name: customAuthorName,
        ...(customAuthorRole ? { role: customAuthorRole } : {}),
        ...(customAuthorCredentials ? { credentials: customAuthorCredentials } : {}),
        ...(authorProfileUrl ? { profileUrl: authorProfileUrl } : {}),
      }
    : undefined;
  const rawCta = isRecord(raw["ctaConfig"]) ? raw["ctaConfig"] : undefined;
  const ctaHeading = rawCta ? cleanText(rawCta["heading"]) : undefined;
  const ctaBody = rawCta ? cleanText(rawCta["body"]) : undefined;
  const ctaPrimaryLabel = rawCta ? cleanText(rawCta["primaryLabel"]) : undefined;
  const ctaPrimaryUrl = rawCta ? safeEditorialUrl(rawCta["primaryUrl"], true) : undefined;
  const ctaSecondaryUrl = rawCta ? safeEditorialUrl(rawCta["secondaryUrl"], true) : undefined;
  const ctaSecondaryLabel = rawCta ? cleanText(rawCta["secondaryLabel"]) : undefined;
  const ctaConfig = ctaHeading && ctaBody && ctaPrimaryLabel && ctaPrimaryUrl
    ? {
        heading: ctaHeading,
        body: ctaBody,
        primaryLabel: ctaPrimaryLabel,
        primaryUrl: ctaPrimaryUrl,
        ...(ctaSecondaryLabel && ctaSecondaryUrl
          ? { secondaryLabel: ctaSecondaryLabel, secondaryUrl: ctaSecondaryUrl }
          : {}),
      }
    : undefined;
  const reviewerName = isRecord(raw["reviewer"]) ? cleanText(raw["reviewer"]["name"]) : undefined;
  const reviewerCredentials = isRecord(raw["reviewer"]) ? cleanText(raw["reviewer"]["credentials"]) : undefined;
  const reviewerRole = isRecord(raw["reviewer"]) ? cleanText(raw["reviewer"]["role"]) : undefined;
  const reviewerProfileUrl = isRecord(raw["reviewer"])
    ? safeEditorialUrl(raw["reviewer"]["profileUrl"], true)
    : undefined;
  const reviewer = reviewerName
    ? {
        name: reviewerName,
        ...(reviewerCredentials ? { credentials: reviewerCredentials } : {}),
        ...(reviewerRole ? { role: reviewerRole } : {}),
        ...(reviewerProfileUrl ? { profileUrl: reviewerProfileUrl } : {}),
      }
    : undefined;

  const entitySummary = cleanText(raw["entitySummary"]);
  const selectedProfessionals = stringArray(raw["selectedProfessionals"], PROFESSIONAL_IDS);
  const selectedServices = stringArray(raw["selectedServices"], SERVICE_IDS);

  return {
    modules,
    ...(entitySummary ? { entitySummary } : {}),
    ...(facts?.length ? { facts } : {}),
    ...(selectedProfessionals ? { selectedProfessionals } : {}),
    ...(selectedServices ? { selectedServices } : {}),
    ...(sources?.length ? { scientificSources: sources } : {}),
    ...(approachSteps?.length ? { approachSteps } : {}),
    ...(whyTalentaMulia?.length ? { whyTalentaMulia } : {}),
    ...(customAuthor ? { author: customAuthor } : {}),
    ...(reviewer ? { reviewer } : {}),
    ...(ctaConfig ? { ctaConfig } : {}),
    ...(faqs?.length ? { faqs } : {}),
  };
}


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

/** Tags kept when sanitizing WordPress article HTML. */
const ALLOWED_TAGS = new Set([
  "p","br","strong","b","em","i","u","h2","h3","h4","ul","ol","li",
  "blockquote","a","figure","figcaption","img","hr","code","pre","table",
  "thead","tbody","tr","th","td","sup","sub",
]);

/**
 * Sanitize CMS HTML: drop script/style/iframe (and other embeds) entirely,
 * keep an allowlist of editorial tags, and strip event handlers and
 * javascript: URLs from the attributes that remain.
 */
export function sanitizeArticleHtml(html: string): string {
  let out = html
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<(script|style|iframe|object|embed|form|input|svg|noscript)[\s\S]*?<\/\1\s*>/gi, "")
    .replace(/<(script|style|iframe|object|embed|form|input|svg|noscript)\b[^>]*\/?>/gi, "");

  out = out.replace(/<\/?([a-zA-Z0-9]+)([^>]*)>/g, (match, rawTag: string, rawAttrs: string) => {
    const tag = rawTag.toLowerCase();
    if (!ALLOWED_TAGS.has(tag)) return "";
    if (match.startsWith("</")) return `</${tag}>`;

    const attrs: string[] = [];
    const allowed =
      tag === "a" ? ["href", "title"] : tag === "img" ? ["src", "alt", "width", "height"] : [];
    for (const name of allowed) {
      const found = new RegExp(`\\b${name}\\s*=\\s*("([^"]*)"|'([^']*)')`, "i").exec(rawAttrs);
      const value = found?.[2] ?? found?.[3];
      if (!value) continue;
      if ((name === "href" || name === "src") && /^\s*(javascript|data|vbscript):/i.test(value)) {
        continue;
      }
      attrs.push(`${name}="${value.replace(/"/g, "&quot;")}"`);
    }
    if (tag === "a") attrs.push('rel="noopener"');
    if (tag === "img") attrs.push('loading="lazy"', 'decoding="async"');
    const selfClosing = tag === "br" || tag === "hr" || tag === "img";
    return `<${tag}${attrs.length ? " " + attrs.join(" ") : ""}${selfClosing ? " /" : ""}>`;
  });

  return out.trim();
}


function toIsoDate(value: string): string {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? value : date.toISOString().slice(0, 10);
}

// In-process cache + circuit breaker so a slow or unreachable CMS can never
// stall server rendering or the production build.
const WP_CACHE = new Map<string, Promise<unknown>>();
let wpFailures = 0;

async function wpRequest<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${WP_V2}${path}`, {
      headers: { Accept: "application/json" },
      signal: AbortSignal.timeout(4000),
    });
    if (!res.ok) {
      wpFailures += 1;
      console.error(`WordPress request failed [${res.status}] ${path}`);
      return null;
    }
    wpFailures = 0;
    return (await res.json()) as T;
  } catch (error) {
    wpFailures += 1;
    console.error(`WordPress request error ${path}:`, error);
    return null;
  }
}

async function wpFetch<T>(path: string): Promise<T | null> {
  if (wpFailures >= 2) return null;
  const cached = WP_CACHE.get(path);
  if (cached) return (await cached) as T | null;
  const pending = wpRequest<T>(path);
  WP_CACHE.set(path, pending);
  const result = await pending;
  if (result === null) WP_CACHE.delete(path);
  return result;
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

function readableWordPressAuthorName(name: string | null | undefined): string | null {
  const value = name?.trim();
  if (!value) return null;
  // WordPress can expose a login-style display name. Keep the neutral editorial
  // fallback instead of presenting an account slug as a person's identity.
  if (/^[a-z0-9]+(?:[-_][a-z0-9]+)+$/.test(value)) return null;
  return value;
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
  wpAuthorName?: string | null,
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
  const enhancement = parseArticleEnhancement(pickArticleEnhancementSource(post));
  const paragraphs = htmlToParagraphs(post.content?.rendered ?? "");
  const excerpt = htmlToText(post.excerpt?.rendered ?? "") || paragraphs[0] || "";

  return {
    slug: post.slug,
    kategori: categoryName,
    title: htmlToText(post.title?.rendered ?? ""),
    excerpt,
    paragraphs,
    contentHtml: sanitizeArticleHtml(post.content?.rendered ?? "") || null,

    publishedAt: toIsoDate(post.date),
    updatedAt: toIsoDate(post.modified),
    authorId: author.id,
    authorName: readableWordPressAuthorName(wpAuthorName) ?? author.name,
    reviewerName: enhancement?.reviewer?.name ?? null,
    ...(enhancement ? { enhancement } : {}),
    ...(enhancement?.scientificSources ? { references: enhancement.scientificSources } : {}),
    ...(enhancement?.faqs ? { faqs: enhancement.faqs } : {}),
    image: pickMediaUrl(media),
    imageAlt: media?.alt_text ? decodeEntities(media.alt_text) : null,
    source: "wordpress",
  };
}

export function localToView(a: Artikel): ArtikelView {
  return {
    ...a,
    authorName: AUTHORS[a.authorId].name,
    contentHtml: null,
    image: null,
    imageAlt: null,
    source: "local",
  };

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
  const [categories, media, wpAuthor] = await Promise.all([
    fetchCategories(),
    post.featured_media ? fetchMediaById(post.featured_media) : Promise.resolve(null),
    wpFetch<WordPressUser>(`/users/${post.author}`),
  ]);
  return toArtikelView(post, categories, media, wpAuthor?.name ?? null);
}

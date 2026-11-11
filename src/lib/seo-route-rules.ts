import { LAYANAN_KORPORAT } from "@/lib/layanan-korporat-data";
import { LAYANAN_INDIVIDU } from "@/lib/layanan-individu-data";
import { PEMERIKSAAN_PSIKOLOGI } from "@/lib/pemeriksaan-psikologi-data";

export const ONLINE_CONSULTATION_PATH = "/konsultasi-psikolog-online";
export const EXCLUDED_ARTICLE_SLUG = "konsultasi-psikolog-online";
export const ARTICLES_PER_PAGE = 24;

export function legacyConsultationTarget(kind: "artikel" | "layanan", slug: string) {
  return slug === "konsultasi-psikolog-online" || (kind === "layanan" && slug === "psikolog-online")
    ? ONLINE_CONSULTATION_PATH
    : null;
}

export type ArticleMergeTable = Record<string, string>;

// Daftar berpasangan: slug artikel lama -> alamat tujuan. Tambah satu baris per artikel gabung.
export const ARTICLE_MERGE_REDIRECTS: ArticleMergeTable = {
  // Tambah satu baris per artikel gabung, contoh:
  // "slug-lama": "/artikel/slug-tujuan",
};

const ARTICLE_PATH_PREFIX = "/artikel/";

function articleSlugFromPath(path: string) {
  return path.startsWith(ARTICLE_PATH_PREFIX) ? path.slice(ARTICLE_PATH_PREFIX.length) : "";
}

// Mengembalikan alamat tujuan, atau null bila slug tidak ada di daftar.
// Redirect berantai dicegah: tujuan tidak boleh berupa slug yang ikut dialihkan.
export function articleMergeTarget(slug: string, table: ArticleMergeTable = ARTICLE_MERGE_REDIRECTS): string | null {
  const target = table[slug];
  if (!target) return null;
  const targetSlug = articleSlugFromPath(target);
  if (!targetSlug || targetSlug === slug) return null;
  if (Object.prototype.hasOwnProperty.call(table, targetSlug)) return null;
  return target;
}

export function articleMergeRedirectProblems(table: ArticleMergeTable = ARTICLE_MERGE_REDIRECTS): string[] {
  const problems: string[] = [];
  for (const [slug, target] of Object.entries(table)) {
    const targetSlug = articleSlugFromPath(target);
    if (!targetSlug) problems.push(`${slug}: tujuan bukan alamat artikel (${target})`);
    else if (targetSlug === slug) problems.push(`${slug}: tujuan mengarah ke dirinya sendiri`);
    else if (Object.prototype.hasOwnProperty.call(table, targetSlug)) problems.push(`${slug}: tujuan ikut dialihkan (${target})`);
  }
  return problems;
}

export function articlePageNumber(value: unknown): number | null {
  if (value === undefined) return 1;
  if (typeof value !== "string" && typeof value !== "number") return null;
  if (!/^[1-9]\d*$/.test(String(value))) return null;
  const page = Number(value);
  return Number.isSafeInteger(page) ? page : null;
}

export function articlePageExists(page: number, totalPages: number) {
  return page >= 1 && page <= Math.max(1, totalPages);
}

const dedicatedServices = ["coaching", "konsultasi-online-offline"];
export const KNOWN_SERVICE_SLUGS = [...new Set([
  ...Object.keys(LAYANAN_KORPORAT),
  ...Object.keys(LAYANAN_INDIVIDU),
  ...Object.keys(PEMERIKSAAN_PSIKOLOGI),
  ...dedicatedServices,
])];

export function serviceIndexState(slug: string): "complete" | "coming-soon" | "missing" {
  if (!KNOWN_SERVICE_SLUGS.includes(slug)) return "missing";
  if (LAYANAN_KORPORAT[slug]?.segeraHadir || LAYANAN_INDIVIDU[slug]?.segeraHadir) return "coming-soon";
  return "complete";
}

export const COMPLETE_SERVICE_SLUGS = KNOWN_SERVICE_SLUGS.filter((slug) => serviceIndexState(slug) === "complete");
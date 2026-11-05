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
import { ARTIKEL, type Artikel } from "@/lib/artikel-data";
import { LAYANAN_KORPORAT } from "@/lib/layanan-korporat-data";
import { LAYANAN_INDIVIDU } from "@/lib/layanan-individu-data";
import { PEMERIKSAAN_PSIKOLOGI } from "@/lib/pemeriksaan-psikologi-data";

export type TopicCluster = {
  id: string;
  label: string;
  description: string;
  /** Article categories that belong to this cluster. */
  kategori: string[];
  /** Service slugs (rendered as /layanan/<slug>) that belong to this cluster. */
  layanan: string[];
  /** Extra pages (absolute paths) that belong to this cluster. */
  halaman?: { title: string; to: string }[];
  /** Article slugs highlighted as featured for this cluster. */
  featured?: string[];
};

export const TOPIC_CLUSTERS: TopicCluster[] = [
  {
    id: "masa-persiapan-pensiun",
    label: "Masa Persiapan Pensiun",
    description: "Kesiapan psikologis, medis, dan rencana hidup menjelang purnabakti.",
    kategori: ["Masa Persiapan Pensiun"],
    layanan: ["kesejahteraan-karyawan", "medical-wellness", "konsultasi-hr"],
    halaman: [{ title: "Program MPP", to: "/program/mpp" }],
    featured: ["post-power-syndrome-gejala-dan-pencegahan"],
  },
  {
    id: "talenta-asesmen",
    label: "Talenta & Asesmen",
    description: "Seleksi, pemetaan potensi, dan keputusan talenta berbasis data.",
    kategori: ["Talenta & Asesmen", "Assessment"],
    layanan: [
      "asesmen-psikologi",
      "assessment-center",
      "pemetaan-talenta",
      "talent-acquisition",
      "executive-search",
      "pemeriksaan-psikologi-industri",
    ],
  },
  {
    id: "kepemimpinan-coaching",
    label: "Kepemimpinan & Coaching",
    description: "Pengembangan pemimpin, tim, dan budaya organisasi.",
    kategori: ["Kepemimpinan", "Coaching"],
    layanan: [
      "pelatihan-kepemimpinan",
      "executive-coaching",
      "team-coaching",
      "konsultasi-organisasi",
    ],
    halaman: [{ title: "Pelatihan & Seminar", to: "/pelatihan" }],
  },
  {
    id: "kesehatan-kesejahteraan",
    label: "Kesehatan & Kesejahteraan",
    description: "Medical wellness, kesehatan eksekutif, dan well-being karyawan.",
    kategori: ["Kesehatan", "Kesejahteraan Karyawan"],
    layanan: ["medical-wellness", "kesejahteraan-karyawan"],
    halaman: [{ title: "Konsultasi Kesehatan", to: "/kesehatan" }],
  },
  {
    id: "psikologi-individu",
    label: "Psikologi Individu & Keluarga",
    description: "Konseling, parenting, dan pendampingan psikologis personal.",
    kategori: ["Psikologi Individu", "Keluarga"],
    layanan: [
      "konseling-psikologis",
      "konseling-pernikahan",
      "parenting-anak",
      "konseling-remaja",
      "hipnoterapi",
      "pemeriksaan-psikologi-klinis",
    ],
    halaman: [{ title: "Layanan Individu", to: "/layanan-individu" }],
  },
];

const SERVICE_TITLES: Record<string, string> = {
  ...Object.fromEntries(Object.values(LAYANAN_KORPORAT).map((s) => [s.slug, s.nama])),
  ...Object.fromEntries(Object.values(LAYANAN_INDIVIDU).map((s) => [s.slug, s.nama])),
  ...Object.fromEntries(Object.values(PEMERIKSAAN_PSIKOLOGI).map((s) => [s.slug, s.nama])),
};

export function serviceTitle(slug: string) {
  return (
    SERVICE_TITLES[slug] ??
    slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ")
  );
}

export function clusterForService(slug: string) {
  return TOPIC_CLUSTERS.find((c) => c.layanan.includes(slug));
}

export function articlesInCluster(cluster?: TopicCluster): Artikel[] {
  if (!cluster) return [];
  return ARTIKEL.filter((a) => cluster.kategori.includes(a.kategori));
}

/** Articles for a service: cluster-first, topped up with latest insights. */
export function relatedArticlesForService(slug: string, limit = 3): Artikel[] {
  const inCluster = articlesInCluster(clusterForService(slug));
  const rest = ARTIKEL.filter((a) => !inCluster.includes(a));
  return [...inCluster, ...rest].slice(0, limit);
}

/** Sibling services inside the same cluster. */
export function relatedServicesForService(slug: string, limit = 3) {
  const cluster = clusterForService(slug);
  if (!cluster) return [];
  return cluster.layanan
    .filter((s) => s !== slug)
    .slice(0, limit)
    .map((s) => ({ title: serviceTitle(s), to: `/layanan/${s}` }));
}

export function latestInsights(limit = 3): Artikel[] {
  return ARTIKEL.slice(0, limit);
}

export function featuredArticles(limit = 2): Artikel[] {
  const featuredSlugs = TOPIC_CLUSTERS.flatMap((c) => c.featured ?? []);
  const featured = ARTIKEL.filter((a) => featuredSlugs.includes(a.slug));
  return (featured.length > 0 ? featured : ARTIKEL).slice(0, limit);
}

export function clusterForArticle(a: Pick<Artikel, "kategori">) {
  return TOPIC_CLUSTERS.find((c) => c.kategori.includes(a.kategori));
}

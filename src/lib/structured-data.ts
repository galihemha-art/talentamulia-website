import { AUTHORS, AUTHOR_LIST, type Author } from "@/lib/authors";
import { canonicalUrl, SITE_URL } from "@/lib/seo";

const LOGO = `${SITE_URL}/favicon.ico`;

const ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "Jl. Raya Gadung No.5, Margomulyo, Wage",
  addressLocality: "Kec. Taman, Sidoarjo",
  addressRegion: "Jawa Timur",
  addressCountry: "ID",
} as const;

/** Organization schema — sitewide publisher identity. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Talenta Mulia",
    alternateName: "Talenta Mulia Consulting",
    url: SITE_URL,
    logo: LOGO,
    email: "info@talentamulia.co.id",
    telephone: "+62 821 3299 0498",
    address: ADDRESS,
    areaServed: "Indonesia",
    description:
      "Pusat konsultasi psikologi, kesehatan, dan kepemimpinan terintegrasi di Sidoarjo, Jawa Timur untuk organisasi, institusi, dan individu.",
    knowsAbout: [
      "Psikologi Industri dan Organisasi",
      "Assessment Center",
      "Executive Coaching",
      "Pengembangan Kepemimpinan",
      "Masa Persiapan Pensiun",
      "Kesehatan Kerja",
    ],
    employee: AUTHOR_LIST.map((a) => ({
      "@type": "Person",
      name: a.name,
      jobTitle: a.jobTitle,
    })),
  };
}

/** MedicalOrganization schema — health & medical wellness services. */
export function medicalOrganizationSchema(path = "/kesehatan") {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "@id": `${SITE_URL}/#medicalorganization`,
    name: "Talenta Mulia — Konsultasi Kesehatan & Medical Wellness",
    url: canonicalUrl(path),
    logo: LOGO,
    email: "info@talentamulia.co.id",
    telephone: "+62 821 3299 0498",
    address: ADDRESS,
    areaServed: "Indonesia",
    medicalSpecialty: ["PublicHealth", "PreventiveMedicine", "Psychiatric"],
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
    description:
      "Layanan konsultasi kesehatan, medical wellness, skrining kesehatan karyawan, dan kepemimpinan medis oleh dokter dan psikolog Talenta Mulia.",
  };
}

/** Person schema for a professional profile. */
export function personSchema(author: Author, path = "/professionals") {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.name,
    jobTitle: author.jobTitle,
    description: author.bio,
    url: canonicalUrl(path),
    worksFor: { "@id": `${SITE_URL}/#organization` },
  };
}

export function peopleSchema(path = "/professionals") {
  return AUTHOR_LIST.map((a) => personSchema(a, path));
}

/** BreadcrumbList schema. Pass items ordered from home to current page. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Beranda", path: "/" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  };
}

/** FAQPage schema. */
export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

/** Article schema for a blog post. */
export function articleSchema(input: {
  title: string;
  description: string;
  path: string;
  /** Local author id; use null (with authorName) for CMS authors without a local profile. */
  authorId: keyof typeof AUTHORS | null;
  /** Fallback author name when authorId is null. */
  authorName?: string;
  publishedAt: string;
  updatedAt: string;
  section?: string;
  wordCount?: number;
  image?: string | null;
}) {
  const author = input.authorId ? AUTHORS[input.authorId] : null;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl(input.path) },
    url: canonicalUrl(input.path),
    ...(input.image ? { image: [input.image] } : {}),
    datePublished: input.publishedAt,
    dateModified: input.updatedAt,
    articleSection: input.section,
    wordCount: input.wordCount,
    inLanguage: "id-ID",
    author: author
      ? { "@type": "Person", name: author.name, jobTitle: author.jobTitle }
      : { "@type": "Organization", name: input.authorName ?? "Talenta Mulia" },

    publisher: {
      "@type": "Organization",
      name: "Talenta Mulia",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: LOGO },
    },
  };
}

/** Helper to build a head() scripts entry. */
export function jsonLd(data: unknown) {
  return { type: "application/ld+json", children: JSON.stringify(data) };
}

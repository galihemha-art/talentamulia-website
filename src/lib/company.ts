/** Official company identity — PT Talenta Mulia Indonesia (brand: Talenta Mulia). */
export const COMPANY = {
  legalName: "PT Talenta Mulia Indonesia",
  brand: "Talenta Mulia",
  streetAddress: "Jl. Gadung No. 05, RT 003 RW 010, Margomulyo, Wage",
  locality: "Kec. Taman",
  region: "Kab. Sidoarjo, Jawa Timur",
  postalCode: "61257",
  fullAddress:
    "Jl. Gadung No. 05, RT 003 RW 010, Margomulyo, Wage, Kec. Taman, Kab. Sidoarjo, Jawa Timur 61257",
  nib: "1410260097435",
  pengesahan:
    "Keputusan Menteri Hukum RI No. AHU-0082883.AH.01.01 Tahun 2026, 14 Oktober 2026",
  kedudukan: "Kabupaten Sidoarjo",
  bidangUsaha: "Konsultasi psikologi, sumber daya manusia, dan pengembangan kepemimpinan",
  email: "info@talentamulia.co.id",
  phoneDisplay: "+62 821 3299 0498",
  phoneTel: "+6282132990498",
} as const;

export const MAPS_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  COMPANY.fullAddress,
)}&output=embed`;

export const MAPS_LINK_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  COMPANY.fullAddress,
)}`;

export const LEGAL_ROWS: { label: string; value: string }[] = [
  { label: "Nama badan hukum", value: COMPANY.legalName },
  { label: "Pengesahan", value: COMPANY.pengesahan },
  { label: "Berkedudukan di", value: COMPANY.kedudukan },
  { label: "NIB", value: COMPANY.nib },
  { label: "NPWP", value: "Tersedia atas permintaan" },
  { label: "Bidang usaha", value: COMPANY.bidangUsaha },
];

export const LEGAL_NOTE =
  "Layanan yang memerlukan izin sektoral tambahan ditawarkan setelah izin tersebut terpenuhi. Dokumen legalitas tersedia atas permintaan.";

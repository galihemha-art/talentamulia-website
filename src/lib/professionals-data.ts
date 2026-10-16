import maulidah from "@/assets/Maulidah_Muflichah.webp";
import andiani from "@/assets/Dr_Andiani.webp";
import eka from "@/assets/Eka_Rachmawaty.webp";
import mamluatul from "@/assets/Mamluatul_Khoiriyah.webp";
import hilda from "@/assets/Hilda_Rosa_Ainiyah.webp";
import type { AuthorId } from "@/lib/authors";

/**
 * Team data. Source of truth: the owner's approved team brief.
 * Items still awaiting confirmation (STR/SILP numbers, unconfirmed titles,
 * roles or periods) are intentionally left out until the owner fills them in.
 */
export type Professional = {
  id: AuthorId;
  photo: string;
  name: string;
  /** Role line; empty string hides it */
  role: string;
  desc: string;
  /** Shown with a "Mitra" label (everyone except the founder) */
  mitra: boolean;
  /** Pills shown under the name; falls back to keahlian */
  tags?: string[];
  pendidikan?: string[];
  /** Professional Timeline */
  timeline: { periode: string; judul: string; detail?: string }[];
  /** Certification */
  sertifikasi: string[];
  /** Books */
  buku: { judul: string; catatan?: string }[];
  /** Speaking Experience */
  speaking: string[];
  /** Areas of Expertise */
  keahlian: string[];
  /** Publications */
  publikasi: string[];
  /** Related service slugs, rendered as /layanan/<slug> */
  layanan: { slug: string; title: string }[];
};

export const TEAM_CONSENT_NOTE =
  "Profil ditampilkan atas persetujuan masing-masing anggota. Nomor izin praktik psikolog tercantum pada profil yang bersangkutan.";

export const PROFESSIONALS: Professional[] = [
  {
    id: "maulidah",
    photo: maulidah,
    name: "Maulidah Muflichah, M.Psi., Psikolog., CHt.",
    role: "Founder · Psikolog · Certified Hypnotherapist",
    mitra: false,
    desc: "Pendiri Biro Psikologi Talenta Mulia (2019) dan PT Talenta Mulia Indonesia (2026). Fokus: psikologi pendidikan dan keluarga, konseling pernikahan, hipnoterapi bersertifikat.",
    tags: [
      "Psikologi Pendidikan",
      "Psikologi Keluarga",
      "Konseling Pernikahan",
      "Hipnoterapi Bersertifikat",
    ],
    pendidikan: ["S1 Psikologi, UIN Sunan Ampel", "S2 Profesi Psikologi, UNAIR"],
    timeline: [
      { periode: "2007–2009", judul: "Psikolog, Pusat Terapan Psikologi Pendidikan UNAIR" },
      { periode: "2009–2019", judul: "Dosen Psikologi, UIN Sunan Ampel" },
      { periode: "2019–sekarang", judul: "Psikolog, Talenta Mulia" },
      {
        periode: "2019–sekarang",
        judul: 'Narasumber "Mozaik", Radio Suara Muslim Surabaya',
      },
      { periode: "2025–sekarang", judul: "Psikolog Sekolah, SD Kreatif Insan Rabbani" },
    ],
    sertifikasi: [
      "Family Therapy (Virginia Satir)",
      "Marital Counselor",
      "Forgiveness Therapy",
      "Certified Hypnotherapist (CHt.)",
      "Member, TEMPA Trainers Guild",
    ],
    buku: [],
    speaking: [],
    keahlian: [],
    publikasi: [],
    layanan: [
      { slug: "konseling-psikologis", title: "Konseling Psikologis" },
      { slug: "konseling-pernikahan", title: "Konseling Pernikahan" },
      { slug: "parenting-anak", title: "Parenting & Anak" },
    ],
  },
  {
    id: "mamluatul",
    photo: mamluatul,
    name: "Mamluatul Khoiriyah, M.Psi., Psikolog",
    role: "Psikolog",
    mitra: true,
    desc: "Berfokus pada kesehatan mental, trauma healing, forgiveness therapy, SEFT, dan parenting.",
    tags: ["Kesehatan Mental", "Trauma Healing", "Forgiveness Therapy", "SEFT", "Parenting"],
    pendidikan: ["S1 Psikologi, UMM", "S2 Profesi Psikologi, UNAIR"],
    timeline: [
      { periode: "2012–2017", judul: "Psikolog, Dinas Kesehatan Kota Surabaya" },
      { periode: "2016–sekarang", judul: "Terapis, Konselor & SEFT Healing Trainer" },
      { periode: "2022–sekarang", judul: "Psikolog, Talenta Mulia" },
    ],
    sertifikasi: [
      "SEFT Total Solution",
      "TOT SEFT for Healing",
      "Forgiveness Therapy",
      "Grapho for Success",
    ],
    buku: [],
    speaking: [],
    keahlian: [],
    publikasi: [],
    layanan: [
      { slug: "trauma-healing", title: "Trauma Healing" },
      { slug: "konseling-remaja", title: "Konseling Remaja" },
      { slug: "parenting-anak", title: "Parenting & Anak" },
    ],
  },
  {
    id: "hilda",
    photo: hilda,
    name: "Hilda Rosa Ainiyah, S.Psi., M.Psi., Psikolog",
    role: "Psikolog Klinis",
    mitra: true,
    desc: "Psikolog klinis dan akademisi berbasis di Malang, lulusan Magister Profesi Psikologi Klinis UNAIR.",
    tags: ["Psikologi Klinis"],
    pendidikan: [
      "S1 Psikologi, UNS (2012–2016)",
      "S2 Profesi Psikologi Klinis, UNAIR (2017–2020)",
    ],
    timeline: [
      { periode: "2018–2019", judul: "Asisten Psikolog, Poliklinik Psikologi RS Airlangga" },
      { periode: "2019–2020", judul: "Konselor, UNAIR" },
      { periode: "2021–2023", judul: "Sekolah Cikal Surabaya" },
      {
        periode: "2023–sekarang",
        judul:
          "Psikolog Klinis (afiliasi UPT-PPA Kota Malang dan ITN Malang) dan Dosen Universitas Negeri Malang",
      },
    ],
    sertifikasi: [],
    buku: [],
    speaking: [],
    keahlian: [],
    publikasi: ["Jurnal Psikostudia (2020)", "National Public Health Journal (2021)"],
    layanan: [
      { slug: "konseling-psikologis", title: "Konseling Psikologis" },
      { slug: "konseling-remaja", title: "Konseling Remaja" },
    ],
  },
  {
    id: "eka",
    photo: eka,
    name: "Eka Rachmawaty, M.M., PCC",
    role: "Konsultan Pengembangan Kepemimpinan & Organisasi · ICF PCC",
    mitra: true,
    desc: "Lebih dari 20 tahun di HR, Organization Development, Leadership Development, dan Executive Coaching. ICF PCC dan ACTC, lebih dari 1.000 jam coaching.",
    tags: ["HR", "Organization Development", "Leadership Development", "Executive Coaching"],
    timeline: [
      { periode: "2010–2016", judul: "Marion Human Capital Centre" },
      { periode: "2017–2023", judul: "PT Akselerasi Indonesia" },
      { periode: "2024–sekarang", judul: "Leadership Coach & Trainer" },
    ],
    sertifikasi: [
      "Professional Certified Coach (PCC) — International Coaching Federation (ICF)",
      "ACTC",
    ],
    buku: [],
    speaking: [],
    keahlian: [],
    publikasi: [],
    layanan: [
      { slug: "executive-coaching", title: "Executive Coaching" },
      { slug: "team-coaching", title: "Team Coaching" },
      { slug: "konsultasi-organisasi", title: "Konsultasi Organisasi" },
    ],
  },
  {
    id: "andiani",
    photo: andiani,
    name: "Dr. dr. Hj. Andiani, M.Kes.",
    role: "",
    mitra: true,
    desc: "Memberi arahan di bidang mutu pelayanan kesehatan, akreditasi, dan tata kelola klinis.",
    tags: ["Mutu Pelayanan Kesehatan", "Akreditasi", "Tata Kelola Klinis"],
    timeline: [
      { periode: "2009–2017", judul: "Kepala Pelayanan Medis, RS Bhayangkara Watukosek" },
      { periode: "2022–sekarang", judul: "Surveyor Akreditasi, LARS dan LAMFI" },
      {
        periode: "2024–2027",
        judul: "Wadir Pelayanan Medis & Keperawatan, RSI Siti Hajar Sidoarjo",
      },
    ],
    sertifikasi: [],
    buku: [
      { judul: "Membangun Kesehatan di Negara Kepulauan" },
      { judul: "Caregiver Kanker dan Penyakit Kronis" },
      { judul: "Bioetika dalam Sistem JKN" },
    ],
    speaking: [],
    keahlian: [],
    publikasi: [],
    layanan: [
      { slug: "medical-wellness", title: "Program Edukasi Kesehatan & Wellness Karyawan" },
      { slug: "konsultasi-organisasi", title: "Konsultasi Organisasi" },
    ],
  },
];

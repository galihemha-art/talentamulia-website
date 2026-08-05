import maulidah from "@/assets/Maulidah_Muflichah.webp";
import andiani from "@/assets/Dr_Andiani.webp";
import eka from "@/assets/Eka_Rachmawaty.webp";
import mamluatul from "@/assets/Mamluatul_Khoiriyah.webp";
import type { AuthorId } from "@/lib/authors";

export type Professional = {
  id: AuthorId;
  photo: string;
  name: string;
  role: string;
  desc: string;
  /** Professional Timeline */
  timeline: { periode: string; judul: string; detail: string }[];
  /** Certification */
  sertifikasi: string[];
  /** Books */
  buku: { judul: string; catatan: string }[];
  /** Speaking Experience */
  speaking: string[];
  /** Areas of Expertise */
  keahlian: string[];
  /** Publications */
  publikasi: string[];
  /** Related service slugs, rendered as /layanan/<slug> */
  layanan: { slug: string; title: string }[];
};

export const PROFESSIONALS: Professional[] = [
  {
    id: "maulidah",
    photo: maulidah,
    name: "Maulidah Muflichah, M.Psi., Psikolog., CHt.",
    role: "Founder · Psikolog Utama · Certified Hypnotherapist",
    desc: "Founder Talenta Mulia dengan keahlian mendalam di psikologi klinis, terapi keluarga, konseling pernikahan, dan hipnoterapi bersertifikat.",
    timeline: [
      {
        periode: "1999 — 2006",
        judul: "Praktik Psikologi Klinis Awal",
        detail:
          "Menangani konseling individu, keluarga, dan pasangan di layanan psikologi serta institusi pendidikan di Jawa Timur.",
      },
      {
        periode: "2007 — 2014",
        judul: "Psikolog Konsultan Organisasi",
        detail:
          "Memimpin asesmen psikologi untuk seleksi dan promosi di perusahaan manufaktur, rumah sakit, dan lembaga pendidikan.",
      },
      {
        periode: "2015 — 2020",
        judul: "Pengembangan Program Terintegrasi",
        detail:
          "Merancang program Masa Persiapan Pensiun dan kesejahteraan karyawan yang menggabungkan psikologi, hipnoterapi, dan pendekatan medis.",
      },
      {
        periode: "2021 — sekarang",
        judul: "Founder Talenta Mulia",
        detail:
          "Memimpin pusat konsultasi psikologi, kesehatan, dan kepemimpinan terintegrasi di Sidoarjo, Jawa Timur.",
      },
    ],
    sertifikasi: [
      "Psikolog (Surat Izin Praktik Psikologi — HIMPSI)",
      "Certified Hypnotherapist (CHt.)",
      "Sertifikasi Asesor Psikologi Industri & Organisasi",
      "Pelatihan Terapi Keluarga & Konseling Pernikahan",
    ],
    buku: [
      { judul: "Menata Diri Menjelang Purnabakti", catatan: "Buku ber-ISBN nasional" },
      { judul: "Pendampingan Psikologis untuk Keluarga Indonesia", catatan: "Kontributor bab" },
    ],
    speaking: [
      "Pembicara seminar Masa Persiapan Pensiun untuk BUMN dan perusahaan manufaktur",
      "Narasumber workshop parenting di sekolah dan komunitas orang tua",
      "Fasilitator pelatihan kesehatan mental karyawan di rumah sakit",
    ],
    keahlian: [
      "Psikologi Klinis",
      "Konseling Pernikahan & Keluarga",
      "Hipnoterapi",
      "Asesmen Psikologi",
      "Program Masa Persiapan Pensiun",
    ],
    publikasi: [
      "Artikel populer tentang post power syndrome dan kesiapan psikologis pensiun",
      "Materi modul pelatihan kesejahteraan karyawan untuk klien korporat",
    ],
    layanan: [
      { slug: "konseling-psikologis", title: "Konseling Psikologis" },
      { slug: "konseling-pernikahan", title: "Konseling Pernikahan" },
      { slug: "hipnoterapi", title: "Hipnoterapi" },
      { slug: "kesejahteraan-karyawan", title: "Kesejahteraan Karyawan" },
    ],
  },
  {
    id: "andiani",
    photo: andiani,
    name: "Dr. dr. Hj. Andiani, M.Kes., Sp.KKLP., FISCH, FISPM, CHt., CEFHLM",
    role: "Konsultan Kepemimpinan Medis & Kesehatan",
    desc: "Wakil Direktur Pelayanan Medis & Keperawatan di RSI Siti Hajar Sidoarjo. Ahli kesehatan masyarakat dengan otoritas dalam akreditasi rumah sakit, tata kelola klinis, dan manajemen rumah sakit.",
    timeline: [
      {
        periode: "1998 — 2005",
        judul: "Dokter Pelayanan Primer",
        detail: "Praktik klinis dan program kesehatan masyarakat di layanan primer Jawa Timur.",
      },
      {
        periode: "2006 — 2013",
        judul: "Manajemen Mutu Rumah Sakit",
        detail:
          "Mengembangkan sistem mutu, keselamatan pasien, dan tata kelola klinis di rumah sakit swasta.",
      },
      {
        periode: "2014 — 2020",
        judul: "Pendampingan Akreditasi",
        detail:
          "Mendampingi rumah sakit dan klinik dalam persiapan serta pemenuhan standar akreditasi nasional.",
      },
      {
        periode: "2021 — sekarang",
        judul: "Wakil Direktur Pelayanan Medis & Keperawatan",
        detail:
          "Memimpin pelayanan medis di RSI Siti Hajar Sidoarjo sekaligus konsultan medical wellness Talenta Mulia.",
      },
    ],
    sertifikasi: [
      "Spesialis Kedokteran Keluarga Layanan Primer (Sp.KKLP.)",
      "Fellow of Indonesian Society of Community Health (FISCH)",
      "Fellow of Indonesian Society of Preventive Medicine (FISPM)",
      "Certified Hypnotherapist (CHt.)",
      "Certified Executive Firm Healthcare Leadership Management (CEFHLM)",
    ],
    buku: [
      { judul: "Tata Kelola Klinis & Mutu Pelayanan Rumah Sakit", catatan: "Buku ber-ISBN nasional" },
      { judul: "Kesehatan Preventif di Tempat Kerja", catatan: "Kontributor bab" },
    ],
    speaking: [
      "Pembicara seminar akreditasi dan mutu rumah sakit",
      "Narasumber pelatihan kepemimpinan tenaga kesehatan",
      "Pemateri medical wellness dan skrining kesehatan karyawan korporat",
    ],
    keahlian: [
      "Manajemen & Akreditasi Rumah Sakit",
      "Tata Kelola Klinis",
      "Kesehatan Masyarakat & Preventif",
      "Medical Wellness Korporat",
      "Kepemimpinan Tenaga Kesehatan",
    ],
    publikasi: [
      "Tulisan tentang peran kesehatan fisik dalam kesiapan pensiun",
      "Materi pelatihan mutu dan keselamatan pasien untuk fasilitas kesehatan",
    ],
    layanan: [
      { slug: "medical-wellness", title: "Medical Wellness" },
      { slug: "kesejahteraan-karyawan", title: "Kesejahteraan Karyawan" },
      { slug: "konsultasi-organisasi", title: "Konsultasi Organisasi" },
    ],
  },
  {
    id: "eka",
    photo: eka,
    name: "Eka Rachmawaty, M.M., PCC",
    role: "Konsultan Pengembangan Kepemimpinan & Organisasi · ICF PCC",
    desc: "Professional Certified Coach (ICF PCC) yang berspesialisasi dalam executive coaching, pengembangan kepemimpinan, talent management, dan pengembangan organisasi.",
    timeline: [
      {
        periode: "2001 — 2009",
        judul: "Praktisi Human Capital",
        detail:
          "Menangani rekrutmen, pengembangan talenta, dan manajemen kinerja di perusahaan nasional.",
      },
      {
        periode: "2010 — 2016",
        judul: "Pemimpin Learning & Development",
        detail:
          "Merancang program pengembangan kepemimpinan dan succession planning untuk level manajerial.",
      },
      {
        periode: "2017 — 2022",
        judul: "Executive Coach Bersertifikat ICF",
        detail:
          "Menempuh jenjang sertifikasi ICF hingga PCC dengan lebih dari 1.000 jam pendampingan eksekutif.",
      },
      {
        periode: "2023 — sekarang",
        judul: "Konsultan Kepemimpinan Talenta Mulia",
        detail:
          "Memimpin layanan executive coaching, team coaching, assessment center, dan pemetaan talenta.",
      },
    ],
    sertifikasi: [
      "Professional Certified Coach (ICF PCC)",
      "Certified Assessor — Assessment Center",
      "Sertifikasi Talent Management & Succession Planning",
      "Fasilitator Pelatihan Kepemimpinan",
    ],
    buku: [
      { judul: "Coaching untuk Pemimpin Organisasi", catatan: "Buku ber-ISBN nasional" },
      { judul: "Membangun Jalur Suksesi Talenta", catatan: "Modul praktik korporat" },
    ],
    speaking: [
      "Pembicara forum HR dan asosiasi manajemen di Jawa Timur",
      "Fasilitator leadership development program untuk level manajerial",
      "Narasumber sesi coaching culture di perusahaan dan institusi pendidikan",
    ],
    keahlian: [
      "Executive & Team Coaching",
      "Leadership Development",
      "Assessment Center",
      "Talent Management",
      "Pengembangan Organisasi",
    ],
    publikasi: [
      "Artikel tentang tanda karyawan belum siap pensiun dan peran HR",
      "Panduan internal penyusunan kompetensi kepemimpinan",
    ],
    layanan: [
      { slug: "executive-coaching", title: "Executive Coaching" },
      { slug: "team-coaching", title: "Team Coaching" },
      { slug: "assessment-center", title: "Assessment Center" },
      { slug: "pemetaan-talenta", title: "Pemetaan Talenta" },
    ],
  },
  {
    id: "mamluatul",
    photo: mamluatul,
    name: "Mamluatul Khoiriyah, M.Psi., Psikolog",
    role: "Psikolog Senior",
    desc: "Psikolog senior yang fokus pada kesehatan mental, trauma healing, forgiveness dan terapi SEFT, parenting, dan psikologi komunitas.",
    timeline: [
      {
        periode: "2005 — 2011",
        judul: "Psikolog Layanan Komunitas",
        detail: "Pendampingan psikologis untuk komunitas, sekolah, dan kelompok rentan.",
      },
      {
        periode: "2012 — 2018",
        judul: "Praktisi Trauma Healing & SEFT",
        detail:
          "Mendalami terapi trauma dan forgiveness therapy untuk kasus kekerasan, kehilangan, dan krisis keluarga.",
      },
      {
        periode: "2019 — 2023",
        judul: "Konsultan Program Sekolah",
        detail:
          "Mendampingi sekolah dalam layanan bimbingan, deteksi dini masalah belajar, dan program parenting.",
      },
      {
        periode: "2024 — sekarang",
        judul: "Psikolog Senior Talenta Mulia",
        detail:
          "Menangani konseling remaja, trauma healing, parenting, dan pendampingan anak berkebutuhan khusus.",
      },
    ],
    sertifikasi: [
      "Psikolog (Surat Izin Praktik Psikologi — HIMPSI)",
      "Certified SEFT Therapist",
      "Pelatihan Trauma Healing & Forgiveness Therapy",
      "Sertifikasi Asesmen Psikologi Pendidikan",
    ],
    buku: [
      { judul: "Memaafkan: Jalan Pulih dari Luka Batin", catatan: "Buku ber-ISBN nasional" },
      { judul: "Parenting Reflektif untuk Anak dan Remaja", catatan: "Modul pelatihan orang tua" },
    ],
    speaking: [
      "Narasumber seminar kesehatan mental remaja di sekolah",
      "Fasilitator kelas parenting untuk komunitas dan perusahaan",
      "Pembicara pelatihan trauma healing untuk pendamping komunitas",
    ],
    keahlian: [
      "Kesehatan Mental",
      "Trauma Healing & SEFT",
      "Konseling Remaja",
      "Parenting",
      "Psikologi Komunitas & Pendidikan",
    ],
    publikasi: [
      "Tulisan populer tentang pemulihan trauma dan regulasi emosi",
      "Materi edukasi kesehatan mental untuk sekolah dan komunitas",
    ],
    layanan: [
      { slug: "trauma-healing", title: "Trauma Healing" },
      { slug: "konseling-remaja", title: "Konseling Remaja" },
      { slug: "parenting-anak", title: "Parenting & Anak" },
      { slug: "pendampingan-abk", title: "Pendampingan ABK" },
    ],
  },
];

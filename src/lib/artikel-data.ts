import type { AuthorId } from "@/lib/authors";

export type Artikel = {
  slug: string;
  kategori: string;
  authorId: AuthorId;
  publishedAt: string;
  updatedAt: string;
  title: string;
  excerpt: string;
  paragraphs: string[];
};

export const ARTIKEL: Artikel[] = [
  {
    slug: "post-power-syndrome-gejala-dan-pencegahan",
    authorId: "maulidah",
    publishedAt: "2025-09-12",
    updatedAt: "2026-06-18",
    kategori: "Masa Persiapan Pensiun",
    title: "Post Power Syndrome: Kenali Gejala dan Cara Mencegahnya Sejak Dini",
    excerpt:
      "Kenali gejala post power syndrome pada karyawan menjelang pensiun dan cara perusahaan mencegahnya sejak dini melalui program persiapan pensiun yang tepat.",
    paragraphs: [
      "Post power syndrome muncul ketika seseorang kehilangan peran, status, dan rutinitas yang selama puluhan tahun menjadi sumber identitasnya. Gejalanya kerap tidak langsung terlihat: mudah tersinggung, menarik diri dari lingkungan sosial, sering membanggakan masa lalu, kehilangan motivasi, hingga keluhan fisik yang tidak jelas penyebabnya.",
      "Pada karyawan yang mendekati masa purnabakti, tanda-tanda awal biasanya sudah tampak satu hingga dua tahun sebelum pensiun. Semakin melekat identitas seseorang pada jabatannya, semakin besar risiko guncangan psikologis saat masa itu tiba.",
      "Pencegahan paling efektif dilakukan lebih awal, bukan di bulan-bulan terakhir. Perusahaan dapat membuka ruang percakapan tentang masa pensiun, memberikan pendampingan psikologis, memfasilitasi pemeriksaan kesehatan, serta membantu karyawan menyusun rencana aktivitas bermakna setelah purnabakti.",
      "Program Masa Persiapan Pensiun (MPP) Talenta Mulia menggabungkan pendekatan psikologi, hipnoterapi/SEFT, dan keahlian medis agar peserta memasuki babak baru dengan pikiran yang tenang, tubuh yang terjaga, dan rencana hidup yang jelas.",
    ],
  },
  {
    slug: "peran-kesehatan-fisik-dalam-kesiapan-pensiun",
    authorId: "andiani",
    publishedAt: "2025-10-08",
    updatedAt: "2026-05-22",
    kategori: "Masa Persiapan Pensiun",
    title:
      "Peran Kesehatan Fisik dalam Kesiapan Pensiun: Mengapa Program Pensiun Perlu Melibatkan Dokter",
    excerpt:
      "Kesiapan pensiun bukan hanya urusan psikologis. Tanpa keterlibatan tenaga medis, rencana pascapensiun mudah berantakan oleh kondisi kesehatan yang tak terpantau.",
    paragraphs: [
      "Banyak program persiapan pensiun berhenti pada aspek mental dan keuangan. Padahal, kualitas hidup setelah purnabakti sangat ditentukan oleh kondisi fisik: penyakit degeneratif yang tidak terdeteksi dapat mengubah seluruh rencana yang sudah disusun rapi.",
      "Keterlibatan dokter sejak awal memungkinkan peserta memahami profil risiko kesehatannya, mendapatkan skrining yang tepat, dan menyusun kebiasaan baru yang realistis untuk dijalani setelah rutinitas kerja berakhir.",
      "Di Talenta Mulia, pilar medis berjalan berdampingan dengan pilar psikologi dan hipnoterapi/SEFT sehingga kesiapan peserta terbentuk secara utuh — pikiran tenang, tubuh terjaga, dan rencana hidup yang masuk akal.",
    ],
  },
  {
    slug: "5-tanda-karyawan-belum-siap-pensiun",
    authorId: "eka",
    publishedAt: "2025-11-19",
    updatedAt: "2026-04-30",
    kategori: "Masa Persiapan Pensiun",
    title: "5 Tanda Karyawan Belum Siap Menghadapi Masa Pensiun (dan Peran HR di Dalamnya)",
    excerpt:
      "Menghindari pembicaraan soal pensiun, identitas yang melekat pada jabatan, hingga keluhan kesehatan berulang — kenali tandanya dan langkah yang bisa diambil HR.",
    paragraphs: [
      "Karyawan senior yang belum siap pensiun biasanya menunjukkan pola yang mudah dikenali: menghindari pembicaraan tentang masa purnabakti, mengaitkan identitas diri sepenuhnya pada jabatan, menurunnya motivasi kerja, kecemasan soal keuangan, serta keluhan kesehatan yang makin sering muncul.",
      "Tanda-tanda ini bukan masalah individu semata. Tanpa penanganan, dampaknya terasa pada produktivitas unit, kualitas transfer pengetahuan, dan suasana kerja tim.",
      "Peran HR adalah membuka ruang percakapan lebih awal — idealnya satu hingga tiga tahun sebelum pensiun — dan menyediakan program terstruktur yang mencakup pendampingan psikologis, pemeriksaan kesehatan, serta perencanaan aktivitas bermakna pascapensiun.",
    ],
  },
  {
    slug: "kenapa-perusahaan-jawa-timur-perlu-mpp",
    authorId: "maulidah",
    publishedAt: "2026-01-14",
    updatedAt: "2026-07-02",
    kategori: "Masa Persiapan Pensiun",
    title: "Kenapa Perusahaan di Jawa Timur Perlu Program Masa Persiapan Pensiun (MPP)?",
    excerpt:
      "Gelombang pensiun karyawan senior di Surabaya, Sidoarjo, dan sekitarnya membuat MPP bergeser dari pelengkap menjadi kebutuhan strategis perusahaan.",
    paragraphs: [
      "Kawasan industri Surabaya, Sidoarjo, Gresik, dan Pasuruan menampung banyak perusahaan yang tumbuh sejak dekade 1990-an. Konsekuensinya, dalam beberapa tahun ke depan sejumlah besar karyawan senior akan memasuki masa purnabakti secara bersamaan.",
      "Tanpa persiapan, gelombang ini berisiko menimbulkan kehilangan pengetahuan kunci, penurunan moral tim, serta transisi yang berat bagi karyawan itu sendiri.",
      "Program MPP menjadikan proses ini terkelola: perusahaan memenuhi tanggung jawabnya terhadap karyawan purnabakti, sementara karyawan memasuki babak baru dengan kesiapan mental, kesehatan, dan rencana hidup yang jelas.",
    ],
  },
];

/** Estimated reading time in minutes (200 wpm), min 1. */
export function readingTime(a: Artikel): number {
  const words = a.paragraphs.join(" ").trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export function wordCount(a: Artikel): number {
  return a.paragraphs.join(" ").trim().split(/\s+/).length;
}

export function formatTanggal(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

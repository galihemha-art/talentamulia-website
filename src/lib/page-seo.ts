/**
 * Central H1 + metadata per public page. Route head() functions pass through
 * withPageSeo() so this file is the single source of truth for title,
 * description and social text; templates read h1 via usePageH1().
 */
import { useRouterState } from "@tanstack/react-router";

export type PageSeo = { h1: string; title: string; description: string };

export const PAGE_SEO: Record<string, PageSeo> = {
  "/konsultasi-psikolog-online": {
    h1: "Konsultasi Psikolog Online dengan Psikolog Profesional",
    title: "Konsultasi Psikolog Online yang Aman & Nyaman | Talenta Mulia",
    description: "Konsultasi psikolog online lewat video call dari rumah. Ceritakan kebutuhan Anda, pilih jadwal, dan dapatkan pendampingan profesional. Jadwalkan sekarang.",
  },
  "/konseling-burnout": {
    h1: "Konseling Burnout untuk Mengatasi Kelelahan Mental dan Tekanan Kerja",
    title: "Konseling Burnout & Kelelahan Kerja | Talenta Mulia",
    description: "Lelah, sinis, dan kehilangan semangat kerja? Konseling burnout membantu mengenali pemicunya dan menyusun langkah pemulihan. Konsultasikan dengan psikolog.",
  },
  "/konseling-pranikah": {
    h1: "Konseling Pranikah untuk Mempersiapkan Pernikahan yang Sehat",
    title: "Konseling Pranikah dengan Psikolog | Talenta Mulia",
    description: "Konseling pranikah membantu calon pasangan menyelaraskan harapan, komunikasi, keuangan, dan peran sebelum menikah. Jadwalkan sesi berdua bersama psikolog.",
  },
  "/konseling-keluarga": {
    h1: "Konseling Keluarga untuk Memperbaiki Komunikasi dan Hubungan di Rumah",
    title: "Konseling Keluarga dengan Psikolog | Talenta Mulia",
    description: "Konflik orang tua dan anak atau komunikasi yang buntu? Konseling keluarga membantu setiap anggota didengar dan menemukan cara baru. Hubungi Talenta Mulia.",
  },
  "/psikolog-anak": {
    h1: "Psikolog Anak di Sidoarjo untuk Tumbuh Kembang, Emosi, dan Perilaku",
    title: "Psikolog Anak di Sidoarjo & Surabaya | Talenta Mulia",
    description: "Psikolog anak membantu orang tua memahami emosi, perilaku, dan tumbuh kembang anak melalui observasi dan konsultasi. Jadwalkan konsultasi di Sidoarjo.",
  },
  "/tes-minat-bakat": {
    h1: "Tes Minat Bakat untuk Memilih Jurusan dan Arah Karier",
    title: "Tes Minat Bakat untuk Pelajar & Mahasiswa | Talenta Mulia",
    description: "Tes minat bakat membantu pelajar dan mahasiswa mengenali potensi, minat, dan gaya belajar sebelum memilih jurusan atau karier. Daftarkan tes sekarang.",
  },
  "/risway": {
    h1: "Aplikasi Absensi GPS dan Manajemen Karyawan Lapangan RISWAY",
    title: "RISWAY: Aplikasi Absensi & Workforce Management",
    description: "RISWAY membantu perusahaan outsourcing, security, dan cleaning service mengelola absensi GPS, patroli, pengajuan, dan slip gaji digital. Jadwalkan demo.",
  },
  "/program/mpp": {
    h1: "Program Masa Persiapan Pensiun (MPP) untuk Karyawan Perusahaan",
    title: "Program Masa Persiapan Pensiun (MPP) | Talenta Mulia",
    description: "Program MPP membantu karyawan menyiapkan mental, keuangan, dan rencana hidup menjelang pensiun. Diskusikan program untuk perusahaan Anda dengan konsultan.",
  },

  "/layanan/konsultasi-hr": {
    h1: "Konsultan HR untuk Pengembangan SDM dan Organisasi Perusahaan",
    title: "Konsultan HR untuk Perusahaan di Jawa Timur | Talenta Mulia",
    description: "Konsultan HR membantu perusahaan menata kebijakan SDM, struktur jabatan, sistem kinerja, dan pengembangan karyawan. Konsultasikan kebutuhan perusahaan Anda.",
  },
  "/layanan/konsultasi-organisasi": {
    h1: "Konsultasi Pengembangan Organisasi untuk Perubahan yang Terarah",
    title: "Konsultasi Pengembangan Organisasi | Talenta Mulia",
    description: "Konsultasi organisasi membantu manajemen memetakan masalah, menata struktur, budaya kerja, dan proses perubahan. Diskusikan solusi organisasi bersama kami.",
  },
  "/layanan/asesmen-psikologi": {
    h1: "Asesmen Psikologi Karyawan untuk Rekrutmen dan Promosi",
    title: "Asesmen Psikologi Karyawan & Psikotes | Talenta Mulia",
    description: "Asesmen psikologi membantu perusahaan menilai kemampuan, kepribadian, dan kesesuaian karyawan untuk rekrutmen, promosi, dan penempatan. Minta proposal.",
  },
  "/layanan/assessment-center": {
    h1: "Assessment Center untuk Seleksi dan Pengembangan Talenta Perusahaan",
    title: "Assessment Center untuk Seleksi & Promosi | Talenta Mulia",
    description: "Assessment center menilai kompetensi kandidat lewat simulasi, diskusi kelompok, dan wawancara oleh asesor. Cocok untuk promosi manajerial. Hubungi konsultan.",
  },
  "/layanan/pemetaan-talenta": {
    h1: "Talent Mapping untuk Mengenali Potensi dan Kompetensi Karyawan",
    title: "Talent Mapping & Pemetaan Talenta SDM | Talenta Mulia",
    description: "Talent mapping memetakan potensi dan kinerja karyawan agar perusahaan tepat menyusun suksesi, promosi, dan program pengembangan. Diskusikan kebutuhan Anda.",
  },
  "/layanan/executive-coaching": {
    h1: "Executive Coaching untuk Mengembangkan Kepemimpinan Eksekutif",
    title: "Executive Coaching untuk Pemimpin & Direksi | Talenta Mulia",
    description: "Executive coaching satu-satu membantu direksi dan manajer senior mempertajam keputusan, komunikasi, dan gaya kepemimpinan. Konsultasikan kebutuhan Anda.",
  },
  "/layanan/team-coaching": {
    h1: "Team Coaching untuk Meningkatkan Kolaborasi dan Kinerja Tim",
    title: "Team Coaching untuk Tim Kerja Perusahaan | Talenta Mulia",
    description: "Team coaching membantu tim menyelaraskan tujuan, memperbaiki komunikasi, dan menyelesaikan hambatan kerja sama secara terfasilitasi. Diskusikan program tim.",
  },
  "/layanan/kesejahteraan-karyawan": {
    h1: "Program Kesejahteraan Karyawan (Employee Wellbeing) untuk Perusahaan",
    title: "Program Kesejahteraan Karyawan & EAP | Talenta Mulia",
    description: "Program kesejahteraan karyawan membantu perusahaan mengelola stres kerja, menyediakan konseling, dan membangun budaya kerja sehat. Minta proposal program.",
  },
  "/layanan/medical-wellness": {
    h1: "Edukasi Kesehatan dan Wellness Karyawan untuk Gaya Hidup Sehat",
    title: "Edukasi Kesehatan & Wellness Karyawan | Talenta Mulia",
    description: "Program edukasi wellness memberi karyawan pengetahuan praktis tentang pola hidup sehat, manajemen energi, dan kebiasaan kerja seimbang. Diskusikan programnya.",
  },
  "/layanan/pelatihan-kepemimpinan": {
    h1: "Pelatihan Kepemimpinan untuk Manajer dan Calon Pemimpin",
    title: "Pelatihan Kepemimpinan untuk Perusahaan | Talenta Mulia",
    description: "Pelatihan kepemimpinan membekali manajer dan calon pemimpin dengan keterampilan memimpin tim, mengambil keputusan, dan memberi umpan balik. Minta proposal.",
  },
  "/layanan/pendampingan-sekolah-perusahaan": {
    h1: "Pendampingan Psikologi untuk Sekolah dan Perusahaan",
    title: "Pendampingan Psikologi Sekolah & Perusahaan | Talenta Mulia",
    description: "Pendampingan berkelanjutan untuk sekolah dan perusahaan: konsultasi guru dan HR, program psikoedukasi, dan dukungan siswa atau karyawan. Hubungi konsultan.",
  },

  "/layanan/konseling-psikologis": {
    h1: "Layanan Konseling Psikologis untuk Dewasa dengan Psikolog Profesional",
    title: "Layanan Konseling Psikologis Dewasa | Talenta Mulia",
    description: "Konseling psikologis membantu Anda memahami masalah emosi, relasi, dan pekerjaan bersama psikolog dalam suasana aman dan tidak menghakimi. Jadwalkan sesi.",
  },
  "/layanan/konseling-pernikahan": {
    h1: "Konseling Pernikahan untuk Memperbaiki Komunikasi Suami Istri",
    title: "Konseling Pernikahan & Pasangan | Talenta Mulia",
    description: "Konseling pernikahan membantu suami istri mengurai konflik, memulihkan kepercayaan, dan membangun komunikasi yang sehat bersama psikolog. Jadwalkan konsultasi.",
  },
  "/layanan/parenting-anak": {
    h1: "Konsultasi Parenting untuk Orang Tua dalam Mendampingi Anak",
    title: "Konsultasi Parenting & Pola Asuh Anak | Talenta Mulia",
    description: "Konsultasi parenting membantu orang tua memahami kebutuhan anak, menetapkan aturan yang konsisten, dan memperkuat ikatan keluarga. Konsultasikan kebutuhan Anda.",
  },
  "/layanan/konseling-remaja": {
    h1: "Konseling Remaja untuk Masalah Emosi, Sekolah, dan Pergaulan",
    title: "Konseling Remaja dengan Psikolog | Talenta Mulia",
    description: "Konseling remaja memberi ruang aman bagi remaja membicarakan emosi, tekanan sekolah, pergaulan, dan identitas diri bersama psikolog. Jadwalkan konsultasi.",
  },
  "/layanan/trauma-healing": {
    h1: "Pendampingan Psikologis untuk Pemulihan setelah Pengalaman Traumatis",
    title: "Pendampingan Pemulihan Trauma | Talenta Mulia",
    description: "Pendampingan pemulihan trauma membantu Anda memahami reaksi setelah peristiwa berat dan membangun rasa aman secara bertahap bersama psikolog. Hubungi kami.",
  },
  "/layanan/stres-kecemasan": {
    h1: "Konseling Stres dan Kecemasan untuk Hidup yang Lebih Tenang",
    title: "Konseling Stres & Kecemasan dengan Psikolog | Talenta Mulia",
    description: "Sering cemas, sulit tidur, atau mudah tegang? Konseling stres dan kecemasan membantu mengenali pemicu dan melatih cara mengelolanya. Jadwalkan konsultasi.",
  },
  "/layanan/dukungan-depresi": {
    h1: "Dukungan Psikologis saat Suasana Hati Terus Menurun",
    title: "Dukungan Psikologis untuk Suasana Hati Menurun | Talenta Mulia",
    description: "Kehilangan minat dan merasa sedih berkepanjangan? Dukungan psikologis membantu Anda dipahami dan menemukan langkah pemulihan. Jadwalkan konsultasi dengan kami.",
  },
  "/layanan/pendampingan-abk": {
    h1: "Pendampingan Anak Berkebutuhan Khusus (ABK) dan Orang Tua",
    title: "Pendampingan Anak Berkebutuhan Khusus (ABK) | Talenta Mulia",
    description: "Pendampingan ABK membantu orang tua memahami kebutuhan anak, menyusun strategi di rumah, dan bekerja sama dengan sekolah. Konsultasikan kebutuhan anak Anda.",
  },

  "/layanan/pemeriksaan-psikologi-industri": {
    h1: "Psikotes Kerja dan Pemeriksaan Psikologi Industri untuk Perusahaan",
    title: "Psikotes Kerja & Pemeriksaan Psikologi Industri | Talenta Mulia",
    description: "Pemeriksaan psikologi industri untuk rekrutmen, promosi, dan penempatan: psikotes, wawancara, dan laporan yang mudah dipakai HR. Minta proposal perusahaan.",
  },
  "/layanan/pemeriksaan-psikologi-klinis": {
    h1: "Pemeriksaan Psikologi Klinis untuk Memahami Kondisi Psikologis",
    title: "Pemeriksaan Psikologi Klinis Dewasa & Remaja | Talenta Mulia",
    description: "Pemeriksaan psikologi klinis melalui wawancara, observasi, dan tes terstandar untuk memahami kondisi psikologis dan rekomendasi lanjutan. Jadwalkan pemeriksaan.",
  },
  "/layanan/pemeriksaan-psikologi-pendidikan": {
    h1: "Tes Psikologi Pendidikan untuk Kesiapan Sekolah dan Gaya Belajar",
    title: "Tes Psikologi Pendidikan & Kesiapan Sekolah | Talenta Mulia",
    description: "Tes psikologi pendidikan membantu orang tua dan sekolah memahami kesiapan sekolah, kemampuan belajar, dan potensi akademik anak. Jadwalkan pemeriksaan anak.",
  },
  "/layanan/pemeriksaan-psikologi-perkembangan": {
    h1: "Pemeriksaan Tumbuh Kembang Anak oleh Psikolog",
    title: "Pemeriksaan Tumbuh Kembang Anak | Talenta Mulia",
    description: "Pemeriksaan psikologi perkembangan menilai kemampuan bicara, motorik, sosial, dan emosi anak sesuai usianya, disertai saran untuk orang tua. Jadwalkan sekarang.",
  },
  "/layanan/coaching": {
    h1: "Layanan Coaching Profesional untuk Karier dan Kepemimpinan",
    title: "Layanan Coaching Karier & Kepemimpinan | Talenta Mulia",
    description: "Pilih coaching yang sesuai: executive coaching, team coaching, atau coaching karier untuk profesional. Temukan arah dan langkah konkret. Hubungi Talenta Mulia.",
  },
  "/layanan/konsultasi-online-offline": {
    h1: "Konsultasi Psikologi Online dan Tatap Muka di Sidoarjo",
    title: "Konsultasi Psikologi Online & Tatap Muka Sidoarjo",
    description: "Pilih konsultasi psikologi tatap muka di kantor Sidoarjo atau online lewat video call. Pelajari alur, persiapan, dan cara membuat janji dengan Talenta Mulia.",
  },

  "/industri/manufaktur": {
    h1: "Solusi SDM dan Psikologi Kerja untuk Perusahaan Manufaktur",
    title: "Konsultan SDM untuk Industri Manufaktur | Talenta Mulia",
    description: "Solusi untuk pabrik dan manufaktur: asesmen operator dan supervisor, pelatihan kepemimpinan lini depan, dan kesejahteraan karyawan shift. Minta proposal.",
  },
  "/industri/kesehatan": {
    h1: "Pengembangan SDM dan Kepemimpinan untuk Rumah Sakit",
    title: "Konsultan SDM Rumah Sakit & Faskes | Talenta Mulia",
    description: "Dukungan untuk rumah sakit dan fasilitas kesehatan: asesmen tenaga kesehatan, pelatihan kepemimpinan klinis, dan program kesejahteraan staf. Hubungi konsultan.",
  },
  "/industri/pendidikan": {
    h1: "Layanan Psikologi dan Pengembangan SDM untuk Sekolah dan Kampus",
    title: "Layanan Psikologi untuk Sekolah & Kampus | Talenta Mulia",
    description: "Untuk sekolah dan perguruan tinggi: tes minat bakat siswa, pendampingan guru, pelatihan kepemimpinan, dan dukungan kesejahteraan warga sekolah. Diskusikan.",
  },
  "/industri/pemerintahan": {
    h1: "Asesmen Kompetensi dan Pengembangan ASN untuk Instansi Pemerintah",
    title: "Asesmen & Pengembangan ASN Instansi Pemerintah | Talenta Mulia",
    description: "Dukungan untuk instansi pemerintah: asesmen kompetensi, pemetaan talenta ASN, pelatihan kepemimpinan, dan program persiapan pensiun. Diskusikan kebutuhan.",
  },
  "/industri/perbankan": {
    h1: "Solusi SDM dan Kepemimpinan untuk Perbankan dan Keuangan",
    title: "Konsultan SDM untuk Perbankan & Keuangan | Talenta Mulia",
    description: "Untuk bank dan lembaga keuangan: assessment center, talent mapping, coaching pemimpin cabang, dan program kesejahteraan karyawan. Konsultasikan kebutuhan Anda.",
  },

  "/": {
    h1: "Konsultan Psikologi dan Human Capital di Sidoarjo untuk Individu dan Organisasi",
    title: "Talenta Mulia: Konsultan Psikologi & Human Capital Sidoarjo",
    description: "Talenta Mulia melayani konseling individu, asesmen, pelatihan kepemimpinan, dan pengembangan SDM untuk perusahaan di Sidoarjo, Surabaya, dan Jawa Timur.",
  },
  "/solusi-korporat": {
    h1: "Solusi Korporat untuk Pengembangan SDM dan Organisasi Perusahaan",
    title: "Solusi Korporat & Human Capital Perusahaan | Talenta Mulia",
    description: "Solusi B2B untuk HR dan direksi: asesmen, assessment center, talent mapping, coaching, pelatihan kepemimpinan, dan wellbeing karyawan. Diskusikan kebutuhan Anda.",
  },
  "/layanan-individu": {
    h1: "Layanan Psikologi untuk Individu, Pasangan, dan Keluarga",
    title: "Layanan Psikologi Individu & Keluarga | Talenta Mulia",
    description: "Temukan layanan psikologi yang sesuai: konseling dewasa, pernikahan, keluarga, remaja, parenting, dan pemeriksaan psikologi. Jadwalkan konsultasi Anda.",
  },
  "/kesehatan": {
    h1: "Layanan untuk Institusi Kesehatan dan Edukasi Kesehatan Karyawan",
    title: "Layanan Institusi Kesehatan & Edukasi Kesehatan | Talenta Mulia",
    description: "Dukungan untuk rumah sakit dan fasilitas kesehatan: pengembangan SDM, kepemimpinan, tata kelola mutu, dan edukasi kesehatan karyawan. Hubungi konsultan kami.",
  },
  "/pelatihan": {
    h1: "Pelatihan dan Seminar Pengembangan Kompetensi untuk Organisasi",
    title: "Pelatihan & Seminar Pengembangan SDM | Talenta Mulia",
    description: "Pelatihan in-house dan seminar untuk perusahaan, sekolah, dan instansi: kepemimpinan, komunikasi, manajemen stres, dan persiapan pensiun. Minta proposal.",
  },
  "/program": {
    h1: "Program Pengembangan Karyawan dan Organisasi Talenta Mulia",
    title: "Program Pengembangan Karyawan & Organisasi | Talenta Mulia",
    description: "Lihat program Talenta Mulia untuk organisasi: Masa Persiapan Pensiun (MPP), coaching, dan kesejahteraan karyawan. Pilih program dan diskusikan kebutuhan Anda.",
  },
  "/industri": {
    h1: "Solusi Psikologi dan SDM Berdasarkan Sektor Industri",
    title: "Solusi SDM per Sektor Industri | Talenta Mulia",
    description: "Solusi untuk manufaktur, rumah sakit, pendidikan, pemerintahan, dan perbankan. Pilih sektor Anda dan temukan layanan SDM yang relevan dengan tantangannya.",
  },
  "/tentang-kami": {
    h1: "Tentang Talenta Mulia: Psikologi, Kesehatan & Kepemimpinan Terintegrasi",
    title: "Tentang Talenta Mulia | PT Talenta Mulia Indonesia",
    description: "Kenali PT Talenta Mulia Indonesia di Sidoarjo: visi, misi, pendekatan terintegrasi psikologi, kesehatan, dan kepemimpinan, serta tim profesional kami.",
  },
  "/tokoh-sentral": {
    h1: "Tokoh Sentral dan Distinguished Fellow Talenta Mulia",
    title: "Tokoh Sentral & Distinguished Fellow | Talenta Mulia",
    description: "Profil Dr. Hj. Andiani dan Dr. Tri Novia, tokoh sentral dan Distinguished Fellow yang memberi arah keilmuan bagi layanan Talenta Mulia. Baca profil lengkapnya.",
  },
  "/professionals": {
    h1: "Tim Psikolog dan Konsultan Profesional Talenta Mulia",
    title: "Tim Psikolog & Konsultan Profesional | Talenta Mulia",
    description: "Kenali psikolog, coach, dan konsultan Talenta Mulia beserta bidang keahliannya, mulai dari konseling individu hingga pengembangan SDM. Lihat profil tim kami.",
  },
  "/artikel": {
    h1: "Artikel Psikologi, Kesehatan Mental, dan Pengembangan SDM",
    title: "Artikel Psikologi & Pengembangan SDM | Talenta Mulia",
    description: "Baca artikel seputar psikologi, kesehatan mental, parenting, kepemimpinan, dan pengembangan SDM yang disusun tim Talenta Mulia. Temukan topik yang Anda cari.",
  },
  "/faq": {
    h1: "Pertanyaan Umum tentang Layanan Talenta Mulia",
    title: "FAQ Layanan Psikologi & SDM | Talenta Mulia",
    description: "Jawaban atas pertanyaan umum tentang jadwal, konsultasi online dan tatap muka, kerahasiaan, asesmen perusahaan, dan cara membuat janji di Talenta Mulia.",
  },
  "/testimoni": {
    h1: "Testimoni Klien Talenta Mulia",
    title: "Testimoni Klien Individu & Perusahaan | Talenta Mulia",
    description: "Baca pengalaman klien individu dan organisasi yang pernah menggunakan layanan Talenta Mulia. Ingin berdiskusi tentang kebutuhan Anda? Hubungi tim kami.",
  },
  "/kontak": {
    h1: "Hubungi Talenta Mulia dan Buat Janji Konsultasi",
    title: "Kontak & Buat Janji Konsultasi di Sidoarjo | Talenta Mulia",
    description: "Hubungi Talenta Mulia lewat WhatsApp, email, atau formulir untuk membuat janji konsultasi individu maupun diskusi kebutuhan perusahaan di Sidoarjo dan online.",
  },
  "/kebijakan-privasi": {
    h1: "Kebijakan Privasi Talenta Mulia",
    title: "Kebijakan Privasi | PT Talenta Mulia Indonesia",
    description: "Kebijakan privasi PT Talenta Mulia Indonesia menjelaskan data pribadi yang dikumpulkan, cara penggunaan, penyimpanan, dan hak Anda atas data tersebut.",
  },
  "/syarat-ketentuan": {
    h1: "Syarat dan Ketentuan Layanan Talenta Mulia",
    title: "Syarat & Ketentuan Layanan | PT Talenta Mulia Indonesia",
    description: "Syarat dan ketentuan penggunaan situs dan layanan PT Talenta Mulia Indonesia, termasuk pemesanan jadwal, pembatalan, kerahasiaan, dan tanggung jawab para pihak.",
  },
};

function normalise(path: string): string {
  const p = path.split(/[?#]/)[0]!.replace(/\/+$/, "");
  return p === "" ? "/" : p;
}

export function pageSeo(path: string): PageSeo | undefined {
  return PAGE_SEO[normalise(path)];
}

type Meta = Record<string, unknown>;
type Head = { meta?: Meta[]; links?: unknown[]; scripts?: unknown[]; [k: string]: unknown };

/** Overrides title/description/social text in a route head with PAGE_SEO. */
export function withPageSeo<T extends Head>(path: string, head: T): T {
  const seo = pageSeo(path);
  if (!seo) return head;
  const replace: Record<string, string> = {
    "name:description": seo.description,
    "property:og:title": seo.title,
    "property:og:description": seo.description,
    "name:twitter:title": seo.title,
    "name:twitter:description": seo.description,
  };
  const seen = new Set<string>();
  const meta = (head.meta ?? []).map((m) => {
    if ("title" in m) {
      seen.add("title");
      return { ...m, title: seo.title };
    }
    const key = m["name"] ? `name:${m["name"]}` : m["property"] ? `property:${m["property"]}` : "";
    if (key in replace) {
      seen.add(key);
      return { ...m, content: replace[key] };
    }
    if (key === "property:og:type" || key === "name:twitter:card") seen.add(key);
    return m;
  });
  if (!seen.has("title")) meta.unshift({ title: seo.title });
  for (const [key, content] of Object.entries(replace)) {
    if (seen.has(key)) continue;
    const [attr, ...rest] = key.split(":");
    meta.push({ [attr!]: rest.join(":"), content });
  }
  if (!seen.has("property:og:type")) meta.push({ property: "og:type", content: "website" });
  if (!seen.has("name:twitter:card")) meta.push({ name: "twitter:card", content: "summary_large_image" });
  return { ...head, meta };
}

/** H1 text for the current page, or the template's own fallback. */
export function usePageH1(fallback: string): string {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return pageSeo(pathname)?.h1 ?? fallback;
}

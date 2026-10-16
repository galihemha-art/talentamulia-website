import { createFileRoute } from "@tanstack/react-router";

import { canonicalLink, ogUrl } from "@/lib/seo";
import { breadcrumbSchema, jsonLd, serviceSchema, webPageSchema } from "@/lib/structured-data";
import { SeoLandingPage, type SeoLandingConfig } from "@/components/site/SeoLandingPage";
import { KERAHASIAAN_NOTE } from "@/lib/layanan-individu-data";

const PATH = "/tes-minat-bakat";
const TITLE = "Tes Minat Bakat Pelajar & Mahasiswa | Talenta Mulia";
const DESCRIPTION =
  "Tes minat bakat bersama psikolog Talenta Mulia untuk membantu pelajar dan mahasiswa memilih jurusan serta arah karier. Tatap muka di Sidoarjo, dekat Surabaya.";
const WA_URL =
  "https://wa.me/6282132990498?text=Halo%20Talenta%20Mulia%2C%20saya%20ingin%20menanyakan%20tes%20minat%20bakat.";

const PSIKOLOG = ["maulidah", "hilda"] as const;

const config: SeoLandingConfig = {
  eyebrow: "Tes Minat Bakat",
  breadcrumb: "Tes Minat Bakat",
  h1: "Tes Minat Bakat untuk Membantu Memilih Jurusan dan Arah Pendidikan dengan Lebih Yakin",
  lead: "Pemeriksaan psikologi yang membantu pelajar, mahasiswa, dan orang tua memahami potensi, minat, serta gaya belajar sebagai bahan pertimbangan dalam memilih jurusan atau arah karier. Diselenggarakan dan dibahas bersama psikolog di Sidoarjo, terjangkau dari Surabaya.",
  heroAlt:
    "Psikolog Talenta Mulia menjelaskan hasil tes minat bakat kepada peserta dan orang tua",
  waUrl: WA_URL,
  chips: ["Dibahas Bersama Psikolog", "Laporan Tertulis", "Rahasia & Beretika"],
  quickAnswer: {
    heading: "Apa Itu Tes Minat Bakat?",
    paragraphs: [
      "Tes minat bakat adalah rangkaian pemeriksaan psikologi yang memetakan kecenderungan minat, potensi kemampuan, dan gaya belajar seseorang. Hasilnya digunakan sebagai bahan pertimbangan, bukan sebagai penentu tunggal masa depan.",
      "Di Talenta Mulia, tes tidak berhenti pada skor. Hasil dibahas bersama psikolog agar peserta dan orang tua memahami arti temuannya serta bagaimana menghubungkannya dengan pilihan jurusan, sekolah lanjutan, atau bidang pekerjaan.",
      "Tes ini bukan alat untuk menyatakan seseorang berbakat atau tidak berbakat. Tujuannya adalah memberi gambaran yang lebih terstruktur agar keputusan pendidikan diambil dengan informasi yang lebih lengkap.",
    ],
  },
  kebutuhan: {
    heading: "Kapan Tes Minat Bakat Membantu?",
    intro:
      "Situasi berikut sering menjadi alasan peserta dan orang tua mempertimbangkan pemeriksaan ini.",
    items: [
      {
        judul: "Bingung memilih jurusan",
        teks: "Menjelang kelulusan SMP atau SMA dan belum yakin arah pendidikan yang ingin ditempuh.",
      },
      {
        judul: "Pilihan orang tua dan anak berbeda",
        teks: "Perlu bahan diskusi yang lebih objektif agar keputusan dapat dibicarakan bersama.",
      },
      {
        judul: "Salah jurusan",
        teks: "Mahasiswa yang merasa tidak cocok dengan jurusan saat ini dan mempertimbangkan langkah berikutnya.",
      },
      {
        judul: "Minat terlalu banyak atau terlalu sedikit",
        teks: "Sulit memilih karena tertarik pada banyak hal, atau justru belum menemukan ketertarikan apa pun.",
      },
      {
        judul: "Prestasi tidak sesuai usaha",
        teks: "Sudah belajar keras namun hasil belum sesuai, sehingga ingin memahami gaya belajar yang lebih cocok.",
      },
      {
        judul: "Persiapan masuk dunia kerja",
        teks: "Ingin mengenali kekuatan diri sebelum melamar pekerjaan pertama atau berpindah bidang.",
      },
      {
        judul: "Kebutuhan sekolah",
        teks: "Sekolah ingin memfasilitasi pemetaan potensi siswa secara kolektif.",
      },
      {
        judul: "Butuh pendapat profesional",
        teks: "Ingin gambaran yang disusun psikolog, bukan sekadar kuis daring tanpa pendampingan.",
      },
    ],
  },
  siapa: {
    heading: "Siapa yang Cocok Mengikuti?",
    items: [
      {
        judul: "Siswa SMP",
        teks: "Menjelang pemilihan jenjang dan peminatan di sekolah menengah atas.",
      },
      {
        judul: "Siswa SMA/SMK",
        teks: "Mempersiapkan pemilihan jurusan kuliah atau menentukan langkah setelah lulus.",
      },
      {
        judul: "Mahasiswa",
        teks: "Ingin memastikan arah studi dan mempertimbangkan bidang karier yang sesuai.",
      },
      {
        judul: "Orang tua",
        teks: "Membutuhkan gambaran yang lebih objektif untuk mendampingi keputusan anak.",
      },
      {
        judul: "Pencari kerja awal",
        teks: "Ingin mengenali kekuatan diri sebelum memasuki dunia kerja.",
      },
      {
        judul: "Sekolah & lembaga pendidikan",
        teks: "Menyelenggarakan pemetaan potensi bagi sekelompok siswa.",
      },
    ],
  },
  topik: {
    heading: "Apa Saja yang Dipetakan?",
    intro: "Cakupan pemeriksaan disesuaikan dengan usia dan tujuan peserta.",
    items: [
      {
        judul: "Kecenderungan minat",
        teks: "Bidang aktivitas dan lingkungan kerja yang cenderung sesuai dengan ketertarikan peserta.",
      },
      {
        judul: "Potensi kemampuan",
        teks: "Gambaran kemampuan berpikir yang relevan dengan tuntutan belajar dan pekerjaan.",
      },
      {
        judul: "Gaya belajar",
        teks: "Cara peserta menyerap dan mengolah informasi dalam kegiatan belajar sehari-hari.",
      },
      {
        judul: "Kekuatan dan area pengembangan",
        teks: "Hal yang menjadi modal peserta dan hal yang masih perlu dilatih.",
      },
      {
        judul: "Kesesuaian dengan pilihan jurusan",
        teks: "Diskusi antara hasil pemeriksaan dan jurusan atau bidang yang sedang dipertimbangkan.",
      },
      {
        judul: "Pertimbangan lingkungan",
        teks: "Faktor keluarga, sekolah, dan keseharian yang ikut memengaruhi keputusan.",
      },
      {
        judul: "Laporan tertulis",
        teks: "Rangkuman hasil yang dapat dibaca kembali oleh peserta dan orang tua.",
      },
      {
        judul: "Sesi umpan balik",
        teks: "Penjelasan langsung dari psikolog beserta ruang tanya jawab.",
      },
    ],
  },
  manfaat: {
    heading: "Apa yang Dapat Diperoleh Peserta",
    intro:
      "Hasil setiap peserta berbeda. Pemeriksaan ini dapat membantu dalam hal-hal berikut.",
    items: [
      "Memperoleh gambaran yang lebih terstruktur mengenai minat dan potensi diri.",
      "Mempersempit pilihan jurusan atau bidang yang layak dipertimbangkan.",
      "Menyediakan bahan diskusi yang lebih tenang antara anak dan orang tua.",
      "Mengenali gaya belajar yang dapat diterapkan dalam keseharian.",
      "Mengurangi keputusan yang diambil semata karena ikut teman atau tren.",
      "Memiliki laporan tertulis yang bisa dibaca ulang saat mengambil keputusan.",
    ],
  },
  proses: {
    heading: "Bagaimana Prosesnya?",
    items: [
      {
        judul: "Sampaikan kebutuhan",
        teks: "Hubungi kami melalui formulir kontak atau WhatsApp dan sebutkan jenjang pendidikan peserta.",
      },
      {
        judul: "Penjadwalan pemeriksaan",
        teks: "Kami menentukan rangkaian alat ukur yang sesuai serta jadwal pelaksanaan.",
      },
      {
        judul: "Pelaksanaan tes",
        teks: "Peserta mengerjakan rangkaian pemeriksaan yang diawasi oleh tim Talenta Mulia.",
      },
      {
        judul: "Umpan balik & laporan",
        teks: "Psikolog menjelaskan hasil bersama peserta dan orang tua, disertai laporan tertulis.",
      },
    ],
  },
  mode: {
    heading: "Pelaksanaan Tes dan Sesi Umpan Balik",
    online: [
      "Konsultasi awal dan sesi umpan balik dapat dilakukan secara daring.",
      "Membantu peserta atau orang tua yang berada di luar Sidoarjo.",
      "Membutuhkan koneksi dan ruang yang tenang selama sesi.",
    ],
    tatapMuka: [
      "Pelaksanaan pemeriksaan umumnya dilakukan tatap muka agar kondisi pengerjaan terkendali.",
      "Berlokasi di kantor Talenta Mulia, Sidoarjo, terjangkau dari Surabaya dan sekitarnya.",
      "Sekolah dapat mendiskusikan pelaksanaan secara kolektif di lokasi masing-masing.",
    ],
    catatan:
      "Rangkaian alat ukur, durasi, dan biaya akan dikonfirmasi saat booking sesuai kebutuhan peserta.",
  },
  psikolog: {
    heading: "Psikolog yang Mendampingi",
    intro: "Penugasan psikolog disesuaikan dengan jenjang dan kebutuhan peserta.",
    ids: [...PSIKOLOG],
  },
  faq: {
    heading: "Pertanyaan yang Sering Diajukan",
    items: [
      {
        q: "Apakah hasil tes menentukan jurusan yang harus diambil?",
        a: "Tidak. Hasil tes adalah bahan pertimbangan. Keputusan tetap berada di tangan peserta dan keluarga, dengan mempertimbangkan minat, kesempatan, dan kondisi lainnya.",
      },
      {
        q: "Usia berapa yang bisa mengikuti tes minat bakat?",
        a: "Umumnya diikuti pelajar tingkat SMP ke atas hingga mahasiswa dan pencari kerja awal. Rangkaian alat ukur disesuaikan dengan jenjang peserta.",
      },
      {
        q: "Berapa biaya dan berapa lama pengerjaannya?",
        a: "Detail sesi, termasuk durasi dan biaya, akan dikonfirmasi saat booking sesuai rangkaian pemeriksaan yang digunakan.",
      },
      {
        q: "Apakah mendapat laporan tertulis?",
        a: "Ya. Peserta memperoleh laporan tertulis yang dijelaskan lebih dulu oleh psikolog dalam sesi umpan balik.",
      },
      {
        q: "Apakah orang tua boleh ikut sesi umpan balik?",
        a: "Boleh, dan pada peserta usia sekolah hal ini justru dianjurkan agar keputusan dapat dibicarakan bersama.",
      },
      {
        q: "Apa bedanya dengan tes minat bakat gratis di internet?",
        a: "Perbedaan utamanya ada pada alat ukur yang digunakan dan adanya pembahasan bersama psikolog, sehingga hasil dapat dikaitkan dengan situasi nyata peserta.",
      },
      {
        q: "Apakah hasilnya bisa berubah di kemudian hari?",
        a: "Minat dan pengalaman seseorang dapat berkembang. Karena itu hasil sebaiknya dibaca sebagai gambaran pada saat pemeriksaan dilakukan.",
      },
      {
        q: "Apakah data peserta dijaga kerahasiaannya?",
        a: KERAHASIAAN_NOTE,
      },
      {
        q: "Apakah sekolah bisa mengadakan tes untuk banyak siswa?",
        a: "Bisa. Kebutuhan kolektif dapat didiskusikan melalui halaman kontak untuk menentukan skema pelaksanaannya.",
      },
      {
        q: "Apakah tes ini sama dengan pemeriksaan psikologi pendidikan?",
        a: "Tes minat bakat adalah salah satu kebutuhan yang dilayani dalam lingkup pemeriksaan psikologi pendidikan Talenta Mulia, dengan fokus pada pemetaan minat, potensi, dan arah studi.",
      },
    ],
  },
  catatan: {
    heading: "Catatan Penting",
    paragraphs: [
      "Tes minat bakat bukan alat diagnosis dan bukan penentu keberhasilan seseorang. Hasilnya perlu dibaca bersama konteks kehidupan peserta.",
      "Bila selama proses ditemukan kebutuhan psikologis lain, misalnya tekanan belajar atau kecemasan yang mengganggu, psikolog akan menyampaikannya dan menjelaskan pilihan pendampingan yang tersedia.",
    ],
  },
  terkait: {
    heading: "Layanan & Halaman Terkait",
    items: [
      {
        title: "Pemeriksaan Psikologi Pendidikan",
        teks: "Lingkup pemeriksaan psikologi untuk kebutuhan belajar dan pendidikan.",
        to: "/layanan/$slug",
        params: { slug: "pemeriksaan-psikologi-pendidikan" },
      },
      {
        title: "Konseling Remaja",
        teks: "Bila peserta membutuhkan ruang bicara mengenai tekanan sekolah dan pertemanan.",
        to: "/layanan/$slug",
        params: { slug: "konseling-remaja" },
      },
      {
        title: "Psikolog Anak",
        teks: "Untuk kebutuhan perkembangan, emosi, dan perilaku anak.",
        to: "/psikolog-anak",
      },
      {
        title: "Konsultasi Psikolog Online",
        teks: "Bila Anda ingin memulai konsultasi secara daring lebih dulu.",
        to: "/konsultasi-psikolog-online",
      },
      {
        title: "Konseling Burnout",
        teks: "Relevan bila kelelahan belajar atau bekerja sudah terasa berkepanjangan.",
        to: "/konseling-burnout",
      },
      {
        title: "Semua Layanan Individu & Keluarga",
        teks: "Lihat pilihan layanan psikologi lain untuk kebutuhan pribadi maupun keluarga.",
        to: "/layanan-individu",
      },
    ],
  },
  cta: {
    heading: "Ambil Keputusan Pendidikan dengan Gambaran yang Lebih Jelas",
    teks: "Sampaikan jenjang pendidikan dan kebutuhan peserta, dan kami bantu menyiapkan rangkaian pemeriksaan yang sesuai.",
  },
};

export const Route = createFileRoute("/tes-minat-bakat")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "id_ID" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      ogUrl(PATH),
    ],
    links: [canonicalLink(PATH)],
    scripts: [
      jsonLd(breadcrumbSchema([{ name: "Tes Minat Bakat", path: PATH }])),
      jsonLd(webPageSchema({ name: TITLE, description: DESCRIPTION, path: PATH })),
      jsonLd(
        serviceSchema({
          name: "Tes Minat Bakat",
          description:
            "Pemeriksaan psikologi minat bakat Talenta Mulia untuk pelajar, mahasiswa, dan sekolah, dengan sesi umpan balik bersama psikolog di Sidoarjo, Jawa Timur.",
          path: PATH,
          serviceType: "Pemeriksaan Psikologi Pendidikan",
          providerPeople: [...PSIKOLOG],
          offerings: [
            {
              name: "Pemeriksaan Psikologi Pendidikan",
              path: "/layanan/pemeriksaan-psikologi-pendidikan",
            },
            { name: "Konseling Remaja", path: "/layanan/konseling-remaja" },
            { name: "Parenting & Anak", path: "/layanan/parenting-anak" },
          ],
        }),
      ),
    ],
  }),
  component: () => <SeoLandingPage config={config} />,
});

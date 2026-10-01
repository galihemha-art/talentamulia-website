import { createFileRoute } from "@tanstack/react-router";

import { canonicalLink, ogUrl } from "@/lib/seo";
import { breadcrumbSchema, jsonLd, serviceSchema, webPageSchema } from "@/lib/structured-data";
import { SeoLandingPage, type SeoLandingConfig } from "@/components/site/SeoLandingPage";
import { KERAHASIAAN_NOTE } from "@/lib/layanan-individu-data";

const PATH = "/konseling-keluarga";
const TITLE = "Konseling Keluarga dengan Psikolog | Talenta Mulia";
const DESCRIPTION =
  "Konseling keluarga bersama psikolog Talenta Mulia untuk memperbaiki komunikasi, mengelola konflik, dan menghadapi masa transisi keluarga. Online maupun tatap muka di Sidoarjo.";
const WA_URL =
  "https://wa.me/6282132990498?text=Halo%20Talenta%20Mulia%2C%20saya%20ingin%20konsultasi%20tentang%20konseling%20keluarga.";

const PSIKOLOG = ["maulidah", "mamluatul", "hilda"] as const;

const config: SeoLandingConfig = {
  eyebrow: "Konseling Keluarga",
  breadcrumb: "Konseling Keluarga",
  h1: "Konseling Keluarga dengan Psikolog untuk Memperbaiki Komunikasi dan Relasi di Rumah",
  lead: "Sesi pendampingan bagi keluarga yang sedang menghadapi konflik berulang, jarak emosional antar anggota, atau perubahan besar dalam kehidupan bersama. Sesi dapat diikuti beberapa anggota keluarga sekaligus maupun bergantian, tersedia online dan tatap muka di Sidoarjo.",
  heroAlt: "Psikolog Talenta Mulia mendampingi sesi konseling bersama anggota keluarga",
  waUrl: WA_URL,
  chips: ["Rahasia & Beretika", "Online & Tatap Muka", "Ruang Netral untuk Semua Pihak"],
  quickAnswer: {
    heading: "Apa Itu Konseling Keluarga?",
    paragraphs: [
      "Konseling keluarga adalah sesi pendampingan bersama psikolog yang melihat persoalan bukan hanya pada satu orang, melainkan pada pola relasi di dalam keluarga. Fokusnya adalah cara anggota keluarga saling berkomunikasi, merespons, dan menyelesaikan perbedaan.",
      "Sesi memberi ruang netral agar setiap pihak dapat menyampaikan pandangannya tanpa percakapan berubah menjadi saling menyalahkan. Psikolog membantu menjaga arah pembicaraan dan memunculkan kebutuhan yang selama ini tidak tersampaikan.",
      "Konseling keluarga bukan pengadilan untuk menentukan siapa yang benar dan siapa yang salah. Tujuannya adalah membangun pemahaman bersama serta menyepakati cara berelasi yang lebih bisa dijalani semua pihak.",
    ],
  },
  kebutuhan: {
    heading: "Situasi yang Sering Dibawa ke Konseling Keluarga",
    intro:
      "Kondisi berikut umum terjadi dan tidak otomatis berarti keluarga bermasalah. Konseling membantu menata percakapan yang selama ini sulit dimulai.",
    items: [
      {
        judul: "Konflik yang berulang",
        teks: "Pertengkaran dengan tema yang sama terus terjadi tanpa titik temu yang bertahan lama.",
      },
      {
        judul: "Komunikasi yang buntu",
        teks: "Percakapan berubah menjadi diam-diaman, sindiran, atau justru selalu berakhir dengan nada tinggi.",
      },
      {
        judul: "Jarak antara orang tua dan anak",
        teks: "Anak atau remaja menjadi tertutup dan orang tua kesulitan menjangkau apa yang dirasakannya.",
      },
      {
        judul: "Perbedaan pola asuh",
        teks: "Orang tua atau anggota keluarga lain menerapkan aturan yang saling bertentangan di rumah.",
      },
      {
        judul: "Masa transisi keluarga",
        teks: "Kelahiran anak, pindah kota, perubahan pekerjaan, atau anak mulai tinggal terpisah.",
      },
      {
        judul: "Kehilangan dan duka",
        teks: "Keluarga sedang menyesuaikan diri setelah kehilangan anggota keluarga atau peristiwa berat lainnya.",
      },
      {
        judul: "Peran keluarga besar",
        teks: "Keterlibatan keluarga besar yang memengaruhi keputusan dan batasan dalam rumah tangga.",
      },
      {
        judul: "Satu anggota sedang menghadapi masalah",
        teks: "Ketika kesulitan yang dialami satu orang berdampak pada seluruh dinamika keluarga.",
      },
    ],
  },
  siapa: {
    heading: "Siapa yang Cocok Mengikuti?",
    items: [
      {
        judul: "Keluarga inti",
        teks: "Orang tua dan anak yang ingin memperbaiki komunikasi dan suasana di rumah.",
      },
      {
        judul: "Pasangan dengan anak",
        teks: "Ketika persoalan pasangan mulai berdampak pada anak dan rutinitas keluarga.",
      },
      {
        judul: "Keluarga dengan anak remaja",
        teks: "Menghadapi perubahan relasi seiring anak memasuki masa remaja.",
      },
      {
        judul: "Keluarga multigenerasi",
        teks: "Tinggal bersama keluarga besar dan membutuhkan kejelasan peran serta batasan.",
      },
      {
        judul: "Keluarga di masa transisi",
        teks: "Sedang menyesuaikan diri dengan perubahan besar dalam kehidupan bersama.",
      },
      {
        judul: "Satu anggota yang ingin memulai",
        teks: "Anggota keluarga yang ingin berkonsultasi lebih dulu sebelum mengajak yang lain.",
      },
    ],
  },
  topik: {
    heading: "Apa Saja yang Dibahas?",
    intro: "Topik dan urutannya disesuaikan dengan kebutuhan setiap keluarga.",
    items: [
      {
        judul: "Pola komunikasi",
        teks: "Cara anggota keluarga menyampaikan kebutuhan dan menanggapi satu sama lain.",
      },
      {
        judul: "Sumber konflik berulang",
        teks: "Tema yang terus kembali dan hal yang membuatnya sulit diselesaikan.",
      },
      {
        judul: "Peran dan tanggung jawab",
        teks: "Pembagian peran di rumah serta harapan yang melekat pada masing-masing anggota.",
      },
      {
        judul: "Batasan yang sehat",
        teks: "Batasan antar anggota keluarga maupun dengan keluarga besar.",
      },
      {
        judul: "Pengasuhan anak",
        teks: "Menyamakan pendekatan pengasuhan agar aturan di rumah lebih konsisten.",
      },
      {
        judul: "Emosi yang tidak tersampaikan",
        teks: "Kekecewaan, kelelahan, atau kekhawatiran yang selama ini dipendam.",
      },
      {
        judul: "Perubahan dan penyesuaian",
        teks: "Cara keluarga menghadapi transisi dan tekanan dari luar rumah.",
      },
      {
        judul: "Kesepakatan tindak lanjut",
        teks: "Langkah konkret yang disepakati bersama untuk dijalankan setelah sesi.",
      },
    ],
  },
  manfaat: {
    heading: "Apa yang Dapat Diperoleh Keluarga",
    intro:
      "Hasil setiap keluarga berbeda dan bergantung pada kesediaan masing-masing pihak. Konseling dapat membantu dalam hal-hal berikut.",
    items: [
      "Membuat setiap anggota merasa didengar dalam ruang yang lebih netral.",
      "Mengenali pola konflik yang selama ini berulang tanpa disadari.",
      "Menemukan cara berkomunikasi yang lebih tenang dalam keseharian.",
      "Menyamakan pendekatan pengasuhan dan aturan di rumah.",
      "Menyusun batasan yang lebih jelas, termasuk dengan keluarga besar.",
      "Menghadapi masa transisi keluarga dengan rencana yang lebih disepakati bersama.",
    ],
  },
  proses: {
    heading: "Bagaimana Prosesnya?",
    items: [
      {
        judul: "Sampaikan kebutuhan",
        teks: "Hubungi kami melalui formulir kontak atau WhatsApp dan ceritakan singkat situasi keluarga.",
      },
      {
        judul: "Penjadwalan sesi",
        teks: "Kami bantu menentukan siapa yang sebaiknya hadir pada sesi pertama serta formatnya.",
      },
      {
        judul: "Sesi bersama psikolog",
        teks: "Psikolog memetakan dinamika keluarga dan memastikan setiap pihak mendapat ruang bicara.",
      },
      {
        judul: "Kesepakatan & tindak lanjut",
        teks: "Keluarga menyepakati langkah lanjutan, termasuk sesi berikutnya bila dibutuhkan.",
      },
    ],
  },
  mode: {
    heading: "Online atau Tatap Muka?",
    online: [
      "Memudahkan bila anggota keluarga tinggal berjauhan.",
      "Membutuhkan ruang yang tenang dan privat bagi setiap peserta.",
      "Cocok untuk sesi lanjutan dan diskusi tindak lanjut.",
    ],
    tatapMuka: [
      "Memungkinkan psikolog mengamati langsung dinamika antar anggota keluarga.",
      "Sering terasa lebih membantu pada sesi pertama dengan konflik yang menegang.",
      "Berlokasi di kantor Talenta Mulia, Sidoarjo, terjangkau dari Surabaya dan sekitarnya.",
    ],
    catatan:
      "Format dan komposisi peserta sesi ditentukan bersama psikolog. Detail sesi akan dikonfirmasi saat booking.",
  },
  psikolog: {
    heading: "Psikolog yang Dapat Mendampingi",
    intro: "Penugasan psikolog disesuaikan dengan kebutuhan keluarga Anda.",
    ids: [...PSIKOLOG],
  },
  faq: {
    heading: "Pertanyaan yang Sering Diajukan",
    items: [
      {
        q: "Apakah semua anggota keluarga harus hadir?",
        a: "Tidak harus. Sesi dapat dimulai dengan anggota yang bersedia hadir, lalu dikembangkan sesuai kesiapan masing-masing.",
      },
      {
        q: "Bagaimana jika anggota keluarga lain menolak ikut?",
        a: "Anda tetap dapat memulai sesi sendiri. Perubahan cara satu orang merespons sering kali sudah memengaruhi dinamika di rumah.",
      },
      {
        q: "Apakah psikolog akan menentukan siapa yang salah?",
        a: "Tidak. Konseling keluarga berfokus pada pola relasi, bukan pada mencari pihak yang bersalah.",
      },
      {
        q: "Apa bedanya dengan konseling pernikahan?",
        a: "Konseling pernikahan berfokus pada relasi pasangan, sedangkan konseling keluarga melibatkan lebih banyak anggota dan dinamika antar mereka.",
      },
      {
        q: "Berapa biaya dan berapa lama satu sesi?",
        a: "Detail sesi, termasuk durasi dan biaya, akan dikonfirmasi saat booking sesuai kebutuhan keluarga.",
      },
      {
        q: "Berapa kali sesi yang dibutuhkan?",
        a: "Berbeda pada setiap keluarga. Sebagian merasa cukup dengan beberapa sesi, sebagian membutuhkan pendampingan yang lebih panjang.",
      },
      {
        q: "Apakah anak boleh ikut dalam sesi?",
        a: "Boleh, dan keterlibatan anak disesuaikan dengan usia serta kesiapannya. Psikolog akan mempertimbangkan hal ini bersama orang tua.",
      },
      {
        q: "Apakah yang dibicarakan dijaga kerahasiaannya?",
        a: KERAHASIAAN_NOTE,
      },
      {
        q: "Apakah sesi bisa dilakukan secara online?",
        a: "Bisa. Sesi online tersedia dan sering membantu bila anggota keluarga berada di kota yang berbeda.",
      },
      {
        q: "Apakah harus menunggu konflik menjadi besar?",
        a: "Tidak. Banyak keluarga datang justru untuk mencegah persoalan kecil berkembang menjadi konflik yang lebih sulit diurai.",
      },
    ],
  },
  catatan: {
    heading: "Catatan Penting",
    paragraphs: [
      "Layanan ini bukan layanan gawat darurat. Bila ada anggota keluarga dalam kondisi yang membahayakan keselamatan diri atau orang lain, segera hubungi layanan kesehatan terdekat atau unit gawat darurat rumah sakit.",
      "Bila terdapat kekerasan dalam rumah tangga, keselamatan menjadi prioritas utama. Sampaikan kondisi tersebut saat menghubungi kami agar pendekatan sesi dapat disesuaikan.",
      "Informasi di halaman ini bersifat umum dan tidak menggantikan pemeriksaan langsung oleh profesional.",
    ],
  },
  terkait: {
    heading: "Layanan & Halaman Terkait",
    items: [
      {
        title: "Konseling Pernikahan",
        teks: "Bila fokus utama berada pada relasi Anda dan pasangan.",
        to: "/layanan/$slug",
        params: { slug: "konseling-pernikahan" },
      },
      {
        title: "Parenting & Anak",
        teks: "Untuk kebutuhan pengasuhan sehari-hari bersama anak.",
        to: "/layanan/$slug",
        params: { slug: "parenting-anak" },
      },
      {
        title: "Konseling Psikologis",
        teks: "Bila ada persoalan pribadi yang ingin dibicarakan secara individual lebih dulu.",
        to: "/layanan/$slug",
        params: { slug: "konseling-psikologis" },
      },
      {
        title: "Konseling Pranikah",
        teks: "Untuk pasangan yang sedang mempersiapkan pernikahan.",
        to: "/konseling-pranikah",
      },
      {
        title: "Konseling Burnout",
        teks: "Relevan bila tekanan pekerjaan mulai memengaruhi kehidupan keluarga.",
        to: "/konseling-burnout",
      },
      {
        title: "Konsultasi Psikolog Online",
        teks: "Bila Anda ingin memulai sesi secara daring dari rumah.",
        to: "/konsultasi-psikolog-online",
      },
    ],
  },
  cta: {
    heading: "Mulai Percakapan yang Selama Ini Sulit Dimulai",
    teks: "Ceritakan situasi keluarga Anda, dan kami bantu arahkan ke psikolog yang relevan. Sesi tersedia online maupun tatap muka di Sidoarjo.",
  },
};

export const Route = createFileRoute("/konseling-keluarga")({
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
      jsonLd(breadcrumbSchema([{ name: "Konseling Keluarga", path: PATH }])),
      jsonLd(webPageSchema({ name: TITLE, description: DESCRIPTION, path: PATH })),
      jsonLd(
        serviceSchema({
          name: "Konseling Keluarga",
          description:
            "Layanan konseling keluarga bersama psikolog Talenta Mulia untuk memperbaiki komunikasi, mengelola konflik, dan menghadapi masa transisi keluarga, tersedia online maupun tatap muka di Sidoarjo, Jawa Timur.",
          path: PATH,
          serviceType: "Konseling Keluarga",
          providerPeople: [...PSIKOLOG],
          offerings: [
            { name: "Konseling Pernikahan", path: "/layanan/konseling-pernikahan" },
            { name: "Parenting & Anak", path: "/layanan/parenting-anak" },
            { name: "Konseling Psikologis", path: "/layanan/konseling-psikologis" },
          ],
        }),
      ),
    ],
  }),
  component: () => <SeoLandingPage config={config} />,
});

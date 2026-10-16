import { createFileRoute } from "@tanstack/react-router";

import { canonicalLink, ogUrl } from "@/lib/seo";
import { breadcrumbSchema, jsonLd, serviceSchema, webPageSchema } from "@/lib/structured-data";
import { SeoLandingPage, type SeoLandingConfig } from "@/components/site/SeoLandingPage";
import { KERAHASIAAN_NOTE } from "@/lib/layanan-individu-data";

const PATH = "/psikolog-anak";
const TITLE = "Psikolog Anak Sidoarjo & Surabaya | Talenta Mulia";
const DESCRIPTION =
  "Konsultasi psikolog anak di Sidoarjo dan sekitar Surabaya untuk perkembangan, emosi, perilaku, dan kesulitan belajar. Pendampingan orang tua, online maupun tatap muka.";
const WA_URL =
  "https://wa.me/6282132990498?text=Halo%20Talenta%20Mulia%2C%20saya%20ingin%20konsultasi%20dengan%20psikolog%20anak.";

const PSIKOLOG = ["maulidah", "mamluatul", "hilda"] as const;

const config: SeoLandingConfig = {
  eyebrow: "Psikolog Anak",
  breadcrumb: "Psikolog Anak",
  h1: "Psikolog Anak di Sidoarjo untuk Mendampingi Tumbuh Kembang, Emosi, dan Perilaku Anak",
  lead: "Konsultasi bersama psikolog untuk memahami kebutuhan anak — mulai dari perkembangan, emosi, perilaku sehari-hari, hingga kesulitan di sekolah. Orang tua ikut dilibatkan sebagai bagian dari proses. Tersedia online maupun tatap muka di Sidoarjo, mudah dijangkau dari Surabaya dan sekitarnya.",
  heroAlt:
    "Psikolog Talenta Mulia berbincang dengan orang tua dalam sesi konsultasi psikologi anak",
  waUrl: WA_URL,
  chips: ["Rahasia & Beretika", "Online & Tatap Muka", "Orang Tua Dilibatkan"],
  quickAnswer: {
    heading: "Apa Itu Konsultasi Psikolog Anak?",
    paragraphs: [
      "Konsultasi psikolog anak adalah sesi pendampingan bersama psikolog untuk memahami apa yang sedang dialami anak dan bagaimana orang tua dapat meresponsnya. Fokusnya bukan pada mencari kesalahan, melainkan memahami kebutuhan anak pada tahap usianya.",
      "Sesi dapat melibatkan anak, orang tua, atau keduanya, tergantung usia anak dan kebutuhan yang dibawa. Pada banyak kasus, sebagian besar percakapan awal justru dilakukan bersama orang tua untuk memetakan situasi keluarga dan keseharian anak.",
      "Konsultasi ini tidak selalu berujung pada label atau diagnosis. Bila diperlukan pemeriksaan yang lebih terstruktur, psikolog akan menjelaskan pilihannya lebih dulu, termasuk pemeriksaan psikologi perkembangan atau pendidikan yang tersedia di Talenta Mulia.",
    ],
  },
  kebutuhan: {
    heading: "Situasi yang Sering Membawa Orang Tua ke Psikolog Anak",
    intro:
      "Hal-hal berikut umum ditemui dan tidak otomatis berarti anak memiliki gangguan tertentu. Konsultasi membantu memilah mana yang bagian dari tahap perkembangan dan mana yang perlu pendampingan lebih lanjut.",
    items: [
      {
        judul: "Perkembangan terasa berbeda",
        teks: "Bicara, interaksi, atau kemampuan motorik anak terasa tidak seperti anak seusianya dan orang tua ingin gambaran yang lebih jelas.",
      },
      {
        judul: "Emosi yang meledak-ledak",
        teks: "Anak mudah marah, menangis lama, atau sulit ditenangkan pada situasi yang sebelumnya biasa saja.",
      },
      {
        judul: "Perilaku yang sulit diarahkan",
        teks: "Menolak aturan, agresif pada teman atau saudara, atau pola perilaku yang berulang meski sudah berkali-kali dibicarakan.",
      },
      {
        judul: "Kesulitan belajar dan konsentrasi",
        teks: "Sulit fokus, menolak sekolah, atau prestasi menurun tanpa penyebab yang jelas bagi orang tua maupun guru.",
      },
      {
        judul: "Cemas, takut, atau menarik diri",
        teks: "Anak tampak lebih pendiam, takut berpisah, atau menghindari situasi sosial yang dulu dinikmatinya.",
      },
      {
        judul: "Perubahan besar di keluarga",
        teks: "Kelahiran adik, pindah rumah atau sekolah, perpisahan, atau kehilangan yang memengaruhi anak.",
      },
      {
        judul: "Rekomendasi dari sekolah",
        teks: "Guru menyarankan pemeriksaan psikologi dan orang tua ingin memahami maksud serta pilihan tindak lanjutnya.",
      },
      {
        judul: "Kebutuhan khusus yang sudah diketahui",
        teks: "Anak sudah memiliki kebutuhan khusus dan orang tua mencari pendampingan yang berkelanjutan.",
      },
    ],
  },
  siapa: {
    heading: "Siapa yang Cocok Mengikuti Layanan Ini?",
    items: [
      {
        judul: "Orang tua anak usia dini",
        teks: "Ingin memahami tahap perkembangan anak dan cara mendampingi yang sesuai usianya.",
      },
      {
        judul: "Orang tua anak usia sekolah",
        teks: "Menghadapi persoalan belajar, pertemanan, atau perilaku di rumah maupun di sekolah.",
      },
      {
        judul: "Keluarga dengan anak berkebutuhan khusus",
        teks: "Membutuhkan pendampingan dan strategi keseharian yang realistis untuk seluruh anggota keluarga.",
      },
      {
        judul: "Orang tua yang merasa kewalahan",
        teks: "Sudah mencoba berbagai cara namun merasa buntu dan ingin sudut pandang profesional.",
      },
      {
        judul: "Pengasuh dan keluarga pendamping",
        teks: "Kakek, nenek, atau pengasuh yang terlibat langsung dalam keseharian anak.",
      },
      {
        judul: "Sekolah dan lembaga pendidikan",
        teks: "Membutuhkan pendampingan psikologis bagi siswa dan konsultasi bagi tenaga pendidik.",
      },
    ],
  },
  topik: {
    heading: "Apa Saja yang Dibahas dalam Sesi?",
    intro: "Cakupan pembahasan disesuaikan dengan usia anak dan kebutuhan keluarga.",
    items: [
      {
        judul: "Gambaran keseharian anak",
        teks: "Rutinitas, pola tidur, aktivitas, dan situasi yang memicu perubahan perilaku.",
      },
      {
        judul: "Pola komunikasi di rumah",
        teks: "Cara orang tua dan anak saling menyampaikan kebutuhan, termasuk saat sedang tidak mudah.",
      },
      {
        judul: "Pengelolaan emosi anak",
        teks: "Cara membantu anak mengenali dan menyalurkan emosinya sesuai tahap usianya.",
      },
      {
        judul: "Aturan dan konsistensi",
        teks: "Menyusun batasan yang jelas dan cara menerapkannya secara konsisten oleh semua pengasuh.",
      },
      {
        judul: "Situasi belajar dan sekolah",
        teks: "Kebiasaan belajar, relasi dengan guru dan teman, serta dukungan yang bisa diberikan di rumah.",
      },
      {
        judul: "Relasi antar anggota keluarga",
        teks: "Dinamika dengan saudara kandung dan peran masing-masing orang tua dalam pengasuhan.",
      },
      {
        judul: "Kebutuhan pemeriksaan lanjutan",
        teks: "Penjelasan bila hasil sesi mengarah pada pemeriksaan psikologi yang lebih terstruktur.",
      },
      {
        judul: "Rencana tindak lanjut",
        teks: "Langkah konkret yang bisa dijalankan keluarga setelah sesi berakhir.",
      },
    ],
  },
  manfaat: {
    heading: "Apa yang Dapat Diperoleh Keluarga",
    intro:
      "Hasil setiap keluarga berbeda dan bergantung pada situasi masing-masing. Konsultasi dapat membantu dalam hal-hal berikut.",
    items: [
      "Memahami apa yang sedang dialami anak dengan sudut pandang yang lebih jernih.",
      "Membedakan hal yang wajar pada tahap perkembangan dari hal yang perlu pendampingan lebih lanjut.",
      "Mendapatkan strategi pengasuhan yang lebih spesifik untuk kondisi anak Anda.",
      "Mengurangi rasa bersalah dan kebingungan yang sering menyertai orang tua.",
      "Menyamakan cara pandang antar orang tua dan pengasuh di rumah.",
      "Mengetahui pilihan tindak lanjut, termasuk pemeriksaan psikologi bila memang dibutuhkan.",
    ],
  },
  proses: {
    heading: "Bagaimana Prosesnya?",
    items: [
      {
        judul: "Sampaikan kebutuhan Anda",
        teks: "Hubungi kami melalui formulir kontak atau WhatsApp dan ceritakan singkat situasi anak.",
      },
      {
        judul: "Penjadwalan sesi",
        teks: "Kami bantu arahkan ke psikolog yang relevan serta menentukan format sesi online atau tatap muka.",
      },
      {
        judul: "Sesi bersama psikolog",
        teks: "Psikolog menggali gambaran keseharian anak bersama orang tua, dan melibatkan anak sesuai kesiapannya.",
      },
      {
        judul: "Rencana tindak lanjut",
        teks: "Psikolog menyampaikan pemahaman yang diperoleh serta langkah lanjutan yang bisa dipertimbangkan.",
      },
    ],
  },
  mode: {
    heading: "Online atau Tatap Muka?",
    online: [
      "Praktis bagi orang tua dengan jadwal padat atau berada di luar Sidoarjo.",
      "Cocok untuk sesi konsultasi orang tua dan diskusi tindak lanjut.",
      "Membutuhkan ruang yang tenang dan privat selama sesi berlangsung.",
    ],
    tatapMuka: [
      "Memungkinkan psikolog mengamati anak secara langsung.",
      "Umumnya lebih sesuai untuk anak usia dini dan pemeriksaan yang terstruktur.",
      "Berlokasi di kantor Talenta Mulia, Sidoarjo, terjangkau dari Surabaya dan sekitarnya.",
    ],
    catatan:
      "Format sesi ditentukan bersama setelah kebutuhan anak dipahami. Detail sesi akan dikonfirmasi saat booking.",
  },
  psikolog: {
    heading: "Psikolog yang Dapat Mendampingi",
    intro:
      "Penugasan psikolog disesuaikan dengan kebutuhan anak dan keluarga Anda.",
    ids: [...PSIKOLOG],
  },
  faq: {
    heading: "Pertanyaan yang Sering Diajukan",
    items: [
      {
        q: "Mulai usia berapa anak bisa dibawa ke psikolog?",
        a: "Tidak ada batas usia baku. Pada anak usia dini, sesi awal umumnya lebih banyak dilakukan bersama orang tua, sedangkan anak yang lebih besar dapat terlibat langsung sesuai kesiapannya.",
      },
      {
        q: "Apakah anak saya akan langsung didiagnosis?",
        a: "Tidak. Sesi konsultasi bertujuan memahami situasi anak. Bila diperlukan pemeriksaan yang lebih terstruktur, psikolog akan menjelaskan alasan dan pilihannya lebih dulu kepada orang tua.",
      },
      {
        q: "Apakah orang tua harus ikut dalam sesi?",
        a: "Pada sebagian besar kasus ya, karena orang tua adalah sumber informasi utama sekaligus bagian dari proses pendampingan sehari-hari.",
      },
      {
        q: "Berapa biaya dan berapa lama satu sesi?",
        a: "Detail sesi, termasuk durasi dan biaya, akan dikonfirmasi saat booking sesuai layanan yang dibutuhkan.",
      },
      {
        q: "Berapa kali sesi yang dibutuhkan?",
        a: "Jumlah sesi berbeda pada setiap keluarga. Sebagian merasa cukup dengan beberapa sesi, sebagian membutuhkan pendampingan yang lebih panjang.",
      },
      {
        q: "Apakah bisa konsultasi tanpa membawa anak terlebih dahulu?",
        a: "Bisa. Banyak orang tua memulai dengan sesi konsultasi sendiri untuk memetakan situasi sebelum melibatkan anak.",
      },
      {
        q: "Apakah sesi bersifat rahasia?",
        a: KERAHASIAAN_NOTE,
      },
      {
        q: "Apakah melayani anak dari Surabaya dan kota sekitarnya?",
        a: "Ya. Kantor kami berada di Sidoarjo dan dapat dijangkau dari Surabaya serta sekitarnya. Sesi online juga tersedia bagi yang berada lebih jauh.",
      },
      {
        q: "Apakah sekolah bisa mengajukan pendampingan?",
        a: "Bisa. Talenta Mulia memiliki layanan pendampingan sekolah dan lembaga yang dapat didiskusikan melalui halaman kontak.",
      },
      {
        q: "Bagaimana jika anak menolak bertemu psikolog?",
        a: "Penolakan adalah hal yang wajar. Sampaikan kondisi ini saat menghubungi kami agar pendekatan sesi dapat disesuaikan, misalnya dimulai dari sesi bersama orang tua.",
      },
    ],
  },
  catatan: {
    heading: "Catatan Penting",
    paragraphs: [
      "Layanan ini bukan layanan gawat darurat. Bila anak berada dalam kondisi yang membahayakan keselamatan dirinya atau orang lain, segera hubungi layanan kesehatan terdekat atau unit gawat darurat rumah sakit.",
      "Informasi di halaman ini bersifat umum dan tidak menggantikan pemeriksaan langsung oleh profesional. Setiap kesimpulan mengenai kondisi anak hanya dapat diambil melalui proses pemeriksaan yang sesuai.",
    ],
  },
  terkait: {
    heading: "Layanan & Halaman Terkait",
    items: [
      {
        title: "Parenting & Anak",
        teks: "Pendampingan pengasuhan untuk kebutuhan sehari-hari orang tua dan anak.",
        to: "/layanan/$slug",
        params: { slug: "parenting-anak" },
      },
      {
        title: "Pemeriksaan Psikologi Perkembangan",
        teks: "Relevan bila dibutuhkan pemeriksaan terstruktur mengenai tahap perkembangan anak.",
        to: "/layanan/$slug",
        params: { slug: "pemeriksaan-psikologi-perkembangan" },
      },
      {
        title: "Pendampingan ABK",
        teks: "Untuk keluarga dengan anak berkebutuhan khusus yang memerlukan pendampingan berkelanjutan.",
        to: "/layanan/$slug",
        params: { slug: "pendampingan-abk" },
      },
      {
        title: "Konseling Remaja",
        teks: "Bila anak Anda memasuki usia remaja dengan kebutuhan yang berbeda.",
        to: "/layanan/$slug",
        params: { slug: "konseling-remaja" },
      },
      {
        title: "Tes Minat Bakat",
        teks: "Membantu anak dan remaja memilih jurusan serta arah pendidikan.",
        to: "/tes-minat-bakat",
      },
      {
        title: "Konsultasi Psikolog Online",
        teks: "Bila Anda ingin memulai sesi secara daring dari rumah.",
        to: "/konsultasi-psikolog-online",
      },
    ],
  },
  cta: {
    heading: "Diskusikan Kebutuhan Anak Anda Bersama Psikolog",
    teks: "Ceritakan situasi anak Anda, dan kami bantu arahkan ke psikolog yang relevan. Sesi tersedia online maupun tatap muka di Sidoarjo.",
  },
};

export const Route = createFileRoute("/psikolog-anak")({
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
      jsonLd(breadcrumbSchema([{ name: "Psikolog Anak", path: PATH }])),
      jsonLd(webPageSchema({ name: TITLE, description: DESCRIPTION, path: PATH })),
      jsonLd(
        serviceSchema({
          name: "Konsultasi Psikolog Anak",
          description:
            "Layanan konsultasi psikolog anak Talenta Mulia untuk perkembangan, emosi, perilaku, dan kesulitan belajar, tersedia online maupun tatap muka di Sidoarjo, Jawa Timur.",
          path: PATH,
          serviceType: "Konsultasi Psikologi Anak",
          providerPeople: [...PSIKOLOG],
          offerings: [
            { name: "Parenting & Anak", path: "/layanan/parenting-anak" },
            {
              name: "Pemeriksaan Psikologi Perkembangan",
              path: "/layanan/pemeriksaan-psikologi-perkembangan",
            },
            { name: "Pendampingan ABK", path: "/layanan/pendampingan-abk" },
          ],
        }),
      ),
    ],
  }),
  component: () => <SeoLandingPage config={config} />,
});

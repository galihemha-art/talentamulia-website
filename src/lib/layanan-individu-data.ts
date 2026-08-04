export type LayananIndividuDetail = {
  slug: string;
  nama: string;
  subjudul: string;
  untukSiapa: string;
  yangDidapat: string[];
  /** Optional callout under the hero. */
  catatan?: { tone: "warning" | "info"; text: string };
};

export const KERAHASIAAN_NOTE =
  "Seluruh sesi bersifat rahasia dan mengikuti kode etik profesi psikologi.";

export const LAYANAN_INDIVIDU: Record<string, LayananIndividuDetail> = {
  "konseling-psikologis": {
    slug: "konseling-psikologis",
    nama: "Konseling Psikologis",
    subjudul:
      "Sesi konseling dengan psikolog bersertifikat untuk berbagai kebutuhan personal — online maupun tatap muka.",
    untukSiapa:
      "Layanan ini terbuka bagi siapa saja yang ingin bicara dengan profesional mengenai masalah pribadi, emosi yang sulit dikelola, atau pengambilan keputusan hidup. Anda tidak perlu menunggu kondisi menjadi berat untuk mulai berkonsultasi.",
    yangDidapat: [
      "Ruang aman untuk bercerita tanpa dihakimi",
      "Strategi menghadapi masalah yang lebih jelas dan terarah",
      "Dukungan berkelanjutan sesuai kebutuhan Anda",
    ],
  },
  "konseling-pernikahan": {
    slug: "konseling-pernikahan",
    nama: "Konseling Pernikahan",
    subjudul:
      "Pendampingan untuk pasangan yang ingin memperbaiki komunikasi dan mengatasi konflik rumah tangga.",
    untukSiapa:
      "Ditujukan bagi pasangan menikah yang sedang menghadapi konflik, ingin memperkuat hubungan, atau tengah mempertimbangkan langkah besar dalam pernikahan. Sesi dapat diikuti berdua maupun bergantian sesuai kesiapan masing-masing.",
    yangDidapat: [
      "Ruang netral agar kedua pihak sama-sama didengar",
      "Pola komunikasi yang lebih sehat dalam keseharian",
      "Strategi konkret menghadapi masalah bersama",
    ],
  },
  "parenting-anak": {
    slug: "parenting-anak",
    nama: "Parenting & Anak",
    subjudul:
      "Dukungan psikologis untuk orang tua dalam mendampingi tumbuh kembang dan perilaku anak.",
    untukSiapa:
      "Untuk orang tua yang sedang menghadapi tantangan pengasuhan, kebingungan menghadapi perilaku anak, atau ingin memahami tahapan tumbuh kembang anak dengan lebih baik.",
    yangDidapat: [
      "Pemahaman pola asuh yang sesuai karakter anak",
      "Strategi praktis menghadapi perilaku sulit",
      "Dukungan tanpa menghakimi kemampuan Anda sebagai orang tua",
    ],
  },
  "konseling-remaja": {
    slug: "konseling-remaja",
    nama: "Konseling Remaja",
    subjudul:
      "Pendampingan psikologis untuk remaja menghadapi tekanan akademik, sosial, dan emosional.",
    untukSiapa:
      "Untuk remaja dan keluarga yang menghadapi persoalan kepercayaan diri, tekanan sekolah, dinamika pergaulan, atau emosi yang sulit diungkapkan kepada orang terdekat.",
    yangDidapat: [
      "Ruang bicara yang aman dan setara bagi remaja",
      "Strategi mengelola emosi dan tekanan sehari-hari",
      "Keterlibatan orang tua sesuai kebutuhan dan kesepakatan",
    ],
  },
  hipnoterapi: {
    slug: "hipnoterapi",
    nama: "Hipnoterapi",
    subjudul:
      "Terapi hipnoterapi klinis bersertifikat untuk mengatasi kebiasaan, trauma ringan, dan blokade emosional.",
    untukSiapa:
      "Untuk individu yang ingin melepaskan kebiasaan yang tidak diinginkan, meredakan kecemasan, atau mengurai blokade emosional yang sulit diatasi hanya dengan pendekatan sadar.",
    yangDidapat: [
      "Sesi terpandu oleh psikolog bersertifikat hipnoterapi — bukan hiburan panggung",
      "Pendekatan yang aman dan berbasis etika klinis",
      "Rencana sesi yang disesuaikan dengan kondisi dan tujuan Anda",
    ],
  },
  "trauma-healing": {
    slug: "trauma-healing",
    nama: "Trauma Healing",
    subjudul: "Pendampingan pemulihan bagi individu yang mengalami peristiwa traumatis.",
    untukSiapa:
      "Untuk individu yang pernah mengalami kejadian traumatis seperti kehilangan, kekerasan, kecelakaan, atau bencana, dan merasakan dampaknya masih membekas hingga kini.",
    yangDidapat: [
      "Pendampingan pemulihan yang bertahap, mengikuti kesiapan Anda",
      "Teknik SEFT dan pendekatan berbasis bukti lainnya",
      "Ruang aman tanpa tekanan untuk bercerita",
    ],
  },
  "stres-kecemasan": {
    slug: "stres-kecemasan",
    nama: "Stres & Kecemasan",
    subjudul: "Penanganan psikologis untuk stres kerja, kecemasan berlebih, dan burnout.",
    untukSiapa:
      "Untuk profesional dan individu yang merasa kewalahan oleh tekanan pekerjaan maupun kehidupan, mengalami kesulitan tidur, atau merasa cemas berlebihan tanpa sebab yang jelas.",
    yangDidapat: [
      "Identifikasi pemicu stres yang sesungguhnya",
      "Teknik manajemen stres yang praktis dan bisa langsung dipakai",
      "Pendampingan berkelanjutan bila diperlukan",
    ],
  },
  "dukungan-depresi": {
    slug: "dukungan-depresi",
    nama: "Dukungan Depresi",
    subjudul: "Pendampingan psikologis bagi individu dengan gejala depresi ringan hingga sedang.",
    untukSiapa:
      "Untuk individu yang merasakan gejala depresi seperti kehilangan minat pada hal-hal yang dulu disukai, energi yang terus rendah, atau perasaan putus asa yang berkepanjangan.",
    yangDidapat: [
      "Asesmen awal untuk memahami kondisi Anda",
      "Pendampingan psikologis rutin dengan psikolog",
      "Rujukan ke psikiater atau tenaga medis bila diperlukan",
    ],
    catatan: {
      tone: "warning",
      text: "Layanan ini adalah pendampingan psikologis, bukan layanan gawat darurat. Jika Anda atau seseorang yang Anda kenal memiliki pikiran untuk menyakiti diri sendiri, segera hubungi layanan gawat darurat terdekat atau psikiater/rumah sakit jiwa terdekat.",
    },
  },
  "pendampingan-abk": {
    slug: "pendampingan-abk",
    nama: "Pendampingan ABK",
    subjudul: "Pendampingan psikologis bagi anak berkebutuhan khusus (ABK) dan keluarganya.",
    untukSiapa:
      "Untuk orang tua dengan anak yang terindikasi atau telah terdiagnosis kebutuhan khusus — autism spectrum, ADHD, keterlambatan perkembangan, dan lainnya — serta sekolah yang membutuhkan pendampingan bagi siswa ABK.",
    yangDidapat: [
      "Asesmen awal kebutuhan anak",
      "Pendampingan psikologis rutin untuk anak",
      "Edukasi dan pendampingan untuk orang tua",
      "Koordinasi dengan sekolah atau terapis lain bila diperlukan",
    ],
    catatan: {
      tone: "info",
      text: "Talenta Mulia memberikan pendampingan psikologis dan koordinasi. Untuk terapi medis, okupasi, atau wicara yang bersifat spesifik, kami akan merujuk ke tenaga profesional atau klinik yang sesuai.",
    },
  },
};

export const LAYANAN_INDIVIDU_LIST = [
  "konseling-psikologis",
  "konseling-pernikahan",
  "parenting-anak",
  "konseling-remaja",
  "hipnoterapi",
  "trauma-healing",
  "stres-kecemasan",
  "dukungan-depresi",
  "pendampingan-abk",
] as const;

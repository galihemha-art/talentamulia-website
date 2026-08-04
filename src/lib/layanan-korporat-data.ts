export type LayananDetail = {
  slug: string;
  nama: string;
  subjudul: string;
  ringkasan: string;
  /** Optional sentence with an inline internal link appended to the summary. */
  ringkasanLink?: { before: string; label: string; to: string; after: string };
  tantangan: string[];
  pendekatan: string;
  ruangLingkup: string[];
  untukSiapa: string[];
  kenapaKami: string[];
};

export const FAQ_KORPORAT: { q: string; a: string }[] = [
  {
    q: "Berapa lama satu proyek konsultasi berjalan?",
    a: "Bergantung cakupan. Proyek fokus biasanya 4–8 minggu, sedangkan pendampingan menyeluruh berjalan 3–6 bulan dengan tahapan dan target yang disepakati di awal.",
  },
  {
    q: "Apakah layanan dapat disesuaikan?",
    a: "Ya. Seluruh rancangan disusun setelah sesi pemetaan kebutuhan, sehingga metode, instrumen, dan jadwal menyesuaikan konteks organisasi Anda — bukan paket siap pakai.",
  },
  {
    q: "Bagaimana kerahasiaan data dijaga?",
    a: "Kami terikat kode etik profesi psikologi dan perjanjian kerahasiaan (NDA). Data individu hanya dilaporkan sesuai kesepakatan dan disimpan dengan akses terbatas.",
  },
  {
    q: "Apakah Talenta Mulia mendampingi sampai tahap implementasi?",
    a: "Ya. Kami tidak berhenti pada rekomendasi; tim kami mendampingi penerapan hingga sistem berjalan dan dikuasai tim internal Anda.",
  },
  {
    q: "Apakah layanan tersedia di luar Surabaya?",
    a: "Tersedia. Kami melayani klien di seluruh Indonesia melalui kombinasi kunjungan lapangan dan sesi daring.",
  },
];

export const LAYANAN_KORPORAT: Record<string, LayananDetail> = {
  "konsultasi-hr": {
    slug: "konsultasi-hr",
    nama: "Konsultasi HR",
    subjudul:
      "Pendampingan strategi dan sistem sumber daya manusia untuk organisasi agar selaras dengan sasaran bisnis.",
    ringkasan:
      "Konsultasi HR Talenta Mulia membantu organisasi menata strategi dan sistem sumber daya manusia — mulai dari struktur, manajemen kinerja, hingga jalur karier — agar setiap keputusan tentang manusia menopang sasaran bisnis yang ingin dicapai.",
    tantangan: [
      "Struktur organisasi belum selaras dengan strategi",
      "Sistem kinerja belum terukur secara objektif",
      "Perputaran karyawan tinggi pada posisi kunci",
      "Jalur karier dan suksesi belum terpetakan",
    ],
    pendekatan:
      "Kami memadukan analisis organisasi, praktik HR berbasis bukti, dan pendampingan implementasi bersama tim internal Anda.",
    ruangLingkup: [
      "Desain Organisasi",
      "Manajemen Talenta",
      "Sistem Kinerja",
      "Remunerasi",
      "Budaya Organisasi",
      "Pendampingan HR",
    ],
    untukSiapa: [
      "Perusahaan manufaktur yang menata struktur dan produktivitas tenaga kerja",
      "BUMN dan instansi pemerintah yang perlu sistem SDM yang dapat diaudit",
      "Rumah sakit dan institusi kesehatan dengan tenaga profesional beragam",
      "Perusahaan yang bertumbuh cepat dan mulai kehilangan kejelasan peran",
    ],
    kenapaKami: [
      "Tim konsultan lintas disiplin: psikolog, praktisi HR senior, dan profesional kesehatan",
      "Pendekatan berbasis data, bukan template siap pakai",
      "Berpengalaman lintas sektor manufaktur, kesehatan, pendidikan, pemerintahan, perbankan",
      "Pendampingan implementasi hingga sistem berjalan di tangan tim internal",
    ],
  },
  "konsultasi-organisasi": {
    slug: "konsultasi-organisasi",
    nama: "Konsultasi Organisasi",
    subjudul:
      "Pendampingan pengembangan organisasi secara menyeluruh — budaya kerja, perubahan organisasi, dan efektivitas tim kepemimpinan.",
    ringkasan:
      "Konsultasi Organisasi menempatkan manusia sebagai inti dari perubahan: kami membantu organisasi membaca kondisi budayanya, mengelola transisi, dan memperkuat efektivitas tim kepemimpinan.",
    ringkasanLink: {
      before: "Berbeda dengan ",
      label: "Konsultasi HR",
      to: "/layanan/konsultasi-hr",
      after:
        " yang berfokus pada sistem & struktur SDM, Konsultasi Organisasi berfokus pada budaya, perubahan, dan efektivitas tim secara menyeluruh.",
    },
    tantangan: [
      "Perubahan organisasi (restrukturisasi, merger, ekspansi) tanpa pendampingan psikologis-organisasi",
      "Budaya kerja tidak selaras dengan strategi bisnis",
      "Efektivitas tim manajemen puncak perlu dievaluasi",
      "Resistensi karyawan terhadap perubahan",
    ],
    pendekatan:
      "Diagnosis organisasi (survei budaya, wawancara, observasi), intervensi perubahan yang terukur, dan pendampingan implementasi.",
    ruangLingkup: [
      "Diagnosis budaya & efektivitas organisasi",
      "Pendampingan manajemen perubahan (change management)",
      "Evaluasi efektivitas tim manajemen puncak",
      "Rancangan intervensi budaya kerja",
    ],
    untukSiapa: [
      "Organisasi yang menghadapi restrukturisasi atau merger",
      "Perusahaan yang ingin mentransformasi budaya kerja",
      "Manajemen puncak yang butuh evaluasi efektivitas tim",
    ],
    kenapaKami: [
      "Pendekatan psikologi organisasi berbasis data, bukan sekadar workshop motivasi",
      "Tim lintas disiplin: psikolog, executive coach, dan konsultan organisasi",
      "Pengalaman lintas sektor korporat, kesehatan, pendidikan, dan pemerintahan",
    ],
  },
  "asesmen-psikologi": {
    slug: "asesmen-psikologi",
    nama: "Assessment Psikologi",
    subjudul:
      "Pengukuran psikologis berbasis bukti ilmiah untuk rekrutmen, promosi, dan pemetaan potensi oleh psikolog bersertifikat.",
    ringkasan:
      "Assessment Psikologi memberi organisasi dasar objektif untuk keputusan tentang manusia — dari seleksi kandidat hingga pemetaan potensi karyawan — melalui instrumen tervalidasi yang diinterpretasi psikolog bersertifikat.",
    tantangan: [
      "Keputusan rekrutmen/promosi sering berbasis subjektivitas",
      "Risiko salah pilih kandidat/karyawan pada posisi penting",
      "Tidak ada data objektif untuk membandingkan kandidat",
      "Kebutuhan hasil psikotes formal untuk keperluan administratif",
    ],
    pendekatan:
      "Kombinasi tes psikologi tervalidasi dan wawancara oleh psikolog bersertifikat, disesuaikan kebutuhan posisi.",
    ruangLingkup: [
      "Tes inteligensi & kemampuan kognitif",
      "Tes kepribadian & minat kerja",
      "Wawancara psikologi",
      "Laporan hasil psikologi resmi",
    ],
    untukSiapa: [
      "Perusahaan yang melakukan rekrutmen dan seleksi karyawan",
      "Organisasi yang butuh dasar objektif untuk promosi dan mutasi",
      "Instansi yang membutuhkan hasil psikotes formal",
    ],
    kenapaKami: [
      "Psikolog berizin SIPP HIMPSI",
      "Alat ukur tervalidasi dan terstandar",
      "Laporan dapat digunakan untuk keperluan administratif resmi",
    ],
  },
  "assessment-center": {
    slug: "assessment-center",
    nama: "Assessment Center",
    subjudul:
      "Simulasi berbasis kompetensi dengan asesor bersertifikat untuk seleksi, promosi, dan perencanaan suksesi.",
    ringkasan:
      "Assessment Center menilai kompetensi kepemimpinan melalui simulasi situasi kerja nyata, sehingga organisasi memiliki bukti perilaku — bukan sekadar kesan wawancara — sebelum menempatkan seseorang pada posisi kunci.",
    tantangan: [
      "Keputusan promosi ke level manajerial berisiko tinggi tanpa data simulasi nyata",
      "Kompetensi kepemimpinan sulit dinilai hanya lewat wawancara",
      "Kebutuhan objektivitas dalam seleksi program suksesi",
      "Investasi pengembangan pemimpin butuh basis data yang kuat",
    ],
    pendekatan:
      "Simulasi berbasis kompetensi (in-basket, role play, group discussion) yang dinilai asesor bersertifikat.",
    ruangLingkup: [
      "Simulasi in-basket & studi kasus",
      "Role play & diskusi kelompok",
      "Wawancara berbasis kompetensi",
      "Laporan hasil assessment center",
    ],
    untukSiapa: [
      "Perusahaan yang menyeleksi calon manajer dan pemimpin",
      "Organisasi yang menjalankan program suksesi",
      "Institusi yang butuh basis objektif promosi jabatan struktural",
    ],
    kenapaKami: [
      "Asesor bersertifikat dengan pengalaman lintas sektor",
      "Metode simulasi, bukan sekadar tes tertulis",
      "Hasil actionable untuk pengembangan individu",
    ],
  },
};

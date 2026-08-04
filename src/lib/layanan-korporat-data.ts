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
  "pemetaan-talenta": {
    slug: "pemetaan-talenta",
    nama: "Pemetaan Talenta",
    subjudul:
      "Memetakan potensi, kompetensi, dan kesiapan karyawan untuk keputusan promosi dan suksesi yang tepat sasaran.",
    ringkasan:
      "Pemetaan Talenta membantu organisasi mengenali siapa yang siap naik, siapa yang perlu dikembangkan, dan di mana risiko kekosongan posisi kunci berada — sehingga keputusan promosi dan suksesi berdiri di atas data, bukan asumsi.",
    tantangan: [
      "Promosi sering berbasis senioritas bukan kompetensi",
      "Posisi kunci tidak punya kandidat pengganti",
      "Potensi karyawan tersembunyi tidak terpetakan",
      "Keputusan pengembangan SDM kurang berbasis data",
    ],
    pendekatan:
      "Kombinasi psikotes, wawancara kompetensi, dan analisis data kinerja untuk menghasilkan peta talenta 9-box yang actionable.",
    ruangLingkup: [
      "Pemetaan 9-Box (kinerja x potensi)",
      "Profil kompetensi individu",
      "Rekomendasi jalur pengembangan",
      "Input untuk perencanaan suksesi",
    ],
    untukSiapa: [
      "Perusahaan yang menyusun rencana suksesi",
      "Organisasi yang ingin objektif dalam promosi",
      "HR yang butuh basis data pengembangan SDM",
    ],
    kenapaKami: [
      "Metode tervalidasi, bukan formulir generik",
      "Hasil actionable, bukan sekadar laporan",
      "Tim psikolog bersertifikat",
    ],
  },
  "executive-coaching": {
    slug: "executive-coaching",
    nama: "Executive Coaching",
    subjudul:
      "Coaching satu-lawan-satu bersertifikat ICF PCC untuk pemimpin dan talenta berpotensi tinggi.",
    ringkasan:
      "Executive Coaching memberi pemimpin ruang reflektif yang terstruktur untuk mengasah cara berpikir, mengambil keputusan, dan memimpin orang — dengan pendampingan coach bersertifikat ICF PCC yang berorientasi pada hasil nyata di tempat kerja.",
    tantangan: [
      "Pemimpin baru kesulitan beradaptasi dengan peran lebih besar",
      "Blind spot kepemimpinan tidak disadari",
      "Tekanan performa tinggi tanpa ruang refleksi",
      "Suksesor perlu dipersiapkan sebelum naik jabatan",
    ],
    pendekatan:
      "Sesi coaching individual terstruktur, berbasis tujuan yang disepakati bersama atasan/HR, dengan evaluasi progres berkala.",
    ruangLingkup: [
      "Coaching kepemimpinan eksekutif",
      "Coaching transisi jabatan",
      "Coaching kesiapan suksesi",
      "Coaching keseimbangan kerja-kehidupan pemimpin",
    ],
    untukSiapa: [
      "Direksi dan senior leader",
      "Talenta berpotensi tinggi (high-potential)",
      "Pemimpin yang baru naik jabatan",
    ],
    kenapaKami: [
      "Coach bersertifikat ICF PCC (ACTC)",
      "Pengalaman 20+ tahun di bidang HR dan pengembangan organisasi",
      "Pendekatan rahasia dan berorientasi hasil",
    ],
  },
  "team-coaching": {
    slug: "team-coaching",
    nama: "Team Coaching",
    subjudul: "Penguatan kolaborasi dan kinerja tim melalui pendekatan coaching kelompok.",
    ringkasan:
      "Team Coaching bekerja pada pola interaksi tim — bagaimana anggota berkomunikasi, menyelesaikan perbedaan, dan menyepakati cara kerja bersama — sehingga tim bergerak sebagai satu kesatuan, bukan kumpulan individu yang saling menunggu.",
    tantangan: [
      "Silo antar divisi menghambat kolaborasi",
      "Konflik tim tidak terselesaikan tuntas",
      "Tim baru hasil merger/reorganisasi belum solid",
      "Komunikasi lintas fungsi lemah",
    ],
    pendekatan:
      "Sesi coaching kelompok terfasilitasi untuk membangun kesepakatan kerja tim, memperbaiki pola komunikasi, dan menyelaraskan tujuan bersama.",
    ruangLingkup: [
      "Diagnosis dinamika tim",
      "Fasilitasi team charter/kesepakatan kerja",
      "Sesi resolusi konflik tim",
      "Pendampingan pasca-merger/reorganisasi",
    ],
    untukSiapa: [
      "Tim lintas fungsi yang perlu keselarasan",
      "Tim hasil merger, akuisisi, atau reorganisasi",
      "Leadership team yang ingin memperkuat kekompakan",
    ],
    kenapaKami: [
      "Fasilitator berpengalaman menangani dinamika tim organisasi kompleks",
      "Pendekatan netral dan berbasis proses, bukan menghakimi individu",
    ],
  },
  "kesejahteraan-karyawan": {
    slug: "kesejahteraan-karyawan",
    nama: "Kesejahteraan Karyawan",
    subjudul:
      "Program bantuan karyawan (EAP), skrining kesehatan mental, dan pencegahan burnout di tempat kerja.",
    ringkasan:
      "Program kesejahteraan karyawan Talenta Mulia menyediakan saluran dukungan psikologis yang rahasia dan mudah diakses, dipadukan dengan skrining berkala serta pelatihan manajer lini agar organisasi mampu mencegah burnout sebelum berdampak pada kinerja.",
    tantangan: [
      "Burnout dan stres kerja meningkatkan turnover",
      "Karyawan enggan mencari bantuan psikologis karena stigma",
      "Tidak ada saluran dukungan kesehatan mental di tempat kerja",
      "Produktivitas menurun akibat masalah pribadi karyawan yang tidak tertangani",
    ],
    pendekatan:
      "Layanan konseling rahasia untuk karyawan, skrining kesehatan mental berkala, dan pelatihan awareness untuk manajer lini.",
    ruangLingkup: [
      "Employee Assistance Program (EAP)",
      "Skrining kesehatan mental karyawan",
      "Pelatihan awareness burnout untuk manajer",
      "Hotline/konseling rahasia karyawan",
    ],
    untukSiapa: [
      "Perusahaan dengan tingkat stres kerja tinggi",
      "Organisasi yang ingin menekan turnover",
      "HR yang membangun budaya peduli kesehatan mental",
    ],
    kenapaKami: [
      "Kerahasiaan terjamin sesuai kode etik psikologi",
      "Kombinasi psikolog dan tenaga medis dalam satu program",
      "Pendekatan preventif, bukan hanya reaktif",
    ],
  },
  "medical-wellness": {
    slug: "medical-wellness",
    nama: "Medical Wellness",
    subjudul:
      "Layanan kesehatan medis korporat: medical check-up eksekutif, edukasi kesehatan, dan program wellness karyawan.",
    ringkasan:
      "Medical Wellness menghadirkan sisi medis dalam program kesejahteraan korporat — pemeriksaan kesehatan yang ditindaklanjuti, edukasi gaya hidup, dan wellness berkelanjutan yang terhubung dengan layanan psikologi kami.",
    tantangan: [
      "Karyawan senior/eksekutif jarang medical check-up rutin",
      "Risiko penyakit tidak menular meningkat di usia produktif",
      "Program wellness perusahaan sering seremonial tanpa tindak lanjut medis",
      "Kurang integrasi kesehatan fisik dan mental karyawan",
    ],
    pendekatan:
      "Kombinasi pemeriksaan medis, edukasi kesehatan, dan program wellness berkelanjutan yang dipandu konsultan kepemimpinan medis.",
    ruangLingkup: [
      "Medical check-up eksekutif",
      "Edukasi kesehatan & gaya hidup",
      "Program wellness berkala",
      "Integrasi kesehatan fisik-mental karyawan",
    ],
    untukSiapa: [
      "Korporat yang ingin program wellness bermakna medis",
      "Eksekutif dan karyawan senior",
      "Perusahaan yang mempersiapkan karyawan menjelang pensiun",
    ],
    kenapaKami: [
      "Dipandu langsung oleh dokter spesialis dengan pengalaman manajemen rumah sakit",
      "Terintegrasi dengan program psikologi, bukan berdiri sendiri",
    ],
  },
  "pelatihan-kepemimpinan": {
    slug: "pelatihan-kepemimpinan",
    nama: "Pengembangan Kepemimpinan",
    subjudul:
      "Program pengembangan kepemimpinan dan manajemen yang dirancang sesuai kebutuhan level serta budaya organisasi.",
    ringkasan:
      "Program pengembangan kepemimpinan kami dirancang berdasarkan level jabatan dan budaya organisasi Anda, lalu dilanjutkan dengan pendampingan penerapan agar perilaku kepemimpinan benar-benar berubah di lapangan.",
    tantangan: [
      "Pemimpin baru (first-time manager) belum siap secara kompetensi",
      "Gaya kepemimpinan tidak konsisten antar level manajer",
      "Program leadership development sering seremonial tanpa tindak lanjut",
      "Kebutuhan penyelarasan budaya kepemimpinan dengan strategi bisnis",
    ],
    pendekatan:
      "Kombinasi pelatihan klasikal, praktik terbimbing, dan pendampingan pasca-pelatihan agar perubahan perilaku benar-benar terjadi.",
    ruangLingkup: [
      "Program leadership untuk first-time manager",
      "Program leadership untuk middle-senior manager",
      "Akademi kepemimpinan (multi-modul)",
      "Pendampingan penerapan pasca-pelatihan",
    ],
    untukSiapa: [
      "Perusahaan yang mempersiapkan jalur kepemimpinan",
      "Organisasi yang ingin menyelaraskan gaya kepemimpinan antar level",
      "Institusi yang menjalankan transformasi budaya",
    ],
    kenapaKami: [
      "Dirancang sesuai level dan budaya organisasi, bukan template generik",
      "Ada pendampingan penerapan, bukan hanya pelatihan satu hari",
      "Tim fasilitator berpengalaman lintas sektor",
    ],
  },
};

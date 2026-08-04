export type PemeriksaanDetail = {
  slug: string;
  nama: string;
  subjudul: string;
  apaItu: string;
  untukSiapa: string[];
  metode: string;
  yangDiterima: string;
  catatan?: string;
  terkait: { label: string; slug: string }[];
};

export const PEMERIKSAAN_PSIKOLOGI: Record<string, PemeriksaanDetail> = {
  "pemeriksaan-psikologi-industri": {
    slug: "pemeriksaan-psikologi-industri",
    nama: "Pemeriksaan Psikologi Industri & Organisasi",
    subjudul:
      "Pemeriksaan psikologi untuk kebutuhan organisasi — seleksi, promosi, dan pemetaan potensi karyawan.",
    apaItu:
      "Pemeriksaan psikologi bidang industri & organisasi (PIO) mengukur kemampuan kognitif, kepribadian, dan minat-bakat kerja seseorang dalam konteks pekerjaan atau jabatan tertentu.",
    untukSiapa: [
      "Perusahaan yang melakukan rekrutmen atau seleksi karyawan",
      "Organisasi yang butuh dasar objektif untuk promosi dan mutasi",
      "Instansi yang membutuhkan hasil psikotes formal untuk keperluan administratif",
    ],
    metode:
      "Tes inteligensi, tes kepribadian, tes minat-bakat kerja, dan wawancara psikologi, disesuaikan dengan kebutuhan posisi atau jabatan.",
    yangDiterima:
      "Laporan hasil pemeriksaan psikologi resmi yang ditandatangani psikolog berizin SIPP, dapat digunakan untuk keperluan administratif perusahaan maupun instansi.",
    terkait: [
      { label: "Assessment Center", slug: "assessment-center" },
      { label: "Pemetaan Talenta", slug: "pemetaan-talenta" },
    ],
  },
  "pemeriksaan-psikologi-klinis": {
    slug: "pemeriksaan-psikologi-klinis",
    nama: "Pemeriksaan Psikologi Klinis",
    subjudul:
      "Pemeriksaan psikologi untuk kebutuhan diagnostik dan penanganan kondisi psikologis individu.",
    apaItu:
      "Pemeriksaan yang membantu memahami kondisi psikologis, gangguan emosi, atau kebutuhan penanganan klinis seseorang secara mendalam.",
    untukSiapa: [
      "Individu yang butuh pemeriksaan psikologis formal untuk keperluan medis atau terapi",
      "Rujukan dari dokter atau psikiater",
      "Kebutuhan surat keterangan psikologi untuk keperluan administratif",
    ],
    metode: "Wawancara klinis, tes kepribadian dan proyektif, serta tes kognitif sesuai indikasi.",
    yangDiterima:
      "Laporan hasil pemeriksaan psikologi klinis yang ditandatangani psikolog berizin SIPP, beserta rekomendasi penanganan atau rujukan bila diperlukan.",
    catatan:
      "Bila ditemukan indikasi yang memerlukan penanganan psikiatri, klien akan dirujuk ke tenaga medis yang sesuai.",
    terkait: [
      { label: "Konseling Psikologis", slug: "konseling-psikologis" },
      { label: "Dukungan Depresi", slug: "dukungan-depresi" },
    ],
  },
  "pemeriksaan-psikologi-pendidikan": {
    slug: "pemeriksaan-psikologi-pendidikan",
    nama: "Pemeriksaan Psikologi Pendidikan",
    subjudul:
      "Pemeriksaan psikologi untuk kesiapan sekolah, penempatan program, dan pemetaan kemampuan belajar.",
    apaItu:
      "Pemeriksaan yang membantu memetakan kemampuan belajar, kesiapan sekolah, dan kebutuhan penempatan pendidikan yang sesuai untuk anak atau pelajar.",
    untukSiapa: [
      "Orang tua yang ingin mengetahui kesiapan sekolah dan potensi belajar anak",
      "Sekolah yang butuh pemetaan siswa untuk penjurusan atau penempatan kelas",
      "Pelajar yang membutuhkan surat keterangan psikologi untuk keperluan pendidikan",
    ],
    metode: "Tes inteligensi, tes kesiapan sekolah, dan tes minat-bakat akademik.",
    yangDiterima:
      "Laporan hasil psikologi pendidikan yang ditandatangani psikolog berizin SIPP, dilengkapi rekomendasi penempatan atau penanganan akademik.",
    terkait: [
      { label: "Parenting & Anak", slug: "parenting-anak" },
      { label: "Pendampingan Sekolah & Perusahaan", slug: "pendampingan-sekolah-perusahaan" },
    ],
  },
  "pemeriksaan-psikologi-perkembangan": {
    slug: "pemeriksaan-psikologi-perkembangan",
    nama: "Pemeriksaan Psikologi Perkembangan",
    subjudul:
      "Pemeriksaan tumbuh kembang anak sesuai tahapan usia, termasuk deteksi dini kebutuhan khusus.",
    apaItu:
      "Pemeriksaan yang memantau kesesuaian tumbuh kembang anak dengan tahapan usianya, termasuk deteksi dini keterlambatan perkembangan.",
    untukSiapa: [
      "Orang tua yang ingin memantau tumbuh kembang anak",
      "Kebutuhan deteksi dini keterlambatan perkembangan",
      "Kebutuhan surat keterangan psikologi perkembangan untuk keperluan administratif",
    ],
    metode:
      "Observasi perkembangan, tes perkembangan sesuai usia, dan wawancara orang tua atau pengasuh.",
    yangDiterima:
      "Laporan hasil pemeriksaan psikologi perkembangan yang ditandatangani psikolog berizin SIPP, dilengkapi rekomendasi stimulasi atau rujukan bila diperlukan.",
    terkait: [
      { label: "Pendampingan ABK", slug: "pendampingan-abk" },
      { label: "Parenting & Anak", slug: "parenting-anak" },
    ],
  },
};

export type IndustriDetail = {
  slug: string;
  nama: string;
  subjudul: string;
  tantangan: string[];
  pendekatan: string;
  layananRelevan: { label: string; to: string }[];
  palingDibutuhkan: string[];
  kenapaKami: string[];
};

export const FAQ_INDUSTRI = [
  {
    q: "Apakah pendekatan disesuaikan dengan regulasi sektor ini?",
    a: "Ya. Setiap program kami rancang mengikuti konteks regulasi, standar, dan tata kelola yang berlaku di sektor Anda, sehingga hasilnya dapat langsung digunakan untuk kebutuhan internal maupun kepatuhan.",
  },
  {
    q: "Berapa lama satu program biasanya berjalan?",
    a: "Bergantung ruang lingkup. Asesmen dan pelatihan singkat dapat selesai dalam 1–4 minggu, sementara program pendampingan atau pengembangan kepemimpinan umumnya berjalan 3–12 bulan dengan evaluasi berkala.",
  },
  {
    q: "Apakah tersedia sesi online?",
    a: "Tersedia. Kami melayani sesi daring, luring di lokasi Anda, maupun kombinasi keduanya — menyesuaikan jadwal operasional dan sebaran lokasi tim Anda.",
  },
  {
    q: "Bagaimana kerahasiaan data dijaga?",
    a: "Seluruh data individu diperlakukan rahasia sesuai kode etik psikologi. Laporan organisasi disajikan dalam bentuk agregat, dan data personal hanya dibuka atas persetujuan pihak yang bersangkutan.",
  },
  {
    q: "Apakah bisa mulai dari skala kecil/pilot terlebih dahulu?",
    a: "Bisa. Banyak klien memulai dengan pilot pada satu unit, departemen, atau angkatan tertentu, lalu memperluas cakupan setelah melihat hasil dan dampaknya.",
  },
];

export const INDUSTRI_DETAIL: IndustriDetail[] = [
  {
    slug: "manufaktur",
    nama: "Manufaktur",
    subjudul:
      "Dukungan psikologi industri, asesmen, dan pengembangan kepemimpinan untuk pabrik dan operasi produksi multi-shift.",
    tantangan: [
      "Turnover operator tinggi.",
      "Insiden K3 berulang.",
      "Supervisor lini kurang siap memimpin tim shift.",
      "Produktivitas tidak merata antar shift.",
    ],
    pendekatan:
      "Kami mulai dari pemetaan kondisi nyata di lantai produksi — data turnover, insiden, dan profil tenaga kerja — lalu merancang intervensi bertahap: seleksi berbasis asesmen, penguatan kapasitas supervisor lini, dan pembentukan budaya kerja yang aman dan disiplin. Setiap program disusun agar tidak mengganggu jadwal shift dan dapat diukur dampaknya pada indikator operasional.",
    layananRelevan: [
      { label: "Konsultasi HR", to: "/layanan/konsultasi-hr" },
      { label: "Assessment Psikologi", to: "/layanan/asesmen-psikologi" },
      { label: "Assessment Center", to: "/layanan/assessment-center" },
      { label: "Pengembangan Kepemimpinan", to: "/layanan/pelatihan-kepemimpinan" },
    ],
    palingDibutuhkan: [
      "Seleksi operator berbasis asesmen.",
      "Penguatan kepemimpinan supervisor/leader shift.",
      "Program budaya K3 & disiplin kerja.",
      "Persiapan pensiun karyawan senior pabrik.",
    ],
    kenapaKami: [
      "Paham konteks operasional shift & K3.",
      "Tim lintas disiplin psikolog–medis–coach.",
      "Berbasis data, bukan template generik.",
      "Pengalaman menangani tenaga kerja skala besar multi-shift.",
    ],
  },
  {
    slug: "kesehatan",
    nama: "Kesehatan (Rumah Sakit)",
    subjudul:
      "Pendampingan tata kelola, kepemimpinan klinis, dan kesejahteraan tenaga kesehatan untuk rumah sakit dan fasilitas layanan kesehatan.",
    tantangan: [
      "Tuntutan akreditasi yang ketat.",
      "Risiko burnout tenaga medis & perawat.",
      "Service excellence ke pasien belum konsisten.",
      "Kepemimpinan kepala ruangan/unit belum merata.",
    ],
    pendekatan:
      "Kami memadukan perspektif medis dan psikologis dalam satu tim: memahami standar akreditasi dan tata kelola klinis, sekaligus menjaga kondisi mental tenaga kesehatan yang menjalankannya. Program dirancang mengikuti ritme kerja rumah sakit — sesi singkat, berkelanjutan, dan terhubung langsung dengan indikator mutu pelayanan.",
    layananRelevan: [
      { label: "Konsultasi Kesehatan", to: "/kesehatan" },
      { label: "Kesejahteraan Karyawan", to: "/layanan/kesejahteraan-karyawan" },
      { label: "Pengembangan Kepemimpinan", to: "/layanan/pelatihan-kepemimpinan" },
      { label: "Assessment Psikologi", to: "/layanan/asesmen-psikologi" },
    ],
    palingDibutuhkan: [
      "Pendampingan akreditasi & tata kelola klinis.",
      "Program pencegahan burnout tenaga kesehatan.",
      "Pelatihan service excellence staf pelayanan pasien.",
      "Coaching kepemimpinan kepala unit/ruangan.",
    ],
    kenapaKami: [
      "Dipimpin konsultan kepemimpinan medis dengan latar praktik & manajemen rumah sakit langsung.",
      "Memahami bahasa dan regulasi sektor kesehatan.",
      "Kombinasi psikologi + medis dalam satu tim.",
    ],
  },
  {
    slug: "pendidikan",
    nama: "Pendidikan (Sekolah & Universitas)",
    subjudul:
      "Pemetaan potensi siswa, penguatan kompetensi pendidik, dan layanan konseling untuk institusi pendidikan formal.",
    tantangan: [
      "Pemetaan minat & bakat siswa belum objektif.",
      "Guru/dosen butuh penguatan kompetensi mengajar.",
      "Layanan bimbingan konseling terbatas.",
      "Kesehatan mental siswa/mahasiswa kurang termonitor.",
    ],
    pendekatan:
      "Kami bekerja pada dua sisi sekaligus: institusi dan individu. Untuk institusi, kami memperkuat kapasitas guru, dosen, dan pimpinan sekolah. Untuk peserta didik, kami menyediakan asesmen potensi dan layanan konseling yang aman dan rahasia. Seluruh instrumen yang kami gunakan berbasis bukti ilmiah dan ditafsirkan oleh psikolog bersertifikat.",
    layananRelevan: [
      { label: "Pemeriksaan Psikologi Pendidikan", to: "/layanan/pemeriksaan-psikologi-pendidikan" },
      { label: "Pengembangan Kepemimpinan", to: "/layanan/pelatihan-kepemimpinan" },
      { label: "Konsultasi HR", to: "/layanan/konsultasi-hr" },
      { label: "Pendampingan Sekolah & Perusahaan", to: "/layanan/pendampingan-sekolah-perusahaan" },
    ],
    palingDibutuhkan: [
      "Tes minat bakat & pemetaan potensi siswa.",
      "Pelatihan kompetensi mengajar & manajemen kelas.",
      "Layanan konseling psikologis siswa/mahasiswa.",
      "Coaching kepemimpinan kepala sekolah/rektorat.",
    ],
    kenapaKami: [
      "Pendekatan berbasis bukti ilmiah dari psikolog bersertifikat.",
      "Memahami konteks institusi pendidikan formal.",
      "Menjangkau kebutuhan institusi maupun individu siswa/orang tua.",
    ],
  },
  {
    slug: "pemerintahan",
    nama: "Pemerintahan",
    subjudul:
      "Assessment center, pemetaan kompetensi jabatan, dan penguatan kepemimpinan pelayanan publik untuk instansi pemerintah.",
    tantangan: [
      "Pemetaan kompetensi jabatan ASN belum terstandarisasi.",
      "Kebutuhan assessment center untuk promosi/mutasi.",
      "Kepemimpinan pelayanan publik perlu penguatan.",
      "ASN senior mendekati pensiun perlu persiapan.",
    ],
    pendekatan:
      "Kami menempatkan objektivitas sebagai prinsip utama: metode asesmen terstandar, asesor independen, dan laporan yang dapat dipertanggungjawabkan untuk keperluan promosi maupun mutasi. Pelaksanaan dapat mengikuti skema kemitraan, narasumber, atau pengadaan sesuai kebutuhan administrasi instansi.",
    layananRelevan: [
      { label: "Assessment Center", to: "/layanan/assessment-center" },
      { label: "Konsultasi HR", to: "/layanan/konsultasi-hr" },
      { label: "Pengembangan Kepemimpinan", to: "/layanan/pelatihan-kepemimpinan" },
      { label: "Program MPP", to: "/program/mpp" },
    ],
    palingDibutuhkan: [
      "Assessment center untuk promosi/mutasi jabatan struktural.",
      "Pemetaan kompetensi jabatan.",
      "Pelatihan kepemimpinan pelayanan publik.",
      "Program masa persiapan pensiun ASN.",
    ],
    kenapaKami: [
      "Memahami kerangka tata kelola birokrasi.",
      "Metode asesmen netral dan objektif.",
      "Fleksibel bekerja lewat skema kemitraan/narasumber sesuai kebutuhan instansi.",
    ],
  },
  {
    slug: "perbankan",
    nama: "Perbankan",
    subjudul:
      "Asesmen integritas, penguatan layanan nasabah, dan pengembangan kepemimpinan cabang untuk institusi keuangan.",
    tantangan: [
      "Kebutuhan asesmen integritas & manajemen risiko pegawai.",
      "Konsistensi kualitas layanan nasabah/frontliner.",
      "Kepemimpinan pemimpin cabang perlu penguatan.",
      "Tekanan target & burnout staf front office.",
    ],
    pendekatan:
      "Kami menggabungkan asesmen tervalidasi untuk memetakan integritas dan profil risiko pegawai dengan program pengembangan yang menjaga performa tanpa mengorbankan kesehatan mental. Rancangan program memperhitungkan tekanan target, regulasi kepatuhan, dan standar layanan yang berlaku di industri perbankan.",
    layananRelevan: [
      { label: "Assessment Psikologi", to: "/layanan/asesmen-psikologi" },
      { label: "Assessment Center", to: "/layanan/assessment-center" },
      { label: "Pengembangan Kepemimpinan", to: "/layanan/pelatihan-kepemimpinan" },
      { label: "Konsultasi HR", to: "/layanan/konsultasi-hr" },
    ],
    palingDibutuhkan: [
      "Asesmen integritas & profil risiko pegawai.",
      "Pelatihan service excellence tim frontliner.",
      "Coaching kepemimpinan pemimpin cabang.",
      "Program kesejahteraan & pencegahan burnout staf.",
    ],
    kenapaKami: [
      "Pendekatan asesmen objektif dan tervalidasi.",
      "Memahami tekanan target & regulasi ketat sektor perbankan.",
      "Tim bersertifikat ICF & psikolog klinis.",
    ],
  },
];

export function getIndustriDetail(slug: string) {
  return INDUSTRI_DETAIL.find((i) => i.slug === slug);
}

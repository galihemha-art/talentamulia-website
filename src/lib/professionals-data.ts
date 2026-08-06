import maulidah from "@/assets/Maulidah_Muflichah.webp";
import andiani from "@/assets/Dr_Andiani.webp";
import eka from "@/assets/Eka_Rachmawaty.webp";
import mamluatul from "@/assets/Mamluatul_Khoiriyah.webp";
import hilda from "@/assets/Hilda_Rosa_Ainiyah.webp";
import type { AuthorId } from "@/lib/authors";

export type Professional = {
  id: AuthorId;
  photo: string;
  name: string;
  role: string;
  desc: string;
  /** Pills shown under the name; falls back to keahlian */
  tags?: string[];
  /** Professional Timeline */
  timeline: { periode: string; judul: string; detail?: string }[];
  /** Certification */
  sertifikasi: string[];
  /** Books */
  buku: { judul: string; catatan?: string }[];
  /** Speaking Experience */
  speaking: string[];
  /** Areas of Expertise */
  keahlian: string[];
  /** Publications */
  publikasi: string[];
  /** Related service slugs, rendered as /layanan/<slug> */
  layanan: { slug: string; title: string }[];
};

export const PROFESSIONALS: Professional[] = [
  {
    id: "maulidah",
    photo: maulidah,
    name: "Maulidah Muflichah, M.Psi., Psikolog., CHt.",
    role: "Founder · Psikolog Utama · Certified Hypnotherapist",
    desc: "Founder Talenta Mulia dengan keahlian mendalam di psikologi klinis, terapi keluarga, konseling pernikahan, dan hipnoterapi bersertifikat.",
    tags: [
      "Psikologi Klinis",
      "Terapi Keluarga",
      "Konseling Pernikahan",
      "Hipnoterapi",
      "Psikoterapi Islami",
    ],
    timeline: [
      {
        periode: "2007–2014",
        judul: "Psikolog Pusat Terapan Psikologi Pendidikan UNAIR Surabaya",
        detail:
          "Turut aktif sebagai psikolog di Qur'anic Science Club Surabaya (2009–2011) dan Psikolog Expert Jakarta (2009–2013).",
      },
      {
        periode: "2009–2019",
        judul: "Dosen Psikologi, UIN Sunan Ampel Surabaya",
        detail: "Mengajar mata kuliah Akhlak Tasawuf dan Psikoterapi (2016–2019).",
      },
      {
        periode: "2019–sekarang",
        judul: "Founder & Psikolog, Talenta Mulia",
        detail:
          "Mendirikan dan memimpin praktik psikologi Talenta Mulia di Sidoarjo, sekaligus narasumber tetap program Mozaik, Radio Suara Muslim Surabaya, sejak 2019.",
      },
      {
        periode: "2025–sekarang",
        judul: "Psikolog Sekolah, SD Kreatif Insan Rabbani Sidoarjo",
      },
    ],
    sertifikasi: [
      "Certified Family Therapy — Pendekatan Virginia Satir",
      "Certified Marital Counselor",
      "Certified Forgiveness Therapy",
      "Certified Hypnotherapist (CHt.)",
      "Member, TEMPA Trainers Guild (TTG)",
    ],
    buku: [],
    speaking: [
      "Narasumber tetap program Mozaik, Radio Suara Muslim Surabaya (2019–sekarang)",
    ],
    keahlian: [
      "Psikologi Klinis",
      "Terapi Keluarga (Virginia Satir)",
      "Konseling Pernikahan",
      "Hipnoterapi Bersertifikat",
    ],
    publikasi: [],
    layanan: [
      { slug: "konseling-psikologis", title: "Konseling Psikologis" },
      { slug: "konseling-pernikahan", title: "Konseling Pernikahan" },
      { slug: "hipnoterapi", title: "Hipnoterapi" },
      { slug: "kesejahteraan-karyawan", title: "Kesejahteraan Karyawan" },
    ],
  },
  {
    id: "andiani",
    photo: andiani,
    name: "Dr. dr. Hj. Andiani, M.Kes., Sp.KKLP., FISCH, FISPM, CHt., CEFHLM",
    role: "Konsultan Kepemimpinan Medis & Kesehatan",
    desc: "Berpengalaman dalam manajemen dan akreditasi rumah sakit, tata kelola klinis, serta kepemimpinan mutu pelayanan kesehatan.",
    tags: [
      "Manajemen & Akreditasi Rumah Sakit",
      "Tata Kelola Klinis",
      "Epidemiologi & Kesehatan Masyarakat",
      "Mutu Pelayanan Kesehatan",
    ],
    timeline: [
      {
        periode: "2009–2017",
        judul: "Kepala Pelayanan Medis, RS Bhayangkara Pusdik Brimob Watukosek",
        detail:
          "Turut menjabat Ketua Komite Medik RS (2009–2012) dan Ketua Tim Mutu RS (2010–2014).",
      },
      {
        periode: "2018–2023",
        judul: "Kabag Epidemiologi, FK Universitas Wijaya Kusuma Surabaya",
        detail:
          "Memimpin persiapan akreditasi dan asesmen internal rumah sakit sekaligus mengajar di FK UWKS.",
      },
      {
        periode: "2022–sekarang",
        judul: "Surveyor Akreditasi, LARS & LAMFI",
        detail:
          "Ketua Bidang Akreditasi FKTP dan Surveior Akreditasi di Lembaga Akreditasi Mutu Fasyankes Indonesia (LAMFI), serta Surveyor Akreditasi Rumah Sakit di LARS.",
      },
      {
        periode: "2024–2027",
        judul: "Wakil Direktur Pelayanan Medis & Keperawatan, RSI Siti Hajar Sidoarjo",
        detail:
          "Turut menjabat Direktur LAFARSI (2025–sekarang) dan Dosen FK Universitas Trunojoyo Madura (2025–sekarang).",
      },
    ],
    sertifikasi: ["Sp.KKLP.", "FISCH", "FISPM", "CHt.", "CEFHLM"],
    buku: [
      { judul: "Epidemiologi Dasar untuk Mahasiswa Kesehatan dan Kedokteran" },
      { judul: "Membangun Kesehatan di Negara Kepulauan" },
      { judul: "Caregiver Kanker dan Penyakit Kronis" },
      { judul: "Bioetika dalam Sistem JKN" },
      { judul: "Epidemiologi dan Tata Kelola Kegawatdaruratan dalam Sistem JKN" },
    ],
    speaking: [
      'Narasumber Symposium Nasional "Mutu dan Akreditasi Tempat Praktik Dokter" (PDK3MI-IDI)',
      'Narasumber "Kesiapan Rumah Sakit Menghadapi Akreditasi: Penyusunan Borang dan Telusur Akreditasi Standar Nasional Akreditasi Rumah Sakit Edisi 1"',
      "Narasumber The 2nd International Conference on Health Technology and Sustainable Risk Management (ICOHAP)",
    ],
    keahlian: [
      "Manajemen & Akreditasi Rumah Sakit",
      "Tata Kelola Klinis",
      "Epidemiologi & Kesehatan Masyarakat",
      "Mutu Pelayanan Kesehatan",
    ],
    publikasi: [],
    layanan: [
      { slug: "medical-wellness", title: "Medical Wellness" },
      { slug: "kesejahteraan-karyawan", title: "Kesejahteraan Karyawan" },
      { slug: "konsultasi-organisasi", title: "Konsultasi Organisasi" },
    ],
  },
  {
    id: "eka",
    photo: eka,
    name: "Eka Rachmawaty, M.M., PCC",
    role: "Konsultan Pengembangan Kepemimpinan & Organisasi · ICF PCC",
    desc: "Professional Certified Coach (ICF PCC) yang berspesialisasi dalam executive coaching, pengembangan kepemimpinan, talent management, dan pengembangan organisasi.",
    timeline: [
      {
        periode: "1998–2009",
        judul:
          "HR Generalist hingga Assistant HR Manager, PT ECCO Indonesia & ECCO Tannery Indonesia",
        detail:
          "Mengelola rekrutmen, competency framework, dan implementasi sistem SAP HR, termasuk struktur remunerasi berbasis metodologi Mercer.",
      },
      {
        periode: "2010–2016",
        judul: "Associate Trainer & Consultant, Marion Human Capital Centre",
        detail:
          "Turut memimpin fungsi HRD & General Affairs di PT Nilam Port Terminal Indonesia (2014) dan PT Berhasil Indonesia Gemilang (2016).",
      },
      {
        periode: "2017–2023",
        judul: "Associate Coach & Mentor, PT Akselerasi Indonesia",
        detail:
          "Mendampingi pimpinan, manajer, dan talenta kunci melalui leadership coaching 1:1 dan team coaching.",
      },
      {
        periode: "2024–sekarang",
        judul: "Leadership Coach & Trainer, Professional Certified Coach (ICF PCC)",
        detail:
          "Lebih dari 1.000 jam coaching mendampingi eksekutif, manajer, dan pimpinan sekolah.",
      },
    ],
    sertifikasi: [
      "Professional Certified Coach (PCC) — International Coaching Federation (ICF)",
      "Advanced Certification in Team Coaching (ACTC) — ICF",
      "ICF PCC Marker Assessor",
    ],
    buku: [],
    speaking: [
      "Merancang dan memfasilitasi workshop, cohort-based learning, serta action learning untuk pengembangan kepemimpinan organisasi",
    ],
    keahlian: [
      "Leadership Development",
      "Organization Development",
      "Executive & Team Coaching",
      "Strategic HR & Talent Systems",
    ],
    publikasi: [],
    layanan: [
      { slug: "executive-coaching", title: "Executive Coaching" },
      { slug: "team-coaching", title: "Team Coaching" },
      { slug: "assessment-center", title: "Assessment Center" },
      { slug: "pemetaan-talenta", title: "Pemetaan Talenta" },
    ],
  },
  {
    id: "mamluatul",
    photo: mamluatul,
    name: "Mamluatul Khoiriyah, M.Psi., Psikolog",
    role: "Psikolog Senior",
    desc: "Psikolog senior yang fokus pada kesehatan mental, trauma healing, forgiveness dan terapi SEFT, parenting, dan psikologi komunitas.",
    timeline: [
      {
        periode: "2010–2012",
        judul: "Guru BK, SDIT Insan Kamil Sidoarjo & SMP Plus Amanah Tasikmalaya",
      },
      {
        periode: "2012–2017",
        judul: "Psikolog, Dinas Kesehatan Kota Surabaya",
        detail: "Turut menjadi Konselor HIV dan Tim Assessment Terpadu BNNK (2015–2017).",
      },
      {
        periode: "2016–sekarang",
        judul: "Terapis, Konselor & SEFT Healing Trainer",
        detail:
          "Juga Dosen Luar Biasa Fakultas Ushuluddin dan Filsafat UIN Sunan Ampel Surabaya (2019–2021) dan Bendahara I Yayasan Kreativitas Membangun se-Indonesia (2020–sekarang).",
      },
      {
        periode: "2022–sekarang",
        judul: "Psikolog, Talenta Mulia, PT Graha Green Indonesia & Insight Consultant",
      },
    ],
    sertifikasi: [
      "Certified SEFT Total Solution Training",
      "Certified Forgiveness Therapy",
      "Certified Grapho for Success",
      "TOT SEFT for Healing",
    ],
    buku: [],
    speaking: [
      "Training SEFT for Healing untuk tenaga psikologi Dinas Kesehatan Kota Surabaya, masyarakat umum, dan guru TK/SD di berbagai kota (2017–2019)",
      "Narasumber program Posyandu Remaja, Surabaya (2017–2021)",
      "Parenting & seminar kesehatan mental di berbagai sekolah dan komunitas (2018–2026)",
    ],
    keahlian: [
      "Kesehatan Mental",
      "Trauma Healing & SEFT",
      "Konseling Remaja & Parenting",
      "Terapi Keluarga (Virginia Satir)",
    ],
    publikasi: [],
    layanan: [
      { slug: "trauma-healing", title: "Trauma Healing" },
      { slug: "konseling-remaja", title: "Konseling Remaja" },
      { slug: "parenting-anak", title: "Parenting & Anak" },
      { slug: "pendampingan-abk", title: "Pendampingan ABK" },
    ],
  },
  {
    id: "hilda",
    photo: hilda,
    name: "Hilda Rosa Ainiyah, S.Psi., M.Psi., Psikolog",
    role: "Psikolog Klinis",
    desc: "Psikolog klinis dan akademisi yang berbasis di Malang, dengan fokus keahlian pada penanganan dampak pengalaman masa kecil (ACEs), konseling hubungan dan kesiapan pranikah, serta eksplorasi diri. Aktif dalam penelitian dan pengabdian masyarakat terkait kesehatan mental, termasuk pelatihan asertif untuk penanganan bullying remaja dan positive parenting.",
    timeline: [
      {
        periode: "2014–2016",
        judul: "Asisten Laboratorium, Unit Layanan dan Laboratorium Psikologi UNS",
      },
      {
        periode: "2018–2020",
        judul:
          "Asisten Psikolog & Konselor, Poliklinik Psikologi RS Airlangga & Unit Pelayanan Psikologi UNAIR",
      },
      {
        periode: "2021–2023",
        judul: "Program Leader & Homeroom PIC, Sekolah Cikal Surabaya",
      },
      {
        periode: "2023–sekarang",
        judul:
          "Psikolog Klinis, UPT-PPA Kota Malang & ITN Malang; Dosen Fakultas Psikologi Universitas Negeri Malang",
      },
    ],
    sertifikasi: [
      "Psikolog (Surat Izin Praktik Psikologi \u2014 HIMPSI)",
      "Member, Himpunan Psikologi Indonesia (HIMPSI) & Ikatan Psikolog Klinis Indonesia",
    ],
    buku: [],
    speaking: [
      "Pelatihan asertif untuk penanganan bullying remaja",
      "Kelas positive parenting untuk sekolah dan komunitas",
    ],
    keahlian: [
      "Psikologi Klinis",
      "Dampak Pengalaman Masa Kecil (ACEs)",
      "Konseling Hubungan & Kesiapan Pranikah",
      "Eksplorasi Diri",
      "Kesehatan Mental Remaja",
    ],
    publikasi: [
      'Jurnal Psikostudia Vol. 9 No. 2 (2020): "Efektivitas Pelatihan Asertif Sebagai Upaya Mengatasi Perilaku Bullying di SMPN A Surabaya"',
      'National Public Health Journal Vol. 16 No. 4 (2021): "The COVID-19 Pandemic: Role of Coping Humor and Internal Health Locus of Control on Social Dysfunction and Anxiety & Depression"',
    ],
    layanan: [
      { slug: "konseling-psikologis", title: "Konseling Psikologis" },
      { slug: "konseling-pernikahan", title: "Konseling Pernikahan" },
      { slug: "konseling-remaja", title: "Konseling Remaja" },
    ],
  },
];

import { PROFESSIONALS, type Professional } from "@/lib/professionals-data";
import trinovia from "@/assets/Tri_Novia.webp";

export type Tokoh = Omit<Professional, "id" | "layanan"> & {
  key: string;
  gelar: string;
  pendidikan?: string[];
};

const andiani = PROFESSIONALS.find((p) => p.id === "andiani")!;

export const TOKOH_SENTRAL: Tokoh[] = [
  {
    key: "andiani",
    photo: andiani.photo,
    name: "Dr. Hj. Andiani",
    gelar: "Dr. dr. Hj. Andiani, M.Kes., Sp.KKLP., FISCH, FISPM, CHt., CEFHLM",
    role: andiani.role,
    desc: "Memimpin arah praktik psikologi klinis & kesehatan di Talenta Mulia. Berpengalaman dalam manajemen dan akreditasi rumah sakit, tata kelola klinis, serta kepemimpinan mutu pelayanan kesehatan.",
    tags: andiani.tags,
    timeline: andiani.timeline,
    sertifikasi: andiani.sertifikasi,
    buku: andiani.buku,
    speaking: andiani.speaking,
    keahlian: andiani.keahlian,
    publikasi: [],
  },
  {
    key: "trinovia",
    photo: trinovia,
    name: "Dr. Tri Novia, S.Kep., Ners., MM., M.I.Kom",
    gelar: "Dr. Tri Novia, S.Kep., Ners., MM., M.I.Kom",
    role: "Konsultan Transformasi Pelayanan Kesehatan",
    desc: "Memimpin arah praktik transformasi layanan kesehatan di Talenta Mulia. Berpengalaman sebagai konsultan transformasi pelayanan di berbagai rumah sakit dan klinik, dengan fokus pada komunikasi efektif dan budaya service excellence.",
    tags: [
      "Transformasi Layanan Kesehatan",
      "Komunikasi & Public Speaking",
      "Service Excellence",
      "Pitching & Design Thinking",
    ],
    timeline: [
      {
        periode: "2015–2017",
        judul: "Praktisi Komunikasi & Layanan Kesehatan",
        detail:
          "Membangun rekam jejak sebagai praktisi komunikasi di sektor kesehatan, termasuk sebagai Tenaga Pendidik Program Kesehatan bersama Kementerian Kesehatan RI.",
      },
      {
        periode: "2017–sekarang",
        judul: "Founder, Indonesian Health Training Center (IHTC) & Speak Clinic",
        detail:
          "Memimpin pengembangan bisnis pelatihan soft skill khusus tenaga medis dan kesehatan sejak 2017.",
      },
      {
        periode: "2020–sekarang",
        judul:
          "Co-Creator & Mentor, CIAS Academy; Inisiator H-Talks & 1001 Solusi untuk Negeri",
        detail:
          "Membawa spesialisasi Pitching Innovative Ideas untuk perusahaan/instansi, sekaligus menginisiasi program edukasi kesehatan publik.",
      },
      {
        periode: "2023–sekarang",
        judul:
          "Konsultan Transformasi Pelayanan Rumah Sakit & Distinguished Fellow, Talenta Mulia",
        detail:
          "Mendampingi berbagai rumah sakit dan klinik dalam program transformasi pelayanan berbasis budaya organisasi, dengan fokus komunikasi efektif dan service excellence.",
      },
    ],
    pendidikan: [
      "Sarjana Keperawatan (S.Kep), Universitas Indonesia (2012–2016)",
      "Program Profesi Ners, Indonesia Maju University (2018–2019)",
      "Magister Manajemen SDM (MM), TDW Economic Business School (2018–2020)",
      "Magister Ilmu Komunikasi (M.I.Kom), Universitas Budi Luhur (2021–2023)",
      "Doktoral Ilmu Pendidikan (Dr.), UNINUS Bandung (2021–2025)",
    ],
    sertifikasi: [
      "Tenaga Program Pelatih Kesehatan (TPPK) — Kementerian Kesehatan RI",
      "Training for Trainer, Service Quality, Service Excellent — BNSP RI",
      "Praktisi Hipnoterapi Bersertifikat (Indonesian Board Hypnotherapist)",
    ],
    buku: [
      { judul: "Kitab Public Speaking, Pitching Innovation" },
      { judul: "Meningkatkan Komunikasi Guru melalui Kompetensi Kepribadian" },
    ],
    speaking: [],
    keahlian: [],
    publikasi: [],
  },
];

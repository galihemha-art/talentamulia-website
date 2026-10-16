import { PROFESSIONALS, type Professional } from "@/lib/professionals-data";
import trinovia from "@/assets/Tri_Novia.webp";

export type Tokoh = Omit<Professional, "id" | "layanan"> & {
  key: string;
  gelar: string;
  /** Hidden until the owner confirms it in writing */
  fellow: boolean;
};

const andiani = PROFESSIONALS.find((p) => p.id === "andiani")!;

export const TOKOH_SENTRAL: Tokoh[] = [
  {
    ...andiani,
    key: "andiani",
    gelar: andiani.name,
    // "Distinguished Fellow" awaits written confirmation — hidden for now.
    fellow: false,
  },
  {
    key: "trinovia",
    photo: trinovia,
    name: "Dr. Tri Novia, S.Kep., Ners., MM., M.I.Kom",
    gelar: "Dr. Tri Novia, S.Kep., Ners., MM., M.I.Kom",
    role: "Distinguished Fellow",
    mitra: true,
    fellow: true,
    desc: "Mendampingi rumah sakit dan klinik dalam transformasi layanan berbasis budaya organisasi.",
    tags: ["Transformasi Layanan Kesehatan", "Budaya Organisasi"],
    timeline: [
      { periode: "2017–sekarang", judul: "Founder, IHTC & Speak Clinic" },
      { periode: "2020–sekarang", judul: "Co-Creator & Mentor, CIAS Academy" },
      { periode: "2023–sekarang", judul: "Konsultan Transformasi Pelayanan RS" },
    ],
    pendidikan: [
      "S.Kep, Universitas Indonesia (2012–2016)",
      "Ners, STIKes Indonesia Maju (2018–2019)",
      "MM, STIE Tri Dharma Widya (2018–2020)",
      "M.I.Kom, Universitas Budi Luhur (2021–2023)",
      "Doktor Ilmu Pendidikan, Universitas Islam Nusantara",
    ],
    sertifikasi: ["Tersertifikasi TPPK, Kemenkes RI"],
    buku: [],
    speaking: [],
    keahlian: [],
    publikasi: [],
  },
];

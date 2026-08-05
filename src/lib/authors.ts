import maulidah from "@/assets/Maulidah_Muflichah.webp";
import andiani from "@/assets/Dr_Andiani.webp";
import eka from "@/assets/Eka_Rachmawaty.webp";
import mamluatul from "@/assets/Mamluatul_Khoiriyah.webp";

export type AuthorId = "maulidah" | "andiani" | "eka" | "mamluatul";

export type Author = {
  id: AuthorId;
  name: string;
  role: string;
  bio: string;
  photo: string;
  jobTitle: string;
};

export const AUTHORS: Record<AuthorId, Author> = {
  maulidah: {
    id: "maulidah",
    name: "Maulidah Muflichah, M.Psi., Psikolog., CHt.",
    role: "Founder · Psikolog Utama · Certified Hypnotherapist",
    bio: "Founder Talenta Mulia dengan keahlian mendalam di psikologi klinis, terapi keluarga, konseling pernikahan, dan hipnoterapi bersertifikat.",
    photo: maulidah,
    jobTitle: "Psikolog Klinis",
  },
  andiani: {
    id: "andiani",
    name: "Dr. dr. Hj. Andiani, M.Kes., Sp.KKLP.",
    role: "Konsultan Kepemimpinan Medis & Kesehatan",
    bio: "Wakil Direktur Pelayanan Medis & Keperawatan di RSI Siti Hajar Sidoarjo, ahli kesehatan masyarakat, akreditasi rumah sakit, dan tata kelola klinis.",
    photo: andiani,
    jobTitle: "Dokter & Konsultan Kesehatan",
  },
  eka: {
    id: "eka",
    name: "Eka Rachmawaty, M.M., PCC",
    role: "Konsultan Pengembangan Kepemimpinan & Organisasi · ICF PCC",
    bio: "Professional Certified Coach (ICF PCC) yang berspesialisasi dalam executive coaching, pengembangan kepemimpinan, talent management, dan pengembangan organisasi.",
    photo: eka,
    jobTitle: "Executive Coach",
  },
  mamluatul: {
    id: "mamluatul",
    name: "Mamluatul Khoiriyah, M.Psi., Psikolog",
    role: "Psikolog Senior",
    bio: "Psikolog senior yang fokus pada kesehatan mental, trauma healing, forgiveness dan terapi SEFT, parenting, dan psikologi komunitas.",
    photo: mamluatul,
    jobTitle: "Psikolog",
  },
};

export const AUTHOR_LIST = Object.values(AUTHORS);

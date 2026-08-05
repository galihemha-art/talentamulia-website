import korporat from "@/assets/svc-korporat.webp";
import problem from "@/assets/svc-problem.webp";
import pelatihan from "@/assets/svc-pelatihan.webp";
import coaching from "@/assets/svc-coaching.webp";
import asesmen from "@/assets/svc-asesmen.webp";
import kesehatan from "@/assets/svc-kesehatan.webp";
import individu from "@/assets/svc-individu.webp";
import tim from "@/assets/svc-tim.webp";

export const SERVICE_IMAGES = {
  korporat,
  problem,
  pelatihan,
  coaching,
  asesmen,
  kesehatan,
  individu,
  tim,
};

export type ServiceImageSet = {
  hero: string;
  heroAlt: string;
  problem: string;
  problemAlt: string;
  wide: string;
  wideAlt: string;
};

const SETS: Record<string, ServiceImageSet> = {
  korporat: {
    hero: korporat,
    heroAlt: "Konsultan Talenta Mulia memaparkan strategi kepada tim manajemen di ruang rapat",
    problem,
    problemAlt: "Manajer HR di Surabaya menelaah dokumen dan data karyawan di kantornya",
    wide: tim,
    wideAlt: "Tim profesional Talenta Mulia berdiri bersama di lobi kantor modern",
  },
  coaching: {
    hero: coaching,
    heroAlt: "Sesi executive coaching satu-satu antara coach dan eksekutif",
    problem,
    problemAlt: "Pemimpin organisasi menghadapi tumpukan keputusan di meja kerjanya",
    wide: tim,
    wideAlt: "Tim profesional Talenta Mulia berdiri bersama di lobi kantor modern",
  },
  pelatihan: {
    hero: pelatihan,
    heroAlt: "Fasilitator memandu pelatihan karyawan di ruang seminar",
    problem,
    problemAlt: "Karyawan dan manajer berdiskusi soal kesenjangan kompetensi di kantor",
    wide: korporat,
    wideAlt: "Konsultan Talenta Mulia memfasilitasi diskusi bersama klien korporat",
  },
  asesmen: {
    hero: asesmen,
    heroAlt: "Psikolog mengawasi peserta yang mengerjakan pemeriksaan psikologi",
    problem,
    problemAlt: "Tim rekrutmen menelaah berkas kandidat di ruang kerja",
    wide: korporat,
    wideAlt: "Konsultan Talenta Mulia memaparkan hasil asesmen kepada manajemen",
  },
  kesehatan: {
    hero: kesehatan,
    heroAlt: "Dokter berkonsultasi dengan karyawan di klinik modern",
    problem,
    problemAlt: "Karyawan tampak kelelahan saat bekerja di kantor",
    wide: tim,
    wideAlt: "Tim multidisiplin Talenta Mulia: psikolog, dokter, coach, dan konsultan",
  },
  individu: {
    hero: individu,
    heroAlt: "Psikolog mendengarkan klien dalam sesi konseling yang hangat",
    problem: individu,
    problemAlt: "Sesi konseling personal yang nyaman dan rahasia",
    wide: tim,
    wideAlt: "Tim profesional Talenta Mulia berdiri bersama di lobi kantor modern",
  },
};

const RULES: { match: RegExp; set: keyof typeof SETS }[] = [
  { match: /coach|kepemimpinan|leadership|pemimpin/, set: "coaching" },
  { match: /pelatihan|training|workshop|seminar|mpp|pensiun|sekolah/, set: "pelatihan" },
  { match: /asesmen|assessment|pemeriksaan|psikotes|talenta|rekrut|talent|search/, set: "asesmen" },
  { match: /kesehatan|medical|wellness|rumah-sakit|sejahtera|healthcare/, set: "kesehatan" },
  { match: /konseling|individu|parenting|remaja|pernikahan|karier|trauma/, set: "individu" },
];

/** Picks a consistent photo set for a service slug. */
export function serviceImages(slug: string, fallback: keyof typeof SETS = "korporat"): ServiceImageSet {
  const rule = RULES.find((r) => r.match.test(slug));
  return SETS[rule ? rule.set : fallback]!;
}

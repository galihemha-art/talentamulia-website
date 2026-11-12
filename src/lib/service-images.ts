import korporat from "@/assets/svc-korporat.webp";
import problem from "@/assets/svc-problem.webp";
import pelatihan from "@/assets/svc-pelatihan.webp";
import coaching from "@/assets/svc-coaching.webp";
import asesmen from "@/assets/svc-asesmen.webp";
import kesehatan from "@/assets/svc-kesehatan.webp";
import individu from "@/assets/svc-individu.webp";
import tim from "@/assets/svc-tim.webp";
import perkembanganHero from "@/assets/hero/pemeriksaan-tumbuh-kembang-anak.webp";
import perkembanganKonsultasi from "@/assets/hero/konsultasi-parenting-orang-tua.webp";
import perkembanganBermain from "@/assets/hero/psikolog-anak-bermain.webp";
import pendidikanSiswa from "@/assets/hero/pemeriksaan-psikologi-pendidikan-siswa.webp";
import pendidikanTes from "@/assets/hero/tes-minat-bakat-siswa.webp";
import pendidikanSekolah from "@/assets/hero/industri-pendidikan-sekolah.webp";
import klinisWawancara from "@/assets/hero/pemeriksaan-psikologi-klinis-wawancara.webp";
import klinisPendampingan from "@/assets/hero/dukungan-psikologis-pendampingan.webp";
import klinisKonseling from "@/assets/hero/layanan-konseling-psikologis.webp";
import industriPsikotes from "@/assets/hero/pemeriksaan-psikologi-industri-psikotes.webp";
import industriSimulasi from "@/assets/hero/assessment-center-simulasi.webp";
import industriPemetaan from "@/assets/hero/talent-mapping-nine-box.webp";

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
  perkembangan: {
    hero: perkembanganHero,
    heroAlt: "Psikolog mengamati perkembangan balita yang bermain menara cincin",
    problem: perkembanganKonsultasi,
    problemAlt: "Orang tua berkonsultasi dengan psikolog tentang tumbuh kembang anak mereka",
    wide: perkembanganBermain,
    wideAlt: "Psikolog bermain balok susun bersama anak dalam sesi stimulasi perkembangan",
  },
  pemeriksaanPendidikan: {
    hero: pendidikanSiswa,
    heroAlt: "Siswa mengikuti pemeriksaan psikologi pendidikan di kelas",
    problem: pendidikanTes,
    problemAlt: "Siswa mengerjakan tes minat bakat dan kesiapan sekolah di ruang kelas",
    wide: pendidikanSekolah,
    wideAlt: "Lingkungan sekolah tempat pemetaan siswa untuk penjurusan dilakukan",
  },
  pemeriksaanKlinis: {
    hero: klinisWawancara,
    heroAlt: "Psikolog klinis melakukan wawancara pemeriksaan dengan klien",
    problem: klinisPendampingan,
    problemAlt: "Psikolog mendampingi klien dalam sesi pemeriksaan yang hangat dan aman",
    wide: klinisKonseling,
    wideAlt: "Suasana sesi konseling psikologis yang nyaman dan rahasia",
  },
  pemeriksaanIndustri: {
    hero: industriPsikotes,
    heroAlt: "Peserta mengikuti psikotes untuk kebutuhan rekrutmen dan seleksi karyawan",
    problem: industriSimulasi,
    problemAlt: "Simulasi assessment center untuk seleksi dan promosi karyawan",
    wide: industriPemetaan,
    wideAlt: "Pemetaan talenta karyawan sebagai dasar objektif promosi dan mutasi",
  },
};

const RULES: { match: RegExp; set: keyof typeof SETS }[] = [
  { match: /perkembangan|tumbuh-kembang/, set: "perkembangan" },
  { match: /pemeriksaan-psikologi-pendidikan/, set: "pemeriksaanPendidikan" },
  { match: /pemeriksaan-psikologi-klinis/, set: "pemeriksaanKlinis" },
  { match: /pemeriksaan-psikologi-industri/, set: "pemeriksaanIndustri" },
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

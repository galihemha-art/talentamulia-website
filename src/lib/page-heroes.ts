/**
 * Central hero-image mapping: every optimised public page gets its own
 * hero photo (no two pages share an image URL). Keep this file browser-safe.
 */
import { useRouterState } from "@tanstack/react-router";
import hKonsultasi from "@/assets/hero-konsultasi.webp";
import hKorporat from "@/assets/svc-korporat.webp";
import hProblem from "@/assets/svc-problem.webp";
import hPelatihan from "@/assets/svc-pelatihan.webp";
import hCoaching from "@/assets/svc-coaching.webp";
import hAsesmen from "@/assets/svc-asesmen.webp";
import hKesehatan from "@/assets/svc-kesehatan.webp";
import hIndividu from "@/assets/svc-individu.webp";
import hTim from "@/assets/svc-tim.webp";

const generated = import.meta.glob<string>("../assets/hero/*.webp", {
  eager: true,
  import: "default",
});

function g(name: string): string {
  const src = generated[`../assets/hero/${name}.webp`];
  if (!src) throw new Error(`Missing hero image: ${name}`);
  return src;
}

export type PageHero = {
  src: string;
  alt: string;
  /** Rendered by the shared banner (page has no hero image of its own). */
  banner?: boolean;
  /** Small illustration instead of a large photo (legal pages). */
  illustration?: boolean;
};

export const PAGE_HEROES: Record<string, PageHero> = {
  // Landing page SEO
  "/konsultasi-psikolog-online": { src: hKonsultasi, alt: "Psikolog Talenta Mulia melayani konsultasi psikolog online lewat video call" },
  "/konseling-burnout": { src: g("konseling-burnout-kelelahan-kerja"), alt: "Karyawan perempuan kelelahan di meja kerja pada malam hari, gambaran burnout kerja" },
  "/konseling-pranikah": { src: g("konseling-pranikah-pasangan"), alt: "Pasangan calon pengantin berdiskusi dengan psikolog dalam sesi konseling pranikah" },
  "/konseling-keluarga": { src: g("konseling-keluarga-sesi"), alt: "Keluarga dengan dua anak mengikuti sesi konseling keluarga bersama psikolog" },
  "/psikolog-anak": { src: g("psikolog-anak-bermain"), alt: "Psikolog anak bermain balok kayu bersama anak dalam ruang bermain" },
  "/tes-minat-bakat": { src: g("tes-minat-bakat-siswa"), alt: "Siswa SMA mengerjakan tes minat bakat di kelas dengan pengawasan" },
  "/risway": { src: "", alt: "" }, // RISWAY keeps its own dedicated workforce photo
  "/program/mpp": { src: g("program-mpp-persiapan-pensiun"), alt: "Karyawan senior mengikuti workshop masa persiapan pensiun (MPP)" },

  // Layanan korporat
  "/layanan/konsultasi-hr": { src: g("konsultan-hr-perusahaan"), alt: "Konsultan HR berdiskusi dengan HR manager tentang kebijakan SDM perusahaan" },
  "/layanan/konsultasi-organisasi": { src: hProblem, alt: "Manajer menelaah data organisasi sebagai dasar konsultasi pengembangan organisasi" },
  "/layanan/asesmen-psikologi": { src: hAsesmen, alt: "Psikolog mengawasi peserta asesmen psikologi karyawan" },
  "/layanan/assessment-center": { src: g("assessment-center-simulasi"), alt: "Simulasi diskusi kelompok assessment center dengan asesor mencatat perilaku peserta" },
  "/layanan/pemetaan-talenta": { src: g("talent-mapping-nine-box"), alt: "Tim HR menyusun profil karyawan pada papan nine-box dalam sesi talent mapping" },
  "/layanan/executive-coaching": { src: hCoaching, alt: "Sesi executive coaching satu-satu antara coach dan eksekutif" },
  "/layanan/team-coaching": { src: g("team-coaching-tim"), alt: "Coach memfasilitasi team coaching dengan papan catatan tempel" },
  "/layanan/kesejahteraan-karyawan": { src: g("kesejahteraan-karyawan-kantor"), alt: "Karyawan berbincang santai di lounge kantor, program kesejahteraan karyawan" },
  "/layanan/medical-wellness": { src: g("edukasi-wellness-karyawan"), alt: "Seminar edukasi gaya hidup sehat untuk karyawan di auditorium kantor" },
  "/layanan/pelatihan-kepemimpinan": { src: g("pelatihan-kepemimpinan-manajer"), alt: "Fasilitator memandu diskusi pelatihan kepemimpinan bersama para manajer" },
  "/layanan/pendampingan-sekolah-perusahaan": { src: g("pendampingan-sekolah-guru"), alt: "Konsultan mendampingi guru dalam rapat pengembangan sekolah" },

  // Layanan individu
  "/layanan/konseling-psikologis": { src: g("layanan-konseling-psikologis"), alt: "Klien dewasa bercerita kepada psikolog dalam sesi konseling psikologis" },
  "/layanan/konseling-pernikahan": { src: g("konseling-pernikahan-suami-istri"), alt: "Psikolog menengahi pasangan suami istri dalam sesi konseling pernikahan" },
  "/layanan/parenting-anak": { src: g("konsultasi-parenting-orang-tua"), alt: "Orang tua berkonsultasi parenting sementara anak menggambar di dekatnya" },
  "/layanan/konseling-remaja": { src: g("konseling-remaja-ruang-aman"), alt: "Remaja perempuan bercerita kepada konselor dalam suasana santai" },
  "/layanan/trauma-healing": { src: g("pemulihan-trauma-tenang"), alt: "Perempuan duduk tenang di dekat jendela, gambaran proses pemulihan dari trauma" },
  "/layanan/stres-kecemasan": { src: g("konseling-stres-kecemasan-napas"), alt: "Konselor memandu latihan pernapasan untuk mengelola stres dan kecemasan" },
  "/layanan/dukungan-depresi": { src: g("dukungan-psikologis-pendampingan"), alt: "Konselor mendampingi klien dengan hangat dalam sesi dukungan psikologis" },
  "/layanan/pendampingan-abk": { src: g("pendampingan-anak-berkebutuhan-khusus"), alt: "Terapis bermain sensori bersama anak berkebutuhan khusus didampingi ibunya" },

  // Pemeriksaan psikologi & lainnya
  "/layanan/pemeriksaan-psikologi-industri": { src: g("pemeriksaan-psikologi-industri-psikotes"), alt: "Kandidat kerja mengerjakan psikotes di komputer dengan pengawasan psikolog" },
  "/layanan/pemeriksaan-psikologi-klinis": { src: g("pemeriksaan-psikologi-klinis-wawancara"), alt: "Psikolog klinis melakukan wawancara pemeriksaan psikologi dengan klien dewasa" },
  "/layanan/pemeriksaan-psikologi-pendidikan": { src: g("pemeriksaan-psikologi-pendidikan-siswa"), alt: "Siswa SD mengerjakan tes pola bersama psikolog pendidikan" },
  "/layanan/pemeriksaan-psikologi-perkembangan": { src: g("pemeriksaan-tumbuh-kembang-anak"), alt: "Psikolog mengamati perkembangan balita yang bermain menara cincin" },
  "/layanan/coaching": { src: g("coaching-karier-percakapan"), alt: "Coach dan profesional muda berjalan sambil berdiskusi dalam sesi coaching" },
  "/layanan/konsultasi-online-offline": { src: g("konsultasi-online-offline"), alt: "Pilihan konsultasi online lewat video call dan konsultasi tatap muka di kantor" },

  // Industri
  "/industri/manufaktur": { src: g("industri-manufaktur-pabrik"), alt: "Supervisor berdiskusi dengan pekerja di lantai produksi pabrik manufaktur" },
  "/industri/kesehatan": { src: g("industri-kesehatan-rumah-sakit"), alt: "Perawat dan dokter berdiskusi di nurse station rumah sakit" },
  "/industri/pendidikan": { src: g("industri-pendidikan-sekolah"), alt: "Siswa dan guru berjalan di halaman sekolah" },
  "/industri/pemerintahan": { src: g("industri-pemerintahan-instansi"), alt: "Aparatur sipil negara mengikuti rapat di aula instansi pemerintah" },
  "/industri/perbankan": { src: g("industri-perbankan-layanan"), alt: "Petugas layanan nasabah melayani nasabah di kantor cabang bank" },

  // Halaman utama & pendukung
  "/": { src: "", alt: "" }, // homepage keeps its own team-photo hero
  "/solusi-korporat": { src: hKorporat, alt: "Konsultan Talenta Mulia memaparkan strategi SDM kepada tim manajemen perusahaan", banner: true },
  "/layanan-individu": { src: hIndividu, alt: "Psikolog mendengarkan klien dalam sesi konseling individu yang hangat", banner: true },
  "/kesehatan": { src: hKesehatan, alt: "Dokter berkonsultasi dengan karyawan, layanan edukasi kesehatan Talenta Mulia", banner: true },
  "/pelatihan": { src: hPelatihan, alt: "Fasilitator memandu pelatihan pengembangan kompetensi karyawan", banner: true },
  "/program": { src: g("program-pengembangan-perencanaan"), alt: "Brosur program dan buku perencanaan program pengembangan Talenta Mulia", banner: true },
  "/industri": { src: g("sektor-industri-kota"), alt: "Pemandangan kota dengan perkantoran, pabrik, dan rumah sakit dari berbagai sektor industri", banner: true },
  "/tentang-kami": { src: hTim, alt: "Tim profesional Talenta Mulia berdiri bersama di lobi kantor", banner: true },
  "/tokoh-sentral": { src: "", alt: "" }, // portraits of the Distinguished Fellows are the hero
  "/professionals": { src: g("tim-profesional-diskusi-kasus"), alt: "Psikolog dan konsultan Talenta Mulia berdiskusi kasus di ruang rapat", banner: true },
  "/artikel": { src: g("artikel-membaca-psikologi"), alt: "Perempuan membaca artikel psikologi di tablet di sudut baca yang nyaman", banner: true },
  "/faq": { src: g("faq-tanya-jawab-layanan"), alt: "Staf layanan Talenta Mulia menjawab pertanyaan calon klien", banner: true },
  "/testimoni": { src: g("testimoni-klien-apresiasi"), alt: "Klien berjabat tangan dengan konsultan setelah sesi layanan", banner: true },
  "/kontak": { src: g("kontak-kantor-resepsionis"), alt: "Area resepsionis dan ruang tunggu kantor konsultasi", banner: true },
  "/kebijakan-privasi": { src: g("ilustrasi-kebijakan-privasi"), alt: "Ilustrasi perisai dan gembok yang melindungi data pribadi", banner: true, illustration: true },
  "/syarat-ketentuan": { src: g("ilustrasi-syarat-ketentuan"), alt: "Ilustrasi papan centang dan jabat tangan sebagai syarat dan ketentuan layanan", banner: true, illustration: true },
};

/** Industry detail pages and others without their own image also get the banner. */
for (const p of ["/industri/manufaktur", "/industri/kesehatan", "/industri/pendidikan", "/industri/pemerintahan", "/industri/perbankan", "/layanan/coaching", "/layanan/konsultasi-online-offline"]) {
  PAGE_HEROES[p] = { ...PAGE_HEROES[p]!, banner: true };
}

function normalise(path: string): string {
  const p = path.split(/[?#]/)[0]!.replace(/\/+$/, "");
  return p === "" ? "/" : p;
}

export function pageHero(path: string): PageHero | undefined {
  const hero = PAGE_HEROES[normalise(path)];
  return hero && hero.src ? hero : undefined;
}

export function usePageHero(): PageHero | undefined {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return pageHero(pathname);
}

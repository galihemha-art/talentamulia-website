import { canonicalLink, ogUrl } from "@/lib/seo";
import { breadcrumbSchema, jsonLd } from "@/lib/structured-data";
import { createFileRoute } from "@tanstack/react-router";
import { LayananDetailPage } from "@/components/site/LayananDetailPage";
import { ARTIKEL } from "@/lib/artikel-data";
import type { LayananDetail } from "@/lib/layanan-korporat-data";

const MPP: LayananDetail = {
  slug: "mpp",
  nama: "Pensiun Bahagia, Hidup Bermakna",
  subjudul:
    "Program persiapan pensiun yang menggabungkan psikologi, SEFT, dan edukasi kesehatan untuk kesiapan pensiun karyawan secara utuh.",
  ringkasan:
    "Program Masa Persiapan Pensiun (MPP) Talenta Mulia menyiapkan karyawan senior menghadapi purnabakti bukan hanya dari sisi administratif dan finansial, tetapi juga dari sisi psikologis dan kesehatan fisik. Peserta dibimbing memahami perubahan peran yang akan terjadi, melepaskan beban emosi yang menyertainya, dan menyusun rencana hidup yang realistis serta bermakna setelah masa kerja berakhir.",
  tantangan: [
    "Karyawan senior berisiko mengalami post power syndrome.",
    "Kesiapan finansial sering jadi fokus tunggal, sementara aspek psikologis & kesehatan terabaikan.",
    "Perusahaan belum punya program transisi pensiun yang komprehensif.",
    "Keluarga karyawan turut terdampak perubahan peran pasca pensiun.",
  ],
  pendekatan:
    "Program berjalan di atas tiga pilar terintegrasi. Pilar Psikologi membantu peserta menerima perubahan identitas dan peran serta menemukan makna baru. Pilar SEFT bekerja pada pelepasan emosi negatif yang terkait pensiun — kecemasan, rasa kehilangan, dan ketakutan akan masa depan. Pilar Edukasi Kesehatan membekali peserta dengan pengetahuan tentang kesehatan fisik menjelang dan pasca pensiun. Ketiganya dijalankan oleh satu tim yang sama sehingga rangkaiannya saling menopang.",
  ruangLingkup: [
    "Asesmen kesiapan psikologis pensiun",
    "Sesi SEFT pelepasan emosi",
    "Edukasi kesehatan pra-pensiun",
    "Workshop keluarga (melibatkan pasangan/anak)",
    "Pendampingan pasca-pensiun (opsional lanjutan)",
  ],
  untukSiapa: [
    "Korporat, BUMN, dan instansi pemerintah dengan karyawan senior yang mendekati masa pensiun.",
    "Individu yang akan atau baru memasuki masa pensiun, termasuk bersama pasangan.",
  ],
  kenapaKami: [
    "Psikolog dan mitra profesional dalam satu program terintegrasi.",
    "Rangkaian program dapat diperluas hingga pendampingan pasca-pensiun.",
    "Keluarga peserta dilibatkan agar transisi berjalan selaras di rumah.",
  ],
};

const FAQ_MPP = [
  {
    q: "Apa bedanya dengan program pensiun finansial biasa?",
    a: "Program pensiun finansial umumnya berhenti pada pengelolaan uang dan rencana usaha. MPP Talenta Mulia menambahkan dua hal yang justru paling menentukan kualitas hidup pascapensiun: kesiapan psikologis menghadapi perubahan peran, dan kesiapan kesehatan fisik yang dipandu langsung oleh dokter.",
  },
  {
    q: "Apakah bisa untuk individu, bukan hanya program korporat?",
    a: "Bisa. Selain paket korporat untuk angkatan karyawan, kami melayani peserta perorangan — termasuk bersama pasangan — dengan rangkaian sesi yang lebih personal dan jadwal yang fleksibel.",
  },
  {
    q: "Berapa lama durasi program?",
    a: "Paket korporat umumnya berjalan 2–3 hari intensif atau tersebar dalam beberapa minggu, sesuai jumlah peserta dan jadwal operasional. Pendampingan lanjutan pasca-pensiun dapat ditambahkan hingga 6–12 bulan.",
  },
  {
    q: "Apakah keluarga bisa dilibatkan dalam sesi?",
    a: "Sangat kami anjurkan. Tersedia workshop keluarga yang melibatkan pasangan dan anak, karena perubahan peran pascapensiun dirasakan bersama oleh seluruh anggota keluarga.",
  },
];

export const Route = createFileRoute("/program/mpp")({
  head: () => ({
    meta: [
      { title: "Program Masa Persiapan Pensiun (MPP) — Talenta Mulia Sidoarjo, Jawa Timur" },
      {
        name: "description",
        content:
          "Pensiun Bahagia, Hidup Bermakna — program MPP Talenta Mulia memadukan psikologi, SEFT, dan edukasi kesehatan untuk korporat dan individu di Jawa Timur.",
      },
      { property: "og:title", content: "Pensiun Bahagia, Hidup Bermakna — Program MPP Talenta Mulia" },
      {
        property: "og:description",
        content:
          "Program persiapan pensiun terintegrasi: psikologi, SEFT, dan edukasi kesehatan. Untuk korporat, BUMN, instansi pemerintah, dan individu.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      ogUrl("/program/mpp"),
    ],
    links: [canonicalLink("/program/mpp")],
    scripts: [
      jsonLd(
        breadcrumbSchema([
          { name: "Program", path: "/program" },
          { name: "Masa Persiapan Pensiun (MPP)", path: "/program/mpp" },
        ]),
      ),
    ],
  }),
  component: ProgramMpp,
});

function ProgramMpp() {
  const wawasan = ARTIKEL.filter((a) => a.kategori === "Masa Persiapan Pensiun").slice(0, 4);

  return (
    <LayananDetailPage
      data={MPP}
      label="Program Masa Persiapan Pensiun (MPP)"
      breadcrumb={{ label: "Program", to: "/program" }}
      ctaPrimary="Ajukan Program untuk Perusahaan"
      ctaSecondary="Konsultasi untuk Diri Sendiri"
      faq={FAQ_MPP}
      wawasan={wawasan}
    />
  );
}

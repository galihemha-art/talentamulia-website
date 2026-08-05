import { canonicalLink, ogUrl } from "@/lib/seo";
import { breadcrumbSchema, jsonLd } from "@/lib/structured-data";
import { createFileRoute, Link } from "@tanstack/react-router";

const TITLE = "Kebijakan Privasi — Talenta Mulia Sidoarjo, Jawa Timur";
const DESC =
  "Kebijakan privasi Talenta Mulia: bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi klien layanan psikologi, kesehatan, dan kepemimpinan.";

export const Route = createFileRoute("/kebijakan-privasi")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      ogUrl("/kebijakan-privasi"),
    ],
    links: [canonicalLink("/kebijakan-privasi")],
    scripts: [
      jsonLd(breadcrumbSchema([{ name: "Kebijakan Privasi", path: "/kebijakan-privasi" }])),
    ],
  }),
  component: Page,
});

const SECTIONS = [
  {
    h: "Data yang kami kumpulkan",
    p: "Kami mengumpulkan data yang Anda kirimkan melalui formulir kontak, permintaan proposal, dan pendaftaran layanan: nama, email, nomor WhatsApp, nama organisasi, serta keterangan kebutuhan layanan.",
  },
  {
    h: "Penggunaan data",
    p: "Data digunakan semata-mata untuk menindaklanjuti permintaan Anda, menyusun penawaran layanan, dan menjalankan proses asesmen, konseling, coaching, atau pelatihan yang disepakati.",
  },
  {
    h: "Kerahasiaan data psikologis dan medis",
    p: "Hasil pemeriksaan psikologi, konseling, dan konsultasi kesehatan bersifat rahasia dan hanya dibuka kepada pihak yang Anda setujui, sesuai kode etik psikologi dan kedokteran yang berlaku di Indonesia.",
  },
  {
    h: "Penyimpanan dan keamanan",
    p: "Dokumen dan catatan disimpan secara terbatas dengan akses hanya untuk profesional yang menangani kasus Anda, dan disimpan selama diperlukan untuk kepentingan layanan serta ketentuan hukum.",
  },
  {
    h: "Hak Anda",
    p: "Anda berhak meminta akses, koreksi, atau penghapusan data pribadi Anda dengan menghubungi kami melalui halaman Kontak.",
  },
];

function Page() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-20 md:py-28">
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
        <Link to="/" className="hover:text-brand-blue">
          Beranda
        </Link>
        <span className="mx-2">&gt;</span>
        <span className="text-primary">Kebijakan Privasi</span>
      </nav>

      <h1 className="mt-6 font-heading text-3xl font-bold text-primary md:text-4xl">
        Kebijakan Privasi
      </h1>
      <p className="mt-4 text-muted-foreground">
        Talenta Mulia menghormati privasi setiap klien organisasi maupun individu. Halaman ini
        menjelaskan bagaimana data Anda kami kelola.
      </p>

      <div className="mt-10 space-y-8">
        {SECTIONS.map((s) => (
          <div key={s.h}>
            <h2 className="font-heading text-lg font-semibold text-primary">{s.h}</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">{s.p}</p>
          </div>
        ))}
      </div>

      <p className="mt-12 text-sm text-muted-foreground">
        Pertanyaan tentang kebijakan ini?{" "}
        <Link to="/kontak" className="font-medium text-brand-blue hover:underline">
          Hubungi kami
        </Link>
        .
      </p>
    </section>
  );
}

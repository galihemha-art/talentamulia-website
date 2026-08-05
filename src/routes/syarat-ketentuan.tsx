import { canonicalLink, ogUrl } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";

const TITLE = "Syarat & Ketentuan — Talenta Mulia Sidoarjo, Jawa Timur";
const DESC =
  "Syarat dan ketentuan penggunaan layanan konsultasi psikologi, kesehatan, coaching, dan pelatihan Talenta Mulia di Sidoarjo, Jawa Timur.";

export const Route = createFileRoute("/syarat-ketentuan")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      ogUrl("/syarat-ketentuan"),
    ],
    links: [canonicalLink("/syarat-ketentuan")],
  }),
  component: Page,
});

const SECTIONS = [
  {
    h: "Ruang lingkup layanan",
    p: "Layanan Talenta Mulia meliputi konsultasi psikologi, asesmen, executive coaching, pengembangan kepemimpinan, medical wellness, serta pelatihan untuk organisasi dan individu.",
  },
  {
    h: "Kesepakatan kerja",
    p: "Setiap penugasan korporat dilaksanakan berdasarkan proposal dan kesepakatan tertulis yang memuat lingkup, jadwal, keluaran, dan biaya.",
  },
  {
    h: "Jadwal dan pembatalan",
    p: "Perubahan atau pembatalan sesi mohon disampaikan minimal 1x24 jam sebelum jadwal. Pembatalan mendadak dapat dihitung sebagai sesi terpakai.",
  },
  {
    h: "Batasan layanan",
    p: "Layanan kami bersifat konsultatif dan bukan pengganti tindakan gawat darurat medis maupun psikiatris. Pada kondisi darurat, segera hubungi fasilitas kesehatan terdekat.",
  },
  {
    h: "Hak kekayaan intelektual",
    p: "Materi pelatihan, instrumen asesmen, dan laporan yang kami terbitkan merupakan milik Talenta Mulia dan tidak untuk digandakan tanpa izin tertulis.",
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
        <span className="text-primary">Syarat &amp; Ketentuan</span>
      </nav>

      <h1 className="mt-6 font-heading text-3xl font-bold text-primary md:text-4xl">
        Syarat &amp; Ketentuan
      </h1>
      <p className="mt-4 text-muted-foreground">
        Ketentuan berikut berlaku untuk penggunaan situs dan layanan Talenta Mulia.
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
        Butuh penjelasan lebih lanjut?{" "}
        <Link to="/kontak" className="font-medium text-brand-blue hover:underline">
          Hubungi kami
        </Link>
        .
      </p>
    </section>
  );
}

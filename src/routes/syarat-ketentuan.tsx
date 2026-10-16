import { canonicalLink, ogUrl } from "@/lib/seo";
import { breadcrumbSchema, jsonLd } from "@/lib/structured-data";
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
    scripts: [
      jsonLd(breadcrumbSchema([{ name: "Syarat & Ketentuan", path: "/syarat-ketentuan" }])),
    ],
  }),
  component: Page,
});

const SECTIONS: { h: string; p?: string; ol?: string[] }[] = [
  {
    h: "Penyedia Layanan",
    p: "Layanan di situs ini diselenggarakan oleh PT Talenta Mulia Indonesia (merek: Talenta Mulia), badan hukum berkedudukan di Kabupaten Sidoarjo, NIB 1410260097435, beralamat di Jl. Gadung No. 05, Margomulyo, Wage, Kec. Taman, Kab. Sidoarjo, Jawa Timur 61257. Kontak resmi: info@talentamulia.co.id. Hotline: 0821-3299-0498.",
  },
  {
    h: "Ruang lingkup layanan",
    p: "Layanan Talenta Mulia meliputi konsultasi psikologi, asesmen, executive coaching, pengembangan kepemimpinan, edukasi kesehatan & wellness karyawan, serta pelatihan untuk organisasi dan individu.",
  },
  {
    h: "Tarif dan Pembayaran",
    ol: [
      "Tarif tiap layanan diberitahukan secara tertulis sebelum Anda memesan, melalui daftar tarif di situs, penawaran, atau proposal.",
      "Layanan individu: tarif per sesi atau paket sesuai penawaran. Pembayaran dilakukan sebelum sesi / paling lambat 1x24 jam sebelum sesi melalui rekening atas nama PT Talenta Mulia Indonesia: [ISI: nama bank, nomor rekening]. Mohon abaikan permintaan pembayaran ke rekening atas nama pribadi atau pihak lain.",
      "Layanan korporat dan institusi: lingkup, jadwal, keluaran, dan biaya dituangkan dalam proposal dan kesepakatan tertulis. Termin pembayaran: 50% di awal, 50% setelah laporan diserahkan.",
      "Harga belum termasuk PPN dan pajak lain sesuai peraturan yang berlaku. Bukti pembayaran dan faktur diterbitkan atas nama pemesan.",
      "Konsultasi awal gratis (jika ada) tidak mengikat kedua pihak.",
    ],
  },
  {
    h: "Pembatalan dan Pengembalian Dana",
    ol: [
      "Perubahan jadwal atau pembatalan oleh klien disampaikan paling lambat 1x24 jam sebelum jadwal. Jika disampaikan tepat waktu, sesi dijadwalkan ulang tanpa biaya tambahan atau dananya dikembalikan seluruhnya.",
      "Pembatalan kurang dari 1x24 jam sebelum jadwal, atau ketidakhadiran tanpa kabar, dapat dihitung sebagai sesi terpakai atau dikenakan sebagian biaya sesi.",
      "Jika Talenta Mulia yang membatalkan atau psikolog berhalangan, klien berhak atas jadwal ulang atau pengembalian dana penuh atas sesi yang belum dilaksanakan.",
      "Pengembalian dana dibayarkan ke rekening pembayar paling lambat 7 hari kerja sejak permintaan disetujui.",
      "Layanan yang sebagian telah dilaksanakan (misalnya tes yang sudah dikerjakan atau laporan yang sudah diterbitkan) dihitung sesuai bagian yang sudah dilaksanakan, dan sisanya dikembalikan.",
      "Untuk layanan korporat, pembatalan dan pengembalian dana mengikuti kesepakatan tertulis dalam proposal.",
      "Keluhan terkait pembayaran dapat disampaikan ke info@talentamulia.co.id dan ditanggapi paling lambat 7 hari kerja.",
    ],
  },
  {
    h: "Batasan layanan",
    p: "Layanan kami bersifat konsultatif dan bukan pengganti tindakan gawat darurat medis maupun psikiatris. Pada kondisi darurat, segera hubungi fasilitas kesehatan terdekat.",
  },
  {
    h: "Hak kekayaan intelektual",
    p: "Materi pelatihan, instrumen asesmen, dan laporan yang kami terbitkan merupakan milik PT Talenta Mulia Indonesia dan tidak untuk digandakan tanpa izin tertulis.",
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
        Ketentuan berikut berlaku untuk penggunaan situs dan layanan PT Talenta Mulia Indonesia (Talenta Mulia).
      </p>

      <div className="mt-10 space-y-8">
        {SECTIONS.map((s) => (
          <div key={s.h}>
            <h2 className="font-heading text-lg font-semibold text-primary">{s.h}</h2>
            {s.p && <p className="mt-2 leading-relaxed text-muted-foreground">{s.p}</p>}
            {s.ol && (
              <ol className="mt-2 list-decimal space-y-2 pl-5 leading-relaxed text-muted-foreground">
                {s.ol.map((li) => (
                  <li key={li}>{li}</li>
                ))}
              </ol>
            )}
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

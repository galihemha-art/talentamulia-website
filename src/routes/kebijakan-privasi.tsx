import { canonicalLink, ogUrl } from "@/lib/seo";
import { breadcrumbSchema, jsonLd } from "@/lib/structured-data";
import { createFileRoute, Link } from "@tanstack/react-router";

const TITLE = "Kebijakan Privasi — Talenta Mulia Sidoarjo, Jawa Timur";
const DESC =
  "Kebijakan privasi PT Talenta Mulia Indonesia: pengendali data, data yang dikumpulkan, tujuan, pihak ketiga, masa simpan, dan hak pemilik data.";

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
    h: "1. Pengendali data",
    p: "Pengendali data pribadi adalah PT Talenta Mulia Indonesia (merek: Talenta Mulia), beralamat di Jl. Gadung No. 05, RT 003 RW 010, Margomulyo, Wage, Kec. Taman, Kab. Sidoarjo, Jawa Timur 61257. Email privasi: [ISI: email privasi].",
  },
  {
    h: "2. Data yang kami kumpulkan",
    p: "Data yang Anda kirimkan melalui formulir kontak, newsletter, dan pendaftaran layanan: nama, email, nomor WhatsApp, nama organisasi, jenis layanan, isi pesan, serta waktu Anda memberikan persetujuan.",
  },
  {
    h: "3. Tujuan dan dasar pemrosesan",
    p: "Data diproses berdasarkan persetujuan Anda untuk menindaklanjuti permintaan, menyusun penawaran, menjadwalkan dan menjalankan layanan yang disepakati, serta mengirim newsletter bila Anda berlangganan. Anda dapat menarik persetujuan kapan saja.",
  },
  {
    h: "4. Data kesehatan dan data anak",
    p: "Data kesehatan dan hasil layanan psikologi termasuk data pribadi yang bersifat spesifik dan hanya diproses dengan persetujuan eksplisit Anda, untuk keperluan layanan. Data anak di bawah 18 tahun hanya diproses dengan persetujuan orang tua/wali. Mohon tidak menulis data kesehatan atau identitas anak di formulir situs.",
  },
  {
    h: "5. Pihak ketiga",
    p: "Kami menggunakan penyedia layanan pihak ketiga untuk menjalankan layanan: penyedia hosting situs, WhatsApp untuk komunikasi, serta Google Meet/Zoom untuk sesi daring. Data hanya dibagikan sebatas yang diperlukan untuk fungsi tersebut.",
  },
  {
    h: "6. Masa simpan",
    p: "Data pribadi disimpan selama 3 tahun sejak interaksi atau layanan terakhir, kecuali peraturan perundang-undangan mewajibkan jangka waktu lain. Setelah itu data dihapus atau dianonimkan.",
  },
  {
    h: "7. Hak pemilik data dan cara mengajukan",
    p: "Anda berhak mengakses, memperbaiki, menghapus, membatasi pemrosesan, dan menarik persetujuan atas data pribadi Anda. Ajukan permintaan melalui email privasi di atas atau info@talentamulia.co.id dengan menyebutkan nama dan permintaan Anda; kami dapat meminta verifikasi identitas sebelum memprosesnya.",
  },
  {
    h: "8. Pemberitahuan insiden kebocoran data",
    p: "Jika terjadi kegagalan pelindungan data pribadi, kami akan memberitahukan secara tertulis kepada pemilik data yang terdampak dan pihak berwenang sesuai ketentuan peraturan perundang-undangan yang berlaku, termasuk data yang terdampak, waktu dan cara kejadian, serta langkah penanganannya.",
  },
  {
    h: "9. Tanggal berlaku",
    p: "Kebijakan ini berlaku sejak [ISI: tanggal berlaku].",
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
        PT Talenta Mulia Indonesia menghormati privasi setiap klien organisasi maupun individu.
        Halaman ini menjelaskan bagaimana data Anda kami kelola.
      </p>
      <div hidden dangerouslySetInnerHTML={{ __html: "<!-- DRAF - tinjau konsultan hukum -->" }} />

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

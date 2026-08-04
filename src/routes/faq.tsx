import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Pertanyaan yang Sering Diajukan — Talenta Mulia Sidoarjo, Jawa Timur" },
      {
        name: "description",
        content:
          "Jawaban seputar layanan Talenta Mulia: cakupan klien, kerahasiaan sesi, konsultasi online, dan proses proposal korporat.",
      },
      { property: "og:title", content: "Pertanyaan yang Sering Diajukan — Talenta Mulia Sidoarjo, Jawa Timur" },
      {
        property: "og:description",
        content:
          "Jawaban seputar layanan Talenta Mulia: cakupan klien, kerahasiaan sesi, konsultasi online, dan proses proposal korporat.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const FAQ = [
  {
    q: "Layanan apa saja yang ditawarkan Talenta Mulia?",
    a: "Kami menyediakan layanan psikologi terintegrasi, konsultasi kesehatan, executive coaching, pengembangan kepemimpinan, assessment center, program kesejahteraan karyawan, hipnoterapi, serta pelatihan dan seminar.",
  },
  {
    q: "Apakah Talenta Mulia melayani korporat dan rumah sakit?",
    a: "Ya. Kami melayani perusahaan korporat, industri manufaktur, rumah sakit, BUMN, instansi pemerintah, bank dan asuransi, hingga sekolah dan universitas di seluruh Indonesia.",
  },
  {
    q: "Apakah sesi konsultasi bersifat rahasia?",
    a: "Ya. Seluruh sesi mengikuti etika profesional mengenai kerahasiaan klien, dan setiap intervensi kami jalankan dengan praktik berbasis bukti ilmiah.",
  },
  {
    q: "Apakah tersedia konsultasi online?",
    a: "Tersedia. Anda dapat memilih sesi online melalui video call maupun sesi tatap muka (offline) di kantor kami di Sidoarjo, Jawa Timur.",
    link: { to: "/layanan/$slug", slug: "konsultasi-online-offline", label: "Lihat detail konsultasi online & offline" },
  },
  {
    q: "Bagaimana proses pengajuan proposal korporat?",
    a: "Hubungi tim kami melalui halaman Kontak atau WhatsApp, sampaikan kebutuhan dan jumlah peserta. Anda akan menerima proposal khusus yang disesuaikan dalam 2 hari kerja.",
  },
];

function Page() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center md:py-24">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary md:text-5xl">
            Pertanyaan yang Sering Diajukan
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Hal-hal yang paling sering ditanyakan calon klien kami.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 md:py-20">
        <div className="divide-y divide-border rounded-3xl border border-border bg-card">
          {FAQ.map((item, i) => (
            <div key={item.q}>
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-semibold text-primary">{item.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-brand-blue transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-6">
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.a}</p>
                  {"link" in item && item.link && (
                    <Link
                      to={item.link.to}
                      params={{ slug: item.link.slug }}
                      className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue"
                    >
                      {item.link.label} <ArrowRight className="h-4 w-4" />
                    </Link>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">Masih ada pertanyaan lain?</p>
          <Link
            to="/kontak"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Hubungi Tim Kami
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

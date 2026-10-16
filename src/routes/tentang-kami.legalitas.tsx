import { canonicalLink, ogUrl } from "@/lib/seo";
import { breadcrumbSchema, jsonLd } from "@/lib/structured-data";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { LEGAL_NOTE, LEGAL_ROWS } from "@/lib/company";

export const Route = createFileRoute("/tentang-kami/legalitas")({
  head: () => ({
    meta: [
      { title: "Legalitas Perusahaan — Talenta Mulia Sidoarjo, Jawa Timur" },
      {
        name: "description",
        content:
          "Legalitas PT Talenta Mulia Indonesia: badan hukum berkedudukan di Kabupaten Sidoarjo, NIB 1410260097435, disahkan Keputusan Menteri Hukum RI Tahun 2026.",
      },
      { property: "og:title", content: "Legalitas Perusahaan — Talenta Mulia Sidoarjo, Jawa Timur" },
      {
        property: "og:description",
        content:
          "Legalitas PT Talenta Mulia Indonesia: badan hukum berkedudukan di Kabupaten Sidoarjo, NIB 1410260097435, disahkan Keputusan Menteri Hukum RI Tahun 2026.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      ogUrl("/tentang-kami/legalitas"),
    ],
    links: [canonicalLink("/tentang-kami/legalitas")],
    scripts: [
      jsonLd(
        breadcrumbSchema([
          { name: "Tentang Kami", path: "/tentang-kami" },
          { name: "Legalitas", path: "/tentang-kami/legalitas" },
        ]),
      ),
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-20 md:py-28">
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
        <Link to="/" className="hover:text-brand-blue">
          Beranda
        </Link>
        <span className="mx-2">&gt;</span>
        <Link to="/tentang-kami" className="hover:text-brand-blue">
          Tentang Kami
        </Link>
        <span className="mx-2">&gt;</span>
        <span className="text-primary">Legalitas</span>
      </nav>
      <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-primary md:text-4xl">
        Legalitas Perusahaan
      </h1>
      <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
        <table className="w-full text-left text-sm">
          <tbody>
            {LEGAL_ROWS.map((r) => (
              <tr key={r.label} className="border-b border-border last:border-b-0">
                <th
                  scope="row"
                  className="w-2/5 bg-secondary/40 px-5 py-4 align-top font-semibold text-primary"
                >
                  {r.label}
                </th>
                <td className="px-5 py-4 leading-relaxed text-muted-foreground">{r.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-6 leading-relaxed text-muted-foreground">{LEGAL_NOTE}</p>
      <Link
        to="/kontak"
        className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
      >
        Minta Dokumen Legalitas
        <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  );
}

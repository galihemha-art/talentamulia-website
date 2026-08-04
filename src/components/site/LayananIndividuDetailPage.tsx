import { Link } from "@tanstack/react-router";
import { AlertTriangle, ArrowRight, Check, ChevronRight, Info, ShieldCheck } from "lucide-react";
import { CtaPenutup } from "@/components/site/LayananDetailPage";
import { KERAHASIAAN_NOTE, type LayananIndividuDetail } from "@/lib/layanan-individu-data";

export function LayananIndividuDetailPage({ data }: { data: LayananIndividuDetail }) {
  return (
    <>
      {/* Breadcrumb + Hero */}
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground"
          >
            <Link to="/" className="transition-colors hover:text-brand-blue">
              Beranda
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to="/layanan-individu" className="transition-colors hover:text-brand-blue">
              Layanan Individu
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-primary">{data.nama}</span>
          </nav>

          <h1 className="mt-6 max-w-3xl font-heading text-4xl font-bold leading-tight tracking-tight text-primary md:text-5xl">
            {data.nama}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {data.subjudul}
          </p>

          <Link
            to="/kontak"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Buat Janji Konsultasi
            <ArrowRight className="h-4 w-4" />
          </Link>

          {data.catatan && (
            <div
              className={`mt-8 flex max-w-3xl gap-3 rounded-2xl border p-5 text-sm leading-relaxed ${
                data.catatan.tone === "warning"
                  ? "border-amber-400/70 bg-amber-50 text-amber-900"
                  : "border-border bg-card text-muted-foreground"
              }`}
            >
              {data.catatan.tone === "warning" ? (
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
              ) : (
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
              )}
              <p>{data.catatan.text}</p>
            </div>
          )}
        </div>
      </section>

      {/* Untuk siapa + Yang didapat */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-2xl font-bold tracking-tight text-primary md:text-3xl">
              Untuk siapa layanan ini
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{data.untukSiapa}</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-7 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue">
              Yang akan Anda dapatkan
            </p>
            <ul className="mt-5 space-y-4">
              {data.yangDidapat.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex max-w-3xl items-center gap-3 rounded-2xl bg-secondary/60 p-5">
          <ShieldCheck className="h-5 w-5 shrink-0 text-brand-blue" />
          <p className="text-sm leading-relaxed text-muted-foreground">{KERAHASIAAN_NOTE}</p>
        </div>
      </section>

      <CtaPenutup />
    </>
  );
}

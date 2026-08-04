import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight, Building2, Video } from "lucide-react";
import { CtaPenutup } from "@/components/site/LayananDetailPage";

export function KonsultasiOnlineOfflinePage() {
  return (
    <>
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
            <Link to="/solusi-korporat" className="transition-colors hover:text-brand-blue">
              Layanan
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-primary">Online &amp; Offline</span>
          </nav>

          <h1 className="mt-6 max-w-3xl font-heading text-4xl font-bold leading-tight tracking-tight text-primary md:text-5xl">
            Cara Berkonsultasi: Online &amp; Offline
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Pilih mode yang paling nyaman untuk Anda atau organisasi Anda.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-brand-blue">
              <Video className="h-6 w-6" />
            </span>
            <h2 className="mt-5 font-heading text-2xl font-bold tracking-tight text-primary">
              Secara Online
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Konsultasi berlangsung melalui video call, sehingga Anda dapat mengikuti sesi dari
              mana saja. Mode ini cocok untuk konsultasi awal, konseling psikologis, dan coaching.
            </p>
            <p className="mt-4 rounded-2xl bg-secondary/60 p-5 text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-primary">Catatan: </span>
              pemeriksaan psikologi tertentu yang memerlukan tes tertulis atau observasi langsung
              mungkin membutuhkan sesi offline tambahan.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-brand-blue">
              <Building2 className="h-6 w-6" />
            </span>
            <h2 className="mt-5 font-heading text-2xl font-bold tracking-tight text-primary">
              Secara Offline
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Sesi tatap muka berlangsung di kantor Talenta Mulia, Sidoarjo. Mode ini cocok untuk
              pemeriksaan psikologi formal dan tes yang memerlukan pengawasan langsung.
            </p>
            <p className="mt-4 rounded-2xl bg-secondary/60 p-5 text-sm leading-relaxed text-muted-foreground">
              Tersedia ruang konsultasi yang privat dan nyaman untuk menjaga kerahasiaan serta
              kenyamanan setiap sesi.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="font-heading text-xl font-semibold text-primary">
            Pilih mode saat mendaftar
          </p>
          <Link
            to="/kontak"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Daftar Konsultasi
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <CtaPenutup />
    </>
  );
}

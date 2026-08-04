import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight, UserRound, Users } from "lucide-react";
import { CtaPenutup } from "@/components/site/LayananDetailPage";

const CARDS = [
  {
    slug: "executive-coaching",
    nama: "Executive Coaching",
    icon: UserRound,
    desc: "Coaching satu-lawan-satu bersertifikat ICF PCC untuk direksi, senior leader, dan talenta berpotensi tinggi — membantu pemimpin mengasah keputusan, mengelola tekanan, dan siap naik ke peran yang lebih besar.",
  },
  {
    slug: "team-coaching",
    nama: "Team Coaching",
    icon: Users,
    desc: "Coaching kelompok terfasilitasi untuk memperkuat kolaborasi, menyelesaikan konflik, dan menyelaraskan cara kerja tim lintas fungsi maupun tim hasil merger dan reorganisasi.",
  },
];

export function CoachingHubPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Link to="/" className="transition-colors hover:text-brand-blue">
              Beranda
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to="/solusi-korporat" className="transition-colors hover:text-brand-blue">
              Layanan
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-primary">Coaching</span>
          </nav>

          <h1 className="mt-6 font-heading text-4xl font-bold leading-tight tracking-tight text-primary md:text-5xl">
            Coaching
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Pendekatan coaching bersertifikat ICF untuk individu dan tim.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-14 md:py-16">
        <p className="text-center leading-relaxed text-muted-foreground">
          Kami memandang coaching bukan sebagai pemberian nasihat, melainkan proses kemitraan yang
          membantu seseorang — atau sebuah tim — menemukan cara berpikir dan cara kerja terbaiknya
          sendiri. Setiap sesi berjalan rahasia, terstruktur, dan berbasis tujuan yang disepakati,
          sehingga hasilnya terlihat pada perilaku nyata di tempat kerja.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 md:pb-20">
        <div className="grid gap-6 md:grid-cols-2">
          {CARDS.map((c) => (
            <Link
              key={c.slug}
              to="/layanan/$slug"
              params={{ slug: c.slug }}
              className="group rounded-3xl border border-border bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-blue hover:shadow-soft"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-brand-blue">
                <c.icon className="h-6 w-6" />
              </span>
              <h2 className="mt-5 font-heading text-2xl font-bold tracking-tight text-primary">
                {c.nama}
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{c.desc}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue">
                Pelajari selengkapnya
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CtaPenutup />
    </>
  );
}

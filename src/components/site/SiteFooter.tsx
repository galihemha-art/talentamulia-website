import { Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { SiteLink } from "./SiteLink";

const SOLUSI = [
  { label: "Solusi Korporat", to: "/solusi-korporat" },
  { label: "Layanan Individu", to: "/layanan-individu" },
  { label: "Konsultasi Kesehatan", to: "/kesehatan" },
  { label: "Executive Coaching", to: "/layanan/executive-coaching" },
  { label: "Pelatihan & Seminar", to: "/pelatihan" },
] as const;

const PERUSAHAAN = [
  { label: "Tentang Kami", to: "/tentang-kami" },
  { label: "Tim Profesional Kami", to: "/professionals" },
  { label: "Artikel", to: "/artikel" },
  { label: "Testimoni", to: "/testimoni" },
  { label: "FAQ", to: "/faq" },
] as const;


export function SiteFooter() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-gradient text-base font-bold">
              TM
            </span>
            <span className="leading-tight">
              <span className="block font-wordmark text-xl">Talenta Mulia</span>
              <span className="block text-[11px] text-primary-foreground/70">
                Psikologi · Kesehatan · Kepemimpinan
              </span>
            </span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-primary-foreground/75">
            Psikologi Terintegrasi, Kesehatan & Konsultasi Kepemimpinan untuk organisasi,
            institusi, dan individu di seluruh Indonesia.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider">Solusi</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/75">
            {SOLUSI.map((item) => (
              <li key={item.label}>
                <SiteLink to={item.to} className="transition-colors hover:text-primary-foreground">
                  {item.label}
                </SiteLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider">Perusahaan</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/75">
            {PERUSAHAAN.map((item) => (
              <li key={item.label}>
                <Link to={item.to} className="transition-colors hover:text-primary-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider">Kontak</h3>
          <ul className="mt-4 space-y-3.5 text-sm text-primary-foreground/75">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>
                Jl. Raya Gadung No.5, Margomulyo, Wage, Kec. Taman, Sidoarjo, Jawa Timur
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0" />
              <a href="tel:+6282132990498" className="hover:text-primary-foreground">
                +62 821 3299 0498
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0" />
              <a href="mailto:info@talentamulia.co.id" className="hover:text-primary-foreground">
                info@talentamulia.co.id
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0" />
              <span>Senin–Jumat · 09.00–16.00 WIB</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <p className="mx-auto max-w-7xl px-5 py-6 text-xs text-primary-foreground/60">
          © 2026 Talenta Mulia. Seluruh hak cipta dilindungi.
        </p>
      </div>
    </footer>
  );
}

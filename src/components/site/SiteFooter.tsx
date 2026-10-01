import { Link } from "@tanstack/react-router";
import { Clock, Instagram, Linkedin, Mail, MapPin, Phone, Facebook } from "lucide-react";
import { useState } from "react";
import { SiteLink } from "./SiteLink";

type Item = { label: string; to: string };

const COLUMNS: { title: string; items: Item[] }[] = [
  {
    title: "Korporat",
    items: [
      { label: "Semua Solusi Korporat", to: "/solusi-korporat" },
      { label: "Konsultasi HR", to: "/layanan/konsultasi-hr" },
      { label: "Konsultasi Organisasi", to: "/layanan/konsultasi-organisasi" },
      { label: "Asesmen Psikologi", to: "/layanan/asesmen-psikologi" },
      { label: "Assessment Center", to: "/layanan/assessment-center" },
      { label: "Pemetaan Talenta", to: "/layanan/pemetaan-talenta" },
      { label: "Talent Acquisition", to: "/layanan/talent-acquisition" },
      { label: "Executive Search", to: "/layanan/executive-search" },
    ],
  },
  {
    title: "Individu",
    items: [
      { label: "Semua Layanan Individu", to: "/layanan-individu" },
      { label: "Konsultasi Psikolog Online", to: "/konsultasi-psikolog-online" },
      { label: "Konseling Psikologis", to: "/layanan/konseling-psikologis" },
      { label: "Konseling Pernikahan", to: "/layanan/konseling-pernikahan" },
      { label: "Parenting & Anak", to: "/layanan/parenting-anak" },
      { label: "Konseling Remaja", to: "/layanan/konseling-remaja" },
      { label: "Stres & Kecemasan", to: "/layanan/stres-kecemasan" },
      { label: "Trauma Healing", to: "/layanan/trauma-healing" },
      { label: "Pendampingan ABK", to: "/layanan/pendampingan-abk" },
    ],
  },
  {
    title: "Kesehatan",
    items: [
      { label: "Konsultasi Kesehatan", to: "/kesehatan" },
      { label: "Medical Wellness", to: "/layanan/medical-wellness" },
      { label: "Kesejahteraan Karyawan", to: "/layanan/kesejahteraan-karyawan" },
      { label: "Sektor Kesehatan", to: "/industri/kesehatan" },
    ],
  },
  {
    title: "Pelatihan",
    items: [
      { label: "Pelatihan & Seminar", to: "/pelatihan" },
      { label: "Pelatihan Kepemimpinan", to: "/layanan/pelatihan-kepemimpinan" },
      { label: "Executive Coaching", to: "/layanan/executive-coaching" },
      { label: "Team Coaching", to: "/layanan/team-coaching" },
      { label: "Pendampingan Sekolah", to: "/layanan/pendampingan-sekolah-perusahaan" },
    ],
  },
  {
    title: "Program",
    items: [
      { label: "Semua Program", to: "/program" },
      { label: "Masa Persiapan Pensiun (MPP)", to: "/program/mpp" },
      { label: "Industri yang Kami Layani", to: "/industri" },
      { label: "Manufaktur", to: "/industri/manufaktur" },
      { label: "Pendidikan", to: "/industri/pendidikan" },
    ],
  },
  {
    title: "Artikel",
    items: [
      { label: "Semua Artikel", to: "/artikel" },
      { label: "Testimoni", to: "/testimoni" },
      { label: "FAQ", to: "/faq" },
    ],
  },
  {
    title: "Perusahaan",
    items: [
      { label: "Tentang Kami", to: "/tentang-kami" },
      { label: "Tim Profesional", to: "/professionals" },
      { label: "Legalitas", to: "/tentang-kami/legalitas" },
      { label: "Kontak", to: "/kontak" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Kebijakan Privasi", to: "/kebijakan-privasi" },
      { label: "Syarat & Ketentuan", to: "/syarat-ketentuan" },
      { label: "Hubungi Kami", to: "/kontak" },
    ],
  },
];

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com", Icon: Instagram },
  { label: "LinkedIn", href: "https://linkedin.com", Icon: Linkedin },
  { label: "Facebook", href: "https://facebook.com", Icon: Facebook },
];

function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!email.trim()) return;
        setSent(true);
        setEmail("");
      }}
      className="mt-4"
    >
      <label htmlFor="footer-newsletter" className="text-sm text-primary-foreground/75">
        Dapatkan wawasan psikologi, kepemimpinan & kesehatan kerja.
      </label>
      <div className="mt-3 flex flex-col gap-2 sm:flex-row">
        <input
          id="footer-newsletter"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Alamat email Anda"
          className="w-full rounded-lg border border-primary-foreground/25 bg-primary-foreground/10 px-3 py-2 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-foreground/40"
        />
        <button
          type="submit"
          className="rounded-lg bg-brand-gradient px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Berlangganan
        </button>
      </div>
      {sent ? (
        <p className="mt-2 text-xs text-primary-foreground/70" role="status">
          Terima kasih! Kami akan mengirim wawasan terbaru ke email Anda.
        </p>
      ) : null}
    </form>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_2.4fr]">
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

            <ul className="mt-6 space-y-3.5 text-sm text-primary-foreground/75">
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

          <nav aria-label="Peta situs" className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h3 className="text-sm font-semibold uppercase tracking-wider">{col.title}</h3>
                <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/75">
                  {col.items.map((item) => (
                    <li key={`${col.title}-${item.label}`}>
                      <SiteLink
                        to={item.to}
                        className="transition-colors hover:text-primary-foreground"
                      >
                        {item.label}
                      </SiteLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-12 grid gap-8 border-t border-primary-foreground/15 pt-10 md:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Media Sosial</h3>
            <div className="mt-4 flex gap-3">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-lg border border-primary-foreground/20 text-primary-foreground/80 transition-colors hover:border-primary-foreground/50 hover:text-primary-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Newsletter</h3>
            <Newsletter />
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Talenta Mulia. Seluruh hak cipta dilindungi.</p>
          <div className="flex gap-5">
            <Link to="/kebijakan-privasi" className="hover:text-primary-foreground">
              Kebijakan Privasi
            </Link>
            <Link to="/syarat-ketentuan" className="hover:text-primary-foreground">
              Syarat &amp; Ketentuan
            </Link>
            <Link to="/kontak" className="hover:text-primary-foreground">
              Kontak
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

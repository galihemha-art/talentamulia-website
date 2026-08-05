import { Link, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { WordMark } from "./WordMark";
import { SiteLink } from "./SiteLink";

type Item = { label: string; to: string; highlight?: boolean };
type Group = { label: string; items: Item[] };
type Column = { title: string; top: Item; items?: Item[]; groups?: Group[] };

const MEGA: Column[] = [
  {
    title: "Solusi Korporat",
    top: { label: "Semua Solusi Korporat", to: "/solusi-korporat" },
    groups: [
      {
        label: "HR & Assessment",
        items: [
          { label: "Konsultasi HR", to: "/layanan/konsultasi-hr" },
          { label: "Konsultasi Organisasi", to: "/layanan/konsultasi-organisasi" },
          { label: "Assessment Center", to: "/layanan/assessment-center" },
          { label: "Assessment Psikologi", to: "/layanan/asesmen-psikologi" },
          { label: "Pemetaan Talenta", to: "/layanan/pemetaan-talenta" },
          { label: "Pengembangan Kepemimpinan", to: "/layanan/pelatihan-kepemimpinan" },
          { label: "Coaching", to: "/layanan/coaching" },
        ],
      },
      {
        label: "Kesehatan & Rekrutmen",
        items: [
          { label: "Kesejahteraan Karyawan", to: "/layanan/kesejahteraan-karyawan" },
          { label: "Medical Wellness", to: "/layanan/medical-wellness" },
          { label: "Konsultasi Rumah Sakit", to: "/kesehatan" },
          { label: "Talent Acquisition", to: "/layanan/talent-acquisition" },
          { label: "Executive Search", to: "/layanan/executive-search" },
          {
            label: "Pendampingan Sekolah & Perusahaan",
            to: "/layanan/pendampingan-sekolah-perusahaan",
          },
        ],
      },
    ],
  },
  {
    title: "Pemeriksaan Psikologi",
    top: { label: "Layanan online & offline tersedia", to: "/layanan/konsultasi-online-offline" },
    items: [
      { label: "Psikologi Industri & Organisasi", to: "/layanan/pemeriksaan-psikologi-industri" },
      { label: "Psikologi Klinis", to: "/layanan/pemeriksaan-psikologi-klinis" },
      { label: "Psikologi Pendidikan", to: "/layanan/pemeriksaan-psikologi-pendidikan" },
      { label: "Psikologi Perkembangan", to: "/layanan/pemeriksaan-psikologi-perkembangan" },
    ],
  },
  {
    title: "Layanan Individu",
    top: { label: "Semua Layanan Individu", to: "/layanan-individu" },
    items: [
      { label: "Konseling Psikologis", to: "/layanan/konseling-psikologis" },
      { label: "Konseling Pernikahan", to: "/layanan/konseling-pernikahan" },
      { label: "Parenting & Anak", to: "/layanan/parenting-anak" },
      { label: "Konseling Remaja", to: "/layanan/konseling-remaja" },
      { label: "Hipnoterapi", to: "/layanan/hipnoterapi" },
      { label: "Trauma Healing", to: "/layanan/trauma-healing" },
      { label: "Stres & Kecemasan", to: "/layanan/stres-kecemasan" },
      { label: "Dukungan Depresi", to: "/layanan/dukungan-depresi" },
      { label: "Pendampingan ABK", to: "/layanan/pendampingan-abk" },
    ],
  },
  {
    title: "Industri",
    top: { label: "Semua Industri", to: "/industri" },
    items: [
      { label: "Manufaktur", to: "/industri/manufaktur" },
      { label: "Kesehatan", to: "/industri/kesehatan" },
      { label: "Pendidikan", to: "/industri/pendidikan" },
      { label: "Pemerintahan", to: "/industri/pemerintahan" },
      { label: "Perbankan", to: "/industri/perbankan" },
    ],
  },
  {
    title: "Program",
    top: { label: "Semua Program", to: "/program" },
    items: [
      { label: "Program Masa Persiapan Pensiun (MPP)", to: "/program/mpp", highlight: true },
      { label: "Executive Coaching", to: "/layanan/executive-coaching" },
      { label: "Kesejahteraan Karyawan", to: "/layanan/kesejahteraan-karyawan" },
    ],
  },
];

const itemClass = (item: Item) =>
  item.highlight
    ? "block rounded-lg bg-secondary/70 px-2 py-1.5 text-sm font-bold text-brand-blue transition-colors hover:bg-secondary"
    : "block rounded-lg px-2 py-1.5 text-sm text-foreground/80 transition-colors hover:bg-secondary hover:text-primary";

const columnItems = (col: Column): Item[] => col.items ?? col.groups?.flatMap((g) => g.items) ?? [];


const SIMPLE: Item[] = [
  { label: "Beranda", to: "/" },
  { label: "Kesehatan", to: "/kesehatan" },
  { label: "Pelatihan", to: "/pelatihan" },
  { label: "Artikel", to: "/artikel" },
  { label: "FAQ", to: "/faq" },
  { label: "Kontak", to: "/kontak" },
];

const TENTANG: Item[] = [{ label: "Profesional", to: "/professionals" }];

const linkClass =
  "inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [lang, setLang] = useState<"ID" | "EN">("ID");
  const router = useRouter();
  const [warmed, setWarmed] = useState(false);

  /** Warms the shared service/industry route chunks as soon as the menu opens. */
  const warmServiceRoutes = () => {
    if (warmed) return;
    setWarmed(true);
    void router.preloadRoute({ to: "/solusi-korporat" });
    void router.preloadRoute({ to: "/layanan/$slug", params: { slug: "konsultasi-hr" } });
    void router.preloadRoute({ to: "/industri/$slug", params: { slug: "manufaktur" } });
  };

  const close = () => {
    setOpen(false);
    setMobileSection(null);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
        <WordMark />

        <nav className="hidden items-center gap-0.5 xl:flex">
          <Link to="/" activeProps={{ className: "text-primary" }} className={linkClass}>
            Beranda
          </Link>

          <div className="group relative">
            <Link
              to="/tentang-kami"
              activeProps={{ className: "text-primary" }}
              className={linkClass}
            >
              Tentang <ChevronDown className="h-3.5 w-3.5" />
            </Link>
            <div className="invisible absolute left-0 top-full w-56 rounded-xl border border-border bg-popover p-2 opacity-0 shadow-soft transition-all group-hover:visible group-hover:opacity-100">
              {TENTANG.map((child) => (
                <SiteLink
                  key={child.to}
                  to={child.to}
                  className="block rounded-lg px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
                >
                  {child.label}
                </SiteLink>
              ))}
            </div>
          </div>

          {/* Mega-menu Layanan */}
          <div className="group static" onMouseEnter={warmServiceRoutes} onFocus={warmServiceRoutes}>
            <Link
              to="/solusi-korporat"
              activeProps={{ className: "text-primary" }}
              className={linkClass}
            >
              Layanan <ChevronDown className="h-3.5 w-3.5" />
            </Link>
            <div className="invisible absolute left-0 right-0 top-full opacity-0 transition-all group-hover:visible group-hover:opacity-100">
              <div className="mx-auto mt-1 max-w-7xl px-5">
                <div className="max-h-[calc(100vh-6rem)] overflow-y-auto overscroll-contain rounded-2xl border border-border bg-popover p-6 shadow-soft">
                  <div className="grid grid-cols-5 gap-6">
                  {MEGA.map((col) => (
                    <div key={col.title}>
                      <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                        {col.title}
                      </h3>
                      <SiteLink
                        to={col.top.to}
                        className="mt-2 block text-sm font-semibold text-brand-blue hover:underline"
                      >
                        {col.top.label}
                      </SiteLink>
                      {col.groups ? (
                        <div className="mt-3 space-y-4">
                          {col.groups.map((group) => (
                            <div key={group.label}>
                              <p className="px-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground/80">
                                {group.label}
                              </p>
                              <ul className="mt-1 space-y-1">
                                {group.items.map((item) => (
                                  <li key={item.label + item.to}>
                                    <SiteLink to={item.to} className={itemClass(item)}>
                                      {item.label}
                                    </SiteLink>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <ul className="mt-3 space-y-1">
                          {columnItems(col).map((item) => (
                            <li key={item.label + item.to}>
                              <SiteLink to={item.to} className={itemClass(item)}>
                                {item.label}
                              </SiteLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {SIMPLE.slice(1).map((item) => (
            <SiteLink key={item.to} to={item.to} className={linkClass}>
              {item.label}
            </SiteLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center rounded-full border border-border p-0.5 text-xs font-semibold sm:flex">
            {(["ID", "EN"] as const).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                className={`rounded-full px-2.5 py-1 transition-colors ${
                  lang === code ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                }`}
              >
                {code}
              </button>
            ))}
          </div>
          <a
            href="tel:+6282132990498"
            className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 md:inline-flex"
          >
            <Phone className="h-4 w-4" />
            +62 821 3299 0498
          </a>
          <button
            type="button"
            aria-label="Buka menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg border border-border p-2 xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="max-h-[75vh] overflow-y-auto border-t border-border bg-background px-5 py-4 xl:hidden">
          <nav className="flex flex-col gap-1">
            <Link
              to="/"
              onClick={close}
              className="block rounded-lg px-3 py-2 text-sm font-medium text-foreground/85"
            >
              Beranda
            </Link>

            <Link
              to="/tentang-kami"
              onClick={close}
              className="block rounded-lg px-3 py-2 text-sm font-medium text-foreground/85"
            >
              Tentang
            </Link>
            {TENTANG.map((child) => (
              <SiteLink
                key={child.to}
                to={child.to}
                onClick={close}
                className="block rounded-lg px-6 py-1.5 text-sm text-muted-foreground"
              >
                {child.label}
              </SiteLink>
            ))}

            <p className="px-3 pt-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Layanan
            </p>
            {MEGA.map((col) => {
              const isOpen = mobileSection === col.title;
              return (
                <div key={col.title}>
                  <button
                    type="button"
                    onClick={() => setMobileSection(isOpen ? null : col.title)}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-foreground/85"
                  >
                    {col.title}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="pb-2">
                      <SiteLink
                        to={col.top.to}
                        onClick={close}
                        className="block rounded-lg px-6 py-1.5 text-sm font-semibold text-brand-blue"
                      >
                        {col.top.label}
                      </SiteLink>
                      {columnItems(col).map((item) => (
                        <SiteLink
                          key={item.label + item.to}
                          to={item.to}
                          onClick={close}
                          className={
                            item.highlight
                              ? "block rounded-lg px-6 py-1.5 text-sm font-bold text-brand-blue"
                              : "block rounded-lg px-6 py-1.5 text-sm text-muted-foreground"
                          }
                        >
                          {item.label}
                        </SiteLink>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {SIMPLE.slice(1).map((item) => (
              <SiteLink
                key={item.to}
                to={item.to}
                onClick={close}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-foreground/85"
              >
                {item.label}
              </SiteLink>
            ))}

            <a
              href="tel:+6282132990498"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              <Phone className="h-4 w-4" /> +62 821 3299 0498
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

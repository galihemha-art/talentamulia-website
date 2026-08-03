import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { WordMark } from "./WordMark";

type NavItem = { label: string; to: string; children?: { label: string; to: string }[] };

const NAV: NavItem[] = [
  { label: "Beranda", to: "/" },
  {
    label: "Tentang",
    to: "/tentang-kami",
    children: [{ label: "Profesional", to: "/professionals" }],
  },
  {
    label: "Layanan",
    to: "/solusi-korporat",
    children: [
      { label: "Industri", to: "/industri" },
      { label: "Solusi Korporat", to: "/solusi-korporat" },
      { label: "Layanan Individu", to: "/layanan-individu" },
      { label: "Kesehatan", to: "/kesehatan" },
      { label: "Pelatihan", to: "/pelatihan" },
    ],
  },
  { label: "Program", to: "/program" },
  { label: "Artikel", to: "/artikel" },
  { label: "FAQ", to: "/faq" },
  { label: "Kontak", to: "/kontak" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"ID" | "EN">("ID");

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
        <WordMark />

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <div key={item.label} className="group relative">
              <Link
                to={item.to}
                activeProps={{ className: "text-primary" }}
                className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {item.label}
                {item.children && <ChevronDown className="h-3.5 w-3.5" />}
              </Link>
              {item.children && (
                <div className="invisible absolute left-0 top-full w-56 rounded-xl border border-border bg-popover p-2 opacity-0 shadow-soft transition-all group-hover:visible group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.to}
                      to={child.to}
                      className="block rounded-lg px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
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
            className="rounded-lg border border-border p-2 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV.map((item) => (
              <div key={item.label}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-foreground/85"
                >
                  {item.label}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.to}
                    to={child.to}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-6 py-1.5 text-sm text-muted-foreground"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
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

import { Link } from "@tanstack/react-router";

export function WordMark({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-gradient text-base font-bold tracking-tight text-white">
        TM
      </span>
      <span className="leading-tight">
        <span className="block font-wordmark text-xl text-gradient-brand">Talenta Mulia</span>
        <span
          className={`block text-[11px] tracking-wide ${inverted ? "text-white/70" : "text-muted-foreground"}`}
        >
          Psikologi · Kesehatan · Kepemimpinan
        </span>
      </span>
    </Link>
  );
}

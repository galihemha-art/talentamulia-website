import { Link } from "@tanstack/react-router";

import logoUrl from "@/assets/logo-talentamulia-2026.jpg";

export function WordMark() {
  return (
    <Link to="/" className="flex items-center" aria-label="Talenta Mulia — Beranda">
      <img
        src={logoUrl}
        alt="Talenta Mulia — Psychology, Healthcare & Leadership"
        className="h-11 w-auto"
        width={366}
        height={110}
        decoding="async"
      />
    </Link>
  );
}

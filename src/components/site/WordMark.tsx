import { Link } from "@tanstack/react-router";

import logoUrl from "@/assets/logo-talentamulia-2026.jpg";

export function WordMark() {
  return (
    <Link to="/" className="flex items-center" aria-label="Talenta Mulia — Beranda">
      <img
        src={logoUrl}
        alt="Talenta Mulia — Psychology, Healthcare & Leadership"
        className="h-16 w-auto sm:h-20"
        width={552}
        height={160}
        decoding="async"
      />
    </Link>
  );
}

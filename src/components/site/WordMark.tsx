import { Link } from "@tanstack/react-router";

import logoAsset from "@/assets/logo-talentamulia-2026.jpg.asset.json";

export function WordMark({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link to="/" className="flex items-center" aria-label="Talenta Mulia — Beranda">
      <img
        src={logoAsset.url}
        alt="Talenta Mulia — Psychology, Healthcare & Leadership"
        className="h-11 w-auto"
        width={366}
        height={110}
        decoding="async"
      />
    </Link>
  );
}

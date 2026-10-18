import { Link } from "@tanstack/react-router";

import { logoImage } from "@/lib/team-images";

export function WordMark() {
  return (
    <Link to="/" className="flex items-center" aria-label="Talenta Mulia — Beranda">
      <img
        src={logoImage.src}
        srcSet={logoImage.srcSet}
        sizes="(min-width: 640px) 276px, 221px"
        alt="Talenta Mulia — Psychology, Healthcare & Leadership"
        className="h-16 w-auto sm:h-20"
        width={552}
        height={160}
        decoding="async"
      />
    </Link>
  );
}

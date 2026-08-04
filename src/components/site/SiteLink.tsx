import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

/**
 * Presentational helper: accepts a plain path string and renders the correct
 * typed TanStack <Link>, including dynamic-segment routes.
 */
export function SiteLink({
  to,
  className,
  onClick,
  children,
}: {
  to: string;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}) {
  const layanan = to.match(/^\/layanan\/(.+)$/);
  if (layanan) {
    return (
      <Link
        to="/layanan/$slug"
        params={{ slug: layanan[1] }}
        className={className}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }

  const industri = to.match(/^\/industri\/(.+)$/);
  if (industri) {
    return (
      <Link
        to="/industri/$slug"
        params={{ slug: industri[1] }}
        className={className}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link to={to as "/"} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

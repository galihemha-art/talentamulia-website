import type { ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";
import { pageSeo } from "@/lib/page-seo";

/** Renders the central H1 for the current page, falling back to the template's own text. */
export function PageH1Text({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const h1 = pageSeo(pathname)?.h1;
  return <>{h1 ?? children}</>;
}

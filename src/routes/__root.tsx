import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  HeadContent,
  Scripts,
  useLocation,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import { NotFoundComponent, ErrorComponent } from "@/components/site/RouteBoundaries";

import appCss from "../styles.css?url";

import { SiteHeader } from "../components/site/SiteHeader";
import { PageHeroBanner } from "../components/site/PageHeroBanner";
import { SiteFooter } from "../components/site/SiteFooter";
import { WhatsAppButton } from "../components/site/WhatsAppButton";
import { AnalyticsConsent } from "@/components/site/AnalyticsConsent";
import { jsonLd, organizationSchema } from "../lib/structured-data";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Talenta Mulia — Konsultasi Psikologi & Human Capital Sidoarjo" },
      {
        name: "description",
        content:
          "Psikologi terintegrasi, kesehatan, executive coaching, assessment center, dan konsultasi human capital untuk individu, organisasi, dan institusi.",
      },
      { name: "author", content: "Talenta Mulia" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Talenta Mulia — Konsultasi Psikologi & Human Capital Sidoarjo" },
      { name: "twitter:title", content: "Talenta Mulia — Konsultasi Psikologi & Human Capital Sidoarjo" },
      { property: "og:description", content: "Psikologi terintegrasi, kesehatan, executive coaching, assessment center, dan konsultasi human capital untuk individu, organisasi, dan institusi." },
      { name: "twitter:description", content: "Psikologi terintegrasi, kesehatan, executive coaching, assessment center, dan konsultasi human capital untuk individu, organisasi, dan institusi." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png?v=2", type: "image/png" },
    ],
    scripts: [jsonLd(organizationSchema()), {
      children: `window.dataLayer=window.dataLayer||[];window.gtag=function(){window.dataLayer.push(arguments)};window['ga-disable-G-V78VEQ6RQV']=true;gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});`,
    }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <head>
        <HeadContent />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const isRisway = useLocation({ select: (location) => location.pathname === "/risway" });

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-background">
        {!isRisway && <SiteHeader />}
        <main className="flex-1">
          {!isRisway && <PageHeroBanner />}
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </main>
        {!isRisway && <SiteFooter />}
        {!isRisway && <WhatsAppButton />}
        <AnalyticsConsent />
      </div>
    </QueryClientProvider>
  );
}


import { withPageSeo } from "@/lib/page-seo";
import { canonicalLink, ogUrl } from "@/lib/seo";
import { breadcrumbSchema, jsonLd } from "@/lib/structured-data";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { IndustriDetailPage } from "@/components/site/IndustriDetailPage";
import { getIndustriDetail } from "@/lib/industri-data";

import { NotFoundComponent } from "@/components/site/RouteBoundaries";

export const Route = createFileRoute("/industri/$slug")({
  beforeLoad: ({ params }) => {
    if (!getIndustriDetail(params.slug)) throw notFound();
  },
  notFoundComponent: NotFoundComponent,
  head: (ctx) => withPageSeo(`/industri/${ctx.params.slug}`, (({ params }: typeof ctx) => {
    const data = getIndustriDetail(params.slug);
    if (!data) return { meta: [{ title: "Industri tidak ditemukan — Talenta Mulia" }, { name: "robots", content: "noindex" }] };
    const nama = data?.nama ?? "Industri";
    const title = `Layanan ${nama} — Talenta Mulia Sidoarjo, Jawa Timur`;
    const description =
      data?.subjudul ??
      `Layanan psikologi, asesmen, dan pengembangan SDM Talenta Mulia untuk sektor ${nama} di Sidoarjo dan seluruh Jawa Timur.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        ogUrl(`/industri/${params.slug}`),
      ],
      links: [canonicalLink(`/industri/${params.slug}`)],
      scripts: [
        jsonLd(
          breadcrumbSchema([
            { name: "Industri", path: "/industri" },
            { name: nama, path: `/industri/${params.slug}` },
          ]),
        ),
      ],
    };
  })(ctx)),
  component: Page,
});

function Page() {
  const { slug } = Route.useParams();
  const data = getIndustriDetail(slug);

  if (data) return <IndustriDetailPage data={data} />;

  return <NotFoundComponent />;
}

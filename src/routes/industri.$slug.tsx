import { canonicalLink, ogUrl } from "@/lib/seo";
import { breadcrumbSchema, jsonLd } from "@/lib/structured-data";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { IndustriDetailPage } from "@/components/site/IndustriDetailPage";
import { getIndustriDetail } from "@/lib/industri-data";

export const Route = createFileRoute("/industri/$slug")({
  head: ({ params }) => {
    const data = getIndustriDetail(params.slug);
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
  },
  component: Page,
});

function Page() {
  const { slug } = Route.useParams();
  const data = getIndustriDetail(slug);

  if (data) return <IndustriDetailPage data={data} />;

  return (
    <section className="mx-auto flex min-h-[55vh] max-w-3xl flex-col items-center justify-center px-5 py-24 text-center">
      <h1 className="font-heading text-4xl font-extrabold tracking-tight text-primary md:text-5xl">
        Industri
      </h1>
      <p className="mt-4 text-muted-foreground">
        Halaman detail layanan untuk sektor ini sedang kami siapkan.
      </p>
      <Link
        to="/industri"
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue"
      >
        <ArrowLeft className="h-4 w-4" /> Kembali ke daftar industri
      </Link>
    </section>
  );
}

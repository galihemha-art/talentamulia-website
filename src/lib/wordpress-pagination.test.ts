import { afterEach, expect, test } from "bun:test";
import { fetchPublishedArticlePage, fetchPublishedSitemapArticles } from "./wordpress";

const originalFetch = globalThis.fetch;
afterEach(() => { globalThis.fetch = originalFetch; });
const collection = (posts: unknown[], pages: number) => new Response(JSON.stringify(posts), { headers: { "X-WP-TotalPages": String(pages), "Content-Type": "application/json" } });

test("sitemap paginates with 100 posts and preserves page-specific modification dates", async () => {
  const calls: URL[] = [];
  globalThis.fetch = (async (input: string | URL | Request) => {
    const url = new URL(String(input)); calls.push(url);
    return collection(url.searchParams.get("page") === "1"
      ? [{ slug: "first", modified: "2026-10-01T08:00:00", modified_gmt: "2026-10-01T01:00:00" }, { slug: "konsultasi-psikolog-online", modified: "2026-10-02T08:00:00" }]
      : [{ slug: "second", modified: "2026-10-03T08:00:00", modified_gmt: "2026-10-03T01:00:00" }], 2);
  }) as typeof fetch;
  const result = await fetchPublishedSitemapArticles();
  expect(calls.map((url) => url.searchParams.get("page"))).toEqual(["1", "2"]);
  expect(calls.every((url) => url.searchParams.get("per_page") === "100")).toBe(true);
  expect(result).toEqual([{ slug: "first", modified: "2026-10-01T01:00:00.000Z" }, { slug: "second", modified: "2026-10-03T01:00:00.000Z" }]);
});

test("sitemap does not return partial data when a later page fails", async () => {
  globalThis.fetch = (async (input: string | URL | Request) => new URL(String(input)).searchParams.get("page") === "1"
    ? collection([{ slug: "first", modified: "2026-10-01T00:00:00" }], 2)
    : new Response("Unavailable", { status: 503 })) as typeof fetch;
  expect(fetchPublishedSitemapArticles()).rejects.toThrow("Artikel WordPress tidak dapat diakses");
});

test("listing requests only the requested 24-post page and excludes the legacy post before pagination", async () => {
  const calls: URL[] = [];
  globalThis.fetch = (async (input: string | URL | Request) => {
    const url = new URL(String(input)); calls.push(url);
    if (url.searchParams.has("slug")) return collection([{ id: 12 }], 1);
    if (url.pathname.endsWith("/categories")) return new Response("[]");
    return collection([], 17);
  }) as typeof fetch;
  const result = await fetchPublishedArticlePage(2);
  const pageCalls = calls.filter((url) => url.searchParams.has("page"));
  expect(pageCalls).toHaveLength(1);
  expect(pageCalls[0]?.searchParams.get("page")).toBe("2");
  expect(pageCalls[0]?.searchParams.get("per_page")).toBe("24");
  expect(pageCalls[0]?.searchParams.get("exclude")).toBe("12");
  expect(result.totalPages).toBe(17);
});
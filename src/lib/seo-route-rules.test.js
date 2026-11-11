import { describe, expect, test } from "bun:test";
import { ARTICLES_PER_PAGE, articlePageNumber, articlePageExists, legacyConsultationTarget, serviceIndexState, COMPLETE_SERVICE_SLUGS, ARTICLE_MERGE_REDIRECTS, articleMergeTarget, articleMergeRedirectProblems } from "./seo-route-rules";

describe("Owner SEO rules", () => {
  test("article pages contain 24 posts", () => { expect(ARTICLES_PER_PAGE).toBe(24); });
  test("non-numeric and out-of-range pages are rejected", () => {
    expect(articlePageNumber("abc")).toBeNull();
    expect(articlePageNumber("2")).toBe(2);
    expect(articlePageNumber(undefined)).toBe(1);
    expect(articlePageNumber("0")).toBeNull();
    expect(articlePageExists(18, 17)).toBe(false);
    expect(articlePageExists(17, 17)).toBe(true);
  });
  test("old article URL consolidates into online consultation", () => {
    expect(legacyConsultationTarget("artikel", "konsultasi-psikolog-online")).toBe("/konsultasi-psikolog-online");
  });
  test("both old service URLs consolidate into online consultation", () => {
    expect(legacyConsultationTarget("layanan", "konsultasi-psikolog-online")).toBe("/konsultasi-psikolog-online");
    expect(legacyConsultationTarget("layanan", "psikolog-online")).toBe("/konsultasi-psikolog-online");
    expect(legacyConsultationTarget("layanan", "konsultasi-online-offline")).toBeNull();
  });
  test("unknown services are missing", () => { expect(serviceIndexState("slug-yang-tidak-ada")).toBe("missing"); });
  test("coming-soon services remain known but cannot enter the sitemap", () => {
    for (const slug of ["hipnoterapi", "talent-acquisition", "executive-search"]) {
      expect(serviceIndexState(slug)).toBe("coming-soon");
      expect(COMPLETE_SERVICE_SLUGS.includes(slug)).toBe(false);
    }
  });
  test("complete online/offline service remains indexable", () => {
    expect(serviceIndexState("konsultasi-online-offline")).toBe("complete");
    expect(COMPLETE_SERVICE_SLUGS.includes("konsultasi-online-offline")).toBe(true);
  });
  test("merged article slug redirects to its target", () => {
    expect(articleMergeTarget("lama", { lama: "/artikel/baru" })).toBe("/artikel/baru");
  });
  test("slug outside the merge list is not redirected", () => {
    expect(articleMergeTarget("tidak-ada", { lama: "/artikel/baru" })).toBeNull();
    expect(articleMergeTarget("lama", {})).toBeNull();
  });
  test("chained merges are refused", () => {
    expect(articleMergeTarget("a", { a: "/artikel/b", b: "/artikel/c" })).toBeNull();
  });
  test("self and non-article targets are refused", () => {
    expect(articleMergeTarget("a", { a: "/artikel/a" })).toBeNull();
    expect(articleMergeTarget("a", { a: "/layanan/x" })).toBeNull();
  });
  test("merge list has no chained or invalid targets", () => {
    expect(articleMergeRedirectProblems()).toEqual([]);
  });
  test("merge list covers both merge groups", () => {
    expect(Object.keys(ARTICLE_MERGE_REDIRECTS).length).toBe(9);
    const targets = new Set(Object.values(ARTICLE_MERGE_REDIRECTS));
    expect([...targets].sort()).toEqual([
      "/artikel/konseling-pernikahan-online-solusi-praktis-profesional-mengatasi-konflik-pasangan",
      "/artikel/konseling-rumah-tangga-sidoarjo-solusi-profesional-pulihkan-komunikasi-dan-komitmen-pasangan",
    ]);
    expect(articleMergeTarget("konsultasi-psikologi-online-solusi-praktis-membangun-komunikasi-sehat-bersama-pasangan")).toBe("/artikel/konseling-pernikahan-online-solusi-praktis-profesional-mengatasi-konflik-pasangan");
    expect(articleMergeTarget("ekspektasi-rumah-tangga-tidak-lagi-sejalan-solusi-konseling-profesional-di-talenta-mulia")).toBe("/artikel/konseling-rumah-tangga-sidoarjo-solusi-profesional-pulihkan-komunikasi-dan-komitmen-pasangan");
  });
  test("merge list does not touch the legacy consultation slug", () => {
    expect(articleMergeTarget("konsultasi-psikolog-online")).toBeNull();
  });
});
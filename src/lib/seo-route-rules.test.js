import { describe, expect, test } from "bun:test";
import { ARTICLES_PER_PAGE, articlePageNumber, articlePageExists, legacyConsultationTarget, serviceIndexState, COMPLETE_SERVICE_SLUGS } from "./seo-route-rules";

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
});
import { describe, expect, test } from "bun:test";
import { analyticsAllowed, contactClickEvent, safeCampaignSearch } from "./google-analytics";

describe("GA4 tracking rules", () => {
  const consent = { accepted: true, recordedAt: "2026-11-10T02:32:00Z", noticeVersion: 1 };
  test("analytics requires separate explicit valid consent", () => {
    expect(analyticsAllowed(null, false)).toBe(false);
    expect(analyticsAllowed({ ...consent, accepted: false }, false)).toBe(false);
    expect(analyticsAllowed({ ...consent, recordedAt: "bad" }, false)).toBe(false);
    expect(analyticsAllowed(consent, false)).toBe(true);
  });
  test("Global Privacy Control overrides saved acceptance", () => { expect(analyticsAllowed(consent, true)).toBe(false); });
  test("WhatsApp links emit click_whatsapp, never a lead", () => {
    expect(contactClickEvent("https://wa.me/6282132990498?text=private")).toBe("click_whatsapp");
    expect(contactClickEvent("https://wa.me.attacker.test/123")).toBeNull();
  });
  test("telephone links emit click_call", () => { expect(contactClickEvent("tel:+6282132990498")).toBe("click_call"); });
  test("only the Buka di Maps button emits click_directions", () => {
    expect(contactClickEvent("https://maps.app.goo.gl/jytMfuarDW5F5FBE6", true)).toBe("click_directions");
    expect(contactClickEvent("https://maps.app.goo.gl/jytMfuarDW5F5FBE6", false)).toBeNull();
  });
  test("campaign URL parameters exclude all private form data", () => {
    expect(safeCampaignSearch("?email=private@example.test&nama=Private&text=private&organisasi=Private&utm_source=google&utm_medium=organic&utm_campaign=gbp")).toBe("?utm_source=google&utm_medium=organic&utm_campaign=gbp");
  });
});
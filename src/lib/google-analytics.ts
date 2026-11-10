/** Only explicit analytics consent permits Google to load or receive events. */
export const GA_ID = "G-V78VEQ6RQV";
export const ANALYTICS_CHOICE_KEY = "tm-analytics-choice-v1";

type Choice = { accepted: boolean; recordedAt: string; noticeVersion: 1 };
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function analyticsAllowed(choice: unknown, globalPrivacyControl: boolean): boolean {
  if (globalPrivacyControl || !choice || typeof choice !== "object") return false;
  const value = choice as Partial<Choice>;
  return value.accepted === true && value.noticeVersion === 1 &&
    typeof value.recordedAt === "string" && Number.isFinite(Date.parse(value.recordedAt));
}

export function readAnalyticsChoice(): Choice | null {
  try {
    const raw: unknown = JSON.parse(localStorage.getItem(ANALYTICS_CHOICE_KEY) || "null");
    if (raw && typeof raw === "object" && typeof (raw as Choice).accepted === "boolean" &&
      (raw as Choice).noticeVersion === 1 && Number.isFinite(Date.parse((raw as Choice).recordedAt))) {
      return raw as Choice;
    }
  } catch { /* Storage may be unavailable; remain denied. */ }
  return null;
}

function gpc(): boolean {
  return (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true;
}

export function permitsAnalytics(): boolean {
  return analyticsAllowed(readAnalyticsChoice(), gpc());
}

function disableAnalytics() {
  (window as unknown as Record<string, unknown>)[`ga-disable-${GA_ID}`] = true;
  document.querySelector("script[data-tm-ga]")?.remove();
  for (const cookie of document.cookie.split(";")) {
    const name = cookie.split("=")[0]?.trim();
    if (!name || !/^_ga(?:_|$)/.test(name)) continue;
    const domains = ["", ...location.hostname.split(".").map((_, i, parts) => parts.slice(i).join("."))];
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/;${domain ? ` domain=${domain};` : ""} SameSite=Lax`;
    }
  }
}

export function syncAnalyticsChoice() {
  if (!permitsAnalytics()) { disableAnalytics(); return; }
  (window as unknown as Record<string, unknown>)[`ga-disable-${GA_ID}`] = false;
  if (document.querySelector("script[data-tm-ga]")) return;
  window.gtag?.("consent", "update", { analytics_storage: "granted" });
  window.gtag?.("set", "developer_id.dZjgwMW", true);
  window.gtag?.("js", new Date());
  window.gtag?.("config", GA_ID, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    // Enhanced Measurement owns initial + history page views; never emit page_view here.
    page_location: `${location.origin}${location.pathname}${safeCampaignSearch(location.search)}`,
    page_referrer: safeReferrer(document.referrer),
  });
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  script.dataset["tmGa"] = "true";
  document.head.appendChild(script);
}

export function safeCampaignSearch(search: string): string {
  const source = new URLSearchParams(search);
  const result = new URLSearchParams();
  for (const key of ["utm_source", "utm_medium", "utm_campaign"]) {
    const value = source.get(key);
    if (value && /^[a-z0-9_-]{1,64}$/i.test(value)) result.set(key, value);
  }
  return result.size ? `?${result}` : "";
}

function safeReferrer(referrer: string): string {
  try { const url = new URL(referrer); return `${url.origin}${url.pathname}`; }
  catch { return ""; }
}

export function saveAnalyticsChoice(accepted: boolean) {
  try {
    localStorage.setItem(ANALYTICS_CHOICE_KEY, JSON.stringify({ accepted: accepted && !gpc(), recordedAt: new Date().toISOString(), noticeVersion: 1 }));
  } catch { /* If consent cannot be recorded, do not start tracking. */ }
  syncAnalyticsChoice();
}

export function contactClickEvent(href: string, directionsButton = false): "click_whatsapp" | "click_call" | "click_directions" | null {
  if (/^tel:/i.test(href)) return "click_call";
  try {
    const url = new URL(href, "https://www.talentamulia.co.id");
    if (url.protocol === "https:" && url.hostname === "wa.me") return "click_whatsapp";
    if (directionsButton && url.protocol === "https:" && ["maps.app.goo.gl", "maps.google.com", "www.google.com"].includes(url.hostname)) return "click_directions";
  } catch { /* Invalid URLs are not analytics events. */ }
  return null;
}

export function trackContactClick(event: "click_whatsapp" | "click_call" | "click_directions") {
  if (!permitsAnalytics()) return;
  window.gtag?.("event", event, { page_path: location.pathname });
}

// This is only a WhatsApp handoff, never generate_lead: no delivery is confirmed.
export function trackWhatsAppHandoff() { trackContactClick("click_whatsapp"); }
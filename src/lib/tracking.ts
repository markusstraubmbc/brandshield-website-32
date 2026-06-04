declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const track = (event: string, params: Record<string, string>) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", event, params);
  }
};

export const trackPhoneClick = (source: string) =>
  track("phone_click", { event_category: "contact", event_label: source });

export const trackEmailClick = (source: string) =>
  track("email_click", { event_category: "contact", event_label: source });

export const trackCtaClick = (label: string) =>
  track("cta_click", { event_category: "engagement", event_label: label });

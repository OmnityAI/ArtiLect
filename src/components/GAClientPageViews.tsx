"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

type Props = {
  measurementId: string;
};

// Storage key must match CookieConsent persistence
const STORAGE_KEY = "artilect_cookie_consent_v2";

function hasAnalyticsConsent(): boolean {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    let parsed: any;
    try { parsed = JSON.parse(raw); } catch { parsed = raw; }
    if (typeof parsed === "string") {
      return parsed === "accepted";
    }
    if (parsed && typeof parsed === "object") {
      return !!parsed?.prefs?.analytics;
    }
    return false;
  } catch {
    return false;
  }
}

export default function GAClientPageViews({ measurementId }: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const initializedRef = useRef(false);

  // Fire on route changes if consent is granted
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (typeof (window as any).gtag !== "function") return;
    if (!hasAnalyticsConsent()) return;

    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");

    // Send page_view; GA4 accepts config with page_path or event 'page_view'
    // Using event provides explicit control
    (window as any).gtag('event', 'page_view', {
      page_path: url,
      page_location: typeof window !== 'undefined' ? window.location.href : undefined,
      send_to: measurementId,
    });

    // Mark that we have sent at least one page_view after mount
    initializedRef.current = true;
  }, [pathname, searchParams, measurementId]);

  return null;
}

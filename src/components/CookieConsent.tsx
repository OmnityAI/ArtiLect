"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type ConsentState = "accepted" | "rejected" | "unset";
type ConsentPrefs = { analytics: boolean };

type Props = {
  measurementId: string;
};

// Minimal helpers to interact with gtag safely
declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

const STORAGE_KEY = "artilect_cookie_consent_v2";
const ONE_YEAR_MS = 365 * 24 * 60 * 60 * 1000;

export default function CookieConsent({ measurementId }: Props) {
  const [consent, setConsent] = useState<ConsentState>("unset");
  const [open, setOpen] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [prefs, setPrefs] = useState<ConsentPrefs>({ analytics: false });

  // Load stored preference
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        // v2 structured; fallback to v1 string if needed
        let parsed: any;
        try { parsed = JSON.parse(raw); } catch { parsed = raw; }
        if (typeof parsed === "string") {
          const state = parsed as ConsentState;
          if (state === "accepted" || state === "rejected") {
            setConsent(state);
            setPrefs({ analytics: state === "accepted" });
            setOpen(false);
            updateGtagConsent({ analytics: state === "accepted" });
            return;
          }
        } else if (parsed && typeof parsed === "object") {
          const { state, prefs: p, ts } = parsed as { state: ConsentState; prefs: ConsentPrefs; ts: number };
          const expired = !ts || (Date.now() - ts) > ONE_YEAR_MS;
          if (!expired && (state === "accepted" || state === "rejected")) {
            setConsent(state);
            setPrefs({ analytics: !!p?.analytics });
            setOpen(false);
            updateGtagConsent({ analytics: !!p?.analytics });
            return;
          }
        }
      }
      setConsent("unset");
      setOpen(true);
    } catch {
      setOpen(true);
    }
  }, []);

  // Expose a global opener so footer can trigger the manage dialog
  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any).__openCookieConsent = () => setOpen(true);
    }
  }, []);

  const updateGtagConsent = (p: ConsentPrefs) => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        ad_storage: 'denied',
        analytics_storage: p.analytics ? 'granted' : 'denied',
      });
      if (p.analytics) {
        window.gtag("config", measurementId, { send_page_view: true });
      }
    }
  };

  const persist = (state: ConsentState, p: ConsentPrefs) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ state, prefs: p, ts: Date.now() }));
  };

  const handleAccept = () => {
    const nextPrefs = { analytics: true };
    setPrefs(nextPrefs);
    setConsent("accepted");
    setOpen(false);
    persist("accepted", nextPrefs);
    updateGtagConsent(nextPrefs);
  };

  const handleReject = () => {
    const nextPrefs = { analytics: false };
    setPrefs(nextPrefs);
    setConsent("rejected");
    setOpen(false);
    persist("rejected", nextPrefs);
    updateGtagConsent(nextPrefs);
  };

  const handleManage = () => { setShowPrefs(true); setOpen(true); };

  const handleSavePrefs = () => {
    // Determine consent state from analytics preference
    const state: ConsentState = prefs.analytics ? "accepted" : "rejected";
    setConsent(state);
    setOpen(false);
    persist(state, prefs);
    updateGtagConsent(prefs);
    setShowPrefs(false);
  };

  // When banner is closed (user decided), render nothing; footer will provide Manage link
  if (!open && consent !== "unset") return null;

  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-[60] p-4">
        <Card className="max-w-3xl mx-auto shadow-lg border-border/60">
          <CardContent className="p-4 sm:p-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-foreground">This website uses cookies to function and to understand its audience.</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                  We use essential cookies to make our site work. With your consent, we also use non-essential analytics cookies to collect data about your visit. This data helps us improve our content. You can accept or reject these non-essential cookies. Your choice will be stored for one year.
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  For more detailed information, please read our {" "}
                  <a href="/privacy" className="text-primary underline-offset-2 hover:underline">Privacy Policy</a> and {" "}
                  <a href="/cookies" className="text-primary underline-offset-2 hover:underline">Cookie Policy</a>.
                </p>
              </div>

              {showPrefs && (
                <div className="rounded-md border border-border/60 p-3">
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      className="accent-primary"
                      checked={prefs.analytics}
                      onChange={(e) => setPrefs((prev) => ({ ...prev, analytics: e.target.checked }))}
                    />
                    Enable analytics cookies (non-essential)
                  </label>
                  <div className="flex gap-2 mt-3">
                    <Button size="sm" onClick={handleSavePrefs}>Save Preferences</Button>
                    <Button size="sm" variant="outline" onClick={() => setShowPrefs(false)}>Cancel</Button>
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-2 sm:justify-end">
                <Button variant="outline" onClick={handleReject} size="sm">
                  Reject Non-Essential
                </Button>
                <Button onClick={handleAccept} size="sm" className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
                  Accept All
                </Button>
                <Button variant="ghost" size="sm" onClick={() => setShowPrefs((v) => !v)}>
                  Manage Preferences
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type ConsentState = "accepted" | "rejected" | "unset";

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

const STORAGE_KEY = "artilect_cookie_consent_v1";

export default function CookieConsent({ measurementId }: Props) {
  const [consent, setConsent] = useState<ConsentState>("unset");
  const [open, setOpen] = useState(false);

  // Load stored preference
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as ConsentState | null;
      if (stored === "accepted" || stored === "rejected") {
        setConsent(stored);
        setOpen(false);
        applyConsent(stored);
      } else {
        setConsent("unset");
        setOpen(true);
      }
    } catch {
      setOpen(true);
    }
  }, []);

  const applyConsent = (state: ConsentState) => {
    const granted = state === "accepted" ? "granted" : "denied";
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        ad_storage: granted,
        analytics_storage: granted,
      });
      if (state === "accepted") {
        // Send initial page_view once after consent is granted
        window.gtag("config", measurementId, { send_page_view: true });
      }
    }
  };

  const handleAccept = () => {
    setConsent("accepted");
    setOpen(false);
    localStorage.setItem(STORAGE_KEY, "accepted");
    applyConsent("accepted");
  };

  const handleReject = () => {
    setConsent("rejected");
    setOpen(false);
    localStorage.setItem(STORAGE_KEY, "rejected");
    applyConsent("rejected");
  };

  const handleManage = () => {
    setOpen(true);
  };

  // Add a small floating manage button always visible in a corner
  const ManageFloating = () => (
    <button
      type="button"
      onClick={handleManage}
      className="fixed bottom-4 right-4 px-3 py-2 rounded-md text-xs bg-muted text-foreground border border-border/60 hover:bg-muted/80"
      aria-label="Manage cookie preferences"
    >
      Manage Cookies
    </button>
  );

  if (!open && consent !== "unset") {
    return <ManageFloating />;
  }

  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-[60] p-4">
        <Card className="max-w-3xl mx-auto shadow-lg border-border/60">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="text-sm text-muted-foreground leading-relaxed">
                We use cookies and similar technologies to improve your experience, analyze traffic, and for measurement.
                You can accept or reject non-essential cookies. See our {" "}
                <a href="/privacy" className="text-primary underline-offset-2 hover:underline">Privacy Policy</a> and {" "}
                <a href="/terms" className="text-primary underline-offset-2 hover:underline">Terms of Service</a>.
              </div>
              <div className="flex gap-2 ml-auto">
                <Button variant="outline" onClick={handleReject} size="sm">
                  Reject
                </Button>
                <Button onClick={handleAccept} size="sm" className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
                  Accept
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <ManageFloating />
    </>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service • Artilect",
  description:
    "Read the Terms of Service for Artilect Newsletter, covering subscriptions, privacy, content usage, and your responsibilities.",
  openGraph: {
    title: "Terms of Service • Artilect",
    description:
      "Read the Terms of Service for Artilect Newsletter, covering subscriptions, privacy, content usage, and your responsibilities.",
    siteName: "Artilect",
  },
  twitter: {
    title: "Terms of Service • Artilect",
    description:
      "Read the Terms of Service for Artilect Newsletter, covering subscriptions, privacy, content usage, and your responsibilities.",
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}

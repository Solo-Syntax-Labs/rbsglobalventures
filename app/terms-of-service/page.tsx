import type { Metadata } from "next";
import { TermsOfService } from '../components/TermsOfService';

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read the terms and conditions governing your use of the RBS Global Ventures website and services.",
  alternates: {
    canonical: "https://rbsglobalventures.com/terms-of-service",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function TermsOfServicePage() {
  return <TermsOfService />;
}

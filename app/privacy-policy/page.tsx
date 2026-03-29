import type { Metadata } from "next";
import { PrivacyPolicy } from '../components/PrivacyPolicy';

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read RBS Global Ventures' privacy policy to understand how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "https://rbsglobalventures.com/privacy-policy",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}

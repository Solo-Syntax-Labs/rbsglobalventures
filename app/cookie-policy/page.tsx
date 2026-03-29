import type { Metadata } from "next";
import { CookiePolicy } from '../components/CookiePolicy';

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Learn how RBS Global Ventures uses cookies and similar tracking technologies on our website.",
  alternates: {
    canonical: "https://rbsglobalventures.com/cookie-policy",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function CookiePolicyPage() {
  return <CookiePolicy />;
}

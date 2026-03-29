import type { Metadata } from "next";
import "./globals.css";
import { ClientWrapper } from "./components/ClientWrapper";

export const metadata: Metadata = {
  title: "RBS Global Ventures — Steel & Scrap Trading Experts",
  description:
    "RBS Global Ventures is a trusted steel supply and scrap trading company in Tamil Nadu, India. Quality steel products, transparent scrap trading, and reliable logistics across 20+ cities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}

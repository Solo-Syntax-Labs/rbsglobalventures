import type { Metadata } from "next";
import "./globals.css";
import { ClientWrapper } from "./components/ClientWrapper";

const SITE_URL = "https://rbsglobalventures.com";
const SITE_NAME = "RBS Global Ventures";
const SITE_DESCRIPTION =
  "RBS Global Ventures is a trusted steel supply and scrap trading company in Tamil Nadu, India. Quality steel products, transparent scrap trading, and reliable logistics across 20+ cities.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Steel & Scrap Trading Experts`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "steel trading Tamil Nadu",
    "scrap trading India",
    "RBS Global Ventures",
    "ferrous metals supplier",
    "non-ferrous metals",
    "e-waste recycling",
    "industrial scrap",
    "steel supply Tuticorin",
    "MSME steel company",
    "scrap management",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Steel & Scrap Trading Experts`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/rbs-logo.png",
        width: 512,
        height: 512,
        alt: "RBS Global Ventures Logo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: `${SITE_NAME} — Steel & Scrap Trading Experts`,
    description: SITE_DESCRIPTION,
    images: ["/rbs-logo.png"],
  },
  icons: {
    icon: [
      { url: "/rbs-logo.png", type: "image/png" },
    ],
    shortcut: "/rbs-logo.png",
    apple: "/rbs-logo.png",
  },
  verification: {
    google: "REPLACE_WITH_YOUR_GOOGLE_SEARCH_CONSOLE_CODE",
  },
  category: "business",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "Corporation"],
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      alternateName: "RBS Global Ventures Pvt Ltd",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/rbs-logo.png`,
        width: 512,
        height: 512,
      },
      image: `${SITE_URL}/rbs-logo.png`,
      description: SITE_DESCRIPTION,
      foundingDate: "2021",
      numberOfEmployees: { "@type": "QuantitativeValue", value: "10" },
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Royal Complex, Door No. 8G8, ST-8, Thisaikaval North Street",
        addressLocality: "Arumuganeri",
        postalCode: "628202",
        addressRegion: "Tamil Nadu",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "8.6334",
        longitude: "78.0866",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-8681971471",
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["English", "Tamil"],
        },
      ],
      email: "rbsglobalventures@gmail.com",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Steel & Scrap Trading Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Ferrous Metal Trading",
              description:
                "Trading of ferrous metals including steel rods, beams, and structural steel",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Non-Ferrous Metal Trading",
              description:
                "Trading of non-ferrous metals including copper, aluminium, and brass scrap",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "E-Waste Recycling",
              description:
                "Responsible electronic waste collection and recycling services",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Industrial Waste Management",
              description:
                "Comprehensive industrial scrap and waste management solutions",
            },
          },
        ],
      },
      areaServed: {
        "@type": "State",
        name: "Tamil Nadu",
        addressCountry: "IN",
      },
      knowsAbout: [
        "Steel Trading",
        "Scrap Management",
        "Ferrous Metals",
        "Non-Ferrous Metals",
        "E-Waste Recycling",
        "Industrial Waste",
      ],
      identifier: {
        "@type": "PropertyValue",
        name: "GSTIN",
        value: "33DWVPB8302Q1ZY",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-IN",
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: `${SITE_NAME} — Steel & Scrap Trading Experts`,
      description: SITE_DESCRIPTION,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
        ],
      },
    },
    {
      "@type": "SiteLinksSearchBox",
      "@id": `${SITE_URL}/#sitelinks`,
      url: SITE_URL,
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${SITE_URL}/?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}

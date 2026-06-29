import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "Clear View Cleaning Company | Exterior Cleaning in Charleston, SC",
    template: "%s | Clear View Cleaning Company",
  },
  description:
    "Premium exterior cleaning and home services in Charleston, SC. Window cleaning, pressure & soft washing, gutter cleaning, and mobile detailing. Owner-operated. Free quotes — call (843) 212-7116.",
  keywords: [
    "exterior cleaning Charleston SC",
    "window cleaning Charleston SC",
    "pressure washing Charleston SC",
    "soft washing Charleston SC",
    "gutter cleaning Charleston SC",
    "mobile detailing Charleston SC",
    "home services Charleston SC",
  ],
  authors: [{ name: site.owner }],
  openGraph: {
    title: "Clear View Cleaning Company | Exterior Cleaning in Charleston, SC",
    description:
      "Owner-operated exterior cleaning and home services in Charleston, SC. Windows, washing, gutters, and detailing. Free quotes.",
    type: "website",
    locale: "en_US",
    siteName: site.name,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: site.name,
    image: `${site.url}/og-image.jpg`,
    "@id": site.url,
    url: site.url,
    telephone: "+18432127116",
    founder: site.owner,
    areaServed: "Charleston, South Carolina and surrounding areas",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Charleston",
      addressRegion: "SC",
      addressCountry: "US",
    },
    sameAs: [site.instagramUrl],
    priceRange: "$$",
  };

  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="bg-white font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-coastal focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-navy-deep"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <StickyMobileCTA />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "@/styles/globals.css";
import { SITE } from "@/lib/constants";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { FloatingCta } from "@/components/layout/floating-cta";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const title = `${SITE.product} | ${SITE.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: title,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "trading discipline",
    "risk management",
    "trading psychology",
    "AI trading framework",
    "position sizing",
    "trading journal",
    "swing trading",
    "options trading",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  applicationName: SITE.product,
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: SITE.product,
    title,
    description: SITE.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#07070A" },
    { media: "(prefers-color-scheme: light)", color: "#FAFAF8" },
  ],
  width: "device-width",
  initialScale: 1,
};

const THEME_INIT_SCRIPT = `
(function () {
  try {
    var stored = localStorage.getItem("pm3-theme");
    document.documentElement.setAttribute("data-theme", stored === "light" ? "light" : "dark");
  } catch (e) {}
})();
`;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.product,
  url: SITE.url,
  description: SITE.description,
  brand: {
    "@type": "Brand",
    name: SITE.name,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen font-sans antialiased">
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-lg bg-gold-400 px-4 py-2 text-sm font-semibold text-ink-950 transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <ScrollProgress />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingCta />
      </body>
    </html>
  );
}

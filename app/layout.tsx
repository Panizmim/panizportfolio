import type { Metadata } from "next";
import localFont from "next/font/local";
import { site } from "@/content/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

/**
 * Poppins, self-hosted from app/fonts (SIL Open Font License — see OFL.txt).
 * One family across the whole site: --font-display and --font-body both point
 * at it, so headings and body stay on the same type while the two variables
 * remain separate if you ever want to split families again.
 *
 * Only the four weights the site uses are bundled. If you need another, add the
 * .woff2 next to these and list it here.
 */
const poppins = localFont({
  src: [
    { path: "./fonts/Poppins-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Poppins-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Poppins-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "./fonts/Poppins-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-poppins",
  display: "swap",
  // Trims the flash of unstyled text by matching the fallback's metrics.
  adjustFontFallback: "Arial",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · ${site.role}`,
    template: `%s · ${site.name}`,
  },
  description: site.tagline,
  authors: [{ name: site.name }],
  keywords: ["product designer", "UX designer", "UI design", "UX research", "portfolio"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} · ${site.role}`,
    description: site.tagline,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · ${site.role}`,
    description: site.tagline,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <head>
        {/*
          Runs before the first paint. Only an explicit choice is replayed here;
          with nothing stored the CSS media query in globals.css decides, so a
          first visit still follows the system. `suppressHydrationWarning` above
          is because this writes to <html> before React hydrates.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}",
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {/* Skip link — first thing a keyboard or screen-reader user meets. */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
        >
          Skip to content
        </a>
        <SmoothScroll />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        {/* Paper grain, over everything, never interactive. */}
        <div className="grain" aria-hidden="true" />
      </body>
    </html>
  );
}

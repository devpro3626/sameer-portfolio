import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Contact } from "@/components/layout/Contact";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ScrollManager } from "@/components/layout/ScrollManager";
import { profile } from "@/content/profile";
import { SITE_DESCRIPTION, SITE_KEYWORDS, SITE_TITLE, SITE_URL } from "@/lib/site";
import { HeaderVisibilityProvider } from "@/providers/HeaderVisibilityProvider";
import { SmoothScrollProvider } from "@/providers/SmoothScrollProvider";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const jakarta = Plus_Jakarta_Sans({ variable: "--font-jakarta", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_TITLE, template: `%s — ${profile.name}` },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  authors: [{ name: profile.name, url: SITE_URL }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
    siteName: profile.name,
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: SITE_TITLE, description: SITE_DESCRIPTION },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export const viewport: Viewport = {
  themeColor: "#080a0f",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body>
        <SmoothScrollProvider>
          <HeaderVisibilityProvider>
            <Header />
            <main>{children}</main>
            <Contact />
            <Footer />
            <ScrollManager />
          </HeaderVisibilityProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

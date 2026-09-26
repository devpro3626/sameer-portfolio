import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Contact } from "@/components/layout/Contact";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ScrollManager } from "@/components/layout/ScrollManager";
import { profile } from "@/content/profile";
import { HeaderVisibilityProvider } from "@/providers/HeaderVisibilityProvider";
import { SmoothScrollProvider } from "@/providers/SmoothScrollProvider";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const jakarta = Plus_Jakarta_Sans({ variable: "--font-jakarta", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://sameerbabar.com"),
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s — ${profile.name}`,
  },
  description: profile.intro,
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.intro,
    url: "/",
    siteName: profile.name,
    type: "website",
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

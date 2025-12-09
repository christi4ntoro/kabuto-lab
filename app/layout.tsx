import type { Metadata } from "next";
import { Geist, JetBrains_Mono, Newsreader } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from '@/components/shared/Footer';
import GoogleAnalytics from '@/components/shared/GoogleAnalytics';
import CookieConsent from '@/components/shared/CookieConsent';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "500", "700"],
  style: ["normal"],
});

const newsreaderSerif = Newsreader({
  variable: "--font-newsreader-serif",
  subsets: ["latin"],
  weight: ["300", "500", "700"],
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KabutoLab",
  description: "Immersive Experience Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${jetbrainsMono.variable} ${newsreaderSerif.variable} antialiased bg-black`}
      >
        <Header />
        
        {/* Main content wrapper - this will slide up over the footer */}
        <div className="main-content-wrapper">
          {children}
        </div>
        
        {/* Footer stays fixed underneath */}
        <Footer />

        {/* Google Analytics - Only loads in production */}
        {process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}

        {/* Cookie Consent Banner */}
        <CookieConsent />
      </body>
    </html>
  );
}
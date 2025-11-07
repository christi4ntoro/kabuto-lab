import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from '@/components/shared/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "500", "700"],
  style: ["normal"],
});

const newsreaderSerif = Newsreader({
  variable: "--font-newsreader-serif",
  subsets: ["latin"],
  weight: ["300", "500", "700"], // Normal (400), Medium (500), Bold (700)
  style: ["normal", "italic"],  // Enables italic if available
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
        className={`${geistSans.variable} ${geistMono.variable} ${newsreaderSerif.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
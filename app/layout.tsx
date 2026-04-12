import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ikon Property Service | Full Service. First Class.",
    template: "%s | Ikon Property Service",
  },
  description:
    "Ikon Property Service delivers premium property management, maintenance, and real estate solutions. Full service, first class — trusted by property owners nationwide.",
  keywords: [
    "property service",
    "property management",
    "real estate",
    "property maintenance",
    "ikon property",
  ],
  openGraph: {
    title: "Ikon Property Service | Full Service. First Class.",
    description:
      "Premium property management, maintenance, and real estate solutions.",
    type: "website",
    locale: "en_US",
    siteName: "Ikon Property Service",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

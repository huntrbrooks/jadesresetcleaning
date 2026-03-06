import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jade's Reset Cleaning | Melbourne Home Cleaning Services",
  description:
    "Professional residential cleaning services in Melbourne CBD and inner suburbs. Regular cleaning, deep cleans, end of lease, decluttering & home organisation. Reclaim your time and thrive in a refreshed space.",
  keywords:
    "cleaning services Melbourne, house cleaning, deep cleaning, end of lease cleaning, decluttering, home organisation, Melbourne CBD",
  openGraph: {
    title: "Jade's Reset Cleaning | Melbourne Home Cleaning Services",
    description:
      "Professional residential cleaning in Melbourne. Regular cleans, deep cleans, end of lease, decluttering & organisation. Reclaim your calm.",
    type: "website",
    locale: "en_AU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

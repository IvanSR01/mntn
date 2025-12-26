import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mntn – Explore the World",
  description: "Discover amazing travel destinations, tips, and experiences around the globe with Mntn.",
  keywords: ["travel", "adventure", "exploration", "tours", "destinations", "hiking", "backpacking", "vacation"],
  authors: [
    { name: "Ivan Nelson", url: "https://github.com/IvanSR01" }
  ],
  creator: "Ivan Nelson",
  publisher: "Mntn",
  openGraph: {
    title: "Mntn – Explore the World",
    description: "Discover amazing travel destinations, tips, and experiences around the globe with Mntn.",
    siteName: "Mntn",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mntn – Explore the World",
    description: "Discover amazing travel destinations, tips, and experiences around the globe with Mntn.",
    creator: "@IvanNelson",
  },
  icons: {
    icon: "/favicon.jpg",
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

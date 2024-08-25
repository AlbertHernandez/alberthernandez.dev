import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";

import type { Metadata } from "next";

import "./globals.css";

import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://alberthernandez.dev"),
  title: {
    default: "Albert Hernández | Backend Software Engineer",
    template: "%s | Albert Hernández",
  },
  description:
    "Backend Software Engineer with over 5 years of experience. Specializing in web development",
  keywords: [
    "Backend Engineer",
    "Software Development",
    "Node.js",
    "TypeScript",
    "Microservices",
    "Software Engineer",
  ],
  twitter: {
    card: "summary_large_image",
    site: "@AlbertHernandev",
    creator: "@AlbertHernandev",
    title: "Albert Hernández | Backend Software Engineer",
    description:
      "Backend Software Engineer with over 5 years of experience. Specializing in web development",
    images: ["/albert-hernandez-twitter-card.jpeg"],
  },
  authors: [{ name: "Albert Hernández" }],
  creator: "Albert Hernández",
  publisher: "Albert Hernández",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alberthernandez.dev",
    siteName: "Albert Hernández",
    title: "Albert Hernández | Backend Software Engineer",
    description:
      "Backend Software Engineer with over 5 years of experience. Specializing in web development",
    images: [
      {
        url: "/albert-hernandez-twitter-card.jpeg",
        width: 1500,
        height: 500,
        alt: "Albert Hernández - Backend Software Engineer",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },
  alternates: {
    canonical: "https://alberthernandez.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

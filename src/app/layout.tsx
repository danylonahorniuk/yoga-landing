import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin", "cyrillic"],
  weight: ["700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

const SITE_URL = "https://greatfit.ua";
const OG_IMAGE = "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=1200&h=630&fit=crop&q=85";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Great Fit Yoga Studio — Студія йоги у Києві",
  description: "Йога для будь-якого рівня підготовки. Хатха, флай-йога, інь-йога, аштанга та зумба. Перший місяць безкоштовно. Записуйтесь онлайн.",
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Great Fit Yoga Studio",
    locale: "uk_UA",
    title: "Great Fit Yoga Studio — Студія йоги у Києві",
    description: "Йога для будь-якого рівня підготовки. Хатха, флай-йога, інь-йога, аштанга та зумба. Перший місяць безкоштовно.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Great Fit Yoga Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Great Fit Yoga Studio — Студія йоги у Києві",
    description: "Йога для будь-якого рівня підготовки. Перший місяць безкоштовно.",
    images: [OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uk"
      className={`${oswald.variable} ${inter.variable} h-full antialiased`}
    >
      <body className={`${inter.className} min-h-full flex flex-col`}>{children}</body>
    </html>
  );
}

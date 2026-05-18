import type { Metadata, Viewport } from "next";
import { Cairo, Alexandria, IBM_Plex_Sans_Arabic } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

const alexandria = Alexandria({
  subsets: ["arabic", "latin"],
  variable: "--font-alexandria",
  display: "swap",
});

const ibmArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CHIKNO — تشيكنو | بيتزا تستاهل الجوع",
  description: "تشيكنو — تجربة بيتزا سينمائية فاخرة. اطلب دلوقتي واستمتع بأفضل البيتزا في مصر.",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "CHIKNO",
  },
  openGraph: {
    title: "CHIKNO — تشيكنو",
    description: "بيتزا تستاهل الجوع",
    locale: "ar_EG",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#ff8c1a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} ${alexandria.variable} ${ibmArabic.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
      </head>
      <body className="font-alexandria antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

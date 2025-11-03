import type { Metadata } from "next";
import { Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import AppProvider from "@/providers/app_provider";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Script from "next/script";

const noto = Noto_Kufi_Arabic({
  subsets: ["arabic", "latin"],
  variable: "--font-noto-kufi-arabic",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  fallback: ["system-ui", "arial"],
  preload: true,
  style: "normal",
});

export const metadata: Metadata = {
  title: "شركة الفردوسي التجارية",
  description: "لقطع غيار الشاحنات والمعدات الثقيلة",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={cn("antialiased", noto.variable, noto.className)}>
        <AppProvider>{children}</AppProvider>
      </body>

      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
        strategy="afterInteractive"
      />
    </html>
  );
}

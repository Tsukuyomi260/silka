import type { Metadata, Viewport } from "next";
import { Sora, Plus_Jakarta_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "silka — Achète sans te faire avoir",
  description:
    "Marketplace de téléphones et électronique d'occasion à Cotonou, sécurisée par séquestre.",
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#1f2a63",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${sora.variable} ${jakarta.variable} ${plexMono.variable} h-full`}
    >
      <body className="min-h-full flex justify-center bg-(--color-desk-bg) sm:py-8">
        <div className="relative flex w-full max-w-[430px] min-h-dvh flex-col overflow-hidden bg-white sm:min-h-[844px] sm:rounded-(--radius-sheet) sm:shadow-[0_24px_60px_rgba(31,42,99,0.18),0_2px_8px_rgba(0,0,0,0.08)]">
          {children}
        </div>
      </body>
    </html>
  );
}

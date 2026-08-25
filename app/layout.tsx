import type { Metadata } from "next";
import "./globals.css";
import { salonConfig } from "../config/salon";

export const metadata: Metadata = {
  title: salonConfig.seo.pages.home.title,
  description: salonConfig.seo.pages.home.description,
  applicationName: "Website-Vorlage Demo",
  category: "Design-Demo",
  openGraph: {
    title: salonConfig.seo.pages.home.title,
    description: salonConfig.seo.pages.home.description,
    type: "website",
    locale: "de_DE",
    ...(salonConfig.seo.baseUrl ? { url: salonConfig.seo.baseUrl } : {}),
  },
  robots: "noindex, nofollow, noarchive",
  icons: {
    icon: salonConfig.logo.src,
    shortcut: salonConfig.logo.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" data-scroll-behavior="smooth">
      <body
        style={
          {
            "--canvas": salonConfig.theme.canvas,
            "--surface": salonConfig.theme.surface,
            "--surface-muted": salonConfig.theme.surfaceMuted,
            "--ink": salonConfig.theme.ink,
            "--ink-soft": salonConfig.theme.inkSoft,
            "--accent": salonConfig.theme.accent,
            "--accent-dark": salonConfig.theme.accentDark,
            "--accent-soft": salonConfig.theme.accentSoft,
            "--accent-light": salonConfig.theme.accentLight,
            "--accent-hover": salonConfig.theme.accentHover,
          } as React.CSSProperties
        }
      >
        {children}
      </body>
    </html>
  );
}

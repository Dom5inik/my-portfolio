import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

// Used for mono-spaced elements like dates and codes
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "dom5inik | Junior Softwareentwickler",
  description: "Portfolio eines kreativen Junior Softwareentwicklers. Spezialisiert auf Next.js, TypeScript und modernes UI Design.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth" suppressHydrationWarning>
      <body
        // flex-col + min-h-screen ensures the footer stays at the bottom even with little content
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}


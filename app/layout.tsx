import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google"; // Switch to Inter for that clean look, JetBrains for code
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Max Mustermann | Full-Stack Entwickler",
  description: "Portfolio eines kreativen Full-Stack Entwicklers. Spezialisiert auf Next.js, TypeScript und modernes UI Design.",
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
    <html lang="de" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}


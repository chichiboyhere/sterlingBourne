import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BackToTop from "@/components/BackToTop";
import AOSProvider from "@/components/AOSProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sterling & Bourne | Audit & Advisory",
  description: "UK-based auditing firm. Specialising in audit and advisory.",
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
        <AOSProvider>{children}</AOSProvider>
        <BackToTop />
      </body>
    </html>
  );
}

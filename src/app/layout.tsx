import "./globals.css";

import type { Metadata } from "next";
import { Oxanium, Montserrat } from 'next/font/google'
export const metadata: Metadata = {
  title: "DevStage",
};

const oxanium = Oxanium({
  weight: ['500', '600'],
  subsets: ['latin'],
  variable: '--font-oxanium',
})

const montserrat = Montserrat({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oxanium} ${montserrat}`}>
      <body className="antialiased bg-gray-900 text-gray-100">{children}</body>
    </html>
  );
}

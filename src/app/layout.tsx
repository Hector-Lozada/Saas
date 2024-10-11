import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Head from "next/head"; // Importa Head para manejar el head del documento

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elegance Trading Group",
  description: "Mejora tu estado financiero",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <meta name="google-adsense-account" content="ca-pub-4480402395128186"/>
      <body className={clsx(dmSans.className, "")}>
        {children}
      </body>
    </html>
  );
}

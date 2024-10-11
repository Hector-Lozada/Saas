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
      <Head>
        <title>Elegance Trading Group</title>
        <meta name="description" content="Mejora tu estado financiero" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4480402395128186"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <body className={clsx(dmSans.className, "")}>
        {children}
      </body>
    </html>
  );
}

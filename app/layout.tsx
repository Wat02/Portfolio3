import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const IBM = IBM_Plex_Mono({
  weight: ["400", "700", "500", "100", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--IBM",
});
export const metadata: Metadata = {
  title: "Jovan J.- Front End Developer / NextJs Developer",
  description: " Welcome to WatFolio Dynamic Web Magic with next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={IBM.className}>{children}</body>
    </html>
  );
}

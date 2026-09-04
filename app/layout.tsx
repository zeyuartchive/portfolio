import type { Metadata } from "next";
import { bbbDMSans, haasThin } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "zeyuartchive",
  description: "Portfolio and archive of Zeyu Yin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${bbbDMSans.className} ${haasThin.variable}`}>
        {children}
      </body>
    </html>
  );
}

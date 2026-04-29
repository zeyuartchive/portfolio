import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const bbbDMSans = localFont({
  src: [
    {
      path: "./fonts/BBBDMSans-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/BBBDMSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/BBBDMSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/BBBDMSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-bbb-dm-sans",
});

const haasThin = localFont({
  src: "./fonts/NeueHaasUnicaPro-Thin.otf",
  variable: "--font-haas-thin",
});

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
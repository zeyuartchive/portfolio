import localFont from "next/font/local";

export const bbbDMSans = localFont({
  src: [
    { path: "./fonts/BBBDMSans-Light.ttf", weight: "300", style: "normal" },
    { path: "./fonts/BBBDMSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/BBBDMSans-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/BBBDMSans-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-bbb-dm-sans",
});

export const haasThin = localFont({
  src: "./fonts/NeueHaasUnicaPro-Thin.otf",
  variable: "--font-haas-thin",
});

import { Geist, Poppins, Outfit, Great_Vibes } from "next/font/google";

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400','700'],
  variable: '--font-poppins',
});

export const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
});
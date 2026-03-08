import { Geist, Geist_Mono, Great_Vibes, Outfit } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} `}
    >
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
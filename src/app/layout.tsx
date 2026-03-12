import { Geist, Geist_Mono, Great_Vibes, Outfit, Poppins } from "next/font/google";
import "./globals.css";
import { CartProvider } from "../../src/components/CartContext";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400','700'], // 400 normal, 700 bold
  variable: '--font-poppins',
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
      className={`${poppins.variable}`}
    >
      <body className="antialiased">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
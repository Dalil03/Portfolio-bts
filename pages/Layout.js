// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./Layout/Navbar"; // Adjust path if needed

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio BTS SIO",
  description: "Portfolio de Dalil Bousseiri - BTS SIO SLAM",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
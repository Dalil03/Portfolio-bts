// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./Layout/Navbar"; // Adjust path if needed
import { Poppins } from "next/font/google";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
export const metadata = {
  title: "Portfolio BTS SIO",
  description: "Portfolio de Dalil Bousseiri - BTS SIO SLAM",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head />
      <body className={`${poppins.className}  antialiased`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
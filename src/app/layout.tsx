import type { Metadata } from "next";
import { Poppins, Hind } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const hind = Hind({
  weight: ["400", "500", "600", "700"],
  subsets: ["devanagari"],
  variable: "--font-hind",
});

export const metadata: Metadata = {
  title: "Tejpal Smarak Inter College — Missa Baragaon, Ayodhya",
  description: "Tejpal Smarak Inter College, Missa Baragaon, Ayodhya, Uttar Pradesh. UP Board affiliated school.",
  verification: {
    google: "uFwfebRSMfMUJspJEAAIaDhQijUdYpXRhWO775XiuC8",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${hind.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
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
  description:
    "Tejpal Smarak Inter College, Missa Baragaon, Ayodhya, Uttar Pradesh. UP Board affiliated school offering quality education from Nursery to Class 12. Admissions open for 2026-27.",
  keywords: [
    "Tejpal Smarak Inter College",
    "TSIC Ayodhya",
    "UP Board school Ayodhya",
    "school Missa Baragaon",
    "admission Ayodhya school",
    "best school Ayodhya",
  ],
  verification: {
    google: "uFwfebRSMfMUJspJEAAIaDhQijUdYpXRhWO775XiuC8",
  },
  openGraph: {
    title: "Tejpal Smarak Inter College — Missa Baragaon, Ayodhya",
    description:
      "UP Board affiliated school offering quality education from Nursery to Class 12. 300+ students. Admissions open for 2026-27.",
    url: "https://tpsic-website.vercel.app",
    siteName: "Tejpal Smarak Inter College",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tejpal Smarak Inter College — Missa Baragaon, Ayodhya",
    description:
      "UP Board affiliated school offering quality education from Nursery to Class 12. Admissions open 2026-27.",
  },
  metadataBase: new URL("https://tpsic-website.vercel.app"),
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
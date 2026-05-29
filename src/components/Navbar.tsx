"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/admissions", label: "Admissions" },
    { href: "/faculty", label: "Faculty" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header>
      {/* Saffron Announcement Bar */}
      <div className="bg-orange-500 text-white text-center text-sm py-2 px-4">
        🎉 Satra 2026-27 ki admissions shuru ho gayi hain — abhi sampark karein!
      </div>

      {/* Main Navbar */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* Left: Logo + School Name */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-sm">
              TS
            </div>
            <div>
              <p className="text-blue-900 font-bold text-base leading-tight">
                Tejpal Smarak Inter College
              </p>
              <p className="text-gray-500 text-xs">
                Missa Baragaon, Ayodhya
              </p>
            </div>
          </Link>

          {/* Middle: Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-blue-900 border-b-2 border-orange-500 pb-1"
                    : "text-gray-600 hover:text-blue-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right: WhatsApp Button */}
          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          >
            WhatsApp
          </a>

        </div>
      </nav>
    </header>
  );
}
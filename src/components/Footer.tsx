"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;

  return (
    <footer className="mt-auto bg-blue-900">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {/* Column 1: Branding */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-base flex-shrink-0">
                TS
              </div>
              <div>
                <p className="font-bold text-white text-sm leading-tight">Tejpal Smarak Inter College</p>
                <p className="text-blue-300 text-xs mt-0.5">Missa Baragaon, Ayodhya</p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-blue-300 text-xs">📋 Code: 621282 | U-DISE: 09470911607</p>
              <p className="text-blue-300 text-xs">👨‍🏫 Principal: Rajesh Kumar</p>
              <p className="text-blue-300 text-xs">📅 Est. 2011 (HS) | 2016 (Inter)</p>
            </div>
          </div>

          {/* Column 2: Navigate */}
          <div>
            <p className="font-bold text-white text-xs uppercase tracking-wider mb-3">
              Navigate
            </p>
            <div className="flex flex-col gap-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/admissions", label: "Admissions" },
                { href: "/faculty", label: "Faculty" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-blue-300 hover:text-orange-400 text-xs transition-colors">
                  › {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Classes */}
          <div>
            <p className="font-bold text-white text-xs uppercase tracking-wider mb-3">
              Classes
            </p>
            <div className="flex flex-col gap-2">
              {["Nursery — KG", "Class 1 — 5", "Class 6 — 8", "Class 9 — 10", "Class 11 — 12"].map((item) => (
                <Link key={item} href="/admissions" className="text-blue-300 hover:text-orange-400 text-xs transition-colors">
                  › {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4: Contact */}
          <div className="col-span-2 md:col-span-1">
            <p className="font-bold text-white text-xs uppercase tracking-wider mb-3">
              Contact
            </p>
            <div className="flex flex-col gap-2 mb-4">
              <p className="text-blue-200 text-xs">📍 Missa Baragaon, Ruduli, Ayodhya UP</p>
              <a href="tel:+919935748696" className="text-blue-200 hover:text-orange-400 text-xs transition-colors">📞 +91 99357 48696</a>
              <a href="tel:+919415529912" className="text-blue-200 hover:text-orange-400 text-xs transition-colors">📞 +91 94155 29912</a>
              <a href="mailto:tejpalsmarakintercollege2011@gmail.com" className="text-blue-200 hover:text-orange-400 text-xs transition-colors break-all">✉️ tejpalsmarakintercollege2011@gmail.com</a>
            </div>
            <a
              href="https://wa.me/919935748696"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium px-3 py-2 rounded-lg transition-colors"
            >
              <span>💬</span>
              <div>
                <p className="text-xs font-bold leading-tight">WhatsApp Us</p>
                <p className="text-xs text-green-100 leading-tight">Reply within hours</p>
              </div>
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-700 mt-6 pt-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-blue-400 text-xs text-center md:text-left">
            © 2026 Tejpal Smarak Inter College, Missa Baragaon, Ayodhya. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-blue-500 text-xs">
            <span>UP Board</span>
            <span>•</span>
            <span>Est. 2011</span>
            <span>•</span>
            <span>Code: 621282</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
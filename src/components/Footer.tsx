import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto bg-blue-900">

      {/* CTA Strip */}
      <div className="bg-orange-500 py-3 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white text-sm font-medium">
            🎉 Admissions Open for 2026-27 — Limited Seats Available
          </p>
          <a
            href="https://wa.me/919935748696"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-orange-500 font-bold px-5 py-1.5 rounded-full text-xs hover:bg-orange-50 transition-colors whitespace-nowrap"
          >
            Apply Now →
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Column 1: Branding */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                TS
              </div>
              <div>
                <p className="font-bold text-white text-base leading-tight">Tejpal Smarak</p>
                <p className="font-bold text-white text-base leading-tight">Inter College</p>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-5">
              Empowering students from Nursery to Intermediate with quality education since 2011.
            </p>
            <div className="flex flex-col gap-1.5">
              <p className="text-blue-300 text-xs">📋 School Code: 621282</p>
              <p className="text-blue-300 text-xs">🏫 U-DISE: 09470911607</p>
              <p className="text-blue-300 text-xs">👨‍🏫 Principal: Rajesh Kumar</p>
              <p className="text-blue-300 text-xs">📅 Est. 2011 (HS) | 2016 (Inter)</p>
            </div>
          </div>

          {/* Column 2: Navigate */}
          <div>
            <p className="font-bold text-white text-sm uppercase tracking-wider mb-5">
              Navigate
            </p>
            <div className="flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/admissions", label: "Admissions" },
                { href: "/faculty", label: "Faculty" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-blue-300 hover:text-orange-400 text-sm transition-colors flex items-center gap-2 group"
                >
                  <span className="text-orange-400 group-hover:translate-x-1 transition-transform duration-200">›</span>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Academics */}
          <div>
            <p className="font-bold text-white text-sm uppercase tracking-wider mb-5">
              Classes
            </p>
            <div className="flex flex-col gap-3">
              {["Nursery — KG", "Class 1 — 5", "Class 6 — 8", "Class 9 — 10", "Class 11 — 12"].map((item) => (
                <Link
                  key={item}
                  href="/admissions"
                  className="text-blue-300 hover:text-orange-400 text-sm transition-colors flex items-center gap-2 group"
                >
                  <span className="text-orange-400 group-hover:translate-x-1 transition-transform duration-200">›</span>
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4: Contact */}
          <div>
            <p className="font-bold text-white text-sm uppercase tracking-wider mb-5">
              Contact
            </p>
            <div className="flex flex-col gap-3 mb-5">
              <div className="flex items-start gap-2">
                <span className="text-orange-400 text-sm mt-0.5">📍</span>
                <p className="text-blue-200 text-sm">Missa Baragaon, Ruduli<br />Ayodhya, UP — 224116</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-orange-400 text-sm">📞</span>
                <div>
                  <a href="tel:+919935748696" className="text-blue-200 hover:text-orange-400 text-sm transition-colors block">+91 99357 48696</a>
                  <a href="tel:+919415529912" className="text-blue-200 hover:text-orange-400 text-sm transition-colors block">+91 94155 29912</a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-orange-400 text-sm mt-0.5">✉️</span>
                <a href="mailto:tejpalsmarakintercollege2011@gmail.com" className="text-blue-200 hover:text-orange-400 text-xs transition-colors break-all">
                  tejpalsmarakintercollege2011@gmail.com
                </a>
              </div>
            </div>
            <a
              href="https://wa.me/919935748696"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-3 rounded-xl transition-colors w-full"
            >
              <span className="text-xl">💬</span>
              <div>
                <p className="text-sm font-bold leading-tight">WhatsApp Us</p>
                <p className="text-xs text-green-100">Reply within hours</p>
              </div>
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-700 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-blue-300 text-xs text-center md:text-left">
            © 2026 Tejpal Smarak Inter College, Missa Baragaon, Ayodhya. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-blue-400 text-xs">
            <span>UP Board Affiliated</span>
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
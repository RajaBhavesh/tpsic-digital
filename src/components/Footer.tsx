import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Column 1: School Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-white text-blue-900 flex items-center justify-center font-bold text-sm">
                TS
              </div>
              <p className="font-bold text-base">Tejpal Smarak Inter College</p>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-3">
              Shiksha se sashaktikaran — gaon se ujjwal bhavishya tak.
            </p>
            <p className="text-blue-300 text-xs">School Code: 621282</p>
            <p className="text-blue-300 text-xs mt-1">Principal: Rajesh Kumar</p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <p className="font-bold text-base mb-4">Quick Links</p>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-blue-200 hover:text-white text-sm transition-colors">Home</Link>
              <Link href="/about" className="text-blue-200 hover:text-white text-sm transition-colors">About</Link>
              <Link href="/admissions" className="text-blue-200 hover:text-white text-sm transition-colors">Admissions</Link>
              <Link href="/faculty" className="text-blue-200 hover:text-white text-sm transition-colors">Faculty</Link>
              <Link href="/contact" className="text-blue-200 hover:text-white text-sm transition-colors">Contact</Link>
            </div>
          </div>

          {/* Column 3: Contact */}
          <div>
            <p className="font-bold text-base mb-4">Sampark Karein</p>
            <div className="flex flex-col gap-2 text-blue-200 text-sm">
              <p>📍 Missa Baragaon, Ayodhya, UP</p>
              <a href="tel:+919935748696" className="hover:text-white transition-colors">
                📞 +91 99357 48696
              </a>
              <a href="mailto:tejpalsmarakintercollege2011@gmail.com" className="hover:text-white transition-colors text-xs break-all">
                ✉️ tejpalsmarakintercollege2011@gmail.com
              </a>
              <a
                href="https://wa.me/919935748696"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors text-center mt-2"
              >
                WhatsApp pe Message Karein
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-700 mt-8 pt-6 text-center text-blue-300 text-sm">
          © 2026 Tejpal Smarak Inter College, Missa Baragaon, Ayodhya. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
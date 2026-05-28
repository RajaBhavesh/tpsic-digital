export default function Navbar() {
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
          <div className="flex items-center gap-3">
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
          </div>

          {/* Middle: Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-gray-700 hover:text-blue-900 text-sm font-medium transition-colors">Home</a>
            <a href="/about" className="text-gray-700 hover:text-blue-900 text-sm font-medium transition-colors">About</a>
            <a href="/admissions" className="text-gray-700 hover:text-blue-900 text-sm font-medium transition-colors">Admissions</a>
            <a href="/faculty" className="text-gray-700 hover:text-blue-900 text-sm font-medium transition-colors">Faculty</a>
            <a href="/contact" className="text-gray-700 hover:text-blue-900 text-sm font-medium transition-colors">Contact</a>
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
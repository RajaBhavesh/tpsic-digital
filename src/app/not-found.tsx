import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-6">
      <div className="max-w-lg text-center">
        
        <div className="text-8xl font-bold text-blue-900 mb-4">404</div>
        
        <div className="w-16 h-1 bg-orange-500 mx-auto mb-8 rounded-full"></div>
        
        <h1 className="text-2xl font-bold text-blue-900 mb-4">
          Page Not Found
        </h1>
        
        <p className="text-gray-600 mb-8 leading-relaxed">
          The page you are looking for does not exist or has been moved.
          Please go back to the homepage.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-blue-900 hover:bg-blue-800 text-white font-medium px-8 py-3 rounded-lg transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-medium px-8 py-3 rounded-lg transition-colors"
          >
            Contact Us
          </Link>
        </div>

        <p className="text-gray-400 text-sm mt-10">
          Tejpal Smarak Inter College — Missa Baragaon, Ayodhya
        </p>

      </div>
    </main>
  );
}
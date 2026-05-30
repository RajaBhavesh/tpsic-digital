import Link from "next/link";
export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">

          <p className="text-orange-500 font-medium text-sm uppercase tracking-widest mb-4">
            UP Board Affiliated — Est. 2011
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight mb-6">
            Tejpal Smarak Inter College
          </h1>

          <p className="text-xl text-gray-600 mb-4">
            शिक्षा से सशक्तिकरण — गाँव से उज्ज्वल भविष्य तक
          </p>

          <p className="text-gray-500 text-base max-w-2xl mx-auto mb-10">
            Located in Missa Baragaon, Ayodhya, we provide quality education
            to 300+ students. UP Board affiliated school with experienced
            teachers, dedicated to shaping a brighter future for every child.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/admissions"
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3 rounded-lg transition-colors text-base"
            >
              Admission Inquiry
            </Link>
            <Link
              href="/about"
              className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-medium px-8 py-3 rounded-lg transition-colors text-base"
            >
              About Us
            </Link>
          </div>

        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-blue-900 text-white py-8 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-3xl font-bold text-orange-400">300+</p>
            <p className="text-blue-200 text-sm mt-1">Students</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-orange-400">UP Board</p>
            <p className="text-blue-200 text-sm mt-1">Affiliated</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-orange-400">Est. 2011</p>
            <p className="text-blue-200 text-sm mt-1">Established</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-orange-500 font-medium text-sm uppercase tracking-widest text-center mb-3">
            Why Choose Us
          </p>
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
            What Makes Us Different?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="text-center p-6 rounded-xl hover:bg-blue-50 transition-colors">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-lg font-bold text-blue-900 mb-3">
                Experienced Teachers
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our dedicated faculty brings years of experience and passion 
                for teaching. Every child gets personal attention.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl hover:bg-blue-50 transition-colors">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-lg font-bold text-blue-900 mb-3">
                Strong Academics
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                UP Board curriculum with focus on conceptual clarity. 
                Regular tests, homework support, and exam preparation.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl hover:bg-blue-50 transition-colors">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-lg font-bold text-blue-900 mb-3">
                Proven Results
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Consistent results in UP Board exams. Our students go on 
                to excel in higher education and careers.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl hover:bg-blue-50 transition-colors">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-lg font-bold text-blue-900 mb-3">
                Affordable Fees
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Quality education should be accessible to all. We keep 
                our fees affordable for every family in our community.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl hover:bg-blue-50 transition-colors">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-lg font-bold text-blue-900 mb-3">
                Holistic Development
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Beyond academics — we focus on character building, 
                discipline, and overall personality development.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl hover:bg-blue-50 transition-colors">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-lg font-bold text-blue-900 mb-3">
                Local & Trusted
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Serving Missa Baragaon and surrounding villages since 2011. 
                A school your community trusts.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-orange-500 py-12 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-4">
            Apne Bachche Ka Bhavishya Surakshit Karein
          </h2>
          <p className="text-orange-100 mb-8">
            Admissions open for 2026-27. Limited seats available.
          </p>
          <a
            href="https://wa.me/919935748696"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-orange-500 hover:bg-orange-50 font-bold px-8 py-3 rounded-lg transition-colors"
          >
            WhatsApp Karein — Abhi Apply Karein
          </a>
        </div>
      </section>

    </main>
  );
}
import Link from "next/link";

export default function About() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-orange-500 font-medium text-sm uppercase tracking-widest mb-4">
            Hamare Baare Mein
          </p>
          <h1 className="text-4xl font-bold text-blue-900 mb-6">
            About Our School
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Tejpal Smarak Inter College has been a beacon of quality education
            in Missa Baragaon, Ayodhya since 2011 — serving students from
            Nursery to Intermediate.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-xl p-8">
            <div className="text-3xl mb-4">🎯</div>
            <h2 className="text-xl font-bold text-blue-900 mb-3">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To provide quality, affordable education to every child in our
              community — regardless of their background. We believe every
              student deserves a chance to build a bright future.
            </p>
          </div>
          <div className="bg-orange-50 rounded-xl p-8">
            <div className="text-3xl mb-4">🌟</div>
            <h2 className="text-xl font-bold text-blue-900 mb-3">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To become the most trusted educational institution in Ayodhya —
              where students grow not just academically, but as responsible
              citizens and future leaders.
            </p>
          </div>
        </div>
      </section>

      {/* School at a Glance */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 text-center mb-10">
            School at a Glance
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center border border-gray-100">
              <p className="text-3xl font-bold text-orange-500 mb-2">2011</p>
              <p className="text-gray-600 text-sm">High School Est.</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center border border-gray-100">
              <p className="text-3xl font-bold text-orange-500 mb-2">2016</p>
              <p className="text-gray-600 text-sm">Intermediate Est.</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center border border-gray-100">
              <p className="text-3xl font-bold text-orange-500 mb-2">300+</p>
              <p className="text-gray-600 text-sm">Students Enrolled</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center border border-gray-100">
              <p className="text-3xl font-bold text-orange-500 mb-2">9</p>
              <p className="text-gray-600 text-sm">Classrooms</p>
            </div>
          </div>
        </div>
      </section>

      {/* Principal */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-10">
            Principal's Message
          </h2>
          <div className="bg-blue-900 rounded-xl p-10">
            <div className="w-16 h-16 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-xl mx-auto mb-6">
              RK
            </div>
            <p className="text-white text-lg leading-relaxed mb-6">
              "At Tejpal Smarak Inter College, we believe every child has
              unlimited potential. Our teachers don't just teach — they inspire,
              guide, and shape the future of our nation."
            </p>
            <p className="text-orange-400 font-medium">Rajesh Kumar</p>
            <p className="text-blue-300 text-sm">Principal, TSIC — 11 years experience</p>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 text-center mb-10">
            Our Facilities
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "📱", label: "5 Smart Classes" },
              { icon: "🔬", label: "Science Lab" },
              { icon: "💻", label: "Computer Lab" },
              { icon: "📚", label: "Library" },
              { icon: "🏃", label: "Sports Ground" },
              { icon: "📷", label: "9 CCTV Cameras" },
              { icon: "⚡", label: "Generator Backup" },
              { icon: "🌐", label: "WiFi Campus" },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-4 text-center border border-gray-100">
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="text-gray-700 text-sm font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Want to Join Our School?
          </h2>
          <p className="text-gray-600 mb-8">
            Admissions are open for the 2026-27 academic year.
            Contact us today to know more.
          </p>
          <Link
            href="/admissions"
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3 rounded-lg transition-colors"
          >
            Apply for Admission
          </Link>
        </div>
      </section>
    </main>
  );
}
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
            in Missa Baragaon, Ayodhya since 2011.
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

      {/* School Info */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 text-center mb-10">
            School at a Glance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 text-center border border-gray-100">
              <p className="text-4xl font-bold text-orange-500 mb-2">2011</p>
              <p className="text-gray-600 text-sm">Year Established</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center border border-gray-100">
              <p className="text-4xl font-bold text-orange-500 mb-2">300+</p>
              <p className="text-gray-600 text-sm">Students Enrolled</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center border border-gray-100">
              <p className="text-4xl font-bold text-orange-500 mb-2">UP Board</p>
              <p className="text-gray-600 text-sm">Affiliated</p>
            </div>
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
          <a
            href="/admissions"
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3 rounded-lg transition-colors"
          >
            Apply for Admission
          </a>
        </div>
      </section>
    </main>
  );
}
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Tejpal Smarak Inter College, Ayodhya",
  description: "Learn about Tejpal Smarak Inter College, Missa Baragaon, Ayodhya. UP Board affiliated school established in 2011. Meet our principal, faculty and explore our facilities.",
};
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

      {/* Campus Photos */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 text-center mb-10">
            Our Campus
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {[
              { src: "/images/eight.jpg", alt: "School Building" },
              { src: "/images/five.jpg", alt: "Lab" },
              { src: "/images/nine.jpg", alt: "Staff Meeting" },
              { src: "/images/ten.jpg", alt: "Campus View" },
              { src: "/images/four.jpg", alt: "School Bus" },
              { src: "/images/foutenn.jpg", alt: "Office" },
            ].map((photo, index) => (
              <div key={index} className="rounded-xl overflow-hidden h-44">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Achievements */}
<section className="py-16 px-6" style={{background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0f172a 100%)"}}>
  <div className="max-w-4xl mx-auto text-center">
    <p className="text-orange-400 font-medium text-sm uppercase tracking-widest mb-4">
      Our Pride
    </p>
    <h2 className="text-3xl font-bold text-white mb-3">
      Hall of Fame 🏆
    </h2>
    <p className="text-blue-300 text-sm mb-12 max-w-xl mx-auto">
      From Missa Baragaon to IITs and Medical colleges — our students prove that greatness has no address.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

      {/* Raja Bhavesh - JEE */}
      <div className="rounded-2xl p-6 text-left" style={{background: "rgba(255,255,255,0.07)", border: "1px solid rgba(249,115,22,0.4)"}}>
        <div className="flex items-center gap-4 mb-5">
          <div className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-white text-lg" style={{background: "linear-gradient(135deg, #f97316, #ea580c)"}}>
            RB
          </div>
          <div className="flex-1">
            <p className="text-white font-bold text-base">Raja Bhavesh</p>
            <p className="text-blue-300 text-xs mt-0.5">TSIC Alumni</p>
          </div>
          <div className="flex flex-col gap-1">
            <span className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full text-center">JEE Advanced</span>
            <span className="bg-orange-700 text-white text-xs px-3 py-1 rounded-full text-center">IIT BHU</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
            <span className="text-orange-400 text-xs font-medium w-28">District Rank 3</span>
            <span className="text-blue-200 text-xs">High School — Ayodhya (2018)</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
            <span className="text-orange-400 text-xs font-medium w-28">District Rank 1 🥇</span>
            <span className="text-blue-200 text-xs">Intermediate — Ayodhya (2020)</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
            <span className="text-orange-400 text-xs font-medium w-28">JEE Qualified</span>
            <span className="text-blue-200 text-xs">Mains & Advanced — IIT BHU (2021)</span>
          </div>
        </div>
      </div>

      {/* Renu Kumari - NEET */}
      <div className="rounded-2xl p-6 text-left" style={{background: "rgba(255,255,255,0.07)", border: "1px solid rgba(34,197,94,0.4)"}}>
        <div className="flex items-center gap-4 mb-5">
          <div className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-white text-lg" style={{background: "linear-gradient(135deg, #22c55e, #16a34a)"}}>
            RK
          </div>
          <div className="flex-1">
            <p className="text-white font-bold text-base">Renu Kumari</p>
            <p className="text-blue-300 text-xs mt-0.5">TSIC Alumni</p>
          </div>
          <div className="flex flex-col gap-1">
            <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full text-center">NEET</span>
            <span className="bg-green-700 text-white text-xs px-3 py-1 rounded-full text-center">MBBS</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
            <span className="text-green-400 text-xs font-medium w-28">NEET Qualified</span>
            <span className="text-blue-200 text-xs">Secured MBBS Admission (2019)</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
            <span className="text-green-400 text-xs font-medium w-28">Medical Doctor</span>
            <span className="text-blue-200 text-xs">From TSIC to MBBS — a proud journey</span>
          </div>
        </div>
      </div>

      {/* Agrima Singh - NEET */}
      <div className="rounded-2xl p-6 text-left" style={{background: "rgba(255,255,255,0.07)", border: "1px solid rgba(34,197,94,0.4)"}}>
        <div className="flex items-center gap-4 mb-5">
          <div className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-white text-lg" style={{background: "linear-gradient(135deg, #22c55e, #16a34a)"}}>
            AS
          </div>
          <div className="flex-1">
            <p className="text-white font-bold text-base">Agrima Singh</p>
            <p className="text-blue-300 text-xs mt-0.5">TSIC Alumni</p>
          </div>
          <div className="flex flex-col gap-1">
            <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full text-center">NEET 2024</span>
            <span className="bg-green-700 text-white text-xs px-3 py-1 rounded-full text-center">MBBS</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
            <span className="text-green-400 text-xs font-medium w-28">District Rank 4</span>
            <span className="text-blue-200 text-xs">High School — Ayodhya (2020)</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
            <span className="text-green-400 text-xs font-medium w-28">NEET Qualified</span>
            <span className="text-blue-200 text-xs">Secured MBBS Admission (2024)</span>
          </div>
        </div>
      </div>

      {/* UP Board Stats */}
      <div className="rounded-2xl p-6 text-left" style={{background: "rgba(255,255,255,0.07)", border: "1px solid rgba(99,102,241,0.4)"}}>
        <div className="flex items-center gap-4 mb-5">
          <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl" style={{background: "linear-gradient(135deg, #6366f1, #4f46e5)"}}>
            🏅
          </div>
          <div className="flex-1">
            <p className="text-white font-bold text-base">UP Board Excellence</p>
            <p className="text-blue-300 text-xs mt-0.5">District Level Recognition</p>
          </div>
          <span className="bg-indigo-500 text-white text-xs px-3 py-1 rounded-full">UP Board</span>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
            <span className="text-indigo-400 text-xs font-medium w-28">Rank 1 — District</span>
            <span className="text-blue-200 text-xs">Intermediate, Ayodhya (2020)</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
            <span className="text-indigo-400 text-xs font-medium w-28">Rank 3 — District</span>
            <span className="text-blue-200 text-xs">High School, Ayodhya (2018)</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
            <span className="text-indigo-400 text-xs font-medium w-28">Rank 4 — District</span>
            <span className="text-blue-200 text-xs">High School, Ayodhya (2020)</span>
          </div>
        </div>
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
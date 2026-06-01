import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Faculty — Tejpal Smarak Inter College",
  description: "Meet the dedicated teaching staff at Tejpal Smarak Inter College, Ayodhya. Experienced faculty teaching Biology, Physics, Hindi, Sociology and more.",
};

export default function Faculty() {
  const teachers = [
    {
      name: "Avneesh Kumar Tiwari",
      subject: "Biology",
      role: "Lecturer",
      experience: "9 years",
      initial: "AK",
      color: "bg-green-100 text-green-800",
    },
    {
      name: "Ram Neval",
      subject: "Physics",
      role: "Lecturer",
      experience: "8 years",
      initial: "RN",
      color: "bg-blue-100 text-blue-800",
    },
    {
      name: "Anshul Singh",
      subject: "Physics",
      role: "Lecturer",
      experience: "4 years",
      initial: "AS",
      color: "bg-blue-100 text-blue-800",
    },
    {
      name: "Ganga Sagar Pandey",
      subject: "Hindi",
      role: "Lecturer",
      experience: "11 years",
      initial: "GP",
      color: "bg-orange-100 text-orange-800",
    },
    {
      name: "Rajesh Kumar",
      subject: "Sociology",
      role: "Lecturer",
      experience: "7 years",
      initial: "RK",
      color: "bg-purple-100 text-purple-800",
    },
    {
      name: "Kamini Singh",
      subject: "Science",
      role: "Assistant Teacher",
      experience: "High School",
      initial: "KS",
      color: "bg-pink-100 text-pink-800",
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-20 px-6 text-center overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-orange-400 font-medium text-sm uppercase tracking-widest mb-4">
            हमारे शिक्षक
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Faculty
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Our dedicated and experienced teachers are committed to bringing
            out the best in every student — from Nursery to Intermediate.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-orange-500 py-8 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-3xl font-bold text-white">7</p>
            <p className="text-orange-100 text-sm mt-1">Faculty Members</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">11+</p>
            <p className="text-orange-100 text-sm mt-1">Max Experience</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">100%</p>
            <p className="text-orange-100 text-sm mt-1">Dedicated</p>
          </div>
        </div>
      </section>

      {/* Principal Card */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-orange-500 font-medium text-sm uppercase tracking-widest text-center mb-3">
            Leadership
          </p>
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">
            Principal
          </h2>
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="w-24 h-24 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-3xl flex-shrink-0">
              RK
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-1">Rajesh Kumar</h3>
              <p className="text-orange-400 font-medium mb-4">Principal — TSIC</p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-4">
                <span className="bg-white/10 text-blue-200 text-xs px-3 py-1 rounded-full">11 Years Experience</span>
                <span className="bg-white/10 text-blue-200 text-xs px-3 py-1 rounded-full">Intermediate Level</span>
              </div>
              <p className="text-blue-200 text-sm leading-relaxed italic">
                "At Tejpal Smarak Inter College, we believe every child has unlimited potential. Our teachers don't just teach — they inspire, guide, and shape the future of our nation."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-orange-500 font-medium text-sm uppercase tracking-widest text-center mb-3">
            Teaching Staff
          </p>
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
            Meet Our Teachers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teachers.map((teacher, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 ${teacher.color}`}>
                    {teacher.initial}
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-900 text-base group-hover:text-orange-500 transition-colors">{teacher.name}</h3>
                    <p className="text-gray-400 text-xs">{teacher.role}</p>
                  </div>
                </div>
                <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                  <span className="bg-orange-50 text-orange-600 text-xs font-medium px-3 py-1 rounded-full">
                    {teacher.subject}
                  </span>
                  <span className="text-gray-400 text-xs">
                    {teacher.experience} exp.
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 px-6 text-center bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Want Your Child to Learn from the Best?
          </h2>
          <p className="text-gray-600 mb-8">
            Our teachers are here to guide every student towards success.
            Admissions open for 2026-27.
          </p>
          <a
            href="https://wa.me/919935748696"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3 rounded-lg transition-colors"
          >
            WhatsApp करें — अभी
          </a>
        </div>
      </section>
    </main>
  );
}
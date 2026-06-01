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
      subjectColor: "bg-green-50 text-green-600",
    },
    {
      name: "Ram Neval",
      subject: "Physics",
      role: "Lecturer",
      experience: "8 years",
      initial: "RN",
      color: "bg-blue-100 text-blue-800",
      subjectColor: "bg-blue-50 text-blue-600",
    },
    {
      name: "Anshul Singh",
      subject: "Physics",
      role: "Lecturer",
      experience: "4 years",
      initial: "AS",
      color: "bg-blue-100 text-blue-800",
      subjectColor: "bg-blue-50 text-blue-600",
    },
    {
      name: "Ganga Sagar Pandey",
      subject: "Hindi",
      role: "Lecturer",
      experience: "11 years",
      initial: "GP",
      color: "bg-orange-100 text-orange-800",
      subjectColor: "bg-orange-50 text-orange-600",
    },
    {
      name: "Rajesh Kumar",
      subject: "Sociology",
      role: "Lecturer",
      experience: "7 years",
      initial: "RK",
      color: "bg-purple-100 text-purple-800",
      subjectColor: "bg-purple-50 text-purple-600",
    },
    {
      name: "Kamini Singh",
      subject: "Science",
      role: "Assistant Teacher",
      experience: "High School",
      initial: "KS",
      color: "bg-pink-100 text-pink-800",
      subjectColor: "bg-pink-50 text-pink-600",
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
            Dedicated, experienced, and passionate — our teachers shape the future of every student at TSIC.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-orange-500 py-6 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-white">7</p>
            <p className="text-orange-100 text-xs mt-1">Faculty Members</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">11+</p>
            <p className="text-orange-100 text-xs mt-1">Years Max Experience</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">IIT + MBBS</p>
            <p className="text-orange-100 text-xs mt-1">Alumni Produced</p>
          </div>
        </div>
      </section>

      {/* Principal */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-orange-500 font-medium text-sm uppercase tracking-widest text-center mb-3">
            नेतृत्व
          </p>
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">
            Our Principal
          </h2>
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="w-24 h-24 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-3xl flex-shrink-0 border-4 border-orange-300">
              RK
            </div>
            <div className="text-center md:text-left flex-1">
              <h3 className="text-2xl font-bold text-white mb-1">Rajesh Kumar</h3>
              <p className="text-orange-400 font-medium mb-4">Principal — Tejpal Smarak Inter College</p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-5">
                <span className="bg-white/10 text-blue-200 text-xs px-3 py-1 rounded-full">11 Years Experience</span>
                <span className="bg-white/10 text-blue-200 text-xs px-3 py-1 rounded-full">Intermediate Level</span>
                <span className="bg-orange-500/30 text-orange-300 text-xs px-3 py-1 rounded-full">UP Board Expert</span>
              </div>
              <blockquote className="text-blue-200 text-sm leading-relaxed italic border-l-2 border-orange-500 pl-4">
                "Every child has unlimited potential. Our teachers don't just teach — they inspire, guide, and shape the future of our nation."
              </blockquote>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {teachers.map((teacher, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-5">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 ${teacher.color}`}>
                    {teacher.initial}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-blue-900 text-sm group-hover:text-orange-500 transition-colors leading-tight">{teacher.name}</h3>
                    <p className="text-gray-400 text-xs mt-0.5">{teacher.role}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${teacher.subjectColor}`}>
                    {teacher.subject}
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="text-orange-400 text-xs">⭐</span>
                    <span className="text-gray-400 text-xs">{teacher.experience}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 text-center mb-10">
            Our Teaching Philosophy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "🎯", title: "Result Focused", desc: "Consistent UP Board toppers — District Rank 1 in Intermediate (2020)" },
              { icon: "❤️", title: "Student First", desc: "Every teacher is available for doubt clearing beyond school hours" },
              { icon: "🌱", title: "Holistic Growth", desc: "Beyond academics — character building, discipline, and life skills" },
            ].map((item, index) => (
              <div key={index} className="text-center p-6 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all duration-300">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-blue-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 py-14 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-3">
            Want Your Child Guided by the Best?
          </h2>
          <p className="text-blue-200 mb-8">
            Admissions open for 2026-27. Limited seats available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919935748696"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-lg transition-colors"
            >
              💬 WhatsApp करें — अभी
            </a>
            <a
              href="/admissions"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-medium px-8 py-3 rounded-lg transition-colors"
            >
              Admissions देखें
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
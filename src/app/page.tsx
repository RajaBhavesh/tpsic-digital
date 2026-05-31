import Link from "next/link";

export default function Home() {
  const notices = [
    {
      date: "29 May 2026",
      title: "Annual Examination Schedule 2026",
      tag: "Exam",
      tagColor: "bg-red-100 text-red-700",
    },
    {
      date: "25 May 2026",
      title: "Admissions Open for 2026-27 Academic Year",
      tag: "Admission",
      tagColor: "bg-green-100 text-green-700",
    },
    {
      date: "20 May 2026",
      title: "Parent-Teacher Meeting — 5th June 2026",
      tag: "Event",
      tagColor: "bg-blue-100 text-blue-700",
    },
    {
      date: "15 May 2026",
      title: "Result Declaration — Class 10 & 12",
      tag: "Result",
      tagColor: "bg-orange-100 text-orange-700",
    },
  ];

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
    <p className="text-xl text-gray-600 mb-4 font-[var(--font-hind)]" lang="hi">
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
        Hamare Baare Mein
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
            What Makes Us Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl hover:bg-blue-50 transition-colors">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-lg font-bold text-blue-900 mb-3">Experienced Teachers</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                7 dedicated faculty members with up to 11 years of teaching experience. Led by Principal Rajesh Kumar.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl hover:bg-blue-50 transition-colors">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-lg font-bold text-blue-900 mb-3">5 Smart Classes</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Modern smart classrooms with digital learning tools — bringing 21st century education to Ayodhya.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl hover:bg-blue-50 transition-colors">
              <div className="text-5xl mb-4">🔬</div>
              <h3 className="text-lg font-bold text-blue-900 mb-3">Science & Computer Lab</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Fully equipped Science laboratory and Computer lab with internet/WiFi facility for students.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl hover:bg-blue-50 transition-colors">
              <div className="text-5xl mb-4">📷</div>
              <h3 className="text-lg font-bold text-blue-900 mb-3">9 CCTV Cameras</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Complete campus surveillance with 9 CCTV cameras — ensuring safety and security of every student.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl hover:bg-blue-50 transition-colors">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-lg font-bold text-blue-900 mb-3">Library & Sports</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Well-stocked library and sports ground — because education is not just academics, it's overall growth.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl hover:bg-blue-50 transition-colors">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-lg font-bold text-blue-900 mb-3">Full Infrastructure</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Generator backup, clean drinking water, separate toilets for boys & girls, boundary wall and iron gate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notice Board */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-orange-500 font-medium text-sm uppercase tracking-widest text-center mb-3">
            Latest Updates
          </p>
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">
            Notice Board
          </h2>
          <div className="flex flex-col gap-4">
            {notices.map((notice, index) => (
              <div key={index} className="bg-white rounded-xl p-5 border border-gray-100 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="text-center min-w-[60px]">
                    <p className="text-xs text-gray-400">{notice.date}</p>
                  </div>
                  <div>
                    <p className="text-blue-900 font-medium text-sm">{notice.title}</p>
                  </div>
                </div>
                <span className={`text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap ${notice.tagColor}`}>
                  {notice.tag}
                </span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">
              More notices will appear here as they are published by school administration.
            </p>
          </div>
        </div>
      </section>
      
      {/* Campus Gallery */}
<section className="py-16 px-6 bg-white">
  <div className="max-w-5xl mx-auto">
    <p className="text-orange-500 font-medium text-sm uppercase tracking-widest text-center mb-3">
      Our Campus
    </p>
    <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">
      Life at TSIC
    </h2>
    <div className="grid grid-cols-3 gap-4">
      {[
        { src: "/images/eight.jpg", alt: "School Building" },
        { src: "/images/eleven.jpg", alt: "Campus" },
        { src: "/images/seven.jpg", alt: "Students" },
        { src: "/images/six.jpg", alt: "Students Group" },
        { src: "/images/four.jpg", alt: "School Bus" },
        { src: "/images/nine.jpg", alt: "Staff Meeting" },
      ].map((photo, index) => (
        <div key={index} className="rounded-xl overflow-hidden h-44 shadow-sm">
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
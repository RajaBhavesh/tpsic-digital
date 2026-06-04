"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const heroSlides = [
  { src: "/images/four.jpg", alt: "School Bus with Teacher" },
  { src: "/images/nine.jpg", alt: "Faculty Group Photo" },
];

function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => setCurrent(index);

  return (
    <section className="relative py-20 px-6 text-center overflow-hidden" style={{ minHeight: "420px" }}>
      {heroSlides.map((slide, i) => (
        <div key={i} className="absolute inset-0 transition-opacity duration-1000" style={{ opacity: i === current ? 1 : 0 }}>
          <Image src={slide.src} alt={slide.alt} fill className="object-cover" priority={i === 0} sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/65 to-blue-900/50" />
        </div>
      ))}

      <div className="relative z-10 max-w-4xl mx-auto">
        <p className="text-orange-400 font-medium text-sm uppercase tracking-widest mb-4">हमारे शिक्षक</p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">Our Faculty</h1>
        <p className="text-blue-200 text-lg max-w-2xl mx-auto">
          Dedicated, experienced, and passionate — our teachers shape the future of every student at TSIC.
        </p>
      </div>

      <div className="absolute bottom-5 left-0 right-0 z-20 flex justify-center gap-2">
        {heroSlides.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${i === current ? "bg-orange-400 w-6 h-2" : "bg-white/50 hover:bg-white/80 w-2 h-2"}`} />
        ))}
      </div>
      <button onClick={() => goTo((current - 1 + heroSlides.length) % heroSlides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl transition-all" aria-label="Previous">‹</button>
      <button onClick={() => goTo((current + 1) % heroSlides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl transition-all" aria-label="Next">›</button>
    </section>
  );
}

export default function Faculty() {
  const teachers = [
    {
      name: "Rajesh Kumar",
      subject: "Sociology",
      role: "Principal & Lecturer",
      experience: "11 years",
      photo: "/images/rajesh.jpg",
      subjectColor: "bg-purple-50 text-purple-600",
      ringColor: "ring-purple-200",
    },
    {
      name: "Avneesh Kumar Tiwari",
      subject: "Biology",
      role: "Lecturer",
      experience: "9 years",
      photo: "/images/avneesh.jpg",
      subjectColor: "bg-green-50 text-green-600",
      ringColor: "ring-green-200",
    },
    {
      name: "Ram Neval",
      subject: "Physics",
      role: "Lecturer",
      experience: "8 years",
      photo: "/images/ramneval.jpg",
      subjectColor: "bg-blue-50 text-blue-600",
      ringColor: "ring-blue-200",
    },
    {
      name: "Ganga Sagar Pandey",
      subject: "Hindi",
      role: "Lecturer",
      experience: "11 years",
      photo: "/images/gangasagar.jpg",
      subjectColor: "bg-orange-50 text-orange-600",
      ringColor: "ring-orange-200",
    },
    {
      name: "Anshul Singh",
      subject: "Physics",
      role: "Lecturer",
      experience: "4 years",
      photo: "/images/anshul.jpg",
      subjectColor: "bg-blue-50 text-blue-600",
      ringColor: "ring-blue-200",
    },
    {
      name: "Kamini Singh",
      subject: "Science",
      role: "Assistant Teacher",
      experience: "High School",
      photo: "/images/kamini.jpg",
      subjectColor: "bg-pink-50 text-pink-600",
      ringColor: "ring-pink-200",
    },
  ];

  return (
    <main>
      <HeroSlider />

      {/* Stats */}
      <section className="bg-orange-500 py-6 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-4 text-center">
          <div><p className="text-2xl font-bold text-white">7</p><p className="text-orange-100 text-xs mt-1">Faculty Members</p></div>
          <div><p className="text-2xl font-bold text-white">11+</p><p className="text-orange-100 text-xs mt-1">Years Max Experience</p></div>
          <div><p className="text-2xl font-bold text-white">IIT + MBBS</p><p className="text-orange-100 text-xs mt-1">Alumni Produced</p></div>
        </div>
      </section>

      {/* Principal */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-orange-500 font-medium text-sm uppercase tracking-widest text-center mb-3">नेतृत्व</p>
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">Our Principal</h2>
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8">
            {/* Real photo for principal */}
            <div className="w-28 h-28 rounded-full overflow-hidden flex-shrink-0 ring-4 ring-orange-400 relative">
              <Image
                src="/images/rajesh_kumar.jpg"
                alt="Principal Rajesh Kumar"
                fill
                className="object-cover object-top"
                sizes="112px"
              />
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

      {/* Faculty Grid — with real photos */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-orange-500 font-medium text-sm uppercase tracking-widest text-center mb-3">Teaching Staff</p>
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">Meet Our Teachers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {teachers.map((teacher, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-5">
                  {/* Real photo — circular crop */}
                  <div className={`w-16 h-16 rounded-full overflow-hidden flex-shrink-0 ring-2 ${teacher.ringColor} relative bg-gray-100`}>
                    <Image
                      src={teacher.photo}
                      alt={teacher.name}
                      fill
                      className="object-cover object-top"
                      sizes="64px"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-blue-900 text-sm group-hover:text-orange-500 transition-colors leading-tight">
                      {teacher.name}
                    </h3>
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

      {/* Teaching Philosophy */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 text-center mb-10">Our Teaching Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "🎯", title: "Result Focused", desc: "Consistent UP Board toppers — District Rank 1 in Intermediate (2020)" },
              { icon: "❤️", title: "Student First",  desc: "Every teacher is available for doubt clearing beyond school hours" },
              { icon: "🌱", title: "Holistic Growth", desc: "Beyond academics — character building, discipline, and life skills" },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all duration-300">
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
          <h2 className="text-2xl font-bold text-white mb-3">Want Your Child Guided by the Best?</h2>
          <p className="text-blue-200 mb-8">Admissions open for 2026-27. Limited seats available.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/919935748696" target="_blank" rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-lg transition-colors">
              💬 WhatsApp करें — अभी
            </a>
            <a href="/admissions" className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-medium px-8 py-3 rounded-lg transition-colors">
              Admissions देखें
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
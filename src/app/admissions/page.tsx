"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const heroSlides = [
  { src: "/images/seven.jpg", alt: "Students" },
  { src: "/images/six.jpg",   alt: "Student Activities" },
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
        <p className="text-orange-400 font-medium text-sm uppercase tracking-widest mb-4">Admissions 2026-27</p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">Join Tejpal Smarak Inter College</h1>
        <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-8">
          Admissions open for 2026-27. Nursery to Class 12. Limited seats — apply today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://wa.me/919935748696" target="_blank" rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-lg transition-colors">
            💬 WhatsApp करें — अभी Apply करें
          </a>
          <a href="tel:+919935748696"
            className="bg-white/20 hover:bg-white/30 text-white border border-white/40 font-medium px-8 py-3 rounded-lg transition-colors">
            📞 Call करें
          </a>
        </div>
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

export default function Admissions() {
  return (
    <main>
      <HeroSlider />

      {/* Quick Stats */}
      <section className="bg-orange-500 py-6 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-4 text-center">
          <div><p className="text-2xl font-bold text-white">300+</p><p className="text-orange-100 text-xs mt-1">Students</p></div>
          <div><p className="text-2xl font-bold text-white">Nursery—12</p><p className="text-orange-100 text-xs mt-1">All Classes</p></div>
          <div><p className="text-2xl font-bold text-white">UP Board</p><p className="text-orange-100 text-xs mt-1">Affiliated</p></div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-orange-500 font-medium text-sm uppercase tracking-widest text-center mb-3">Simple Steps</p>
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">Admission Process</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Contact Us", desc: "Call or WhatsApp to express interest", icon: "📞" },
              { step: "2", title: "Visit School", desc: "Meet our teachers and see facilities", icon: "🏫" },
              { step: "3", title: "Submit Form", desc: "Fill and submit the admission form", icon: "📝" },
              { step: "4", title: "Confirmation", desc: "Get confirmed and pay fees", icon: "✅" },
            ].map((item) => (
              <div key={item.step} className="text-center group">
                <div className="w-14 h-14 rounded-full bg-blue-900 group-hover:bg-orange-500 text-white flex items-center justify-center text-2xl mx-auto mb-3 transition-colors duration-300">
                  {item.icon}
                </div>
                <p className="text-xs font-bold text-orange-500 mb-1">Step {item.step}</p>
                <h3 className="font-bold text-blue-900 text-sm mb-1">{item.title}</h3>
                <p className="text-gray-500 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Classes */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-orange-500 font-medium text-sm uppercase tracking-widest text-center mb-3">सभी कक्षाएं</p>
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">Nursery से Class 12 तक</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { class: "Nursery — KG", level: "Pre-Primary", icon: "🌱" },
              { class: "Class 1 — 5", level: "Primary", icon: "📖" },
              { class: "Class 6 — 10", level: "Secondary", icon: "🎓" },
              { class: "Class 11 — 12", level: "Intermediate", icon: "🏆" },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl p-6 text-center border bg-white border-gray-100 transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
                <div className="text-3xl mb-3">{item.icon}</div>
                <p className="text-base font-bold mb-1 text-blue-900">{item.class}</p>
                <p className="text-xs mb-3 text-gray-500">{item.level}</p>
                <p className="text-xs italic text-gray-400">Fee details on request</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-orange-500 font-medium text-sm uppercase tracking-widest text-center mb-3">तैयार रहें</p>
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">Documents Required</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { doc: "Birth Certificate", icon: "📄" },
              { doc: "Previous Class Marksheet / TC", icon: "📋" },
              { doc: "Aadhar Card (Student)", icon: "🪪" },
              { doc: "Aadhar Card (Parent/Guardian)", icon: "🪪" },
              { doc: "Passport Size Photos (4)", icon: "📸" },
              { doc: "Caste Certificate (if applicable)", icon: "📜" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-blue-50 hover:bg-blue-100 rounded-xl px-4 py-3 transition-colors">
                <span className="text-xl">{item.icon}</span>
                <p className="text-gray-700 text-sm font-medium">{item.doc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="bg-blue-900 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-10">Why Join TSIC?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "🏆", text: "District Toppers" },
              { icon: "📱", text: "5 Smart Classes" },
              { icon: "🔬", text: "Science Lab" },
              { icon: "💰", text: "Affordable Fees" },
            ].map((item, i) => (
              <div key={i} className="bg-white/10 rounded-xl p-4 text-center">
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="text-white text-xs font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 py-14 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-3">Ready to Apply?</h2>
          <p className="text-orange-100 mb-8">WhatsApp करें — fastest response, within hours.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/919935748696" target="_blank" rel="noopener noreferrer"
              className="bg-white text-orange-500 hover:bg-orange-50 font-bold px-8 py-3 rounded-lg transition-colors">
              💬 WhatsApp करें — अभी
            </a>
            <Link href="/contact" className="bg-white text-orange-500 hover:bg-orange-50 font-bold px-8 py-3 rounded-lg transition-colors">
              Contact Details देखें
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
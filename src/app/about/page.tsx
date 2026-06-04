"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const aboutSlides = [
  { src: "/images/one.jpg",      alt: "TSIC Entrance Gate" },
  { src: "/images/eight.jpg",    alt: "School Building" },
  { src: "/images/eleven.jpg",   alt: "Campus View" },
  { src: "/images/thirteen.jpg", alt: "CCTV Monitoring Room" },
];

const admissionSlides = [
  { src: "/images/seven.jpg", alt: "Students" },
  { src: "/images/six.jpg",   alt: "Student Activities" },
];

const facultySlides = [
  { src: "/images/four.jpg", alt: "School Bus with Teacher" },
  { src: "/images/nine.jpg", alt: "Faculty Group Photo" },
];

const contactSlides = [
  { src: "/images/ten.jpg", alt: "School Ground and Buses" },
];

function HeroSlider({ slides, title, subtitle, description, children }: {
  slides: { src: string; alt: string }[];
  title: string;
  subtitle?: string;
  description: string;
  children?: React.ReactNode;
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goTo = (index: number) => setCurrent(index);

  return (
    <section className="relative py-20 px-6 text-center overflow-hidden" style={{ minHeight: "420px" }}>
      {/* Background images — all stacked, only current visible */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/65 to-blue-900/50" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {subtitle && (
          <p className="text-orange-400 font-medium text-sm uppercase tracking-widest mb-4">
            {subtitle}
          </p>
        )}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
          {title}
        </h1>
        <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-8">
          {description}
        </p>
        {children}
      </div>

      {/* Dots — only if more than 1 slide */}
      {slides.length > 1 && (
        <div className="absolute bottom-5 left-0 right-0 z-20 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-orange-400 w-6 h-2"
                  : "bg-white/50 hover:bg-white/80 w-2 h-2"
              }`}
            />
          ))}
        </div>
      )}

      {/* Arrows — only if more than 1 slide */}
      {slides.length > 1 && (
        <>
          <button
            onClick={() => goTo((current - 1 + slides.length) % slides.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl transition-all"
            aria-label="Previous"
          >‹</button>
          <button
            onClick={() => goTo((current + 1) % slides.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl transition-all"
            aria-label="Next"
          >›</button>
        </>
      )}
    </section>
  );
}

export default function About() {
  return (
    <main>
      <HeroSlider
        slides={aboutSlides}
        subtitle="हमारे बारे में"
        title="About Our School"
        description="Tejpal Smarak Inter College has been a beacon of quality education in Missa Baragaon, Ayodhya since 2011 — serving students from Nursery to Intermediate."
      />

      {/* Mission & Vision */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-xl p-8">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h2 className="text-xl font-bold text-blue-900 mb-3">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To provide quality, affordable education to every child in our community — regardless of their background. We believe every student deserves a chance to build a bright future.
            </p>
          </div>
          <div className="bg-orange-50 rounded-xl p-8">
            <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
            </div>
            <h2 className="text-xl font-bold text-blue-900 mb-3">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To become the most trusted educational institution in Ayodhya — where students grow not just academically, but as responsible citizens and future leaders.
            </p>
          </div>
        </div>
      </section>

      {/* School at a Glance */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 text-center mb-10">School at a Glance</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "2011", label: "High School Est." },
              { value: "2016", label: "Intermediate Est." },
              { value: "300+", label: "Students Enrolled" },
              { value: "9",    label: "Classrooms" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 text-center border border-gray-100">
                <p className="text-3xl font-bold text-orange-500 mb-2">{item.value}</p>
                <p className="text-gray-600 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-10">Principal's Message</h2>
          <div className="bg-blue-900 rounded-xl p-10">
            <div className="w-16 h-16 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-xl mx-auto mb-6">RK</div>
            <p className="text-white text-lg leading-relaxed mb-6">
              "At Tejpal Smarak Inter College, we believe every child has unlimited potential. Our teachers don't just teach — they inspire, guide, and shape the future of our nation."
            </p>
            <p className="text-orange-400 font-medium">Rajesh Kumar</p>
            <p className="text-blue-300 text-sm">Principal, TSIC — 11 years experience</p>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 text-center mb-10">Our Facilities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>, label: "5 Smart Classes", color: "bg-blue-50 text-blue-700" },
              { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>, label: "Science Lab", color: "bg-green-50 text-green-700" },
              { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>, label: "Computer Lab", color: "bg-purple-50 text-purple-700" },
              { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>, label: "Library", color: "bg-yellow-50 text-yellow-700" },
              { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" /></svg>, label: "Sports Ground", color: "bg-orange-50 text-orange-600" },
              { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>, label: "9 CCTV Cameras", color: "bg-red-50 text-red-600" },
              { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>, label: "Generator Backup", color: "bg-teal-50 text-teal-700" },
              { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" /></svg>, label: "WiFi Campus", color: "bg-indigo-50 text-indigo-700" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-4 text-center border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className={`inline-flex p-3 rounded-xl mb-3 ${item.color}`}>{item.icon}</div>
                <p className="text-gray-700 text-sm font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Photos */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 text-center mb-10">Our Campus</h2>
          <div className="grid grid-cols-3 gap-3">
            {[
              { src: "/images/eight.jpg",    alt: "School Building" },
              { src: "/images/five.jpg",     alt: "Computer Lab" },
              { src: "/images/nine.jpg",     alt: "Staff Meeting" },
              { src: "/images/ten.jpg",      alt: "Campus View" },
              { src: "/images/four.jpg",     alt: "School Bus" },
              { src: "/images/foutenn.jpg", alt: "Office" },
            ].map((photo, i) => (
              <div key={i} className="rounded-xl overflow-hidden relative" style={{ paddingBottom: "75%" }}>
                <Image src={photo.src} alt={photo.alt} fill className="object-cover hover:scale-105 transition-transform duration-300" sizes="33vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hall of Fame */}
      <section className="py-16 px-6" style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0f172a 100%)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-orange-400 font-medium text-sm uppercase tracking-widest mb-4">Our Pride</p>
          <h2 className="text-3xl font-bold text-white mb-3">Hall of Fame 🏆</h2>
          <p className="text-blue-300 text-sm mb-12 max-w-xl mx-auto">
            From Missa Baragaon to IITs and Medical colleges — our students prove that greatness has no address.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { initials: "RB", name: "Raja Bhavesh", sub: "TSIC Alumni", gradient: "from-orange-500 to-orange-600", border: "rgba(249,115,22,0.4)", badges: ["JEE Advanced", "IIT BHU"], badgeColor: "bg-orange-500", achievements: [{ label: "District Rank 3", detail: "High School — Ayodhya (2018)", color: "text-orange-400" }, { label: "District Rank 1 🥇", detail: "Intermediate — Ayodhya (2020)", color: "text-orange-400" }, { label: "JEE Qualified", detail: "Mains & Advanced — IIT BHU (2021)", color: "text-orange-400" }] },
              { initials: "RK", name: "Renu Kumari", sub: "TSIC Alumni", gradient: "from-green-500 to-green-600", border: "rgba(34,197,94,0.4)", badges: ["NEET", "MBBS"], badgeColor: "bg-green-500", achievements: [{ label: "NEET Qualified", detail: "Secured MBBS Admission (2019)", color: "text-green-400" }, { label: "Medical Doctor", detail: "From TSIC to MBBS — a proud journey", color: "text-green-400" }] },
              { initials: "AS", name: "Agrima Singh", sub: "TSIC Alumni", gradient: "from-green-500 to-green-600", border: "rgba(34,197,94,0.4)", badges: ["NEET 2024", "MBBS"], badgeColor: "bg-green-500", achievements: [{ label: "District Rank 4", detail: "High School — Ayodhya (2020)", color: "text-green-400" }, { label: "NEET Qualified", detail: "Secured MBBS Admission (2024)", color: "text-green-400" }] },
              { initials: "🏅", name: "UP Board Excellence", sub: "District Level Recognition", gradient: "from-indigo-500 to-indigo-600", border: "rgba(99,102,241,0.4)", badges: ["UP Board"], badgeColor: "bg-indigo-500", achievements: [{ label: "Rank 1 — District", detail: "Intermediate, Ayodhya (2020)", color: "text-indigo-400" }, { label: "Rank 3 — District", detail: "High School, Ayodhya (2018)", color: "text-indigo-400" }, { label: "Rank 4 — District", detail: "High School, Ayodhya (2020)", color: "text-indigo-400" }] },
            ].map((person, i) => (
              <div key={i} className="rounded-2xl p-6 text-left" style={{ background: "rgba(255,255,255,0.07)", border: `1px solid ${person.border}` }}>
                <div className="flex items-center gap-4 mb-5">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-white text-lg bg-gradient-to-br ${person.gradient}`}>{person.initials}</div>
                  <div className="flex-1">
                    <p className="text-white font-bold text-base">{person.name}</p>
                    <p className="text-blue-300 text-xs mt-0.5">{person.sub}</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    {person.badges.map((b, j) => <span key={j} className={`${person.badgeColor} text-white text-xs px-3 py-1 rounded-full text-center`}>{b}</span>)}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  {person.achievements.map((a, j) => (
                    <div key={j} className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
                      <span className={`${a.color} text-xs font-medium w-28 shrink-0`}>{a.label}</span>
                      <span className="text-blue-200 text-xs">{a.detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Want to Join Our School?</h2>
          <p className="text-gray-600 mb-8">Admissions are open for the 2026-27 academic year. Contact us today to know more.</p>
          <Link href="/admissions" className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3 rounded-lg transition-colors">
            Apply for Admission
          </Link>
        </div>
      </section>
    </main>
  );
}
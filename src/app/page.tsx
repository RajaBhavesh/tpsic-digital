"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

// Hero slider images
const heroSlides = [
  { src: "/images/one.jpg",    caption: "Our School Campus" },
  { src: "/images/eight.jpg",  caption: "School Building" },
  { src: "/images/eleven.jpg", caption: "Campus Life" },
  { src: "/images/four.jpg",   caption: "School Bus" },
  { src: "/images/seven.jpg",  caption: "Students" },
  { src: "/images/six.jpg",    caption: "Student Activities" },
  { src: "/images/ten.jpg",    caption: "School Grounds" },
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
    <section className="relative h-[88vh] min-h-[520px] max-h-[800px] overflow-hidden">
      {heroSlides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={slide.src}
            alt={slide.caption}
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/60 to-blue-900/40" />
        </div>
      ))}

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <p className="text-orange-400 font-medium text-xs uppercase tracking-[0.2em] mb-4">
          UP Board Affiliated — Est. 2011
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4 drop-shadow-lg">
          Tejpal Smarak<br className="hidden md:block" /> Inter College
        </h1>
        <p className="text-xl md:text-2xl text-orange-200 mb-3" lang="hi">
          शिक्षा से सशक्तिकरण — गाँव से उज्ज्वल भविष्य तक
        </p>
        <p className="text-blue-200 text-sm md:text-base max-w-2xl mx-auto mb-10">
          Located in Missa Baragaon, Ayodhya — providing quality education to
          300+ students. Dedicated to shaping a brighter future for every child.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/admissions"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5">
            Admission Inquiry
          </Link>
          <Link href="/about"
            className="bg-white/15 hover:bg-white/25 text-white border border-white/40 font-medium px-8 py-3 rounded-lg transition-all duration-200 backdrop-blur-sm">
            हमारे बारे में
          </Link>
        </div>
      </div>

      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2">
        {heroSlides.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current ? "bg-orange-400 w-6 h-2" : "bg-white/50 hover:bg-white/80 w-2 h-2"
            }`}
          />
        ))}
      </div>

      <button onClick={() => goTo((current - 1 + heroSlides.length) % heroSlides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl transition-all"
        aria-label="Previous">‹</button>
      <button onClick={() => goTo((current + 1) % heroSlides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl transition-all"
        aria-label="Next">›</button>
    </section>
  );
}

// Tag color mapping
function getTagColor(tag: string): string {
  const map: Record<string, string> = {
    Exam:      "bg-red-100 text-red-700",
    Admission: "bg-green-100 text-green-700",
    Event:     "bg-blue-100 text-blue-700",
    Result:    "bg-orange-100 text-orange-700",
    Holiday:   "bg-purple-100 text-purple-700",
    Notice:    "bg-gray-100 text-gray-700",
  };
  return map[tag] ?? "bg-gray-100 text-gray-700";
}

// Format date: 2026-06-07 → 07 Jun 2026
function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

interface Notice {
  id: number;
  title: string;
  tag: string;
  date: string;
  is_active: boolean;
}

export default function Home() {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [noticesLoading, setNoticesLoading] = useState(true);

  // Fetch notices from Supabase
  useEffect(() => {
    async function fetchNotices() {
      const { data, error } = await supabase
        .from("notices")
        .select("*")
        .eq("is_active", true)
        .order("date", { ascending: false })
        .limit(5);

      if (error) {
        console.error("Error fetching notices:", error);
      } else {
        setNotices(data || []);
      }
      setNoticesLoading(false);
    }
    fetchNotices();
  }, []);

  const features = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422A12.083 12.083 0 0121 13c0 4.97-4.03 9-9 9s-9-4.03-9-9c0-.538.045-1.065.13-1.578L12 14z" />
        </svg>
      ),
      color: "bg-blue-50 text-blue-700",
      title: "Experienced Teachers",
      desc: "7 dedicated faculty members with up to 11 years of teaching experience. Led by Principal Rajesh Kumar.",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: "bg-orange-50 text-orange-600",
      title: "5 Smart Classes",
      desc: "Modern smart classrooms with digital learning tools — bringing 21st century education to Ayodhya.",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      color: "bg-green-50 text-green-700",
      title: "Science & Computer Lab",
      desc: "Fully equipped Science laboratory and Computer lab with internet/WiFi facility for students.",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      color: "bg-purple-50 text-purple-700",
      title: "9 CCTV Cameras",
      desc: "Complete campus surveillance with 9 CCTV cameras — ensuring safety and security of every student.",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      color: "bg-yellow-50 text-yellow-700",
      title: "Library & Sports",
      desc: "Well-stocked library and sports ground — because education is not just academics, it's overall growth.",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "bg-red-50 text-red-600",
      title: "Full Infrastructure",
      desc: "Generator backup, clean drinking water, separate toilets for boys & girls, boundary wall and iron gate.",
    },
  ];

  return (
    <main>
      {/* Hero Slider */}
      <HeroSlider />

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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white"
              >
                <div className={`inline-flex p-3 rounded-xl mb-4 ${item.color}`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-3 group-hover:text-orange-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notice Board — Improved */}
<section className="bg-gray-50 py-16 px-6">
  <div className="max-w-4xl mx-auto">
    <p className="text-orange-500 font-medium text-sm uppercase tracking-widest text-center mb-3">
      Latest Updates
    </p>
    <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">
      Notice Board
    </h2>

    {noticesLoading ? (
      <div className="flex flex-col gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white rounded-xl p-5 border border-gray-100 animate-pulse h-20" />
        ))}
      </div>
    ) : notices.length === 0 ? (
      <div className="text-center py-8">
        <p className="text-gray-400 text-sm">No notices at the moment.</p>
      </div>
    ) : (
      <div className="flex flex-col gap-4">
        {notices.map((notice) => {
          const tagColors: Record<string, { bg: string; text: string; border: string }> = {
            Exam:      { bg: "bg-red-50",     text: "text-red-600",    border: "border-red-400" },
            Admission: { bg: "bg-green-50",   text: "text-green-600",  border: "border-green-400" },
            Event:     { bg: "bg-blue-50",    text: "text-blue-600",   border: "border-blue-400" },
            Result:    { bg: "bg-orange-50",  text: "text-orange-600", border: "border-orange-400" },
            Holiday:   { bg: "bg-purple-50",  text: "text-purple-600", border: "border-purple-400" },
            Notice:    { bg: "bg-gray-50",    text: "text-gray-600",   border: "border-gray-400" },
          };
          const colors = tagColors[notice.tag] ?? tagColors["Notice"];
          const d = new Date(notice.date);
          const day = d.toLocaleDateString("en-IN", { day: "2-digit" });
          const month = d.toLocaleDateString("en-IN", { month: "short" });
          const year = d.toLocaleDateString("en-IN", { year: "numeric" });

          return (
            <div key={notice.id}
              className={`bg-white rounded-xl border-l-4 ${colors.border} shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-5 px-5 py-4`}>
              
              {/* Date Block */}
              <div className={`${colors.bg} rounded-lg px-3 py-2 text-center min-w-[56px] flex-shrink-0`}>
                <p className={`text-lg font-bold leading-none ${colors.text}`}>{day}</p>
                <p className={`text-xs font-medium ${colors.text} mt-0.5`}>{month}</p>
                <p className={`text-xs ${colors.text} opacity-70`}>{year}</p>
              </div>

              {/* Title */}
              <p className="text-blue-900 font-medium text-sm flex-1 leading-snug">
                {notice.title}
              </p>

              {/* Tag */}
              <span className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ${colors.bg} ${colors.text} border ${colors.border} border-opacity-30`}>
                {notice.tag}
              </span>
            </div>
          );
        })}
      </div>
    )}
  </div>
</section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-blue-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-orange-500 font-medium text-sm uppercase tracking-widest text-center mb-3">
            Parents Speak
          </p>
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
            What Our Parents Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { initials: "RS", name: "Ramesh Singh", role: "Parent — Class 12", text: "My son studied here from Class 6 to 12. The teachers are very dedicated and always available for doubt clearing. Best school in our area." },
              { initials: "SP", name: "Sunita Pandey", role: "Parent — Class 10", text: "Very affordable fees with excellent quality education. My daughter got District Rank in UP Board — all credit goes to TSIC teachers." },
              { initials: "MV", name: "Mukesh Verma", role: "Parent — Class 8", text: "Smart classes aur computer lab ki wajah se mere bache ko modern education mil rahi hai. School ki building aur cleanliness bhi bahut achhi hai." },
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100">
                <div className="text-orange-400 text-3xl mb-4">"</div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{t.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-sm">{t.initials}</div>
                  <div>
                    <p className="font-medium text-blue-900 text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
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
          <div className="grid grid-cols-3 gap-2">
            {[
              { src: "/images/eight.jpg",  alt: "School Building" },
              { src: "/images/eleven.jpg", alt: "Campus" },
              { src: "/images/seven.jpg",  alt: "Students" },
              { src: "/images/six.jpg",    alt: "Students Group" },
              { src: "/images/four.jpg",   alt: "School Bus" },
              { src: "/images/ten.jpg",    alt: "School Grounds" },
            ].map((photo, index) => (
              <div key={index} className="rounded-xl overflow-hidden relative" style={{ paddingBottom: "75%" }}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 33vw, 20vw"
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
            अपने बच्चे का भविष्य सुरक्षित करें
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
            WhatsApp — Apply Now
          </a>
        </div>
      </section>
    </main>
  );
}
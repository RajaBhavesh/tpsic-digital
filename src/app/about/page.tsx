"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ==========================================
// TYPES & INTERFACES
// ==========================================
interface FacilityItem {
  icon: string;
  label: string;
  badge: string;
  desc: string;
}

interface MilestoneItem {
  year: string;
  title: string;
  desc: string;
}

interface AlumniItem {
  name: string;
  role: string;
  badge: string;
  college: string;
  image: string;
  highlights: { label: string; detail: string }[];
}

// ==========================================
// DATA & CONTENT
// ==========================================
const HERO_SLIDES = [
  {
    src: "/images/one.jpg",
    subtitle: "Our Heritage & Campus",
    title: "About Tejpal Smarak Inter College",
    desc: "Serving as a beacon of quality and affordable education in Missa Baragaon, Ayodhya since 2011 — guiding students from Nursery to Intermediate.",
  },
  {
    src: "/images/eight.jpg",
    subtitle: "Infrastructure Excellence",
    title: "Modern Facilities & Secure Campus",
    desc: "Spacious classrooms, high-tech CCTV surveillance, and an environment dedicated to academic discipline and moral growth.",
  },
  {
    src: "/images/eleven.jpg",
    subtitle: "Holistic Atmosphere",
    title: "Sports, Arts & Character Building",
    desc: "Equipping young minds with leadership qualities, athletic discipline, and strong ethical values.",
  },
  {
    src: "/images/thirteen.jpg",
    subtitle: "Safe & Monitored",
    title: "Advanced Safety Control Center",
    desc: "16+ CCTV cameras with a dedicated monitoring room ensuring absolute safety for every student on campus.",
  },
];

const STATS_DATA = [
  { value: "2011", label: "High School Est.", sub: "Foundation Year" },
  { value: "2016", label: "Intermediate Est.", sub: "Senior Secondary Wing" },
  { value: "400+", label: "Active Students", sub: "Thriving Community" },
  { value: "20+", label: "Classrooms & Labs", sub: "Modern Infrastructure" },
];

const FACILITIES_DATA: FacilityItem[] = [
  { icon: "💻", label: "5 Smart Classes", badge: "Smart Tech", desc: "Digital screens and multimedia modules for interactive visual lessons." },
  { icon: "🔬", label: "Science Lab", badge: "Practical", desc: "Fully equipped Physics, Chemistry & Biology laboratories for experiments." },
  { icon: "🖥️", label: "Computer Lab", badge: "IT Skills", desc: "Modern computer workstations for basic and advanced software training." },
  { icon: "📚", label: "Library", badge: "Knowledge Hub", desc: "Rich collection of academic textbooks, reference guides, and magazines." },
  { icon: "🏆", label: "Sports Ground", badge: "Athletics", desc: "Spacious playfields for cricket, football, kabaddi, and track events." },
  { icon: "🛡️", label: "16 CCTV Cameras", badge: "Secured", desc: "Complete perimeter and hallway coverage monitored from a central room." },
  { icon: "⚡", label: "Generator Backup", badge: "Uninterrupted", desc: "Full power backup ensuring smooth, uninterrupted classroom sessions." },
  { icon: "📶", label: "WiFi Campus", badge: "Connected", desc: "High-speed internet support for digital administration and learning." },
];

const MILESTONES: MilestoneItem[] = [
  { year: "2011", title: "Establishment of High School Wing", desc: "Started with a vision to deliver quality education to rural and urban children in Missa Baragaon, Ayodhya." },
  { year: "2016", title: "Expansion to Intermediate (10+2)", desc: "Upgraded with Science, Arts, and Commerce streams following UP Board guidelines." },
  { year: "2020", title: "District Rank 1 Achieved", desc: "Our brilliant students secured top district positions in UP Board Intermediate examinations." },
  { year: "2024–2026", title: "Modernization & Digital Integration", desc: "Upgraded smart board technology, laboratory equipment, and advanced safety surveillance systems." },
];

const CAMPUS_PHOTOS = [
  { src: "/images/eight.jpg", alt: "School Building" },
  { src: "/images/five.jpg", alt: "Computer Lab" },
  { src: "/images/nine.jpg", alt: "Staff Meeting" },
  { src: "/images/ten.jpg", alt: "Campus View" },
  { src: "/images/four.jpg", alt: "School Bus" },
  { src: "/images/foutenn.jpg", alt: "Office & Administration" },
];

const ALUMNI_DATA: AlumniItem[] = [
  {
    name: "Raja Bhavesh",
    role: "TPSIC Alumni",
    badge: "JEE Advanced",
    college: "IIT BHU",
    image: "/images/rajabhavesh1.jpg",
    highlights: [
      { label: "District Rank 3", detail: "High School — Ayodhya (2018)" },
      { label: "District Rank 1 🥇", detail: "Intermediate — Ayodhya (2020)" },
      { label: "JEE Qualified", detail: "Mains & Advanced — IIT BHU (2021)" },
    ],
  },
  {
    name: "Renu Kumari",
    role: "TPSIC Alumni",
    badge: "NEET Qualified",
    college: "MBBS",
    image: "/images/renu.jpg",
    highlights: [
      { label: "NEET Qualified", detail: "MBBS - RDASMC Ayodhya (2019)" },
      { label: "Medical Doctor", detail: "From TPSIC to MBBS — a proud journey" },
    ],
  },
  {
    name: "Agrima Singh",
    role: "TPSIC Alumni",
    badge: "NEET 2024",
    college: "MBBS",
    image: "/images/agrima.jpg",
    highlights: [
      { label: "District Rank 4", detail: "High School — Ayodhya (2020)" },
      { label: "NEET Qualified", detail: "MBBS - MVASMC Basti (2024)" },
    ],
  },
];

// ==========================================
// ANIMATION VARIANTS
// ==========================================
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

// ==========================================
// COMPONENT
// ==========================================
export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slider for About Hero
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-amber-500 selection:text-white">

      {/* ================= HERO SLIDER SECTION ================= */}
      <section className="relative pt-40 sm:pt-48 pb-28 sm:pb-36 bg-slate-950 text-white flex flex-col justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0 z-0"
          >
            <Image
              src={HERO_SLIDES[currentSlide].src}
              alt={HERO_SLIDES[currentSlide].title}
              fill
              className="object-cover opacity-80 filter contrast-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/40 to-slate-950/90" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-amber-300 text-xs font-extrabold uppercase tracking-widest mb-6 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            {HERO_SLIDES[currentSlide].subtitle}
          </motion.span>

          <motion.h1
            key={`title-${currentSlide}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-3xl sm:text-6xl font-black tracking-tight leading-[1.12] mb-4 text-white drop-shadow-md"
          >
            {HERO_SLIDES[currentSlide].title}
          </motion.h1>

          <p className="text-base sm:text-xl text-amber-200/95 font-semibold mb-3 tracking-wide" lang="hi">
            हमारे बारे में — शिक्षा, अनुशासन और संस्कार
          </p>

          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mb-8 leading-relaxed font-normal drop-shadow">
            {HERO_SLIDES[currentSlide].desc}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              href="/admissions"
              className="px-8 py-3.5 rounded-2xl font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-xl shadow-amber-400/25 transition-all hover:scale-105 active:scale-95 text-sm text-center"
            >
              Apply for Admission →
            </Link>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="relative z-10 flex flex-col items-center gap-2 mt-12">
          <div className="flex justify-center items-center gap-2">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === currentSlide ? "bg-amber-400 w-10" : "bg-white/40 w-2.5 hover:bg-white/70"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
          <span className="text-[11px] font-semibold text-white/75 tracking-wider mt-1">
            Slide {currentSlide + 1} of {HERO_SLIDES.length}
          </span>
        </div>
      </section>

      {/* ================= STATS CARD SECTION ================= */}
      <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12">
        <div className="bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-slate-950/10 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS_DATA.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-4 rounded-2xl text-center group"
            >
              <p className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight group-hover:text-amber-600 transition-colors">
                {stat.value}
              </p>
              <div className="mt-2">
                <p className="text-xs font-bold text-amber-700 uppercase tracking-wider">{stat.label}</p>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">{stat.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-amber-800 font-bold text-xs uppercase tracking-widest bg-amber-100/70 border border-amber-200/80 px-4 py-1.5 rounded-full">
            Core Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">Our Mission & Vision</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-10 shadow-sm hover:shadow-xl transition-all group"
          >
            <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white text-2xl flex items-center justify-center mb-6 shadow-md group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
              🎯
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              To provide quality, affordable education to every child in our community — regardless of their background. We believe every student deserves an equal opportunity to build a bright future and achieve academic excellence.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-10 shadow-sm hover:shadow-xl transition-all group"
          >
            <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white text-2xl flex items-center justify-center mb-6 shadow-md group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
              🔭
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              To become the most trusted educational institution in Ayodhya — where students grow not just academically, but as responsible citizens, ethical leaders, and well-rounded individuals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= PRINCIPAL'S MESSAGE ================= */}
      <section className="py-20 sm:py-28 bg-slate-100/70 border-y border-slate-200/70">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-14 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
          >
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="relative w-48 h-48 rounded-3xl overflow-hidden border-2 border-amber-400/60 shadow-lg mb-4">
                <Image src="/images/rajesh_kumar.jpg" alt="Principal Rajesh Kumar" fill className="object-cover object-top" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Rajesh Kumar</h3>
              <p className="text-xs font-bold text-amber-700 uppercase tracking-wider mt-0.5">
                Principal, TPSIC — 11 Years Experience
              </p>
            </div>

            <div className="lg:col-span-8">
              <span className="text-amber-800 font-bold text-xs uppercase tracking-widest bg-amber-100/70 border border-amber-200/80 px-4 py-1.5 rounded-full inline-block mb-4">
                Principal's Message
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-5 leading-snug tracking-tight italic">
                "At Tejpal Smarak Inter College, we believe every child has unlimited potential. Our teachers don't just teach — they inspire, guide, and shape the future of our nation."
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                With structured discipline, modern digital classrooms, and a supportive atmosphere, we ensure students build confidence to excel in board examinations and professional careers.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= MILESTONES / TIMELINE ================= */}
      <section className="py-20 sm:py-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-amber-800 font-bold text-xs uppercase tracking-widest bg-amber-100/70 border border-amber-200/80 px-4 py-1.5 rounded-full">
            Our Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">Milestones Over the Years</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MILESTONES.map((item, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white border border-slate-200/90 p-6 sm:p-8 rounded-3xl shadow-sm hover:shadow-md transition-all"
            >
              <span className="px-3 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-900 text-xs font-black">
                {item.year}
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-3 mb-2">{item.title}</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= FACILITIES GRID ================= */}
      <section className="py-20 sm:py-28 bg-slate-100/70 border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-amber-800 font-bold text-xs uppercase tracking-widest bg-amber-100/80 border border-amber-200/80 px-4 py-1.5 rounded-full">
              Campus Amenities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">Our Advanced Facilities</h2>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {FACILITIES_DATA.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="bg-white border border-slate-200/90 hover:border-amber-400/80 p-6 sm:p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white text-xl flex items-center justify-center shadow-md group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 group-hover:bg-amber-50 group-hover:text-amber-800 transition-colors">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-amber-900 transition-colors">
                    {item.label}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= CAMPUS PHOTOS GALLERY ================= */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-amber-800 font-bold text-xs uppercase tracking-widest bg-amber-100/70 border border-amber-200/80 px-4 py-1.5 rounded-full">
            Photo Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">Our Vibrant Campus</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {CAMPUS_PHOTOS.map((photo, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="rounded-3xl overflow-hidden relative shadow-sm border border-slate-200/90 aspect-[4/3] group bg-slate-900"
            >
              <Image src={photo.src} alt={photo.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <span className="text-white text-sm font-bold">{photo.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= HALL OF FAME / ALUMNI ================= */}
      <section className="py-20 sm:py-28 bg-slate-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 border border-white/30 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-4">
              Our Pride
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">Hall of Fame 🏆</h2>
            <p className="text-slate-400 text-sm sm:text-base font-light">
              From Missa Baragaon to IITs and Medical colleges — our students prove that greatness has no address.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ALUMNI_DATA.map((alum, idx) => (
              <div
                key={idx}
                className="rounded-3xl p-8 bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-amber-500/60 transition-all shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 ring-2 ring-amber-400 relative shadow-md">
                      <Image src={alum.image} alt={alum.name} fill className="object-cover object-top" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-bold text-lg">{alum.name}</p>
                      <p className="text-slate-400 text-xs mt-0.5 font-medium">{alum.role}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs px-3 py-1 rounded-full font-semibold">
                      {alum.badge}
                    </span>
                    <span className="bg-amber-600 text-white text-xs px-3 py-1 rounded-full font-semibold shadow">
                      {alum.college}
                    </span>
                  </div>

                  <div className="space-y-3">
                    {alum.highlights.map((h, j) => (
                      <div key={j} className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3 border border-white/5">
                        <span className="text-amber-400 text-xs font-bold">{h.label}</span>
                        <span className="text-slate-300 text-xs font-light">{h.detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="py-24 px-6 text-center bg-white relative">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Want to Join Our School?</h2>
          <p className="text-slate-600 mb-8 text-sm sm:text-base font-light">
            Admissions are open for the 2026-27 academic year. Contact our administrative desk or apply online today.
          </p>
          <Link
            href="/admissions"
            className="inline-block bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-9 py-4 rounded-xl shadow-xl shadow-amber-400/25 transition-all hover:scale-105"
          >
            Apply for Admission
          </Link>
        </div>
      </section>

    </div>
  );
}
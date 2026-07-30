"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";

// ==========================================
// TYPES & DATA
// ==========================================
const HERO_SLIDES = [
  {
    src: "/images/seven.jpg",
    subtitle: "Admissions 2026-27",
    title: "Join Tejpal Smarak Inter College",
    desc: "Admissions open for the new academic year. Secure your child's future from Nursery to Class 12 with quality education in Missa Baragaon, Ayodhya.",
  },
  {
    src: "/images/six.jpg",
    subtitle: "Holistic Development",
    title: "Excellence in Academics & Activities",
    desc: "Equipping students with modern smart classes, science laboratories, discipline, and competitive edge for board examinations.",
  },
];

const QUICK_STATS = [
  { value: "400+", label: "Active Students", sub: "Thriving Community" },
  { value: "Nursery—12", label: "Complete Schooling", sub: "All Streams Available" },
  { value: "UP Board", label: "Affiliated Institution", sub: "Recognized Standards" },
];

const ADMISSION_STEPS = [
  { step: "1", title: "Contact Us", desc: "Call or WhatsApp our admission desk to inquire about seat availability.", icon: "📞" },
  { step: "2", title: "Visit Campus", desc: "Drop by our campus in Missa Baragaon to explore labs, classes & meet teachers.", icon: "🏫" },
  { step: "3", title: "Submit Form", desc: "Fill out the admission registration form with necessary credentials.", icon: "📝" },
  { step: "4", title: "Confirmation", desc: "Complete verification, finalize fee structure, and start your journey.", icon: "✅" },
];

const CLASSES_OFFERED = [
  { class: "Nursery — KG", level: "Pre-Primary Foundation", icon: "🌱", badge: "Play & Learn" },
  { class: "Class 1 — 5", level: "Primary Education", icon: "📖", badge: "Core Basics" },
  { class: "Class 6 — 10", level: "Secondary Wing", icon: "🎓", badge: "UP Board Prep" },
  { class: "Class 11 — 12", level: "Intermediate (Science/Arts)", icon: "🏆", badge: "Senior Wing" },
];

const DOCUMENTS_REQUIRED = [
  { doc: "Birth Certificate", icon: "📄", desc: "Original or verified copy for age proof" },
  { doc: "Previous Class Marksheet / TC", icon: "📋", desc: "Transfer certificate or report card from last school" },
  { doc: "Aadhar Card (Student)", icon: "🪪", desc: "UIDAI identification document" },
  { doc: "Aadhar Card (Parent / Guardian)", icon: "🪪", desc: "Father's or mother's identity proof" },
  { doc: "Passport Size Photos (4)", icon: "📸", desc: "Recent color photographs of the student" },
  { doc: "Caste Certificate (if applicable)", icon: "📜", desc: "For scholarship and category records" },
];

const WHY_JOIN_TSIC = [
  { icon: "🏆", text: "District Toppers & Academic Record" },
  { icon: "📱", text: "5 Smart Classes with Digital Learning" },
  { icon: "🔬", text: "Fully Equipped Science & Computer Labs" },
  { icon: "💰", text: "Affordable Fee Structure for All Families" },
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
export default function Admissions() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slider timer
  useEffect(() => {
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
              className="object-cover opacity-85 filter contrast-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950/90" />
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
            प्रवेश सत्र 2026-27 — नर्सरी से कक्षा 12 तक
          </p>

          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mb-8 leading-relaxed font-normal drop-shadow">
            {HERO_SLIDES[currentSlide].desc}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
            <a
              href="https://wa.me/919935748696"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-2xl font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-xl shadow-amber-400/25 transition-all hover:scale-105 active:scale-95 text-sm text-center"
            >
              💬 WhatsApp करें — अभी Apply करें
            </a>
            <a
              href="tel:+919935748696"
              className="px-8 py-3.5 rounded-2xl font-bold text-white bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 transition-all hover:scale-105 active:scale-95 text-sm text-center shadow-lg"
            >
              📞 Call करें
            </a>
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

      {/* ================= QUICK STATS SECTION ================= */}
      <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12">
        <div className="bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-slate-950/10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {QUICK_STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-4 rounded-2xl group"
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

      {/* ================= ADMISSION PROCESS ================= */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-amber-800 font-bold text-xs uppercase tracking-widest bg-amber-100/70 border border-amber-200/80 px-4 py-1.5 rounded-full">
            Simple Steps
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">Admission Process</h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {ADMISSION_STEPS.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="bg-white border border-slate-200/95 hover:border-amber-400/80 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all group flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-900 text-white text-2xl flex items-center justify-center mb-6 shadow-md group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                {item.icon}
              </div>
              <span className="text-xs font-black text-amber-700 uppercase tracking-widest mb-1">Step {item.step}</span>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-900 transition-colors">{item.title}</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= CLASSES OFFERED ================= */}
      <section className="py-20 sm:py-28 bg-slate-100/70 border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-amber-800 font-bold text-xs uppercase tracking-widest bg-amber-100/80 border border-amber-200/80 px-4 py-1.5 rounded-full" lang="hi">
              सभी कक्षाएं — Nursery से Class 12
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">Academic Wings & Programs</h2>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {CLASSES_OFFERED.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="bg-white border border-slate-200/90 hover:border-amber-400/80 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between text-center"
              >
                <div>
                  <div className="flex items-center justify-center mb-5">
                    <div className="w-16 h-16 rounded-2xl bg-slate-900 text-white text-3xl flex items-center justify-center shadow-md group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                      {item.icon}
                    </div>
                  </div>
                  <span className="text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 group-hover:bg-amber-50 group-hover:text-amber-800 transition-colors inline-block mb-3">
                    {item.badge}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-amber-900 transition-colors">
                    {item.class}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm font-medium mb-4">{item.level}</p>
                </div>
                <p className="text-xs italic text-slate-400 pt-3 border-t border-slate-100">Fee details available on campus inquiry</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= DOCUMENTS REQUIRED ================= */}
      <section className="py-20 sm:py-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-amber-800 font-bold text-xs uppercase tracking-widest bg-amber-100/70 border border-amber-200/80 px-4 py-1.5 rounded-full" lang="hi">
            तैयार रहें
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">Documents Required for Admission</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {DOCUMENTS_REQUIRED.map((item, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white border border-slate-200/95 p-6 sm:p-8 rounded-3xl shadow-sm hover:shadow-md transition-all flex items-center gap-5 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 text-amber-800 text-2xl flex items-center justify-center shrink-0 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors shadow-sm">
                {item.icon}
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">{item.doc}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= WHY JOIN TSIC ================= */}
      <section className="py-20 sm:py-28 bg-slate-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 border border-white/30 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-4">
              Excellence Guaranteed
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">Why Join TSIC?</h2>
            <p className="text-slate-400 text-sm sm:text-base font-light">
              We provide a disciplined, safe, and modern academic environment to foster future leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_JOIN_TSIC.map((item, idx) => (
              <div
                key={idx}
                className="rounded-3xl p-8 bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-amber-500/60 transition-all shadow-xl flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/10 text-3xl flex items-center justify-center mb-5 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors shadow-inner">
                  {item.icon}
                </div>
                <p className="text-white text-sm sm:text-base font-bold leading-snug">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="py-24 px-6 text-center bg-white relative">
        <div className="max-w-2xl mx-auto">
          <span className="text-amber-800 font-bold text-xs uppercase tracking-widest bg-amber-100/70 border border-amber-200/80 px-4 py-1.5 rounded-full inline-block mb-4">
            Take Action Today
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 tracking-tight">Ready to Enroll Your Child?</h2>
          <p className="text-slate-600 mb-8 text-sm sm:text-base font-light">
            WhatsApp करें — fastest response within hours. Secure your child's seat before admissions close for the term.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919935748696"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-9 py-4 rounded-2xl shadow-xl shadow-amber-400/25 transition-all hover:scale-105 text-sm"
            >
              💬 WhatsApp करें — अभी
            </a>
            <Link
              href="/contact"
              className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-bold px-9 py-4 rounded-2xl shadow-xl transition-all hover:scale-105 text-sm"
            >
              Contact Details देखें →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
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
    src: "/images/four.jpg",
    subtitle: "हमारे शिक्षक",
    title: "Our Dedicated Faculty",
    desc: "Experienced, passionate, and committed educators shaping the future and character of every student at TPSIC.",
  },
  {
    src: "/images/nine.jpg",
    subtitle: "Excellence in Teaching",
    title: "Mentors for Life & Board Success",
    desc: "Guiding students from Nursery to Class 12 with expert knowledge, personalized attention, and board exam mastery.",
  },
];

const QUICK_STATS = [
  { value: "10+", label: "Faculty Members", sub: "Expert Educators" },
  { value: "11+ Years", label: "Max Experience", sub: "Proven Leadership" },
  { value: "IIT + MBBS", label: "Alumni Success", sub: "Competitive Edge" },
];

const PRINCIPAL_DATA = {
  name: "Rajesh Kumar",
  role: "Principal — Tejpal Smarak Inter College",
  experience: "11 Years Experience",
  level: "Intermediate Level",
  board: "UP Board Expert",
  photo: "/images/rajesh_kumar.jpg",
  quote: "Every child has unlimited potential. Our teachers don't just teach — they inspire, guide, and shape the future of our nation.",
};

const TEACHERS = [
  {
    name: "Rajesh Kumar Pandey",
    subject: "Sociology",
    role: "Lecturer",
    experience: "9 years",
    photo: "/images/rajesh.jpg",
    badgeBg: "bg-purple-50 text-purple-700 border-purple-200",
    ringColor: "ring-purple-200",
  },
  {
    name: "Avneesh Kumar Tiwari",
    subject: "Biology",
    role: "Lecturer",
    experience: "10 years",
    photo: "/images/avneesh.jpg",
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
    ringColor: "ring-emerald-200",
  },
  {
    name: "Ram Neval",
    subject: "Mathematics",
    role: "Lecturer",
    experience: "8 years",
    photo: "/images/ramneval.jpg",
    badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
    ringColor: "ring-blue-200",
  },
  {
    name: "Ganga Sagar Pandey",
    subject: "Hindi",
    role: "Lecturer",
    experience: "11 years",
    photo: "/images/gangasagar.jpg",
    badgeBg: "bg-amber-50 text-amber-800 border-amber-200",
    ringColor: "ring-amber-200",
  },
  {
    name: "Anshul Singh",
    subject: "Physics",
    role: "Lecturer",
    experience: "5 years",
    photo: "/images/anshul.jpg",
    badgeBg: "bg-indigo-50 text-indigo-700 border-indigo-200",
    ringColor: "ring-indigo-200",
  },
  {
    name: "Kamini Singh",
    subject: "Science",
    role: "Assistant Teacher",
    experience: "2 years",
    photo: "/images/kamini.jpg",
    badgeBg: "bg-pink-50 text-pink-700 border-pink-200",
    ringColor: "ring-pink-200",
  },
];

const TEACHING_PHILOSOPHY = [
  { icon: "🎯", title: "Result Focused", desc: "Consistent UP Board toppers — District Rank 1 in Intermediate examinations." },
  { icon: "❤️", title: "Student First", desc: "Every teacher is available for one-on-one doubt clearing beyond regular school hours." },
  { icon: "🌱", title: "Holistic Growth", desc: "Focusing beyond textbooks on character building, discipline, and essential life skills." },
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
export default function Faculty() {
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
              💬 WhatsApp करें — संपर्क करें
            </a>
            <Link
              href="/admissions"
              className="px-8 py-3.5 rounded-2xl font-bold text-white bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 transition-all hover:scale-105 active:scale-95 text-sm text-center shadow-lg"
            >
              Admissions देखें →
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

      {/* ================= PRINCIPAL SECTION ================= */}
      <section className="py-20 sm:py-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-amber-800 font-bold text-xs uppercase tracking-widest bg-amber-100/70 border border-amber-200/80 px-4 py-1.5 rounded-full" lang="hi">
            नेतृत्व (Leadership)
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">Our Principal</h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-800 relative overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-12"
        >
          {/* Principal Image */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden flex-shrink-0 ring-4 ring-amber-400 relative shadow-2xl bg-slate-900">
            <Image
              src={PRINCIPAL_DATA.photo}
              alt={PRINCIPAL_DATA.name}
              fill
              className="object-cover object-top"
              sizes="160px"
              priority
            />
          </div>

          <div className="text-center md:text-left flex-1">
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-1">{PRINCIPAL_DATA.name}</h3>
            <p className="text-amber-400 font-bold text-sm mb-4">{PRINCIPAL_DATA.role}</p>

            <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-6">
              <span className="bg-white/10 text-slate-200 text-xs font-semibold px-3 py-1 rounded-full border border-white/10">{PRINCIPAL_DATA.experience}</span>
              <span className="bg-white/10 text-slate-200 text-xs font-semibold px-3 py-1 rounded-full border border-white/10">{PRINCIPAL_DATA.level}</span>
              <span className="bg-amber-400/20 text-amber-300 text-xs font-semibold px-3 py-1 rounded-full border border-amber-400/30">{PRINCIPAL_DATA.board}</span>
            </div>

            <blockquote className="text-slate-200 text-sm sm:text-base leading-relaxed italic border-l-4 border-amber-400 pl-4 bg-white/5 py-3 rounded-r-2xl">
              "{PRINCIPAL_DATA.quote}"
            </blockquote>
          </div>
        </motion.div>
      </section>

      {/* ================= FACULTY GRID ================= */}
      <section className="py-20 sm:py-28 bg-slate-100/70 border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-amber-800 font-bold text-xs uppercase tracking-widest bg-amber-100/80 border border-amber-200/80 px-4 py-1.5 rounded-full" lang="hi">
              Teaching Staff
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">Meet Our Teachers</h2>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {TEACHERS.map((teacher, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="bg-white border border-slate-200/90 hover:border-amber-400/80 p-6 sm:p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden flex-shrink-0 ring-2 ${teacher.ringColor} relative bg-slate-100 shadow-md`}>
                    <Image
                      src={teacher.photo}
                      alt={teacher.name}
                      fill
                      className="object-cover object-top"
                      sizes="80px"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-900 text-base sm:text-lg group-hover:text-amber-700 transition-colors leading-snug">
                      {teacher.name}
                    </h3>
                    <p className="text-slate-500 text-xs font-semibold mt-0.5">{teacher.role}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${teacher.badgeBg}`}>
                    {teacher.subject}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-amber-500 text-xs">⭐</span>
                    <span className="text-slate-600 text-xs font-semibold">{teacher.experience}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= TEACHING PHILOSOPHY ================= */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-amber-800 font-bold text-xs uppercase tracking-widest bg-amber-100/70 border border-amber-200/80 px-4 py-1.5 rounded-full">
            Core Values
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">Our Teaching Philosophy</h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {TEACHING_PHILOSOPHY.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="bg-white border border-slate-200/95 hover:border-amber-400/80 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all group flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-900 text-white text-3xl flex items-center justify-center mb-6 shadow-md group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-900 transition-colors">{item.title}</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="py-24 px-6 text-center bg-white relative">
        <div className="max-w-2xl mx-auto">
          <span className="text-amber-800 font-bold text-xs uppercase tracking-widest bg-amber-100/70 border border-amber-200/80 px-4 py-1.5 rounded-full inline-block mb-4">
            Join Our Institution
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 tracking-tight">Want Your Child Guided by the Best?</h2>
          <p className="text-slate-600 mb-8 text-sm sm:text-base font-light">
            Admissions open for 2026-27. Secure your child's seat and benefit from experienced mentorship.
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
              href="/admissions"
              className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-bold px-9 py-4 rounded-2xl shadow-xl transition-all hover:scale-105 text-sm"
            >
              Admissions देखें →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
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
    src: "/images/ten.jpg",
    subtitle: "संपर्क करें",
    title: "Get In Touch",
    desc: "Have questions about admissions, fees, or anything else? We're here to help — reach out anytime.",
  },
];

const CONTACT_CARDS = [
  {
    icon: "📍",
    title: "Address",
    content: "Missa Baragaon, Ruduli\nAyodhya, UP — 224116",
    link: null,
    borderHover: "hover:border-amber-400/80",
    iconBg: "bg-slate-900 text-white group-hover:bg-amber-400 group-hover:text-slate-950",
  },
  {
    icon: "📞",
    title: "Phone",
    subtitle: "Mon — Sat, 8AM — 4PM",
    phones: [
      { label: "+91 99357 48696", href: "tel:+919935748696" },
      { label: "+91 94155 29912", href: "tel:+919415529912" },
    ],
    borderHover: "hover:border-amber-400/80",
    iconBg: "bg-slate-900 text-white group-hover:bg-amber-400 group-hover:text-slate-950",
  },
  {
    icon: "✉️",
    title: "Email",
    subtitle: "Official correspondence",
    email: "tejpalsmarakintercollege2011@gmail.com",
    borderHover: "hover:border-amber-400/80",
    iconBg: "bg-slate-900 text-white group-hover:bg-amber-400 group-hover:text-slate-950",
  },
  {
    icon: "💬",
    title: "WhatsApp",
    subtitle: "Fastest response\nReply within hours",
    whatsappLink: "https://wa.me/919935748696",
    borderHover: "hover:border-emerald-400/80",
    iconBg: "bg-emerald-600 text-white group-hover:bg-emerald-500",
  },
];

const SCHOOL_TIMINGS = [
  { label: "Monday — Saturday", time: "8AM — 2:30PM", badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  { label: "Office Hours", time: "8AM — 4PM", badgeBg: "bg-blue-50 text-blue-700 border-blue-200" },
  { label: "Sunday", time: "Closed", badgeBg: "bg-rose-50 text-rose-700 border-rose-200" },
];

const SCHOOL_DETAILS = [
  { label: "School Code", value: "621282" },
  { label: "U-DISE Code", value: "09470911607" },
  { label: "Principal", value: "Rajesh Kumar" },
  { label: "Affiliated", value: "UP Board" },
  { label: "High School Est.", value: "2011" },
  { label: "Intermediate Est.", value: "2016" },
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
export default function Contact() {
  const [currentSlide] = useState(0);

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
              💬 WhatsApp करें — अभी
            </a>
            <a
              href="tel:+919935748696"
              className="px-8 py-3.5 rounded-2xl font-bold text-white bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 transition-all hover:scale-105 active:scale-95 text-sm text-center shadow-lg"
            >
              📞 Call करें
            </a>
          </div>
        </div>
      </section>

      {/* ================= CONTACT CARDS SECTION ================= */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-amber-800 font-bold text-xs uppercase tracking-widest bg-amber-100/70 border border-amber-200/80 px-4 py-1.5 rounded-full">
            Quick Connect
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">How to Reach Us</h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {CONTACT_CARDS.map((card, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className={`bg-white border border-slate-200/95 ${card.borderHover} p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all group flex flex-col items-center text-center justify-between`}
            >
              <div>
                <div className={`w-16 h-16 rounded-2xl ${card.iconBg} text-2xl flex items-center justify-center mb-6 shadow-md transition-colors`}>
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-amber-900 transition-colors">{card.title}</h3>
                
                {card.subtitle && (
                  <p className="text-slate-400 text-xs mb-3 whitespace-pre-line font-medium">{card.subtitle}</p>
                )}

                {card.content && (
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed whitespace-pre-line mb-4 font-normal">{card.content}</p>
                )}

                {card.phones && (
                  <div className="space-y-1.5 mb-4">
                    {card.phones.map((p, i) => (
                      <a key={i} href={p.href} className="text-amber-600 hover:text-amber-700 font-bold text-sm block transition-colors">
                        {p.label}
                      </a>
                    ))}
                  </div>
                )}

                {card.email && (
                  <a href={`mailto:${card.email}`} className="text-amber-600 hover:text-amber-700 font-bold text-xs break-all block transition-colors mb-4">
                    {card.email}
                  </a>
                )}
              </div>

              {card.whatsappLink && (
                <a
                  href={card.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-6 py-2.5 rounded-xl shadow-md transition-all hover:scale-105"
                >
                  Message Now
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= MAP + TIMINGS SECTION ================= */}
      <section className="py-20 sm:py-28 bg-slate-100/70 border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Map Column */}
          <div>
            <div className="mb-6">
              <span className="text-amber-800 font-bold text-xs uppercase tracking-widest bg-amber-100/80 border border-amber-200/80 px-4 py-1.5 rounded-full">
                Location
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">📍 Find Us on Map</h2>
            </div>
            <div className="rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl bg-white p-2">
              <iframe
                src="https://maps.google.com/maps?q=26.75828968491423,81.82408099081395&z=15&output=embed"
                width="100%"
                height="440"
                style={{ border: 0, borderRadius: "1.25rem" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Timings & School Details Column */}
          <div className="space-y-10">
            {/* School Timings */}
            <div>
              <div className="mb-6">
                <span className="text-amber-800 font-bold text-xs uppercase tracking-widest bg-amber-100/80 border border-amber-200/80 px-4 py-1.5 rounded-full">
                  Schedule
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">🕐 School Timings</h2>
              </div>
              <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden divide-y divide-slate-100">
                {SCHOOL_TIMINGS.map((timing, i) => (
                  <div key={i} className="flex items-center justify-between p-5 hover:bg-slate-50 transition-colors">
                    <p className="font-bold text-slate-900 text-sm">{timing.label}</p>
                    <span className={`text-xs px-3.5 py-1.5 rounded-full font-bold border ${timing.badgeBg}`}>
                      {timing.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* School Details */}
            <div>
              <div className="mb-6">
                <span className="text-amber-800 font-bold text-xs uppercase tracking-widest bg-amber-100/80 border border-amber-200/80 px-4 py-1.5 rounded-full">
                  Institution Info
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">🏫 School Details</h2>
              </div>
              <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden divide-y divide-slate-100">
                {SCHOOL_DETAILS.map((item, i) => (
                  <div key={i} className="flex items-center justify-between px-6 py-4 hover:bg-slate-50 transition-colors">
                    <p className="text-slate-500 text-xs font-semibold">{item.label}</p>
                    <p className="text-slate-900 font-bold text-xs sm:text-sm">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="py-24 px-6 text-center bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-amber-500/10 pointer-events-none" />
        <div className="max-w-2xl mx-auto relative z-10">
          <span className="text-amber-300 font-bold text-xs uppercase tracking-widest bg-white/10 border border-white/20 px-4 py-1.5 rounded-full inline-block mb-4">
            Visit Campus
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight">Want to Visit Our School?</h2>
          <p className="text-slate-300 mb-8 text-sm sm:text-base font-light">
            Parents and students are always welcome during office hours. Come see our campus and meet our mentors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919935748696"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-9 py-4 rounded-2xl shadow-xl shadow-amber-400/25 transition-all hover:scale-105 text-sm"
            >
              💬 Visit करें — WhatsApp
            </a>
            <a
              href="tel:+919935748696"
              className="inline-block bg-white/10 hover:bg-white/20 text-white border border-white/30 font-medium px-9 py-4 rounded-2xl shadow-xl transition-all hover:scale-105 text-sm backdrop-blur-md"
            >
              📞 Call करें
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
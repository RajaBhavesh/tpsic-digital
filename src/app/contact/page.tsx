"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const heroSlides = [
  { src: "/images/ten.jpg", alt: "School Ground and Buses" },
];

function HeroSlider() {
  const [current] = useState(0);

  return (
    <section className="relative py-20 px-6 text-center overflow-hidden" style={{ minHeight: "420px" }}>
      {heroSlides.map((slide, i) => (
        <div key={i} className="absolute inset-0 transition-opacity duration-1000" style={{ opacity: i === current ? 1 : 0 }}>
          <Image src={slide.src} alt={slide.alt} fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/65 to-blue-900/50" />
        </div>
      ))}

      <div className="relative z-10 max-w-4xl mx-auto">
        <p className="text-orange-400 font-medium text-sm uppercase tracking-widest mb-4">संपर्क करें</p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">Get In Touch</h1>
        <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-8">
          Have questions about admissions, fees, or anything else? We're here to help — reach out anytime.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://wa.me/919935748696" target="_blank" rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-lg transition-colors">
            💬 WhatsApp करें — अभी
          </a>
          <a href="tel:+919935748696"
            className="bg-white/20 hover:bg-white/30 text-white border border-white/40 font-medium px-8 py-3 rounded-lg transition-colors">
            📞 Call करें
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Contact() {
  return (
    <main>
      <HeroSlider />

      {/* Contact Cards */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white rounded-2xl p-6 text-center border border-gray-100 hover:border-blue-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-2xl mx-auto mb-4">📍</div>
              <h3 className="font-bold text-blue-900 text-base mb-3">Address</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Missa Baragaon, Ruduli<br />Ayodhya, UP — 224116</p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center border border-gray-100 hover:border-blue-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-2xl mx-auto mb-4">📞</div>
              <h3 className="font-bold text-blue-900 text-base mb-3">Phone</h3>
              <p className="text-gray-400 text-xs mb-3">Mon — Sat, 8AM — 4PM</p>
              <a href="tel:+919935748696" className="text-orange-500 hover:text-orange-600 font-medium text-sm block transition-colors">+91 99357 48696</a>
              <a href="tel:+919415529912" className="text-orange-500 hover:text-orange-600 font-medium text-sm block transition-colors mt-1">+91 94155 29912</a>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center border border-gray-100 hover:border-blue-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-2xl mx-auto mb-4">✉️</div>
              <h3 className="font-bold text-blue-900 text-base mb-3">Email</h3>
              <p className="text-gray-400 text-xs mb-3">Official correspondence</p>
              <a href="mailto:tejpalsmarakintercollege2011@gmail.com" className="text-orange-500 hover:text-orange-600 font-medium text-xs break-all transition-colors">
                tejpalsmarakintercollege2011@gmail.com
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center border border-gray-100 hover:border-green-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center text-2xl mx-auto mb-4">💬</div>
              <h3 className="font-bold text-blue-900 text-base mb-3">WhatsApp</h3>
              <p className="text-gray-400 text-xs mb-4">Fastest response<br />Reply within hours</p>
              <a href="https://wa.me/919935748696" target="_blank" rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-bold text-xs px-5 py-2 rounded-full transition-colors">
                Message Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map + Timings */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-bold text-blue-900 mb-5">📍 Find Us on Map</h2>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <iframe
                src="https://maps.google.com/maps?q=26.75828968491423,81.82408099081395&z=15&output=embed"
                width="100%" height="300" style={{ border: 0 }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-blue-900 mb-5">🕐 School Timings</h2>
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden mb-5">
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <p className="font-medium text-blue-900 text-sm">Monday — Saturday</p>
                <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium">8AM — 2:30PM</span>
              </div>
              <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-gray-50">
                <p className="font-medium text-blue-900 text-sm">Office Hours</p>
                <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full font-medium">8AM — 4PM</span>
              </div>
              <div className="flex items-center justify-between p-4">
                <p className="font-medium text-blue-900 text-sm">Sunday</p>
                <span className="bg-red-100 text-red-600 text-xs px-3 py-1 rounded-full font-medium">Closed</span>
              </div>
            </div>

            <h2 className="text-xl font-bold text-blue-900 mb-5">🏫 School Details</h2>
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              {[
                { label: "School Code", value: "621282" },
                { label: "U-DISE Code", value: "09470911607" },
                { label: "Principal", value: "Rajesh Kumar" },
                { label: "Affiliated", value: "UP Board" },
                { label: "High School Est.", value: "2011" },
                { label: "Intermediate Est.", value: "2016" },
              ].map((item, i) => (
                <div key={i} className={`flex items-center justify-between px-4 py-3 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"} ${i < 5 ? "border-b border-gray-100" : ""}`}>
                  <p className="text-gray-500 text-xs">{item.label}</p>
                  <p className="text-blue-900 font-medium text-xs">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 py-14 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-3">Want to Visit Our School?</h2>
          <p className="text-blue-200 mb-8">Parents and students are always welcome during office hours.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/919935748696" target="_blank" rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-lg transition-colors">
              💬 Visit Fix करें — WhatsApp
            </a>
            <a href="tel:+919935748696"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-medium px-8 py-3 rounded-lg transition-colors">
              📞 Call करें
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
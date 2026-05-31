import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admissions 2026-27 — Tejpal Smarak Inter College",
  description: "Admissions open for 2026-27 at Tejpal Smarak Inter College, Missa Baragaon, Ayodhya. Nursery to Class 12. UP Board affiliated. Contact us on WhatsApp.",
};
export default function Admissions() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-orange-500 font-medium text-sm uppercase tracking-widest mb-4">
            Admissions 2026-27
          </p>
          <h1 className="text-4xl font-bold text-blue-900 mb-6">
            Join Our School
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Admissions are open for the 2026-27 academic year.
            Limited seats available — apply today.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 text-center mb-10">
            Admission Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-lg mx-auto mb-4">1</div>
              <h3 className="font-bold text-blue-900 mb-2">Contact Us</h3>
              <p className="text-gray-600 text-sm">Call or WhatsApp us to express interest</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-lg mx-auto mb-4">2</div>
              <h3 className="font-bold text-blue-900 mb-2">Visit School</h3>
              <p className="text-gray-600 text-sm">Come visit us and meet our teachers</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-lg mx-auto mb-4">3</div>
              <h3 className="font-bold text-blue-900 mb-2">Submit Form</h3>
              <p className="text-gray-600 text-sm">Fill and submit the admission form</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-lg mx-auto mb-4">4</div>
              <h3 className="font-bold text-blue-900 mb-2">Confirmation</h3>
              <p className="text-gray-600 text-sm">Get confirmation and pay fees</p>
            </div>
          </div>
        </div>
      </section>

      {/* Classes & Fees */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 text-center mb-10">
            Classes Available
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-100 text-center">
              <p className="text-lg font-bold text-blue-900 mb-2">Nursery — KG</p>
              <p className="text-gray-500 text-sm mb-4">Pre-Primary</p>
              <p className="text-2xl font-bold text-orange-500">₹XXXX</p>
              <p className="text-gray-400 text-xs mt-1">per year (dummy)</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100 text-center">
              <p className="text-lg font-bold text-blue-900 mb-2">Class 1 — 5</p>
              <p className="text-gray-500 text-sm mb-4">Primary</p>
              <p className="text-2xl font-bold text-orange-500">₹XXXX</p>
              <p className="text-gray-400 text-xs mt-1">per year (dummy)</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100 text-center">
              <p className="text-lg font-bold text-blue-900 mb-2">Class 6 — 10</p>
              <p className="text-gray-500 text-sm mb-4">Secondary</p>
              <p className="text-2xl font-bold text-orange-500">₹XXXX</p>
              <p className="text-gray-400 text-xs mt-1">per year (dummy)</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100 text-center">
              <p className="text-lg font-bold text-blue-900 mb-2">Class 11 — 12</p>
              <p className="text-gray-500 text-sm mb-4">Intermediate</p>
              <p className="text-2xl font-bold text-orange-500">₹XXXX</p>
              <p className="text-gray-400 text-xs mt-1">per year (dummy)</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Ready to Apply?
          </h2>
          <p className="text-gray-600 mb-8">
            Contact us on WhatsApp for fastest response.
            We typically reply within a few hours.
          </p>
          <a
            href="https://wa.me/919935748696"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-medium px-8 py-3 rounded-lg transition-colors"
          >
            WhatsApp Karein — Abhi
          </a>
        </div>
      </section>
    </main>
  );
}
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
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-20 px-6 text-center overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-orange-400 font-medium text-sm uppercase tracking-widest mb-4">
            Admissions 2026-27
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Our School
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-8">
            Admissions are open for the 2026-27 academic year.
            Limited seats available — apply today.
          </p>
          <a
            href="https://wa.me/919935748696"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3 rounded-lg transition-colors"
          >
            WhatsApp Karein — Abhi Apply Karein
          </a>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-orange-500 font-medium text-sm uppercase tracking-widest text-center mb-3">
            Simple Steps
          </p>
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
            Admission Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Contact Us", desc: "Call or WhatsApp us to express interest" },
              { step: "2", title: "Visit School", desc: "Come visit us and meet our teachers" },
              { step: "3", title: "Submit Form", desc: "Fill and submit the admission form" },
              { step: "4", title: "Confirmation", desc: "Get confirmation and pay fees" },
            ].map((item) => (
              <div key={item.step} className="text-center group">
                <div className="w-14 h-14 rounded-full bg-blue-900 group-hover:bg-orange-500 text-white flex items-center justify-center font-bold text-xl mx-auto mb-4 transition-colors duration-300">
                  {item.step}
                </div>
                <h3 className="font-bold text-blue-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          {/* Connector line - desktop only */}
          <div className="hidden md:flex items-center justify-center mt-2 -mt-16 mb-8 px-16 pointer-events-none">
          </div>
        </div>
      </section>

      {/* Classes */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-orange-500 font-medium text-sm uppercase tracking-widest text-center mb-3">
            All Classes
          </p>
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-4">
            Nursery to Class 12
          </h2>
          <p className="text-gray-500 text-center text-sm mb-10">
            We offer complete education from Pre-Primary to Intermediate level
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { class: "Nursery — KG", level: "Pre-Primary", highlight: false },
              { class: "Class 1 — 5", level: "Primary", highlight: false },
              { class: "Class 6 — 10", level: "Secondary", highlight: false },
              { class: "Class 11 — 12", level: "Intermediate", highlight: false },
            ].map((item, index) => (
              <div key={index} className={`rounded-2xl p-6 text-center border transition-all hover:shadow-md hover:-translate-y-1 duration-300 ${item.highlight ? "bg-blue-900 border-blue-700" : "bg-white border-gray-100"}`}>
                <p className={`text-lg font-bold mb-2 ${item.highlight ? "text-white" : "text-blue-900"}`}>
                  {item.class}
                </p>
                <p className={`text-sm mb-4 ${item.highlight ? "text-blue-200" : "text-gray-500"}`}>
                  {item.level}
                </p>
                <p className={`text-xs italic ${item.highlight ? "text-blue-300" : "text-gray-400"}`}>
                  Contact us for fee details
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-orange-500 font-medium text-sm uppercase tracking-widest text-center mb-3">
            Be Prepared
          </p>
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">
            Documents Required
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Birth Certificate",
              "Previous Class Marksheet / Transfer Certificate",
              "Aadhar Card (Student)",
              "Aadhar Card (Parent/Guardian)",
              "Passport Size Photos (4)",
              "Caste Certificate (if applicable)",
            ].map((doc, index) => (
              <div key={index} className="flex items-center gap-3 bg-blue-50 rounded-xl px-4 py-3">
                <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                  ✓
                </div>
                <p className="text-gray-700 text-sm">{doc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Apply?
          </h2>
          <p className="text-orange-100 mb-8">
            Contact us on WhatsApp for fastest response.
            We typically reply within a few hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919935748696"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-orange-500 hover:bg-orange-50 font-bold px-8 py-3 rounded-lg transition-colors"
            >
              WhatsApp Karein — Abhi
            </a>
            <Link
              href="/contact"
              className="bg-orange-600 hover:bg-orange-700 text-white font-medium px-8 py-3 rounded-lg transition-colors border border-orange-400"
            >
              View Contact Details
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
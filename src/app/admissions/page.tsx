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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Join Tejpal Smarak Inter College
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-8">
            Admissions open for 2026-27. Nursery to Class 12. Limited seats — apply today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919935748696"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-lg transition-colors"
            >
              💬 WhatsApp करें — अभी Apply करें
            </a>
            <a
              href="tel:+919935748696"
              className="bg-white/20 hover:bg-white/30 text-white border border-white/40 font-medium px-8 py-3 rounded-lg transition-colors"
            >
              📞 Call करें
            </a>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-orange-500 py-6 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-white">300+</p>
            <p className="text-orange-100 text-xs mt-1">Students</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">Nursery—12</p>
            <p className="text-orange-100 text-xs mt-1">All Classes</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">UP Board</p>
            <p className="text-orange-100 text-xs mt-1">Affiliated</p>
          </div>
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
          <p className="text-orange-500 font-medium text-sm uppercase tracking-widest text-center mb-3">
            सभी कक्षाएं
          </p>
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">
            Nursery से Class 12 तक
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { class: "Nursery — KG", level: "Pre-Primary", icon: "🌱", highlight: false },
              { class: "Class 1 — 5", level: "Primary", icon: "📖", highlight: false },
              { class: "Class 6 — 10", level: "Secondary", icon: "🎓", highlight: false },
              { class: "Class 11 — 12", level: "Intermediate", icon: "🏆", highlight: false },
            ].map((item, index) => (
              <div key={index} className={`rounded-2xl p-6 text-center border transition-all hover:shadow-lg hover:-translate-y-1 duration-300 ${item.highlight ? "bg-blue-900 border-blue-700" : "bg-white border-gray-100"}`}>
                <div className="text-3xl mb-3">{item.icon}</div>
                <p className={`text-base font-bold mb-1 ${item.highlight ? "text-white" : "text-blue-900"}`}>
                  {item.class}
                </p>
                <p className={`text-xs mb-3 ${item.highlight ? "text-blue-200" : "text-gray-500"}`}>
                  {item.level}
                </p>
                <p className={`text-xs italic ${item.highlight ? "text-blue-300" : "text-gray-400"}`}>
                  Fee details on request
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
            तैयार रहें
          </p>
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">
            Documents Required
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { doc: "Birth Certificate", icon: "📄" },
              { doc: "Previous Class Marksheet / TC", icon: "📋" },
              { doc: "Aadhar Card (Student)", icon: "🪪" },
              { doc: "Aadhar Card (Parent/Guardian)", icon: "🪪" },
              { doc: "Passport Size Photos (4)", icon: "📸" },
              { doc: "Caste Certificate (if applicable)", icon: "📜" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-blue-50 hover:bg-blue-100 rounded-xl px-4 py-3 transition-colors">
                <span className="text-xl">{item.icon}</span>
                <p className="text-gray-700 text-sm font-medium">{item.doc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="bg-blue-900 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-10">
            Why Join TSIC?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "🏆", text: "District Toppers" },
              { icon: "📱", text: "5 Smart Classes" },
              { icon: "🔬", text: "Science Lab" },
              { icon: "💰", text: "Affordable Fees" },
            ].map((item, index) => (
              <div key={index} className="bg-white/10 rounded-xl p-4 text-center">
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
          <h2 className="text-3xl font-bold text-white mb-3">
            Ready to Apply?
          </h2>
          <p className="text-orange-100 mb-8">
            WhatsApp करें — fastest response, within hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919935748696"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-orange-500 hover:bg-orange-50 font-bold px-8 py-3 rounded-lg transition-colors"
            >
              💬 WhatsApp करें — अभी
            </a>
            <Link
              href="/contact"
              className="bg-white text-orange-500 hover:bg-orange-50 font-bold px-8 py-3 rounded-lg transition-colors"
            >
              Contact Details देखें
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
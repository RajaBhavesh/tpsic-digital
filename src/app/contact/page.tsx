export default function Contact() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-orange-500 font-medium text-sm uppercase tracking-widest mb-4">
            Sampark Karein
          </p>
          <h1 className="text-4xl font-bold text-blue-900 mb-6">
            Contact Us
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have questions? We are here to help. Reach out to us 
            via WhatsApp, phone, or visit us directly.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-8 border border-gray-100 text-center">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="font-bold text-blue-900 text-lg mb-3">Address</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Tejpal Smarak Inter College<br />
              Missa Baragaon, Ayodhya<br />
              Uttar Pradesh, India
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 border border-gray-100 text-center">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="font-bold text-blue-900 text-lg mb-3">Phone</h3>
            <p className="text-gray-600 text-sm mb-4">
              Available Monday to Saturday<br />
              8:00 AM — 4:00 PM
            </p>
            <a
              href="tel:+919935748696"
              className="text-orange-500 font-medium hover:text-orange-600"
            >
              +91 99357 48696
            </a>
          </div>
          <div className="bg-white rounded-xl p-8 border border-gray-100 text-center">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="font-bold text-blue-900 text-lg mb-3">WhatsApp</h3>
            <p className="text-gray-600 text-sm mb-4">
              Fastest way to reach us.<br />
              We reply within a few hours.
            </p>
            <a
              href="https://wa.me/919935748696"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-6 py-2 rounded-lg transition-colors"
            >
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* Timing */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 text-center mb-10">
            School Timings
          </h2>
          <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-2 border-b border-gray-100 p-4">
              <p className="font-medium text-blue-900">Monday — Saturday</p>
              <p className="text-gray-600">8:00 AM — 2:30 PM</p>
            </div>
            <div className="grid grid-cols-2 border-b border-gray-100 p-4 bg-gray-50">
              <p className="font-medium text-blue-900">Office Hours</p>
              <p className="text-gray-600">8:00 AM — 4:00 PM</p>
            </div>
            <div className="grid grid-cols-2 p-4">
              <p className="font-medium text-blue-900">Sunday</p>
              <p className="text-gray-600">Closed</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Want to Visit Us?
          </h2>
          <p className="text-gray-600 mb-8">
            We welcome parents and students to visit our school anytime 
            during office hours. Come meet our teachers and see our facilities.
          </p>
          <a
            href="https://wa.me/919935748696"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3 rounded-lg transition-colors"
          >
            Fix a Visit — WhatsApp Karein
          </a>
        </div>
      </section>
    </main>
  );
}
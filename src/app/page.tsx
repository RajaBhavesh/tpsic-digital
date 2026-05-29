export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">

          <p className="text-orange-500 font-medium text-sm uppercase tracking-widest mb-4">
            UP Board Affiliated — Est. 2001
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight mb-6">
            Tejpal Smarak Inter College
          </h1>

          <p className="text-xl text-gray-600 mb-4">
            शिक्षा से सशक्तिकरण — गाँव से उज्ज्वल भविष्य तक
          </p>

          <p className="text-gray-500 text-base max-w-2xl mx-auto mb-10">
            Located in Missa Baragaon, Ayodhya, we provide quality education 
            to 300+ students. UP Board affiliated school with experienced 
            teachers, dedicated to shaping a brighter future for every child.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/admissions"
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3 rounded-lg transition-colors text-base"
            >
              Admission Inquiry
            </a>
            <a
              href="/about"
              className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-medium px-8 py-3 rounded-lg transition-colors text-base"
            >
              Hamare Baare Mein
            </a>
          </div>

        </div>
      </section>

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
            <p className="text-3xl font-bold text-orange-400">Est. 2001</p>
            <p className="text-blue-200 text-sm mt-1">Established</p>
          </div>
        </div>
      </section>
    </main>
  );
}
import Link from "next/link";
export default function Faculty() {
  const teachers = [
    {
      name: "Mr. [Teacher Name]",
      subject: "Mathematics",
      qualification: "M.Sc., B.Ed.",
      experience: "10+ years",
    },
    {
      name: "Mr. [Teacher Name]",
      subject: "Science",
      qualification: "M.Sc., B.Ed.",
      experience: "8+ years",
    },
    {
      name: "Mrs. [Teacher Name]",
      subject: "Hindi",
      qualification: "M.A., B.Ed.",
      experience: "12+ years",
    },
    {
      name: "Mr. [Teacher Name]",
      subject: "English",
      qualification: "M.A., B.Ed.",
      experience: "6+ years",
    },
    {
      name: "Mr. [Teacher Name]",
      subject: "Social Science",
      qualification: "M.A., B.Ed.",
      experience: "9+ years",
    },
    {
      name: "Mrs. [Teacher Name]",
      subject: "Sanskrit",
      qualification: "M.A., B.Ed.",
      experience: "7+ years",
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-orange-500 font-medium text-sm uppercase tracking-widest mb-4">
            Hamare Shikshak
          </p>
          <h1 className="text-4xl font-bold text-blue-900 mb-6">
            Our Faculty
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our dedicated and experienced teachers are committed to bringing 
            out the best in every student.
          </p>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {teachers.map((teacher, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center font-bold text-xl mx-auto mb-4">
                {teacher.subject[0]}
              </div>
              <h3 className="font-bold text-blue-900 text-lg mb-1">{teacher.name}</h3>
              <p className="text-orange-500 font-medium text-sm mb-3">{teacher.subject}</p>
              <div className="border-t border-gray-100 pt-3 space-y-1">
                <p className="text-gray-500 text-sm">{teacher.qualification}</p>
                <p className="text-gray-400 text-xs">{teacher.experience} experience</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Principal Note */}
      <section className="bg-blue-900 py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-orange-400 font-medium text-sm uppercase tracking-widest mb-4">
            Principal's Message
          </p>
          <p className="text-white text-lg leading-relaxed mb-6">
            "At Tejpal Smarak Inter College, we believe every child has 
            unlimited potential. Our teachers don't just teach — they inspire, 
            guide, and shape the future of our nation."
          </p>
          <p className="text-blue-200 font-medium">— Principal, TSIC</p>
        </div>
      </section>
    </main>
  );
}
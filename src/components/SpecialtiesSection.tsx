export default function SpecialtiesSection() {
  const specialties = [
    "Infectious Diseases (HIV, TB, Malaria)",
    "Maternal & Child Health",
    "Pediatrics",
    "Obstetrics & Gynecology",
    "Family Medicine",
    "General Medicine",
    "Non-Communicable Diseases (Diabetes, Hypertension)",
    "Emergency Medicine",
    "Surgery",
    "Mental Health",
    "Community Health",
    "Immunization",
    "Nutrition",
    "Eye & Dental Care",
    "and 30+ more relevant to Uganda"
  ]

  return (
    <section className="bg-gradient-to-br from-teal-50 to-green-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-teal-600 font-medium uppercase tracking-wide text-sm mb-4">
              FOR UGANDA'S HEALTH PRIORITIES
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              40+ specialties for Uganda's needs
            </h2>

            <div className="flex flex-wrap gap-3 mb-8">
              {specialties.map((specialty, index) => (
                <span
                  key={index}
                  className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://ext.same-assets.com/1157322651/1382299453.avif"
              alt="Healthcare professional"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            {/* Decorative floating elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-teal-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-green-400 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

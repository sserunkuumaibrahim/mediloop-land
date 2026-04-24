export default function PartnersSection() {
  const stats = [
    { value: 'Live', label: 'Platform Status', sub: 'Operational now' },
    { value: '45M', label: 'Ugandans to Reach', sub: 'Our mission' },
    { value: 'FHIR R4', label: 'Standard', sub: 'Interoperable' },
    { value: '24/7', label: 'AI Doctor', sub: 'Always available' },
  ]

  return (
    <section className="bg-white py-12 sm:py-16 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-4xl font-bold text-teal-600 mb-1">{stat.value}</div>
              <div className="text-sm sm:text-base text-gray-800 font-semibold">{stat.label}</div>
              <div className="text-xs sm:text-sm text-gray-400 mt-0.5">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

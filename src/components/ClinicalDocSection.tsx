import { ArrowRight, Building2, Pill, FlaskConical, Stethoscope } from 'lucide-react'

export default function ClinicalDocSection() {
  const facilityTypes = [
    {
      icon: Building2,
      title: 'Hospitals & Clinics',
      desc: 'Full EMR, appointments, ward management, and care coordination.',
      bg: 'bg-teal-50', border: 'border-teal-200', iconCls: 'bg-teal-100 text-teal-600',
    },
    {
      icon: Pill,
      title: 'Pharmacies',
      desc: 'Prescription dispensing, inventory management, and drug interaction checks.',
      bg: 'bg-blue-50', border: 'border-blue-200', iconCls: 'bg-blue-100 text-blue-600',
    },
    {
      icon: FlaskConical,
      title: 'Laboratories',
      desc: 'Lab order management, digital result delivery, and FHIR-compliant records.',
      bg: 'bg-purple-50', border: 'border-purple-200', iconCls: 'bg-purple-100 text-purple-600',
    },
    {
      icon: Stethoscope,
      title: 'Specialist Practices',
      desc: 'Specialty workflows, referral management, and complete patient histories.',
      bg: 'bg-orange-50', border: 'border-orange-200', iconCls: 'bg-orange-100 text-orange-600',
    },
  ]

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
            Built for Every Type of Healthcare Facility
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you run a single clinic or a hospital network, Mediloop adapts to your workflows.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-10">
          {facilityTypes.map((type) => {
            const Icon = type.icon
            return (
              <div key={type.title} className={`${type.bg} border ${type.border} rounded-2xl p-6`}>
                <div className={`inline-flex p-3 rounded-xl ${type.iconCls} mb-4`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{type.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{type.desc}</p>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <a
            href="/providers"
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white px-8 py-3.5 rounded-lg font-semibold transition-colors"
          >
            Register Your Facility <ArrowRight className="h-4 w-4" />
          </a>
          <span className="mx-4 text-gray-400 hidden sm:inline">or</span>
          <a
            href="/providers#pricing"
            className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold mt-4 sm:mt-0"
          >
            View Pricing <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

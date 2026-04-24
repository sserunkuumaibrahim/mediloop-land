import { ArrowRight, Layers, Activity, Users, Globe } from 'lucide-react'

export default function DevelopersSection() {
  const layers = [
    {
      title: 'Patient Layer',
      desc: 'Universal Health ID, WhatsApp AI, health records, care coordination, drug delivery, lab tests.',
      icon: Users,
      color: 'text-teal-600',
      bg: 'bg-teal-50',
    },
    {
      title: 'Provider Layer',
      desc: 'EMR, clinical decision support, pharmacy management, lab integration, billing, analytics.',
      icon: Activity,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    {
      title: 'Platform Layer',
      desc: 'FHIR R4 APIs, authentication, data exchange, security, compliance, offline-first infrastructure.',
      icon: Layers,
      color: 'text-purple-600',
      bg: 'bg-purple-50',
    },
    {
      title: 'National Layer',
      desc: 'Government reporting, national health registry, interoperability with Uganda health systems.',
      icon: Globe,
      color: 'text-orange-600',
      bg: 'bg-orange-50',
    },
  ]

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-gray-200 text-gray-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            The Platform
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
            Uganda's Digital Health Infrastructure
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Mediloop is not just an app. It is the infrastructure layer connecting every part of Uganda's healthcare system.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-10">
          {layers.map((layer) => {
            const Icon = layer.icon
            return (
              <div key={layer.title} className={`${layer.bg} rounded-2xl p-6 border border-gray-100`}>
                <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                  <Icon className={`h-5 w-5 ${layer.color}`} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{layer.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{layer.desc}</p>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <a
            href="/platform"
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white px-8 py-3.5 rounded-lg font-semibold transition-colors"
          >
            Explore the Platform <ArrowRight className="h-4 w-4" />
          </a>
          <span className="mx-4 text-gray-400 hidden sm:inline">or</span>
          <a
            href="/services"
            className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold mt-4 sm:mt-0"
          >
            View All Services <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

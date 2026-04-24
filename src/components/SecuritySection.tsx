import { Shield, Lock, FileText, Users, Globe, Activity } from 'lucide-react'

export default function SecuritySection() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 rounded-full px-4 py-1.5 mb-6 text-sm font-semibold">
              <Lock className="h-4 w-4" />
              Security & Trust
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-6">
              Your Health Data is Safe With Us
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8">
              Patient data is encrypted at rest and in transit. You control who sees your records. Full audit trails on every access. Built to the highest security standards.
            </p>
            <div className="space-y-4">
              {[
                { icon: Shield, text: 'End-to-end encryption for all patient data' },
                { icon: Lock, text: 'Role-based access control, you decide who sees what' },
                { icon: FileText, text: 'Full audit trails for every data access' },
                { icon: Users, text: 'Patient consent management built in' },
                { icon: Globe, text: 'FHIR R4 compliant, interoperable with global systems' },
                { icon: Activity, text: '24/7 monitoring and 99.9% uptime SLA' },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.text} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-teal-50 rounded-lg flex items-center justify-center shrink-0">
                      <Icon className="h-4 w-4 text-teal-600" />
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base">{item.text}</span>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="bg-teal-50 rounded-3xl p-8 sm:p-10">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6">
              {[
                { value: '256-bit', label: 'AES Encryption' },
                { value: '99.9%', label: 'Uptime SLA' },
                { value: 'FHIR R4', label: 'Standard' },
                { value: '24/7', label: 'Monitoring' },
              ].map((item) => (
                <div key={item.label} className="bg-white rounded-2xl p-5 sm:p-6 text-center shadow-sm">
                  <div className="text-xl sm:text-2xl font-bold text-teal-600 mb-1">{item.value}</div>
                  <div className="text-sm text-gray-600">{item.label}</div>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <div className="text-sm text-gray-500 mb-1">Trusted by</div>
              <div className="text-2xl font-bold text-gray-900">1,000+ Facilities</div>
              <div className="text-sm text-gray-500 mt-1">Across Uganda</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import {
  MessageCircle,
  IdCard,
  Truck,
  FlaskConical,
  MapPin,
  Heart,
  ArrowRight,
  Stethoscope,
  Brain,
  BarChart3,
  Shield,
  Globe,
  Code,
  Zap,
  Lock,
} from 'lucide-react'

const WHATSAPP_UHID = 'https://wa.me/256775035244?text=Hello%20Mediloop%2C%20I%20want%20to%20register%20for%20my%20UHID'

export default function KeyFeaturesSection() {
  return (
    <>
      {/* ── FOR PATIENTS ── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              For Patients
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
              Your Health, Simplified
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              One health ID. All your records. AI doctor on WhatsApp. Healthcare that works for every Ugandan, wherever they are.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-10">
            {[
              {
                icon: MessageCircle,
                title: 'AI Doctor on WhatsApp',
                desc: 'Get instant medical advice 24/7. Describe your symptoms, ask health questions, get guidance without leaving home. No app needed.',
                color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-100',
              },
              {
                icon: IdCard,
                title: 'Universal Health ID (UHID)',
                desc: 'One health ID for life. All your records, diagnoses, prescriptions, and lab results in one place, accessible at any facility.',
                color: 'text-teal-600', bg: 'bg-teal-50', border: 'border-teal-100',
              },
              {
                icon: Truck,
                title: 'Drug Delivery',
                desc: 'Order prescription and OTC medications from verified pharmacies and have them delivered to your door.',
                color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100',
              },
              {
                icon: FlaskConical,
                title: 'Lab Tests at Home',
                desc: 'Book lab tests with home sample collection. Results go directly to your UHID and your doctor.',
                color: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-100',
              },
              {
                icon: MapPin,
                title: 'Find Nearby Facilities',
                desc: 'Locate the nearest clinics, hospitals, pharmacies, and labs. See opening hours and book instantly.',
                color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-100',
              },
              {
                icon: Heart,
                title: 'Care Coordination',
                desc: 'Your doctor, specialist, pharmacist, and lab all see the same records with your consent. No duplicate tests.',
                color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-100',
              },
            ].map((f) => {
              const Icon = f.icon
              return (
                <div key={f.title} className={`${f.bg} border ${f.border} rounded-2xl p-6 hover:shadow-md transition-shadow`}>
                  <div className={`w-11 h-11 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm`}>
                    <Icon className={`h-5 w-5 ${f.color}`} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
                </div>
              )
            })}
          </div>

          <div className="text-center">
            <a
              href={WHATSAPP_UHID}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white px-8 py-3.5 rounded-lg font-semibold transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              Get Your Free UHID on WhatsApp
            </a>
            <span className="mx-4 text-gray-400 hidden sm:inline">or</span>
            <a
              href="/uhid"
              className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold mt-4 sm:mt-0"
            >
              Learn about UHID <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── FOR PROVIDERS ── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                For Healthcare Providers
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-6">
                See the Complete Patient Story. Instantly.
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-8">
                Access complete patient histories in seconds. AI clinical decision support. Less paperwork, more time for care. Built for Uganda's healthcare reality, including offline mode.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { icon: Stethoscope, text: 'Full patient history from all connected facilities' },
                  { icon: Brain, text: 'AI clinical decision support and drug interaction checks' },
                  { icon: BarChart3, text: 'Real-time analytics, billing, and government reporting' },
                  { icon: Globe, text: 'Works offline, syncs when connectivity is restored' },
                  { icon: Shield, text: 'FHIR R4 compliant, interoperable with national systems' },
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
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/providers"
                  className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Register Your Facility <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="/providers#pricing"
                  className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 hover:border-teal-400 px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  View Pricing
                </a>
              </div>
            </div>

            {/* Provider feature cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Basic Plan', value: 'UGX 25,000', sub: '/seat/month', color: 'bg-teal-50 border-teal-200' },
                { label: 'Connected Facilities', value: '1,000+', sub: 'Nationwide', color: 'bg-blue-50 border-blue-200' },
                { label: 'AI Features', value: 'Premium', sub: 'Coming soon', color: 'bg-purple-50 border-purple-200' },
                { label: 'Uptime SLA', value: '99.9%', sub: '24/7 monitoring', color: 'bg-green-50 border-green-200' },
              ].map((card) => (
                <div key={card.label} className={`${card.color} border rounded-2xl p-5 text-center`}>
                  <div className="text-xs text-gray-500 mb-1">{card.label}</div>
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">{card.value}</div>
                  <div className="text-xs text-gray-500 mt-1">{card.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOR DEVELOPERS ── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            {/* Code block */}
            <div className="order-2 lg:order-1">
              <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-800 border-b border-gray-700">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-gray-400 text-xs ml-2 font-mono">FHIR R4 API</span>
                </div>
                <pre className="p-5 text-xs text-gray-300 leading-relaxed overflow-x-auto font-mono">
{`GET /fhir/Patient?identifier=UG867551443P
Authorization: Bearer <your-api-key>

{
  "resourceType": "Patient",
  "id": "UG867551443P",
  "name": [{ "family": "Nakato",
             "given": ["Sarah"] }],
  "birthDate": "1990-03-15",
  "gender": "female",
  "records": {
    "diagnoses": 12,
    "prescriptions": 8,
    "labResults": 5
  }
}`}
                </pre>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                For Developers
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-6">
                Build Healthcare Apps on Uganda's Health Infrastructure
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-8">
                We handle authentication, patient records, FHIR compliance, security, and data management. You focus on building great medical applications.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Code, title: 'Complete APIs', desc: 'Patient records, appointments, prescriptions, lab results' },
                  { icon: Zap, title: 'Build Fast', desc: 'From idea to production in weeks, not months' },
                  { icon: Lock, title: 'Secure by Default', desc: 'Security and compliance handled for you' },
                  { icon: Globe, title: 'FHIR R4', desc: 'International health data standards built in' },
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="bg-white rounded-xl p-4 border border-gray-100">
                      <Icon className="h-5 w-5 text-teal-600 mb-2" />
                      <div className="font-semibold text-gray-900 text-sm mb-1">{item.title}</div>
                      <div className="text-xs text-gray-500">{item.desc}</div>
                    </div>
                  )
                })}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://developers.mediloop.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Developer Portal <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="https://docs.mediloop.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 hover:border-teal-400 px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  API Docs
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

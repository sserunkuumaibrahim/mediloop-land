import { CheckCircle, ArrowRight, MessageCircle } from 'lucide-react'

const WHATSAPP_UHID = 'https://wa.me/256775035244?text=Hello%20Mediloop%2C%20I%20want%20to%20register%20for%20my%20UHID'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-teal-900 to-gray-900 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img
          src="/assets/africa-humanitarian-aid-doctor-taking-care-patient.jpg"
          alt="Healthcare professionals in Uganda"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-400/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
            <span className="text-teal-300 text-sm font-medium">Uganda's Digital Health Infrastructure</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            One Platform.<br />
            Every Ugandan.<br />
            <span className="text-teal-400">All of Healthcare.</span>
          </h1>

          <p className="text-base sm:text-xl text-gray-300 mb-8 leading-relaxed">
            Mediloop connects patients, hospitals, clinics, pharmacies, and labs on a single digital infrastructure.
            One health ID for every Ugandan. AI-powered care. Records that follow you everywhere.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
            {[
              'Universal Health ID for every Ugandan',
              'AI doctor on WhatsApp, available 24/7',
              '1,000+ connected facilities nationwide',
              'FHIR-compliant, government-ready',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-teal-400 shrink-0" />
                <span className="text-gray-200 text-sm">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WHATSAPP_UHID}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-white px-8 py-3.5 rounded-lg font-semibold transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              Get Your Free UHID
            </a>
            <a
              href="/providers"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white hover:bg-white/10 px-8 py-3.5 rounded-lg font-semibold transition-colors"
            >
              For Healthcare Providers
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

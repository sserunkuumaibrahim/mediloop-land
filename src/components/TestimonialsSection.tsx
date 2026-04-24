import { Star, ArrowRight, MessageCircle } from 'lucide-react'

const WHATSAPP_UHID = 'https://wa.me/256775035244?text=Hello%20Mediloop%2C%20I%20want%20to%20register%20for%20my%20UHID'

const testimonials = [
  {
    quote: 'Mediloop has transformed how we manage patient records. We can now see a patient\'s full history from any of our branches instantly.',
    author: 'Dr. Sarah Nakato',
    role: 'Medical Director',
    facility: 'Kampala Medical Centre',
    type: 'provider',
  },
  {
    quote: 'The AI drug interaction checker has prevented several serious medication errors. It is like having a clinical pharmacist available 24/7.',
    author: 'Pharm. James Okello',
    role: 'Chief Pharmacist',
    facility: 'City Pharmacy Group',
    type: 'provider',
  },
  {
    quote: 'I no longer carry a file of papers to every hospital visit. My UHID has everything. The doctor sees my full history in seconds.',
    author: 'Grace Atim',
    role: 'Patient',
    facility: 'Kampala, Uganda',
    type: 'patient',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trusted Across Uganda
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            From patients to providers, Mediloop is changing how Uganda experiences healthcare.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 sm:gap-6 mb-12">
          {testimonials.map((t) => (
            <div key={t.author} className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic text-sm sm:text-base">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <div className="font-bold text-gray-900">{t.author}</div>
                <div className="text-sm text-gray-500">{t.role}</div>
                <div className="text-sm text-teal-600 font-medium">{t.facility}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-br from-gray-900 via-teal-900 to-gray-900 rounded-2xl p-8 sm:p-12 text-center text-white">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Join Uganda's Digital Health Revolution?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you are a patient, a healthcare provider, or a developer, Mediloop has a place for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              Register Your Facility <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

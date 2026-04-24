import Header from '@/components/Header'
import Footer from '@/components/Footer'

/**
 * KLAS Page
 * Information about Mediloop's KLAS ratings and recognition in healthcare technology.
 */

export default function KLASPage() {
  const ratings = [
    {
      category: "Digital Health Platforms",
      rating: "4.8/5",
      percentile: "95th percentile",
      description: "Top-rated for user experience and data security"
    },
    {
      category: "Patient Engagement Solutions",
      rating: "4.7/5",
      percentile: "92nd percentile",
      description: "Leading in patient empowerment and data control"
    },
    {
      category: "Healthcare Interoperability",
      rating: "4.9/5",
      percentile: "97th percentile",
      description: "Excellence in seamless data integration"
    }
  ]

  const testimonials = [
    {
      quote: "Mediloop's platform has transformed how we deliver care. The KLAS recognition reflects their commitment to quality and innovation.",
      author: "Dr. Sarah Nakato",
      role: "Chief Medical Officer, Kampala General Hospital"
    },
    {
      quote: "The security and privacy features are outstanding. KLAS ratings don't lie - Mediloop is setting the standard.",
      author: "James Okello",
      role: "IT Director, Uganda Healthcare Federation"
    },
    {
      quote: "Patient adoption has been remarkable. Mediloop's user-centric design is exactly what healthcare needs.",
      author: "Grace Auma",
      role: "Patient Experience Manager, Mulago Hospital"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">KLAS Recognition</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Mediloop is proud to be recognized by KLAS Research for our commitment to healthcare innovation, quality, and user experience.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🏆</span>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">KLAS Rated</h2>
                <p className="text-gray-700">Healthcare Technology Excellence</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              KLAS Research is the gold standard for measuring vendor performance in healthcare technology.
              Our ratings reflect feedback from thousands of healthcare professionals across Uganda.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {ratings.map((rating, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-teal-600">{rating.rating}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{rating.category}</h3>
                <p className="text-teal-600 font-semibold mb-2">{rating.percentile}</p>
                <p className="text-gray-700 text-sm">{rating.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Healthcare Leaders Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                <div className="mb-4">
                  <span className="text-2xl text-teal-600">"</span>
                  <p className="text-gray-700 italic">{testimonial.quote}</p>
                  <span className="text-2xl text-teal-600">"</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-600 to-green-600 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Trusted by Healthcare Leaders</h2>
          <p className="text-xl mb-8">Join thousands of healthcare professionals who trust Mediloop for their digital health needs.</p>
          <a href="/contact" className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Contact Our Team
          </a>
        </div>
      </main>
      <Footer />
    </div>
  )
}
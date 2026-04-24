import Header from '@/components/Header'
import Footer from '@/components/Footer'

/**
 * Products Page
 * Overview of Mediloop's products and applications.
 */

export default function ProductsPage() {
  const products = [
    {
      name: "Mediloop Web Platform",
      description: "Comprehensive web-based platform for healthcare providers and citizens",
      features: ["Patient management", "Appointment scheduling", "Medical records", "Telemedicine"],
      icon: "💻"
    },
    {
      name: "Mediloop Mobile App",
      description: "Native mobile applications for iOS and Android devices",
      features: ["Health tracking", "Appointment booking", "Emergency access", "Offline mode"],
      icon: "📱"
    },
    {
      name: "UHID Integration",
      description: "Seamless integration with Uganda Health ID system",
      features: ["Biometric verification", "Cross-platform sync", "Secure data sharing", "Identity management"],
      icon: "🆔"
    },
    {
      name: "Provider Dashboard",
      description: "Advanced tools for healthcare professionals",
      features: ["Analytics & reporting", "Patient insights", "Workflow automation", "Compliance tools"],
      icon: "📊"
    }
  ]

  const integrations = [
    { name: "Chrome Extension", description: "Browser integration for seamless access" },
    { name: "API Gateway", description: "RESTful APIs for third-party integrations" },
    { name: "HL7 FHIR", description: "Healthcare data interoperability standards" },
    { name: "Electronic Health Records", description: "Integration with existing EHR systems" }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Products</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Explore Mediloop's comprehensive suite of digital health products designed specifically for Uganda's healthcare ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">{product.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
              </div>
              <p className="text-gray-700 mb-6">{product.description}</p>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">Key Features:</h4>
                <ul className="space-y-1">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="mt-6 text-teal-600 hover:text-teal-700 font-semibold">
                Learn more →
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Integrations & Extensions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔗</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{integration.name}</h3>
                <p className="text-gray-700 text-sm">{integration.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-600 to-green-600 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Join Uganda's digital health revolution with Mediloop products.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Contact Sales
            </a>
            <a href="/uhid" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition">
              Get UHID
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
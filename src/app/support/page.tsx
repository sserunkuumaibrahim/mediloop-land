import Header from '@/components/Header'
import Footer from '@/components/Footer'

/**
 * Support Page
 * Help center, FAQ, and support resources for Mediloop users.
 */

export default function SupportPage() {
  const faqs = [
    {
      question: "How do I get my Universal Health ID?",
      answer: "Visit app.mediloop.co to create your account. You'll need your National ID for verification. Your UHID will be created instantly and you can start using it immediately."
    },
    {
      question: "Is my health data secure?",
      answer: "Yes. Mediloop uses end-to-end encryption and bank-grade security. You control who can access your records and can revoke access anytime. All data is stored securely in compliance with Uganda's Data Protection Act 2019."
    },
    {
      question: "How do I book an appointment?",
      answer: "Message us on WhatsApp at +256 775 035244 or use the patient portal at app.mediloop.co to search for doctors, view available slots, and book appointments instantly."
    },
    {
      question: "Can I get medical advice on WhatsApp?",
      answer: "Yes. Send your health questions to our WhatsApp number +256 775 035244. Our AI system provides instant guidance, and you can connect with a doctor if needed."
    },
    {
      question: "How do I share my records with my doctor?",
      answer: "When you visit any connected healthcare facility, simply provide your UHID. Your doctor will request access and you can approve it instantly from your phone."
    },
    {
      question: "What if I don't have internet?",
      answer: "Your UHID works offline. Healthcare providers can access your essential records even without internet. You can also download key documents to your phone for offline viewing."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Support Center</h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Get help with your health records, appointments, and Mediloop services.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-sm sm:text-base text-gray-700">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6">Contact Support</h3>
              <div className="space-y-4">
                <a href="https://wa.me/256775035244" target="_blank" rel="noopener noreferrer" className="block p-4 bg-teal-50 rounded-lg hover:bg-teal-100 transition">
                  <div>
                    <h4 className="font-semibold text-gray-900">WhatsApp Support</h4>
                    <p className="text-gray-700 text-sm">+256 775 035244</p>
                    <p className="text-gray-600 text-xs mt-1">Available 24/7</p>
                  </div>
                </a>
                <a href="mailto:support@mediloop.co" className="block p-4 bg-teal-50 rounded-lg hover:bg-teal-100 transition">
                  <div>
                    <h4 className="font-semibold text-gray-900">Email Support</h4>
                    <p className="text-gray-700 text-sm">support@mediloop.co</p>
                    <p className="text-gray-600 text-xs mt-1">Response within 24 hours</p>
                  </div>
                </a>
                <a href="tel:+256775035244" className="block p-4 bg-teal-50 rounded-lg hover:bg-teal-100 transition">
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone Support</h4>
                    <p className="text-gray-700 text-sm">+256 775 035244</p>
                    <p className="text-gray-600 text-xs mt-1">Mon-Fri, 8am-6pm</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Office Location</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Plot 19-21 PortBell Road<br />
                Nakawa, Kampala<br />
                Uganda
              </p>
              <p className="text-sm text-gray-600 mt-4">
                Mon-Fri: 8:00 AM - 6:00 PM EAT
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">System Status</h3>
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <span className="text-gray-900 font-medium text-sm sm:text-base">All Systems Operational</span>
              </div>
              <p className="text-sm text-gray-700">
                All Mediloop services are running normally.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-600 to-green-600 rounded-2xl p-8 sm:p-12 text-white text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Need More Help?</h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8">Our support team is available 24/7 to assist you.</p>
          <a href="https://wa.me/256775035244" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-teal-600 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Chat on WhatsApp
          </a>
        </div>
      </main>
      <Footer />
    </div>
  )
}
import Header from '@/components/Header'
import Footer from '@/components/Footer'

/**
 * Contact Page
 * Get in touch with Mediloop for inquiries, partnerships, or support.
 */

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Contact Us</h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Questions about Mediloop? Need support? We're here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
          <div className="bg-white rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                  <option>General Inquiry</option>
                  <option>Partnership Opportunity</option>
                  <option>Technical Support</option>
                  <option>Media Inquiry</option>
                  <option>Career Opportunity</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Tell us how we can help..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-teal-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-teal-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Office Information</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Address</h4>
                  <p className="text-sm sm:text-base text-gray-700">Plot 19-21 PortBell Road<br />Nakawa, Kampala, Uganda</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">WhatsApp</h4>
                  <p className="text-sm sm:text-base text-gray-700">
                    <a href="https://wa.me/256775035244" className="hover:text-teal-600">+256 775 035244</a>
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Phone</h4>
                  <p className="text-sm sm:text-base text-gray-700">+256 775 035244</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Email</h4>
                  <p className="text-sm sm:text-base text-gray-700">info@mediloop.co</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Business Hours</h4>
                  <p className="text-sm sm:text-base text-gray-700">Monday - Friday: 8:00 AM - 6:00 PM EAT</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Quick Support</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">WhatsApp Support</h4>
                  <p className="text-sm sm:text-base text-gray-700">Available 24/7 for instant help</p>
                  <a href="https://wa.me/256775035244" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 text-sm font-semibold">Chat Now →</a>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Email Support</h4>
                  <p className="text-sm sm:text-base text-gray-700">Response within 24 hours</p>
                  <a href="mailto:support@mediloop.co" className="text-teal-600 hover:text-teal-700 text-sm font-semibold">support@mediloop.co</a>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Visit Support Center</h4>
                  <p className="text-sm sm:text-base text-gray-700">Browse FAQs and help articles</p>
                  <a href="/support" className="text-teal-600 hover:text-teal-700 text-sm font-semibold">Go to Support →</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-600 to-green-600 rounded-2xl p-8 sm:p-12 text-white text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8">Create your Universal Health ID and take control of your health records today.</p>
          <a href="https://app.mediloop.co" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-teal-600 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Get Your Health ID
          </a>
        </div>
      </main>
      <Footer />
    </div>
  )
}
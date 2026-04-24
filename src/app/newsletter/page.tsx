import Header from '@/components/Header'
import Footer from '@/components/Footer'

/**
 * Newsletter Page
 * Mediloop's newsletter subscription page.
 */

export default function NewsletterPage() {
  const newsletterContent = [
    {
      title: "UHID Adoption Reaches 500,000 Users",
      excerpt: "Celebrating a major milestone in Uganda's digital health journey.",
      date: "September 2025"
    },
    {
      title: "New AI Features for Healthcare Providers",
      excerpt: "How AI enhances patient care without replacing human judgment.",
      date: "August 2025"
    },
    {
      title: "Expanding Our Provider Network",
      excerpt: "Connecting more healthcare facilities across Uganda.",
      date: "July 2025"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Mediloop Newsletter</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Stay updated on Uganda's digital health transformation. Get insights, updates, and stories from the frontlines of healthcare innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Subscribe to Our Newsletter</h2>
            <p className="text-gray-700 mb-8">
              Join thousands of healthcare professionals, policymakers, and citizens who stay informed about Mediloop's progress and Uganda's digital health evolution.
            </p>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">I'm interested in:</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-teal-600 focus:ring-teal-500" />
                    <span className="ml-2 text-gray-700">Product updates and new features</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-teal-600 focus:ring-teal-500" />
                    <span className="ml-2 text-gray-700">Healthcare policy and industry insights</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-teal-600 focus:ring-teal-500" />
                    <span className="ml-2 text-gray-700">Success stories and case studies</span>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-teal-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-teal-700 transition"
              >
                Subscribe to Newsletter
              </button>
            </form>
            <p className="text-sm text-gray-600 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">What You'll Receive</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-teal-600">📊</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Monthly Updates</h4>
                    <p className="text-gray-700 text-sm">Platform statistics, user milestones, and feature releases</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-teal-600">📰</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Industry Insights</h4>
                    <p className="text-gray-700 text-sm">Digital health trends and Uganda's healthcare landscape</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-teal-600">💡</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Success Stories</h4>
                    <p className="text-gray-700 text-sm">Real stories of how Mediloop is transforming healthcare</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Newsletters</h3>
              <div className="space-y-4">
                {newsletterContent.map((item, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <span className="text-sm text-gray-500">{item.date}</span>
                    </div>
                    <p className="text-gray-700 text-sm">{item.excerpt}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-600 to-green-600 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-xl mb-8">Be part of Uganda's digital health revolution. Stay informed, stay connected.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#newsletter-form" className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Subscribe Now
            </a>
            <a href="/blog" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition">
              Read Our Blog
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
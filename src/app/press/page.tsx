import Header from '@/components/Header'
import Footer from '@/components/Footer'

/**
 * Press Page
 * Mediloop's press releases and media coverage.
 */

export default function PressPage() {
  const pressReleases = [
    {
      title: "Mediloop Launches Uganda Health ID (UHID) Platform",
      date: "September 15, 2025",
      excerpt: "Mediloop officially launches UHID, Uganda's first comprehensive digital health identity system, empowering citizens with control over their health data.",
      link: "#"
    },
    {
      title: "Mediloop Partners with Ministry of Health for Nationwide Digital Health Infrastructure",
      date: "August 20, 2025",
      excerpt: "Strategic partnership announced to build Uganda's national digital health platform, connecting 1000+ healthcare facilities.",
      link: "#"
    },
    {
      title: "Mediloop Secures $15M in Series A Funding",
      date: "July 10, 2025",
      excerpt: "Funding will accelerate development of AI-powered healthcare services and expand provider network across Uganda.",
      link: "#"
    },
    {
      title: "Mediloop Achieves 500,000 UHID Registrations in First Six Months",
      date: "June 5, 2025",
      excerpt: "Milestone demonstrates strong adoption of digital health platform among Ugandan citizens and healthcare providers.",
      link: "#"
    }
  ]

  const mediaCoverage = [
    {
      outlet: "The Daily Monitor",
      title: "How Mediloop is Revolutionizing Healthcare Access in Uganda",
      date: "September 12, 2025"
    },
    {
      outlet: "New Vision",
      title: "UHID: The Future of Digital Health Identity",
      date: "August 25, 2025"
    },
    {
      outlet: "BBC Africa",
      title: "Uganda's Digital Health Transformation",
      date: "July 15, 2025"
    },
    {
      outlet: "TechCabal",
      title: "Mediloop: Building Africa's First National Digital Health Platform",
      date: "June 20, 2025"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Press Center</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Read our latest press releases and see how Mediloop is featured in the media.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Press Releases</h2>
            <div className="space-y-6">
              {pressReleases.map((release, index) => (
                <article key={index} className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{release.title}</h3>
                    <span className="text-sm text-gray-500">{release.date}</span>
                  </div>
                  <p className="text-gray-700 mb-4">{release.excerpt}</p>
                  <a href={release.link} className="text-teal-600 hover:text-teal-700 font-semibold">
                    Read full release →
                  </a>
                </article>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Media Coverage</h2>
            <div className="space-y-6">
              {mediaCoverage.map((coverage, index) => (
                <article key={index} className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex items-center mb-3">
                    <span className="font-semibold text-teal-600 mr-3">{coverage.outlet}</span>
                    <span className="text-sm text-gray-500">{coverage.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{coverage.title}</h3>
                  <a href="#" className="text-teal-600 hover:text-teal-700 font-semibold">
                    Read article →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Press Kit</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📸</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Brand Assets</h3>
              <p className="text-gray-700 text-sm mb-4">Logos, brand guidelines, and media assets</p>
              <button className="text-teal-600 hover:text-teal-700 font-semibold">
                Download →
              </button>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Fact Sheet</h3>
              <p className="text-gray-700 text-sm mb-4">Company overview and key statistics</p>
              <button className="text-teal-600 hover:text-teal-700 font-semibold">
                Download →
              </button>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Executive Bios</h3>
              <p className="text-gray-700 text-sm mb-4">Leadership team profiles and photos</p>
              <button className="text-teal-600 hover:text-teal-700 font-semibold">
                Download →
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-600 to-green-600 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Press Inquiries</h2>
          <p className="text-xl mb-8">For press inquiries, interviews, or media requests.</p>
          <a href="mailto:press@mediloop.co" className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            press@mediloop.co
          </a>
        </div>
      </main>
      <Footer />
    </div>
  )
}
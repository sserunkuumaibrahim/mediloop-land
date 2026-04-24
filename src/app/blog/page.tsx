import Header from '@/components/Header'
import Footer from '@/components/Footer'

/**
 * Blog Page
 * Mediloop's blog featuring articles on digital health, Uganda's healthcare transformation, and industry insights.
 */

export default function BlogPage() {
  const posts = [
    {
      title: "Digitalising Healthcare in Uganda: The Mediloop Vision",
      excerpt: "How Mediloop is building the foundation for universal health access across Uganda.",
      date: "September 15, 2025",
      readTime: "5 min read"
    },
    {
      title: "Universal Health ID: Empowering Every Ugandan",
      excerpt: "The UHID system and its impact on healthcare accessibility and data security.",
      date: "September 10, 2025",
      readTime: "4 min read"
    },
    {
      title: "AI in Healthcare: A Service, Not the Core",
      excerpt: "How Mediloop integrates AI thoughtfully to enhance, not replace, human healthcare.",
      date: "September 5, 2025",
      readTime: "6 min read"
    },
    {
      title: "Building a Nationwide Provider Network",
      excerpt: "Connecting 1000+ healthcare facilities for seamless patient care.",
      date: "August 30, 2025",
      readTime: "7 min read"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Mediloop Blog</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Stay updated on the latest in digital health, Uganda's healthcare transformation, and insights from Mediloop's team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {posts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{post.title}</h2>
              <p className="text-gray-700 mb-6">{post.excerpt}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <a href="#" className="text-teal-600 hover:text-teal-700 font-semibold mt-4 inline-block">
                Read more →
              </a>
            </article>
          ))}
        </div>

        <div className="bg-teal-50 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-xl text-gray-700 mb-8">Get the latest healthcare insights delivered to your inbox.</p>
          <div className="max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 mb-4"
            />
            <button className="w-full bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
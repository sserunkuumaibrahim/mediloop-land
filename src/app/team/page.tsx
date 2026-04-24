import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ArrowRight, Mail } from 'lucide-react'

const TEAM = [
  {
    name: 'Ibrahim Sserunkuuma',
    role: 'CEO & Co-Founder',
    bio: 'Building Uganda\'s digital health infrastructure. Passionate about using technology to solve real healthcare challenges for every Ugandan.',
    initials: 'IS',
    color: 'bg-teal-600',
  },
  {
    name: 'Jacqueline Nabasagala',
    role: 'Chief Operating Officer',
    bio: 'Driving operational excellence across Mediloop. Ensures the platform delivers reliably for patients and providers every day.',
    initials: 'JN',
    color: 'bg-purple-600',
  },
  {
    name: 'Thomas Koloyi',
    role: 'Business Development Manager',
    bio: 'Growing Mediloop\'s network of healthcare providers and partners across Uganda. Building the relationships that expand access to care.',
    initials: 'TK',
    color: 'bg-blue-600',
  },
  {
    name: 'Emmanuel Mwebaze',
    role: 'Chief Financial Officer',
    bio: 'Managing Mediloop\'s financial strategy and operations. Ensuring sustainable growth as we scale Uganda\'s digital health infrastructure.',
    initials: 'EM',
    color: 'bg-orange-600',
  },
]

const VALUES = [
  {
    title: 'Mission First',
    desc: 'Every decision we make is guided by one question: does this help more Ugandans access quality healthcare?',
  },
  {
    title: 'Build in the Open',
    desc: 'We work transparently with healthcare providers, patients, and developers to build something that actually works.',
  },
  {
    title: 'Move with Purpose',
    desc: 'We move fast because lives depend on it. But we build things that last because healthcare demands reliability.',
  },
  {
    title: 'Grow Together',
    desc: 'We invest in our team. When our people grow, the platform grows, and more Ugandans get better care.',
  },
]

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 via-teal-900 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/assets/africa-humanitarian-aid-doctor-taking-care-patient.jpg"
            alt="Healthcare professionals"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-400/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
              <span className="text-teal-300 text-sm font-medium">The Team</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Building Uganda's Digital Health Future
            </h1>
            <p className="text-base sm:text-xl text-gray-300 leading-relaxed">
              We are a small, focused team on a big mission: to digitalize healthcare for 45 million Ugandans and build the infrastructure that connects every patient, provider, and facility in the country.
            </p>
          </div>
        </div>
      </section>

      {/* Mission statement */}
      <section className="bg-teal-600 py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { value: 'Live', label: 'Platform Status', sub: 'Operational now' },
              { value: '45M', label: 'Ugandans', sub: 'Our mission' },
              { value: 'FHIR R4', label: 'Standard', sub: 'Interoperable' },
              { value: '2025', label: 'Founded', sub: 'Kampala, Uganda' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-teal-100 font-semibold text-sm sm:text-base">{stat.label}</div>
                <div className="text-teal-200 text-xs sm:text-sm">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">Meet the Team</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              A passionate group of builders, healthcare professionals, and technologists working to transform healthcare in Uganda.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-4xl w-full">
              {TEAM.map((member) => (
                <div key={member.name} className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 hover:shadow-md transition-shadow">
                  <div className={`w-16 h-16 ${member.color} rounded-2xl flex items-center justify-center mb-5`}>
                    <span className="text-white font-bold text-xl">{member.initials}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-teal-600 font-semibold text-sm mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              ))}

              {/* We are growing card */}
              <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-center items-center text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-5">
                  <span className="text-teal-600 text-2xl font-bold">+</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">We are growing</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  We are building the team that will digitalize healthcare for Uganda. Join us.
                </p>
                <a
                  href="/careers"
                  className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
                >
                  See Open Roles <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">How We Work</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision we make.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-gray-50 rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-gray-900 mb-3">{v.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we are building */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-6">
                What We Are Building
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6">
                Mediloop is Uganda's digital health infrastructure. We are building the platform that connects every patient, hospital, clinic, pharmacy, and lab in the country on a single, interoperable system.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-8">
                Every Ugandan gets a Universal Health ID. Every provider gets a complete patient history. Every developer gets the APIs to build healthcare applications. All on one platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/platform"
                  className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Explore the Platform <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 hover:border-teal-400 px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  About Mediloop
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'For Patients', desc: 'UHID, AI doctor, records, drug delivery, lab tests', href: '/uhid', color: 'bg-teal-50 border-teal-200' },
                { label: 'For Providers', desc: 'EMR, clinical AI, pharmacy, lab, billing', href: '/providers', color: 'bg-blue-50 border-blue-200' },
                { label: 'For Developers', desc: 'FHIR R4 APIs, authentication, data exchange', href: 'https://developers.mediloop.co', color: 'bg-purple-50 border-purple-200' },
                { label: 'For Uganda', desc: 'National health registry, government reporting', href: '/platform', color: 'bg-orange-50 border-orange-200' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`${item.color} border rounded-2xl p-5 hover:shadow-md transition-shadow`}
                >
                  <div className="font-bold text-gray-900 text-sm mb-2">{item.label}</div>
                  <div className="text-xs text-gray-600 leading-relaxed">{item.desc}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">Join the Mission</h2>
          <p className="text-base sm:text-lg text-teal-100 mb-10 max-w-2xl mx-auto">
            We are building the team that will digitalize healthcare for 45 million Ugandans. If that excites you, we want to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/careers"
              className="inline-flex items-center justify-center gap-2 bg-white text-teal-700 hover:bg-gray-100 px-8 py-3.5 rounded-lg font-semibold transition-colors"
            >
              View Open Positions <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="mailto:info@mediloop.co"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 px-8 py-3.5 rounded-lg font-semibold transition-colors"
            >
              <Mail className="h-4 w-4" /> Get in Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

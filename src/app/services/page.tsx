import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Script from 'next/script'
import type { Metadata } from 'next'
import {
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Stethoscope,
  Pill,
  FlaskConical,
  MapPin,
  Truck,
  Heart,
  Brain,
  Shield,
  BarChart3,
  FileText,
  Smartphone,
  Clock,
  Users,
  Activity,
  HeartPulse,
  Building2,
  Star,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Digital Health Services — Mediloop',
  description: 'Mediloop digital health services: AI consultations on WhatsApp, drug delivery, lab tests, appointment booking, care coordination, and more across Uganda.',
  alternates: { canonical: 'https://mediloop.co/services' },
  openGraph: {
    title: 'Digital Health Services — Mediloop',
    description: 'AI consultations, drug delivery, lab tests, appointment booking, and care coordination across Uganda.',
    url: 'https://mediloop.co/services',
    images: [{ url: 'https://mediloop.co/assets/og-services.svg', width: 1200, height: 630, alt: 'Digital Health Services — Mediloop' }],
  },
}

const WHATSAPP_URL = 'https://wa.me/256775035244?text=Hello%20Mediloop%2C%20I%20need%20help'

const SERVICES_DETAIL = [
  {
    icon: MessageCircle,
    title: 'AI Doctor on WhatsApp',
    subtitle: 'Available 24/7',
    description: 'Get instant medical advice from our AI health assistant on WhatsApp. Describe your symptoms, ask health questions, and get guidance without leaving your home. Available any time, any day.',
    features: [
      'Instant symptom assessment',
      'Health questions answered 24/7',
      'Medication guidance',
      'When to seek emergency care',
      'Follow-up reminders',
      'No app download needed',
    ],
    cta: 'Chat on WhatsApp',
    ctaHref: WHATSAPP_URL,
    color: 'bg-green-50 border-green-200',
    iconBg: 'bg-green-100 text-green-600',
    badge: 'Available Now',
    badgeColor: 'bg-green-100 text-green-700',
  },
  {
    icon: Stethoscope,
    title: 'Book Consultations',
    subtitle: 'In-person & telemedicine',
    description: 'Book appointments with doctors, specialists, and nurses at clinics and hospitals near you. Your full medical history is shared with the provider automatically with your consent.',
    features: [
      'Book at 500+ clinics & hospitals',
      'Specialist referrals',
      'Your records shared automatically',
      'Appointment reminders via WhatsApp',
      'Telemedicine consultations',
      'Follow-up scheduling',
    ],
    cta: 'Book via WhatsApp',
    ctaHref: WHATSAPP_URL,
    color: 'bg-teal-50 border-teal-200',
    iconBg: 'bg-teal-100 text-teal-600',
    badge: 'Available Now',
    badgeColor: 'bg-teal-100 text-teal-700',
  },
  {
    icon: Truck,
    title: 'Drug Delivery',
    subtitle: 'To your door',
    description: 'Order prescription and OTC medications from verified pharmacies and have them delivered to your location. Fast, reliable, and temperature-controlled for sensitive medications.',
    features: [
      'Prescription & OTC medications',
      'Verified pharmacies only',
      'Nationwide delivery',
      'Temperature-controlled for sensitive meds',
      'Real-time delivery tracking',
      'Refill reminders',
    ],
    cta: 'Order via WhatsApp',
    ctaHref: WHATSAPP_URL,
    color: 'bg-blue-50 border-blue-200',
    iconBg: 'bg-blue-100 text-blue-600',
    badge: 'Available Now',
    badgeColor: 'bg-blue-100 text-blue-700',
  },
  {
    icon: FlaskConical,
    title: 'Lab Tests',
    subtitle: 'Home collection & walk-in',
    description: 'Book lab tests and have samples collected at home or visit a nearby lab. Results are delivered digitally to your UHID and shared with your doctor automatically.',
    features: [
      'Home sample collection',
      'Walk-in lab booking',
      'Digital results to your UHID',
      'Results shared with your doctor',
      'Wide range of tests available',
      'Fast turnaround times',
    ],
    cta: 'Book via WhatsApp',
    ctaHref: WHATSAPP_URL,
    color: 'bg-purple-50 border-purple-200',
    iconBg: 'bg-purple-100 text-purple-600',
    badge: 'Available Now',
    badgeColor: 'bg-purple-100 text-purple-700',
  },
  {
    icon: MapPin,
    title: 'Find Nearby Facilities',
    subtitle: 'Clinics, hospitals, pharmacies & labs',
    description: 'Locate the nearest healthcare facilities based on your location. See opening hours, services offered, and book instantly. Works even in areas with limited internet.',
    features: [
      'Clinics, hospitals, pharmacies & labs',
      'Real-time opening hours',
      'Services offered at each facility',
      'Distance and directions',
      'Book appointments directly',
      'Works offline',
    ],
    cta: 'Find Facilities',
    ctaHref: WHATSAPP_URL,
    color: 'bg-orange-50 border-orange-200',
    iconBg: 'bg-orange-100 text-orange-600',
    badge: 'Available Now',
    badgeColor: 'bg-orange-100 text-orange-700',
  },
  {
    icon: Heart,
    title: 'Care Coordination',
    subtitle: 'Your whole care team, connected',
    description: 'When you see multiple providers, Mediloop keeps your care team connected. Your doctor, specialist, pharmacist, and lab all see the same records with your consent, reducing errors and duplicate tests.',
    features: [
      'Shared records across providers',
      'Specialist referral management',
      'Medication reconciliation',
      'Reduced duplicate tests',
      'Care plan tracking',
      'Patient-controlled consent',
    ],
    cta: 'Learn More',
    ctaHref: '/uhid',
    color: 'bg-red-50 border-red-200',
    iconBg: 'bg-red-100 text-red-600',
    badge: 'Available Now',
    badgeColor: 'bg-red-100 text-red-700',
  },
  {
    icon: FileText,
    title: 'Health Records',
    subtitle: 'Your complete medical history',
    description: 'All your medical records in one secure place: diagnoses, prescriptions, lab results, allergies, vaccinations, and visit summaries. Access them anytime, share them with any provider.',
    features: [
      'Complete medical history',
      'Diagnoses & conditions',
      'Prescriptions & medications',
      'Lab results & imaging',
      'Allergies & vaccinations',
      'Shareable with any provider',
    ],
    cta: 'Get Your UHID',
    ctaHref: '/uhid',
    color: 'bg-indigo-50 border-indigo-200',
    iconBg: 'bg-indigo-100 text-indigo-600',
    badge: 'Available Now',
    badgeColor: 'bg-indigo-100 text-indigo-700',
  },
  {
    icon: Activity,
    title: 'Health Monitoring',
    subtitle: 'Track your health over time',
    description: 'Track your vitals, chronic conditions, and medication schedules. Get reminders for refills, follow-up appointments, and preventive care. Stay on top of your health proactively.',
    features: [
      'Vitals tracking',
      'Chronic disease management',
      'Medication reminders',
      'Refill alerts',
      'Preventive care reminders',
      'Health trend insights',
    ],
    cta: 'Get Started',
    ctaHref: WHATSAPP_URL,
    color: 'bg-pink-50 border-pink-200',
    iconBg: 'bg-pink-100 text-pink-600',
    badge: 'Available Now',
    badgeColor: 'bg-pink-100 text-pink-700',
  },
]

const COMING_SOON = [
  { icon: Shield, title: 'Insurance Integration', desc: 'Seamless claims processing and coverage verification with Ugandan health insurers.' },
  { icon: Brain, title: 'Advanced AI Diagnostics', desc: 'AI-powered image analysis, ECG interpretation, and advanced clinical decision support.' },
  { icon: HeartPulse, title: 'Chronic Disease Programs', desc: 'Structured programs for diabetes, hypertension, HIV, and other chronic conditions.' },
  { icon: Users, title: 'Family Health Plans', desc: 'Manage health records and services for your entire family under one account.' },
]

export default function ServicesPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalService',
    name: 'Mediloop Digital Health Services',
    serviceType: 'Digital Health Platform',
    description: 'AI consultations, drug delivery, lab tests, appointment booking, and care coordination across Uganda.',
    provider: { '@type': 'MedicalOrganization', name: 'Mediloop Health', url: 'https://mediloop.co' },
    areaServed: { '@type': 'Country', name: 'Uganda' },
    url: 'https://mediloop.co/services',
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Script id="services-sd" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 via-teal-900 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/assets/africa-humanitarian-aid-doctor-taking-care-patient.jpg" alt="Healthcare" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-400/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
              <span className="text-teal-300 text-sm font-medium">Digital Health Services</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Healthcare at Your Fingertips
            </h1>
            <p className="text-base sm:text-xl text-gray-300 mb-8 leading-relaxed">
              From AI consultations on WhatsApp to drug delivery at your door, Mediloop brings the full spectrum of healthcare services to every Ugandan, wherever they are.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {['AI doctor on WhatsApp 24/7', 'Drug delivery to your door', 'Lab tests at home or nearby', 'Book consultations instantly'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-400 shrink-0" />
                  <span className="text-gray-200 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-white px-8 py-3.5 rounded-lg font-semibold transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                Get Started on WhatsApp
              </a>
              <a href="/uhid" className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white hover:bg-white/10 px-8 py-3.5 rounded-lg font-semibold transition-colors">
                Get Your UHID First
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-teal-600 py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {[
              { value: '24/7', label: 'AI Doctor Available' },
              { value: '1000+', label: 'Connected Facilities' },
              { value: 'Free', label: 'UHID Registration' },
              { value: 'WhatsApp', label: 'No App Needed' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl sm:text-4xl font-bold text-white mb-1">{s.value}</div>
                <div className="text-teal-100 text-sm sm:text-base font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">All Available Services</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">Everything you need for your health, accessible from WhatsApp with your UHID.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {SERVICES_DETAIL.map((svc) => {
              const Icon = svc.icon
              return (
                <div key={svc.title} className={`rounded-2xl border p-6 sm:p-8 ${svc.color}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`inline-flex p-3 rounded-xl ${svc.iconBg}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${svc.badgeColor}`}>
                      {svc.badge}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{svc.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">{svc.subtitle}</p>
                  <p className="text-gray-600 text-sm sm:text-base mb-5">{svc.description}</p>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {svc.features.map((f) => (
                      <div key={f} className="flex items-center gap-1.5 text-sm text-gray-700">
                        <CheckCircle className="h-3.5 w-3.5 text-teal-500 shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>
                  <a
                    href={svc.ctaHref}
                    target={svc.ctaHref.startsWith('http') ? '_blank' : undefined}
                    rel={svc.ctaHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-colors"
                  >
                    {svc.cta}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">Coming Soon</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">We are constantly expanding our services. Here is what is coming next.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {COMING_SOON.map((svc) => {
              const Icon = svc.icon
              return (
                <div key={svc.title} className="rounded-2xl border border-gray-200 bg-gray-50 p-5 sm:p-6 opacity-75">
                  <div className="w-11 h-11 bg-gray-200 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-gray-400" />
                  </div>
                  <div className="text-xs font-bold text-gray-400 tracking-widest mb-2">COMING SOON</div>
                  <h3 className="font-bold text-gray-900 mb-2">{svc.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{svc.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How to access */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">How to Access All Services</h2>
            <p className="text-base sm:text-lg text-gray-600">All services are accessible via WhatsApp with your UHID. No app download needed.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="bg-white rounded-2xl border border-teal-200 p-6 text-center">
              <div className="w-12 h-12 bg-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Step 1</h3>
              <p className="text-sm text-gray-600">Get your free UHID by messaging us on WhatsApp at +256 775 035 244</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-6 text-center">
              <div className="w-12 h-12 bg-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Step 2</h3>
              <p className="text-sm text-gray-600">Your UHID links to your National ID and stores all your health records securely</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-6 text-center">
              <div className="w-12 h-12 bg-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Step 3</h3>
              <p className="text-sm text-gray-600">Access all services: consultations, delivery, lab tests, and more from WhatsApp</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">Start Using Mediloop Today</h2>
          <p className="text-base sm:text-lg text-teal-100 mb-8 max-w-2xl mx-auto">
            Register for your free UHID via WhatsApp and unlock access to all Mediloop health services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-teal-600 px-8 py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-gray-50 transition-colors shadow-lg"
            >
              <MessageCircle className="h-5 w-5" />
              Register via WhatsApp
            </a>
            <a href="/uhid" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-white/10 transition-colors">
              Learn About UHID
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
          <p className="text-teal-200 text-sm mt-5">
            Message us at{' '}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="underline hover:text-white font-medium">
              +256 775 035 244
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

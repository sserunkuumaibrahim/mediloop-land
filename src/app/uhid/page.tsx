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
  Shield,
  FileText,
  Smartphone,
  Clock,
  Star,
  Users,
  Activity,
  Lock,
  Globe,
  AlertCircle,
  ChevronDown,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Universal Health ID (UHID) — Mediloop',
  description: 'Register for your Universal Health ID (UHID) via WhatsApp and access healthcare across Uganda. Book consultations, order medications, find nearby facilities, and more.',
  alternates: { canonical: 'https://mediloop.co/uhid' },
  openGraph: {
    title: 'Universal Health ID (UHID) — Mediloop',
    description: 'Register for your Universal Health ID (UHID) via WhatsApp and access healthcare across Uganda.',
    url: 'https://mediloop.co/uhid',
    images: [{ url: 'https://mediloop.co/assets/og-uhid.svg', width: 1200, height: 630, alt: 'UHID — Mediloop' }],
  },
}

const WHATSAPP_URL = 'https://wa.me/256775035244?text=Hello%20Mediloop%2C%20I%20want%20to%20register%20for%20my%20UHID'

const SERVICES = [
  {
    icon: Stethoscope,
    title: 'Book Consultations',
    description: 'Book appointments with doctors at clinics and hospitals near you. Get seen faster with your full medical history ready.',
    color: 'bg-teal-50 border-teal-200',
    iconCls: 'bg-teal-100 text-teal-600',
  },
  {
    icon: MessageCircle,
    title: 'AI Doctor on WhatsApp',
    description: 'Get instant medical advice on WhatsApp 24/7. Describe your symptoms and get guidance without leaving your home.',
    color: 'bg-green-50 border-green-200',
    iconCls: 'bg-green-100 text-green-600',
  },
  {
    icon: Truck,
    title: 'Drug Delivery',
    description: 'Order medications and have them delivered to your door. Prescription and OTC medicines from verified pharmacies.',
    color: 'bg-blue-50 border-blue-200',
    iconCls: 'bg-blue-100 text-blue-600',
  },
  {
    icon: FlaskConical,
    title: 'Lab Sample Collection',
    description: 'Book lab tests and have samples collected at home or visit a nearby lab. Results delivered digitally to your UHID.',
    color: 'bg-purple-50 border-purple-200',
    iconCls: 'bg-purple-100 text-purple-600',
  },
  {
    icon: MapPin,
    title: 'Find Nearby Facilities',
    description: 'Locate the nearest clinics, hospitals, pharmacies, and labs. See opening hours, services, and book instantly.',
    color: 'bg-orange-50 border-orange-200',
    iconCls: 'bg-orange-100 text-orange-600',
  },
  {
    icon: Heart,
    title: 'Care Coordination',
    description: 'Your care team stays connected. Doctors, specialists, pharmacists, and labs all see the same records with your consent.',
    color: 'bg-red-50 border-red-200',
    iconCls: 'bg-red-100 text-red-600',
  },
  {
    icon: FileText,
    title: 'Complete Health Records',
    description: 'All your medical history in one place: diagnoses, prescriptions, lab results, allergies, and vaccinations.',
    color: 'bg-indigo-50 border-indigo-200',
    iconCls: 'bg-indigo-100 text-indigo-600',
  },
  {
    icon: Activity,
    title: 'Health Monitoring',
    description: 'Track your vitals, chronic conditions, and medication schedules. Get reminders for refills and follow-up appointments.',
    color: 'bg-pink-50 border-pink-200',
    iconCls: 'bg-pink-100 text-pink-600',
  },
]

const UHID_BENEFITS = [
  { icon: Shield, title: 'One ID for Life', desc: 'Your UHID is linked to your National ID and stays with you forever. No more lost records or starting over at every new clinic.' },
  { icon: Clock, title: 'Faster Emergency Care', desc: 'In an emergency, doctors instantly see your blood type, allergies, and current medications. This can save your life.' },
  { icon: Globe, title: 'Works Everywhere', desc: 'Use your UHID at any Mediloop-connected facility across Uganda. Your records follow you wherever you go.' },
  { icon: Lock, title: 'You Control Your Data', desc: 'You decide who sees your records. Every access is logged and you can revoke access at any time.' },
  { icon: Users, title: 'Family Health Management', desc: 'Manage health records for your children and elderly parents under one account.' },
  { icon: Smartphone, title: 'No App Needed to Start', desc: 'Register and access services via WhatsApp. Web and mobile app coming soon.' },
]

const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Message Us on WhatsApp',
    description: 'Send "Hello" to +256 775 035 244 on WhatsApp. Our AI assistant will guide you through registration in minutes.',
    icon: MessageCircle,
    action: { label: 'Start on WhatsApp', href: WHATSAPP_URL },
  },
  {
    step: '02',
    title: 'Verify Your Identity',
    description: 'Provide your name, date of birth, and National ID number. Your identity is verified securely.',
    icon: Shield,
    action: null,
  },
  {
    step: '03',
    title: 'Get Your UHID',
    description: 'Your Universal Health ID is created instantly. You receive a unique ID like UG867551443P.',
    icon: FileText,
    action: null,
  },
  {
    step: '04',
    title: 'Access All Services',
    description: 'Book consultations, order medications, find facilities, and manage your health from WhatsApp.',
    icon: Heart,
    action: null,
  },
]

const FAQS = [
  {
    q: 'What is a Universal Health ID (UHID)?',
    a: 'A UHID is your unique digital health identity in Uganda. It is linked to your National ID and stores all your medical records securely. Every Ugandan gets one UHID for life.',
  },
  {
    q: 'How do I register for a UHID?',
    a: 'Registration is currently via WhatsApp. Send a message to +256 775 035 244 and our AI assistant will guide you through the process in minutes. Web and mobile app registration are coming soon.',
  },
  {
    q: 'Is my health data safe?',
    a: 'Yes. All data is encrypted using 256-bit AES encryption. You control who sees your records and every access is logged. We comply with Uganda national health data standards.',
  },
  {
    q: 'Do I need a smartphone?',
    a: 'You only need WhatsApp to register and access services. Any phone with WhatsApp works. A web app and mobile app are coming soon for more features.',
  },
  {
    q: 'Is the UHID free?',
    a: 'Yes. Registering for your UHID is completely free. Some services like consultations and drug delivery have their own fees, but your health identity is always free.',
  },
  {
    q: 'What if I lose my phone?',
    a: 'Your UHID is stored securely in the cloud, not on your phone. You can access it from any device by messaging our WhatsApp number.',
  },
]

export default function UHIDPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalService',
    name: 'Universal Health ID (UHID)',
    serviceType: 'Digital Identity for Healthcare',
    description: 'Universal Health ID: a secure digital health identity for Ugandans. Access medical records, consultations, drug delivery, and provider services across the Mediloop network.',
    provider: { '@type': 'MedicalOrganization', name: 'Mediloop Health', url: 'https://mediloop.co' },
    areaServed: { '@type': 'Country', name: 'Uganda' },
    url: 'https://mediloop.co/uhid',
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Script id="uhid-sd" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

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
              <span className="text-teal-300 text-sm font-medium">For Every Ugandan</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Your Health ID for Life.<br />
              <span className="text-teal-400">One Number. All Your Care.</span>
            </h1>
            <p className="text-base sm:text-xl text-gray-300 mb-8 leading-relaxed">
              Register for your Universal Health ID (UHID) via WhatsApp and unlock access to consultations, drug delivery, lab tests, nearby facilities, and your complete medical history, all in one place.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {['Register in minutes via WhatsApp', 'Free for every Ugandan', 'Works at 1000+ facilities', 'Your data, your control'].map((item) => (
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
                className="inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-white px-8 py-4 rounded-xl font-bold text-base transition-colors shadow-lg"
              >
                <MessageCircle className="h-5 w-5" />
                Register via WhatsApp
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition-colors"
              >
                See What You Get
                <ChevronDown className="h-4 w-4" />
              </a>
            </div>
            <p className="text-teal-300 text-sm mt-4">
              Registration is free. Web app and mobile app coming soon.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-teal-600 py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {[
              { value: '1000+', label: 'Connected Facilities' },
              { value: 'Free', label: 'UHID Registration' },
              { value: '24/7', label: 'AI Doctor on WhatsApp' },
              { value: 'Lifetime', label: 'Health Records' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl sm:text-4xl font-bold text-white mb-1">{s.value}</div>
                <div className="text-teal-100 text-sm sm:text-base font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-20 bg-gray-50" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">Everything You Can Do with Your UHID</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">Your UHID unlocks a full suite of healthcare services, all accessible from WhatsApp.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {SERVICES.map((s) => {
              const Icon = s.icon
              return (
                <div key={s.title} className={`rounded-2xl border p-5 sm:p-6 ${s.color}`}>
                  <div className={`inline-flex p-3 rounded-xl ${s.iconCls} mb-4`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why UHID */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">Why Every Ugandan Needs a UHID</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">Your health identity is as important as your National ID. Here is why.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {UHID_BENEFITS.map((b) => {
              const Icon = b.icon
              return (
                <div key={b.title} className="flex gap-4 p-5 sm:p-6 rounded-2xl border border-gray-100 hover:border-teal-200 hover:shadow-sm transition-all">
                  <div className="w-11 h-11 bg-teal-50 rounded-xl flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{b.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">How to Get Your UHID</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">Registration takes less than 5 minutes via WhatsApp. No app download needed.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {HOW_IT_WORKS.map((step, i) => {
              const Icon = step.icon
              return (
                <div key={step.step} className="relative">
                  {i < HOW_IT_WORKS.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-teal-100" />
                  )}
                  <div className="relative text-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-teal-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                    </div>
                    <div className="text-xs font-bold text-teal-500 mb-1 tracking-widest">STEP {step.step}</div>
                    <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{step.description}</p>
                    {step.action && (
                      <a
                        href={step.action.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-teal-600 hover:bg-teal-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                      >
                        <MessageCircle className="h-4 w-4" />
                        {step.action.label}
                      </a>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Registration channels */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">How to Register</h2>
            <p className="text-base sm:text-lg text-gray-600">Choose how you want to get your UHID</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {/* WhatsApp - active */}
            <div className="rounded-2xl border-2 border-teal-500 bg-teal-50 p-6 text-center shadow-lg">
              <div className="w-14 h-14 bg-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-7 w-7 text-white" />
              </div>
              <div className="text-xs font-bold text-teal-600 tracking-widest mb-2">AVAILABLE NOW</div>
              <h3 className="font-bold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-sm text-gray-600 mb-5">Message us on WhatsApp and register in minutes. No app needed.</p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-teal-600 hover:bg-teal-500 text-white py-3 rounded-xl font-semibold transition-colors text-sm"
              >
                <MessageCircle className="h-4 w-4" />
                Register Now
              </a>
            </div>

            {/* Web - coming soon */}
            <div className="rounded-2xl border-2 border-gray-200 bg-gray-50 p-6 text-center opacity-75">
              <div className="w-14 h-14 bg-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="h-7 w-7 text-gray-400" />
              </div>
              <div className="text-xs font-bold text-gray-400 tracking-widest mb-2">COMING SOON</div>
              <h3 className="font-bold text-gray-900 mb-2">Web App</h3>
              <p className="text-sm text-gray-600 mb-5">Register and manage your health records from any browser.</p>
              <div className="w-full bg-gray-100 text-gray-400 py-3 rounded-xl font-semibold text-sm text-center cursor-not-allowed">
                Coming Soon
              </div>
            </div>

            {/* Mobile - coming soon */}
            <div className="rounded-2xl border-2 border-gray-200 bg-gray-50 p-6 text-center opacity-75">
              <div className="w-14 h-14 bg-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-7 w-7 text-gray-400" />
              </div>
              <div className="text-xs font-bold text-gray-400 tracking-widest mb-2">COMING SOON</div>
              <h3 className="font-bold text-gray-900 mb-2">Mobile App</h3>
              <p className="text-sm text-gray-600 mb-5">Full-featured app for Android and iOS with offline support.</p>
              <div className="w-full bg-gray-100 text-gray-400 py-3 rounded-xl font-semibold text-sm text-center cursor-not-allowed">
                Coming Soon
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <div key={faq.q} className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6">
                <h3 className="font-bold text-gray-900 mb-2 flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  {faq.q}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">Get Your UHID Today. It is Free.</h2>
          <p className="text-base sm:text-lg text-teal-100 mb-8 max-w-2xl mx-auto">
            Join thousands of Ugandans who have taken control of their health. Register in minutes via WhatsApp.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-white text-teal-600 px-8 py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-gray-50 transition-colors shadow-lg"
          >
            <MessageCircle className="h-6 w-6" />
            Register via WhatsApp
            <ArrowRight className="h-5 w-5" />
          </a>
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

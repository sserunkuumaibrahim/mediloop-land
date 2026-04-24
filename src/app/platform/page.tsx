import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'
import {
  CheckCircle,
  ArrowRight,
  Building2,
  Users,
  MessageCircle,
  Brain,
  Shield,
  Globe,
  Activity,
  FileText,
  Smartphone,
  Zap,
  Lock,
  BarChart3,
  Truck,
  FlaskConical,
  Pill,
  HeartPulse,
  Code2,
  Server,
  Database,
  Layers,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Platform — Mediloop',
  description: "Mediloop is Uganda's national digital health infrastructure. A unified platform connecting patients, providers, pharmacies, labs, and the health system.",
  alternates: { canonical: 'https://mediloop.co/platform' },
}

const PLATFORM_LAYERS = [
  {
    icon: Users,
    layer: 'Patient Layer',
    title: 'Every Ugandan, Connected',
    description: 'Patients register via WhatsApp and get a Universal Health ID (UHID) linked to their National ID. They access consultations, drug delivery, lab tests, and their complete medical history from any channel.',
    items: ['WhatsApp AI assistant', 'Universal Health ID (UHID)', 'Health records access', 'Appointment booking', 'Drug delivery', 'Lab sample collection'],
    color: 'bg-teal-50 border-teal-200',
    iconBg: 'bg-teal-100 text-teal-600',
  },
  {
    icon: Building2,
    layer: 'Provider Layer',
    title: 'Clinics, Hospitals, Pharmacies & Labs',
    description: 'Healthcare facilities use the Mediloop provider portal to manage patients, appointments, prescriptions, inventory, and billing. AI clinical decision support is built in.',
    items: ['Full EMR system', 'AI clinical decision support', 'Pharmacy management', 'Lab order management', 'Billing & invoicing', 'Multi-facility support'],
    color: 'bg-blue-50 border-blue-200',
    iconBg: 'bg-blue-100 text-blue-600',
  },
  {
    icon: Code2,
    layer: 'Developer Layer',
    title: 'API for EMR Vendors & Developers',
    description: 'Third-party EMR systems and health tech developers integrate with Mediloop via a FHIR R4-compliant REST API. Access patient data, exchange records, and build on top of the platform.',
    items: ['FHIR R4 REST API', 'Webhooks & real-time sync', 'Sandbox environment', 'AI API access', 'Developer portal', 'Usage-based pricing'],
    color: 'bg-purple-50 border-purple-200',
    iconBg: 'bg-purple-100 text-purple-600',
  },
  {
    icon: BarChart3,
    layer: 'System Layer',
    title: 'National Health Infrastructure',
    description: 'Mediloop provides the data infrastructure for Uganda national health system: population health analytics, disease surveillance, government reporting, and policy insights.',
    items: ['Population health analytics', 'Disease surveillance', 'Government reporting', 'Policy dashboards', 'Interoperability with MOH', 'FHIR-compliant data exchange'],
    color: 'bg-orange-50 border-orange-200',
    iconBg: 'bg-orange-100 text-orange-600',
  },
]

const TECH_STACK = [
  { icon: Server, title: 'Microservices Architecture', desc: '20+ independent services for EMR, pharmacy, lab, billing, AI, and more. Each scales independently.' },
  { icon: Database, title: 'FHIR R4 Data Standard', desc: 'All patient data stored and exchanged in FHIR R4 format. Interoperable with any global health system.' },
  { icon: Brain, title: 'AI-Powered Clinical Support', desc: 'Advanced AI models for clinical decision support, drug interactions, document processing, and patient triage.' },
  { icon: Shield, title: 'Enterprise Security', desc: '256-bit AES encryption, role-based access control, full audit trails, and patient consent management.' },
  { icon: Globe, title: 'Offline-First Design', desc: 'Built for Uganda network reality. All services work offline and sync when connectivity is restored.' },
  { icon: Zap, title: 'WhatsApp Integration', desc: 'Native WhatsApp Business API integration for patient registration, consultations, and notifications.' },
  { icon: Layers, title: 'Multi-Tenant Platform', desc: 'Each facility gets isolated data with shared infrastructure. Scales from a single clinic to a national network.' },
  { icon: Activity, title: 'Real-Time Analytics', desc: 'Live dashboards for patient flow, revenue, inventory, and clinical outcomes across all facilities.' },
]

const INTEGRATIONS = [
  { name: 'WhatsApp Business API', category: 'Communication', desc: 'Patient registration, AI consultations, appointment reminders, lab results, and medication reminders.' },
  { name: 'FHIR R4', category: 'Data Standard', desc: 'International health data standard for record exchange with any compatible system.' },
  { name: 'Uganda NIRA', category: 'Identity', desc: 'National ID verification for UHID registration and patient identity confirmation.' },
  { name: 'Mobile Money', category: 'Payments', desc: 'MTN MoMo and Airtel Money integration for subscription billing and patient payments.' },
  { name: 'Ministry of Health', category: 'Government', desc: 'Automated reporting to Uganda MOH systems and compliance with national health data standards.' },
  { name: 'Enterprise Auth', category: 'Authentication', desc: 'Enterprise-grade identity management with SSO, MFA, and role-based access control.' },
]

const AUDIENCE = [
  {
    icon: Users,
    title: 'For Patients',
    desc: 'Register via WhatsApp, get your UHID, book consultations, order medications, and access your complete health history.',
    cta: 'Get Your UHID',
    href: '/uhid',
    color: 'bg-teal-600',
  },
  {
    icon: Building2,
    title: 'For Healthcare Providers',
    desc: 'Register your clinic, hospital, pharmacy, or lab. Get a full EMR with AI clinical support and connect to the national network.',
    cta: 'Register Your Facility',
    href: '/providers',
    color: 'bg-blue-600',
  },
  {
    icon: Code2,
    title: 'For Developers',
    desc: 'Integrate your EMR or health app with Mediloop via our FHIR R4 API. Access patient data, AI services, and the full platform.',
    cta: 'View API Docs',
    href: 'https://docs.mediloop.co',
    color: 'bg-purple-600',
    external: true,
  },
]

export default function PlatformPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

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
              <span className="text-teal-300 text-sm font-medium">The Platform</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Uganda's National Digital Health Infrastructure
            </h1>
            <p className="text-base sm:text-xl text-gray-300 mb-8 leading-relaxed">
              Mediloop is a unified digital health platform connecting every Ugandan patient, healthcare provider, pharmacy, laboratory, and the national health system on a single secure infrastructure.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {['FHIR R4 compliant', 'AI-powered clinical support', 'Works offline', 'Government-integrated'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-400 shrink-0" />
                  <span className="text-gray-200 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/providers" className="inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-white px-8 py-3.5 rounded-lg font-semibold transition-colors">
                For Providers
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="https://docs.mediloop.co" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white hover:bg-white/10 px-8 py-3.5 rounded-lg font-semibold transition-colors">
                API Documentation
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
              { value: '20+', label: 'Microservices' },
              { value: 'FHIR R4', label: 'Data Standard' },
              { value: '1000+', label: 'Connected Facilities' },
              { value: '99.9%', label: 'Uptime SLA' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl sm:text-4xl font-bold text-white mb-1">{s.value}</div>
                <div className="text-teal-100 text-sm sm:text-base font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Layers */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">A Platform for Everyone</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">Mediloop serves four distinct groups, each with their own interface and capabilities, all connected on the same infrastructure.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {PLATFORM_LAYERS.map((layer) => {
              const Icon = layer.icon
              return (
                <div key={layer.layer} className={`rounded-2xl border p-6 sm:p-8 ${layer.color}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2.5 rounded-xl ${layer.iconBg}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">{layer.layer}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{layer.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-5">{layer.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {layer.items.map((item) => (
                      <div key={item} className="flex items-center gap-1.5 text-sm text-gray-700">
                        <CheckCircle className="h-3.5 w-3.5 text-teal-500 shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">Built for Reliability, Security, and Scale</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">Enterprise-grade infrastructure designed for Uganda healthcare reality.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {TECH_STACK.map((tech) => {
              const Icon = tech.icon
              return (
                <div key={tech.title} className="bg-gray-50 rounded-2xl border border-gray-100 p-5 sm:p-6 hover:border-teal-200 hover:shadow-sm transition-all">
                  <div className="w-11 h-11 bg-teal-50 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-teal-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">{tech.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{tech.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">Key Integrations</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">Mediloop connects with Uganda national systems and global health standards.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {INTEGRATIONS.map((intg) => (
              <div key={intg.name} className="rounded-2xl border border-gray-100 p-5 sm:p-6 hover:border-teal-200 hover:shadow-sm transition-all">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-gray-900">{intg.name}</h3>
                  <span className="text-xs bg-teal-100 text-teal-700 font-semibold px-2 py-0.5 rounded-full">{intg.category}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{intg.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who is it for */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">Get Started on the Platform</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">Whether you are a patient, provider, or developer, there is a place for you on Mediloop.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            {AUDIENCE.map((a) => {
              const Icon = a.icon
              return (
                <div key={a.title} className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 text-center hover:shadow-md transition-all">
                  <div className={`w-14 h-14 ${a.color} rounded-2xl flex items-center justify-center mx-auto mb-5`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{a.title}</h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">{a.desc}</p>
                  <a
                    href={a.href}
                    target={a.external ? '_blank' : undefined}
                    rel={a.external ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center justify-center gap-2 w-full bg-teal-600 hover:bg-teal-500 text-white py-3 rounded-xl font-semibold transition-colors text-sm"
                  >
                    {a.cta}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">Building Uganda's Health Future Together</h2>
          <p className="text-base sm:text-lg text-teal-100 mb-8 max-w-2xl mx-auto">
            Mediloop is open to partnerships with government agencies, NGOs, health tech companies, and investors who share our vision of universal health access for every Ugandan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-teal-600 px-8 py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-gray-50 transition-colors shadow-lg">
              Contact Us
              <ArrowRight className="h-5 w-5" />
            </a>
            <a href="https://docs.mediloop.co" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-white/10 transition-colors">
              API Documentation
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

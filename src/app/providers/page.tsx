import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { PricingCalculator } from './ProvidersClient'
import {
  CheckCircle,
  ArrowRight,
  Building2,
  Stethoscope,
  FlaskConical,
  Pill,
  Brain,
  Shield,
  BarChart3,
  Users,
  Globe,
  Activity,
  FileText,
  Smartphone,
  Lock,
  TrendingUp,
  HeartPulse,
  Zap,
  Star,
} from 'lucide-react'

const STATS = [
  { value: '200+', label: 'Hospitals', sub: 'Connected nationwide' },
  { value: '500+', label: 'Clinics', sub: 'Primary care facilities' },
  { value: '250+', label: 'Pharmacies', sub: 'Retail & hospital' },
  { value: '50+', label: 'Laboratories', sub: 'Diagnostic centers' },
]

const PROVIDER_TYPES = [
  {
    icon: Building2,
    title: 'Hospitals & Clinics',
    description: 'Full EMR, appointment scheduling, ward management, and care coordination across departments.',
    features: ['Patient records & history', 'Appointment management', 'Ward & bed management', 'Referral network'],
    bg: 'bg-teal-50', border: 'border-teal-200', iconCls: 'bg-teal-100 text-teal-600', check: 'text-teal-600',
  },
  {
    icon: Pill,
    title: 'Pharmacies',
    description: 'Inventory management, prescription dispensing, OTC sales, and drug interaction checks.',
    features: ['Prescription dispensing', 'Inventory & stock alerts', 'OTC product catalog', 'Drug interaction checks'],
    bg: 'bg-blue-50', border: 'border-blue-200', iconCls: 'bg-blue-100 text-blue-600', check: 'text-blue-600',
  },
  {
    icon: FlaskConical,
    title: 'Laboratories',
    description: 'Lab order management, result delivery, and seamless integration with clinical workflows.',
    features: ['Lab order management', 'Digital result delivery', 'FHIR-compliant records', 'Automated notifications'],
    bg: 'bg-purple-50', border: 'border-purple-200', iconCls: 'bg-purple-100 text-purple-600', check: 'text-purple-600',
  },
  {
    icon: Stethoscope,
    title: 'Specialist Practices',
    description: 'Specialty-specific workflows, referral management, and access to complete patient histories.',
    features: ['Specialty workflows', 'Referral management', 'Complete patient history', 'Telemedicine ready'],
    bg: 'bg-orange-50', border: 'border-orange-200', iconCls: 'bg-orange-100 text-orange-600', check: 'text-orange-600',
  },
]

const FEATURES = [
  { icon: Brain, title: 'AI Clinical Decision Support', desc: 'Real-time AI assistance during consultations: differential diagnoses, drug interactions, treatment recommendations, and critical value alerts.' },
  { icon: FileText, title: 'Complete Patient Records', desc: 'Access full patient history from all connected facilities. See medications, allergies, lab results, and past diagnoses instantly with patient consent.' },
  { icon: Activity, title: 'FHIR-Compliant Infrastructure', desc: 'Built on international health data standards. Seamlessly exchange records with any FHIR-compatible system, including government health platforms.' },
  { icon: Smartphone, title: 'WhatsApp Patient Engagement', desc: 'Patients receive appointment reminders, lab results, and medication reminders via WhatsApp. No app download required.' },
  { icon: BarChart3, title: 'Analytics & Reporting', desc: 'Real-time dashboards for patient flow, revenue, inventory, and clinical outcomes. Automated government reporting compliance.' },
  { icon: Shield, title: 'Enterprise Security', desc: 'End-to-end encryption, role-based access control, full audit trails, and consent management. Your patients data is always protected.' },
  { icon: Globe, title: 'Works Offline', desc: 'Continue seeing patients even without internet. Data syncs automatically when connectivity is restored, built for Uganda network reality.' },
  { icon: Users, title: 'Multi-Facility Management', desc: 'Manage multiple branches from one dashboard. Share staff, inventory, and patient records across your entire network.' },
]

const PRICING_PLANS = [
  {
    name: 'Basic',
    badge: null,
    monthlyPrice: 25000,
    yearlyPrice: 250000,
    yearlySaving: 17,
    description: 'Core EMR for clinics, pharmacies, and labs. No AI features.',
    features: [
      'Full EMR access',
      'Patient management (UHID)',
      'Appointments & scheduling',
      'Pharmacy inventory management',
      'Lab results & management',
      'Billing & invoicing',
      'FHIR R4 data exchange',
      'Mobile & web access',
      'WhatsApp notifications',
      'Basic reports & analytics',
      'Email support (48hr response)',
    ],
    noFeatures: ['AI clinical decision support', 'Drug interaction AI', 'Document OCR'],
    cta: 'Register Your Facility',
    ctaHref: 'https://providers.mediloop.co/facility-registration',
    highlighted: false,
    comingSoon: false,
  },
  {
    name: 'Premium',
    badge: 'WITH AI',
    monthlyPrice: 45000,
    yearlyPrice: 459000,
    yearlySaving: 15,
    description: 'Everything in Basic plus full AI-powered clinical support.',
    features: [
      'Everything in Basic',
      'AI clinical decision support',
      'Drug interaction checking (AI)',
      'Prescription validation & analysis',
      'Document OCR (prescriptions, IDs)',
      'Intelligent inventory predictions',
      'Patient risk assessment & triage',
      'RAG-based medical knowledge search',
      'Symptom checker & diagnosis AI',
      'Treatment recommendations',
      'AI-powered analytics & insights',
      'Priority support (24hr response)',
      'Advanced dashboards',
    ],
    noFeatures: [],
    cta: 'Coming Soon',
    ctaHref: null,
    highlighted: true,
    comingSoon: true,
  },
  {
    name: 'Enterprise',
    badge: null,
    monthlyPrice: 40000,
    yearlyPrice: null,
    yearlySaving: null,
    description: 'Volume pricing for hospital networks. 20+ seats.',
    features: [
      'Everything in Premium',
      'Multi-facility management',
      'Custom integrations',
      'Dedicated account manager',
      'On-site training',
      'SLA: 99.5% uptime',
      'Custom workflows',
      'API access for internal tools',
      'White-label options',
      'Phone support (1hr response)',
    ],
    noFeatures: [],
    cta: 'Contact Us',
    ctaHref: '/contact',
    highlighted: false,
    comingSoon: true,
  },
]

const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Register Your Facility',
    description: 'Fill in your facility details: name, type, location, and contact information on our online registration form. Takes less than 5 minutes.',
    icon: Building2,
  },
  {
    step: '02',
    title: 'Verification & Approval',
    description: 'Our team verifies your facility credentials and approves your account. You will receive a notification once approved, typically within 24 hours.',
    icon: Shield,
  },
  {
    step: '03',
    title: 'Set Up Your Team',
    description: 'Log in to the provider portal, add your staff members using their Mediloop UHID, assign roles (doctor, pharmacist, nurse, admin), and configure your workflows.',
    icon: Users,
  },
  {
    step: '04',
    title: 'Start Serving Patients',
    description: 'Access patient records with their consent, manage appointments, dispense medications, process lab orders, and coordinate care from one platform.',
    icon: HeartPulse,
  },
]

const TESTIMONIALS = [
  {
    quote: 'Mediloop has transformed how we manage patient records. We can now see a patient full history from any of our branches instantly.',
    author: 'Dr. Sarah Nakato',
    role: 'Medical Director',
    facility: 'Kampala Medical Centre',
  },
  {
    quote: 'The AI drug interaction checker has prevented several serious medication errors. It is like having a clinical pharmacist available 24/7.',
    author: 'Pharm. James Okello',
    role: 'Chief Pharmacist',
    facility: 'City Pharmacy Group',
  },
  {
    quote: 'Our lab results now reach patients and referring doctors within minutes. The FHIR integration with the national health system is seamless.',
    author: 'Dr. Grace Atim',
    role: 'Laboratory Director',
    facility: 'Mulago Diagnostic Centre',
  },
]

export default function ProvidersPage() {
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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-400/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
              <span className="text-teal-300 text-sm font-medium">For Healthcare Providers</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              The Complete Platform for Modern Healthcare in Uganda
            </h1>
            <p className="text-base sm:text-xl text-gray-300 mb-8 leading-relaxed">
              Mediloop gives clinics, hospitals, pharmacies, and labs everything they need to deliver better care. Seamless record sharing and tools built for Uganda.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {['Complete patient records (UHID)', 'Pharmacy & lab management', 'Works offline, built for Uganda', 'FHIR-compliant & government-ready'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-400 shrink-0" />
                  <span className="text-gray-200 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://providers.mediloop.co/facility-registration"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-white px-8 py-3.5 rounded-lg font-semibold transition-colors"
              >
                Register Your Facility
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white hover:bg-white/10 px-8 py-3.5 rounded-lg font-semibold transition-colors"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-teal-600 py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-teal-100 font-semibold text-sm sm:text-base">{stat.label}</div>
                <div className="text-teal-200 text-xs sm:text-sm">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Provider Types */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">Built for Every Type of Healthcare Facility</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">Whether you run a single clinic or a hospital network, Mediloop adapts to your workflows.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
            {PROVIDER_TYPES.map((type) => {
              const Icon = type.icon
              return (
                <div key={type.title} className={`rounded-2xl border ${type.border} ${type.bg} p-6 sm:p-8`}>
                  <div className={`inline-flex p-3 rounded-xl ${type.iconCls} mb-4`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{type.title}</h3>
                  <p className="text-gray-600 mb-5 text-sm sm:text-base">{type.description}</p>
                  <ul className="space-y-2">
                    {type.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className={`h-4 w-4 shrink-0 ${type.check}`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">Everything You Need to Deliver Better Care</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">A complete platform designed for Uganda healthcare environment, from AI clinical support to offline-first infrastructure.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {FEATURES.map((feature) => {
              const Icon = feature.icon
              return (
                <div key={feature.title} className="group p-5 sm:p-6 rounded-2xl border border-gray-100 hover:border-teal-200 hover:shadow-md transition-all">
                  <div className="w-11 h-11 bg-teal-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-teal-100 transition-colors">
                    <Icon className="h-5 w-5 text-teal-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">{feature.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
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
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">Get Started in 4 Simple Steps</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">From registration to your first patient, we make onboarding fast and painless.</p>
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
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 sm:py-20 bg-white" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">Pay per seat. No hidden fees. Cancel anytime.</p>
          </div>

          {/* Plans */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 mb-16">
            {PRICING_PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border-2 overflow-hidden ${
                  plan.highlighted ? 'border-teal-500 shadow-2xl' : plan.comingSoon ? 'border-gray-200 opacity-80' : 'border-gray-200'
                }`}
              >
                {plan.badge && (
                  <div className={`text-center py-2 text-xs font-bold tracking-widest ${plan.comingSoon ? 'bg-gray-100 text-gray-500' : 'bg-teal-500 text-white'}`}>
                    {plan.badge}
                  </div>
                )}
                <div className="p-6 sm:p-7">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                    {plan.comingSoon && !plan.badge && (
                      <span className="text-xs bg-gray-100 text-gray-500 font-bold px-2 py-0.5 rounded-full">Coming Soon</span>
                    )}
                    {plan.comingSoon && plan.badge && (
                      <span className="text-xs bg-gray-100 text-gray-500 font-bold px-2 py-0.5 rounded-full">Coming Soon</span>
                    )}
                  </div>
                  <p className="text-gray-500 text-sm mb-5">{plan.description}</p>
                  <div className="mb-1">
                    <span className="text-2xl sm:text-3xl font-bold text-gray-900">UGX {plan.monthlyPrice.toLocaleString()}</span>
                    <span className="text-gray-500 text-sm ml-2">/seat/month</span>
                  </div>
                  {plan.yearlyPrice && (
                    <div className="flex items-center gap-2 mb-6">
                      <span className="text-teal-600 font-semibold text-sm">UGX {plan.yearlyPrice.toLocaleString()} /seat/year</span>
                      <span className="bg-teal-100 text-teal-700 text-xs font-semibold px-2 py-0.5 rounded-full">Save {plan.yearlySaving}%</span>
                    </div>
                  )}
                  {!plan.yearlyPrice && <div className="mb-6" />}
                  <a
                    href={plan.comingSoon ? undefined : plan.ctaHref ?? undefined}
                    target={plan.comingSoon ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className={`block w-full text-center py-3 rounded-xl font-semibold transition-colors mb-6 text-sm sm:text-base ${
                      plan.comingSoon
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : plan.highlighted
                        ? 'bg-teal-600 hover:bg-teal-500 text-white'
                        : 'border-2 border-teal-600 text-teal-600 hover:bg-teal-50'
                    }`}
                  >
                    {plan.cta}
                  </a>
                  <ul className="space-y-2">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-teal-500 shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                    {plan.noFeatures.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className="h-4 w-4 shrink-0 mt-0.5 text-center text-gray-300 text-xs">x</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Calculator */}
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Calculate Your Exact Cost</h3>
            <p className="text-gray-500 text-sm sm:text-base">Adjust seats and billing cycle to see your real-time total</p>
          </div>
          <PricingCalculator />

          <p className="text-center text-gray-500 text-sm mt-8">
            Need a custom plan for a large hospital network?{' '}
            <a href="/contact" className="text-teal-600 hover:underline font-medium">Contact our team</a>
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">Trusted by Healthcare Providers Across Uganda</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.author} className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic text-sm sm:text-base">"{t.quote}"</p>
                <div>
                  <div className="font-bold text-gray-900">{t.author}</div>
                  <div className="text-sm text-gray-500">{t.role}</div>
                  <div className="text-sm text-teal-600 font-medium">{t.facility}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 rounded-full px-4 py-1.5 mb-6 text-sm font-medium">
                <Lock className="h-4 w-4" />
                Security & Compliance
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-6">Enterprise-Grade Security for Patient Data</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-8">Mediloop is built to the highest security standards. Patient data is encrypted at rest and in transit, with full audit trails and consent management.</p>
              <div className="space-y-4">
                {[
                  { icon: Shield, text: 'End-to-end encryption for all patient data' },
                  { icon: Lock, text: 'Role-based access control, staff see only what they need' },
                  { icon: FileText, text: 'Full audit trails for every data access' },
                  { icon: Users, text: 'Patient consent management built-in' },
                  { icon: TrendingUp, text: 'Compliant with Uganda national health data standards' },
                  { icon: Globe, text: 'FHIR R4 compliant, interoperable with global systems' },
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.text} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-teal-50 rounded-lg flex items-center justify-center shrink-0">
                        <Icon className="h-4 w-4 text-teal-600" />
                      </div>
                      <span className="text-gray-700 text-sm sm:text-base">{item.text}</span>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="bg-teal-50 rounded-3xl p-8 sm:p-10">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {[
                  { value: '256-bit', label: 'AES Encryption' },
                  { value: '99.9%', label: 'Uptime SLA' },
                  { value: 'FHIR R4', label: 'Standard' },
                  { value: '24/7', label: 'Monitoring' },
                ].map((item) => (
                  <div key={item.label} className="bg-white rounded-2xl p-5 sm:p-6 text-center shadow-sm">
                    <div className="text-xl sm:text-2xl font-bold text-teal-600 mb-1">{item.value}</div>
                    <div className="text-sm text-gray-600">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EMR Integration */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 rounded-full px-4 py-1.5 mb-6 text-sm font-medium">
                <Zap className="h-4 w-4" />
                Already have an EMR?
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">Integrate Your Existing System with Mediloop</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6">If your facility already uses an EMR, you do not need to switch. Mediloop provides a FHIR R4-compliant API that lets your existing system exchange patient records, lab results, prescriptions, and more with the Mediloop network.</p>
              <ul className="space-y-3 mb-8">
                {['FHIR R4 REST API, standard-compliant integration', 'Webhooks for real-time data sync', 'Patient record exchange with consent', 'Lab orders and results integration', 'Prescription and medication data', 'Sandbox environment for testing'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-700 text-sm sm:text-base">
                    <CheckCircle className="h-4 w-4 text-teal-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://docs.mediloop.co"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base"
              >
                View Integration Docs & API Pricing
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-sm">
              <div className="text-sm font-mono text-gray-500 mb-4">FHIR R4 Example</div>
              <pre className="bg-gray-50 rounded-xl p-4 sm:p-5 text-xs text-gray-700 overflow-x-auto leading-relaxed">
{`GET /fhir/Patient?identifier=UG867551443P
Authorization: Bearer <your-api-key>

{
  "resourceType": "Patient",
  "id": "UG867551443P",
  "name": [{ "family": "Nakato",
             "given": ["Sarah"] }],
  "birthDate": "1990-03-15",
  "gender": "female"
}`}
              </pre>
              <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                <Activity className="h-4 w-4 text-teal-600" />
                Full docs at{' '}
                <a href="https://docs.mediloop.co" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline font-medium">
                  docs.mediloop.co
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">Ready to Join Uganda Healthcare Network?</h2>
          <p className="text-base sm:text-lg text-teal-100 mb-8 sm:mb-10 max-w-2xl mx-auto">Register your facility today and start delivering better care to your patients. Our team will verify and approve your account within 24 hours.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://providers.mediloop.co/facility-registration"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-teal-600 px-8 py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-gray-50 transition-colors shadow-lg"
            >
              Register Your Facility
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-white/10 transition-colors"
            >
              Contact Us
            </a>
          </div>
          <p className="text-teal-200 text-sm mt-6">
            Questions? Call{' '}
            <a href="tel:+256775035244" className="underline hover:text-white">+256 775 035 244</a>
            {' '}or{' '}
            <a href="https://wa.me/256775035244" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">WhatsApp us</a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

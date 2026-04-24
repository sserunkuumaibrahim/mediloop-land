import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Target, Eye, Heart, Users, Zap, Globe, Shield } from 'lucide-react'

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-teal-50 to-green-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Digitalising Healthcare for Uganda by 2030
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                Mediloop is building Uganda's national healthcare infrastructure - a complete digital platform 
                that gives every citizen a Universal Health ID, connects all healthcare providers, and delivers 
                instant medical care through WhatsApp.
              </p>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
              <div className="bg-gradient-to-br from-teal-600 to-teal-800 rounded-2xl p-6 sm:p-8 text-white">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                  <Eye className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-base sm:text-lg text-teal-100 leading-relaxed">
                  To digitalize Uganda's entire healthcare system by 2030, ensuring every Ugandan has instant 
                  access to quality healthcare regardless of location or economic status. A nation where medical 
                  records never get lost, healthcare is accessible via a simple WhatsApp message, and every 
                  citizen controls their own health data.
                </p>
              </div>

              <div className="bg-gradient-to-br from-teal-600 to-teal-800 rounded-2xl p-6 sm:p-8 text-white">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                  <Target className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-base sm:text-lg text-teal-100 leading-relaxed">
                  To provide every Ugandan with a Universal Health ID and seamless access to healthcare services. 
                  We connect patients, doctors, hospitals, pharmacies, and labs through one unified platform, 
                  powered by AI to deliver instant medical advice and support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Problem We're Solving */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto mb-12 sm:mb-16 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                The Healthcare Crisis in Uganda
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                Uganda's healthcare system faces critical challenges that prevent millions from accessing quality care
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm">
                <div className="text-red-600 font-bold text-lg sm:text-xl mb-3">Lost Medical Records</div>
                <p className="text-sm sm:text-base text-gray-600">
                  Patients lose their medical history when switching hospitals. No continuity of care, 
                  dangerous medication errors, and repeated expensive tests.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm">
                <div className="text-red-600 font-bold text-lg sm:text-xl mb-3">Limited Access</div>
                <p className="text-sm sm:text-base text-gray-600">
                  Rural communities travel hours to reach healthcare facilities. Most questions could 
                  be answered remotely, but there's no system for it.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm">
                <div className="text-red-600 font-bold text-lg sm:text-xl mb-3">Paper-Based Systems</div>
                <p className="text-sm sm:text-base text-gray-600">
                  Files get damaged, lost, or misplaced. Doctors can't access patient history. 
                  Government can't track health trends or plan resources.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm">
                <div className="text-red-600 font-bold text-lg sm:text-xl mb-3">Fragmented Data</div>
                <p className="text-sm sm:text-base text-gray-600">
                  Each hospital has its own system. No data sharing between facilities. 
                  Impossible to see the complete patient picture.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm">
                <div className="text-red-600 font-bold text-lg sm:text-xl mb-3">Long Wait Times</div>
                <p className="text-sm sm:text-base text-gray-600">
                  Hours spent in waiting rooms for simple consultations. Overburdened doctors. 
                  Patients give up and don't seek care.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm">
                <div className="text-red-600 font-bold text-lg sm:text-xl mb-3">No Patient Control</div>
                <p className="text-sm sm:text-base text-gray-600">
                  Patients can't access their own medical records. No transparency in healthcare. 
                  Can't share records with specialists or get second opinions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Solution */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto mb-12 sm:mb-16 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                The Mediloop Solution
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                A complete national healthcare platform that solves these problems through digital infrastructure
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12">
              <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-xl p-6 sm:p-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-teal-600 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Universal Health ID
                </h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Every Ugandan gets one health ID for life. All medical records in one place. 
                  Accessible from any hospital, clinic, or pharmacy nationwide.
                </p>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-xl p-6 sm:p-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-teal-600 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                  <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  WhatsApp Healthcare
                </h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Get instant medical advice through WhatsApp. No app download. No data charges. 
                  AI-powered consultations available 24/7 for free.
                </p>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-xl p-6 sm:p-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-teal-600 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                  <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Connected Healthcare
                </h3>
                <p className="text-sm sm:text-base text-gray-700">
                  All providers connected. Book appointments, get prescriptions, order lab tests, 
                  and receive results - all from your phone.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 lg:p-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">What We Provide</h3>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">For Patients</div>
                    <p className="text-sm sm:text-base text-gray-600">Free health ID, instant medical advice on WhatsApp, access all your records, book appointments, get medicine delivered</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">For Doctors</div>
                    <p className="text-sm sm:text-base text-gray-600">Complete patient history, AI diagnostic support, digital prescriptions, streamlined workflow, reduced paperwork</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">For Hospitals</div>
                    <p className="text-sm sm:text-base text-gray-600">Digital records, appointment management, lab integration, pharmacy integration, insurance claims automation</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">For Government</div>
                    <p className="text-sm sm:text-base text-gray-600">Real-time health analytics, disease tracking, resource planning, policy insights, population health management</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">For Developers</div>
                    <p className="text-sm sm:text-base text-gray-600">Complete APIs, build EMR systems, telemedicine apps, we handle infrastructure, security, and compliance</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">For Pharmacies & Labs</div>
                    <p className="text-sm sm:text-base text-gray-600">Digital prescriptions, inventory management, automated ordering, result delivery, payment integration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2030 Roadmap */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto mb-12 sm:mb-16 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Our 2030 Goal
              </h2>
              <p className="text-base sm:text-lg text-gray-300">
                Complete digitalization of Uganda's healthcare system
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="bg-white bg-opacity-10 rounded-xl p-6 sm:p-8 backdrop-blur">
                <div className="text-3xl sm:text-4xl font-bold text-teal-400 mb-2">100%</div>
                <div className="text-base sm:text-lg font-semibold mb-2">Population Coverage</div>
                <p className="text-sm text-gray-300">Every Ugandan has a Universal Health ID and access to digital healthcare</p>
              </div>

              <div className="bg-white bg-opacity-10 rounded-xl p-6 sm:p-8 backdrop-blur">
                <div className="text-3xl sm:text-4xl font-bold text-teal-400 mb-2">5,000+</div>
                <div className="text-base sm:text-lg font-semibold mb-2">Connected Facilities</div>
                <p className="text-sm text-gray-300">All hospitals, clinics, pharmacies, and labs on one platform</p>
              </div>

              <div className="bg-white bg-opacity-10 rounded-xl p-6 sm:p-8 backdrop-blur">
                <div className="text-3xl sm:text-4xl font-bold text-teal-400 mb-2">24/7</div>
                <div className="text-base sm:text-lg font-semibold mb-2">AI Healthcare Access</div>
                <p className="text-sm text-gray-300">Instant medical advice via WhatsApp available to everyone, anytime</p>
              </div>

              <div className="bg-white bg-opacity-10 rounded-xl p-6 sm:p-8 backdrop-blur">
                <div className="text-3xl sm:text-4xl font-bold text-teal-400 mb-2">Zero</div>
                <div className="text-base sm:text-lg font-semibold mb-2">Lost Records</div>
                <p className="text-sm text-gray-300">Complete elimination of lost medical records and paper files</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto mb-12 sm:mb-16 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Our Core Values
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-teal-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Patient First</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Every decision we make puts patients first. Healthcare should be accessible, 
                  affordable, and centered around the people who need it.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-teal-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Data Privacy</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Your health data belongs to you. We use bank-level security and give you 
                  complete control over who accesses your information.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-teal-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Innovation</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  We leverage AI and modern technology to make healthcare better, faster, 
                  and more accessible for everyone.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Users className="w-8 h-8 sm:w-10 sm:h-10 text-teal-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Inclusivity</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Healthcare for everyone, everywhere. From cities to villages, from rich 
                  to poor, we serve all Ugandans equally.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Globe className="w-8 h-8 sm:w-10 sm:h-10 text-teal-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Collaboration</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  We work with government, healthcare providers, and communities to build 
                  a system that works for everyone.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Target className="w-8 h-8 sm:w-10 sm:h-10 text-teal-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Excellence</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  We maintain the highest standards in healthcare technology, security, 
                  and service delivery.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-teal-600 to-teal-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Join Us in Building Uganda's Healthcare Future
            </h2>
            <p className="text-base sm:text-lg text-teal-100 mb-8 sm:mb-10">
              Whether you're a patient, healthcare provider, or developer, there's a place 
              for you in Uganda's digital health transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.mediloop.co"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-teal-900 hover:bg-gray-100 px-6 sm:px-8 py-3 rounded-lg font-semibold"
              >
                Get Your Health ID
              </a>
              <a
                href="https://wa.me/256775035244"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-white text-white hover:bg-white hover:text-teal-900 px-6 sm:px-8 py-3 rounded-lg font-semibold"
              >
                Contact Us on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

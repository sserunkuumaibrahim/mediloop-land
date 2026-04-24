import Header from '@/components/Header'
import Footer from '@/components/Footer'

/**
 * Citizen Data Control Page
 * Explains how Mediloop empowers Ugandans to control and access their health data securely.
 */

export default function DataControlPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Your Data, Your Control</h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            You own your health records. Control who sees them, when, and for how long.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
          <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Complete Control</h3>
            <p className="text-sm sm:text-base text-gray-700 mb-6">
              With Mediloop, you decide who can access your health information. Grant or revoke access anytime.
            </p>
            <ul className="text-sm sm:text-base text-gray-600 space-y-2">
              <li>• You own all your medical records</li>
              <li>• Set time-limited access for each doctor</li>
              <li>• Revoke access instantly</li>
              <li>• See who viewed your records and when</li>
              <li>• Download your data anytime</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Bank-Grade Security</h3>
            <p className="text-sm sm:text-base text-gray-700 mb-6">
              Your health data is protected with the same security used by banks, in full compliance with Uganda's Data Protection Act 2019.
            </p>
            <ul className="text-sm sm:text-base text-gray-600 space-y-2">
              <li>• End-to-end encryption for all records</li>
              <li>• Multi-factor authentication</li>
              <li>• Regular independent security audits</li>
              <li>• Your data never sold or shared without permission</li>
              <li>• Secure data centers in Uganda</li>
            </ul>
          </div>
        </div>

        <div className="bg-teal-50 rounded-2xl p-8 sm:p-12 mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">How You Control Your Data</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4 text-lg sm:text-xl">1</div>
              <h3 className="font-semibold mb-2 text-sm sm:text-base">Access Anytime</h3>
              <p className="text-gray-700 text-xs sm:text-sm">View all your medical records from your phone</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4 text-lg sm:text-xl">2</div>
              <h3 className="font-semibold mb-2 text-sm sm:text-base">Grant Permission</h3>
              <p className="text-gray-700 text-xs sm:text-sm">Choose which doctors can see your records</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4 text-lg sm:text-xl">3</div>
              <h3 className="font-semibold mb-2 text-sm sm:text-base">Set Time Limits</h3>
              <p className="text-gray-700 text-xs sm:text-sm">Access expires automatically when you choose</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4 text-lg sm:text-xl">4</div>
              <h3 className="font-semibold mb-2 text-sm sm:text-base">Track Everything</h3>
              <p className="text-gray-700 text-xs sm:text-sm">See complete audit log of all access</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-600 to-green-600 rounded-2xl p-8 sm:p-12 text-white text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Take Control of Your Health Data</h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8">Create your Universal Health ID and start managing your records today.</p>
          <a href="https://app.mediloop.co" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-teal-600 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Get Started
          </a>
        </div>
      </main>
      <Footer />
    </div>
  )
}

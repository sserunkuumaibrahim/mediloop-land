import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
            Terms and Conditions
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mb-8 sm:mb-12">
            Last Updated: January 12, 2026
          </p>

          <div className="prose prose-sm sm:prose-base max-w-none">
            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                Welcome to Mediloop Health ("Mediloop," "we," "us," or "our"). By accessing or using Mediloop's 
                services, including our website, mobile applications, WhatsApp integration, and Universal Health 
                ID (UHID) platform, you agree to be bound by these Terms and Conditions ("Terms").
              </p>
              <p className="text-sm sm:text-base text-gray-700">
                If you do not agree to these Terms, you must not use our services. These Terms constitute a 
                legally binding agreement between you and Mediloop Health.
              </p>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">2. Definitions</h2>
              <ul className="list-disc pl-6 sm:pl-8 space-y-2 text-sm sm:text-base text-gray-700">
                <li><strong>"Services"</strong> refers to all Mediloop platforms, applications, and healthcare services</li>
                <li><strong>"UHID"</strong> refers to your Universal Health ID, a unique identifier for your health records</li>
                <li><strong>"User"</strong> refers to patients, healthcare providers, or authorized individuals using our services</li>
                <li><strong>"Healthcare Provider"</strong> refers to licensed medical professionals, facilities, and pharmacies using Mediloop</li>
                <li><strong>"Health Records"</strong> refers to all medical information stored in your UHID</li>
              </ul>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">3. Service Description</h2>
              
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 mt-6">3.1 Mediloop Platform</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                Mediloop provides a comprehensive digital health platform that includes:
              </p>
              <ul className="list-disc pl-6 sm:pl-8 space-y-2 text-sm sm:text-base text-gray-700">
                <li>Universal Health ID (UHID) for storing and accessing medical records</li>
                <li>WhatsApp-based health consultations and AI medical advice</li>
                <li>Appointment booking with healthcare providers</li>
                <li>Prescription management and pharmacy services</li>
                <li>Laboratory test ordering and results delivery</li>
                <li>Health record sharing between healthcare facilities</li>
                <li>AI-powered health insights and recommendations</li>
              </ul>

              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 mt-6">3.2 Service Availability</h3>
              <p className="text-sm sm:text-base text-gray-700">
                We strive to maintain continuous service availability but do not guarantee uninterrupted access. 
                Services may be temporarily unavailable due to maintenance, updates, or circumstances beyond our 
                control. We will provide advance notice of scheduled maintenance when possible.
              </p>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">4. User Eligibility and Registration</h2>
              
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 mt-6">4.1 Eligibility</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                To use Mediloop services, you must:
              </p>
              <ul className="list-disc pl-6 sm:pl-8 space-y-2 text-sm sm:text-base text-gray-700">
                <li>Be a resident of Uganda or a country where our services are available</li>
                <li>Provide accurate and truthful information during registration</li>
                <li>Have the legal capacity to enter into binding contracts</li>
                <li>For minors under 18, have a parent or legal guardian manage the account</li>
              </ul>

              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 mt-6">4.2 Account Registration</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                When creating a UHID account, you agree to:
              </p>
              <ul className="list-disc pl-6 sm:pl-8 space-y-2 text-sm sm:text-base text-gray-700">
                <li>Provide accurate personal and medical information</li>
                <li>Keep your login credentials secure and confidential</li>
                <li>Notify us immediately of any unauthorized access</li>
                <li>Update your information promptly when it changes</li>
                <li>Maintain only one UHID account per person</li>
              </ul>

              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 mt-6">4.3 Account Responsibility</h3>
              <p className="text-sm sm:text-base text-gray-700">
                You are responsible for all activities that occur under your account. You must not share your 
                account credentials or allow unauthorized access to your health records.
              </p>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">5. Medical Disclaimer and Healthcare Services</h2>
              
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 mt-6">5.1 Not a Medical Emergency Service</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                <strong>IMPORTANT: Mediloop is NOT an emergency medical service.</strong> If you are experiencing 
                a medical emergency, call local emergency services immediately or visit the nearest hospital. Do 
                not rely on Mediloop for emergency care.
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 mt-6">5.2 AI Medical Advice</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                Our AI-powered health insights are provided for informational purposes only and should not replace 
                professional medical advice, diagnosis, or treatment. Always consult with a qualified healthcare 
                provider for medical decisions.
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 mt-6">5.3 Healthcare Provider Relationship</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                Mediloop facilitates connections between patients and healthcare providers but does not:
              </p>
              <ul className="list-disc pl-6 sm:pl-8 space-y-2 text-sm sm:text-base text-gray-700">
                <li>Employ, supervise, or control healthcare providers</li>
                <li>Practice medicine or provide medical services directly</li>
                <li>Guarantee the quality, competence, or outcomes of healthcare services</li>
                <li>Assume responsibility for healthcare provider actions or decisions</li>
              </ul>

              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 mt-6">5.4 Telemedicine Consultations</h3>
              <p className="text-sm sm:text-base text-gray-700">
                WhatsApp and online consultations have limitations compared to in-person visits. Healthcare 
                providers may require you to visit a facility for physical examinations, tests, or treatments 
                when necessary.
              </p>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">6. User Responsibilities and Conduct</h2>
              
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 mt-6">6.1 Accurate Information</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                You must provide accurate and complete health information. Providing false or misleading 
                information may result in incorrect medical advice or treatment and could harm your health.
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 mt-6">6.2 Prohibited Activities</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-4">You agree NOT to:</p>
              <ul className="list-disc pl-6 sm:pl-8 space-y-2 text-sm sm:text-base text-gray-700">
                <li>Use the service for any illegal or unauthorized purpose</li>
                <li>Attempt to access other users' accounts or health records</li>
                <li>Upload viruses, malware, or malicious code</li>
                <li>Interfere with or disrupt the service or servers</li>
                <li>Scrape, crawl, or extract data from the platform without authorization</li>
                <li>Impersonate another person or entity</li>
                <li>Share prescription medications obtained through Mediloop</li>
                <li>Use the platform to obtain controlled substances illegally</li>
                <li>Harass, abuse, or harm healthcare providers or other users</li>
              </ul>

              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 mt-6">6.3 Compliance with Laws</h3>
              <p className="text-sm sm:text-base text-gray-700">
                You agree to comply with all applicable laws and regulations when using Mediloop services, 
                including Ugandan healthcare regulations and data protection laws.
              </p>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">7. Payment and Fees</h2>
              
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 mt-6">7.1 Service Fees</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                Mediloop offers both free and paid services:
              </p>
              <ul className="list-disc pl-6 sm:pl-8 space-y-2 text-sm sm:text-base text-gray-700">
                <li>UHID creation and basic health records: Free</li>
                <li>Doctor consultations: Fees set by individual healthcare providers</li>
                <li>Prescription medications: Market prices from partner pharmacies</li>
                <li>Laboratory tests: Fees set by partner laboratories</li>
              </ul>

              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 mt-6">7.2 Payment Processing</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                Payments are processed securely through third-party payment providers. You agree to:
              </p>
              <ul className="list-disc pl-6 sm:pl-8 space-y-2 text-sm sm:text-base text-gray-700">
                <li>Provide valid payment information</li>
                <li>Pay all fees and charges when due</li>
                <li>Ensure sufficient funds are available</li>
                <li>Review and verify charges before confirming payment</li>
              </ul>

              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 mt-6">7.3 Refunds</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Refund policies vary by service type. Consultation fees may not be refundable after services 
                are rendered. Contact our support team for refund requests, which will be evaluated on a 
                case-by-case basis.
              </p>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">8. Intellectual Property</h2>
              
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 mt-6">8.1 Mediloop Property</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                All content, features, and functionality of Mediloop (including but not limited to software, 
                text, graphics, logos, images, AI models, and algorithms) are owned by Mediloop Health and 
                protected by copyright, trademark, and other intellectual property laws.
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 mt-6">8.2 Your Health Records</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                You retain ownership of your personal health information. By using Mediloop, you grant us a 
                license to:
              </p>
              <ul className="list-disc pl-6 sm:pl-8 space-y-2 text-sm sm:text-base text-gray-700">
                <li>Store and maintain your health records</li>
                <li>Share your records with healthcare providers you authorize</li>
                <li>Use anonymized, aggregated data for research and service improvement</li>
                <li>Process your data to provide AI-powered health insights</li>
              </ul>

              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 mt-6">8.3 Restrictions</h3>
              <p className="text-sm sm:text-base text-gray-700">
                You may not copy, modify, distribute, sell, or reverse engineer any part of Mediloop's 
                platform without explicit written permission.
              </p>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
              
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 mt-6">9.1 No Warranties</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                Mediloop services are provided "AS IS" and "AS AVAILABLE" without warranties of any kind, 
                either express or implied. We do not warrant that:
              </p>
              <ul className="list-disc pl-6 sm:pl-8 space-y-2 text-sm sm:text-base text-gray-700">
                <li>Services will be uninterrupted, secure, or error-free</li>
                <li>Information provided will be accurate or complete</li>
                <li>Defects will be corrected</li>
                <li>AI recommendations will be suitable for your specific situation</li>
              </ul>

              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 mt-6">9.2 Limitation of Liability</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                To the maximum extent permitted by law, Mediloop shall not be liable for:
              </p>
              <ul className="list-disc pl-6 sm:pl-8 space-y-2 text-sm sm:text-base text-gray-700">
                <li>Medical malpractice or negligence by healthcare providers</li>
                <li>Adverse health outcomes or complications</li>
                <li>Decisions made based on AI recommendations</li>
                <li>Data loss due to technical failures or security breaches</li>
                <li>Service interruptions or downtime</li>
                <li>Indirect, incidental, consequential, or punitive damages</li>
              </ul>

              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 mt-6">9.3 Maximum Liability</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Our total liability for any claim arising from your use of Mediloop services shall not exceed 
                the amount you paid to Mediloop in the 12 months preceding the claim, or UGX 100,000, whichever 
                is greater.
              </p>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">10. Indemnification</h2>
              <p className="text-sm sm:text-base text-gray-700">
                You agree to indemnify, defend, and hold harmless Mediloop, its affiliates, officers, directors, 
                employees, and agents from any claims, liabilities, damages, losses, and expenses (including 
                legal fees) arising from:
              </p>
              <ul className="list-disc pl-6 sm:pl-8 space-y-2 text-sm sm:text-base text-gray-700">
                <li>Your use or misuse of Mediloop services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any rights of another person or entity</li>
                <li>Inaccurate or false information you provide</li>
              </ul>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">11. Privacy and Data Protection</h2>
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                Your use of Mediloop services is governed by our Privacy Policy, which is incorporated into 
                these Terms by reference. Please review our Privacy Policy to understand how we collect, use, 
                and protect your health information.
              </p>
              <p className="text-sm sm:text-base text-gray-700">
                We comply with Uganda's Data Protection and Privacy Act, 2019, and maintain strict security 
                measures to protect your health records.
              </p>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">12. Termination</h2>
              
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 mt-6">12.1 Termination by You</h3>
              <p className="text-sm sm:text-base text-gray-700">
                You may terminate your account at any time by contacting our support team. Upon termination, 
                we will retain your health records for the legally required period (typically 7 years) but will 
                no longer provide active services.
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 mt-6">12.2 Termination by Us</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                We may suspend or terminate your account if you:
              </p>
              <ul className="list-disc pl-6 sm:pl-8 space-y-2 text-sm sm:text-base text-gray-700">
                <li>Violate these Terms</li>
                <li>Engage in fraudulent or illegal activities</li>
                <li>Abuse or harass healthcare providers or staff</li>
                <li>Fail to pay required fees</li>
                <li>Provide false or misleading information</li>
              </ul>

              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 mt-6">12.3 Effect of Termination</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Upon termination, your access to services will cease, but these Terms will continue to apply 
                to your past use of the services. You may request a copy of your health records before termination.
              </p>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">13. Dispute Resolution</h2>
              
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 mt-6">13.1 Governing Law</h3>
              <p className="text-sm sm:text-base text-gray-700">
                These Terms are governed by the laws of the Republic of Uganda. Any disputes arising from these 
                Terms or your use of Mediloop services shall be subject to the exclusive jurisdiction of courts 
                in Kampala, Uganda.
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 mt-6">13.2 Dispute Resolution Process</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                Before filing any legal action, you agree to attempt to resolve disputes through:
              </p>
              <ul className="list-disc pl-6 sm:pl-8 space-y-2 text-sm sm:text-base text-gray-700">
                <li>Direct negotiation with our support team</li>
                <li>Mediation if negotiation fails</li>
                <li>Arbitration if mediation is unsuccessful</li>
              </ul>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">14. Changes to Terms</h2>
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                We may modify these Terms at any time. We will notify you of material changes by:
              </p>
              <ul className="list-disc pl-6 sm:pl-8 space-y-2 text-sm sm:text-base text-gray-700">
                <li>Posting updated Terms on our website</li>
                <li>Sending notifications via WhatsApp or email</li>
                <li>Displaying a notice on the platform</li>
              </ul>
              <p className="text-sm sm:text-base text-gray-700 mt-4">
                Your continued use of Mediloop services after changes are posted constitutes acceptance of the 
                updated Terms. If you do not agree to the new Terms, you must stop using our services.
              </p>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">15. General Provisions</h2>
              
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 mt-6">15.1 Entire Agreement</h3>
              <p className="text-sm sm:text-base text-gray-700">
                These Terms, together with our Privacy Policy, constitute the entire agreement between you and 
                Mediloop regarding your use of our services.
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 mt-6">15.2 Severability</h3>
              <p className="text-sm sm:text-base text-gray-700">
                If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions 
                will continue in full force and effect.
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 mt-6">15.3 No Waiver</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Our failure to enforce any provision of these Terms does not constitute a waiver of that provision 
                or our right to enforce it in the future.
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 mt-6">15.4 Assignment</h3>
              <p className="text-sm sm:text-base text-gray-700">
                You may not transfer or assign your rights or obligations under these Terms without our written 
                consent. We may assign our rights and obligations to any affiliate or successor entity.
              </p>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">16. Contact Information</h2>
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                If you have questions or concerns about these Terms, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg text-sm sm:text-base">
                <p className="mb-2"><strong>Mediloop Health</strong></p>
                <p className="mb-2">Plot 19-21 PortBell Road, Nakawa, Kampala, Uganda</p>
                <p className="mb-2">Email: legal@mediloop.co</p>
                <p className="mb-2">WhatsApp: +256 775 035244</p>
                <p>Phone: +256 775 035244</p>
              </div>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                By using Mediloop services, you acknowledge that you have read, understood, and agree to be 
                bound by these Terms and Conditions.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

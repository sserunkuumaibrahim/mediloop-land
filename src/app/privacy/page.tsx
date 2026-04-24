import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
            Privacy Policy
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mb-8 sm:mb-12">
            Last Updated: January 12, 2026
          </p>

          <div className="prose prose-sm sm:prose-base max-w-none">
            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                Mediloop Health ("Mediloop," "we," "us," or "our") is committed to protecting your privacy and 
                ensuring the security of your personal health information. This Privacy Policy explains how we 
                collect, use, disclose, and safeguard your information when you use our services, including our 
                website, mobile applications, WhatsApp integration, and Universal Health ID (UHID) platform.
              </p>
              <p className="text-sm sm:text-base text-gray-700">
                By using Mediloop services, you agree to the collection and use of information in accordance 
                with this policy. We comply with Uganda's Data Protection and Privacy Act, 2019, and international 
                healthcare data protection standards.
              </p>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 mt-6">2.1 Personal Information</h3>
              <ul className="list-disc pl-6 sm:pl-8 space-y-2 text-sm sm:text-base text-gray-700">
                <li>Full name, date of birth, and gender</li>
                <li>National Identification Number (NIN)</li>
                <li>Contact information (phone number, email address, physical address)</li>
                <li>Emergency contact information</li>
                <li>Payment information for paid services</li>
              </ul>

              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 mt-6">2.2 Health Information</h3>
              <ul className="list-disc pl-6 sm:pl-8 space-y-2 text-sm sm:text-base text-gray-700">
                <li>Medical history, diagnoses, and treatment plans</li>
                <li>Prescription and medication records</li>
                <li>Laboratory test results and diagnostic reports</li>
                <li>Vital signs and health measurements</li>
                <li>Immunization records</li>
                <li>Allergies and adverse reactions</li>
                <li>Doctor's notes and clinical observations</li>
                <li>Medical images and scans (when applicable)</li>
              </ul>

              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 mt-6">2.3 Usage Information</h3>
              <ul className="list-disc pl-6 sm:pl-8 space-y-2 text-sm sm:text-base text-gray-700">
                <li>WhatsApp messages and consultation history</li>
                <li>App usage patterns and feature interactions</li>
                <li>Device information (device type, operating system, browser type)</li>
                <li>IP address and location data (when permitted)</li>
                <li>Login times and access logs</li>
              </ul>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 mt-6">3.1 Primary Healthcare Purposes</h3>
              <ul className="list-disc pl-6 sm:pl-8 space-y-2 text-sm sm:text-base text-gray-700">
                <li>Provide medical consultations and healthcare services</li>
                <li>Maintain your Universal Health ID and medical records</li>
                <li>Enable communication between you and healthcare providers</li>
                <li>Process prescriptions and lab orders</li>
                <li>Coordinate care across multiple healthcare facilities</li>
                <li>Provide AI-powered health insights and recommendations</li>
              </ul>

              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 mt-6">3.2 Service Improvement</h3>
              <ul className="list-disc pl-6 sm:pl-8 space-y-2 text-sm sm:text-base text-gray-700">
                <li>Improve our AI models and healthcare algorithms</li>
                <li>Enhance user experience and platform functionality</li>
                <li>Develop new features and services</li>
                <li>Conduct research and analytics (using anonymized data)</li>
              </ul>

              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 mt-6">3.3 Communication</h3>
              <ul className="list-disc pl-6 sm:pl-8 space-y-2 text-sm sm:text-base text-gray-700">
                <li>Send appointment reminders and health notifications</li>
                <li>Provide medication reminders</li>
                <li>Share test results and medical updates</li>
                <li>Send service updates and important announcements</li>
              </ul>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">4. Data Sharing and Disclosure</h2>
              
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 mt-6">4.1 Healthcare Providers</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                We share your health information with authorized healthcare providers (doctors, nurses, pharmacists, 
                lab technicians) only when necessary to provide you with care and only with your explicit consent.
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 mt-6">4.2 Service Providers</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                We may share information with trusted third-party service providers who assist us in operating 
                our platform, including:
              </p>
              <ul className="list-disc pl-6 sm:pl-8 space-y-2 text-sm sm:text-base text-gray-700">
                <li>Cloud hosting providers (for secure data storage)</li>
                <li>Payment processors (for handling transactions)</li>
                <li>SMS and WhatsApp communication services</li>
              </ul>
              <p className="text-sm sm:text-base text-gray-700 mt-4">
                All service providers are bound by strict confidentiality agreements and are not permitted to 
                use your data for any other purpose.
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 mt-6">4.3 Legal Requirements</h3>
              <p className="text-sm sm:text-base text-gray-700">
                We may disclose your information when required by law, such as in response to court orders, 
                government requests, or to comply with legal obligations. We will notify you of such requests 
                unless prohibited by law.
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 mt-6">4.4 Public Health Emergencies</h3>
              <p className="text-sm sm:text-base text-gray-700">
                In cases of public health emergencies or disease outbreaks, we may share anonymized, aggregated 
                data with government health authorities to support disease surveillance and public health responses.
              </p>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">5. Your Privacy Rights and Control</h2>
              
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 mt-6">5.1 Access and Review</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                You have the right to access and review all your health information stored in Mediloop at any time 
                through your patient portal or by contacting us.
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 mt-6">5.2 Consent Management</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                You control who can access your health information. You can:
              </p>
              <ul className="list-disc pl-6 sm:pl-8 space-y-2 text-sm sm:text-base text-gray-700">
                <li>Grant or revoke access to specific healthcare providers</li>
                <li>Set time-limited access permissions</li>
                <li>View audit logs of who has accessed your records</li>
                <li>Restrict access to certain sensitive information</li>
              </ul>

              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 mt-6">5.3 Data Correction</h3>
              <p className="text-sm sm:text-base text-gray-700">
                If you believe any information we hold about you is incorrect or incomplete, you have the right 
                to request corrections through your healthcare provider or by contacting us.
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 mt-6">5.4 Data Export</h3>
              <p className="text-sm sm:text-base text-gray-700">
                You can request a complete export of your health records in a portable, machine-readable format 
                at any time.
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 mt-6">5.5 Account Deletion</h3>
              <p className="text-sm sm:text-base text-gray-700">
                You may request deletion of your account, though we may be required to retain certain medical 
                records for legal and regulatory compliance purposes (typically 7 years from last interaction).
              </p>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">6. Data Security</h2>
              
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 mt-6">6.1 Technical Safeguards</h3>
              <ul className="list-disc pl-6 sm:pl-8 space-y-2 text-sm sm:text-base text-gray-700">
                <li>End-to-end encryption for all data transmission</li>
                <li>Encrypted data storage using AES-256 encryption</li>
                <li>Multi-factor authentication for account access</li>
                <li>Regular security audits and penetration testing</li>
                <li>Secure API architecture with rate limiting</li>
                <li>Real-time threat monitoring and intrusion detection</li>
              </ul>

              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 mt-6">6.2 Administrative Safeguards</h3>
              <ul className="list-disc pl-6 sm:pl-8 space-y-2 text-sm sm:text-base text-gray-700">
                <li>Role-based access controls for all staff</li>
                <li>Regular security training for all employees</li>
                <li>Strict confidentiality agreements with all personnel</li>
                <li>Incident response and breach notification procedures</li>
                <li>Regular security policy reviews and updates</li>
              </ul>

              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 mt-6">6.3 Physical Safeguards</h3>
              <ul className="list-disc pl-6 sm:pl-8 space-y-2 text-sm sm:text-base text-gray-700">
                <li>Secure data centers with 24/7 monitoring</li>
                <li>Redundant backup systems and disaster recovery plans</li>
                <li>Controlled physical access to servers and equipment</li>
              </ul>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">7. Data Retention</h2>
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                We retain your health information for as long as necessary to provide services and comply with 
                legal obligations:
              </p>
              <ul className="list-disc pl-6 sm:pl-8 space-y-2 text-sm sm:text-base text-gray-700">
                <li>Active health records: Retained indefinitely while you use our services</li>
                <li>After account closure: Minimum 7 years as required by Ugandan healthcare regulations</li>
                <li>Anonymized research data: May be retained indefinitely for public health research</li>
                <li>Usage logs and analytics: Retained for 2 years</li>
              </ul>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">8. Children's Privacy</h2>
              <p className="text-sm sm:text-base text-gray-700">
                Mediloop services can be used for children under 18. Health records for minors are managed by 
                parents or legal guardians until the child reaches 18 years of age. Parents/guardians have full 
                access to and control over their children's health information.
              </p>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">9. International Data Transfers</h2>
              <p className="text-sm sm:text-base text-gray-700">
                Your data is primarily stored within Uganda and Africa. If we need to transfer data outside 
                Uganda for specific services (such as specialized cloud infrastructure), we ensure appropriate 
                safeguards are in place, including data processing agreements and compliance with international 
                data protection standards.
              </p>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">10. Changes to This Privacy Policy</h2>
              <p className="text-sm sm:text-base text-gray-700">
                We may update this Privacy Policy from time to time. We will notify you of any material changes 
                by posting the new policy on our website and sending notifications through WhatsApp or email. 
                Your continued use of Mediloop services after changes are posted constitutes acceptance of the 
                updated policy.
              </p>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                If you have questions, concerns, or requests regarding this Privacy Policy or your health data, 
                please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg text-sm sm:text-base">
                <p className="mb-2"><strong>Mediloop Health</strong></p>
                <p className="mb-2">Plot 19-21 PortBell Road, Nakawa, Kampala, Uganda</p>
                <p className="mb-2">Email: privacy@mediloop.co</p>
                <p className="mb-2">WhatsApp: +256 775 035244</p>
                <p>Phone: +256 775 035244</p>
              </div>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">12. Regulatory Compliance</h2>
              <p className="text-sm sm:text-base text-gray-700">
                Mediloop complies with:
              </p>
              <ul className="list-disc pl-6 sm:pl-8 space-y-2 text-sm sm:text-base text-gray-700">
                <li>Uganda Data Protection and Privacy Act, 2019</li>
                <li>Uganda National Health Information Systems (HIS) standards</li>
                <li>HL7 FHIR R4 international healthcare data standards</li>
                <li>ISO 27001 Information Security Management standards</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

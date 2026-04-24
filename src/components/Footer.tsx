import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Stay updated on Uganda's digital health transformation</h3>
            <p className="text-gray-400 mb-6">Get the latest on universal health access, digital services, and citizen data empowerment from Mediloop.</p>
            <Button className="bg-white text-black hover:bg-gray-200">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Mediloop */}
          <div className="flex items-start">
            <Link href="/" className="flex items-center mr-4">
              <img src="/assets/mediloop.png" alt="Mediloop logo" className="h-32 w-auto sm:h-32" />
            </Link>
            <div>
              <div className="space-y-2 text-gray-400">
                <div>Digitalising healthcare for Uganda</div>
                <div>Universal access • Citizen data control</div>
              </div>
            </div>
          </div>

          {/* For Patients */}
          <div>
            <h4 className="font-bold mb-4">For Patients</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://app.mediloop.co" target="_blank" rel="noopener noreferrer" className="hover:text-white">Patient Portal</a></li>
              <li><a href="https://wa.me/256775035244" target="_blank" rel="noopener noreferrer" className="hover:text-white">WhatsApp Consultation</a></li>
              <li><a href="/support" className="hover:text-white">Get Your Health ID</a></li>
              <li><a href="/support" className="hover:text-white">Book Appointment</a></li>
              <li><a href="/support" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>

          {/* For Providers */}
          <div>
            <h4 className="font-bold mb-4">For Providers</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://providers.mediloop.co" target="_blank" rel="noopener noreferrer" className="hover:text-white">Provider Portal</a></li>
              <li><a href="/providers" className="hover:text-white">Register Facility</a></li>
              <li><a href="/providers" className="hover:text-white">Integration Guide</a></li>
            </ul>
          </div>

          {/* For Developers */}
          <div>
            <h4 className="font-bold mb-4">For Developers</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://developers.mediloop.co" target="_blank" rel="noopener noreferrer" className="hover:text-white">Developer Portal</a></li>
              <li><a href="https://docs.mediloop.co" target="_blank" rel="noopener noreferrer" className="hover:text-white">API Documentation</a></li>
              <li><a href="https://developers.mediloop.co" target="_blank" rel="noopener noreferrer" className="hover:text-white">Build on Mediloop</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/careers" className="hover:text-white">Careers</a></li>
              <li><a href="/blog" className="hover:text-white">Blog</a></li>
              <li><a href="/press" className="hover:text-white">Press</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-2 gap-8 mt-12 pt-8 border-t border-gray-800">
          <div>
            <h5 className="font-semibold mb-2">Office Location</h5>
            <p className="text-gray-400 text-sm">
              Plot 19-21 PortBell Road<br />
              Nakawa, Kampala<br />
              Uganda
            </p>
          </div>
          <div>
            <h5 className="font-semibold mb-2">Contact</h5>
            <p className="text-gray-400 text-sm">
              Email: info@mediloop.co<br />
              WhatsApp: <a href="https://wa.me/256775035244" className="hover:text-white underline">+256 775 035244</a><br />
              Phone: +256 775 035244
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm">
            Mediloop Health • 2026
          </p>
          <p className="text-gray-400 text-sm">
            info@mediloop.co
          </p>
        </div>
      </div>
    </footer>
  )
}

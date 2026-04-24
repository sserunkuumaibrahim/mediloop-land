import Header from '@/components/Header'
import AnnouncementBanner from '@/components/AnnouncementBanner'
import HeroSection from '@/components/HeroSection'
import PartnersSection from '@/components/PartnersSection'
import KeyFeaturesSection from '@/components/KeyFeaturesSection'
import ClinicalDocSection from '@/components/ClinicalDocSection'
import DevelopersSection from '@/components/DevelopersSection'
import SecuritySection from '@/components/SecuritySection'
import TestimonialsSection from '@/components/TestimonialsSection'
import CareersSection from '@/components/CareersSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <AnnouncementBanner />

      {/* Hero - mission statement, dark gradient */}
      <HeroSection />

      {/* Key stats */}
      <PartnersSection />

      {/* Three audiences: Patients, Providers, Developers */}
      <KeyFeaturesSection />

      {/* Facility types - links to /providers */}
      <ClinicalDocSection />

      {/* Platform layers - links to /platform and /services */}
      <DevelopersSection />

      {/* Security & trust */}
      <SecuritySection />

      {/* Testimonials + final CTA */}
      <TestimonialsSection />

      {/* Open roles - links to /careers */}
      <CareersSection />

      <Footer />
    </main>
  )
}

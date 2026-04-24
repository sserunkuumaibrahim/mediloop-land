export default function ExpertiseSection() {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Digitalising Healthcare. Empowering Every Ugandan.
          </h2>
          <p className="text-xl text-gray-300">
            Our vision: Make healthcare accessible to every citizen, and give every Ugandan true control over their medical data - secure, portable, and available anywhere. Mediloop is building the digital backbone for Uganda's health system.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-teal-600 to-teal-800 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4">Universal Health ID (UHID)</h3>
            <div className="h-32 bg-teal-700 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-3xl text-white font-bold">UHID</span>
            </div>
            <p className="text-teal-100">Every Ugandan gets a secure, portable health identity for life.</p>
          </div>

          <div className="bg-gradient-to-br from-teal-600 to-teal-800 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4">Nationwide Provider Network</h3>
            <div className="h-32 bg-teal-700 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-3xl text-white font-bold">1000+</span>
            </div>
            <p className="text-teal-100">Clinics, hospitals, pharmacies, and labs - connected for seamless care.</p>
          </div>

          <div className="bg-gradient-to-br from-teal-600 to-teal-800 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4">Digital Health Services</h3>
            <div className="h-32 bg-teal-700 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-3xl text-white font-bold">eHealth</span>
            </div>
            <p className="text-teal-100">AI, telemedicine, insurance, logistics, and more - built on Mediloop's secure platform.</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-teal-600 to-teal-800 rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-2">95%</h3>
              <p className="text-teal-200">Note accuracy</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-2">5 seconds</h3>
              <p className="text-teal-200">Note generation</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="text-teal-400 hover:text-teal-300 font-medium">
            Learn more →
          </button>
        </div>
      </div>
    </section>
  )
}

export default function LeadersSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Loved by<br />healthcare<br />leaders
            </h2>

            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <span className="text-gray-700">90% less burnout</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <span className="text-gray-700">White glove support from our dedicated team</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <span className="text-gray-700">81% enhanced patient-clinician interaction</span>
              </div>
            </div>

            <div className="mt-8">
              <button className="text-teal-600 hover:text-teal-700 font-medium">
                Read case studies →
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-start space-x-4">
              <img
                src="https://ext.same-assets.com/1157322651/115813133.avif"
                alt="Dr. David Lovinger"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h4 className="font-bold text-gray-900">Dr. David Lovinger</h4>
                <p className="text-sm text-gray-600 mb-4">CIO and Associate CMIO<br />Carle Health</p>

                <blockquote className="text-gray-700">
                  "Mediloop's UHID and AI-powered platform have transformed how we deliver care. Our clinicians can instantly access patient records, provide faster diagnoses, and spend more quality time with patients. It's a leap forward for healthcare in Africa."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

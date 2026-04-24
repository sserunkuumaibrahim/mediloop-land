import { Button } from '@/components/ui/button'

export default function TemplatesSection() {
  const languages = [
    { flag: "🇺�", name: "English (Uganda)" },
    { flag: "��", name: "Luganda" },
    { flag: "��", name: "Runyankole" },
    { flag: "��", name: "Acholi" },
    { flag: "��", name: "Swahili" }
  ]

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Multilingual */}
          <div className="bg-gradient-to-br from-green-100 to-teal-100 rounded-2xl p-8 text-center">
            <div className="grid grid-cols-3 gap-4 mb-8">
              {languages.map((lang, index) => (
                <div
                  key={index}
                  className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl shadow-md mx-auto"
                >
                  {lang.flag}
                </div>
              ))}
            </div>

            <p className="text-teal-600 font-medium uppercase tracking-wide text-sm mb-4">
              MULTILINGUAL (UGANDA)
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              English, Luganda, Runyankole, Acholi, Swahili<br />and more local languages
            </h3>
          </div>

          {/* Right side - Customizable Templates */}
          <div className="bg-gradient-to-br from-teal-600 to-teal-800 rounded-2xl p-8 text-white">
            <p className="text-teal-200 font-medium uppercase tracking-wide text-sm mb-4">
              MAKE IT YOUR OWN
            </p>
            <h3 className="text-2xl font-bold mb-6">
              Customizable templates
            </h3>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                Multiple sections
              </span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                SOAP
              </span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                Custom note
              </span>
              <span className="text-sm opacity-80">and more...</span>
            </div>

            {/* Template preview */}
            <div className="bg-white rounded-lg p-4 text-gray-900 text-sm">
              <div className="font-semibold mb-2">CHIEF COMPLAINT</div>
              <p className="mb-3">
                The patient presents with a persistent cough and shortness of
                breath that started approximately two weeks ago.
              </p>

              <div className="font-semibold mb-2">HISTORY OF PRESENT ILLNESS</div>
              <p className="mb-3">
                Mr. Doe reports a cough that started approximately two weeks ago,
                accompanied by occasional wheezing and difficulty breathing. He
                denies any recent illnesses or exposures to sick contacts.
              </p>

              <div className="font-semibold mb-2">PAST MEDICAL HISTORY</div>
              <ul className="text-sm space-y-1">
                <li>• Hypertension (controlled with losartan)</li>
                <li>• Type 2 diabetes (managed with metformin)</li>
                <li>• Allergic rhinitis</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3">
            Get a demo
          </Button>
        </div>
      </div>
    </section>
  )
}

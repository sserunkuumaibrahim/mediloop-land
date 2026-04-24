export default function SettingsSection() {
  const settings = [
    {
      title: "Patients and Caregivers",
      image: "https://ext.same-assets.com/1157322651/3267250880.avif",
      description: "Supporting patient-provider interactions in Ugandan clinics and hospitals"
    },
    {
      title: "Outpatient and Inpatient",
      image: "https://ext.same-assets.com/1157322651/1627134669.avif",
      description: "Seamless documentation across all Ugandan care environments"
    },
    {
      title: "Telehealth encounters",
      image: "https://ext.same-assets.com/1157322651/3063892117.avif",
      description: "Enhanced remote care documentation and workflows for Uganda"
    }
  ]

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Works in all settings
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {settings.map((setting, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={setting.image}
                  alt={setting.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{setting.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="text-teal-600 hover:text-teal-700 font-medium">
            Contact us →
          </button>
        </div>
      </div>
    </section>
  )
}

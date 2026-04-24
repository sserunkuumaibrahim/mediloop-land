export default function PressSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Mediloop: Transforming Healthcare Access in Uganda
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 opacity-60">
            {/* Placeholder for press logos or articles */}
            <div className="h-8 bg-gray-400 rounded w-32 flex items-center justify-center text-sm font-semibold text-white">New Vision</div>
            <div className="h-8 bg-gray-400 rounded w-32 flex items-center justify-center text-sm font-semibold text-white">Daily Monitor</div>
            <div className="h-8 bg-gray-400 rounded w-32 flex items-center justify-center text-sm font-semibold text-white">NBS TV</div>
            <div className="h-8 bg-gray-400 rounded w-32 flex items-center justify-center text-sm font-semibold text-white">URN</div>
          </div>

          <div className="mt-8">
            <button className="text-teal-600 hover:text-teal-700 font-medium">
              Read more about Uganda's digital health journey →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

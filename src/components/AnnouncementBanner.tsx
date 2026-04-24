const WHATSAPP_UHID = 'https://wa.me/256775035244?text=Hello%20Mediloop%2C%20I%20want%20to%20register%20for%20my%20UHID'

export default function AnnouncementBanner() {
  return (
    <div className="bg-teal-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="text-white text-sm font-medium">
            Register for your free Universal Health ID via WhatsApp
          </span>
          <a
            href={WHATSAPP_UHID}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-teal-700 hover:bg-teal-50 rounded-full px-4 py-1 text-sm font-semibold transition-colors shrink-0"
          >
            Get UHID Free
          </a>
        </div>
      </div>
    </div>
  )
}

import { ArrowRight } from 'lucide-react'

export default function IntegrationsSection() {
  const integrations = [
    { name: "HAPI FHIR R4", description: "FHIR Server" },
    { name: "Keycloak", description: "OAuth2/OIDC Auth" },
    { name: "WhatsApp Business API", description: "Patient Interface" },
    { name: "Kong API Gateway", description: "API Management" },
    { name: "PostgreSQL", description: "Primary Database" },
    { name: "Redis", description: "Caching Layer" },
    { name: "Qdrant", description: "Vector Database" },
    { name: "Terminology Service", description: "Code Validation" },
    { name: "MTN Mobile Money", description: "Payments" },
    { name: "Airtel Money", description: "Payments" },
    { name: "NIRA (NIN)", description: "Identity Verification" },
    { name: "vLLM", description: "AI Inference" }
  ]

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-teal-600 font-medium uppercase tracking-wide text-sm mb-4">
            TECHNOLOGY STACK
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Enterprise Infrastructure & Integrations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Production-grade stack powering Uganda's healthcare platform with 99.9% uptime
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-teal-500 hover:shadow-md transition-all text-center"
            >
              <div className="font-bold text-gray-900 mb-1">{integration.name}</div>
              <div className="text-sm text-gray-600">{integration.description}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://mediloop.co/developers"
            className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            View API Documentation
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

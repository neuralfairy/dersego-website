import { Button } from "@/components/ui/button"

export function IntegrationDemos() {
  const integrations = [
    {
      name: "HubSpot",
      description: "Sync contacts, track email performance, and automate sequences",
      features: ["Contact synchronization", "Email tracking", "Automated workflows", "Performance analytics"],
      logo: "/placeholder.svg?height=60&width=120&text=HubSpot",
    },
    {
      name: "Salesforce",
      description: "Connect messaging data with your sales pipeline and opportunities",
      features: ["Pipeline integration", "Opportunity tracking", "Custom fields", "Sales reporting"],
      logo: "/placeholder.svg?height=60&width=120&text=Salesforce",
    },
    {
      name: "Zoho CRM",
      description: "Streamline your sales process with integrated messaging tools",
      features: ["Lead management", "Deal tracking", "Email integration", "Custom modules"],
      logo: "/placeholder.svg?height=60&width=120&text=Zoho",
    },
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1A1A3F] mb-4">Seamless CRM Integration</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect your messaging strategy directly to your sales process with our powerful integrations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {integrations.map((integration, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-center mb-6">
                <img
                  src={integration.logo || "/placeholder.svg"}
                  alt={`${integration.name} logo`}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-[#1A1A3F] mb-2">{integration.name}</h3>
                <p className="text-gray-600">{integration.description}</p>
              </div>

              <div className="space-y-3 mb-6">
                {integration.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-[#FF7733] rounded-full"></span>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://salescentri.com/solutions/psa-suite/integrations"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="btn-secondary w-full">
                  <span className="text-black">View Integration</span>
                </Button>
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Don't see your CRM? We're constantly adding new integrations.</p>
          <a
            href="https://salescentri.com/contact/partnerships/integration-requests"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="btn-primary">
              <span className="text-black">Request Integration</span>
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}

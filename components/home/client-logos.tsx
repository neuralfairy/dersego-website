export function ClientLogos() {
  const logos = [
    "HubSpot Partner",
    "Meta Marketing Partner",
    "Google Partner",
    "Salesforce Partner",
    "LinkedIn Partner",
    "Microsoft Partner",
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-12">
          <p className="text-gray-600 text-lg mb-8">Trusted by leading companies and certified by industry leaders</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg p-4 h-16 flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <span className="text-gray-600 font-medium text-sm text-center">{logo}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center space-x-4 text-sm text-gray-500">
          <div className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            GDPR Compliant
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            SSL Secured
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            SOC 2 Certified
          </div>
        </div>
      </div>
    </section>
  )
}

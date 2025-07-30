import { MessageSquare, Target, BarChart3, Zap } from "lucide-react"

export function FeaturesPreview() {
  const features = [
    {
      icon: MessageSquare,
      title: "Brand Positioning",
      description:
        "Craft compelling brand messages that resonate with your target audience and differentiate you from competitors.",
    },
    {
      icon: Target,
      title: "Sales Copy Frameworks",
      description: "Proven frameworks and templates that convert prospects into customers with persuasive messaging.",
    },
    {
      icon: BarChart3,
      title: "A/B Testing Dashboard",
      description: "Test different messaging variations and optimize based on real performance data.",
    },
    {
      icon: Zap,
      title: "CRM Integration",
      description: "Seamlessly integrate with HubSpot, Salesforce, and Zoho to streamline your sales process.",
    },
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1A1A3F] mb-4">Everything You Need to Win</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive messaging platform provides all the tools and frameworks you need to create compelling,
            conversion-focused content.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-[#FF7733]/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="text-[#FF7733]" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-[#1A1A3F] mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

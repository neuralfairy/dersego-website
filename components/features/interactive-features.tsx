"use client"

import { useState } from "react"
import { MessageSquare, Target, BarChart3, Zap, Users, FileText } from "lucide-react"

export function InteractiveFeatures() {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      icon: MessageSquare,
      title: "Brand Positioning",
      description: "Create compelling brand messages that differentiate you from competitors",
      details:
        "Our brand positioning framework helps you identify your unique value proposition, target audience pain points, and competitive advantages. Build messaging that resonates with your ideal customers and positions you as the obvious choice.",
      benefits: ["Clear value proposition", "Competitive differentiation", "Audience alignment", "Message consistency"],
    },
    {
      icon: Target,
      title: "Sales Copy Frameworks",
      description: "Proven templates and frameworks that convert prospects into customers",
      details:
        "Access our library of high-converting sales copy frameworks including AIDA, PAS, Before-After-Bridge, and custom templates optimized for different industries and use cases.",
      benefits: [
        "Proven conversion formulas",
        "Industry-specific templates",
        "A/B tested frameworks",
        "Easy customization",
      ],
    },
    {
      icon: BarChart3,
      title: "A/B Testing Dashboard",
      description: "Test different messaging variations and optimize based on real data",
      details:
        "Built-in A/B testing tools let you test headlines, email subject lines, ad copy, and landing page messaging. Get statistical significance data and actionable insights.",
      benefits: ["Statistical significance", "Real-time results", "Easy setup", "Actionable insights"],
    },
    {
      icon: Zap,
      title: "CRM Integration",
      description: "Seamlessly integrate with HubSpot, Salesforce, and Zoho",
      details:
        "Connect your messaging strategy directly to your sales process. Sync contact data, track message performance, and automate follow-up sequences based on engagement.",
      benefits: ["Seamless data sync", "Performance tracking", "Automated workflows", "Sales alignment"],
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work together on messaging projects with your entire team",
      details:
        "Collaborate in real-time with team members, stakeholders, and clients. Share feedback, approve messaging, and maintain brand consistency across all communications.",
      benefits: ["Real-time collaboration", "Approval workflows", "Brand consistency", "Team alignment"],
    },
    {
      icon: FileText,
      title: "Message Library",
      description: "Organize and access all your messaging assets in one place",
      details:
        "Centralized library for all your messaging assets including email templates, ad copy, social media posts, and sales scripts. Search, filter, and organize by campaign, audience, or performance.",
      benefits: ["Centralized storage", "Easy organization", "Quick access", "Performance tracking"],
    },
  ]

  const ActiveFeatureIcon = features[activeFeature].icon
  const ActiveFeatureTitle = features[activeFeature].title
  const ActiveFeatureDetails = features[activeFeature].details
  const ActiveFeatureBenefits = features[activeFeature].benefits

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1A1A3F] mb-4">Interactive Feature Deep Dive</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Click on any feature below to explore how it can transform your messaging strategy
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                  activeFeature === index ? "bg-[#FF7733] text-white shadow-lg" : "bg-gray-50 hover:bg-gray-100"
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      activeFeature === index ? "bg-white/20" : "bg-[#FF7733]/10"
                    }`}
                  >
                    <feature.icon className={activeFeature === index ? "text-white" : "text-[#FF7733]"} size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className={activeFeature === index ? "text-white/90" : "text-gray-600"}>{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="mb-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-[#FF7733]/10 rounded-lg flex items-center justify-center">
                  <ActiveFeatureIcon className="text-[#FF7733]" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-[#1A1A3F]">{ActiveFeatureTitle}</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">{ActiveFeatureDetails}</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-[#1A1A3F] mb-4">Key Benefits:</h4>
              <div className="grid grid-cols-2 gap-3">
                {ActiveFeatureBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-[#FF7733] rounded-full"></span>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

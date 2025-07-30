import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"

export function PricingTable() {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small teams getting started with messaging optimization",
      features: [
        { name: "Basic messaging templates", included: true },
        { name: "Email support", included: true },
        { name: "Up to 3 team members", included: true },
        { name: "Basic analytics", included: true },
        { name: "CRM integration", included: false },
        { name: "A/B testing", included: false },
        { name: "Custom frameworks", included: false },
        { name: "Priority support", included: false },
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Professional",
      price: "$89",
      period: "/month",
      description: "For growing teams that need advanced messaging tools and integrations",
      features: [
        { name: "Advanced messaging templates", included: true },
        { name: "Priority email support", included: true },
        { name: "Up to 10 team members", included: true },
        { name: "Advanced analytics", included: true },
        { name: "CRM integration", included: true },
        { name: "A/B testing", included: true },
        { name: "Custom frameworks", included: true },
        { name: "Priority support", included: false },
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations with custom needs and dedicated support",
      features: [
        { name: "Unlimited messaging templates", included: true },
        { name: "Dedicated success manager", included: true },
        { name: "Unlimited team members", included: true },
        { name: "Custom analytics dashboard", included: true },
        { name: "All CRM integrations", included: true },
        { name: "Advanced A/B testing", included: true },
        { name: "Custom frameworks", included: true },
        { name: "24/7 priority support", included: true },
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 ${
                plan.popular ? "bg-[#FF7733] text-white shadow-xl scale-105" : "bg-gray-50 border border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#1A1A3F] text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? "text-white" : "text-[#1A1A3F]"}`}>
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className={`text-4xl font-bold ${plan.popular ? "text-white" : "text-[#1A1A3F]"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-lg ${plan.popular ? "text-white/80" : "text-gray-600"}`}>{plan.period}</span>
                </div>
                <p className={`${plan.popular ? "text-white/90" : "text-gray-600"}`}>{plan.description}</p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    {feature.included ? (
                      <Check className={`w-5 h-5 ${plan.popular ? "text-white" : "text-green-500"}`} />
                    ) : (
                      <X className={`w-5 h-5 ${plan.popular ? "text-white/50" : "text-gray-400"}`} />
                    )}
                    <span
                      className={`${
                        plan.popular
                          ? feature.included
                            ? "text-white"
                            : "text-white/50"
                          : feature.included
                            ? "text-gray-700"
                            : "text-gray-400"
                      }`}
                    >
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>

              {plan.name === "Enterprise" ? (
                <a
                  href="https://salescentri.com/contact/sales-inquiry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button
                    className={`w-full py-3 font-semibold ${
                      plan.popular ? "bg-white text-[#FF7733] hover:bg-gray-100" : "btn-primary"
                    }`}
                  >
                    <span className="text-black">{plan.cta}</span>
                  </Button>
                </a>
              ) : (
                <a
                  href="https://salescentri.com/get-started/free-trial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button
                    className={`w-full py-3 font-semibold ${
                      plan.popular ? "bg-white text-[#FF7733] hover:bg-gray-100" : "btn-primary"
                    }`}
                  >
                    <span className="text-black">{plan.cta}</span>
                  </Button>
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">All plans include a 14-day free trial. No credit card required.</p>
          <div className="flex justify-center space-x-8 text-sm text-gray-500">
            <span>✓ Cancel anytime</span>
            <span>✓ No setup fees</span>
            <span>✓ 30-day money-back guarantee</span>
          </div>
        </div>
      </div>
    </section>
  )
}

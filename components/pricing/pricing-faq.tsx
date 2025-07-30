"use client"

import { Button } from "@/components/ui/button"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What is messaging strategy?",
      answer:
        "Messaging strategy is the art and science of crafting compelling, consistent communication that resonates with your target audience and drives desired actions. It includes brand positioning, value propositions, sales copy, and all customer-facing communications.",
    },
    {
      question: "How can Dersego help my sales team?",
      answer:
        "Dersego provides your sales team with proven frameworks, templates, and tools to create consistent, high-converting messaging. We help align your entire team around messaging that works, reducing the time spent on content creation and increasing conversion rates.",
    },
    {
      question: "Do you integrate with my CRM?",
      answer:
        "Yes! We integrate with major CRM platforms including HubSpot, Salesforce, and Zoho. Our integrations allow you to sync contact data, track message performance, and automate follow-up sequences based on engagement.",
    },
    {
      question: "What's included in the free trial?",
      answer:
        "Our 14-day free trial includes full access to all features in your chosen plan. You can explore our messaging templates, test integrations, and see how our platform can improve your conversion rates - no credit card required.",
    },
    {
      question: "Can I change plans later?",
      answer:
        "You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments. Our team is always available to help you find the right plan for your needs.",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "All plans include email support with response times within 24 hours. Professional plans get priority support, and Enterprise customers receive a dedicated success manager plus 24/7 priority support for critical issues.",
    },
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1A1A3F] mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Got questions? We've got answers. If you can't find what you're looking for, feel free to reach out to our
            team.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full bg-white rounded-lg p-6 text-left shadow-sm hover:shadow-md transition-shadow"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-[#1A1A3F] pr-4">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="text-[#FF7733] flex-shrink-0" size={20} />
                  ) : (
                    <ChevronDown className="text-[#FF7733] flex-shrink-0" size={20} />
                  )}
                </div>
                {openIndex === index && <div className="mt-4 text-gray-600 leading-relaxed">{faq.answer}</div>}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a href="https://salescentri.com/contact" target="_blank" rel="noopener noreferrer">
            <Button className="btn-primary">
              <span className="text-black">Contact Our Team</span>
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}

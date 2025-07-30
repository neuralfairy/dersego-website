import type { Metadata } from "next"
import { PricingHero } from "@/components/pricing/pricing-hero"
import { PricingTable } from "@/components/pricing/pricing-table"
import { PricingFAQ } from "@/components/pricing/pricing-faq"

export const metadata: Metadata = {
  title: "Pricing - Dersego Solutions",
  description:
    "Transparent pricing for our messaging strategy platform. Choose from Starter ($29/mo), Professional ($89/mo), or Enterprise (Custom) plans.",
}

export default function PricingPage() {
  return (
    <div>
      <PricingHero />
      <PricingTable />
      <PricingFAQ />
    </div>
  )
}

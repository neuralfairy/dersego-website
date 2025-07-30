import type { Metadata } from "next"
import { FeaturesHero } from "@/components/features/features-hero"
import { InteractiveFeatures } from "@/components/features/interactive-features"
import { IntegrationDemos } from "@/components/features/integration-demos"
import { StickyDemo } from "@/components/features/sticky-demo"

export const metadata: Metadata = {
  title: "Features - Dersego Solutions",
  description:
    "Explore our comprehensive messaging strategy features including brand positioning, sales copy frameworks, A/B testing dashboards, and CRM integrations.",
}

export default function FeaturesPage() {
  return (
    <div>
      <FeaturesHero />
      <InteractiveFeatures />
      <IntegrationDemos />
      <StickyDemo />
    </div>
  )
}

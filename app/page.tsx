import { HeroSection } from "@/components/home/hero-section"
import { FeaturesPreview } from "@/components/home/features-preview"
import { ClientLogos } from "@/components/home/client-logos"
import { TestimonialsCarousel } from "@/components/home/testimonials-carousel"
import { ROICalculatorTeaser } from "@/components/home/roi-calculator-teaser"

export default function HomePage() {
  return (
    <div className="animate-fade-in">
      <HeroSection />
      <FeaturesPreview />
      <ClientLogos />
      <TestimonialsCarousel />
      <ROICalculatorTeaser />
    </div>
  )
}

import { Button } from "@/components/ui/button"
import { Calculator, TrendingUp, DollarSign } from "lucide-react"

export function ROICalculatorTeaser() {
  return (
    <section className="section-padding bg-gradient-to-r from-[#FF7733]/10 to-[#1A1A3F]/10">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#1A1A3F] mb-6">Calculate Your Messaging ROI</h2>
            <p className="text-xl text-gray-600 mb-8">
              See how much revenue you could generate with optimized messaging. Our calculator shows the potential
              impact on your bottom line.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#FF7733]/20 rounded-full flex items-center justify-center">
                  <TrendingUp className="text-[#FF7733]" size={16} />
                </div>
                <span className="text-gray-700">Average 40% increase in conversion rates</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#FF7733]/20 rounded-full flex items-center justify-center">
                  <DollarSign className="text-[#FF7733]" size={16} />
                </div>
                <span className="text-gray-700">ROI typically seen within 90 days</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#FF7733]/20 rounded-full flex items-center justify-center">
                  <Calculator className="text-[#FF7733]" size={16} />
                </div>
                <span className="text-gray-700">Personalized calculations for your business</span>
              </div>
            </div>

            <a
              href="https://salescentri.com/solutions/use-case-navigator/recommendations"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="btn-primary">
                <span className="text-black">See Your ROI</span>
              </Button>
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-[#1A1A3F] mb-2">Quick ROI Preview</h3>
              <p className="text-gray-600">Based on average client results</p>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-700">Current Monthly Revenue</span>
                <span className="font-semibold text-[#1A1A3F]">$50,000</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-700">Conversion Rate Increase</span>
                <span className="font-semibold text-green-600">+40%</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-[#FF7733]/10 rounded-lg border-2 border-[#FF7733]/20">
                <span className="text-gray-700 font-medium">Projected New Revenue</span>
                <span className="font-bold text-[#FF7733] text-xl">$70,000</span>
              </div>
              <div className="text-center pt-4">
                <p className="text-sm text-gray-600">
                  That's an additional <span className="font-semibold text-[#FF7733]">$240,000</span> annually
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

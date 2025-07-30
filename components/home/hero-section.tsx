import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="gradient-bg text-white section-padding">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Craft Messaging That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                Converts
              </span>
            </h1>
            <p className="text-xl mb-8 text-gray-200 leading-relaxed">
              We help sales teams & agencies speak with clarity and close with confidence. Transform your messaging
              strategy and watch your conversion rates soar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://salescentri.com/get-started/free-trial" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-[#1A1A3F] hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center">
                  <span className="text-black">Start Free Trial</span>
                  <ArrowRight className="ml-2 text-black" size={20} />
                </Button>
              </a>
              <a
                href="https://salescentri.com/solutions/use-case-navigator/demo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="btn-secondary border-white text-white hover:bg-white hover:text-[#1A1A3F] py-4 px-8 flex items-center">
                  <Play className="mr-2" size={20} />
                  <span className="hover:text-black">Watch Demo</span>
                </Button>
              </a>
            </div>
            <div className="mt-8 flex items-center space-x-6 text-sm">
              <div className="flex items-center">
                <span className="text-green-300 mr-2">✓</span>
                No credit card required
              </div>
              <div className="flex items-center">
                <span className="text-green-300 mr-2">✓</span>
                14-day free trial
              </div>
              <div className="flex items-center">
                <span className="text-green-300 mr-2">✓</span>
                Cancel anytime
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-4">
                <div className="h-4 bg-white/20 rounded w-3/4"></div>
                <div className="h-4 bg-white/20 rounded w-1/2"></div>
                <div className="h-4 bg-white/20 rounded w-5/6"></div>
                <div className="h-20 bg-gradient-to-r from-[#FF7733]/20 to-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-white/80">Messaging Dashboard Preview</span>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#FF7733] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-2xl">ROI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

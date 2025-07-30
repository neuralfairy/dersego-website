import { Button } from "@/components/ui/button"

export function FeaturesHero() {
  return (
    <section className="section-padding bg-gradient-to-r from-[#1A1A3F] to-[#FF7733] text-white">
      <div className="container-max text-center">
        <h1 className="text-5xl font-bold mb-6">Powerful Features for Messaging Success</h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-200">
          Everything you need to create, test, and optimize messaging that converts. From brand positioning to sales
          copy frameworks, we've got you covered.
        </p>
        <a href="https://salescentri.com/get-started/book-demo" target="_blank" rel="noopener noreferrer">
          <Button className="bg-white text-[#1A1A3F] hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg">
            <span className="text-black">Book Demo</span>
          </Button>
        </a>
      </div>
    </section>
  )
}

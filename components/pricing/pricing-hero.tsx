export function PricingHero() {
  return (
    <section className="section-padding bg-gradient-to-r from-[#1A1A3F] to-[#FF7733] text-white">
      <div className="container-max text-center">
        <h1 className="text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-200">
          Choose the plan that fits your needs. All plans include our core messaging tools, with advanced features and
          support as you scale.
        </p>
        <div className="flex justify-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-1 flex">
            <button className="px-6 py-2 rounded-md bg-white text-[#1A1A3F] font-medium">Monthly</button>
            <button className="px-6 py-2 rounded-md text-white font-medium">Annual (Save 20%)</button>
          </div>
        </div>
      </div>
    </section>
  )
}

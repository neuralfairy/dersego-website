"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function StickyDemo() {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsSticky(scrollPosition > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <section className="section-padding bg-[#1A1A3F] text-white">
        <div className="container-max text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Messaging?</h2>
          <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Join thousands of companies that have already improved their conversion rates with our messaging platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://salescentri.com/get-started/book-demo" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#FF7733] hover:bg-[#e66629] text-white font-semibold py-4 px-8 rounded-lg">
                <span className="text-black">Book Demo</span>
              </Button>
            </a>
            <a href="https://salescentri.com/get-started/free-trial" target="_blank" rel="noopener noreferrer">
              <Button className="btn-secondary border-white text-white hover:bg-white hover:text-[#1A1A3F] py-4 px-8">
                <span className="hover:text-black">Start Free Trial</span>
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Sticky CTA */}
      <div
        className={`fixed bottom-0 left-0 right-0 bg-[#FF7733] text-white p-4 shadow-lg transition-transform duration-300 z-40 ${
          isSticky ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="container-max flex items-center justify-between">
          <div>
            <p className="font-semibold">Ready to get started?</p>
            <p className="text-sm text-orange-100">Book a demo and see the platform in action</p>
          </div>
          <a href="https://salescentri.com/get-started/book-demo" target="_blank" rel="noopener noreferrer">
            <Button className="bg-white text-[#FF7733] hover:bg-gray-100 font-semibold">
              <span className="text-black">Book Demo</span>
            </Button>
          </a>
        </div>
      </div>
    </>
  )
}

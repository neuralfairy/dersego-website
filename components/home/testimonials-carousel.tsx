"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "VP of Sales, TechCorp",
      content:
        "Dersego transformed our messaging strategy completely. Our conversion rates increased by 40% in just 3 months.",
      rating: 5,
      company: "TechCorp",
    },
    {
      name: "Michael Chen",
      title: "Marketing Director, GrowthCo",
      content:
        "The frameworks and templates provided by Dersego are game-changing. Our sales team finally has consistent, effective messaging.",
      rating: 5,
      company: "GrowthCo",
    },
    {
      name: "Emily Rodriguez",
      title: "Founder, StartupXYZ",
      content:
        "Working with Dersego was the best investment we made. Their messaging strategy helped us close our Series A funding.",
      rating: 5,
      company: "StartupXYZ",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
    }, 5000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
  }

  return (
    <section className="section-padding bg-[#1A1A3F] text-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-300">
            Don't just take our word for it - hear from companies that have transformed their messaging
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <blockquote className="text-xl mb-6 italic">"{testimonials[currentIndex].content}"</blockquote>
              <div>
                <p className="font-semibold text-lg">{testimonials[currentIndex].name}</p>
                <p className="text-gray-300">{testimonials[currentIndex].title}</p>
                <p className="text-[#FF7733] font-medium">{testimonials[currentIndex].company}</p>
              </div>
            </div>
          </div>

          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-[#FF7733]" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

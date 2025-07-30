"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true)
        setHasShown(true)
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave)
    return () => document.removeEventListener("mouseleave", handleMouseLeave)
  }, [hasShown])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative animate-fade-in">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X size={20} />
        </button>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-[#1A1A3F] mb-4">Wait! Don't Leave Yet</h3>
          <p className="text-gray-600 mb-6">Want to see how our strategy can boost your messaging ROI?</p>
          <a
            href="https://salescentri.com/contact/sales-inquiry/request-quote"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="btn-primary w-full mb-4">
              <span className="text-white">Get Free Audit</span>
            </Button>
          </a>
          <button onClick={() => setIsVisible(false)} className="text-gray-500 text-sm hover:text-gray-700">
            No thanks, I'll pass
          </button>
        </div>
      </div>
    </div>
  )
}

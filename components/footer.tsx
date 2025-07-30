import Link from "next/link"
import { MapPin, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1A1A3F] text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-[#FF7733] to-white rounded-lg flex items-center justify-center">
                <span className="text-[#1A1A3F] font-bold text-xl">D</span>
              </div>
              <span className="text-2xl font-bold">Dersego Solutions</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              We help sales teams & agencies speak with clarity and close with confidence through expert messaging
              strategy and optimization.
            </p>
            <div className="flex items-center space-x-2 text-gray-300 mb-2">
              <MapPin size={16} />
              <span>Atlanta, Georgia</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300 mb-2">
              <Mail size={16} />
              <span>hello@dersego.com</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <Phone size={16} />
              <span>(404) 555-0123</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="text-gray-300 hover:text-[#FF7733] transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-300 hover:text-[#FF7733] transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#FF7733] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-[#FF7733] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-[#FF7733] transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/resources" className="text-gray-300 hover:text-[#FF7733] transition-colors">
                  Free Guides
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-300 hover:text-[#FF7733] transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/webinars" className="text-gray-300 hover:text-[#FF7733] transition-colors">
                  Webinars
                </Link>
              </li>
              <li>
                <Link href="/templates" className="text-gray-300 hover:text-[#FF7733] transition-colors">
                  Templates
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 mb-4 md:mb-0">
              <a
                href="https://salescentri.com/company/partners-affiliates"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FF7733] transition-colors"
              >
                Powered by Sales Intelligence Platform
              </a>
            </p>
            <ul className="flex flex-wrap gap-4 text-sm text-gray-300">
              <li>
                <Link href="/privacy-policy" className="hover:text-[#FF7733] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-[#FF7733] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#FF7733] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-center mt-4 text-gray-400 text-sm">
            <p>&copy; 2024 Dersego Solutions. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

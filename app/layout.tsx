import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ExitIntentPopup } from "@/components/exit-intent-popup"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dersego Solutions - Craft Messaging That Converts",
  description:
    "We help sales teams & agencies speak with clarity and close with confidence. Expert messaging strategy and optimization for B2B companies in Atlanta.",
  keywords: "messaging strategy, messaging optimization, brand communication, conversion strategy, B2B sales tools",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ExitIntentPopup />
      </body>
    </html>
  )
}

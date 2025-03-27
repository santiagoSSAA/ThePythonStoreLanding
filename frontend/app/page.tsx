import React from "react"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { TechStack } from "@/components/tech-stack"
import { Problem } from "@/components/problem"
import { TwitterBanner } from "@/components/twitter-banner"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"
import { FloatingNav } from "@/components/floating-nav"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* Barra de progreso de scroll */}
      <ScrollProgress />

      {/* Navegación flotante */}
      <FloatingNav />

      {/* Header */}
      <header className="bg-black py-4 border-b border-gray-800">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-[#306998]">ThePythonStore</div>
            <span className="ml-2 text-xs bg-[#306998]/20 text-[#306998] px-2 py-1 rounded">Beta</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <Hero />

      {/* Main content in cards */}
      <div className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <Problem />
            </div>
            <div className="md:w-1/2">
              <Features />
            </div>
          </div>
        </div>
      </div>

      {/* Twitter Banner */}
      <TwitterBanner />

      {/* Tech Stack */}
      <TechStack />

      {/* Footer */}
      <Footer />
    </main>
  )
}


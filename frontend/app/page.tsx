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
    <main className="min-h-screen bg-[#121212] text-white relative">
      {/* Barra de progreso de scroll */}
      <ScrollProgress />

      {/* Navegación flotante */}
      <FloatingNav />

      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-[#306998] font-bold text-2xl">ThePythonStore</span>
          <span className="text-xs bg-[#306998]/20 text-[#306998] px-2 py-1 rounded">Beta</span>
        </div>
        <div className="flex gap-4">
          <a
            href="https://github.com/pidge-ssaa/thepythonstore"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md flex items-center text-sm"
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"
              />
            </svg>
            GitHub
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <Hero />

      {/* Contenido principal en un diseño de tarjetas horizontales */}
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

      {/* Twitter Banner - Prominente */}
      <TwitterBanner />

      {/* Tech Stack con diseño compacto */}
      <TechStack />

      {/* Footer */}
      <Footer />
    </main>
  )
}


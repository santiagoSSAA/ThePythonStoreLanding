"use client"

import { X } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-[#306998] font-bold text-xl mb-2">ThePythonStore</div>
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Space Capybara (Santiago)</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="mb-2">
              <a
                href="https://twitter.com/pidge_ssaa"
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-gray-400 hover:text-white transition-colors group"
              >
                <div className="p-2 rounded-full bg-gray-800/50 hover:bg-black transition-colors border border-gray-700/30 hover:border-gray-600/60">
                  <X className="w-5 h-5" />
                </div>
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap shadow-lg">
                  Follow on X
                </span>
              </a>
            </div>
            <p className="text-gray-500 text-xs">Built with Next.js and TailwindCSS</p>
          </div>
        </div>
      </div>
    </footer>
  )
}


"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { useState, useEffect } from "react"

// Typewriter effect component
function TypewriterText({ text, delay = 100 }: { text: string; delay?: number }) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, delay)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, delay, text])

  return <span>{displayText}<span className="animate-pulse">|</span></span>
}

export function Hero() {
  const redirectToTwitter = () => {
    window.open("https://twitter.com/pidge_ssaa", "_blank")
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-80 z-0"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            E-commerce. <br/>
            Simplified. <br/>
            <span className="text-[#306998]">
              <TypewriterText text="Pythonic." />
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl text-gray-300 mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            An e-commerce backend designed for developers, built with Python, Django, and modern best practices.
          </motion.p>

          <motion.div
            className="mt-10 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button
              onClick={redirectToTwitter}
              className="relative group overflow-hidden px-8 py-6 text-lg font-medium text-white rounded-xl bg-black hover:bg-black/90 border border-zinc-800 hover:border-zinc-700 transition-all duration-300"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/5 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
              <span className="relative z-10 flex items-center">
                <X className="w-6 h-6 mr-3" strokeWidth={2} />
                <span>Request Access on <span className="font-semibold">X</span></span>
              </span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}


"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronUp } from "lucide-react"

export function FloatingNav() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end"
        >
          <div className="mb-4 bg-gray-800/80 backdrop-blur-sm rounded-full p-2 shadow-lg">
            <button
              onClick={() => scrollToSection("features")}
              className="block w-10 h-10 rounded-full bg-gray-700 text-white flex items-center justify-center mb-2 hover:bg-[#306998] transition-colors"
              aria-label="Go to features"
            >
              <span className="text-xs">🔍</span>
            </button>
            <button
              onClick={() => scrollToSection("twitter")}
              className="block w-10 h-10 rounded-full bg-gray-700 text-white flex items-center justify-center hover:bg-[#306998] transition-colors"
              aria-label="Follow on Twitter"
            >
              <span className="text-xs">🐦</span>
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-[#306998] text-white flex items-center justify-center shadow-lg hover:bg-[#306998]/80 transition-colors"
            aria-label="Volver arriba"
          >
            <ChevronUp className="w-6 h-6" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}


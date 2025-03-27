"use client"

import { motion } from "framer-motion"
import { X } from "lucide-react"

export function TwitterBanner() {
  return (
    <motion.section
      id="twitter"
      className="bg-[#306998] py-10 relative overflow-hidden my-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
          <div className="mb-6 md:mb-0 md:mr-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Follow the development on X!</h2>
            <p className="text-white/80 max-w-md">
              Stay up to date with the latest updates, features, and releases of ThePythonStore.
            </p>
          </div>

          <a
            href="https://twitter.com/pidge_ssaa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-black/90 transition-colors border border-white/20"
          >
            <X className="w-5 h-5 mr-2" />
            Follow @pidge_ssaa
          </a>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-0 left-0 w-20 h-20 md:w-40 md:h-40 rounded-full bg-white"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 md:w-64 md:h-64 rounded-full bg-white"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 md:w-24 md:h-24 rounded-full bg-white"></div>
        </div>
      </div>
    </motion.section>
  )
}


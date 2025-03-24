"use client"

import { motion } from "framer-motion"

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
            className="inline-flex items-center px-6 py-3 bg-white text-[#306998] rounded-full font-medium hover:bg-white/90 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
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


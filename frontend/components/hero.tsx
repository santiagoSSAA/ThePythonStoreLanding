"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { useRepoModal } from "@/hooks/use-repo-modal"

// Typewriter effect component
function TypewriterEffect({ phrases }: { phrases: string[] }) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(80)

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex]

    const timer = setTimeout(() => {
      // If deleting
      if (isDeleting) {
        setCurrentText(currentPhrase.substring(0, currentText.length - 1))
        setTypingSpeed(30)

        // When deleted completely, start typing next phrase
        if (currentText === "") {
          setIsDeleting(false)
          setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length)
          setTypingSpeed(80)
        }
      }
      // If typing
      else {
        setCurrentText(currentPhrase.substring(0, currentText.length + 1))

        // When typed completely, pause then start deleting
        if (currentText === currentPhrase) {
          setTypingSpeed(2000)
          setTimeout(() => setIsDeleting(true), 2000)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [currentText, currentPhraseIndex, isDeleting, phrases, typingSpeed])

  return (
    <div className="min-h-[180px] flex items-center">
      <div>
        <span className="text-green-400">{currentText}</span>
        <span className={`ml-1 inline-block w-2 h-5 bg-[#306998] ${isDeleting ? "opacity-50" : "opacity-100"}`}></span>
      </div>
    </div>
  )
}

export function Hero() {
  const { openModal } = useRepoModal()

  return (
    <section className="container mx-auto px-4 py-16 md:py-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          E-commerce. <span className="text-[#306998]">Simplified.</span> Pythonic.
        </motion.h1>

        <motion.p
          className="text-gray-400 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          An e-commerce backend designed for developers, built with Python, Django, and modern best practices.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gray-800 rounded-lg overflow-hidden shadow-2xl max-w-3xl mx-auto"
        >
          <div className="bg-gray-900 px-4 py-2 flex items-center">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-gray-400 text-sm ml-4">python_store_api.py</div>
          </div>
          <div className="p-6 font-mono text-sm relative bg-gray-900">
            {/* Terminal with typing effect */}
            <div className="overflow-hidden">
              <TypewriterEffect
                phrases={[
                  "# Build your e-commerce backend in minutes, not months",
                  "# Secure, scalable, and Pythonic by design",
                  "# 70% less code than traditional e-commerce solutions",
                  "# Join 300+ developers already using ThePythonStore",
                  "# REST API + GraphQL + Webhooks, all batteries included",
                ]}
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button
            className="bg-[#306998] hover:bg-[#306998]/90 text-white px-8 py-6 text-lg group relative overflow-hidden"
            onClick={openModal}
          >
            <span className="relative z-10 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                />
              </svg>
              Request Repo Access
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#306998]/0 via-[#306998]/30 to-[#306998]/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
          </Button>
          <Button
            variant="outline"
            className="border-[#306998] text-[#306998] hover:bg-[#306998] hover:text-white px-8 py-6 text-lg"
            onClick={() => window.open("https://twitter.com/pidge_ssaa", "_blank")}
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
            Follow for Updates 🐍
          </Button>
        </motion.div>
      </div>
    </section>
  )
}


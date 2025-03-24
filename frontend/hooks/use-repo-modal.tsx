"use client"

import type React from "react"

import { create } from "zustand"
import { X, Sparkles, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

interface RepoModalStore {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

export const useRepoModal = create<RepoModalStore>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}))

export const RepoModal = () => {
  const { isOpen, closeModal } = useRepoModal()
  const [sparklePosition, setSparklePosition] = useState({ x: 0, y: 0 })
  const [showSparkle, setShowSparkle] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setSparklePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
    setShowSparkle(true)
  }

  const handleMouseLeave = () => {
    setShowSparkle(false)
  }

  const redirectToTwitter = () => {
    window.open("https://twitter.com/pidge_ssaa", "_blank")
    closeModal()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={closeModal}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 15 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 rounded-xl p-6 md:p-8 w-[90%] max-w-md z-50 shadow-2xl border border-gray-800 max-h-[90vh] overflow-auto"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Close button */}
            <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-white">
              <X size={20} />
            </button>

            {/* Sparkle effect */}
            {showSparkle && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute pointer-events-none"
                style={{ left: sparklePosition.x, top: sparklePosition.y }}
              >
                <Sparkles className="text-[#306998] h-6 w-6" />
              </motion.div>
            )}

            {/* Content */}
            <div className="text-center">
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-4 mx-auto w-16 h-16 bg-[#306998]/20 rounded-full flex items-center justify-center"
              >
                <MessageSquare className="text-[#306998] h-8 w-8" />
              </motion.div>

              <motion.h3
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xl font-bold mb-2"
              >
                Exclusive Repository Access
              </motion.h3>

              <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-gray-300 mb-6"
              >
                ThePythonStore repository is currently private. Interested in getting access? Send me a DM on X
                (Twitter) and let's chat about your project!
              </motion.p>

              <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
                <Button
                  className="bg-[#306998] hover:bg-[#306998]/80 text-white w-full py-6 group relative overflow-hidden"
                  onClick={redirectToTwitter}
                >
                  <span className="relative z-10 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                    Message @pidge_ssaa
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#306998]/0 via-[#306998]/30 to-[#306998]/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                </Button>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-gray-500 text-xs mt-4"
              >
                Limited access available for serious projects and collaborators
              </motion.p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}


"use client"

import { motion } from "framer-motion"

export function TechStack() {
  const technologies = [
    { name: "Python", icon: "🐍" },
    { name: "Django", icon: "🎯" },
    { name: "Django REST", icon: "🔌" },
    { name: "PostgreSQL", icon: "🐘" },
  ]

  const stats = [
    { value: "342", label: "Stars" },
    { value: "87", label: "Forks" },
    { value: "24", label: "Contributors" },
  ]

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="mb-8 md:mb-0 md:mr-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Tech Stack</h2>
            <p className="text-gray-400 max-w-md">
              Built with modern and robust technologies to ensure performance, security, and scalability.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-4 gap-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl mb-1">{tech.icon}</div>
                <div className="text-xs md:text-sm">{tech.name}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="mt-8 bg-gray-800/50 p-4 rounded-lg border border-gray-700 flex justify-around"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-[#306998]">{stat.value}</div>
              <div className="text-gray-400 text-xs">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export function Problem() {
  const problems = [
    {
      title: "E-commerce backends are complex",
      description:
        "Building a robust e-commerce system requires handling complex business logic, payment processing, inventory management, and security concerns.",
    },
    {
      title: "Existing solutions lack developer experience",
      description:
        "Many e-commerce platforms prioritize non-technical users, making customization difficult for developers who need fine-grained control.",
    },
    {
      title: "The Pythonic solution",
      description:
        "ThePythonStore provides a clean, Pythonic API for e-commerce operations, following Python's philosophy of readability and simplicity.",
    },
  ]

  return (
    <section id="problem" className="py-8">
      <motion.h2
        className="text-2xl md:text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        The Problem
      </motion.h2>

      <div className="space-y-4">
        {problems.map((problem, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-[#306998]">{problem.title}</h3>
                <p className="text-gray-300 text-sm">{problem.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}


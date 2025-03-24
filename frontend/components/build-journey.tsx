"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

function TwitterFeed() {
  return (
    <div>
      <p>Twitter feed is currently unavailable. Placeholder for future implementation.</p>
    </div>
  )
}

export function BuildJourney() {
  const [updates] = useState([
    {
      date: "2023-12-15",
      title: "JWT Authentication Implemented",
      description: "Added secure JWT authentication for API endpoints with role-based permissions.",
    },
    {
      date: "2023-12-01",
      title: "Order Management System",
      description: "Completed the core order management system with status tracking and webhooks.",
    },
    {
      date: "2023-11-15",
      title: "Initial Repository Setup",
      description: "Created the GitHub repository and set up the basic project structure.",
    },
  ])

  const milestones = [
    { id: 1, name: "Project Inception", date: "November 2023", completed: true },
    { id: 2, name: "Core API Development", date: "December 2023", completed: true },
    { id: 3, name: "Testing & Documentation", date: "January 2024", completed: true },
    { id: 4, name: "Beta Release", date: "February 2024", completed: true },
    { id: 5, name: "Production Release", date: "March 2024", completed: false },
  ]

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Build Journey</h2>

        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4">Progress Timeline</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 h-full w-px bg-gray-700 transform -translate-x-1/2"></div>

            {/* Milestones */}
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={milestone.id} className="relative">
                  <div className={`flex items-center mb-2 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                    <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-8 text-right" : "md:pl-8"}`}>
                      <h4 className="font-semibold">{milestone.name}</h4>
                      <p className="text-gray-400 text-sm">{milestone.date}</p>
                    </div>
                    <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-6 h-6 rounded-full bg-gray-800 border-2 border-gray-700">
                      <div
                        className={`w-3 h-3 rounded-full ${milestone.completed ? "bg-[#306998]" : "bg-gray-600"}`}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Latest Updates</h3>
            <div className="space-y-4">
              {updates.map((update, index) => (
                <Card key={index} className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-4">
                    <p className="text-xs text-gray-400">{update.date}</p>
                    <h4 className="font-semibold text-[#306998]">{update.title}</h4>
                    <p className="text-sm text-gray-300">{update.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Twitter Updates</h3>
            <TwitterFeed />
          </div>
        </div>
      </div>
    </section>
  )
}


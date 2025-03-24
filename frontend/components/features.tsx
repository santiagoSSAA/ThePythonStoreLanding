"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function Features() {
  const features = [
    {
      id: "orders",
      icon: "📦",
      title: "Order Management",
      description: "Complete order lifecycle management with status tracking and event webhooks.",
      code: "order.update_status('completed')",
    },
    {
      id: "auth",
      icon: "🔒",
      title: "JWT Authentication",
      description: "Secure API access with JWT tokens and role-based permissions to protect your data.",
      code: "@permission_classes([IsAuthenticated])",
    },
    {
      id: "inventory",
      icon: "📊",
      title: "Inventory Control",
      description: "Real-time inventory tracking with alerts and automated reordering capabilities.",
      code: "product.decrease_stock(quantity)",
    },
    {
      id: "testing",
      icon: "🧪",
      title: "Testing Suite",
      description: "Comprehensive tools for unit, integration, and performance testing of your application.",
      code: "@pytest.mark.django_db",
    },
  ]

  return (
    <section id="features" className="py-8">
      <motion.h2
        className="text-2xl md:text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Features
      </motion.h2>

      <Tabs defaultValue="orders" className="w-full">
        <TabsList className="grid grid-cols-4 mb-4">
          {features.map((feature) => (
            <TabsTrigger
              key={feature.id}
              value={feature.id}
              className="text-xs p-1 data-[state=active]:bg-[#306998] data-[state=active]:text-white"
            >
              <span className="block text-center">
                <span className="block text-lg mb-1">{feature.icon}</span>
                <span className="hidden md:block">{feature.title.split(" ")[0]}</span>
              </span>
            </TabsTrigger>
          ))}
        </TabsList>

        {features.map((feature) => (
          <TabsContent key={feature.id} value={feature.id} className="mt-0">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <Card className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-300 text-sm mb-3">{feature.description}</p>
                  <div className="bg-gray-900 p-2 rounded font-mono text-xs text-[#306998]">{feature.code}</div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  )
}


"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ApiPlayground() {
  const [endpoint, setEndpoint] = useState("/api/products")
  const [method, setMethod] = useState("GET")
  const [requestBody, setRequestBody] = useState('{\n  "query": "t-shirt",\n  "limit": 10\n}')
  const [response, setResponse] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = () => {
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      let sampleResponse = ""

      if (endpoint === "/api/products" && method === "GET") {
        sampleResponse = JSON.stringify(
          {
            count: 2,
            next: null,
            previous: null,
            results: [
              {
                id: 1,
                name: "Python Logo T-Shirt",
                price: "24.99",
                stock: 42,
                description: "Show your Python love with this comfortable cotton t-shirt",
                created_at: "2023-12-01T12:00:00Z",
              },
              {
                id: 2,
                name: "Django Mug",
                price: "14.99",
                stock: 28,
                description: "Start your day with Django - ceramic mug with Django logo",
                created_at: "2023-12-05T14:30:00Z",
              },
            ],
          },
          null,
          2,
        )
      } else if (endpoint === "/api/orders" && method === "GET") {
        sampleResponse = JSON.stringify(
          {
            count: 1,
            next: null,
            previous: null,
            results: [
              {
                id: 1,
                status: "completed",
                total: "39.98",
                items: [
                  {
                    product_id: 1,
                    quantity: 1,
                    price: "24.99",
                  },
                  {
                    product_id: 2,
                    quantity: 1,
                    price: "14.99",
                  },
                ],
                created_at: "2023-12-10T09:15:00Z",
              },
            ],
          },
          null,
          2,
        )
      } else {
        sampleResponse = JSON.stringify(
          {
            detail: "Endpoint simulation not implemented",
          },
          null,
          2,
        )
      }

      setResponse(sampleResponse)
      setLoading(false)
    }, 1000)
  }

  const endpoints = [
    { value: "/api/products", label: "Products" },
    { value: "/api/orders", label: "Orders" },
    { value: "/api/users", label: "Users" },
    { value: "/api/auth/token", label: "Auth" },
  ]

  const methods = ["GET", "POST", "PUT", "DELETE"]

  return (
    <section className="container mx-auto px-4 py-16 md:py-24 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">API Playground</h2>
        <p className="text-gray-300 mb-8">
          Test our API endpoints directly in your browser. Experiment with different requests and see the responses in
          real-time.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-2">Endpoint</label>
              <Tabs value={endpoint} onValueChange={setEndpoint} className="w-full">
                <TabsList className="w-full bg-gray-900">
                  {endpoints.map((ep) => (
                    <TabsTrigger
                      key={ep.value}
                      value={ep.value}
                      className="flex-1 data-[state=active]:bg-[#306998] data-[state=active]:text-white"
                    >
                      {ep.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-2">Method</label>
              <div className="flex space-x-2">
                {methods.map((m) => (
                  <Button
                    key={m}
                    variant={method === m ? "default" : "outline"}
                    className={method === m ? "bg-[#306998] hover:bg-[#306998]/90" : ""}
                    onClick={() => setMethod(m)}
                  >
                    {m}
                  </Button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-2">Request Body</label>
              <textarea
                className="w-full h-40 bg-gray-900 text-gray-300 p-3 rounded font-mono text-sm"
                value={requestBody}
                onChange={(e) => setRequestBody(e.target.value)}
              />
            </div>

            <Button className="w-full bg-[#306998] hover:bg-[#306998]/90" onClick={handleSubmit} disabled={loading}>
              {loading ? "Sending..." : "Send Request"}
            </Button>
          </div>

          <div className="bg-gray-800 rounded-lg p-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">Response</label>
            <div className="w-full h-[calc(100%-2rem)] bg-gray-900 text-gray-300 p-3 rounded font-mono text-sm overflow-auto">
              {response ? <pre>{response}</pre> : <div className="text-gray-500 italic">Response will appear here</div>}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


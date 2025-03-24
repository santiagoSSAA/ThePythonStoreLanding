"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Copy } from "lucide-react"

export function Terminal() {
  const [text, setText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const fullText = `# Django API request example
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_orders(request):
    """
    Retrieve all orders for the authenticated user.
    """
    orders = Order.objects.filter(user=request.user)
    serializer = OrderSerializer(orders, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)`

  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1))
      }, 30)
      return () => clearTimeout(timeout)
    }
  }, [text])

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(fullText)
  }

  return (
    <div className="w-full max-w-3xl mx-auto rounded-lg overflow-hidden shadow-2xl">
      <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-gray-400 text-sm">python_store_api.py</div>
        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white" onClick={copyToClipboard}>
          <Copy className="h-4 w-4" />
        </Button>
      </div>
      <div className="bg-gray-900 p-4 font-mono text-sm md:text-base overflow-x-auto">
        <pre className="text-gray-300">
          {text}
          {showCursor && <span className="text-[#306998] animate-pulse">▌</span>}
        </pre>
      </div>
    </div>
  )
}


"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function TwitterFeed() {
  const [tweets] = useState([
    {
      id: "1",
      content:
        "Just implemented JWT authentication in ThePythonStore! 🔒 Security first, always. #Python #Django #WebDev",
      date: "2 days ago",
      likes: 24,
      retweets: 8,
    },
    {
      id: "2",
      content:
        "Working on the inventory management system. Real-time stock updates with Django Channels coming soon! 📦 #ThePythonStore",
      date: "1 week ago",
      likes: 42,
      retweets: 12,
    },
    {
      id: "3",
      content:
        "ThePythonStore is now in beta! Looking for Python devs to test it out and provide feedback. DM me if interested! 🐍 #OpenSource",
      date: "2 weeks ago",
      likes: 87,
      retweets: 31,
    },
  ])

  const redirectToTwitter = () => {
    window.open("https://twitter.com/pidge_ssaa", "_blank")
  }

  return (
    <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold flex items-center">
          <X className="h-5 w-5 text-white mr-2" />
          <span>@pidge_ssaa</span>
        </h3>
        <Button
          variant="outline"
          size="sm"
          className="text-white border-gray-700 hover:bg-black hover:text-white"
          onClick={redirectToTwitter}
        >
          Follow
        </Button>
      </div>

      <div className="space-y-4">
        {tweets.map((tweet) => (
          <div key={tweet.id} className="border-b border-gray-700 pb-4 last:border-0">
            <p className="text-sm mb-2">{tweet.content}</p>
            <div className="flex justify-between text-xs text-gray-400">
              <span>{tweet.date}</span>
              <div className="flex space-x-4">
                <span>♥ {tweet.likes}</span>
                <span>↺ {tweet.retweets}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Button variant="ghost" className="w-full mt-4 text-gray-300 hover:bg-gray-800" onClick={redirectToTwitter}>
        View more on X
      </Button>
    </div>
  )
}


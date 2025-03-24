"use client"

import { Button } from "@/components/ui/button"
import { LucideGithub, LucideTwitter } from "lucide-react"

export function GitHubCta() {
  const handleClick = () => {
    window.open("https://github.com/pidge-ssaa/thepythonstore", "_blank")
  }

  return (
    <Button onClick={handleClick} className="bg-gray-800 hover:bg-gray-700 text-white">
      <LucideGithub className="mr-2 h-4 w-4" />
      Star on GitHub
    </Button>
  )
}

export function TwitterCta() {
  const handleClick = () => {
    window.open("https://twitter.com/pidge_ssaa", "_blank")
  }

  return (
    <Button onClick={handleClick} className="bg-[#306998] hover:bg-[#306998]/90 text-white">
      <LucideTwitter className="mr-2 h-4 w-4" />
      Follow for Updates 🐍
    </Button>
  )
}


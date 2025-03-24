import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { RepoModal } from "@/hooks/use-repo-modal"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ThePythonStore - E-commerce. Simplified. Pythonic.",
  description: "A developer-first e-commerce backend built with Python, Django, and modern best practices.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <RepoModal />
        </ThemeProvider>
      </body>
    </html>
  )
}


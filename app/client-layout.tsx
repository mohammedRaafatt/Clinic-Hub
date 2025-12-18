"use client"

import type React from "react"

import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Chatbot } from "@/components/chatbot"
import { Suspense } from "react"

export function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <Suspense fallback={null}>
          {children}
          <ScrollToTop />
          <Chatbot />
          <Analytics />
        </Suspense>
      </ThemeProvider>
    </body>
  )
}

export default ClientLayout

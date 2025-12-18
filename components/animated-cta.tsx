"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface AnimatedCTAProps {
  href: string
  children: React.ReactNode
  variant?: "default" | "outline"
}

export function AnimatedCTA({ href, children, variant = "default" }: AnimatedCTAProps) {
  return (
    <Link href={href}>
      <Button
        size="lg"
        variant={variant}
        className="group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg"
      >
        <span className="relative z-10 flex items-center gap-2">
          {children}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
        <div className="absolute inset-0 -z-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </Button>
    </Link>
  )
}

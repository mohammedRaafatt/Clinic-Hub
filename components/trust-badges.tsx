"use client"

import { Shield, Lock, Award, CheckCircle2 } from "lucide-react"
import { Card } from "@/components/ui/card"

const TRUST_ELEMENTS = [
  {
    icon: Shield,
    title: "HIPAA Compliant",
    description: "Your health data is protected",
  },
  {
    icon: Lock,
    title: "Secure Payments",
    description: "256-bit SSL encryption",
  },
  {
    icon: Award,
    title: "Verified Doctors",
    description: "All credentials verified",
  },
  {
    icon: CheckCircle2,
    title: "Quality Assured",
    description: "Top-rated healthcare providers",
  },
]

export function TrustBadges() {
  return (
    <section className="py-12 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {TRUST_ELEMENTS.map((item, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-md transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
              <p className="text-xs text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

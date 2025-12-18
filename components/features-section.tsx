"use client"

import { Search, Calendar, Bell, Shield, Clock, Star } from "lucide-react"
import { Card } from "@/components/ui/card"

const features = [
  {
    icon: Search,
    title: "Smart Search",
    description:
      "Find the perfect doctor by specialty, location, availability, or symptoms with our intelligent search system.",
    color: "text-blue-500",
  },
  {
    icon: Calendar,
    title: "Instant Booking",
    description: "See real-time availability and book appointments instantly without phone calls or waiting.",
    color: "text-green-500",
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description: "Never miss an appointment with automated reminders via email, SMS, and push notifications.",
    color: "text-purple-500",
  },
  {
    icon: Shield,
    title: "Verified Doctors",
    description: "All healthcare providers are thoroughly verified with credentials, licenses, and patient reviews.",
    color: "text-red-500",
  },
  {
    icon: Clock,
    title: "24/7 Access",
    description: "Book appointments anytime, anywhere. Our platform is always available when you need it.",
    color: "text-orange-500",
  },
  {
    icon: Star,
    title: "Patient Reviews",
    description: "Read authentic reviews from real patients to make informed decisions about your healthcare.",
    color: "text-yellow-500",
  },
]

export function FeaturesSection() {
  return (
    <section className="px-4 py-20">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12 text-center animate-in fade-in slide-in-from-top-4 duration-1000">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Why Choose HealthBook?</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Experience healthcare booking reimagined with modern features designed for your convenience
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group border-border bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl animate-in fade-in slide-in-from-bottom-6"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`mb-4 inline-flex rounded-lg bg-secondary p-3 transition-transform group-hover:scale-110 ${feature.color}`}
              >
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">{feature.title}</h3>
              <p className="leading-relaxed text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

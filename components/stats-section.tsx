"use client"

import { Users, Calendar, Award, Clock } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "50,000+",
    label: "Active Patients",
    description: "Trust our platform",
  },
  {
    icon: Award,
    value: "2,500+",
    label: "Verified Doctors",
    description: "Across all specialties",
  },
  {
    icon: Calendar,
    value: "100,000+",
    label: "Appointments Booked",
    description: "Successfully completed",
  },
  {
    icon: Clock,
    value: "< 2 min",
    label: "Average Booking Time",
    description: "Quick and easy",
  },
]

export function StatsSection() {
  return (
    <section className="bg-primary px-4 py-16 text-primary-foreground">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group text-center transition-transform duration-300 hover:scale-105 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-3 flex justify-center">
                <div className="rounded-full bg-primary-foreground/10 p-3 transition-colors group-hover:bg-primary-foreground/20">
                  <stat.icon className="h-8 w-8" />
                </div>
              </div>
              <div className="mb-1 text-3xl font-bold md:text-4xl">{stat.value}</div>
              <div className="mb-1 text-lg font-semibold">{stat.label}</div>
              <div className="text-sm opacity-90">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

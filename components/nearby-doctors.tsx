"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Star, Clock, Navigation } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface NearbyDoctor {
  id: string
  name: string
  specialty: string
  image: string
  rating: number
  distance: string
  availableToday: boolean
  nextAvailable: string
}

const MOCK_NEARBY_DOCTORS: NearbyDoctor[] = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    specialty: "Family Medicine",
    image: "/female-doctor-professional.jpg",
    rating: 4.9,
    distance: "0.8 mi",
    availableToday: true,
    nextAvailable: "Today at 2:00 PM",
  },
  {
    id: "2",
    name: "Dr. Michael Chen",
    specialty: "Internal Medicine",
    image: "/professional-male-doctor.png",
    rating: 4.8,
    distance: "1.2 mi",
    availableToday: true,
    nextAvailable: "Today at 4:30 PM",
  },
  {
    id: "3",
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrics",
    image: "/female-pediatrician.png",
    rating: 5.0,
    distance: "1.5 mi",
    availableToday: false,
    nextAvailable: "Tomorrow at 10:00 AM",
  },
]

export function NearbyDoctors() {
  const [location, setLocation] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const requestLocation = () => {
    setIsLoading(true)
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation("Current Location")
          setIsLoading(false)
        },
        (error) => {
          console.error("Error getting location:", error)
          setLocation("Unable to get location")
          setIsLoading(false)
        },
      )
    }
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8 animate-in fade-in slide-in-from-bottom-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Doctors Near You</h2>
            <p className="text-muted-foreground">Find trusted healthcare providers in your area</p>
          </div>
          <Button onClick={requestLocation} disabled={isLoading} variant="outline" className="gap-2 bg-transparent">
            <Navigation className="h-4 w-4" />
            {isLoading ? "Getting location..." : location || "Use My Location"}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_NEARBY_DOCTORS.map((doctor, index) => (
            <Card
              key={doctor.id}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-48 bg-gradient-to-br from-primary/10 to-secondary/20">
                <Image src={doctor.image || "/placeholder.svg"} alt={doctor.name} fill className="object-cover" />
                {doctor.availableToday && (
                  <div className="absolute top-3 right-3 bg-success text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Available Today
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg mb-1">{doctor.name}</h3>
                <p className="text-sm text-primary font-medium mb-3">{doctor.specialty}</p>

                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-foreground">{doctor.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{doctor.distance}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4 text-sm">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{doctor.nextAvailable}</span>
                </div>

                <Link href={`/doctor/${doctor.id}`}>
                  <Button className="w-full">Book Appointment</Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/search">
            <Button variant="outline" size="lg">
              View All Doctors
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

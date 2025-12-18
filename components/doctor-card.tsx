import { Star, MapPin, Clock, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

export interface Doctor {
  id: string
  name: string
  specialty: string
  rating: number
  reviewCount: number
  location: string
  distance: string
  nextAvailable: string
  image: string
  experience: string
  acceptingNew: boolean
}

interface DoctorCardProps {
  doctor: Doctor
}

export function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-lg">
      <CardContent className="p-6">
        <div className="flex gap-4">
          <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl">
            <Image src={doctor.image || "/placeholder.svg"} alt={doctor.name} fill className="object-cover" />
          </div>

          <div className="flex-1">
            <div className="mb-2 flex items-start justify-between gap-2">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  <Link href={`/doctor/${doctor.id}`} className="hover:text-primary">
                    {doctor.name}
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
              </div>
              {doctor.acceptingNew && (
                <Badge variant="secondary" className="bg-secondary/10 text-secondary">
                  Accepting new
                </Badge>
              )}
            </div>

            <div className="mb-3 flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium text-foreground">{doctor.rating}</span>
              <span className="text-sm text-muted-foreground">({doctor.reviewCount} reviews)</span>
            </div>

            <div className="space-y-1 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>
                  {doctor.location} • {doctor.distance}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{doctor.experience} experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-secondary" />
                <span className="text-secondary">Next available: {doctor.nextAvailable}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="border-t border-border bg-muted/30 p-4">
        <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
          <Link href={`/doctor/${doctor.id}`}>Book Appointment</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

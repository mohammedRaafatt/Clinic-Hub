import { Star, MapPin, Award, GraduationCap, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface DoctorProfileHeaderProps {
  doctor: {
    name: string
    specialty: string
    image: string
    rating: number
    reviewCount: number
    location: string
    experience: string
    education: string
    languages: string[]
    acceptingNew: boolean
  }
}

export function DoctorProfileHeader({ doctor }: DoctorProfileHeaderProps) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 md:p-8">
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="relative h-32 w-32 flex-shrink-0 overflow-hidden rounded-xl md:h-40 md:w-40">
          <Image src={doctor.image || "/placeholder.svg"} alt={doctor.name} fill className="object-cover" />
        </div>

        <div className="flex-1">
          <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
            <div>
              <h1 className="mb-2 text-2xl font-bold text-foreground md:text-3xl">{doctor.name}</h1>
              <p className="text-lg text-muted-foreground">{doctor.specialty}</p>
            </div>
            {doctor.acceptingNew && <Badge className="bg-secondary/10 text-secondary">Accepting New Patients</Badge>}
          </div>

          <div className="mb-4 flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="text-lg font-semibold text-foreground">{doctor.rating}</span>
            </div>
            <span className="text-muted-foreground">({doctor.reviewCount} reviews)</span>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{doctor.location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{doctor.experience} experience</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <GraduationCap className="h-4 w-4" />
              <span>{doctor.education}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Award className="h-4 w-4" />
              <span>Languages: {doctor.languages.join(", ")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

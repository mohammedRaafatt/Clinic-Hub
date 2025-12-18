"use client"

import { Calendar, Clock, MapPin, Video, MoreVertical } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"

export interface Appointment {
  id: string
  doctorName: string
  doctorSpecialty: string
  doctorImage: string
  date: string
  time: string
  location: string
  type: "in-person" | "video"
  status: "upcoming" | "completed" | "cancelled"
}

interface AppointmentCardProps {
  appointment: Appointment
  onCancel?: (id: string) => void
  onReschedule?: (id: string) => void
}

export function AppointmentCard({ appointment, onCancel, onReschedule }: AppointmentCardProps) {
  const statusColors = {
    upcoming: "bg-secondary/10 text-secondary",
    completed: "bg-green-500/10 text-green-700",
    cancelled: "bg-destructive/10 text-destructive",
  }

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex gap-4">
            <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg">
              <Image
                src={appointment.doctorImage || "/placeholder.svg"}
                alt={appointment.doctorName}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-1">
              <div className="mb-2 flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-foreground">{appointment.doctorName}</h3>
                  <p className="text-sm text-muted-foreground">{appointment.doctorSpecialty}</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{appointment.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{appointment.time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  {appointment.type === "video" ? (
                    <>
                      <Video className="h-4 w-4" />
                      <span>Video Consultation</span>
                    </>
                  ) : (
                    <>
                      <MapPin className="h-4 w-4" />
                      <span>{appointment.location}</span>
                    </>
                  )}
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2">
                <Badge className={statusColors[appointment.status]}>
                  {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                </Badge>
              </div>
            </div>
          </div>

          {appointment.status === "upcoming" && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => onReschedule?.(appointment.id)}>Reschedule</DropdownMenuItem>
                <DropdownMenuItem onClick={() => onCancel?.(appointment.id)} className="text-destructive">
                  Cancel
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>

        {appointment.status === "upcoming" && appointment.type === "video" && (
          <div className="mt-4 border-t border-border pt-4">
            <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Video className="mr-2 h-4 w-4" />
              Join Video Call
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

"use client"

import { use } from "react"
import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { DoctorProfileHeader } from "@/components/doctor-profile-header"
import { AvailabilityCalendar } from "@/components/availability-calendar"
import { BookingForm } from "@/components/booking-form"
import { mockDoctorProfiles } from "@/lib/mock-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { notFound } from "next/navigation"

export default function DoctorProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const doctor = mockDoctorProfiles[id]

  const [selectedDate, setSelectedDate] = useState<string>()
  const [selectedTime, setSelectedTime] = useState<string>()

  if (!doctor) {
    notFound()
  }

  const handleSlotSelect = (date: string, time: string) => {
    setSelectedDate(date)
    setSelectedTime(time)
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-6xl space-y-8">
          {/* Doctor Header */}
          <DoctorProfileHeader doctor={doctor} />

          {/* About Section */}
          <Card>
            <CardHeader>
              <CardTitle>About</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">{doctor.about}</p>
              <div>
                <h4 className="mb-3 font-semibold text-foreground">Specializations</h4>
                <div className="flex flex-wrap gap-2">
                  {doctor.specializations.map((spec, index) => (
                    <Badge key={index} variant="secondary">
                      {spec}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Booking Section */}
          <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
            <Card>
              <CardHeader>
                <CardTitle>Book an Appointment</CardTitle>
              </CardHeader>
              <CardContent>
                <AvailabilityCalendar
                  onSlotSelect={handleSlotSelect}
                  selectedDate={selectedDate}
                  selectedTime={selectedTime}
                />
              </CardContent>
            </Card>

            <div>
              <BookingForm doctorName={doctor.name} selectedDate={selectedDate} selectedTime={selectedTime} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

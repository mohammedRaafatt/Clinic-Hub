"use client"

import { CheckCircle2, Calendar, Clock, User, Mail, Phone, MapPin, Download } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface BookingSummaryProps {
  booking: {
    doctor: string
    date: string
    time: string
    patient: string
    email: string
    phone: string
    reason?: string
  }
}

export function BookingSummary({ booking }: BookingSummaryProps) {
  const handleAddToCalendar = () => {
    // Create a simple calendar event
    const event = {
      title: `Doctor Appointment with ${booking.doctor}`,
      description: booking.reason || "Medical appointment",
      start: booking.date,
      duration: "30 minutes",
    }

    // In a real app, this would generate an .ics file or integrate with calendar APIs
    alert("Calendar integration would be implemented here. Event details:\n" + JSON.stringify(event, null, 2))
  }

  const handleDownloadReceipt = () => {
    // In a real app, this would generate a PDF receipt
    alert("Receipt download would be implemented here")
  }

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      {/* Success Message */}
      <div className="text-center">
        <div className="mb-4 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-secondary/10">
            <CheckCircle2 className="h-12 w-12 text-secondary" />
          </div>
        </div>
        <h1 className="mb-2 text-3xl font-bold text-foreground">Booking Confirmed!</h1>
        <p className="text-lg text-muted-foreground">Your appointment has been successfully scheduled</p>
      </div>

      {/* Booking Details Card */}
      <Card>
        <CardContent className="p-6">
          <h2 className="mb-6 text-xl font-semibold text-foreground">Appointment Details</h2>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <User className="mt-0.5 h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Doctor</p>
                <p className="font-medium text-foreground">{booking.doctor}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Calendar className="mt-0.5 h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Date</p>
                <p className="font-medium text-foreground">{booking.date}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Time</p>
                <p className="font-medium text-foreground">{booking.time}</p>
              </div>
            </div>

            <div className="my-6 border-t border-border" />

            <h3 className="mb-4 font-semibold text-foreground">Patient Information</h3>

            <div className="flex items-start gap-3">
              <User className="mt-0.5 h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Name</p>
                <p className="font-medium text-foreground">{booking.patient}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium text-foreground">{booking.email}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium text-foreground">{booking.phone}</p>
              </div>
            </div>

            {booking.reason && (
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Reason for Visit</p>
                  <p className="font-medium text-foreground">{booking.reason}</p>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="grid gap-3 sm:grid-cols-2">
        <Button onClick={handleAddToCalendar} variant="outline" className="bg-transparent">
          <Calendar className="mr-2 h-4 w-4" />
          Add to Calendar
        </Button>
        <Button onClick={handleDownloadReceipt} variant="outline" className="bg-transparent">
          <Download className="mr-2 h-4 w-4" />
          Download Receipt
        </Button>
      </div>

      {/* Reminder Notice */}
      <Card className="border-secondary/20 bg-secondary/5">
        <CardContent className="p-4">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Reminder:</span> You will receive a confirmation email and
            SMS notification 1 hour before your appointment. Please arrive 10 minutes early.
          </p>
        </CardContent>
      </Card>

      {/* Navigation Buttons */}
      <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
        <Button asChild variant="outline" className="bg-transparent">
          <Link href="/dashboard">View My Appointments</Link>
        </Button>
        <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  )
}

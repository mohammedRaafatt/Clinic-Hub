"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, User } from "lucide-react"
import { useRouter } from "next/navigation"

interface BookingFormProps {
  doctorName: string
  selectedDate?: string
  selectedTime?: string
}

export function BookingForm({ doctorName, selectedDate, selectedTime }: BookingFormProps) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    reason: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Store booking data in sessionStorage for confirmation page
    const bookingData = {
      doctor: doctorName,
      date: selectedDate,
      time: selectedTime,
      patient: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      reason: formData.reason,
    }

    sessionStorage.setItem("bookingData", JSON.stringify(bookingData))
    router.push("/booking/confirmation")
  }

  const isFormValid =
    formData.firstName && formData.lastName && formData.email && formData.phone && selectedDate && selectedTime

  return (
    <Card>
      <CardHeader>
        <CardTitle>Patient Information</CardTitle>
        <CardDescription>Please provide your details to complete the booking</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Booking Summary */}
          {(selectedDate || selectedTime) && (
            <div className="rounded-lg bg-accent/50 p-4">
              <h4 className="mb-3 font-semibold text-foreground">Booking Summary</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <User className="h-4 w-4" />
                  <span>{doctorName}</span>
                </div>
                {selectedDate && (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{selectedDate}</span>
                  </div>
                )}
                {selectedTime && (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{selectedTime}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Patient Details */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                required
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                required
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="reason">Reason for Visit</Label>
            <Textarea
              id="reason"
              placeholder="Brief description of your symptoms or reason for appointment"
              value={formData.reason}
              onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
              rows={4}
            />
          </div>

          <Button
            type="submit"
            disabled={!isFormValid}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Confirm Booking
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

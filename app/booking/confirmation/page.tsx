"use client"

import { useEffect, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BookingSummary } from "@/components/booking-summary"
import { useRouter } from "next/navigation"

export default function BookingConfirmationPage() {
  const router = useRouter()
  const [bookingData, setBookingData] = useState<any>(null)

  useEffect(() => {
    // Retrieve booking data from sessionStorage
    const data = sessionStorage.getItem("bookingData")

    if (!data) {
      // If no booking data, redirect to home
      router.push("/")
      return
    }

    setBookingData(JSON.parse(data))

    // Clear the booking data after retrieving it
    // sessionStorage.removeItem("bookingData")
  }, [router])

  if (!bookingData) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="container mx-auto px-4 py-12">
        <BookingSummary booking={bookingData} />
      </main>

      <Footer />
    </div>
  )
}

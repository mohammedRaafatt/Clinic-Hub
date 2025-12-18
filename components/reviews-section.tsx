"use client"

import { Button } from "@/components/ui/button"

import { Star, Quote } from "lucide-react"
import { Card } from "@/components/ui/card"

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Patient",
    rating: 5,
    comment:
      "HealthBook made finding a specialist so easy! I booked an appointment with a top cardiologist in minutes. The interface is intuitive and the doctors are highly qualified.",
    avatar: "/professional-woman.png",
    date: "2 weeks ago",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Patient",
    rating: 5,
    comment:
      "I've been using HealthBook for my family's healthcare needs. The ability to see real-time availability and book instantly is a game-changer. Highly recommend!",
    avatar: "/man-professional.jpg",
    date: "1 month ago",
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    role: "Pediatrician",
    rating: 5,
    comment:
      "As a healthcare provider, HealthBook has streamlined my appointment management. The platform is professional and my patients love how easy it is to book with me.",
    avatar: "/female-doctor.jpg",
    date: "3 weeks ago",
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Patient",
    rating: 5,
    comment:
      "The search filters helped me find exactly what I needed - a dentist near my office with evening availability. Booking was seamless and I got a reminder before my appointment.",
    avatar: "/man-business.jpg",
    date: "1 week ago",
  },
  {
    id: 5,
    name: "Priya Patel",
    role: "Patient",
    rating: 5,
    comment:
      "I love the transparency - seeing doctor profiles, ratings, and available slots all in one place. It takes the guesswork out of healthcare booking. Excellent platform!",
    avatar: "/smiling-woman.png",
    date: "2 months ago",
  },
  {
    id: 6,
    name: "David Martinez",
    role: "Patient",
    rating: 5,
    comment:
      "HealthBook saved me hours of calling different clinics. I found a great dermatologist, read reviews, and booked online. The whole process took less than 5 minutes!",
    avatar: "/man-casual.jpg",
    date: "3 weeks ago",
  },
]

export function ReviewsSection() {
  return (
    <section className="bg-secondary/30 px-4 py-20">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12 text-center animate-in fade-in slide-in-from-top-4 duration-1000">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Trusted by Thousands of Patients</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            See what our users are saying about their experience with HealthBook
          </p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-lg font-semibold text-foreground">4.9 out of 5</span>
            <span className="text-muted-foreground">(2,847 reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <Card
              key={review.id}
              className="border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg animate-in fade-in slide-in-from-bottom-6"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 flex items-start gap-4">
                <img
                  src={review.avatar || "/placeholder.svg"}
                  alt={review.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{review.name}</h3>
                  <p className="text-sm text-muted-foreground">{review.role}</p>
                </div>
                <Quote className="h-8 w-8 text-primary/20" />
              </div>

              <div className="mb-3 flex gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="mb-3 text-sm leading-relaxed text-foreground/80">{review.comment}</p>

              <p className="text-xs text-muted-foreground">{review.date}</p>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700">
          <p className="mb-4 text-muted-foreground">Join thousands of satisfied patients who trust HealthBook</p>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground transition-all hover:scale-105 hover:bg-primary/90"
          >
            Start Booking Today
          </Button>
        </div>
      </div>
    </section>
  )
}

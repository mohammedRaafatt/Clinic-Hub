"use client"

import { useEffect, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AppointmentCard, type Appointment } from "@/components/appointment-card"
import { ProfileInfo } from "@/components/profile-info"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, FileText, Plus } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    // Check if user is logged in
    const userData = sessionStorage.getItem("user")
    if (!userData) {
      router.push("/login")
      return
    }
    setUser(JSON.parse(userData))
  }, [router])

  // Mock appointments data
  const mockAppointments: Appointment[] = [
    {
      id: "1",
      doctorName: "Dr. Sarah Johnson",
      doctorSpecialty: "Cardiologist",
      doctorImage: "/female-doctor-professional.jpg",
      date: "March 15, 2025",
      time: "10:00 AM",
      location: "Downtown Medical Center",
      type: "in-person",
      status: "upcoming",
    },
    {
      id: "2",
      doctorName: "Dr. Michael Chen",
      doctorSpecialty: "Dermatologist",
      doctorImage: "/professional-male-doctor.png",
      date: "March 20, 2025",
      time: "2:30 PM",
      location: "Video Consultation",
      type: "video",
      status: "upcoming",
    },
    {
      id: "3",
      doctorName: "Dr. Emily Rodriguez",
      doctorSpecialty: "Pediatrician",
      doctorImage: "/female-pediatrician.png",
      date: "February 28, 2025",
      time: "11:00 AM",
      location: "Children's Health Center",
      type: "in-person",
      status: "completed",
    },
  ]

  const upcomingAppointments = mockAppointments.filter((apt) => apt.status === "upcoming")
  const pastAppointments = mockAppointments.filter((apt) => apt.status === "completed")

  const handleCancelAppointment = (id: string) => {
    // In a real app, this would call an API
    alert(`Appointment ${id} would be cancelled`)
  }

  const handleRescheduleAppointment = (id: string) => {
    // In a real app, this would navigate to reschedule page
    alert(`Appointment ${id} would be rescheduled`)
  }

  const handleUpdateProfile = (profile: any) => {
    // In a real app, this would call an API
    console.log("Updated profile:", profile)
    alert("Profile updated successfully!")
  }

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Welcome back, {user.name}!</h1>
            <p className="text-muted-foreground">Manage your appointments and health information</p>
          </div>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/search">
              <Plus className="mr-2 h-4 w-4" />
              Book New Appointment
            </Link>
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Upcoming</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{upcomingAppointments.length}</div>
              <p className="text-xs text-muted-foreground">appointments scheduled</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{pastAppointments.length}</div>
              <p className="text-xs text-muted-foreground">past appointments</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Records</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">medical documents</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="appointments" className="space-y-6">
          <TabsList>
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="appointments" className="space-y-6">
            {/* Upcoming Appointments */}
            <div>
              <h2 className="mb-4 text-xl font-semibold text-foreground">Upcoming Appointments</h2>
              {upcomingAppointments.length > 0 ? (
                <div className="grid gap-4">
                  {upcomingAppointments.map((appointment) => (
                    <AppointmentCard
                      key={appointment.id}
                      appointment={appointment}
                      onCancel={handleCancelAppointment}
                      onReschedule={handleRescheduleAppointment}
                    />
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="flex min-h-[200px] flex-col items-center justify-center p-12 text-center">
                    <Calendar className="mb-4 h-12 w-12 text-muted-foreground" />
                    <h3 className="mb-2 text-lg font-semibold text-foreground">No upcoming appointments</h3>
                    <p className="mb-4 text-sm text-muted-foreground">Book your first appointment to get started</p>
                    <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                      <Link href="/search">Find a Doctor</Link>
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Past Appointments */}
            {pastAppointments.length > 0 && (
              <div>
                <h2 className="mb-4 text-xl font-semibold text-foreground">Past Appointments</h2>
                <div className="grid gap-4">
                  {pastAppointments.map((appointment) => (
                    <AppointmentCard key={appointment.id} appointment={appointment} />
                  ))}
                </div>
              </div>
            )}
          </TabsContent>

          <TabsContent value="profile">
            <ProfileInfo
              profile={{
                name: user.name || "John Doe",
                email: user.email || "john.doe@example.com",
                phone: "+1 (555) 123-4567",
                dateOfBirth: "1990-01-15",
                address: "123 Main St, New York, NY 10001",
              }}
              onUpdate={handleUpdateProfile}
            />
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  )
}

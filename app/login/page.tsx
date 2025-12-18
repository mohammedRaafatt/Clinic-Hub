import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LoginForm } from "@/components/login-form"
import { Stethoscope } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="container mx-auto flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-12">
        <div className="grid w-full max-w-5xl gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Side - Branding */}
          <div className="flex flex-col justify-center">
            <Link href="/" className="mb-6 flex items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
                <Stethoscope className="h-7 w-7 text-primary-foreground" />
              </div>
              <span className="text-2xl font-semibold text-foreground">HealthBook</span>
            </Link>

            <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Access Your Healthcare Dashboard</h1>
            <p className="mb-6 text-lg text-muted-foreground">
              Manage your appointments, view medical records, and connect with healthcare providers all in one place.
            </p>

            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary/10">
                  <svg className="h-4 w-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Book appointments instantly</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary/10">
                  <svg className="h-4 w-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Track your medical history</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary/10">
                  <svg className="h-4 w-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Get appointment reminders</span>
              </li>
            </ul>
          </div>

          {/* Right Side - Login Form */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md">
              <LoginForm />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

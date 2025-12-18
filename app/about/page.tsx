import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Target, Heart, Users, Award, Zap, Shield } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/10 py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <h1 className="mb-6 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
                Transforming Healthcare Access
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                We're on a mission to make quality healthcare accessible to everyone, everywhere. HealthBook connects
                patients with trusted healthcare providers in just a few clicks.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
                <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Founded in 2024, HealthBook was born from a simple observation: finding and booking a doctor
                    shouldn't be complicated. Our founders experienced firsthand the frustration of navigating
                    fragmented healthcare systems, long wait times, and limited access to information.
                  </p>
                  <p>
                    Today, we've grown into a comprehensive healthcare platform serving thousands of patients and
                    partnering with hundreds of healthcare providers. Our technology bridges the gap between patients
                    seeking care and doctors ready to provide it.
                  </p>
                  <p>
                    We believe healthcare should be transparent, accessible, and patient-centered. Every feature we
                    build, every partnership we forge, and every decision we make is guided by this principle.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] overflow-hidden rounded-2xl animate-in fade-in slide-in-from-right-8 duration-1000">
                <Image src="/modern-healthcare-team-collaboration.jpg" alt="Healthcare team" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Our Values</h2>
              <p className="text-muted-foreground">The principles that guide everything we do</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Heart,
                  title: "Patient First",
                  description: "Every decision we make prioritizes patient wellbeing and experience.",
                },
                {
                  icon: Shield,
                  title: "Trust & Security",
                  description: "Your health data is protected with enterprise-grade security measures.",
                },
                {
                  icon: Zap,
                  title: "Innovation",
                  description: "We continuously improve our platform with cutting-edge technology.",
                },
                {
                  icon: Users,
                  title: "Accessibility",
                  description: "Healthcare should be available to everyone, regardless of location.",
                },
                {
                  icon: Award,
                  title: "Quality Care",
                  description: "We partner only with verified, licensed healthcare professionals.",
                },
                {
                  icon: Target,
                  title: "Transparency",
                  description: "Clear pricing, honest reviews, and complete information always.",
                },
              ].map((value, index) => (
                <div
                  key={value.title}
                  className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-lg animate-in fade-in slide-in-from-bottom-4"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:scale-110">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">By The Numbers</h2>
              <p className="text-muted-foreground">Our impact in the healthcare community</p>
            </div>
            <div className="grid gap-8 md:grid-cols-4">
              {[
                { number: "50K+", label: "Active Patients" },
                { number: "1,200+", label: "Healthcare Providers" },
                { number: "100K+", label: "Appointments Booked" },
                { number: "4.9/5", label: "Average Rating" },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center animate-in fade-in zoom-in-50"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-2 text-4xl font-bold text-primary md:text-5xl">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary/5 to-secondary/10 py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">Join Our Mission</h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Whether you're a patient seeking care or a healthcare provider looking to reach more patients, we'd love
                to have you as part of the HealthBook community.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <a
                  href="/signup"
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105"
                >
                  Get Started Today
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg border border-border bg-card px-8 py-3 font-semibold text-foreground transition-all hover:bg-muted hover:scale-105"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

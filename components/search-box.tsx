"use client"

import type React from "react"

import { useState } from "react"
import { Search, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"

export function SearchBox() {
  const router = useRouter()
  const [specialty, setSpecialty] = useState("")
  const [location, setLocation] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (specialty) params.set("specialty", specialty)
    if (location) params.set("location", location)
    router.push(`/search?${params.toString()}`)
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl animate-in fade-in slide-in-from-bottom-6 duration-1000">
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground">Find the Right Doctor for You</h2>

          <form
            onSubmit={handleSearch}
            className="rounded-2xl border border-border bg-card p-6 shadow-lg transition-all hover:shadow-xl"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Specialty or doctor name"
                  value={specialty}
                  onChange={(e) => setSpecialty(e.target.value)}
                  className="pl-10"
                />
              </div>

              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="City or zip code"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <Button
              type="submit"
              className="mt-4 w-full bg-primary text-primary-foreground transition-all hover:scale-[1.02] hover:bg-primary/90"
            >
              Search Doctors
            </Button>
          </form>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="text-sm text-muted-foreground">Popular searches:</span>
            {["Dentist", "Cardiologist", "Dermatologist", "Pediatrician"].map((term) => (
              <button
                key={term}
                onClick={() => {
                  setSpecialty(term)
                  router.push(`/search?specialty=${term}`)
                }}
                className="rounded-full bg-muted px-4 py-1 text-sm font-medium text-muted-foreground transition-all hover:scale-105 hover:bg-primary hover:text-primary-foreground"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

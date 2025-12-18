"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SearchFilters, type FilterState } from "@/components/search-filters"
import { DoctorList } from "@/components/doctor-list"
import { mockDoctors } from "@/lib/mock-data"
import { Search, MapPin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useSearchParams } from "next/navigation"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState(searchParams.get("specialty") || "")
  const [locationQuery, setLocationQuery] = useState(searchParams.get("location") || "")
  const [filters, setFilters] = useState<FilterState>({
    specialty: "",
    location: "",
    gender: "",
    availability: "",
  })
  const [filteredDoctors, setFilteredDoctors] = useState(mockDoctors)

  useEffect(() => {
    let results = [...mockDoctors]

    // Filter by search query
    if (searchQuery) {
      results = results.filter(
        (doctor) =>
          doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    // Filter by specialty
    if (filters.specialty && filters.specialty !== "all") {
      results = results.filter((doctor) => doctor.specialty.toLowerCase() === filters.specialty.toLowerCase())
    }

    // Filter by location
    if (filters.location || locationQuery) {
      const locationSearch = filters.location || locationQuery
      results = results.filter((doctor) => doctor.location.toLowerCase().includes(locationSearch.toLowerCase()))
    }

    // Filter by accepting new patients
    if (filters.availability === "today") {
      results = results.filter((doctor) => doctor.nextAvailable.toLowerCase().includes("today"))
    }

    setFilteredDoctors(results)
  }, [searchQuery, locationQuery, filters])

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="mb-6 text-3xl font-bold text-foreground">Find Your Doctor</h1>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by name or specialty"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Location"
                value={locationQuery}
                onChange={(e) => setLocationQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <aside>
            <SearchFilters onFilterChange={setFilters} />
          </aside>

          <div>
            <DoctorList doctors={filteredDoctors} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

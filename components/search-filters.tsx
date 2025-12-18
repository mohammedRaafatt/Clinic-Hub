"use client"

import { useState } from "react"
import { Filter, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

interface SearchFiltersProps {
  onFilterChange: (filters: FilterState) => void
}

export interface FilterState {
  specialty: string
  location: string
  gender: string
  availability: string
}

export function SearchFilters({ onFilterChange }: SearchFiltersProps) {
  const [filters, setFilters] = useState<FilterState>({
    specialty: "",
    location: "",
    gender: "",
    availability: "",
  })

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const clearFilters = () => {
    const emptyFilters = {
      specialty: "",
      location: "",
      gender: "",
      availability: "",
    }
    setFilters(emptyFilters)
    onFilterChange(emptyFilters)
  }

  const FilterContent = () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="specialty">Specialty</Label>
        <Select value={filters.specialty} onValueChange={(value) => handleFilterChange("specialty", value)}>
          <SelectTrigger id="specialty">
            <SelectValue placeholder="All specialties" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All specialties</SelectItem>
            <SelectItem value="cardiologist">Cardiologist</SelectItem>
            <SelectItem value="dermatologist">Dermatologist</SelectItem>
            <SelectItem value="dentist">Dentist</SelectItem>
            <SelectItem value="pediatrician">Pediatrician</SelectItem>
            <SelectItem value="psychiatrist">Psychiatrist</SelectItem>
            <SelectItem value="orthopedic">Orthopedic</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="location">Location</Label>
        <Input
          id="location"
          placeholder="City or zip code"
          value={filters.location}
          onChange={(e) => handleFilterChange("location", e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="gender">Gender</Label>
        <Select value={filters.gender} onValueChange={(value) => handleFilterChange("gender", value)}>
          <SelectTrigger id="gender">
            <SelectValue placeholder="Any" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any</SelectItem>
            <SelectItem value="male">Male</SelectItem>
            <SelectItem value="female">Female</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="availability">Availability</Label>
        <Select value={filters.availability} onValueChange={(value) => handleFilterChange("availability", value)}>
          <SelectTrigger id="availability">
            <SelectValue placeholder="Any time" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any time</SelectItem>
            <SelectItem value="today">Today</SelectItem>
            <SelectItem value="tomorrow">Tomorrow</SelectItem>
            <SelectItem value="this-week">This week</SelectItem>
            <SelectItem value="next-week">Next week</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button onClick={clearFilters} variant="outline" className="w-full bg-transparent">
        <X className="mr-2 h-4 w-4" />
        Clear Filters
      </Button>
    </div>
  )

  return (
    <>
      {/* Desktop Filters */}
      <div className="hidden lg:block">
        <div className="rounded-xl border border-border bg-card p-6">
          <h3 className="mb-6 text-lg font-semibold text-foreground">Filters</h3>
          <FilterContent />
        </div>
      </div>

      {/* Mobile Filters */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full bg-transparent">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
            </SheetHeader>
            <div className="mt-6">
              <FilterContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  )
}

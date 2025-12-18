"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, CalendarIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface TimeSlot {
  time: string
  available: boolean
}

interface AvailabilityCalendarProps {
  onSlotSelect: (date: string, time: string) => void
  selectedDate?: string
  selectedTime?: string
}

export function AvailabilityCalendar({ onSlotSelect, selectedDate, selectedTime }: AvailabilityCalendarProps) {
  const [currentWeekStart, setCurrentWeekStart] = useState(0)

  // Generate next 14 days
  const generateDates = () => {
    const dates = []
    const today = new Date()
    for (let i = 0; i < 14; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      dates.push(date)
    }
    return dates
  }

  const dates = generateDates()
  const visibleDates = dates.slice(currentWeekStart, currentWeekStart + 7)

  // Mock time slots
  const generateTimeSlots = (date: Date): TimeSlot[] => {
    const slots: TimeSlot[] = []
    const hours = [9, 10, 11, 14, 15, 16, 17]

    hours.forEach((hour) => {
      slots.push({
        time: `${hour}:00 ${hour < 12 ? "AM" : "PM"}`,
        available: Math.random() > 0.3, // Random availability
      })
    })

    return slots
  }

  const [selectedDateObj, setSelectedDateObj] = useState<Date | null>(null)
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([])

  const handleDateClick = (date: Date) => {
    setSelectedDateObj(date)
    setTimeSlots(generateTimeSlots(date))
  }

  const handleTimeClick = (time: string) => {
    if (selectedDateObj) {
      const dateStr = selectedDateObj.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
      onSlotSelect(dateStr, time)
    }
  }

  const formatDate = (date: Date) => {
    return {
      day: date.toLocaleDateString("en-US", { weekday: "short" }),
      date: date.getDate(),
      month: date.toLocaleDateString("en-US", { month: "short" }),
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground">
          <CalendarIcon className="h-5 w-5" />
          Select Date & Time
        </h3>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentWeekStart(Math.max(0, currentWeekStart - 7))}
            disabled={currentWeekStart === 0}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentWeekStart(Math.min(7, currentWeekStart + 7))}
            disabled={currentWeekStart >= 7}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Date Selection */}
      <div className="grid grid-cols-7 gap-2">
        {visibleDates.map((date, index) => {
          const { day, date: dateNum, month } = formatDate(date)
          const isSelected = selectedDateObj?.toDateString() === date.toDateString()

          return (
            <button
              key={index}
              onClick={() => handleDateClick(date)}
              className={cn(
                "flex flex-col items-center gap-1 rounded-lg border border-border p-3 transition-colors hover:border-primary hover:bg-primary/5",
                isSelected && "border-primary bg-primary/10",
              )}
            >
              <span className="text-xs text-muted-foreground">{day}</span>
              <span className="text-lg font-semibold text-foreground">{dateNum}</span>
              <span className="text-xs text-muted-foreground">{month}</span>
            </button>
          )
        })}
      </div>

      {/* Time Slots */}
      {selectedDateObj && (
        <div>
          <h4 className="mb-3 text-sm font-medium text-foreground">Available Times</h4>
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5">
            {timeSlots.map((slot, index) => (
              <Button
                key={index}
                variant="outline"
                disabled={!slot.available}
                onClick={() => handleTimeClick(slot.time)}
                className={cn(
                  "bg-transparent",
                  selectedTime === slot.time && "border-primary bg-primary/10 text-primary",
                  !slot.available && "cursor-not-allowed opacity-50",
                )}
              >
                {slot.time}
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

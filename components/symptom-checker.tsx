"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Stethoscope, ChevronRight, CheckCircle2 } from "lucide-react"
import { useRouter } from "next/navigation"

interface Symptom {
  id: string
  name: string
  specialty: string
}

const COMMON_SYMPTOMS: Symptom[] = [
  { id: "1", name: "Skin rash or acne", specialty: "Dermatology" },
  { id: "2", name: "Tooth pain", specialty: "Dentistry" },
  { id: "3", name: "Chest pain or heart issues", specialty: "Cardiology" },
  { id: "4", name: "Joint or muscle pain", specialty: "Orthopedics" },
  { id: "5", name: "Vision problems", specialty: "Ophthalmology" },
  { id: "6", name: "Digestive issues", specialty: "Gastroenterology" },
  { id: "7", name: "Mental health concerns", specialty: "Psychiatry" },
  { id: "8", name: "Child health issues", specialty: "Pediatrics" },
]

export function SymptomChecker() {
  const [selectedSymptom, setSelectedSymptom] = useState<Symptom | null>(null)
  const router = useRouter()

  const handleSymptomSelect = (symptom: Symptom) => {
    setSelectedSymptom(symptom)
    setTimeout(() => {
      router.push(`/search?specialty=${encodeURIComponent(symptom.specialty)}`)
    }, 500)
  }

  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Stethoscope className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Not Sure Which Doctor to See?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Tell us your symptoms and we'll recommend the right specialist for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {COMMON_SYMPTOMS.map((symptom, index) => (
            <Card
              key={symptom.id}
              className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-primary/50 animate-in fade-in slide-in-from-bottom-4 ${
                selectedSymptom?.id === symptom.id ? "border-primary bg-primary/5" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => handleSymptomSelect(symptom)}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-semibold text-sm mb-2">{symptom.name}</h3>
                  <p className="text-xs text-primary font-medium">{symptom.specialty}</p>
                </div>
                {selectedSymptom?.id === symptom.id ? (
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                ) : (
                  <ChevronRight className="h-5 w-5 text-muted-foreground shrink-0" />
                )}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-destructive">Emergency?</span> Call 911 or visit your nearest ER
          </p>
        </div>
      </div>
    </section>
  )
}

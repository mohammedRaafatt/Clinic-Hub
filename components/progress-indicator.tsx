"use client"

import { Check } from "lucide-react"

interface Step {
  id: number
  name: string
  status: "complete" | "current" | "upcoming"
}

interface ProgressIndicatorProps {
  steps: Step[]
}

export function ProgressIndicator({ steps }: ProgressIndicatorProps) {
  return (
    <nav aria-label="Progress" className="mb-8">
      <ol className="flex items-center justify-between">
        {steps.map((step, stepIdx) => (
          <li key={step.id} className={`relative ${stepIdx !== steps.length - 1 ? "flex-1" : ""}`}>
            <div className="flex items-center">
              <div className="relative flex items-center justify-center">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                    step.status === "complete"
                      ? "border-primary bg-primary text-primary-foreground"
                      : step.status === "current"
                        ? "border-primary bg-background text-primary"
                        : "border-muted bg-background text-muted-foreground"
                  }`}
                >
                  {step.status === "complete" ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    <span className="text-sm font-semibold">{step.id}</span>
                  )}
                </div>
              </div>
              <div className="ml-3 min-w-0">
                <p
                  className={`text-sm font-medium ${
                    step.status === "current" ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {step.name}
                </p>
              </div>
            </div>
            {stepIdx !== steps.length - 1 && (
              <div className="absolute left-10 top-5 -ml-px h-0.5 w-full">
                <div
                  className={`h-full transition-all duration-300 ${
                    step.status === "complete" ? "bg-primary" : "bg-muted"
                  }`}
                />
              </div>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

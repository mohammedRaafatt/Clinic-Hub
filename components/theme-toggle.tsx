"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const handleThemeChange = (newTheme: "light" | "dark") => {
    console.log("[v0] Theme toggle clicked:", newTheme)
    setTheme(newTheme)
  }

  return (
    <div className="flex items-center gap-1 rounded-lg bg-muted p-1">
      <Button
        variant="ghost"
        size="icon"
        className={`h-8 w-8 transition-all ${theme === "light" ? "bg-background shadow-sm" : ""}`}
        onClick={() => handleThemeChange("light")}
        aria-label="Light mode"
      >
        <Sun className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className={`h-8 w-8 transition-all ${theme === "dark" ? "bg-background shadow-sm" : ""}`}
        onClick={() => handleThemeChange("dark")}
        aria-label="Dark mode"
      >
        <Moon className="h-4 w-4" />
      </Button>
    </div>
  )
}

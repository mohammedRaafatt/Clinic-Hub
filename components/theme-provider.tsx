"use client"

import * as React from "react"

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  attribute?: string
  defaultTheme?: Theme
  enableSystem?: boolean
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeProviderContext = React.createContext<ThemeProviderState | undefined>(undefined)

export function ThemeProvider({
  children,
  attribute = "class",
  defaultTheme = "system",
  enableSystem = true,
  storageKey = "theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setThemeState] = React.useState<Theme>(defaultTheme)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(storageKey) as Theme
      if (stored) {
        console.log("[v0] Loading theme from localStorage:", stored)
        setThemeState(stored)
      }
    }
  }, [storageKey])

  React.useEffect(() => {
    if (!mounted) return

    const root = window.document.documentElement

    root.classList.remove("light", "dark")

    if (theme === "system" && enableSystem) {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      console.log("[v0] Applying system theme:", systemTheme)
      root.classList.add(systemTheme)
      return
    }

    console.log("[v0] Applying theme class to root:", theme)
    root.classList.add(theme)
    console.log("[v0] Root classes after update:", root.className)
  }, [theme, enableSystem, mounted])

  const value = {
    theme,
    setTheme: (newTheme: Theme) => {
      console.log("[v0] setTheme called with:", newTheme)
      localStorage.setItem(storageKey, newTheme)
      setThemeState(newTheme)
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = React.useContext(ThemeProviderContext)

  if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider")

  return context
}

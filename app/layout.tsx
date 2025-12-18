import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ClientLayout } from "./client-layout"

export const metadata: Metadata = {
  title: "HealthBook - Book Your Doctor in Seconds",
  description:
    "Modern healthcare booking platform connecting patients with trusted doctors. Find specialists, book appointments, and manage your healthcare journey seamlessly.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ClientLayout>{children}</ClientLayout>
    </html>
  )
}

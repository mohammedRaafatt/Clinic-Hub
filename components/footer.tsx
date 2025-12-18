import Link from "next/link"
import { Stethoscope, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
                <Stethoscope className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold text-foreground">ClinicHub</span>
            </Link>
            <p className="text-sm text-muted-foreground">Making healthcare accessible, one appointment at a time.</p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-foreground">For Patients</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/search" className="text-muted-foreground transition-colors hover:text-foreground">
                  Find Doctors
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-muted-foreground transition-colors hover:text-foreground">
                  My Appointments
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-muted-foreground transition-colors hover:text-foreground">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-foreground">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground transition-colors hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground transition-colors hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground transition-colors hover:text-foreground">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-foreground">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground transition-colors hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground transition-colors hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">© 2025 HealthBook. All rights reserved.</p>

          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

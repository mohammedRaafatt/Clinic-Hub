import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-accent/30 to-background py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Trusted by 100+ healthcare providers
          </div>

          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Book Your Doctor in Seconds
          </h1>

          <p className="mb-10 text-pretty text-lg text-muted-foreground md:text-xl">
            Find and book appointments with top-rated doctors near you. Simple, fast, and hassle-free healthcare
            scheduling.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/search">Find a Doctor</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 transition-transform hover:scale-110">
                <Calendar className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-foreground">Easy Booking</h3>
              <p className="text-sm text-muted-foreground">Schedule appointments in just a few clicks</p>
            </div>

            <div className="flex flex-col items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 transition-transform hover:scale-110">
                <Clock className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-foreground">Real-time Availability</h3>
              <p className="text-sm text-muted-foreground">See available slots instantly</p>
            </div>

            <div className="flex flex-col items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 transition-transform hover:scale-110">
                <MapPin className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-foreground">Find Nearby</h3>
              <p className="text-sm text-muted-foreground">Discover doctors in your area</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

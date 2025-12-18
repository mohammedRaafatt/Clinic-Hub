import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { SearchBox } from "@/components/search-box"
import { StatsSection } from "@/components/stats-section"
import { FeaturesSection } from "@/components/features-section"
import { SymptomChecker } from "@/components/symptom-checker"
import { NearbyDoctors } from "@/components/nearby-doctors"
import { TrustBadges } from "@/components/trust-badges"
import { ReviewsSection } from "@/components/reviews-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <SearchBox />
        <TrustBadges />
        <StatsSection />
        <FeaturesSection />
        <SymptomChecker />
        <NearbyDoctors />
        <ReviewsSection />
      </main>
      <Footer />
    </div>
  )
}

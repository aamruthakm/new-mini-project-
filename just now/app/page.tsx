"use client"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { FeatureCards } from "@/components/feature-cards"
import { FarmingToolsPreview } from "@/components/farming-tools-preview"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-surface-secondary">
      <Navigation />
      <HeroSection />
      <FeatureCards />
      <FarmingToolsPreview />
      <Footer />
    </div>
  )
}

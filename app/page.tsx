import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { DemoSection } from "@/components/demo-section"
import { PreviewSection } from "@/components/preview-section"
import { FeaturesSection } from "@/components/features-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PricingSection } from "@/components/pricing-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <DemoSection />
        <PreviewSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  )
}

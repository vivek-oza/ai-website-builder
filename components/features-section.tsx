"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { MagicWand, DeviceMobile, Shield, Rocket, PencilCircle, Code, Globe, ChartBar } from "phosphor-react"

const features = [
  {
    icon: MagicWand, // Replaced Wand2 with MagicWand
    title: "AI-Powered Design",
    description: "Let AI create stunning designs based on your preferences and industry best practices.",
  },
  {
    icon: DeviceMobile, // Replaced Smartphone with DeviceMobile
    title: "Mobile-First",
    description: "Every website is optimized for mobile devices from the ground up.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with SSL certificates and advanced protection.",
  },
  {
    icon: Rocket,
    title: "Lightning Deploy",
    description: "Deploy your website to global CDN in seconds with one click.",
  },
  {
    icon: PencilCircle, // Replaced Palette with PencilCircle as requested
    title: "Custom Branding",
    description: "Full control over colors, fonts, and styling to match your brand.",
  },
  {
    icon: Code, // Replaced Code2 with Code
    title: "Clean Code",
    description: "Export clean, semantic HTML/CSS code that developers love.",
  },
  {
    icon: Globe,
    title: "SEO Optimized",
    description: "Built-in SEO optimization to help your site rank higher.",
  },
  {
    icon: ChartBar, // Replaced BarChart3 with ChartBar
    title: "Analytics Ready",
    description: "Integrated analytics to track your website's performance.",
  },
]

export function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="features" className="py-24 px-4 bg-muted/20">
      <div ref={sectionRef} className="max-w-7xl mx-auto opacity-0">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-manrope">
            Powerful <span className="text-primary">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-manrope">
            Everything you need to build, customize, and deploy professional websites
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glass-effect border-border/50 p-6 bg-card/30 hover:bg-card/50 transition-all duration-300 group hover:border-b-4 hover:border-b-primary/50 hover:shadow-lg hover:shadow-primary/10 cursor-pointer"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Play, Code, PencilCircle, Lightning } from "phosphor-react"

export function PreviewSection() {
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
    <section id="preview" className="py-24 px-4">
      <div ref={sectionRef} className="max-w-7xl mx-auto opacity-0">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-manrope">
            See It In <span className="text-primary">Action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-manrope">
            Watch how our AI transforms your ideas into beautiful, functional websites in real-time
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">AI-Powered Code Generation</h3>
                <p className="text-muted-foreground">
                  Our advanced AI understands your requirements and generates clean, optimized code instantly.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <PencilCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Smart Design System</h3>
                <p className="text-muted-foreground">
                  Automatically applies consistent design patterns and modern aesthetics to every element.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <Lightning className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
                <p className="text-muted-foreground">
                  From concept to deployment in minutes, not hours. Ship faster than ever before.
                </p>
              </div>
            </div>
          </div>

          <Card className="glass-effect border-border/50 p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
            <div className="relative z-10">
              <div className="aspect-video bg-muted/20 rounded-lg flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center cursor-pointer">
                  <Play className="w-8 h-8 text-primary ml-1" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Interactive Demo</h3>
              <p className="text-muted-foreground mb-6">
                Experience the power of AI website building with our interactive demo. See how quickly you can go from
                idea to reality.
              </p>
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                <div className="w-3 h-3 bg-primary/60 rounded-full animate-pulse delay-100" />
                <div className="w-3 h-3 bg-primary/30 rounded-full animate-pulse delay-200" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { RocketLaunch, Lightbulb, Play, ArrowsClockwise } from "phosphor-react"
import { RocketLaunchIcon, HeadCircuitIcon } from "@phosphor-icons/react"

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)

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

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,0,0.1),transparent_50%)]" />

      <div ref={heroRef} className="relative z-10 text-center px-4 max-w-6xl mx-auto opacity-0">
        <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 mb-8">
          <HeadCircuitIcon weight="fill" className="size-6 text-primary" />
          <span className="text-sm text-muted-foreground">AI-Powered Website Builder</span>
        </div>

        <h1 className="text-6xl flex md:flex-row flex-col justify-center items-center gap-x-6 font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent font-manrope md:text-6xl lg:text-7xl">
          <div className="flex items-center">
            <div> Build </div>
            {/* <HeadCircuitIcon weight="fill" color="#85b749" className="inline-block size-16" /> */}
          </div>
          <div className="flex items-center">
            <div> Ship </div>
            {/* <RocketLaunchIcon weight="fill" color="#85b749" className="inline-block size-16" /> */}
          </div>
          <div className="flex items-center">
            <div> Repeat </div>
            {/* <ArrowsClockwise weight="fill" color="#85b749" className="inline-block size-16" /> */}
          </div>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-manrope">
          Create stunning websites in minutes with our AI-powered builder. No coding required, just pure creativity
          unleashed.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection("pricing")}
            className="relative inline-flex items-center gap-2 px-8 py-4 text-lg font-bold text-black bg-primary rounded-lg overflow-hidden group transition-all duration-300 hover:scale-105"
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 -top-1 -bottom-1 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

            {/* Button content */}
            <span className="relative z-10 flex items-center gap-2">
              Start Shipping
              <RocketLaunch className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          <button
            onClick={() => scrollToSection("preview")}
            className="relative inline-flex items-center gap-2 px-8 py-4 text-lg font-bold text-black bg-primary rounded-lg overflow-hidden group transition-all duration-300 hover:scale-105"
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 -top-1 -bottom-1 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

            {/* Button content */}
            <span className="relative z-10 flex items-center gap-2">
              Watch demo
              <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}

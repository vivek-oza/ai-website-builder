"use client"

import { Lightbulb, RocketLaunch, ArrowLeft } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ComingSoonPage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,0,0.1),transparent_50%)]" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 mb-8">
          <Lightbulb className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">AI-Powered Website Builder</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent font-manrope">
          We’re Launching Soon
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Build, Ship, Repeat — the fastest way to create beautiful, production-ready websites with AI.
          We’re polishing the last bits. Stay tuned while we ship something you’ll love.
        </p>

        <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
          <RocketLaunch className="w-4 h-4 text-primary" weight="fill" />
          <span>Shipping soon at <a href="https://www.buildship.in" className="underline hover:no-underline">buildship.in</a></span>
        </div>

        <div className="mt-10 flex justify-center">
          <Button variant="secondary" className="cursor-pointer" asChild>
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

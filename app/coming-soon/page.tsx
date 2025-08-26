"use client"

import { useState } from "react"
import { RocketLaunch, ArrowLeft, HeadCircuitIcon, PaperPlaneTilt } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"
import { LitUpButton } from "@/components/ui/lit-up-button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"

export default function ComingSoonPage() {
  const { toast } = useToast()
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({ title: "Please enter a valid email", variant: "destructive" })
      return
    }
    setLoading(true)
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      })
      const data = await res.json()
      if (!res.ok || !data.ok) throw new Error(data.error || "Submission failed")

      toast({
        title: "You're on the list!",
        description: "We'll send freebies and launch surprises soon.",
      })
      setEmail("")
      setName("")
    } catch (err: any) {
      toast({ title: "Something went wrong", description: err.message || "Please try again.", variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(150,222,63,0.10),transparent_55%)]" />

      <div className="relative z-10 px-4 w-full">
        <div className="mx-auto max-w-xl text-center">
          {/* Chip */}
          <div className="inline-flex items-center gap-2 bg-card/40 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 mb-5">
            <HeadCircuitIcon weight="fill" className="w-4 h-4 text-primary" />
            <span className="text-xs text-muted-foreground">AI-Powered Website Builder</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent font-manrope">
            We’re Launching Soon
          </h1>
          <p className="text-sm text-muted-foreground mb-6">Join the waitlist for launch updates, freebies, and surprises.</p>

          {/* Primary form area - minimal, scoped styles for inputs */}
          <div className="mx-auto max-w-sm md:max-w-md">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <Input
                type="text"
                placeholder="Your name (optional)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-12 text-lg placeholder:text-lg md:text-lg md:placeholder:text-lg bg-black text-white placeholder:text-zinc-400 border-white/20"
              />
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 text-lg placeholder:text-lg bg-black text-white placeholder:text-zinc-400 border-white/20"
              />
              <LitUpButton type="submit" disabled={loading} size="md" className="w-full mx-auto font-semibold">
                <PaperPlaneTilt weight="fill" className="w-5 h-5" />
                {loading ? "Joining..." : "Join waitlist for freebies"}
              </LitUpButton>
            </form>
            <p className="mt-3 text-xs text-muted-foreground">No spam. Unsubscribe anytime.</p>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <RocketLaunch  className="w-4 h-4 text-primary" weight="fill" />
            <span>Shipping soon at <a href="https://www.buildship.in" className="underline hover:no-underline">buildship.in</a></span>
          </div>

          <div className="mt-6 flex justify-center">
            {/* <LitUpButton size="sm" className="cursor-pointer hover:text-white"> */}
              <Link href="/" className="text-white hover:text-white flex justify-center items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                <div>
                Back to Home 
                </div>
              </Link>
            {/* </LitUpButton> */}
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { List, X, RocketLaunch } from "@phosphor-icons/react"
import { BuildshipLaunch } from "./buildship-launch"
import Link from "next/link"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav
        className={`fixed top-2 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 flex-row justify-between bg-[rgba(135,195,52,1)] ${"bg-card/50 backdrop-blur-sm"} rounded-full px-4 sm:px-6 lg:px-8 py-3 sm:py-3 border-border/50 border-0`}
      >
        <div className="flex items-center w-full max-w-[100%] sm:max-w-[640px] md:max-w-[480px] lg:min-w-[700px] justify-between gap-3 sm:gap-3 lg:gap-[25px]">
          <button
            type="button"
            onClick={() => scrollToSection("hero")}
            className="flex items-center space-x-3 sm:space-x-2 lg:space-x-3 cursor-pointer"
            aria-label="Go to Hero section"
          >
            <div className="w-8 h-8 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-primary flex items-center justify-center rounded-lg cursor-pointer">
              <BuildshipLaunch />
            </div>
            <span className="font-bold text-lg sm:text-base lg:text-lg font-sans cursor-pointer">buildship</span>
          </button>

          <div className="hidden md:flex items-center space-x-2 lg:space-x-4 xl:space-x-6 rounded-full px-2 lg:px-4 py-1 lg:py-2 border-border/30 border-0 bg-transparent">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-muted-foreground hover:text-foreground transition-colors px-2 lg:px-3 py-1 text-sm lg:text-base cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("demo")}
              className="text-muted-foreground hover:text-foreground transition-colors px-2 lg:px-3 py-1 text-sm lg:text-base cursor-pointer"
            >
              Demo
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-muted-foreground hover:text-foreground transition-colors px-2 lg:px-3 py-1 text-sm lg:text-base cursor-pointer"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-muted-foreground hover:text-foreground transition-colors px-2 lg:px-3 py-1 text-sm lg:text-base cursor-pointer"
            >
              Pricing
            </button>
          </div>

          <Button
            className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground font-semibold items-center gap-1 lg:gap-2 px-3 lg:px-4 py-2 lg:py-2 text-sm lg:text-sm cursor-pointer"
            asChild
          >
            <Link href="/coming-soon">Ship</Link>
          </Button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 sm:w-9 sm:h-9 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 flex items-center justify-center hover:bg-card/80 transition-all duration-300 cursor-pointer"
          >
            {isMobileMenuOpen ? (
              <X size={20} className="text-foreground sm:w-4 sm:h-4" />
            ) : (
              <List size={20} className="text-foreground sm:w-4 sm:h-4" />
            )}
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      >
        <div className="absolute inset-0 bg-background/95 backdrop-blur-sm" />
        <div
          className={`absolute top-0 left-0 right-0 bg-card/90 backdrop-blur-md border-b border-border/50 transform transition-transform duration-300 ${isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
            }`}
        >
          <div className="px-4 sm:px-6 py-16 sm:py-20 space-y-4 sm:space-y-6">
            <button
              onClick={() => scrollToSection("hero")}
              className="block w-full text-left text-base sm:text-lg text-muted-foreground hover:text-foreground transition-colors py-2 cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("demo")}
              className="block w-full text-left text-base sm:text-lg text-muted-foreground hover:text-foreground transition-colors py-2 cursor-pointer"
            >
              Demo
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="block w-full text-left text-base sm:text-lg text-muted-foreground hover:text-foreground transition-colors py-2 cursor-pointer"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="block w-full text-left text-base sm:text-lg text-muted-foreground hover:text-foreground transition-colors py-2 cursor-pointer"
            >
              Pricing
            </button>
            <div className="pt-4">
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold flex items-center justify-center gap-2 py-3 cursor-pointer"
                asChild
              >
                <Link href="/coming-soon">
                  <RocketLaunch size={16} weight="fill" />
                  Start
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

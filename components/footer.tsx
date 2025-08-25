"use client"

import { GithubLogo, TwitterLogo, LinkedinLogo, Envelope, Heart } from "@phosphor-icons/react"
import { BuildshipLaunch } from "./buildship-launch"

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId)
    el?.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <footer className="bg-muted/40 border-t border-border/50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <button
              type="button"
              onClick={() => scrollToSection('hero')}
              aria-label="Go to Hero section"
              className="flex items-center space-x-2 cursor-pointer"
            >
              <div className="w-8 h-8 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-primary flex items-center justify-center rounded-lg cursor-pointer">
                <BuildshipLaunch />
              </div>
              <span className="font-bold text-xl font-sans cursor-pointer">buildship</span>
            </button>
            <p className="text-muted-foreground text-sm">
              Build, Ship, Repeat with our AI-powered website builder. Create stunning websites in minutes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                <TwitterLogo className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                <GithubLogo className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                <LinkedinLogo className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                <Envelope className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors cursor-pointer">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors cursor-pointer">
                  Templates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors cursor-pointer">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors cursor-pointer">
                  API
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('hero')}
                  className="hover:text-foreground transition-colors cursor-pointer"
                >
                  About
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors cursor-pointer">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors cursor-pointer">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors cursor-pointer">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors cursor-pointer">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors cursor-pointer">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors cursor-pointer">
                  Status
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors cursor-pointer">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 text-center text-sm text-muted-foreground space-y-2">
          <p>
            <span className="me-1">
              &copy; {new Date().getFullYear()}
            </span>
            <a
              href="https://digilynk.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-foreground transition-colors"
            >
              digilynk.in
            </a>
            <p>All rights reserved. Built with AI, shipped with love.</p>
          </p>
          <p className="flex items-center justify-center gap-2">
            Made with
            <Heart className="w-4 h-4 text-primary" weight="fill" aria-label="love" />
            by
            <a
              href="https://digilynk.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-foreground transition-colors"
            >
              Digilynk
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

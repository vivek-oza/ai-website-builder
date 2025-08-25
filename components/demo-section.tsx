"use client"

import { useState, useEffect } from "react"
import { Check } from "@phosphor-icons/react"

export function DemoSection() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [previewContent, setPreviewContent] = useState(0)

  const steps = [
    "Generated layout structure",
    "Added responsive design",
    "Optimizing for mobile",
    "Finalizing components",
  ]

  const previewStates = [
    { title: "Tech Startup", subtitle: "Building the Future", progress: 25 },
    { title: "InnovateTech Solutions", subtitle: "Transforming Ideas into Reality", progress: 50 },
    { title: "InnovateTech Solutions", subtitle: "Transforming Ideas into Digital Success", progress: 75 },
    { title: "InnovateTech Solutions", subtitle: "Transforming Ideas into Digital Success", progress: 100 },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length)
      setPreviewContent((prev) => (prev + 1) % previewStates.length)
      setIsTyping(true)
      setTimeout(() => setIsTyping(false), 1000)
    }, 3000)

    return () => clearInterval(interval)
  }, [steps.length, previewStates.length])

  return (
    <section id="demo" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-manrope">
            Watch AI In <span className="text-primary">Action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Watch how our AI transforms your ideas into beautiful websites in real-time
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* AI Prompt Panel */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-sm text-muted-foreground">buildship.in/editor</span>
            </div>

            <div className="space-y-4">
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                <h3 className="text-primary font-semibold mb-2 font-manrope">AI Prompt</h3>
                <div className="bg-background/50 rounded-lg p-3 border border-border/30">
                  <p className="text-sm text-muted-foreground">"Create a modern landing page for a tech startup"</p>
                </div>
              </div>

              <div className="space-y-3">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-500 ${
                      index <= currentStep
                        ? "bg-primary/10 border border-primary/20"
                        : "bg-card/30 border border-border/20"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 ${
                        index < currentStep
                          ? "bg-primary"
                          : index === currentStep
                            ? "bg-primary animate-pulse"
                            : "bg-muted"
                      }`}
                    >
                      {index < currentStep && <Check size={12} className="text-primary-foreground" weight="bold" />}
                    </div>
                    <span
                      className={`text-sm transition-colors duration-300 ${
                        index <= currentStep ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Live Preview Panel */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-sm text-muted-foreground">Live Preview</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-xs font-medium">LIVE</span>
              </div>
            </div>

            <div className="bg-background rounded-lg p-6 border border-border/30 min-h-[300px]">
              <div className="space-y-4">
                <div className="transition-all duration-500">
                  <div className="h-8 bg-primary/20 rounded-lg flex items-center px-3 transition-all duration-500">
                    <span className="text-sm font-semibold text-primary/80 transition-all duration-500">
                      {previewStates[previewContent].title}
                    </span>
                  </div>
                </div>
                <div className="transition-all duration-500">
                  <div className="h-4 bg-muted/50 rounded flex items-center px-2">
                    <span className="text-xs text-muted-foreground transition-all duration-500">
                      {previewStates[previewContent].subtitle}
                    </span>
                  </div>
                </div>
                <div className="h-4 bg-muted/50 rounded w-2/3"></div>
                <div className="mt-6 space-y-3">
                  <div className="h-20 bg-muted/30 rounded-lg relative overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full bg-primary/10 transition-all duration-1000 ease-out"
                      style={{ width: `${previewStates[previewContent].progress}%` }}
                    ></div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-16 bg-muted/30 rounded-lg"></div>
                    <div className="h-16 bg-muted/30 rounded-lg"></div>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="h-10 bg-primary/30 rounded-lg w-32 flex items-center justify-center">
                    <span className="text-xs font-medium text-primary/80">Get Started</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

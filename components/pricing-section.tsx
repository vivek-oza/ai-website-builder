"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "@phosphor-icons/react"
import Link from "next/link"

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "/month",
    description: "Perfect for personal projects and small websites",
    features: ["5 AI-generated websites", "Basic templates", "Mobile responsive", "SSL certificate", "24/7 support"],
    popular: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "Ideal for businesses and professional websites",
    features: [
      "Unlimited AI websites",
      "Premium templates",
      "Custom branding",
      "Advanced SEO tools",
      "Analytics dashboard",
      "Priority support",
      "Export code",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "/month",
    description: "For agencies and large-scale operations",
    features: [
      "Everything in Pro",
      "White-label solution",
      "API access",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantee",
      "Advanced security",
    ],
    popular: false,
  },
]

export function PricingSection() {
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
    <section id="pricing" className="py-24 px-4 bg-muted/20">
      <div ref={sectionRef} className="max-w-7xl mx-auto opacity-0">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-manrope">
            Simple <span className="text-primary">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-manrope">
            Choose the perfect plan for your needs. All plans include our core AI features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 relative gap-0 bg-card/30 hover:bg-card/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-b-4 hover:border-b-primary/50 border-solid ${plan.popular
                ? "glass-effect !border-2 !border-primary !border-solid ring-0 shadow-none hover:!shadow-none scale-105"
                : "glass-effect border border-gray-700"
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-black px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#030302" viewBox="0 0 256 256"><path d="M230.33,141.06a24.34,24.34,0,0,0-18.61-4.77C230.5,117.33,240,98.48,240,80c0-26.47-21.29-48-47.46-48A47.58,47.58,0,0,0,156,48.75,47.58,47.58,0,0,0,119.46,32C93.29,32,72,53.53,72,80c0,11,3.24,21.69,10.06,33a31.87,31.87,0,0,0-14.75,8.4L44.69,144H16A16,16,0,0,0,0,160v40a16,16,0,0,0,16,16H120a7.93,7.93,0,0,0,1.94-.24l64-16a6.94,6.94,0,0,0,1.19-.4L226,182.82l.44-.2a24.6,24.6,0,0,0,3.93-41.56ZM119.46,48A31.15,31.15,0,0,1,148.6,67a8,8,0,0,0,14.8,0,31.15,31.15,0,0,1,29.14-19C209.59,48,224,62.65,224,80c0,19.51-15.79,41.58-45.66,63.9l-11.09,2.55A28,28,0,0,0,140,112H100.68C92.05,100.36,88,90.12,88,80,88,62.65,102.41,48,119.46,48ZM16,160H40v40H16Zm203.43,8.21-38,16.18L119,200H56V155.31l22.63-22.62A15.86,15.86,0,0,1,89.94,128H140a12,12,0,0,1,0,24H112a8,8,0,0,0,0,16h32a8.32,8.32,0,0,0,1.79-.2l67-15.41.31-.08a8.6,8.6,0,0,1,6.3,15.9Z"></path></svg>
                    Value
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full cursor-pointer ${plan.popular
                  ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                  : "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  }`}
                size="lg"
                asChild
              >
                <Link href="/coming-soon">Get Started</Link>
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">All plans include a 14-day free trial. No credit card required.</p>
          <div className="flex justify-center gap-8 text-sm text-muted-foreground">
            <span>✓ Cancel anytime</span>
            <span>✓ 30-day money back</span>
            <span>✓ No setup fees</span>
          </div>
        </div>
      </div>
    </section>
  )
}

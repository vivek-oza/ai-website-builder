"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Star } from "phosphor-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Startup Founder",
    content:
      "buildship helped me launch my startup's website in just 30 minutes. The AI understood exactly what I needed.",
    rating: 5,
    avatar: "/professional-asian-woman-with-short-hair-in-busine.png",
  },
  {
    name: "Marcus Rodriguez",
    role: "Freelance Designer",
    content:
      "As a designer, I was skeptical about AI tools. But buildship creates genuinely beautiful, modern websites.",
    rating: 5,
    avatar: "/professional-hispanic-man-with-beard-in-casual-shi.png",
  },
  {
    name: "Emily Watson",
    role: "Small Business Owner",
    content: "I went from zero to a professional website in minutes. The customer support is incredible too!",
    rating: 5,
    avatar: "/professional-blonde-woman-in-blazer-smiling.png",
  },
  {
    name: "David Kim",
    role: "Marketing Director",
    content: "The SEO optimization and mobile responsiveness are top-notch. Our traffic increased by 200%.",
    rating: 5,
    avatar: "/professional-korean-man-in-suit-and-tie.png",
  },
  {
    name: "Lisa Thompson",
    role: "E-commerce Owner",
    content: "buildship made it so easy to create a beautiful online store. Sales have never been better!",
    rating: 5,
    avatar: "/professional-woman-with-curly-hair-in-business-cas.png",
  },
  {
    name: "Alex Johnson",
    role: "Tech Consultant",
    content: "The code quality is impressive. Clean, semantic, and follows all the best practices.",
    rating: 5,
    avatar: "/professional-man-with-glasses-in-tech-startup-styl.png",
  },
]

export function TestimonialsSection() {
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
    <section className="py-24 px-4">
      <div ref={sectionRef} className="max-w-7xl mx-auto opacity-0">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-manrope">
            What Our <span className="text-primary">Users Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-manrope">
            Join thousands of satisfied customers who've transformed their online presence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="glass-effect border-border/50 p-6 transition-all duration-300 hover:bg-gradient-to-br hover:from-black/20 hover:via-black/10 hover:to-primary/10 hover:backdrop-blur-md hover:border-primary/20 hover:shadow-lg hover:shadow-primary/10 group cursor-pointer"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-primary text-primary group-hover:fill-primary/80 transition-colors"
                    weight="fill"
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic group-hover:text-foreground/90 transition-colors">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <div className="font-semibold group-hover:text-foreground transition-colors">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

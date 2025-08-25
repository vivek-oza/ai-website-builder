import type React from "react"
import type { Metadata } from "next"
import { Inter, Manrope } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "BuildShip - AI Website Builder",
  description: "Build, Ship, Repeat with our AI-powered website builder",
  generator: 'v0.app',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.buildship.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: '/',
    title: 'BuildShip - AI Website Builder',
    description: 'Build, Ship, Repeat with our AI-powered website builder',
    siteName: 'BuildShip',
    images: ['/og-image.png'],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BuildShip - AI Website Builder',
    description: 'Build, Ship, Repeat with our AI-powered website builder',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  keywords: [
    'AI website builder', 'free AI website builder', 'AI website generator', 'free AI website generator', 'AI website', 'AI site builder', 'AI site generator', 'AI landing page builder', 'AI landing page generator', 'AI homepage builder', 'AI homepage generator', 'AI portfolio builder', 'AI blog builder', 'AI SaaS website builder', 'AI startup website builder', 'AI ecommerce website builder', 'AI shop website builder', 'AI page builder', 'AI content generator website', 'AI website design', 'AI website maker', 'free AI website maker', 'chatgpt website maker', 'GPT website maker', 'AI website creator', 'free AI website creator', 'no code AI website', 'nocode AI website builder', 'generate website with AI', 'build website with AI', 'create website with AI', 'AI web design tool', 'AI web builder', 'AI web page generator', 'AI html generator', 'AI tailwind website', 'AI nextjs website', 'AI seo website builder', 'AI marketing website builder', 'AI landing pages free', 'AI page generator free', 'best AI website builder', 'top AI website builder', 'fast AI website builder', 'simple AI website builder', 'AI website builder for startups', 'AI website builder for small business', 'AI website builder free plan', 'AI website builder free forever', 'free AI', 'free AI tools for websites', 'buildship', 'BuildShip AI', 'BuildShip website builder', 'BuildShip AI builder', 'BuildShip generator', 'AI website app', 'AI webpage maker', 'AI UI generator', 'AI component generator', 'AI hero section generator', 'AI pricing page generator', 'AI features section generator', 'AI testimonials generator', 'AI copywriting website', 'AI SEO website', 'AI meta tags generator', 'AI open graph generator', 'AI twitter card generator', 'AI favicon generator', 'AI ssg website', 'AI static website builder', 'AI jamstack builder', 'AI next.js website builder', 'AI react website builder', 'AI tailwind website builder', 'AI shadcn website builder', 'AI Stripe landing page', 'AI SaaS landing page', 'AI product landing page', 'AI marketing site', 'AI personal website builder', 'AI resume website builder', 'AI portfolio website maker', 'AI startup landing', 'chatgpt website', 'chatgpt site builder', 'gpt website', 'gpt web builder', 'openai website builder', 'open source AI website builder', 'AI website templates', 'AI website blocks', 'AI website sections', 'AI website free', 'free website maker AI', 'free site generator AI', 'no-cost AI website builder', 'instant website AI', 'one click website AI', 'build website fast AI', 'launch website AI', 'ship website AI', 'website builder with AI', 'website generator with AI', 'automated website builder', 'AI CMS website', 'AI documentation site builder', 'AI blog generator', 'AI landing page optimizer', 'AI A/B testing website', 'AI CRO website', 'AI design to code', 'AI figma to website', 'AI prompt to website', 'AI text to website', 'AI image to website', 'AI website wizard', 'AI codegen website', 'AI page sections', 'AI marketing copy generator', 'AI CTA generator', 'AI sitemap generator', 'AI robots generator', 'AI schema markup generator', 'AI structured data website', 'AI canonical tags', 'AI hreflang', 'AI technical SEO', 'AI semantic SEO', 'AI long-tail keywords website', 'AI free plan website builder', 'AI unlimited pages free', 'AI website for entrepreneurs', 'free ai website maker', 'best free ai website maker', 'ai website maker no coding', 'ai site builder free', 'ai website creator free', 'ai landing page free', 'create website free ai', 'build website free ai', 'generate website free ai', 'ai builder for startups', 'ai website for small business', 'ai website generator for beginners', 'ai website builder with templates', 'ai website builder without coding', 'ai website builder drag and drop', 'ai one click website maker', 'ai website generator instant', 'ai landing page generator free', 'ai seo tool for websites', 'ai meta description generator', 'ai title tag generator', 'ai keyword generator website', 'ai content generator for landing pages', 'ai homepage copy generator', 'ai pricing copy generator', 'ai testimonial generator website', 'ai features copy generator', 'ai website images generator', 'ai favicon maker', 'ai brand kit website', 'ai logo to website', 'ai chatbot website maker', 'chatgpt website generator free', 'chatgpt site generator', 'gpt website builder free', 'openai website maker', 'ai web app builder', 'ai static site generator', 'ai jamstack site generator', 'ai nextjs site generator', 'ai react site generator', 'ai tailwind site generator', 'ai documentation generator website', 'ai blog writer website', 'ai marketing site generator', 'ai portfolio generator free', 'ai resume website free', 'ai personal site generator', 'ai startup page generator', 'ai product page generator', 'ai hero section maker', 'ai cta generator website', 'ai seo checklist website', 'ai schema generator website', 'ai sitemap creator', 'ai robots.txt generator', 'ai open graph image generator', 'ai twitter card image generator', 'ai canonical url generator', 'ai hreflang generator', 'ai link building website', 'ai internal linking website', 'ai site speed optimizer', 'ai core web vitals', 'ai lighthouse optimization', 'ai structured data validator', 'ai rich results website', 'ai serp optimization', 'ai keyword clustering website', 'ai topical authority builder', 'ai content briefs website', 'ai content outlines website', 'ai content optimization website'
  ],
  icons: {
    icon: [
      { url: "/buildship_fav.svg", type: "image/svg+xml" },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} dark`}>
      <head>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'BuildShip',
              url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.buildship.in',
              logo: '/buildship_fav.svg',
              sameAs: [
                'https://www.buildship.in/',
                'https://www.instagram.com/buildship.in',
              ],
            }),
          }}
        />
        {/* Product/SoftwareApplication Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'BuildShip - AI Website Builder',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Any',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
              description: 'AI-powered website builder to create and ship websites quickly with free plan.',
              url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.buildship.in',
              image: '/og-image.png',
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

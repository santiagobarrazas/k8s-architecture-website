"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Architecture from "@/components/architecture"
import GitOps from "@/components/gitops"
import Security from "@/components/security"
import Observability from "@/components/observability"
import CodeQuality from "@/components/code-quality"
import Footer from "@/components/footer"
import { LanguageProvider } from "@/contexts/language-context"

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "architecture", "gitops", "security", "observability", "code-quality"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <LanguageProvider>
      <div className="bg-gray-900 text-gray-100 min-h-screen">
        <Navbar activeSection={activeSection} />
        <main>
          <Hero />
          <Architecture />
          <GitOps />
          <Security />
          <Observability />
          <CodeQuality />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

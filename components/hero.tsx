"use client"

import { useEffect, useState } from "react"
import TechPill from "./tech-pill"
import { useLanguage } from "@/contexts/language-context"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const technologies = [
    { name: "AWS", tooltipKey: "tooltip.aws" },
    { name: "Kubernetes (EKS)", tooltipKey: "tooltip.eks" },
    { name: "Terraform", tooltipKey: "tooltip.terraform" },
    { name: "GitOps", tooltipKey: "tooltip.gitops" },
    { name: "ArgoCD", tooltipKey: "tooltip.argocd" },
    { name: "GitHub Actions", tooltipKey: "tooltip.github" },
    { name: "Docker", tooltipKey: "tooltip.docker" },
    { name: "Helm", tooltipKey: "tooltip.helm" },
    { name: "Prometheus", tooltipKey: "tooltip.prometheus" },
    { name: "Grafana", tooltipKey: "tooltip.grafana" },
    { name: "Linkerd", tooltipKey: "tooltip.linkerd" },
    { name: "Spring Boot", tooltipKey: "tooltip.spring" },
  ]

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-6xl mx-auto text-center">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-title bg-gradient-to-r from-cyan-400 to-green-400">
            {t("hero.title")}
          </h1>

          <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 font-light">{t("hero.subtitle")}</h2>

          <div className="text-lg md:text-xl text-cyan-400 mb-8 font-medium">{t("hero.description")}</div>

          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
            {t("hero.summary")}
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {technologies.map((tech, index) => (
              <TechPill key={tech.name} name={tech.name} tooltipKey={tech.tooltipKey} delay={index * 100} />
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById("architecture")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-green-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              {t("hero.explore")}
            </button>
            <button
              onClick={() => document.getElementById("gitops")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
            >
              {t("hero.gitops")}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

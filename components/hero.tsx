"use client"

import { useEffect, useState } from "react"
import TechPill from "./tech-pill"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const technologies = [
    { name: "AWS", icon: "☁️" },
    { name: "Kubernetes (EKS)", icon: "⚙️", tooltip: "Elastic Kubernetes Service" },
    { name: "Terraform", icon: "🏗️" },
    { name: "GitOps", icon: "🔄" },
    { name: "ArgoCD", icon: "🚀" },
    { name: "GitHub Actions", icon: "⚡" },
    { name: "Docker", icon: "🐳" },
    { name: "Helm", icon: "⛵" },
    { name: "Prometheus", icon: "📊" },
    { name: "Grafana", icon: "📈" },
    { name: "Linkerd", icon: "🔗" },
    { name: "Spring Boot", icon: "🍃" },
  ]

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-6xl mx-auto text-center">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
            Despliegue de Arquitectura Escalable en Kubernetes
          </h1>

          <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 font-light">con enfoque GitOps</h2>

          <div className="text-lg md:text-xl text-cyan-400 mb-8 font-medium">
            Una solución E-commerce de microservicios en AWS, automatizada con GitHub Actions y ArgoCD
          </div>

          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
            Este proyecto demuestra la implementación de un sistema de e-commerce nativo de la nube, desde la
            infraestructura como código (IaC) con Terraform hasta el despliegue continuo con GitOps. Se enfoca en
            escalabilidad, resiliencia, seguridad y observabilidad completa del ciclo de vida de la aplicación.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {technologies.map((tech, index) => (
              <TechPill key={tech.name} name={tech.name} icon={tech.icon} tooltip={tech.tooltip} delay={index * 100} />
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById("architecture")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-green-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              Explorar Arquitectura
            </button>
            <button
              onClick={() => document.getElementById("gitops")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
            >
              Ver GitOps Flow
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

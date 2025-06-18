"use client"

import { useEffect, useState } from "react"
import ImagePlaceholder from "./image-placeholder"
import { useLanguage } from "@/contexts/language-context"

export default function Architecture() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("architecture")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="architecture" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              {t("arch.title")}
            </h2>
          </div>

          {/* Infraestructura como Código */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-6">{t("arch.iac.title")}</h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">{t("arch.iac.description")}</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">Terraform</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">AWS EKS</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">VPC</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">NLB</span>
                </div>
              </div>
              <div>
                <ImagePlaceholder
                  description="Arquitectura de Infraestructura en la Nube de la página 31"
                  height="400px"
                  className="rounded-lg border border-cyan-500/30 shadow-lg shadow-cyan-500/10"
                />
              </div>
            </div>
          </div>

          {/* Arquitectura en Kubernetes */}
          <div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <h3 className="text-2xl md:text-3xl font-bold text-green-400 mb-6">{t("arch.k8s.title")}</h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">{t("arch.k8s.description")}</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Namespaces</span>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">Ingress-NGINX</span>
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm">Cert-Manager</span>
                  <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm">NetworkPolicies</span>
                </div>
              </div>
              <div className="lg:order-1">
                <ImagePlaceholder
                  description="Arquitectura de Kubernetes de la página 34"
                  height="400px"
                  className="rounded-lg border border-green-500/30 shadow-lg shadow-green-500/10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

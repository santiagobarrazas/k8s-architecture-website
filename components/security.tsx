"use client"

import { useEffect, useState } from "react"
import ImagePlaceholder from "./image-placeholder"
import { Shield, Network, Key } from "lucide-react"

export default function Security() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("security")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="security" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Fortificando la Arquitectura
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              La seguridad no fue un añadido, sino un pilar central. Se implementaron múltiples capas para proteger el
              sistema.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Análisis de Vulnerabilidades */}
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-red-400">Análisis de Vulnerabilidades</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Integración de <span className="text-red-400 font-semibold">Trivy</span> en el pipeline de CI para
                escanear imágenes Docker en busca de vulnerabilidades antes del despliegue, bloqueando compilaciones
                inseguras.
              </p>
              <ImagePlaceholder
                description="Pipeline de Trivy fallando por vulnerabilidades críticas, de la página 56"
                height="200px"
                className="rounded-lg border border-red-500/30 shadow-lg shadow-red-500/10"
              />
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm">Trivy Scanner</span>
                <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm">CVE Detection</span>
              </div>
            </div>

            {/* Aislamiento de Red */}
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Network className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-blue-400">Aislamiento de Red</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Uso de <span className="text-blue-400 font-semibold">Calico</span> para implementar NetworkPolicies que
                restringen la comunicación entre pods al mínimo necesario, reduciendo drásticamente la superficie de
                ataque.
              </p>
              <ImagePlaceholder
                description="Lista de NetworkPolicies en Kubernetes, de la página 44"
                height="200px"
                className="rounded-lg border border-blue-500/30 shadow-lg shadow-blue-500/10"
              />
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Calico CNI</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">NetworkPolicies</span>
              </div>
            </div>

            {/* Gestión de Secretos */}
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Key className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-green-400">Gestión de Secretos</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Implementación de rotación automática de secretos con{" "}
                <span className="text-green-400 font-semibold">CronJobs</span> y ServiceAccounts con privilegios mínimos
                (<span className="text-cyan-400 font-semibold">RBAC</span>) para manejar credenciales de forma segura y
                dinámica.
              </p>
              <ImagePlaceholder
                description="Código del CronJob o de un Secret de la página 64"
                height="200px"
                className="rounded-lg border border-green-500/30 shadow-lg shadow-green-500/10"
              />
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">CronJobs</span>
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">RBAC</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

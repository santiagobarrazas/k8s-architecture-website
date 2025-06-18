"use client"

import { useEffect, useState } from "react"
import ImagePlaceholder from "./image-placeholder"

export default function GitOps() {
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

    const element = document.getElementById("gitops")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="gitops" className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-7xl mx-auto">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              El Flujo GitOps: Automatización y Confianza
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              El núcleo del proyecto es su pipeline <span className="text-green-400 font-semibold">CI/CD</span> basado
              en GitOps. Cada push a una rama (dev, stage, master) desencadena un flujo automatizado en
              <span className="text-blue-400 font-semibold"> GitHub Actions</span> que compila, prueba y empaqueta la
              aplicación en una imagen Docker. Luego, <span className="text-cyan-400 font-semibold">ArgoCD</span>{" "}
              detecta los cambios en los manifiestos de Helm y sincroniza automáticamente el clúster, asegurando que el
              estado en vivo siempre refleje el deseado en Git.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Flujo de Trabajo Automatizado */}
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-green-400 mb-4">Flujo de Trabajo Automatizado</h3>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm mt-1">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-400">Push al Repositorio</h4>
                      <p className="text-sm">Desarrollador hace push a rama dev/stage/master</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mt-1">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400">GitHub Actions</h4>
                      <p className="text-sm">Pipeline CI ejecuta tests, build y push de imagen Docker</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm mt-1">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-cyan-400">ArgoCD Sync</h4>
                      <p className="text-sm">ArgoCD detecta cambios y sincroniza el clúster automáticamente</p>
                    </div>
                  </div>
                </div>
              </div>
              <ImagePlaceholder
                description="Diagrama del Flujo Automatizado de la página 8"
                height="300px"
                className="rounded-lg border border-green-500/30 shadow-lg shadow-green-500/10"
              />
            </div>

            {/* Relación Ramas y Entornos */}
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-4">Relación Ramas y Entornos</h3>
                <div className="space-y-4">
                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="font-semibold text-green-400">rama: dev</span>
                      <span className="text-gray-400">→</span>
                      <span className="text-cyan-400">namespace: dev</span>
                    </div>
                    <p className="text-sm text-gray-400">Entorno de desarrollo para pruebas iniciales</p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span className="font-semibold text-yellow-400">rama: stage</span>
                      <span className="text-gray-400">→</span>
                      <span className="text-cyan-400">namespace: stage</span>
                    </div>
                    <p className="text-sm text-gray-400">Entorno de staging para validación pre-producción</p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="font-semibold text-red-400">rama: master</span>
                      <span className="text-gray-400">→</span>
                      <span className="text-cyan-400">namespace: master</span>
                    </div>
                    <p className="text-sm text-gray-400">Entorno de producción con alta disponibilidad</p>
                  </div>
                </div>
              </div>
              <ImagePlaceholder
                description="Diagrama de la relación entre ramas y namespaces de la página 9"
                height="300px"
                className="rounded-lg border border-blue-500/30 shadow-lg shadow-blue-500/10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

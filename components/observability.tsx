"use client"

import { useEffect, useState } from "react"
import ImagePlaceholder from "./image-placeholder"
import { BarChart3, Activity, Zap } from "lucide-react"

export default function Observability() {
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

    const element = document.getElementById("observability")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="observability" className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-7xl mx-auto">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Visibilidad Completa y Rendimiento a Escala
            </h2>
          </div>

          {/* Monitoreo y Logging */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-purple-400 mb-8 text-center">Monitoreo y Logging</h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-12 text-center max-w-4xl mx-auto">
              Se implementó una pila de observabilidad completa.{" "}
              <span className="text-orange-400 font-semibold">Prometheus</span> y
              <span className="text-orange-400 font-semibold"> Grafana</span> para la recolección y visualización de
              métricas y alertas; el stack <span className="text-yellow-400 font-semibold">ELK</span> (Elasticsearch,
              Logstash, Kibana) para el logging centralizado; y{" "}
              <span className="text-green-400 font-semibold">Linkerd</span> para métricas de service mesh y trazabilidad
              mTLS.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mb-4">
                  <BarChart3 className="w-12 h-12 text-orange-400 mx-auto mb-2" />
                  <h4 className="text-xl font-bold text-orange-400">Dashboard de Grafana</h4>
                </div>
                <ImagePlaceholder
                  description="Dashboard principal de Grafana a nivel de clúster, de la página 77"
                  height="250px"
                  className="rounded-lg border border-orange-500/30 shadow-lg shadow-orange-500/10"
                />
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm">Prometheus</span>
                  <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm">Grafana</span>
                </div>
              </div>

              <div className="text-center">
                <div className="mb-4">
                  <Activity className="w-12 h-12 text-yellow-400 mx-auto mb-2" />
                  <h4 className="text-xl font-bold text-yellow-400">Logs Centralizados</h4>
                </div>
                <ImagePlaceholder
                  description="Logs en la interfaz de Kibana, de la página 84"
                  height="250px"
                  className="rounded-lg border border-yellow-500/30 shadow-lg shadow-yellow-500/10"
                />
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm">Elasticsearch</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Kibana</span>
                </div>
              </div>

              <div className="text-center">
                <div className="mb-4">
                  <Zap className="w-12 h-12 text-green-400 mx-auto mb-2" />
                  <h4 className="text-xl font-bold text-green-400">Service Mesh</h4>
                </div>
                <ImagePlaceholder
                  description="Topología del service mesh en Linkerd, de la página 52"
                  height="250px"
                  className="rounded-lg border border-green-500/30 shadow-lg shadow-green-500/10"
                />
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Linkerd</span>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">mTLS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pruebas de Carga y Caos */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-pink-400 mb-8 text-center">Pruebas de Carga y Caos</h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-12 text-center max-w-4xl mx-auto">
              El sistema se validó bajo estrés. Se usó <span className="text-pink-400 font-semibold">Locust</span> para
              simular miles de peticiones y <span className="text-red-400 font-semibold">Chaos-Mesh</span> para inyectar
              fallos controlados (como latencia), probando la resiliencia y capacidad de auto-sanación de la
              arquitectura.
            </p>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="text-center">
                <h4 className="text-xl font-bold text-pink-400 mb-6">Pruebas de Carga con Locust</h4>
                <ImagePlaceholder
                  description="Gráficas del reporte de Locust, de la página 88"
                  height="300px"
                  className="rounded-lg border border-pink-500/30 shadow-lg shadow-pink-500/10"
                />
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  <span className="px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full text-sm">Locust</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Load Testing</span>
                </div>
              </div>

              <div className="text-center">
                <h4 className="text-xl font-bold text-red-400 mb-6">Ingeniería del Caos</h4>
                <ImagePlaceholder
                  description="Métrica de latencia en Linkerd durante la prueba de caos, de la página 90"
                  height="300px"
                  className="rounded-lg border border-red-500/30 shadow-lg shadow-red-500/10"
                />
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm">Chaos-Mesh</span>
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm">
                    Fault Injection
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

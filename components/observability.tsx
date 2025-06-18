"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { BarChart3, Activity, Zap, Maximize2 } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import ImageModal from "./image-modal"

export default function Observability() {
  const [isVisible, setIsVisible] = useState(false)
  const [modalImage, setModalImage] = useState<string | null>(null)
  const [modalTitle, setModalTitle] = useState("")
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

    const element = document.getElementById("observability")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const openModal = (src: string, title: string) => {
    setModalImage(src)
    setModalTitle(title)
  }

  const closeModal = () => {
    setModalImage(null)
    setModalTitle("")
  }

  return (
    <>
      <section id="observability" className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-title bg-gradient-to-r from-purple-400 to-pink-400">
                {t("observability.title")}
              </h2>
            </div>

            {/* Monitoreo y Logging */}
            <div className="mb-20">
              <h3 className="text-2xl md:text-3xl font-bold text-purple-400 mb-8 text-center">
                {t("observability.monitoring.title")}
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-12 text-center max-w-4xl mx-auto">
                {t("observability.monitoring.description")}
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="mb-4">
                    <BarChart3 className="w-12 h-12 text-orange-400 mx-auto mb-2" />
                    <h4 className="text-xl font-bold text-orange-400">{t("observability.grafana.title")}</h4>
                  </div>
                  <div className="relative group">
                    <Image
                      src="/observability-grafana.png"
                      alt={t("image.observability.grafana")}
                      width={400}
                      height={250}
                      quality={95}
                      priority={false}
                      className="rounded-lg border border-orange-500/30 shadow-lg shadow-orange-500/10 cursor-pointer transition-transform duration-300 group-hover:scale-105 w-full h-auto"
                      onClick={() => openModal("/observability-grafana.png", t("image.observability.grafana"))}
                    />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-black/50 backdrop-blur-sm rounded-lg p-2">
                        <Maximize2 className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm">Prometheus</span>
                    <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm">Grafana</span>
                  </div>
                </div>

                <div className="text-center">
                  <div className="mb-4">
                    <Activity className="w-12 h-12 text-yellow-400 mx-auto mb-2" />
                    <h4 className="text-xl font-bold text-yellow-400">{t("observability.logs.title")}</h4>
                  </div>
                  <div className="relative group">
                    <Image
                      src="/observability-kibana.png"
                      alt={t("image.observability.kibana")}
                      width={400}
                      height={250}
                      quality={95}
                      priority={false}
                      className="rounded-lg border border-yellow-500/30 shadow-lg shadow-yellow-500/10 cursor-pointer transition-transform duration-300 group-hover:scale-105 w-full h-auto"
                      onClick={() => openModal("/observability-kibana.png", t("image.observability.kibana"))}
                    />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-black/50 backdrop-blur-sm rounded-lg p-2">
                        <Maximize2 className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm">Elasticsearch</span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Kibana</span>
                  </div>
                </div>

                <div className="text-center">
                  <div className="mb-4">
                    <Zap className="w-12 h-12 text-green-400 mx-auto mb-2" />
                    <h4 className="text-xl font-bold text-green-400">{t("observability.mesh.title")}</h4>
                  </div>
                  <div className="relative group">
                    <Image
                      src="/observability-linkerd.png"
                      alt={t("image.observability.linkerd")}
                      width={400}
                      height={250}
                      quality={95}
                      priority={false}
                      className="rounded-lg border border-green-500/30 shadow-lg shadow-green-500/10 cursor-pointer transition-transform duration-300 group-hover:scale-105 w-full h-auto"
                      onClick={() => openModal("/observability-linkerd.png", t("image.observability.linkerd"))}
                    />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-black/50 backdrop-blur-sm rounded-lg p-2">
                        <Maximize2 className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Linkerd</span>
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">mTLS</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pruebas de Carga y Caos */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-pink-400 mb-8 text-center">
                {t("observability.testing.title")}
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-12 text-center max-w-4xl mx-auto">
                {t("observability.testing.description")}
              </p>

              <div className="grid lg:grid-cols-2 gap-12">
                <div className="text-center">
                  <h4 className="text-xl font-bold text-pink-400 mb-6">{t("observability.locust.title")}</h4>
                  <div className="relative group flex justify-center">
                    <Image
                      src="/observability-locust.png"
                      alt={t("image.observability.locust")}
                      width={500}
                      height={300}
                      quality={95}
                      priority={false}
                      className="rounded-lg border border-pink-500/30 shadow-lg shadow-pink-500/10 cursor-pointer transition-transform duration-300 group-hover:scale-105 w-full h-auto max-w-md"
                      onClick={() => openModal("/observability-locust.png", t("image.observability.locust"))}
                    />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-black/50 backdrop-blur-sm rounded-lg p-2">
                        <Maximize2 className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    <span className="px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full text-sm">Locust</span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Load Testing</span>
                  </div>
                </div>

                <div className="text-center">
                  <h4 className="text-xl font-bold text-red-400 mb-6">{t("observability.chaos.title")}</h4>
                  <div className="relative group flex justify-center">
                    <Image
                      src="/observability-chaos.png"
                      alt={t("image.observability.chaos")}
                      width={500}
                      height={300}
                      quality={95}
                      priority={false}
                      className="rounded-lg border border-red-500/30 shadow-lg shadow-red-500/10 cursor-pointer transition-transform duration-300 group-hover:scale-105 w-full h-auto max-w-md"
                      onClick={() => openModal("/observability-chaos.png", t("image.observability.chaos"))}
                    />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-black/50 backdrop-blur-sm rounded-lg p-2">
                        <Maximize2 className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
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

      {/* Modal de pantalla completa */}
      <ImageModal
        src={modalImage || ""}
        alt={modalTitle}
        title={modalTitle}
        isOpen={!!modalImage}
        onClose={closeModal}
      />
    </>
  )
}

"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Shield, Network, Key, Maximize2 } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import ImageModal from "./image-modal"

export default function Security() {
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

    const element = document.getElementById("security")
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
      <section id="security" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                {t("security.title")}
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">{t("security.description")}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Análisis de Vulnerabilidades */}
              <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold text-red-400">{t("security.vuln.title")}</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">{t("security.vuln.description")}</p>
                <div className="relative group">
                  <Image
                    src="/security-trivy.png"
                    alt="Pipeline de Trivy fallando por vulnerabilidades críticas"
                    width={400}
                    height={200}
                    className="rounded-lg border border-red-500/30 shadow-lg shadow-red-500/10 cursor-pointer transition-transform duration-300 group-hover:scale-105"
                    onClick={() => openModal("/security-trivy.png", "Pipeline de Trivy fallando por vulnerabilidades críticas")}
                  />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-black/50 backdrop-blur-sm rounded-lg p-2">
                      <Maximize2 className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
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
                  <h3 className="text-xl font-bold text-blue-400">{t("security.network.title")}</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">{t("security.network.description")}</p>
                <div className="relative group">
                  <Image
                    src="/security-network-policies.png"
                    alt="Lista de NetworkPolicies en Kubernetes"
                    width={400}
                    height={200}
                    className="rounded-lg border border-blue-500/30 shadow-lg shadow-blue-500/10 cursor-pointer transition-transform duration-300 group-hover:scale-105"
                    onClick={() => openModal("/security-network-policies.png", "Lista de NetworkPolicies en Kubernetes")}
                  />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-black/50 backdrop-blur-sm rounded-lg p-2">
                      <Maximize2 className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
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
                  <h3 className="text-xl font-bold text-green-400">{t("security.secrets.title")}</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">{t("security.secrets.description")}</p>
                <div className="relative group">
                  <Image
                    src="/security-secrets.png"
                    alt="Código del CronJob o de un Secret"
                    width={400}
                    height={200}
                    className="rounded-lg border border-green-500/30 shadow-lg shadow-green-500/10 cursor-pointer transition-transform duration-300 group-hover:scale-105"
                    onClick={() => openModal("/security-secrets.png", "Código del CronJob o de un Secret")}
                  />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-black/50 backdrop-blur-sm rounded-lg p-2">
                      <Maximize2 className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">CronJobs</span>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">RBAC</span>
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

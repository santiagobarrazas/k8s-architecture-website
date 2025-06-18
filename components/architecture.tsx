"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Maximize2 } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import ImageModal from "./image-modal"

export default function Architecture() {
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

    const element = document.getElementById("architecture")
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
      <section id="architecture" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-title bg-gradient-to-r from-cyan-400 to-green-400">
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
                <div className="relative group">
                  <Image
                    src="/architecture-infrastructure.svg"
                    alt={t("image.architecture.infrastructure")}
                    width={600}
                    height={400}
                    className="rounded-lg border border-cyan-500/30 shadow-lg shadow-cyan-500/10 cursor-pointer transition-transform duration-300 group-hover:scale-105 bg-white"
                    onClick={() => openModal("/architecture-infrastructure.svg", t("image.architecture.infrastructure"))}
                  />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-black/50 backdrop-blur-sm rounded-lg p-2">
                      <Maximize2 className="w-5 h-5 text-white" />
                    </div>
                  </div>
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
                <div className="lg:order-1 relative group">
                  <Image
                    src="/architecture-kubernetes.svg"
                    alt={t("image.architecture.kubernetes")}
                    width={600}
                    height={400}
                    className="rounded-lg border border-green-500/30 shadow-lg shadow-green-500/10 cursor-pointer transition-transform duration-300 group-hover:scale-105 bg-white"
                    onClick={() => openModal("/architecture-kubernetes.svg", t("image.architecture.kubernetes"))}
                  />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-black/50 backdrop-blur-sm rounded-lg p-2">
                      <Maximize2 className="w-5 h-5 text-white" />
                    </div>
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

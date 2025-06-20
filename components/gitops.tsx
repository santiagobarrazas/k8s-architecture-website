"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Maximize2 } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import ImageModal from "./image-modal"

export default function GitOps() {
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

    const element = document.getElementById("gitops")
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
      <section id="gitops" className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-title bg-gradient-to-r from-green-400 to-blue-400">
                {t("gitops.title")}
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">{t("gitops.description")}</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Flujo de Trabajo Automatizado */}
              <div className="space-y-6">
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-green-400 mb-4">{t("gitops.workflow.title")}</h3>
                  <div className="space-y-4 text-gray-300">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm mt-1">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-400">{t("gitops.workflow.step1")}</h4>
                        <p className="text-sm">{t("gitops.workflow.step1.desc")}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mt-1">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-400">{t("gitops.workflow.step2")}</h4>
                        <p className="text-sm">{t("gitops.workflow.step2.desc")}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm mt-1">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-cyan-400">{t("gitops.workflow.step3")}</h4>
                        <p className="text-sm">{t("gitops.workflow.step3.desc")}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <Image
                    src="/gitops-workflow.svg"
                    alt={t("image.gitops.workflow")}
                    width={500}
                    height={300}
                    className="rounded-lg border border-green-500/30 shadow-lg shadow-green-500/10 cursor-pointer transition-transform duration-300 group-hover:scale-105 bg-white"
                    onClick={() => openModal("/gitops-workflow.svg", t("image.gitops.workflow"))}
                  />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-black/50 backdrop-blur-sm rounded-lg p-2">
                      <Maximize2 className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Relación Ramas y Entornos */}
              <div className="space-y-6">
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-4">{t("gitops.branches.title")}</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="font-semibold text-green-400">rama: dev</span>
                        <span className="text-gray-400">→</span>
                        <span className="text-cyan-400">namespace: dev</span>
                      </div>
                      <p className="text-sm text-gray-400">{t("gitops.branches.dev")}</p>
                    </div>
                    <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <span className="font-semibold text-yellow-400">rama: stage</span>
                        <span className="text-gray-400">→</span>
                        <span className="text-cyan-400">namespace: stage</span>
                      </div>
                      <p className="text-sm text-gray-400">{t("gitops.branches.stage")}</p>
                    </div>
                    <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <span className="font-semibold text-red-400">rama: master</span>
                        <span className="text-gray-400">→</span>
                        <span className="text-cyan-400">namespace: master</span>
                      </div>
                      <p className="text-sm text-gray-400">{t("gitops.branches.master")}</p>
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <Image
                    src="/gitops-branches.svg"
                    alt={t("image.gitops.branches")}
                    width={500}
                    height={300}
                    className="rounded-lg border border-blue-500/30 shadow-lg shadow-blue-500/10 cursor-pointer transition-transform duration-300 group-hover:scale-105 bg-white"
                    onClick={() => openModal("/gitops-branches.svg", t("image.gitops.branches"))}
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

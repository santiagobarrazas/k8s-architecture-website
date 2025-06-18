"use client"

import { useEffect, useState } from "react"
import { FileText, Play, Github, ExternalLink } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Documentation() {
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

    const element = document.getElementById("documentation")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const handlePdfDownload = () => {
    // Replace with actual PDF URL
    const pdfUrl = "/documentation.pdf"
    window.open(pdfUrl, "_blank")
  }

  const handleVideoClick = () => {
    // Replace with actual YouTube URL
    const videoUrl = "https://youtu.be/jgtHCSdkLBw"
    window.open(videoUrl, "_blank")
  }

  const handleGithubClick = () => {
    const githubUrl = "https://github.com/microservices-project-k8s-jenkins"
    window.open(githubUrl, "_blank")
  }

  return (
    <section id="documentation" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-title bg-gradient-to-r from-blue-400 to-indigo-400">
              {t("documentation.title")}
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {t("documentation.description")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* PDF Documentation */}
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-blue-400">{t("documentation.pdf.title")}</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {t("documentation.pdf.description")}
              </p>
              <button
                onClick={handlePdfDownload}
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <FileText className="w-5 h-5" />
                {t("documentation.pdf.button")}
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>

            {/* Project Presentation */}
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-purple-400">{t("documentation.presentation.title")}</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {t("documentation.presentation.description")}
              </p>
              <button
                onClick={() => window.open("/presentation.pdf", "_blank")}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <FileText className="w-5 h-5" />
                {t("documentation.presentation.button")}
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>

            {/* YouTube Video */}
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <Play className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-red-400">{t("documentation.video.title")}</h3>
                  <span className="text-sm text-gray-400">{t("documentation.video.note")}</span>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {t("documentation.video.description")}
              </p>
              <button
                onClick={handleVideoClick}
                className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5" />
                {t("documentation.video.button")}
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>

            {/* GitHub Repositories */}
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Github className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-green-400">{t("documentation.github.title")}</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {t("documentation.github.description")}
              </p>
              <button
                onClick={handleGithubClick}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Github className="w-5 h-5" />
                {t("documentation.github.button")}
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
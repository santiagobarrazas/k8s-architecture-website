"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { CheckCircle, Code, Shield } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function CodeQuality() {
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

    const element = document.getElementById("code-quality")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="code-quality" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              {t("quality.title")}
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">{t("quality.description")}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-green-400 mb-2">{t("quality.gate.title")}</h3>
                    <p className="text-gray-300">{t("quality.gate.description")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Code className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-400 mb-2">{t("quality.analysis.title")}</h3>
                    <p className="text-gray-300">{t("quality.analysis.description")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-purple-400 mb-2">{t("quality.security.title")}</h3>
                    <p className="text-gray-300">{t("quality.security.description")}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 text-center">
                  <div className="text-2xl font-bold text-green-400">0</div>
                  <div className="text-sm text-gray-400">Bugs</div>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 text-center">
                  <div className="text-2xl font-bold text-green-400">A</div>
                  <div className="text-sm text-gray-400">Security Rating</div>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 text-center">
                  <div className="text-2xl font-bold text-green-400">0</div>
                  <div className="text-sm text-gray-400">Vulnerabilities</div>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 text-center">
                  <div className="text-2xl font-bold text-green-400">A</div>
                  <div className="text-sm text-gray-400">Maintainability</div>
                </div>
              </div>
            </div>

            <div>
              <Image
                src="/quality-sonarqube.png"
                alt="Imagen del Quality Gate pasado en un Pull Request de GitHub"
                width={600}
                height={500}
                className="rounded-lg border border-indigo-500/30 shadow-lg shadow-indigo-500/10"
              />
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                <span className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm">SonarQube</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Quality Gate</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Code Analysis</span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">GitHub Integration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

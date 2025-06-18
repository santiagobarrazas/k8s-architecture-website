"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-cyan-400 mb-6">{t("footer.title")}</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">{t("footer.description")}</p>

          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://github.com/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/tu-perfil"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="mailto:tu-email@ejemplo.com"
              className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              Email
            </a>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-sm">
              {t("footer.designed")} <span className="text-cyan-400 font-semibold">[Tu Nombre]</span>, 2025
            </p>
            <p className="text-gray-600 text-xs mt-2">{t("footer.built")}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

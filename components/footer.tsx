"use client"

import { Github, Mail, Users } from "lucide-react"
import { LinkedinIcon } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-cyan-400 mb-6">{t("footer.title")}</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">{t("footer.description")}</p>

          {/* Equipo de desarrollo */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Users className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-semibold">{t("footer.team.title")}</span>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Desarrollador 1 */}
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h4 className="text-lg font-bold text-green-400 mb-2">{t("footer.team.dev1.name")}</h4>
                <div className="flex justify-center gap-3">
                  <a
                    href="https://github.com/santiagobarrazas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white rounded-lg transition-all duration-300"
                    title="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="https://linkedin.com/in/santiagobarrazas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300"
                    title="LinkedIn"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="mailto:sjbs0212@gmail.com"
                    className="p-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-300"
                    title="Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Desarrollador 2 */}
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h4 className="text-lg font-bold text-blue-400 mb-2">{t("footer.team.dev2.name")}</h4>
                <div className="flex justify-center gap-3">
                  <a
                    href="https://github.com/luisapino"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white rounded-lg transition-all duration-300"
                    title="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/lu-casta%C3%B1o/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300"
                    title="LinkedIn"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="mailto:luiisapino.28@gmail.com"
                    className="p-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-300"
                    title="Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Desarrollador 3 */}
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h4 className="text-lg font-bold text-purple-400 mb-2">{t("footer.team.dev3.name")}</h4>
                <div className="flex justify-center gap-3">
                  <a
                    href="https://github.com/Yustes1704"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white rounded-lg transition-all duration-300"
                    title="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/juan-yustes-028b6b274/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300"
                    title="LinkedIn"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="mailto:yustes2017@gmail.com"
                    className="p-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-300"
                    title="Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-sm">
              {t("footer.designed")} <span className="text-cyan-400 font-semibold">Santiago Barraza</span>, 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
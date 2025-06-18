"use client"

import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { Globe, ChevronDown } from "lucide-react"

export default function LanguageToggle() {
  const { locale, changeLocale, isLoading } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  if (isLoading) {
    return (
      <div className="flex items-center gap-2 px-3 py-2 bg-gray-800/50 rounded-lg animate-pulse">
        <Globe className="w-4 h-4 text-gray-400" />
        <div className="w-6 h-4 bg-gray-600 rounded"></div>
      </div>
    )
  }

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "es", name: "Español", flag: "🇪🇸" },
  ]

  const currentLanguage = languages.find((lang) => lang.code === locale)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-gray-800/50 hover:bg-gray-800/80 border border-gray-700 hover:border-cyan-500/50 rounded-lg transition-all duration-300 text-gray-300 hover:text-cyan-400"
        aria-label="Change language"
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">{currentLanguage?.flag}</span>
        <span className="text-sm font-medium uppercase">{locale}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />

          {/* Dropdown */}
          <div className="absolute top-full right-0 mt-2 w-48 bg-gray-800/95 backdrop-blur-md border border-gray-700 rounded-lg shadow-lg z-50 overflow-hidden">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => {
                  changeLocale(language.code as "en" | "es")
                  setIsOpen(false)
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-700/50 transition-colors duration-200 ${
                  locale === language.code
                    ? "bg-cyan-500/20 text-cyan-400 border-r-2 border-cyan-500"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                <span className="text-lg">{language.flag}</span>
                <div>
                  <div className="font-medium">{language.name}</div>
                  <div className="text-xs text-gray-400 uppercase">{language.code}</div>
                </div>
                {locale === language.code && <div className="ml-auto w-2 h-2 bg-cyan-400 rounded-full"></div>}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

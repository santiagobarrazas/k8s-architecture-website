"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"
import TechIcon from "./tech-icons"

interface TechPillProps {
  name: string
  tooltipKey?: string
  delay?: number
}

export default function TechPill({ name, tooltipKey, delay = 0 }: TechPillProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div className="relative">
      <div
        className={`inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-sm font-medium text-gray-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-gray-800/80 transition-all duration-300 cursor-default transform hover:scale-105 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <TechIcon name={name} className="w-4 h-4" />
        <span>{name}</span>
      </div>

      {tooltipKey && showTooltip && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-cyan-400 text-xs rounded-lg border border-cyan-500/30 whitespace-nowrap z-10">
          {t(tooltipKey)}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
        </div>
      )}
    </div>
  )
}

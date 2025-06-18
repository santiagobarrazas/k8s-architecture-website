"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { X, ZoomIn, ZoomOut, RotateCcw } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

interface ImageModalProps {
  src: string
  alt: string
  title: string
  isOpen: boolean
  onClose: () => void
}

export default function ImageModal({ src, alt, title, isOpen, onClose }: ImageModalProps) {
  const [zoom, setZoom] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const { t } = useLanguage()

  // Reset zoom and position when modal opens
  useEffect(() => {
    if (isOpen) {
      setZoom(1)
      setPosition({ x: 0, y: 0 })
    }
  }, [isOpen])

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev * 1.5, 5))
  }

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev / 1.5, 0.5))
  }

  const handleReset = () => {
    setZoom(1)
    setPosition({ x: 0, y: 0 })
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      setIsDragging(true)
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y })
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoom > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // Handle wheel zoom
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    if (e.deltaY < 0) {
      handleZoomIn()
    } else {
      handleZoomOut()
    }
  }

  // Cerrar modal con Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative max-w-7xl max-h-full">
        {/* Barra de herramientas superior */}
        <div className="absolute -top-16 left-0 right-0 flex items-center justify-between">
          {/* Título */}
          <div className="text-white text-xl font-semibold">
            {title}
          </div>

          {/* Controles de zoom */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleZoomOut}
              disabled={zoom <= 0.5}
              className="bg-gray-800 hover:bg-gray-700 disabled:bg-gray-900 disabled:text-gray-600 text-white rounded-lg p-2 transition-colors duration-200"
              title={t("modal.zoom.out")}
            >
              <ZoomOut className="w-5 h-5" />
            </button>
            <span className="text-white text-sm min-w-[60px] text-center">
              {Math.round(zoom * 100)}%
            </span>
            <button
              onClick={handleZoomIn}
              disabled={zoom >= 5}
              className="bg-gray-800 hover:bg-gray-700 disabled:bg-gray-900 disabled:text-gray-600 text-white rounded-lg p-2 transition-colors duration-200"
              title={t("modal.zoom.in")}
            >
              <ZoomIn className="w-5 h-5" />
            </button>
            <button
              onClick={handleReset}
              className="bg-gray-800 hover:bg-gray-700 text-white rounded-lg p-2 transition-colors duration-200"
              title={t("modal.reset")}
            >
              <RotateCcw className="w-5 h-5" />
            </button>
            <button
              onClick={onClose}
              className="bg-gray-800 hover:bg-gray-700 text-white rounded-lg p-3 transition-colors duration-200"
              title={t("modal.close")}
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Contenedor de imagen con zoom */}
        <div 
          className="relative overflow-hidden rounded-lg cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onWheel={handleWheel}
        >
          <div
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
              transformOrigin: 'center',
              transition: isDragging ? 'none' : 'transform 0.2s ease-out'
            }}
          >
            <Image
              src={src}
              alt={alt}
              width={1200}
              height={800}
              className="max-w-full max-h-[80vh] object-contain"
              priority
              draggable={false}
            />
          </div>
        </div>

        {/* Instrucciones */}
        <div className="absolute -bottom-12 left-0 text-gray-400 text-sm">
          <div>{t("modal.instructions")}</div>
        </div>
      </div>
    </div>
  )
} 
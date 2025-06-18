"use client"

import { useEffect, useState, useRef } from "react"
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
  const containerRef = useRef<HTMLDivElement>(null)
  const { t } = useLanguage()

  // Reset zoom and position when modal opens
  useEffect(() => {
    if (isOpen) {
      setZoom(1)
      setPosition({ x: 0, y: 0 })
    }
  }, [isOpen])

  // Recalculate boundaries when zoom changes
  useEffect(() => {
    if (zoom > 1) {
      setPosition(prev => constrainPosition(prev))
    }
  }, [zoom])

  // Calculate boundaries to prevent image from going outside viewport
  const getBoundaries = () => {
    if (!containerRef.current) return { minX: 0, maxX: 0, minY: 0, maxY: 0 }
    
    const container = containerRef.current.getBoundingClientRect()
    const containerWidth = container.width
    const containerHeight = container.height
    
    // Get the actual displayed image size (after object-contain scaling)
    const imageElement = containerRef.current.querySelector('img')
    if (!imageElement) return { minX: 0, maxX: 0, minY: 0, maxY: 0 }
    
    const displayedWidth = imageElement.offsetWidth
    const displayedHeight = imageElement.offsetHeight
    
    // Calculate scaled dimensions
    const scaledWidth = displayedWidth * zoom
    const scaledHeight = displayedHeight * zoom
    
    // Calculate boundaries
    // When image is smaller than container, it should stay centered
    // When image is larger than container, it should not go beyond edges
    const minX = Math.min(0, containerWidth - scaledWidth)
    const maxX = Math.max(0, scaledWidth - containerWidth)
    const minY = Math.min(0, containerHeight - scaledHeight)
    const maxY = Math.max(0, scaledHeight - containerHeight)
    
    return { minX, maxX, minY, maxY }
  }

  // Constrain position within boundaries
  const constrainPosition = (pos: { x: number, y: number }) => {
    const { minX, maxX, minY, maxY } = getBoundaries()
    
    return {
      x: Math.min(Math.max(pos.x, -maxX), -minX),
      y: Math.min(Math.max(pos.y, -maxY), -minY)
    }
  }

  const handleZoomIn = () => {
    const newZoom = Math.min(zoom * 1.5, 5)
    setZoom(newZoom)
    
    // Adjust position to keep image centered when zooming
    setTimeout(() => {
      setPosition(prev => constrainPosition(prev))
    }, 50)
  }

  const handleZoomOut = () => {
    const newZoom = Math.max(zoom / 1.5, 0.5)
    setZoom(newZoom)
    
    // Adjust position to keep image centered when zooming
    setTimeout(() => {
      setPosition(prev => constrainPosition(prev))
    }, 50)
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
      const newPosition = {
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      }
      setPosition(constrainPosition(newPosition))
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

  // Check if image is SVG to apply white background
  const isSvg = src.toLowerCase().endsWith('.svg')

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
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
          ref={containerRef}
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
            className={isSvg ? "bg-white rounded-lg" : ""}
          >
            <Image
              src={src}
              alt={alt}
              width={2000}
              height={1500}
              quality={100}
              priority
              draggable={false}
              className="max-w-full max-h-[80vh] object-contain"
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
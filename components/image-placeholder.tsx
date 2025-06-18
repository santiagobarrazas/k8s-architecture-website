interface ImagePlaceholderProps {
  description: string
  height?: string
  className?: string
}

export default function ImagePlaceholder({ description, height = "300px", className = "" }: ImagePlaceholderProps) {
  return (
    <div
      className={`bg-gray-800/30 border-2 border-dashed border-gray-600 rounded-lg flex items-center justify-center p-6 ${className}`}
      style={{ height }}
    >
      <div className="text-center">
        <div className="text-4xl mb-4">🖼️</div>
        <p className="text-gray-400 text-sm leading-relaxed max-w-md">
          <strong className="text-cyan-400">PLACEHOLDER:</strong>
          <br />
          {description}
        </p>
      </div>
    </div>
  )
}

"use client"

import {
  Cloud,
  Settings,
  Layers,
  GitBranch,
  Rocket,
  Zap,
  Container,
  Ship,
  BarChart3,
  Activity,
  Link,
  Leaf,
} from "lucide-react"

interface TechIconProps {
  name: string
  className?: string
}

export default function TechIcon({ name, className = "w-6 h-6" }: TechIconProps) {
  const getIcon = (techName: string) => {
    const lowerName = techName.toLowerCase()

    if (lowerName.includes("aws")) return <Cloud className={className} />
    if (lowerName.includes("kubernetes") || lowerName.includes("eks")) return <Settings className={className} />
    if (lowerName.includes("terraform")) return <Layers className={className} />
    if (lowerName.includes("gitops")) return <GitBranch className={className} />
    if (lowerName.includes("argocd")) return <Rocket className={className} />
    if (lowerName.includes("github actions")) return <Zap className={className} />
    if (lowerName.includes("docker")) return <Container className={className} />
    if (lowerName.includes("helm")) return <Ship className={className} />
    if (lowerName.includes("prometheus")) return <BarChart3 className={className} />
    if (lowerName.includes("grafana")) return <Activity className={className} />
    if (lowerName.includes("linkerd")) return <Link className={className} />
    if (lowerName.includes("spring boot")) return <Leaf className={className} />

    // Default icon
    return <Settings className={className} />
  }

  return getIcon(name)
}

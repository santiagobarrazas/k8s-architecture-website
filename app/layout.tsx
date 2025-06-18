import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "DevOps Portfolio - Arquitectura Escalable en Kubernetes",
  description:
    "Despliegue de arquitectura escalable en Kubernetes con enfoque GitOps en AWS con GitHub Actions y ArgoCD",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={inter.className}>
      <body className="antialiased">{children}</body>
    </html>
  )
}

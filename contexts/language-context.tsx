"use client"

import { createContext, useContext, type ReactNode } from "react"
import { useLocation } from "@/hooks/use-location"

interface LanguageContextType {
  locale: string
  isLoading: boolean
  changeLocale: (locale: "en" | "es") => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Translations object
const translations = {
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.architecture": "Architecture",
    "nav.gitops": "GitOps",
    "nav.security": "Security",
    "nav.observability": "Observability",
    "nav.quality": "Quality",

    // Hero Section
    "hero.title": "Scalable Architecture Deployment on Kubernetes",
    "hero.subtitle": "with GitOps approach",
    "hero.description": "An E-commerce microservices solution on AWS, automated with GitHub Actions and ArgoCD",
    "hero.summary":
      "This project demonstrates the implementation of a cloud-native e-commerce system, from infrastructure as code (IaC) with Terraform to continuous deployment with GitOps. It focuses on scalability, resilience, security, and complete observability of the application lifecycle.",
    "hero.explore": "Explore Architecture",
    "hero.gitops": "View GitOps Flow",

    // Architecture Section
    "arch.title": "Holistic Architecture: From Cloud to Container",
    "arch.iac.title": "Infrastructure as Code (IaC) on AWS",
    "arch.iac.description":
      "The project foundation was provisioned on AWS using Terraform, ensuring a replicable and versioned environment. Remote state was configured with S3 and DynamoDB for secure collaboration. Key components include a VPC, subnets, an EKS cluster, and a Network Load Balancer to manage traffic.",
    "arch.k8s.title": "Kubernetes Architecture",
    "arch.k8s.description":
      "Within EKS, the application is organized into namespaces (dev, stage, master) to isolate environments. Ingress-NGINX is used for traffic routing, Cert-Manager for automatic TLS certificates, and NetworkPolicies for secure communication between microservices. Configuration is centralized using ConfigMaps and sensitive data with Secrets.",

    // GitOps Section
    "gitops.title": "The GitOps Flow: Automation and Trust",
    "gitops.description":
      "The project's core is its GitOps-based CI/CD pipeline. Each push to a branch (dev, stage, master) triggers an automated flow in GitHub Actions that compiles, tests, and packages the application into a Docker image. Then, ArgoCD detects changes in Helm manifests and automatically syncs the cluster, ensuring the live state always reflects the desired state in Git.",
    "gitops.workflow.title": "Automated Workflow",
    "gitops.workflow.step1": "Repository Push",
    "gitops.workflow.step1.desc": "Developer pushes to dev/stage/master branch",
    "gitops.workflow.step2": "GitHub Actions",
    "gitops.workflow.step2.desc": "CI pipeline runs tests, build and Docker image push",
    "gitops.workflow.step3": "ArgoCD Sync",
    "gitops.workflow.step3.desc": "ArgoCD detects changes and syncs cluster automatically",
    "gitops.branches.title": "Branch and Environment Relationship",
    "gitops.branches.dev": "Development environment for initial testing",
    "gitops.branches.stage": "Staging environment for pre-production validation",
    "gitops.branches.master": "Production environment with high availability",

    // Security Section
    "security.title": "Fortifying the Architecture",
    "security.description":
      "Security wasn't an afterthought, but a central pillar. Multiple layers were implemented to protect the system.",
    "security.vuln.title": "Vulnerability Analysis",
    "security.vuln.description":
      "Integration of Trivy in the CI pipeline to scan Docker images for vulnerabilities before deployment, blocking insecure builds.",
    "security.network.title": "Network Isolation",
    "security.network.description":
      "Use of Calico to implement NetworkPolicies that restrict communication between pods to the minimum necessary, drastically reducing the attack surface.",
    "security.secrets.title": "Secrets Management",
    "security.secrets.description":
      "Implementation of automatic secret rotation with CronJobs and ServiceAccounts with minimum privileges (RBAC) to handle credentials securely and dynamically.",

    // Observability Section
    "observability.title": "Complete Visibility and Performance at Scale",
    "observability.monitoring.title": "Monitoring and Logging",
    "observability.monitoring.description":
      "A complete observability stack was implemented. Prometheus and Grafana for metrics collection and visualization and alerts; the ELK stack (Elasticsearch, Logstash, Kibana) for centralized logging; and Linkerd for service mesh metrics and mTLS traceability.",
    "observability.grafana.title": "Grafana Dashboard",
    "observability.logs.title": "Centralized Logs",
    "observability.mesh.title": "Service Mesh",
    "observability.testing.title": "Load and Chaos Testing",
    "observability.testing.description":
      "The system was validated under stress. Locust was used to simulate thousands of requests and Chaos-Mesh to inject controlled failures (like latency), testing the architecture's resilience and self-healing capacity.",
    "observability.locust.title": "Load Testing with Locust",
    "observability.chaos.title": "Chaos Engineering",

    // Code Quality Section
    "quality.title": "Ensuring Code Quality",
    "quality.description":
      "SonarQube was integrated into the pipeline as a Quality Gate. Each Pull Request is automatically analyzed to detect bugs, vulnerabilities, and code smells, ensuring that only code meeting quality standards is integrated into the main branch.",
    "quality.gate.title": "Automatic Quality Gate",
    "quality.gate.description":
      "Each PR must pass SonarQube's Quality Gate before being merged, ensuring consistent quality standards.",
    "quality.analysis.title": "Code Analysis",
    "quality.analysis.description":
      "Automatic detection of bugs, code smells, code duplication, and cyclomatic complexity metrics to keep code clean.",
    "quality.security.title": "Code Security",
    "quality.security.description":
      "Identification of security vulnerabilities in source code, including SQL injection, XSS, and other common threats.",

    // Footer
    "footer.title": "Interested in collaborating?",
    "footer.description":
      "This project demonstrates my experience in cloud-native architectures, DevOps, and automation. I'm available for new opportunities and technical challenges.",
    "footer.designed": "Designed and developed by",
    "footer.built": "Built with Next.js, Tailwind CSS and lots of ☕",

    // Tech tooltips
    "tooltip.eks": "Elastic Kubernetes Service",
    "tooltip.iac": "Infrastructure as Code",
    "tooltip.cicd": "Continuous Integration/Continuous Deployment",
    "tooltip.rbac": "Role-Based Access Control",
    "tooltip.hpa": "Horizontal Pod Autoscaler",
    "tooltip.nlb": "Network Load Balancer",
    "tooltip.aws": "Amazon Web Services - Cloud Computing Platform",
    "tooltip.terraform": "Infrastructure as Code Tool",
    "tooltip.gitops": "Git-based Operations and Deployment",
    "tooltip.argocd": "Declarative GitOps CD for Kubernetes",
    "tooltip.github": "CI/CD Automation Platform",
    "tooltip.docker": "Container Platform",
    "tooltip.helm": "Kubernetes Package Manager",
    "tooltip.prometheus": "Monitoring and Alerting Toolkit",
    "tooltip.grafana": "Analytics and Monitoring Platform",
    "tooltip.linkerd": "Service Mesh for Kubernetes",
    "tooltip.spring": "Java Application Framework",
  },
  es: {
    // Navbar
    "nav.home": "Inicio",
    "nav.architecture": "Arquitectura",
    "nav.gitops": "GitOps",
    "nav.security": "Seguridad",
    "nav.observability": "Observabilidad",
    "nav.quality": "Calidad",

    // Hero Section
    "hero.title": "Despliegue de Arquitectura Escalable en Kubernetes",
    "hero.subtitle": "con enfoque GitOps",
    "hero.description": "Una solución E-commerce de microservicios en AWS, automatizada con GitHub Actions y ArgoCD",
    "hero.summary":
      "Este proyecto demuestra la implementación de un sistema de e-commerce nativo de la nube, desde la infraestructura como código (IaC) con Terraform hasta el despliegue continuo con GitOps. Se enfoca en escalabilidad, resiliencia, seguridad y observabilidad completa del ciclo de vida de la aplicación.",
    "hero.explore": "Explorar Arquitectura",
    "hero.gitops": "Ver GitOps Flow",

    // Architecture Section
    "arch.title": "Arquitectura Holística: De la Nube al Contenedor",
    "arch.iac.title": "Infraestructura como Código (IaC) en AWS",
    "arch.iac.description":
      "La base del proyecto se aprovisionó en AWS usando Terraform, garantizando un entorno replicable y versionado. Se configuró un estado remoto con S3 y DynamoDB para la colaboración segura. Los componentes clave incluyen una VPC, subredes, un clúster de EKS y un Network Load Balancer para gestionar el tráfico.",
    "arch.k8s.title": "Arquitectura en Kubernetes",
    "arch.k8s.description":
      "Dentro de EKS, la aplicación se organiza en namespaces (dev, stage, master) para aislar entornos. Se utiliza Ingress-NGINX para enrutar el tráfico, Cert-Manager para certificados TLS automáticos y NetworkPolicies para una comunicación segura entre microservicios. La configuración se centraliza usando ConfigMaps y los datos sensibles con Secrets.",

    // GitOps Section
    "gitops.title": "El Flujo GitOps: Automatización y Confianza",
    "gitops.description":
      "El núcleo del proyecto es su pipeline CI/CD basado en GitOps. Cada push a una rama (dev, stage, master) desencadena un flujo automatizado en GitHub Actions que compila, prueba y empaqueta la aplicación en una imagen Docker. Luego, ArgoCD detecta los cambios en los manifiestos de Helm y sincroniza automáticamente el clúster, asegurando que el estado en vivo siempre refleje el deseado en Git.",
    "gitops.workflow.title": "Flujo de Trabajo Automatizado",
    "gitops.workflow.step1": "Push al Repositorio",
    "gitops.workflow.step1.desc": "Desarrollador hace push a rama dev/stage/master",
    "gitops.workflow.step2": "GitHub Actions",
    "gitops.workflow.step2.desc": "Pipeline CI ejecuta tests, build y push de imagen Docker",
    "gitops.workflow.step3": "ArgoCD Sync",
    "gitops.workflow.step3.desc": "ArgoCD detecta cambios y sincroniza el clúster automáticamente",
    "gitops.branches.title": "Relación Ramas y Entornos",
    "gitops.branches.dev": "Entorno de desarrollo para pruebas iniciales",
    "gitops.branches.stage": "Entorno de staging para validación pre-producción",
    "gitops.branches.master": "Entorno de producción con alta disponibilidad",

    // Security Section
    "security.title": "Fortificando la Arquitectura",
    "security.description":
      "La seguridad no fue un añadido, sino un pilar central. Se implementaron múltiples capas para proteger el sistema.",
    "security.vuln.title": "Análisis de Vulnerabilidades",
    "security.vuln.description":
      "Integración de Trivy en el pipeline de CI para escanear imágenes Docker en busca de vulnerabilidades antes del despliegue, bloqueando compilaciones inseguras.",
    "security.network.title": "Aislamiento de Red",
    "security.network.description":
      "Uso de Calico para implementar NetworkPolicies que restringen la comunicación entre pods al mínimo necesario, reduciendo drásticamente la superficie de ataque.",
    "security.secrets.title": "Gestión de Secretos",
    "security.secrets.description":
      "Implementación de rotación automática de secretos con CronJobs y ServiceAccounts con privilegios mínimos (RBAC) para manejar credenciales de forma segura y dinámica.",

    // Observability Section
    "observability.title": "Visibilidad Completa y Rendimiento a Escala",
    "observability.monitoring.title": "Monitoreo y Logging",
    "observability.monitoring.description":
      "Se implementó una pila de observabilidad completa. Prometheus y Grafana para la recolección y visualización de métricas y alertas; el stack ELK (Elasticsearch, Logstash, Kibana) para el logging centralizado; y Linkerd para métricas de service mesh y trazabilidad mTLS.",
    "observability.grafana.title": "Dashboard de Grafana",
    "observability.logs.title": "Logs Centralizados",
    "observability.mesh.title": "Service Mesh",
    "observability.testing.title": "Pruebas de Carga y Caos",
    "observability.testing.description":
      "El sistema se validó bajo estrés. Se usó Locust para simular miles de peticiones y Chaos-Mesh para inyectar fallos controlados (como latencia), probando la resiliencia y capacidad de auto-sanación de la arquitectura.",
    "observability.locust.title": "Pruebas de Carga con Locust",
    "observability.chaos.title": "Ingeniería del Caos",

    // Code Quality Section
    "quality.title": "Garantizando la Calidad del Código",
    "quality.description":
      "Se integró SonarQube en el pipeline como un Quality Gate. Cada Pull Request es analizado automáticamente para detectar bugs, vulnerabilidades y code smells, asegurando que solo el código que cumple con los estándares de calidad se integre a la rama principal.",
    "quality.gate.title": "Quality Gate Automático",
    "quality.gate.description":
      "Cada PR debe pasar el Quality Gate de SonarQube antes de poder ser mergeado, garantizando estándares de calidad consistentes.",
    "quality.analysis.title": "Análisis de Código",
    "quality.analysis.description":
      "Detección automática de bugs, code smells, duplicación de código y métricas de complejidad ciclomática para mantener el código limpio.",
    "quality.security.title": "Seguridad del Código",
    "quality.security.description":
      "Identificación de vulnerabilidades de seguridad en el código fuente, incluyendo inyección SQL, XSS y otras amenazas comunes.",

    // Footer
    "footer.title": "¿Interesado en colaborar?",
    "footer.description":
      "Este proyecto demuestra mi experiencia en arquitecturas cloud-native, DevOps y automatización. Estoy disponible para nuevas oportunidades y desafíos técnicos.",
    "footer.designed": "Diseñado y desarrollado por",
    "footer.built": "Construido con Next.js, Tailwind CSS y mucha ☕",

    // Tech tooltips
    "tooltip.eks": "Elastic Kubernetes Service",
    "tooltip.iac": "Infraestructura como Código",
    "tooltip.cicd": "Integración Continua/Despliegue Continuo",
    "tooltip.rbac": "Control de Acceso Basado en Roles",
    "tooltip.hpa": "Escalador Horizontal de Pods",
    "tooltip.nlb": "Balanceador de Carga de Red",
    "tooltip.aws": "Amazon Web Services - Plataforma de Computación en la Nube",
    "tooltip.terraform": "Herramienta de Infraestructura como Código",
    "tooltip.gitops": "Operaciones y Despliegue basado en Git",
    "tooltip.argocd": "CD GitOps Declarativo para Kubernetes",
    "tooltip.github": "Plataforma de Automatización CI/CD",
    "tooltip.docker": "Plataforma de Contenedores",
    "tooltip.helm": "Gestor de Paquetes de Kubernetes",
    "tooltip.prometheus": "Kit de Herramientas de Monitoreo y Alertas",
    "tooltip.grafana": "Plataforma de Análisis y Monitoreo",
    "tooltip.linkerd": "Service Mesh para Kubernetes",
    "tooltip.spring": "Framework de Aplicaciones Java",
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const { locale, isLoading, changeLocale } = useLocation()

  const t = (key: string): string => {
    const translation = translations[locale as keyof typeof translations]
    return translation?.[key as keyof typeof translation] || key
  }

  return <LanguageContext.Provider value={{ locale, isLoading, changeLocale, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

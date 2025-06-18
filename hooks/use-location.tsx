"use client"

import { useState, useEffect } from "react"

export function useLocation() {
  const [locale, setLocale] = useState<string>("en")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const detectLocale = async () => {
      try {
        // First try to get user's preferred language from browser
        const browserLang = navigator.language.split("-")[0]

        // Try to get location-based locale
        if ("geolocation" in navigator) {
          const position = await new Promise<GeolocationPosition>((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject, {
              timeout: 5000,
              enableHighAccuracy: false,
            })
          })

          // Get country from coordinates using a free API
          const response = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`,
          )

          if (response.ok) {
            const data = await response.json()
            const countryCode = data.countryCode?.toLowerCase()

            // Spanish-speaking countries
            const spanishCountries = [
              "es",
              "mx",
              "ar",
              "co",
              "ve",
              "pe",
              "cl",
              "ec",
              "gt",
              "cu",
              "bo",
              "do",
              "hn",
              "py",
              "sv",
              "ni",
              "cr",
              "pa",
              "uy",
              "gq",
            ]

            if (spanishCountries.includes(countryCode)) {
              setLocale("es")
            } else if (browserLang === "es") {
              setLocale("es")
            } else {
              setLocale("en")
            }
          } else {
            // Fallback to browser language
            setLocale(browserLang === "es" ? "es" : "en")
          }
        } else {
          // No geolocation, use browser language
          setLocale(browserLang === "es" ? "es" : "en")
        }
      } catch (error) {
        // Default to browser language or English
        const browserLang = navigator.language.split("-")[0]
        setLocale(browserLang === "es" ? "es" : "en")
      } finally {
        setIsLoading(false)
      }
    }

    // Check if there's a saved preference
    const savedLocale = localStorage.getItem("preferred-locale")
    if (savedLocale && (savedLocale === "en" || savedLocale === "es")) {
      setLocale(savedLocale)
      setIsLoading(false)
    } else {
      detectLocale()
    }
  }, [])

  const changeLocale = (newLocale: "en" | "es") => {
    setLocale(newLocale)
    localStorage.setItem("preferred-locale", newLocale)
  }

  return { locale, isLoading, changeLocale }
}

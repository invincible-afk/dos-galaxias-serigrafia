"use client"

import { useEffect, useState } from "react"
import { Eye } from "lucide-react"

export function VisitorCounter() {
  const [visitors, setVisitors] = useState<number>(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Obtener el contador actual del localStorage
    const currentCount = localStorage.getItem("dos-galaxias-visitors")
    const count = currentCount ? Number.parseInt(currentCount, 10) : 0

    // Verificar si es una nueva visita (usando sessionStorage)
    const hasVisited = sessionStorage.getItem("dos-galaxias-visited")

    if (!hasVisited) {
      // Nueva visita en esta sesión
      const newCount = count + 1
      localStorage.setItem("dos-galaxias-visitors", newCount.toString())
      sessionStorage.setItem("dos-galaxias-visited", "true")
      setVisitors(newCount)
    } else {
      // Ya visitó en esta sesión
      setVisitors(count)
    }

    setIsLoading(false)
  }, [])

  if (isLoading) {
    return null
  }

  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <Eye className="w-4 h-4" />
      <span>
        <strong className="text-foreground">{visitors.toLocaleString()}</strong> visitas
      </span>
    </div>
  )
}

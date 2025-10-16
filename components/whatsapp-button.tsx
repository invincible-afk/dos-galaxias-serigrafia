"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppButton() {
  const phoneNumber = "5492646227517"
  const message = encodeURIComponent("Hola! Me interesa conocer más sobre sus servicios de sublimación.")

  return (
    <Button
      size="lg"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 rounded-full w-14 h-14 md:w-16 md:h-16 p-0 shadow-2xl bg-[#25D366] hover:bg-[#20BA5A] text-white border-4 border-white hover:scale-110 transition-transform"
      asChild
    >
      <a
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
      </a>
    </Button>
  )
}

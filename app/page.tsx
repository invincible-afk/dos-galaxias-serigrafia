import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Instagram, Mail, Phone, MapPin, Sparkles } from "lucide-react"
import { StarDecoration, SparkleDecoration } from "@/components/star-decoration"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { VisitorCounter } from "@/components/visitor-counter"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary/20 via-background to-primary/10 py-12 md:py-20 px-4 sm:px-6">
        <div className="absolute top-10 left-10 text-primary opacity-30 hidden md:block">
          <StarDecoration className="w-16 h-16 animate-spin-slow" />
        </div>
        <div className="absolute bottom-20 right-20 text-secondary opacity-30 hidden md:block">
          <SparkleDecoration className="w-20 h-20 animate-pulse" />
        </div>
        <div className="absolute top-1/2 left-1/4 text-primary opacity-20 hidden lg:block">
          <StarDecoration className="w-8 h-8" />
        </div>
        <div className="absolute bottom-1/3 right-1/3 text-secondary opacity-20 hidden lg:block">
          <StarDecoration className="w-12 h-12" />
        </div>

        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <div className="mb-6 md:mb-8 flex justify-center">
            <Image
              src="/logo-main.png"
              alt="Dos Galaxias - Taller de Sublimados en San Juan"
              width={400}
              height={200}
              className="w-full max-w-[280px] sm:max-w-sm md:max-w-md h-auto"
              priority
            />
          </div>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 text-balance px-2"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span className="text-primary">Imprimimos</span> <span className="text-secondary">tus ideas</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto text-pretty px-4">
            Sublimación artesanal de calidad. Transformamos tu creatividad en productos únicos.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-full shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
              asChild
            >
              <a
                href="https://www.instagram.com/dosgalaxias.sublimaciones?igsh=MXFuODZhOTIxeTA3YQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <Instagram className="w-5 h-5" />
                Visita nuestro Instagram
              </a>
            </Button>

            <Button
              size="lg"
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-full shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
              asChild
            >
              <a
                href="https://wa.me/5492646227517"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Escríbenos por WhatsApp
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-full transition-all bg-transparent w-full sm:w-auto"
              asChild
            >
              <a href="#contacto" className="flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                Contáctanos
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 md:mb-12">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-primary"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Nuestros Servicios
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Sublimación de alta calidad en diversos productos
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                title: "Remeras & Buzos",
                description: "Diseños personalizados en telas de primera calidad",
                icon: "👕",
              },
              {
                title: "Tazas & Vasos",
                description: "Sublimación duradera para tus bebidas favoritas",
                icon: "☕",
              },
              {
                title: "Productos Personalizados",
                description: "Llaveros, mouse pads, fundas y mucho más",
                icon: "✨",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="p-5 md:p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary/50"
              >
                <div className="text-4xl md:text-5xl mb-3 md:mb-4">{service.icon}</div>
                <h3
                  className="text-lg md:text-xl font-bold mb-2 text-foreground"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-12 md:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 md:mb-12">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-secondary"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              ¿Por qué Dos Galaxias?
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                icon: <Sparkles className="w-6 h-6 md:w-8 md:h-8" />,
                title: "Calidad Artesanal",
                desc: "Cada producto hecho con dedicación",
              },
              {
                icon: <StarDecoration className="w-6 h-6 md:w-8 md:h-8" />,
                title: "Diseños Únicos",
                desc: "Creatividad sin límites",
              },
              { icon: "⚡", title: "Entrega Rápida", desc: "Tiempos de producción ágiles" },
              { icon: "💯", title: "Garantía Total", desc: "Satisfacción asegurada" },
            ].map((feature, index) => (
              <div key={index} className="text-center p-4 md:p-6 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="text-primary mb-3 md:mb-4 flex justify-center">
                  {typeof feature.icon === "string" ? (
                    <span className="text-3xl md:text-5xl">{feature.icon}</span>
                  ) : (
                    feature.icon
                  )}
                </div>
                <h3
                  className="font-bold mb-1 text-sm md:text-base text-foreground"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {feature.title}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section
        id="contacto"
        className="py-12 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-primary/10 via-background to-secondary/10"
      >
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8 md:mb-12">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-primary"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Hablemos de tu proyecto
            </h2>
            <p className="text-base md:text-lg text-muted-foreground px-4">
              Estamos listos para hacer realidad tus ideas
            </p>
          </div>

          <Card className="p-6 md:p-8 border-2">
            <div className="space-y-5 md:space-y-6">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="bg-primary/10 p-2.5 md:p-3 rounded-full flex-shrink-0">
                  <Instagram className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold mb-1 text-sm md:text-base text-foreground">Instagram</h3>
                  <a
                    href="https://www.instagram.com/dosgalaxias.sublimaciones?igsh=MXFuODZhOTIxeTA3YQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-sm md:text-base break-words"
                  >
                    @dosgalaxias.sublimaciones
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="bg-secondary/10 p-2.5 md:p-3 rounded-full flex-shrink-0">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold mb-1 text-sm md:text-base text-foreground">Email</h3>
                  <a
                    href="mailto:dosgalaxiasserigrafia@gmail.com"
                    className="text-secondary hover:underline text-sm md:text-base break-words"
                  >
                    dosgalaxiasserigrafia@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="bg-primary/10 p-2.5 md:p-3 rounded-full flex-shrink-0">
                  <Phone className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold mb-1 text-sm md:text-base text-foreground">Teléfono</h3>
                  <a href="tel:+5492646227517" className="text-primary hover:underline text-sm md:text-base">
                    +54 9 264 622-7517
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="bg-secondary/10 p-2.5 md:p-3 rounded-full flex-shrink-0">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold mb-1 text-sm md:text-base text-foreground">Ubicación</h3>
                  <p className="text-muted-foreground text-sm md:text-base">San Juan, Argentina</p>
                </div>
              </div>
            </div>

            <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t text-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 md:px-8 w-full sm:w-auto"
                asChild
              >
                <a
                  href="https://www.instagram.com/dosgalaxias.sublimaciones?igsh=MXFuODZhOTIxeTA3YQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Instagram className="w-5 h-5" />
                  Seguinos en Instagram
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 py-6 md:py-8 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="mb-3 md:mb-4">
            <Image
              src="/logo-alt.jpg"
              alt="Dos Galaxias - Taller de Sublimados"
              width={150}
              height={75}
              className="mx-auto h-12 md:h-16 w-auto"
            />
          </div>
          <div className="mb-3 md:mb-4 flex justify-center">
            <VisitorCounter />
          </div>
          <p className="text-muted-foreground text-xs md:text-sm px-4">
            © 2025 Dos Galaxias - Taller de Sublimados. Todos los derechos reservados.
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            Hecho con <span className="text-primary">❤️</span> y mucha creatividad
          </p>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  )
}

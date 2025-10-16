import type React from "react"
import type { Metadata } from "next"
import { Fredoka, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  weight: ["400", "500", "600", "700"],
})

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Dos Galaxias - Taller de Sublimados en San Juan | Sublimación Artesanal",
  description:
    "Taller de sublimación artesanal en San Juan, Argentina. Sublimamos remeras, buzos, tazas, vasos y productos personalizados. Calidad profesional, diseños únicos y entrega rápida. ¡Imprimimos tus ideas!",
  keywords: [
    "sublimación",
    "sublimados",
    "taller de sublimación",
    "San Juan",
    "Argentina",
    "remeras personalizadas",
    "tazas sublimadas",
    "productos personalizados",
    "impresión textil",
    "diseños personalizados",
    "sublimación artesanal",
    "Dos Galaxias",
  ],
  authors: [{ name: "Dos Galaxias" }],
  creator: "Dos Galaxias",
  publisher: "Dos Galaxias",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://dosgalaxias.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dos Galaxias - Taller de Sublimados en San Juan",
    description:
      "Sublimación artesanal de calidad. Transformamos tu creatividad en productos únicos. Remeras, tazas, buzos y más.",
    url: "https://dosgalaxias.vercel.app",
    siteName: "Dos Galaxias",
    images: [
      {
        url: "/logo-main.png",
        width: 1200,
        height: 630,
        alt: "Dos Galaxias - Taller de Sublimados",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dos Galaxias - Taller de Sublimados en San Juan",
    description: "Sublimación artesanal de calidad. Imprimimos tus ideas con creatividad y profesionalismo.",
    images: ["/logo-main.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body
        className={`${poppins.className} antialiased`}
        style={
          {
            "--font-heading": fredoka.style.fontFamily,
          } as React.CSSProperties
        }
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}

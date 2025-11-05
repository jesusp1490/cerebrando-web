import type React from "react"
import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import { Playfair_Display } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"
import { Suspense } from "react"
import "./globals.css"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Cerebrando - Transforma tu mente con neurociencia",
  description:
    "Especialista en Neurofisiología. Entrena tu cerebro para dormir mejor, reducir el estrés y potenciar tu neuroplasticidad con la Dra. Ángela De Abreu.",
  generator: "v0.app",
  keywords: ["neurofisiología", "neuroplasticidad", "sueño", "estrés", "cerebro", "neurociencia"],
  authors: [{ name: "Dra. Ángela De Abreu" }],
  openGraph: {
    title: "Cerebrando - Transforma tu mente con neurociencia",
    description: "Entrena tu cerebro para dormir mejor, reducir el estrés y potenciar tu neuroplasticidad.",
    type: "website",
    locale: "es_ES",
    siteName: "Cerebrando",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cerebrando - Transforma tu mente con neurociencia",
    description: "Entrena tu cerebro para dormir mejor, reducir el estrés y potenciar tu neuroplasticidad.",
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${outfit.variable} ${playfairDisplay.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalOrganization",
              name: "Cerebrando",
              description:
                "Especialista en Neurofisiología. Entrena tu cerebro para dormir mejor, reducir el estrés y potenciar tu neuroplasticidad.",
              url: "https://cerebrando.com",
              founder: {
                "@type": "Person",
                name: "Dra. Ángela De Abreu",
                jobTitle: "Especialista en Neurofisiología Clínica",
                worksFor: {
                  "@type": "Organization",
                  name: "HM Hospitales",
                },
              },
              medicalSpecialty: "Neurofisiología Clínica",
              areaServed: "España",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "",
                contactType: "customer service",
                email: "info@cerebrando.com",
              },
              sameAs: [
                "https://instagram.com/cerebrando",
                "https://tiktok.com/@cerebrando",
                "https://youtube.com/@cerebrando",
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <Suspense fallback={<div>Loading...</div>}>
          {children}
          <Toaster />
        </Suspense>
      </body>
    </html>
  )
}

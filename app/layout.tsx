import type React from "react"
import type { Metadata } from "next"
import { Outfit, Playfair_Display } from "next/font/google"
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
  metadataBase: new URL("https://cerebrando.es"),

  title: "Cerebrando | Dra. Ángela de Abreu",

  description:
    "Cerebrando es el proyecto de la Dra. Ángela de Abreu, especialista en Neurofisiología Clínica, sobre sueño, estrés, neuroplasticidad y salud cerebral.",

  authors: [
    {
      name: "Dra. Ángela de Abreu",
    },
  ],

  creator: "Dra. Ángela de Abreu",
  publisher: "Cerebrando",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Cerebrando | Dra. Ángela de Abreu",
    description:
      "Neurociencia, sueño, estrés y neuroplasticidad con la Dra. Ángela de Abreu.",
    url: "https://cerebrando.es/",
    type: "website",
    locale: "es_ES",
    siteName: "Cerebrando",
  },

  twitter: {
    card: "summary_large_image",
    title: "Cerebrando | Dra. Ángela de Abreu",
    description:
      "Neurociencia, sueño, estrés y neuroplasticidad con la Dra. Ángela de Abreu.",
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
    <html
      lang="es"
      className={`${outfit.variable} ${playfairDisplay.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://cerebrando.es/#website",
                  url: "https://cerebrando.es/",
                  name: "Cerebrando",
                  description:
                    "Proyecto de la Dra. Ángela de Abreu sobre neurociencia, sueño, estrés, neuroplasticidad y salud cerebral.",
                  inLanguage: "es-ES",
                  publisher: {
                    "@id": "https://cerebrando.es/#organization",
                  },
                },
                {
                  "@type": "Organization",
                  "@id": "https://cerebrando.es/#organization",
                  name: "Cerebrando",
                  url: "https://cerebrando.es/",
                  description:
                    "Proyecto de divulgación y educación sobre neurociencia creado por la Dra. Ángela de Abreu.",
                  founder: {
                    "@type": "Person",
                    "@id": "https://cerebrando.es/#angela-de-abreu",
                    name: "Dra. Ángela de Abreu",
                    jobTitle: "Especialista en Neurofisiología Clínica",
                  },
                },
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
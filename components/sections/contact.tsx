"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Mail, Send, CheckCircle } from "lucide-react"
import { fadeInUp, staggerContainer, fadeInStagger } from "@/lib/animations"
import { siteConfig } from "@/config/site"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission (no backend)
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log("Form submitted:", formData)
    setIsSubmitting(false)
    setIsSubmitted(true)

    toast({
      title: "¡Mensaje enviado!",
      description: "Gracias por contactar. Te responderé pronto.",
    })

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", message: "" })
      setIsDialogOpen(false)
    }, 3000)
  }

  const InstagramIcon = () => (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-4.358-.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )

  const TikTokIcon = () => (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  )

  const YouTubeIcon = () => (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: siteConfig.links.email,
      href: `mailto:${siteConfig.links.email}`,
      description: "Escríbeme directamente",
      color: "#BC782E",
    },
    {
      icon: InstagramIcon,
      title: "Instagram",
      value: "@cerebrando",
      href: siteConfig.links.instagram,
      description: "Sígueme para contenido diario",
      color: "#E4405F",
    },
    {
      icon: TikTokIcon,
      title: "TikTok",
      value: "@cerebrando",
      href: siteConfig.links.tiktok,
      description: "Tips rápidos de neurociencia",
      color: "#000000",
    },
    {
      icon: YouTubeIcon,
      title: "YouTube",
      value: "@cerebrando",
      href: siteConfig.links.youtube,
      description: "Videos educativos completos",
      color: "#FF0000",
    },
  ]

  return (
    <section
      id="contacto"
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 xl:py-36"
      style={{
        background:
          "linear-gradient(135deg, rgba(199, 214, 217, 0.35) 0%, rgba(241, 215, 219, 0.45) 50%, rgba(224, 197, 180, 0.4) 100%)",
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-40 -mt-1">
        <svg
          className="absolute top-0 w-full h-40"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,0 L0,60 Q360,120 720,60 T1440,60 L1440,0 Z" fill="rgb(199, 214, 217)" />
          <path d="M0,0 L0,50 Q360,110 720,50 T1440,50 L1440,0 Z" fill="rgb(199, 214, 217)" opacity="0.7" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="max-w-6xl mx-auto space-y-10 sm:space-y-12 md:space-y-14 lg:space-y-16"
        >
          {/* Section header */}
          <motion.div variants={fadeInUp} className="text-center space-y-4 sm:space-y-5 md:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-foreground text-balance">
              Contacto
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
              ¿Lista para transformar tu mente y tu vida? Conectemos y comencemos tu viaje hacia el bienestar
              neurológico.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
          >
            {contactMethods.map((method, index) => (
              <motion.div key={index} variants={fadeInStagger}>
                <Card className="group h-full bg-white/90 backdrop-blur-sm border-2 hover:border-opacity-50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <CardContent className="p-5 sm:p-6 text-center space-y-3 sm:space-y-4">
                    <div
                      className="mx-auto w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg"
                      style={{ backgroundColor: `${method.color}15` }}
                    >
                      <method.icon style={{ color: method.color }} />
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      <h3 className="font-bold text-base sm:text-lg text-foreground">{method.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{method.description}</p>
                      <a
                        href={method.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-sm font-semibold transition-colors hover:underline"
                        style={{ color: method.color }}
                      >
                        {method.value}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Main CTA */}
          <motion.div variants={fadeInStagger} className="text-center space-y-6 sm:space-y-8">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="bg-[#BC782E] hover:bg-[#BC782E]/90 text-white px-8 sm:px-9 md:px-10 py-5 sm:py-6 md:py-7 text-base sm:text-base md:text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <Send className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Solicita información
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-serif text-center">Solicita información</DialogTitle>
                </DialogHeader>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nombre completo</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Tu nombre"
                          required
                          disabled={isSubmitting}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="tu@email.com"
                          required
                          disabled={isSubmitting}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Mensaje</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Cuéntame qué te interesa o qué necesitas..."
                          rows={4}
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#BC782E] hover:bg-[#BC782E]/90 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Al enviar este formulario, aceptas que tus datos sean utilizados para responder a tu consulta.
                      Respetamos tu privacidad y no compartimos tu información con terceros.
                    </p>
                  </form>
                ) : (
                  <div className="text-center space-y-4 py-8">
                    <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-foreground">¡Mensaje enviado!</h3>
                      <p className="text-muted-foreground">
                        Gracias por contactar. Te responderé pronto para comenzar tu transformación neurológica.
                      </p>
                    </div>
                  </div>
                )}
              </DialogContent>
            </Dialog>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 -mb-1">
        <svg
          className="absolute bottom-0 w-full h-40"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,120 L0,60 Q360,0 720,60 T1440,60 L1440,120 Z" fill="rgb(241, 215, 219)" />
          <path d="M0,120 L0,50 Q360,10 720,50 T1440,50 L1440,120 Z" fill="rgb(241, 215, 219)" opacity="0.5" />
        </svg>
      </div>
    </section>
  )
}

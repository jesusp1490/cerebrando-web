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

// Logos oficiales
import { SiInstagram, SiTiktok, SiYoutube } from "react-icons/si"

type IconCmp = React.ComponentType<{ size?: number; className?: string }>

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
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)

    toast({
      title: "¡Mensaje enviado!",
      description: "Gracias por contactar. Te responderé pronto.",
    })

    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", message: "" })
      setIsDialogOpen(false)
    }, 3000)
  }

  const contactMethods: Array<{
    key: "email" | "instagram" | "tiktok" | "youtube"
    icon: IconCmp
    title: string
    value: string
    href: string
    description: string
  }> = [
    {
      key: "email",
      icon: Mail as unknown as IconCmp,
      title: "Email",
      value: siteConfig.links.email,
      href: `mailto:${siteConfig.links.email}`,
      description: "Escríbeme directamente",
    },
    {
      key: "instagram",
      icon: SiInstagram,
      title: "Instagram",
      value: "@cerebrando",
      href: siteConfig.links.instagram,
      description: "Sígueme para contenido diario",
    },
    {
      key: "tiktok",
      icon: SiTiktok,
      title: "TikTok",
      value: "@cerebrando",
      href: siteConfig.links.tiktok,
      description: "Tips rápidos de neurociencia",
    },
    {
      key: "youtube",
      icon: SiYoutube,
      title: "YouTube",
      value: "@cerebrando",
      href: siteConfig.links.youtube,
      description: "Videos educativos completos",
    },
  ]

  return (
    <section id="contacto" className="py-20 lg:py-32 bg-gradient-to-br from-brand-primary/5 to-brand-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="max-w-6xl mx-auto space-y-16"
        >
          {/* Section header */}
          <motion.div variants={fadeInUp} className="text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground text-balance">
              Contacto
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
              ¿Lista para transformar tu mente y tu vida? Conectemos y comencemos tu viaje hacia el bienestar
              neurológico.
            </p>
          </motion.div>

          {/* Contact methods */}
          <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method) => {
              const Icon = method.icon
              return (
                <motion.div key={method.key} variants={fadeInStagger}>
                  <Card className="group h-full border-border hover:border-brand-primary/30 transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-6 text-center space-y-4">
                      {/* Icono oficial + grande + color de marca */}
                      <div className="mx-auto w-16 h-16 rounded-full bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center shadow-sm group-hover:bg-brand-primary/20 transition-colors">
                        <Icon size={34} className="text-brand-accent transition-transform duration-300 group-hover:scale-110" />
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground">{method.title}</h3>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                        <a
                          href={method.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block font-medium text-brand-accent hover:text-brand-accent/80 transition-colors"
                          aria-label={`${method.title}: ${method.value}`}
                        >
                          {method.value}
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Main CTA */}
          <motion.div variants={fadeInStagger} className="text-center space-y-8">
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground">📩 Escríbeme: {siteConfig.links.email}</p>
              <p className="text-lg text-muted-foreground">📲 Sígueme: Instagram – TikTok – YouTube</p>
            </div>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="bg-brand-accent hover:bg-brand-accent/90 text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <Send className="mr-2 h-5 w-5" />
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
                      className="w-full bg-brand-accent hover:bg-brand-accent/90 text-white"
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
    </section>
  )
}

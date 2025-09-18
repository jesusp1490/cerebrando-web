"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Award, ChevronLeft, ChevronRight, Star } from "lucide-react"
import { fadeInUp, staggerContainer, fadeInStagger } from "@/lib/animations"
import Image from "next/image"

export function Credibility() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const credentials = [
    {
      icon: Building2,
      title: "HM Hospitales Madrid",
      description: "Hospital de referencia nacional",
      logo: "/placeholders/hm-madrid-logo.png",
    },
    {
      icon: Building2,
      title: "HM Hospitales Málaga",
      description: "Centro médico de excelencia",
      logo: "/placeholders/hm-malaga-logo.png",
    },
    {
      icon: Award,
      title: "Sociedad Española de Neurofisiología Clínica",
      description: "Colaboradora científica",
      logo: "/placeholders/senfc-logo.png",
    },
  ]

  const testimonials = [
    {
      name: "María González",
      role: "Paciente - Programa de Sueño",
      content: "Próximamente verás aquí historias reales de transformación...",
      rating: 5,
      image: "/placeholders/testimonial-1.jpg",
    },
    {
      name: "Ana Rodríguez",
      role: "Alumna - Neuroplasticidad",
      content: "Testimonios de personas que han cambiado su vida con Cerebrando...",
      rating: 5,
      image: "/placeholders/testimonial-2.jpg",
    },
    {
      name: "Carmen López",
      role: "Comunidad Cerebrando",
      content: "Experiencias reales de mejora en sueño, estrés y bienestar...",
      rating: 5,
      image: "/placeholders/testimonial-3.jpg",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="credibilidad" className="py-20 lg:py-32 bg-neutral-light/10">
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
              Credibilidad & Testimonios
            </h2>
          </motion.div>

          {/* Credibility statement */}
          <motion.div variants={fadeInStagger} className="text-center space-y-6">
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto text-pretty">
              He trabajado en hospitales líderes como HM Hospitales en Madrid y Málaga, y soy colaboradora en la
              Sociedad Española de Neurofisiología Clínica.
            </p>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto text-pretty">
              Mi trabajo combina más de una década de experiencia médica con lo último en neurociencia aplicada al
              bienestar.
            </p>
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-brand-primary/10 border border-brand-primary/20">
              <span className="text-lg font-medium text-brand-primary">
                👉 Aquí pronto verás historias reales de pacientes y alumnas que ya han transformado su vida.
              </span>
            </div>
          </motion.div>

          {/* Credentials */}
          <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {credentials.map((credential, index) => (
              <motion.div
                key={index}
                variants={fadeInStagger}
                className="group p-6 rounded-2xl bg-background border border-border hover:border-brand-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="text-center space-y-4">
                  {/* Logo placeholder */}
                  <div className="mx-auto w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center group-hover:bg-brand-primary/20 transition-colors">
                    <credential.icon className="h-8 w-8 text-brand-primary" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground leading-tight">{credential.title}</h3>
                    <p className="text-sm text-muted-foreground">{credential.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonials carousel */}
          <motion.div variants={fadeInStagger} className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-2">Testimonios</h3>
              <p className="text-muted-foreground">Historias de transformación (próximamente)</p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <Card className="border-brand-primary/20 bg-gradient-to-br from-background to-brand-primary/5">
                <CardContent className="p-8 lg:p-12">
                  <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-8">
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 border-2 border-brand-primary/30 overflow-hidden">
                        <Image
                          src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                          alt={testimonials[currentTestimonial].name}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-center lg:text-left space-y-4">
                      {/* Stars */}
                      <div className="flex justify-center lg:justify-start space-x-1">
                        {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-brand-accent text-brand-accent" />
                        ))}
                      </div>

                      {/* Quote */}
                      <blockquote className="text-lg text-muted-foreground italic leading-relaxed">
                        "{testimonials[currentTestimonial].content}"
                      </blockquote>

                      {/* Attribution */}
                      <div className="space-y-1">
                        <div className="font-semibold text-foreground">{testimonials[currentTestimonial].name}</div>
                        <div className="text-sm text-brand-accent">{testimonials[currentTestimonial].role}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Navigation */}
              <div className="flex justify-center space-x-4 mt-6">
                <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full bg-transparent">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <div className="flex items-center space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentTestimonial ? "bg-brand-accent" : "bg-border"
                      }`}
                    />
                  ))}
                </div>
                <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full bg-transparent">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

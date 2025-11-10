"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Building2, Award, ChevronLeft, ChevronRight, Star } from "lucide-react"
import { fadeInUp, staggerContainer, fadeInStagger } from "@/lib/animations"
import Image from "next/image"

export function Credibility() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const stats = [
    {
      number: "+13",
      label: "AÑOS ESPECIALIZADA EN SALUD",
    },
    {
      number: "+100",
      label: "EMPRESAS ASESORADAS",
    },
    {
      number: "+2800",
      label: "ALUMNAS TRANSFORMADAS",
    },
  ]

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
    <section id="credibilidad" className="relative py-14 sm:py-16 md:py-20 lg:py-28 xl:py-32 bg-neutral-dark/8">
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="max-w-6xl mx-auto space-y-10 sm:space-y-12 md:space-y-14 lg:space-y-16"
        >
          <motion.div variants={fadeInUp} className="text-center space-y-4 sm:space-y-5 md:space-y-6">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-serif font-bold text-foreground text-balance"
              style={{
                textShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              }}
            >
              Credibilidad & Testimonios
            </h2>
          </motion.div>

          <motion.div variants={fadeInStagger} className="text-center space-y-4 sm:space-y-5 md:space-y-6">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto text-pretty">
              He trabajado en hospitales líderes como HM Hospitales en Madrid y Málaga, y soy colaboradora en la
              Sociedad Española de Neurofisiología Clínica.
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto text-pretty">
              Mi trabajo combina más de una década de experiencia médica con lo último en neurociencia aplicada al
              bienestar.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 md:gap-8 lg:gap-10"
          >
            {credentials.map((credential, index) => (
              <motion.div
                key={index}
                variants={fadeInStagger}
                className="bg-white rounded-3xl p-6 sm:p-7 md:p-8 border-2 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] relative overflow-hidden group"
                style={{
                  borderColor: "rgba(241, 215, 219, 0.4)",
                  boxShadow: "0 4px 16px rgba(199, 214, 217, 0.2), 0 2px 8px rgba(188, 120, 46, 0.15)",
                }}
              >
                <div className="text-center space-y-5">
                  <div
                    className="mx-auto w-24 h-24 rounded-full flex items-center justify-center group-hover:scale-125 transition-all duration-500"
                    style={{
                      background: "rgba(199, 214, 217, 0.25)",
                      boxShadow: "0 4px 16px rgba(199, 214, 217, 0.2), 0 2px 8px rgba(188, 120, 46, 0.15)",
                    }}
                  >
                    <credential.icon className="h-12 w-12" style={{ color: "rgb(199, 214, 217)" }} />
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    <h3 className="font-semibold text-lg sm:text-xl text-foreground leading-tight group-hover:text-[rgb(188,120,46)] transition-colors duration-300">
                      {credential.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">{credential.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeInStagger} className="text-center">
            <div className="inline-flex items-center px-5 sm:px-6 py-2 sm:py-3 rounded-full bg-brand-primary/15 border-2 border-brand-primary/30 shadow-lg">
              <span className="text-sm sm:text-base md:text-lg font-medium text-brand-primary">
                👉 Aquí pronto verás historias reales de pacientes y alumnas que ya han transformado su vida.
              </span>
            </div>
          </motion.div>

          <motion.div variants={fadeInStagger} className="space-y-6 sm:space-y-8">
            <div className="text-center">
              <h3 className="text-2xl sm:text-2xl md:text-3xl font-serif font-semibold text-foreground mb-2 sm:mb-3">
                Testimonios
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground">Historias de transformación (próximamente)</p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="p-1 rounded-3xl bg-gradient-to-br from-brand-primary/30 via-brand-accent/20 to-brand-primary/30 shadow-2xl">
                <div className="p-8 sm:p-9 md:p-10 lg:p-14 rounded-3xl bg-white">
                  <div className="flex flex-col lg:flex-row items-center space-y-5 sm:space-y-6 lg:space-y-0 lg:space-x-8">
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-brand-primary/30 to-brand-accent/30 p-1 shadow-xl">
                        <div className="w-full h-full rounded-full overflow-hidden bg-white">
                          <Image
                            src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                            alt={testimonials[currentTestimonial].name}
                            width={96}
                            height={96}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 text-center lg:text-left space-y-3 sm:space-y-4">
                      <div className="flex justify-center lg:justify-start space-x-1">
                        {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-brand-accent text-brand-accent" />
                        ))}
                      </div>

                      <blockquote className="text-base sm:text-lg text-muted-foreground italic leading-relaxed">
                        "{testimonials[currentTestimonial].content}"
                      </blockquote>

                      <div className="space-y-1">
                        <div className="font-semibold text-foreground">{testimonials[currentTestimonial].name}</div>
                        <div className="text-sm text-brand-accent">{testimonials[currentTestimonial].role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center space-x-4 mt-8">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="rounded-full bg-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 border-2 hover:border-[rgba(199,214,217,0.6)]"
                  style={{ borderColor: "rgba(199, 214, 217, 0.3)" }}
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <div className="flex items-center space-x-3">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial ? "w-12 shadow-lg" : "bg-border w-3 hover:w-6"
                      }`}
                      style={index === currentTestimonial ? { background: "rgb(188, 120, 46)" } : {}}
                    />
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="rounded-full bg-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 border-2 hover:border-[rgba(199,214,217,0.6)]"
                  style={{ borderColor: "rgba(199, 214, 217, 0.3)" }}
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
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

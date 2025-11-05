"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Moon, Brain, Headphones, Sprout, ArrowRight } from "lucide-react"
import { fadeInUp, staggerContainer, fadeInStagger, scaleOnHover } from "@/lib/animations"
import Image from "next/image"

export function Programs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const scrollToContact = () => {
    const element = document.getElementById("contacto")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const programs = [
    {
      icon: Moon,
      emoji: "💤",
      title: "Cerebrando el Sueño",
      description: "Entrena tu sistema nervioso para dormir mejor.",
      details: "(Ebook + curso premium)",
      status: "available",
      gradient: "from-blue-500/10 to-indigo-500/10",
      borderColor: "border-blue-500/20",
    },
    {
      icon: Brain,
      emoji: "🧠",
      title: "Neuroplasticidad en tu día a día",
      description: "Programa digital para reprogramar hábitos y reducir el estrés.",
      details: "",
      status: "available",
      gradient: "from-brand-primary/10 to-brand-primary/5",
      borderColor: "border-brand-primary/20",
    },
    {
      icon: Headphones,
      emoji: "🎧",
      title: "Meditaciones guiadas y audios para dormir",
      description: "Transforma tus noches y tu energía diaria.",
      details: "",
      status: "available",
      gradient: "from-brand-accent/10 to-brand-accent/5",
      borderColor: "border-brand-accent/20",
    },
    {
      icon: Sprout,
      emoji: "🌱",
      title: "Comunidad 'Cerebrándonos'",
      description: "Un espacio exclusivo con encuentros online, retos y apoyo constante.",
      details: "",
      status: "coming-soon",
      gradient: "from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/20",
    },
  ]

  return (
    <>
      <section className="py-20 lg:py-32 bg-gradient-to-br from-neutral-light/70 via-neutral-light/60 to-neutral-light/70 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-brand-primary/30 blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-brand-accent/20 blur-3xl animate-pulse"
            style={{ animationDelay: "1.5s" }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            ref={ref}
            variants={staggerContainer}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Content */}
              <motion.div variants={fadeInStagger} className="space-y-8">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white drop-shadow-2xl text-balance">
                  SERVICIOS
                </h2>

                <p className="text-xl text-white/95 leading-relaxed drop-shadow-lg">
                  En Sanitaria Digital también te ofrecemos servicios de consultoría y desarrollo de proyectos. Desde la
                  resolución de dudas estratégicas que pueden estar bloqueando tus avances en el negocio, hasta el
                  diseño y puesta en marcha completa de un proyecto sanitario digital.
                </p>

                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm border-3 border-white text-white hover:bg-white hover:text-neutral-light transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-110 px-8 py-6 text-lg rounded-full"
                >
                  QUIERO CONOCER LOS SERVICIOS
                </Button>
              </motion.div>

              <motion.div variants={fadeInStagger} className="order-first lg:order-last">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-white/20 border-4 border-white/40 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-500">
                  <Image
                    src="/placeholders/doctor-portrait.jpg"
                    alt="Servicios de Sanitaria Digital"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programs section */}
      <section id="programas" className="py-20 lg:py-32 bg-background">
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
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground text-balance">
                Mis programas y productos
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
                Herramientas científicamente respaldadas para transformar tu bienestar neurológico
              </p>
            </motion.div>

            <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {programs.map((program, index) => (
                <motion.div
                  key={index}
                  variants={fadeInStagger}
                  whileHover={scaleOnHover.whileHover}
                  transition={scaleOnHover.transition}
                  className={`group relative p-8 lg:p-10 rounded-3xl bg-gradient-to-br ${program.gradient} border-3 ${program.borderColor} hover:border-brand-primary/50 transition-all duration-500 shadow-xl hover:shadow-3xl hover:-translate-y-3`}
                >
                  <div className="absolute top-6 right-6">
                    {program.status === "coming-soon" ? (
                      <Badge
                        variant="secondary"
                        className="bg-brand-accent/30 text-brand-accent border-2 border-brand-accent/50 shadow-lg px-4 py-1.5 text-sm font-semibold"
                      >
                        Próximamente
                      </Badge>
                    ) : (
                      <Badge
                        variant="secondary"
                        className="bg-green-500/30 text-green-700 border-2 border-green-500/50 shadow-lg px-4 py-1.5 text-sm font-semibold"
                      >
                        Disponible
                      </Badge>
                    )}
                  </div>

                  {/* Icon and emoji */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="text-4xl drop-shadow-lg">{program.emoji}</div>
                    <div className="p-3 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500">
                      <program.icon className="h-7 w-7 text-brand-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-serif font-semibold text-foreground leading-tight group-hover:text-brand-accent transition-colors duration-300">
                      {program.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">{program.description}</p>
                    {program.details && <p className="text-sm text-brand-accent font-semibold">{program.details}</p>}
                  </div>

                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-125 group-hover:rotate-12">
                    <ArrowRight className="h-7 w-7 text-brand-accent drop-shadow-lg" />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeInStagger} className="text-center">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-brand-accent hover:bg-brand-accent/90 text-white px-12 py-7 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 text-lg font-semibold glow-on-hover"
              >
                Descubre mis programas
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-serif font-bold text-neutral-light/80 text-balance"
            >
              MARCAS QUE HAN CONFIADO
              <br />
              EN NOSOTROS
            </motion.h2>

            <motion.p variants={fadeInStagger} className="text-lg text-muted-foreground leading-relaxed">
              Tantos años dan para trabajar con muchas empresas, no me caben todas. Aquí algunos logos de empresas
              destacadas con las que hemos trabajado.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  )
}

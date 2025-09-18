"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Moon, Brain, Headphones, Sprout, ArrowRight } from "lucide-react"
import { fadeInUp, staggerContainer, fadeInStagger, scaleOnHover } from "@/lib/animations"

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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground text-balance">
              Mis programas y productos
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
              Herramientas científicamente respaldadas para transformar tu bienestar neurológico
            </p>
          </motion.div>

          {/* Programs grid */}
          <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                variants={fadeInStagger}
                whileHover={scaleOnHover.whileHover}
                transition={scaleOnHover.transition}
                className={`group relative p-6 lg:p-8 rounded-3xl bg-gradient-to-br ${program.gradient} border ${program.borderColor} hover:border-brand-primary/40 transition-all duration-300 hover:shadow-xl`}
              >
                {/* Status badge */}
                <div className="absolute top-4 right-4">
                  {program.status === "coming-soon" ? (
                    <Badge variant="secondary" className="bg-brand-accent/20 text-brand-accent border-brand-accent/30">
                      Próximamente
                    </Badge>
                  ) : (
                    <Badge variant="secondary" className="bg-green-500/20 text-green-700 border-green-500/30">
                      Disponible
                    </Badge>
                  )}
                </div>

                {/* Icon and emoji */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-3xl">{program.emoji}</div>
                  <div className="p-2 rounded-lg bg-background/60">
                    <program.icon className="h-6 w-6 text-brand-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-serif font-semibold text-foreground leading-tight">{program.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{program.description}</p>
                  {program.details && <p className="text-sm text-brand-accent font-medium">{program.details}</p>}
                </div>

                {/* Hover indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="h-5 w-5 text-brand-accent" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div variants={fadeInStagger} className="text-center">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-brand-accent hover:bg-brand-accent/90 text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Descubre mis programas
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

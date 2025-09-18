"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Microscope, Lightbulb, Users, ArrowRight } from "lucide-react"
import { fadeInUp, staggerContainer, fadeInStagger, scaleOnHover } from "@/lib/animations"

export function Solution() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Microscope,
      title: "Clínico-científico",
      description:
        "Estudios del sueño, electromiografías, electroencefalogramas y estimulación magnética transcraneal.",
      gradient: "from-brand-primary/20 to-brand-primary/5",
    },
    {
      icon: Lightbulb,
      title: "Transformacional",
      description:
        "Programas digitales, cursos y meditaciones guiadas para entrenar tu neuroplasticidad y reducir el estrés.",
      gradient: "from-brand-accent/20 to-brand-accent/5",
    },
    {
      icon: Users,
      title: "Acompañamiento",
      description: "Una comunidad que comparte experiencias, retos y avances en un espacio seguro y motivador.",
      gradient: "from-neutral-light/40 to-neutral-light/10",
    },
  ]

  return (
    <section id="solucion" className="py-20 lg:py-32 bg-background">
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
              Cómo lo soluciono
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
              En Cerebrando combino mi experiencia clínica con herramientas prácticas y transformadoras:
            </p>
          </motion.div>

          {/* Feature cards */}
          <motion.div variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInStagger}
                whileHover={scaleOnHover.whileHover}
                transition={scaleOnHover.transition}
                className={`group relative p-8 rounded-3xl bg-gradient-to-br ${feature.gradient} border border-border hover:border-brand-primary/30 transition-all duration-300 hover:shadow-xl`}
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-2xl bg-background/80 group-hover:bg-background transition-colors shadow-sm">
                    <feature.icon className="h-8 w-8 text-brand-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center space-y-4">
                  <h3 className="text-xl font-serif font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>

                {/* Hover indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="h-5 w-5 text-brand-accent" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Formula emphasis */}
          <motion.div variants={fadeInStagger} className="text-center">
            <div className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-brand-accent/10 to-brand-primary/10 border border-brand-accent/20">
              <span className="text-lg sm:text-xl font-semibold text-brand-accent">
                👉 La fórmula es simple: ciencia + hábitos + conciencia = resultados reales.
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

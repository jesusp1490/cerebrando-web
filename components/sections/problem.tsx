"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { AlertTriangle, Brain, Clock, Zap } from "lucide-react"
import { fadeInUp, staggerContainer, fadeInStagger } from "@/lib/animations"

export function Problem() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const problems = [
    {
      icon: Clock,
      title: "Agotamiento constante",
      description: "Te sientes sin energía, como si tu batería nunca se recargara completamente",
    },
    {
      icon: Zap,
      title: "Estrés que no para",
      description: "Vives en modo supervivencia, siempre alerta, sin poder relajarte",
    },
    {
      icon: Brain,
      title: "Mente acelerada",
      description: "Tus pensamientos van más rápido que tu vida y no sabes cómo parar",
    },
    {
      icon: AlertTriangle,
      title: "Insomnio persistente",
      description: "El sueño no llega o no es reparador, afectando tu rendimiento diario",
    },
  ]

  return (
    <section id="problema" className="py-20 lg:py-32 bg-neutral-light/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="max-w-4xl mx-auto text-center space-y-12"
        >
          {/* Section title */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground text-balance">
              El problema que soluciono
            </h2>
          </motion.div>

          {/* Main problem statement */}
          <motion.div variants={fadeInStagger} className="space-y-6">
            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed text-pretty">
              ¿Te sientes agotada, con estrés constante o con insomnio que no te deja rendir?
            </p>
            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed text-pretty">
              ¿Notas que tu mente va más rápido que tu vida y no sabes cómo parar?
            </p>
          </motion.div>

          {/* Problem cards */}
          <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-16">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                variants={fadeInStagger}
                className="group p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-brand-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 rounded-full bg-brand-primary/10 group-hover:bg-brand-primary/20 transition-colors">
                    <problem.icon className="h-6 w-6 text-brand-primary" />
                  </div>
                  <div className="text-left space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{problem.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Key insight */}
          <motion.div
            variants={fadeInStagger}
            className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-brand-primary/10 to-brand-accent/10 border border-brand-primary/20"
          >
            <p className="text-lg sm:text-xl font-medium text-foreground leading-relaxed text-pretty">
              Estos problemas no son 'cosas de tu cabeza'. Son señales de que tu cerebro necesita entrenarse para
              recuperar equilibrio, energía y bienestar.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

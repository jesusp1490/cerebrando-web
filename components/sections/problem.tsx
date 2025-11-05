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
    <section
      id="problema"
      className="relative py-24 lg:py-36 bg-gradient-to-br from-neutral-dark/25 via-white to-neutral-dark/15"
    >
      <div className="absolute top-0 left-0 right-0 h-40 -mt-1">
        <svg
          className="absolute top-0 w-full h-40"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,0 L0,60 Q360,120 720,60 T1440,60 L1440,0 Z" fill="rgb(255, 255, 255)" />
          <path d="M0,0 L0,50 Q360,110 720,50 T1440,50 L1440,0 Z" fill="rgb(255, 255, 255)" opacity="0.5" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="max-w-5xl mx-auto text-center space-y-14"
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-foreground text-balance drop-shadow-md">
              El problema que soluciono
            </h2>
          </motion.div>

          <motion.div variants={fadeInStagger} className="space-y-8">
            <p className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground leading-relaxed text-pretty font-medium">
              ¿Te sientes agotada, con estrés constante o con insomnio que no te deja rendir?
            </p>
            <p className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground leading-relaxed text-pretty font-medium">
              ¿Notas que tu mente va más rápido que tu vida y no sabes cómo parar?
            </p>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mt-20">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                variants={fadeInStagger}
                className="bg-white rounded-3xl p-8 border-2 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] relative overflow-hidden group"
                style={{
                  borderColor: "rgba(241, 215, 219, 0.4)",
                  boxShadow: "0 4px 16px rgba(199, 214, 217, 0.2), 0 2px 8px rgba(188, 120, 46, 0.15)",
                }}
              >
                <div className="flex items-start space-x-6 relative z-10">
                  <div
                    className="flex-shrink-0 p-6 rounded-2xl transition-all duration-500 group-hover:scale-125"
                    style={{
                      background: "rgba(199, 214, 217, 0.3)",
                      boxShadow: "0 4px 16px rgba(199, 214, 217, 0.2), 0 2px 8px rgba(188, 120, 46, 0.15)",
                    }}
                  >
                    <problem.icon className="h-10 w-10" style={{ color: "rgb(199, 214, 217)" }} />
                  </div>
                  <div className="text-left space-y-4">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-[rgb(188,120,46)] transition-colors duration-300">
                      {problem.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{problem.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeInStagger}
            className="mt-20 p-12 rounded-3xl backdrop-blur-md border-[3px] hover:scale-105 transition-all duration-500"
            style={{
              background: "rgba(255, 255, 255, 0.7)",
              borderColor: "rgba(199, 214, 217, 0.6)",
              boxShadow: "0 20px 50px rgba(199, 214, 217, 0.3), 0 10px 25px rgba(188, 120, 46, 0.25)",
            }}
          >
            <p className="text-xl sm:text-2xl font-semibold text-foreground leading-relaxed text-pretty relative z-10">
              Estos problemas no son 'cosas de tu cabeza'. Son señales de que tu cerebro necesita entrenarse para
              recuperar equilibrio, energía y bienestar.
            </p>
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
          <path d="M0,120 L0,60 Q360,0 720,60 T1440,60 L1440,120 Z" fill="rgb(255, 255, 255)" />
          <path d="M0,120 L0,50 Q360,10 720,50 T1440,50 L1440,120 Z" fill="rgb(255, 255, 255)" opacity="0.5" />
        </svg>
      </div>
    </section>
  )
}

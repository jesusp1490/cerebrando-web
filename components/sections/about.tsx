"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { fadeInUp, staggerContainer, slideInFromLeft, slideInFromRight } from "@/lib/animations"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="about"
      className="relative py-12 sm:py-14 md:py-16 lg:py-24 xl:py-28 overflow-hidden bg-neutral-dark/20"
      style={{
        background:
          "linear-gradient(135deg, rgba(224, 197, 180, 0.2), rgba(199, 214, 217, 0.25), rgba(241, 215, 219, 0.3))",
      }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "rgba(224, 197, 180, 0.5)" }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: "rgba(199, 214, 217, 0.5)" }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="absolute top-0 left-0 right-0 h-20 sm:h-24 md:h-32 -mt-1">
        <svg
          className="absolute top-0 w-full h-20 sm:h-24 md:h-32"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,0 L0,60 Q360,120 720,60 T1440,60 L1440,0 Z" fill="rgb(199, 214, 217)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="max-w-6xl mx-auto space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16"
        >
          <motion.div variants={fadeInUp} className="text-center space-y-3 sm:space-y-4 md:space-y-6 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-foreground text-balance">
              Quién soy
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-16 items-center">
            <motion.div variants={slideInFromLeft} className="order-2 lg:order-1 px-4 sm:px-0">
              <div className="relative group max-w-md mx-auto lg:mx-0">
                <div className="absolute -left-4 sm:-left-6 top-0 bottom-0 w-6 sm:w-8 bg-gradient-to-b from-brand-primary via-brand-primary/90 to-brand-primary/80 rounded-l-2xl sm:rounded-l-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500" />
                <div className="aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-brand-primary/25 to-brand-accent/20 border-3 sm:border-4 border-brand-primary/40 ml-4 sm:ml-6 shadow-2xl group-hover:shadow-3xl group-hover:scale-105 transition-all duration-500">
                  <div className="w-full h-full bg-gradient-to-br from-neutral-light/80 to-brand-accent/30 flex items-center justify-center">
                    <span className="text-neutral-dark/40 text-sm">Image placeholder</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={slideInFromRight}
              className="order-1 lg:order-2 space-y-4 sm:space-y-5 md:space-y-6 px-4 sm:px-0"
            >
              <p className="text-sm sm:text-base md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                Soy la Dra. Ángela De Abreu, especialista en Neurofisiología Clínica con más de 10 años de experiencia
                en hospitales de referencia.
              </p>

              <p className="text-sm sm:text-base md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                He acompañado a miles de pacientes en diagnósticos neurológicos, estudios de sueño y monitorización en
                quirófano. Pero descubrí algo clave: los síntomas no mejoran solo con diagnósticos, sino entrenando el
                cerebro día a día.
              </p>

              <p className="text-sm sm:text-base md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                Por eso nace <span className="font-semibold text-brand-primary">Cerebrando</span>: para enseñarte a usar
                la neuroplasticidad a tu favor y crear la vida que mereces.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 md:h-32 -mb-1">
        <svg
          className="absolute bottom-0 w-full h-20 sm:h-24 md:h-32"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,120 L0,60 Q360,0 720,60 T1440,60 L1440,120 Z" fill="rgb(241, 215, 219)" />
        </svg>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Microscope, Lightbulb, Users, ArrowRight } from "lucide-react"
import { staggerContainer, fadeInStagger, scaleOnHover } from "@/lib/animations"

export function Solution() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Microscope,
      title: "Clínico-científico",
      description:
        "Estudios del sueño, electromiografías, electroencefalogramas y estimulación magnética transcraneal.",
    },
    {
      icon: Lightbulb,
      title: "Transformacional",
      description:
        "Programas digitales, cursos y meditaciones guiadas para entrenar tu neuroplasticidad y reducir el estrés.",
    },
    {
      icon: Users,
      title: "Acompañamiento",
      description: "Una comunidad que comparte experiencias, retos y avances en un espacio seguro y motivador.",
    },
  ]

  return (
    <section
      id="solucion"
      className="relative py-12 sm:py-14 md:py-16 lg:py-24 xl:py-28 overflow-hidden bg-background"
      style={{
        background:
          "linear-gradient(135deg, rgba(199, 214, 217, 0.2), rgba(241, 215, 219, 0.3), rgba(224, 197, 180, 0.25))",
      }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "rgba(199, 214, 217, 0.5)" }}
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
          className="absolute bottom-20 right-10 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: "rgba(241, 215, 219, 0.5)" }}
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
          <motion.div variants={fadeInStagger} className="text-center space-y-3 sm:space-y-4 md:space-y-6 px-4">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-serif font-bold text-foreground text-balance"
              style={{
                textShadow: "0 6px 25px rgba(0, 0, 0, 0.2), 0 3px 12px rgba(0, 0, 0, 0.15)",
                filter: "drop-shadow(0 12px 35px rgba(0, 0, 0, 0.15))",
              }}
            >
              Cómo lo soluciono
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto text-pretty">
              En Cerebrando combino mi experiencia clínica con herramientas prácticas y transformadoras:
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7 lg:gap-8 mt-8 sm:mt-10 md:mt-12 lg:mt-16"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInStagger}
                whileHover={scaleOnHover.whileHover}
                transition={scaleOnHover.transition}
                className="group relative p-5 sm:p-6 md:p-7 lg:p-10 rounded-2xl sm:rounded-3xl bg-white border-[3px] transition-all duration-400 hover:translate-y-[-12px] hover:scale-[1.04]"
                style={{
                  borderColor: "rgba(199, 214, 217, 0.5)",
                  boxShadow:
                    "0 8px 25px rgba(0, 0, 0, 0.12), 0 4px 12px rgba(188, 120, 46, 0.2), 0 0 20px rgba(199, 214, 217, 0.15)",
                }}
              >
                <div className="flex justify-center mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                  <div
                    className="p-3 sm:p-4 md:p-5 lg:p-6 rounded-xl sm:rounded-2xl bg-white group-hover:scale-125 transition-all duration-500 shadow-lg"
                    style={{
                      background: "rgba(199, 214, 217, 0.3)",
                      boxShadow: "0 6px 20px rgba(199, 214, 217, 0.3), 0 3px 10px rgba(188, 120, 46, 0.2)",
                    }}
                  >
                    <feature.icon
                      className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 lg:h-12 lg:w-12"
                      style={{ color: "rgb(188, 120, 46)", strokeWidth: 2.5 }}
                    />
                  </div>
                </div>

                <div className="text-center space-y-2 sm:space-y-3 md:space-y-4">
                  <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-serif font-bold text-foreground group-hover:text-[rgb(188,120,46)] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-125">
                  <ArrowRight
                    className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 drop-shadow-lg"
                    style={{ color: "rgb(188, 120, 46)" }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeInStagger} className="text-center mt-8 sm:mt-10 md:mt-12 lg:mt-16 px-4">
            <div
              className="inline-flex items-center px-5 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-5 md:py-6 lg:py-7 rounded-xl sm:rounded-2xl backdrop-blur-md border-[3px] sm:border-[4px] hover:scale-105 transition-all duration-500"
              style={{
                background: "rgba(255, 255, 255, 0.9)",
                borderColor: "rgba(188, 120, 46, 0.5)",
                boxShadow:
                  "0 25px 60px rgba(188, 120, 46, 0.4), 0 15px 35px rgba(199, 214, 217, 0.35), 0 0 40px rgba(188, 120, 46, 0.25)",
              }}
            >
              <span
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold"
                style={{ color: "rgb(188, 120, 46)" }}
              >
                👉 La fórmula es simple: ciencia + hábitos + conciencia = resultados reales.
              </span>
            </div>
          </motion.div>
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

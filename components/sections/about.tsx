"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { fadeInUp, staggerContainer, fadeInStagger, slideInFromLeft, slideInFromRight } from "@/lib/animations"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const steps = [
    {
      number: "01.",
      text: "Sé cómo te sientes porque he estado en tu lugar.",
    },
    {
      number: "02.",
      text: "Sé lo que necesitas porque he vivido esa necesidad.",
    },
    {
      number: "03.",
      text: "Sé cómo puedo ayudarte porque ya he ayudado a otras a lograrlo.",
    },
  ]

  return (
    <section
      id="about"
      className="relative py-20 lg:py-32 overflow-hidden bg-neutral-dark/20"
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

      <div className="absolute top-0 left-0 right-0 h-32 -mt-1">
        <svg
          className="absolute top-0 w-full h-32"
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
          className="max-w-6xl mx-auto space-y-16"
        >
          <motion.div variants={fadeInUp} className="text-center space-y-12">
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Gracias a mi experiencia en clínica y en agencia, como emprendedora y después como empresaria, puedo decir
              que:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
              {steps.map((step, index) => (
                <motion.div key={index} variants={fadeInStagger} className="flex flex-col items-center space-y-6 group">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-neutral-light/90 to-neutral-light/70 flex items-center justify-center border-4 border-neutral-light/60 shadow-2xl group-hover:shadow-3xl group-hover:scale-110 transition-all duration-500">
                      <span className="text-3xl font-serif font-bold text-foreground">{step.number}</span>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-16 left-full w-full h-1 bg-gradient-to-r from-neutral-light/70 to-neutral-light/40 shadow-md" />
                    )}
                  </div>
                  <p className="text-center text-lg text-muted-foreground leading-relaxed max-w-xs">{step.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="text-center space-y-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground text-balance">
              ¿Y quién hay detrás de este proyecto?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div variants={slideInFromLeft} className="order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute -left-6 top-0 bottom-0 w-8 bg-gradient-to-b from-brand-primary via-brand-primary/90 to-brand-primary/80 rounded-l-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500" />
                <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-brand-primary/25 to-brand-accent/20 border-4 border-brand-primary/40 ml-6 shadow-2xl group-hover:shadow-3xl group-hover:scale-105 transition-all duration-500">
                  <div className="w-full h-full bg-gradient-to-br from-neutral-light/80 to-brand-accent/30 flex items-center justify-center">
                    <span className="text-neutral-dark/40 text-sm">Image placeholder</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={slideInFromRight} className="order-1 lg:order-2 space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hola, soy <span className="font-semibold text-brand-accent">Esther Pérez</span> y desde hace más de 13
                años, mi vida profesional está dedicada a los negocios de salud y al marketing sanitario.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                En 2010 y casi sin experiencia, monté mi propia clínica, fue una etapa en la que aprendí muchísimo y
                experimenté las luces y sombras que tiene el emprender con un negocio sanitario a pie de calle.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                En 2013 fundé mi agencia de marketing y publicidad con un área especializada en salud, que me ha
                permitido trabajar con grandes marcas, grupos hospitalarios y decenas de clínicas Paralelamente fui
                directora de marketing del Instituto de Medicina Reproductiva durante 7 años donde dirigí todo el
                proceso de digitalización desde sus inicios.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Y mi último proyecto es <span className="font-semibold text-brand-primary">Sanitaria Digital</span> la
                escuela donde lanzamos al mercado a profesionales sanitarias que quieren crear su proyecto online o
                impulsar su consulta a través de este canal.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 -mb-1">
        <svg
          className="absolute bottom-0 w-full h-32"
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

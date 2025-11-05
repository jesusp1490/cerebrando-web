"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { fadeInUp, staggerContainer, fadeInStagger, neuralPulse } from "@/lib/animations"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

export function Hero() {
  const prefersReducedMotion = useReducedMotion()

  const scrollToContact = () => {
    const element = document.getElementById("contacto")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(199, 214, 217, 0.1), rgba(241, 215, 219, 0.2), rgba(188, 120, 46, 0.1))",
      }}
    >
      {!prefersReducedMotion && (
        <>
          <motion.div
            className="absolute inset-0 opacity-40"
            {...neuralPulse}
            style={{
              background: `radial-gradient(circle at 30% 70%, rgba(199, 214, 217, 0.5) 0%, transparent 50%),
                          radial-gradient(circle at 70% 30%, rgba(224, 197, 180, 0.45) 0%, transparent 50%),
                          radial-gradient(circle at 50% 50%, rgba(188, 120, 46, 0.2) 0%, transparent 60%)`,
            }}
          />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl"
              style={{ background: "rgba(199, 214, 217, 0.3)" }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-20 right-10 w-[500px] h-[500px] rounded-full blur-3xl"
              style={{ background: "rgba(188, 120, 46, 0.25)" }}
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
            />
            <motion.div
              className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full blur-2xl"
              style={{ background: "rgba(224, 197, 180, 0.35)" }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.25, 0.5, 0.25],
              }}
              transition={{
                duration: 7,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 2,
              }}
            />
          </div>
        </>
      )}

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-5xl mx-auto space-y-10"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-6xl sm:text-7xl lg:text-8xl font-serif font-bold text-foreground leading-tight text-balance"
            style={{
              textShadow: "0 4px 20px rgba(0, 0, 0, 0.15), 0 2px 10px rgba(0, 0, 0, 0.1)",
              filter: "drop-shadow(0 10px 30px rgba(0, 0, 0, 0.1))",
            }}
          >
            Transforma tu mente, tu salud y tu vida{" "}
            <span
              style={{
                background: "linear-gradient(135deg, rgb(199, 214, 217), rgb(188, 120, 46))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              entrenando tu cerebro
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInStagger}
            className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed text-pretty"
          >
            Soy la Dra. Ángela De Abreu, especialista en Neurofisiología y creadora de Cerebrando: un espacio donde la
            ciencia y la conciencia se unen para ayudarte a dormir mejor, reducir el estrés y potenciar tu
            neuroplasticidad.
          </motion.p>

          <motion.div
            variants={fadeInStagger}
            className="inline-flex items-center px-12 py-6 rounded-full border-[3px] backdrop-blur-md transition-all duration-500 hover:scale-110"
            style={{
              borderColor: "rgba(199, 214, 217, 0.6)",
              background: "rgba(255, 255, 255, 0.7)",
              boxShadow: "0 10px 30px rgba(199, 214, 217, 0.25), 0 5px 15px rgba(188, 120, 46, 0.2)",
            }}
          >
            <span className="text-2xl font-bold" style={{ color: "rgb(188, 120, 46)" }}>
              👉 No es magia, es neurociencia.
            </span>
          </motion.div>

          <motion.div variants={fadeInStagger} className="pt-8">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="px-8 py-4 rounded-full font-semibold text-lg text-white transition-all duration-500 hover:scale-110 hover:-translate-y-2 relative overflow-hidden"
              style={{
                backgroundColor: "rgb(188, 120, 46)",
                boxShadow:
                  "0 10px 30px rgba(199, 214, 217, 0.25), 0 5px 15px rgba(188, 120, 46, 0.2), 0 0 20px rgba(188, 120, 46, 0.6)",
              }}
            >
              <span className="relative z-10">Empieza ahora</span>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2 text-muted-foreground">
          <span className="text-sm font-medium">Descubre más</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="w-6 h-10 border-2 rounded-full flex justify-center backdrop-blur-sm shadow-lg"
            style={{
              borderColor: "rgba(199, 214, 217, 0.5)",
              background: "rgba(199, 214, 217, 0.1)",
            }}
          >
            <div className="w-1.5 h-3 rounded-full mt-2" style={{ background: "rgb(199, 214, 217)" }} />
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32">
        <svg
          className="absolute bottom-0 w-full h-32"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,100 L0,50 Q360,0 720,50 T1440,50 L1440,100 Z" fill="rgb(241, 215, 219, 0.4)" />
          <path d="M0,100 L0,60 Q360,10 720,60 T1440,60 L1440,100 Z" fill="rgb(241, 215, 219, 0.25)" opacity="0.5" />
        </svg>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { fadeInUp, staggerContainer, fadeInStagger, neuralPulse } from "@/lib/animations"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import Image from "next/image"

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        background:
          "linear-gradient(135deg, rgba(199, 214, 217, 0.15), rgba(241, 215, 219, 0.25), rgba(188, 120, 46, 0.12))",
      }}
    >
      {!prefersReducedMotion && (
        <>
          <motion.div
            className="absolute inset-0 opacity-50"
            {...neuralPulse}
            style={{
              background: `radial-gradient(circle at 30% 70%, rgba(199, 214, 217, 0.6) 0%, transparent 50%),
                          radial-gradient(circle at 70% 30%, rgba(224, 197, 180, 0.55) 0%, transparent 50%),
                          radial-gradient(circle at 50% 50%, rgba(188, 120, 46, 0.3) 0%, transparent 60%)`,
            }}
          />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl"
              style={{ background: "rgba(199, 214, 217, 0.4)" }}
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
              style={{ background: "rgba(188, 120, 46, 0.35)" }}
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
        </>
      )}

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="space-y-8 text-center lg:text-left">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight text-balance"
              style={{
                textShadow: "0 6px 25px rgba(0, 0, 0, 0.2), 0 3px 12px rgba(0, 0, 0, 0.15)",
                filter: "drop-shadow(0 12px 35px rgba(0, 0, 0, 0.15))",
              }}
            >
              Transforma tu mente, tu salud y tu vida{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, rgb(188, 120, 46) 0%, rgb(255, 200, 100) 25%, rgb(100, 220, 240) 70%, rgb(80, 200, 220) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontWeight: "800",
                }}
              >
                entrenando tu cerebro
              </span>
            </h1>

            <motion.p
              variants={fadeInStagger}
              className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed text-pretty"
            >
              Soy la Dra. Ángela De Abreu, especialista en Neurofisiología y creadora de Cerebrando: un espacio donde la
              ciencia y la conciencia se unen para ayudarte a dormir mejor, reducir el estrés y potenciar tu
              neuroplasticidad.
            </motion.p>

            <motion.div
              variants={fadeInStagger}
              className="inline-flex items-center px-8 py-5 rounded-2xl border-[3px] backdrop-blur-md transition-all duration-500 hover:scale-105"
              style={{
                borderColor: "rgba(188, 120, 46, 0.5)",
                background: "rgba(255, 255, 255, 0.85)",
                boxShadow:
                  "0 15px 40px rgba(188, 120, 46, 0.35), 0 8px 20px rgba(199, 214, 217, 0.3), 0 0 30px rgba(188, 120, 46, 0.2)",
              }}
            >
              <span className="text-xl font-bold" style={{ color: "rgb(188, 120, 46)" }}>
                👉 No es magia, es neurociencia.
              </span>
            </motion.div>

            <motion.div variants={fadeInStagger} className="pt-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="px-10 py-6 rounded-full font-bold text-xl text-white transition-all duration-500 hover:scale-110 hover:-translate-y-2 relative overflow-hidden shadow-2xl"
                style={{
                  backgroundColor: "rgb(188, 120, 46)",
                  boxShadow:
                    "0 15px 40px rgba(188, 120, 46, 0.45), 0 8px 20px rgba(188, 120, 46, 0.35), 0 0 30px rgba(188, 120, 46, 0.5)",
                }}
              >
                <span className="relative z-10">Empieza ahora</span>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeInUp} className="relative">
            <div
              className="relative aspect-[4/5] rounded-3xl overflow-hidden border-[4px] shadow-2xl"
              style={{
                borderColor: "rgba(199, 214, 217, 0.6)",
                boxShadow:
                  "0 25px 60px rgba(0, 0, 0, 0.25), 0 15px 35px rgba(188, 120, 46, 0.3), 0 0 40px rgba(199, 214, 217, 0.2)",
              }}
            >
              <Image
                src="/_MG_9549.jpg"
                alt="Dra. Ángela De Abreu"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(199, 214, 217, 0.15), rgba(188, 120, 46, 0.1), transparent)",
                }}
              />
            </div>
            <div
              className="absolute -bottom-6 -right-6 w-full h-full rounded-3xl -z-10"
              style={{
                background: "linear-gradient(135deg, rgb(199, 214, 217), rgb(188, 120, 46))",
                opacity: 0.3,
              }}
            />
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
          <path d="M0,100 L0,50 Q360,0 720,50 T1440,50 L1440,100 Z" fill="rgb(241, 215, 219, 0.5)" />
          <path d="M0,100 L0,60 Q360,10 720,60 T1440,60 L1440,100 Z" fill="rgb(241, 215, 219, 0.35)" opacity="0.6" />
        </svg>
      </div>
    </section>
  )
}

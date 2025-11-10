"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { fadeInUp, staggerContainer, fadeInStagger, neuralPulse } from "@/lib/animations"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import Image from "next/image"
import { Sparkles } from "lucide-react"

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
      className="relative min-h-[75vh] md:min-h-[80vh] lg:min-h-[85vh] xl:min-h-[90vh] 2xl:min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-8 sm:pb-12 md:pb-16 lg:pb-20"
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
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center max-w-7xl mx-auto"
        >
          <motion.div
            variants={fadeInUp}
            className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 xl:space-y-8 text-center lg:text-left"
          >
            <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-serif font-bold text-foreground leading-tight text-balance">
              Transforma tu mente, tu salud y tu vida{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, rgb(199, 214, 217) 0%, rgb(188, 120, 46) 35%, rgb(241, 215, 219) 70%, rgb(224, 197, 180) 100%)",
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
              className="text-sm sm:text-base md:text-base lg:text-lg xl:text-xl text-muted-foreground leading-relaxed text-pretty"
            >
              Soy la Dra. Ángela De Abreu, especialista en Neurofisiología y creadora de Cerebrando: un espacio donde la
              ciencia y la conciencia se unen para ayudarte a dormir mejor, reducir el estrés y potenciar tu
              neuroplasticidad.
            </motion.p>

            <motion.div
              variants={fadeInStagger}
              className="relative inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-3 lg:py-4 rounded-2xl backdrop-blur-md transition-all duration-500 hover:scale-105 group"
              style={{
                background: "linear-gradient(135deg, rgba(188, 120, 46, 0.15), rgba(199, 214, 217, 0.15))",
                border: "2px solid rgba(188, 120, 46, 0.4)",
                boxShadow: "0 10px 30px rgba(188, 120, 46, 0.2), 0 5px 15px rgba(199, 214, 217, 0.15)",
              }}
            >
              <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-full bg-white/80 shadow-md group-hover:rotate-12 transition-transform duration-500">
                <Sparkles
                  className="w-3 h-3 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-5 lg:h-5"
                  style={{ color: "rgb(188, 120, 46)" }}
                />
              </div>
              <span
                className="text-xs sm:text-sm md:text-base lg:text-lg font-bold"
                style={{ color: "rgb(188, 120, 46)" }}
              >
                No es magia, es neurociencia
              </span>
            </motion.div>

            <motion.div variants={fadeInStagger} className="pt-2 sm:pt-3 md:pt-3 lg:pt-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="px-5 sm:px-6 md:px-7 lg:px-10 py-3 sm:py-4 md:py-4 lg:py-6 rounded-full font-bold text-sm sm:text-base md:text-base lg:text-xl text-white transition-all duration-500 hover:scale-110 hover:-translate-y-2 relative overflow-hidden shadow-2xl"
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
              className="relative aspect-[4/5] max-h-[400px] md:max-h-[450px] lg:max-h-[550px] xl:max-h-[650px] 2xl:max-h-none rounded-3xl overflow-hidden border-[4px] shadow-2xl"
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

      <div className="absolute bottom-0 left-0 right-0 h-32">
        <svg
          className="absolute bottom-0 w-full h-32"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,100 L0,50 Q360,0 720,50 T1440,50 L1440,100 Z" fill="rgb(241, 215, 219)" />
          <path d="M0,100 L0,60 Q360,10 720,60 T1440,60 L1440,100 Z" fill="rgb(241, 215, 219)" opacity="0.7" />
        </svg>
      </div>
    </section>
  )
}

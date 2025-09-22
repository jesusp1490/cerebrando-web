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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-light/40 via-background to-brand-primary/20">
        {!prefersReducedMotion && (
          <motion.div
            className="absolute inset-0 opacity-30"
            {...neuralPulse}
            style={{
              background: `radial-gradient(circle at 30% 70%, rgb(var(--brand-primary) / 0.4) 0%, transparent 60%),
                          radial-gradient(circle at 70% 30%, rgb(var(--neutral-light) / 0.3) 0%, transparent 60%)`,
            }}
          />
        )}
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-brand-primary/15 blur-2xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-neutral-light/20 blur-2xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-brand-accent/10 blur-xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-neutral-dark/15 blur-lg animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-4xl mx-auto space-y-8"
        >
          {/* Main headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight text-balance"
          >
            Transforma tu mente, tu salud y tu vida{" "}
            <span className="text-brand-accent bg-gradient-to-r from-brand-accent to-brand-accent/80 bg-clip-text text-transparent">
              entrenando tu cerebro
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fadeInStagger}
            className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty"
          >
            Soy la Dra. Ángela De Abreu, especialista en Neurofisiología y creadora de Cerebrando: un espacio donde la
            ciencia y la conciencia se unen para ayudarte a dormir mejor, reducir el estrés y potenciar tu
            neuroplasticidad.
          </motion.p>

          <motion.div
            variants={fadeInStagger}
            className="inline-flex items-center px-8 py-4 rounded-full bg-brand-primary/15 border border-brand-primary/30 backdrop-blur-sm hover:bg-brand-primary/20 transition-all duration-300"
          >
            <span className="text-lg font-medium text-brand-primary">👉 No es magia, es neurociencia.</span>
          </motion.div>

          <motion.div variants={fadeInStagger} className="pt-6">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-brand-accent hover:bg-brand-accent/90 text-white text-lg px-10 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover-lift"
            >
              Empieza ahora
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
            className="w-6 h-10 border-2 border-brand-primary/40 rounded-full flex justify-center bg-brand-primary/5 backdrop-blur-sm"
          >
            <div className="w-1 h-3 bg-brand-primary/60 rounded-full mt-2" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

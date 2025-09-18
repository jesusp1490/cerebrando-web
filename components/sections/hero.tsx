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
      {/* Background with neural pulse animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-light/30 via-background to-brand-primary/10">
        {!prefersReducedMotion && (
          <motion.div
            className="absolute inset-0 opacity-20"
            {...neuralPulse}
            style={{
              background: `radial-gradient(circle at 30% 70%, rgb(var(--brand-primary) / 0.3) 0%, transparent 50%),
                          radial-gradient(circle at 70% 30%, rgb(var(--brand-accent) / 0.2) 0%, transparent 50%)`,
            }}
          />
        )}
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-brand-primary/10 blur-xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-brand-accent/10 blur-xl" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-neutral-light/20 blur-lg" />
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
            Transforma tu mente, tu salud y tu vida <span className="text-brand-accent">entrenando tu cerebro</span>
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

          {/* Kicker */}
          <motion.div
            variants={fadeInStagger}
            className="inline-flex items-center px-6 py-3 rounded-full bg-brand-primary/10 border border-brand-primary/20"
          >
            <span className="text-lg font-medium text-brand-primary">👉 No es magia, es neurociencia.</span>
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={fadeInStagger} className="pt-4">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-brand-accent hover:bg-brand-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Empieza ahora
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2 text-muted-foreground">
          <span className="text-sm">Descubre más</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-brand-primary/30 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-brand-primary/50 rounded-full mt-2" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Moon, Brain, Headphones, Sprout, ArrowRight } from "lucide-react"
import { fadeInUp, staggerContainer, fadeInStagger, scaleOnHover } from "@/lib/animations"

export function Programs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const scrollToContact = () => {
    const element = document.getElementById("contacto")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const programs = [
    {
      icon: Moon,
      emoji: "💤",
      title: "Cerebrando el Sueño",
      description: "Entrena tu sistema nervioso para dormir mejor.",
      details: "(Ebook + curso premium)",
      status: "available",
      gradient: "from-blue-500/10 to-indigo-500/10",
      borderColor: "border-blue-500/20",
    },
    {
      icon: Brain,
      emoji: "🧠",
      title: "Neuroplasticidad en tu día a día",
      description: "Programa digital para reprogramar hábitos y reducir el estrés.",
      details: "",
      status: "available",
      gradient: "from-brand-primary/10 to-brand-primary/5",
      borderColor: "border-brand-primary/20",
    },
    {
      icon: Headphones,
      emoji: "🎧",
      title: "Meditaciones guiadas y audios para dormir",
      description: "Transforma tus noches y tu energía diaria.",
      details: "",
      status: "available",
      gradient: "from-brand-accent/10 to-brand-accent/5",
      borderColor: "border-brand-accent/20",
    },
    {
      icon: Sprout,
      emoji: "🌱",
      title: "Comunidad 'Cerebrándonos'",
      description: "Un espacio exclusivo con encuentros online, retos y apoyo constante.",
      details: "",
      status: "coming-soon",
      gradient: "from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/20",
    },
  ]

  return (
    <>

      {/* Programs section */}
      <section
        id="programas"
        className="py-20 lg:py-32 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, rgba(241, 215, 219, 0.25), rgba(224, 197, 180, 0.3), rgba(199, 214, 217, 0.2))",
        }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
          <motion.div
            className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl"
            style={{ background: "rgba(241, 215, 219, 0.5)" }}
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
            style={{ background: "rgba(224, 197, 180, 0.5)" }}
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

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            variants={staggerContainer}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="max-w-6xl mx-auto space-y-16"
          >
            {/* Section header */}
            <motion.div variants={fadeInUp} className="text-center space-y-6">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground text-balance">
                Mis programas y productos
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
                Herramientas científicamente respaldadas para transformar tu bienestar neurológico
              </p>
            </motion.div>

            <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {programs.map((program, index) => (
                <motion.div
                  key={index}
                  variants={fadeInStagger}
                  whileHover={scaleOnHover.whileHover}
                  transition={scaleOnHover.transition}
                  className={`group relative p-8 lg:p-10 rounded-3xl bg-gradient-to-br ${program.gradient} border-3 ${program.borderColor} hover:border-brand-primary/50 transition-all duration-500 shadow-xl hover:shadow-3xl hover:-translate-y-3`}
                >
                  <div className="absolute top-6 right-6">
                    {program.status === "coming-soon" ? (
                      <Badge
                        variant="secondary"
                        className="bg-brand-accent/30 text-brand-accent border-2 border-brand-accent/50 shadow-lg px-4 py-1.5 text-sm font-semibold"
                      >
                        Próximamente
                      </Badge>
                    ) : (
                      <Badge
                        variant="secondary"
                        className="bg-green-500/30 text-green-700 border-2 border-green-500/50 shadow-lg px-4 py-1.5 text-sm font-semibold"
                      >
                        Disponible
                      </Badge>
                    )}
                  </div>

                  {/* Icon and emoji */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="text-4xl drop-shadow-lg">{program.emoji}</div>
                    <div className="p-3 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500">
                      <program.icon className="h-7 w-7 text-brand-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-serif font-semibold text-foreground leading-tight group-hover:text-brand-accent transition-colors duration-300">
                      {program.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">{program.description}</p>
                    {program.details && <p className="text-sm text-brand-accent font-semibold">{program.details}</p>}
                  </div>

                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-125 group-hover:rotate-12">
                    <ArrowRight className="h-7 w-7 text-brand-accent drop-shadow-lg" />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeInStagger} className="text-center">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-brand-accent hover:bg-brand-accent/90 text-white px-12 py-7 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 text-lg font-semibold glow-on-hover"
              >
                Descubre mis programas
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

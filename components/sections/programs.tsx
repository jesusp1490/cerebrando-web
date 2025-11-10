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
      title: "Cerebrando el Sueño",
      description: "Entrena tu sistema nervioso para dormir mejor.",
      details: "(Ebook + curso premium)",
      status: "available",
      iconColor: "text-blue-500",
      iconBg: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      hoverBorder: "hover:border-blue-500/40",
    },
    {
      icon: Brain,
      title: "Neuroplasticidad en tu día a día",
      description: "Programa digital para reprogramar hábitos y reducir el estrés.",
      details: "",
      status: "available",
      iconColor: "text-brand-primary",
      iconBg: "bg-brand-primary/10",
      borderColor: "border-brand-primary/20",
      hoverBorder: "hover:border-brand-primary/40",
    },
    {
      icon: Headphones,
      title: "Meditaciones guiadas y audios para dormir",
      description: "Transforma tus noches y tu energía diaria.",
      details: "",
      status: "available",
      iconColor: "text-brand-accent",
      iconBg: "bg-brand-accent/10",
      borderColor: "border-brand-accent/20",
      hoverBorder: "hover:border-brand-accent/40",
    },
    {
      icon: Sprout,
      title: "Comunidad 'Cerebrándonos'",
      description: "Un espacio exclusivo con encuentros online, retos y apoyo constante.",
      details: "",
      status: "coming-soon",
      iconColor: "text-green-600",
      iconBg: "bg-green-500/10",
      borderColor: "border-green-500/20",
      hoverBorder: "hover:border-green-500/40",
    },
  ]

  return (
    <section id="programas" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-40 -mt-1">
        <svg
          className="absolute top-0 w-full h-40"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,0 L0,60 Q360,120 720,60 T1440,60 L1440,0 Z" fill="rgb(199, 214, 217)" />
          <path d="M0,0 L0,50 Q360,110 720,50 T1440,50 L1440,0 Z" fill="rgb(199, 214, 217)" opacity="0.7" />
        </svg>
      </div>

      <div
        className="py-20 lg:py-32 relative"
        style={{
          background:
            "linear-gradient(135deg, rgba(199, 214, 217, 0.15), rgba(241, 215, 219, 0.2), rgba(224, 197, 180, 0.15))",
        }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <motion.div
            className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl"
            style={{ background: "rgba(199, 214, 217, 0.4)" }}
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
            style={{ background: "rgba(224, 197, 180, 0.4)" }}
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

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                  className={`group relative p-8 lg:p-10 rounded-3xl bg-white/80 backdrop-blur-sm border-2 ${program.borderColor} ${program.hoverBorder} transition-all duration-500 shadow-lg hover:shadow-2xl hover:-translate-y-2`}
                >
                  <div className="absolute top-6 right-6">
                    {program.status === "coming-soon" ? (
                      <Badge
                        variant="secondary"
                        className="bg-amber-500/20 text-amber-700 border border-amber-500/30 px-3 py-1 text-xs font-semibold"
                      >
                        Próximamente
                      </Badge>
                    ) : (
                      <Badge
                        variant="secondary"
                        className="bg-green-500/20 text-green-700 border border-green-500/30 px-3 py-1 text-xs font-semibold"
                      >
                        Disponible
                      </Badge>
                    )}
                  </div>

                  {/* Single colored icon */}
                  <div className="mb-6">
                    <div
                      className={`inline-flex p-4 rounded-2xl ${program.iconBg} shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-500`}
                    >
                      <program.icon className={`h-8 w-8 ${program.iconColor}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-serif font-semibold text-foreground leading-tight group-hover:text-brand-primary transition-colors duration-300">
                      {program.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-base">{program.description}</p>
                    {program.details && <p className="text-sm text-brand-primary font-semibold">{program.details}</p>}
                  </div>

                  <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-x-1">
                    <ArrowRight className="h-6 w-6 text-brand-primary" />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeInStagger} className="text-center pt-8">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-[#BC782E] hover:bg-[#A66828] text-white px-10 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 text-lg font-semibold"
              >
                Descubre mis programas
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 -mb-1">
        <svg
          className="absolute bottom-0 w-full h-40"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,120 L0,60 Q360,0 720,60 T1440,60 L1440,120 Z" fill="rgb(241, 215, 219)" />
          <path d="M0,120 L0,50 Q360,10 720,50 T1440,50 L1440,120 Z" fill="rgb(241, 215, 219)" opacity="0.5" />
        </svg>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Hospital, Award, Heart } from "lucide-react"
import { fadeInUp, staggerContainer, fadeInStagger, slideInFromLeft, slideInFromRight } from "@/lib/animations"
import Image from "next/image"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const credentials = [
    {
      icon: GraduationCap,
      title: "Especialista en Neurofisiología Clínica",
      description: "Formación especializada en el diagnóstico y tratamiento de trastornos neurológicos",
    },
    {
      icon: Hospital,
      title: "10+ años de experiencia hospitalaria",
      description: "HM Hospitales en Madrid y Málaga, hospitales de referencia nacional",
    },
    {
      icon: Award,
      title: "Colaboradora científica",
      description: "Sociedad Española de Neurofisiología Clínica",
    },
    {
      icon: Heart,
      title: "Miles de pacientes acompañados",
      description: "Diagnósticos neurológicos, estudios de sueño y monitorización quirúrgica",
    },
  ]

  return (
    <section id="about" className="py-20 lg:py-32 bg-neutral-light/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="max-w-6xl mx-auto"
        >
          {/* Section header */}
          <motion.div variants={fadeInUp} className="text-center space-y-6 mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground text-balance">
              Quién soy
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Doctor's photo placeholder */}
            <motion.div variants={slideInFromLeft} className="order-2 lg:order-1">
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 border border-brand-primary/20">
                  <Image
                    src="/placeholders/doctor-portrait.jpg"
                    alt="Dra. Ángela De Abreu - Especialista en Neurofisiología"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-brand-accent/20 blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-brand-primary/20 blur-xl" />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div variants={slideInFromRight} className="order-1 lg:order-2 space-y-8">
              {/* Main description */}
              <div className="space-y-6">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Soy la <span className="font-semibold text-brand-accent">Dra. Ángela De Abreu</span>, especialista en
                  Neurofisiología Clínica con más de 10 años de experiencia en hospitales de referencia.
                </p>

                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  He acompañado a miles de pacientes en diagnósticos neurológicos, estudios de sueño y monitorización en
                  quirófano. Pero descubrí algo clave: los síntomas no mejoran solo con diagnósticos, sino entrenando el
                  cerebro día a día.
                </p>

                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Por eso nace <span className="font-semibold text-brand-primary">Cerebrando</span>: para enseñarte a
                  usar la neuroplasticidad a tu favor y crear la vida que mereces.
                </p>
              </div>

              {/* Credentials grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {credentials.map((credential, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInStagger}
                    className="p-4 rounded-xl bg-background/60 border border-border hover:border-brand-primary/30 transition-colors"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 p-2 rounded-lg bg-brand-primary/10">
                        <credential.icon className="h-5 w-5 text-brand-primary" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-semibold text-sm text-foreground leading-tight">{credential.title}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">{credential.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

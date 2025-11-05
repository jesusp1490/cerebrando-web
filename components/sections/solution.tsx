"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Microscope, Lightbulb, Users, ArrowRight } from "lucide-react"
import { staggerContainer, fadeInStagger, scaleOnHover } from "@/lib/animations"
import Image from "next/image"

export function Solution() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Microscope,
      title: "Clínico-científico",
      description:
        "Estudios del sueño, electromiografías, electroencefalogramas y estimulación magnética transcraneal.",
      gradient: "from-brand-primary/20 to-brand-primary/5",
    },
    {
      icon: Lightbulb,
      title: "Transformacional",
      description:
        "Programas digitales, cursos y meditaciones guiadas para entrenar tu neuroplasticidad y reducir el estrés.",
      gradient: "from-brand-accent/20 to-brand-accent/5",
    },
    {
      icon: Users,
      title: "Acompañamiento",
      description: "Una comunidad que comparte experiencias, retos y avances en un espacio seguro y motivador.",
      gradient: "from-neutral-light/40 to-neutral-light/10",
    },
  ]

  return (
    <section id="formacion" className="relative py-20 lg:py-32 bg-background">
      <div className="absolute top-0 left-0 right-0 h-32 -mt-1">
        <svg
          className="absolute top-0 w-full h-32"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,0 L0,60 Q360,120 720,60 T1440,60 L1440,0 Z" fill="rgb(241, 215, 219, 0.3)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div variants={fadeInStagger} className="order-2 lg:order-1">
              <div className="relative group">
                <div
                  className="absolute -left-6 top-0 bottom-0 w-8 rounded-l-3xl transition-all duration-500"
                  style={{
                    background: "linear-gradient(135deg, rgb(199, 214, 217), rgb(241, 215, 219))",
                    boxShadow: "0 20px 50px rgba(199, 214, 217, 0.3), 0 10px 25px rgba(188, 120, 46, 0.25)",
                  }}
                />
                <div
                  className="aspect-[4/5] rounded-3xl overflow-hidden border-4 ml-6 transition-all duration-400 hover:translate-y-[-8px] hover:scale-[1.02]"
                  style={{
                    background: "linear-gradient(135deg, rgb(199, 214, 217), rgb(241, 215, 219))",
                    borderColor: "rgba(199, 214, 217, 0.4)",
                    boxShadow: "0 20px 50px rgba(199, 214, 217, 0.3), 0 10px 25px rgba(188, 120, 46, 0.25)",
                  }}
                >
                  <Image
                    src="/placeholders/doctor-portrait.jpg"
                    alt="Formación en Sanitaria Digital"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInStagger} className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground text-balance">
                FORMACIÓN
              </h2>

              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Los programas que hemos diseñado son una lanzadera hacia tu futuro sanitario digital. Dependiendo del
                  punto en el que estés hay un programa pensado para ti. Además, te puedo asegurar que una vez entres a
                  formarte, la transformación está asegurada. Conocerás todo lo que puede ofrecerte el mundo digital,
                  serás consciente de todo el potencial que llevas dentro y sabrás cómo implementar estrategias para
                  conseguir tus objetivos.
                </p>

                <p>
                  Una vez entres en este mundo, ya no querrás salir. Uno de los secretos del éxito de la escuela, que
                  impulsa el éxito de las alumnas, es el sistema de aprendizaje. Combinamos compromiso, formación,
                  mentorización y coaching. Para mí son 4 pilares claves y necesarios, no solo para aprender sino para
                  confiar en una misma, empoderarse y pasar a la acción de forma definitiva.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInStagger}
                whileHover={scaleOnHover.whileHover}
                transition={scaleOnHover.transition}
                className={`group relative p-10 rounded-3xl bg-gradient-to-br ${feature.gradient} border-[3px] border-neutral-light/60 hover:border-[rgba(199,214,217,0.6)] transition-all duration-400 hover:translate-y-[-10px] hover:scale-[1.03]`}
                style={{
                  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                }}
              >
                <div className="flex justify-center mb-8">
                  <div
                    className="p-5 rounded-2xl bg-white group-hover:scale-110 transition-all duration-500"
                    style={{
                      boxShadow: "0 4px 16px rgba(199, 214, 217, 0.2), 0 2px 8px rgba(188, 120, 46, 0.15)",
                    }}
                  >
                    <feature.icon className="h-10 w-10" style={{ color: "rgb(199, 214, 217)" }} />
                  </div>
                </div>

                <div className="text-center space-y-4">
                  <h3 className="text-xl font-serif font-semibold text-foreground group-hover:text-[rgb(188,120,46)] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>

                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-125">
                  <ArrowRight className="h-6 w-6 drop-shadow-lg" style={{ color: "rgb(188, 120, 46)" }} />
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeInStagger} className="text-center mt-16">
            <div
              className="inline-flex items-center px-10 py-6 rounded-full backdrop-blur-md border-[3px] hover:scale-105 transition-all duration-500"
              style={{
                background: "rgba(255, 255, 255, 0.7)",
                borderColor: "rgba(188, 120, 46, 0.4)",
                boxShadow: "0 20px 50px rgba(199, 214, 217, 0.3), 0 10px 25px rgba(188, 120, 46, 0.25)",
              }}
            >
              <span className="text-xl sm:text-2xl font-semibold" style={{ color: "rgb(188, 120, 46)" }}>
                👉 La fórmula es simple: ciencia + hábitos + conciencia = resultados reales.
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 -mb-1">
        <svg
          className="absolute bottom-0 w-full h-32"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,120 L0,60 Q360,0 720,60 T1440,60 L1440,120 Z" fill="rgb(224, 197, 180, 0.3)" />
        </svg>
      </div>
    </section>
  )
}

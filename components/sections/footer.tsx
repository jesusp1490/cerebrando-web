"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Brain } from "lucide-react"
import { fadeInUp } from "@/lib/animations"
import { siteConfig } from "@/config/site"

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <footer className="py-8 bg-gradient-to-b from-[#F1D7DB] to-[#E0C5B4] border-t border-brand-primary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          ref={ref}
          variants={fadeInUp}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="space-y-6"
        >
          {/* Logo and tagline */}
          <div className="text-center space-y-3">
            <div className="flex items-center justify-center space-x-2">
              <Brain className="h-6 w-6 text-brand-primary" />
              <span className="text-xl font-serif font-bold text-foreground">Cerebrando</span>
            </div>

            <p className="text-sm text-muted-foreground">Cerebremos el cambio, cerebremos la vida.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center md:text-left items-start">
            {/* Doctor info */}
            <div className="space-y-1">
              <p className="font-medium text-sm text-foreground">{siteConfig.doctor.name}</p>
              <p className="text-xs text-muted-foreground">{siteConfig.doctor.specialty}</p>
              <p className="text-xs text-muted-foreground">{siteConfig.doctor.experience} de experiencia</p>
            </div>

            {/* Copyright - centered */}
            <div className="text-center space-y-1">
              <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Cerebrando</p>
              <p className="text-xs text-muted-foreground">Todos los derechos reservados</p>
              <p className="text-xs text-muted-foreground">Desarrollado con neurociencia y tecnología</p>
            </div>

            {/* Social Links */}
            <div className="flex flex-col items-center md:items-end gap-2">
              <p className="text-xs font-medium text-foreground mb-1">Sígueme</p>
              <div className="flex gap-4 text-xs">
                <a
                  href={siteConfig.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-brand-primary transition-colors"
                >
                  Instagram
                </a>
                <a
                  href={siteConfig.links.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-brand-primary transition-colors"
                >
                  TikTok
                </a>
                <a
                  href={siteConfig.links.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-brand-primary transition-colors"
                >
                  YouTube
                </a>
              </div>
              <a
                href={siteConfig.links.email}
                className="text-xs text-muted-foreground hover:text-brand-primary transition-colors"
              >
                Contacto
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

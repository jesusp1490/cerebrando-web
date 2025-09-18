"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Brain, Heart } from "lucide-react"
import { fadeInUp } from "@/lib/animations"
import { siteConfig } from "@/config/site"

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <footer className="py-12 bg-gradient-to-t from-brand-primary/10 to-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={fadeInUp}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="text-center space-y-8"
        >
          {/* Logo and tagline */}
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <Brain className="h-8 w-8 text-brand-primary" />
              <span className="text-2xl font-serif font-bold text-brand-primary">Cerebrando</span>
            </div>

            <div className="flex items-center justify-center space-x-2 text-lg text-brand-accent">
              <span>✨ Cerebremos el cambio, cerebremos la vida.</span>
              <Heart className="h-5 w-5 text-brand-accent" />
            </div>
          </div>

          {/* Doctor info */}
          <div className="space-y-2 text-muted-foreground">
            <p className="font-medium">{siteConfig.doctor.name}</p>
            <p className="text-sm">{siteConfig.doctor.specialty}</p>
            <p className="text-sm">{siteConfig.doctor.experience} de experiencia</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href={siteConfig.links.email} className="hover:text-brand-accent transition-colors">
              Email
            </a>
            <a
              href={siteConfig.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-accent transition-colors"
            >
              Instagram
            </a>
            <a
              href={siteConfig.links.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-accent transition-colors"
            >
              TikTok
            </a>
            <a
              href={siteConfig.links.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-accent transition-colors"
            >
              YouTube
            </a>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Cerebrando. Todos los derechos reservados.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Desarrollado con neurociencia y tecnología para transformar vidas.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

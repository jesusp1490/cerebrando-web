"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"
import { navigation } from "@/config/site"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState("hero")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Show/hide navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setIsScrolled(currentScrollY > 20)
      setLastScrollY(currentScrollY)

      // Update active section based on scroll position
      const sections = navigation.map((item) => item.href.substring(1))
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  const ThemeToggle = () => (
    <div className="flex items-center space-x-1 rounded-lg border p-1">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setTheme("light")}
        className={cn("h-7 w-7 p-0", theme === "light" && "bg-brand-primary text-white")}
      >
        <Sun className="h-3 w-3" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setTheme("dark")}
        className={cn("h-7 w-7 p-0", theme === "dark" && "bg-brand-primary text-white")}
      >
        <Moon className="h-3 w-3" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setTheme("system")}
        className={cn("h-7 w-7 p-0", theme === "system" && "bg-brand-primary text-white")}
      >
        <Monitor className="h-3 w-3" />
      </Button>
    </div>
  )

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
            isScrolled ? "bg-background/80 backdrop-blur-md border-b shadow-sm" : "bg-transparent",
          )}
        >
          <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <button
                  onClick={() => scrollToSection("#hero")}
                  className="text-2xl font-serif font-bold text-brand-primary hover:text-brand-accent transition-colors"
                >
                  Cerebrando
                </button>
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-8">
                {navigation.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.href)}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-brand-accent",
                      activeSection === item.href.substring(1) ? "text-brand-accent" : "text-foreground/80",
                    )}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>

              {/* Mobile Menu */}
              <div className="lg:hidden flex items-center space-x-2">
                <ThemeToggle />
                <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="sm" className="p-2">
                      <Menu className="h-5 w-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-80">
                    <div className="flex flex-col space-y-6 mt-8">
                      <div className="text-2xl font-serif font-bold text-brand-primary">Cerebrando</div>

                      <nav className="flex flex-col space-y-4">
                        {navigation.map((item) => (
                          <button
                            key={item.name}
                            onClick={() => scrollToSection(item.href)}
                            className={cn(
                              "text-left text-lg font-medium transition-colors hover:text-brand-accent",
                              activeSection === item.href.substring(1) ? "text-brand-accent" : "text-foreground/80",
                            )}
                          >
                            {item.name}
                          </button>
                        ))}
                      </nav>

                      <Button
                        onClick={() => scrollToSection("#contacto")}
                        className="bg-brand-accent hover:bg-brand-accent/90 text-white w-full"
                      >
                        Empieza ahora
                      </Button>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  )
}

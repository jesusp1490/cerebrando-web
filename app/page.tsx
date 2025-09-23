import { Navbar } from "@/components/navbar"
import { BackToTop } from "@/components/back-to-top"
import { Hero } from "@/components/sections/hero"
import { Problem } from "@/components/sections/problem"
import { Solution } from "@/components/sections/solution"
import { About } from "@/components/sections/about"
import { Programs } from "@/components/sections/programs"
import { Credibility } from "@/components/sections/credibility"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"


export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <Problem />
        <Solution />
        <About />
        <Programs />
        <Credibility />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Brain } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-light/20 to-brand-primary/10">
      <div className="text-center space-y-6 px-4">
        <div className="flex justify-center">
          <div className="p-4 rounded-full bg-brand-primary/10">
            <Brain className="h-16 w-16 text-brand-primary" />
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl font-serif font-bold text-foreground">Página no encontrada</h1>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            La página que buscas no existe o ha sido movida. Volvamos a entrenar tu navegación.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-brand-accent hover:bg-brand-accent/90 text-white">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al inicio
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="#contacto">Contactar</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

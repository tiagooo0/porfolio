import { personalInfo } from '@/data/content'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-border">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            © {year} {personalInfo.name}. Todos los derechos reservados.
          </p>
          
          <p className="text-sm text-muted">
            Construido con <span className="text-accent">Next.js</span> y <span className="text-accent">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
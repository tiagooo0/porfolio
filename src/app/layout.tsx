import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tiago Hürst | Desarrollador Web Frontend',
  description: 'Desarrollador Web Frontend en Córdoba, Argentina. Construyo interfaces modernas, rápidas y enfocadas en resultados. Disponible para proyectos freelance y oportunidades junior.',
  keywords: ['desarrollador web', 'frontend', 'React', 'Next.js', 'JavaScript', 'web developer', 'Córdoba', 'Argentina'],
  authors: [{ name: 'Tiago Hürst' }],
  openGraph: {
    title: 'Tiago Hürst | Desarrollador Web Frontend',
    description: 'Desarrollador Web Frontend en Córdoba, Argentina. Construyo interfaces modernas, rápidas y enfocadas en resultados.',
    type: 'website',
    locale: 'es_AR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
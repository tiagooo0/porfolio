'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { personalInfo } from '@/data/content'

export default function Projects() {
  return (
    <section id="proyectos" className="py-24 md:py-32">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title mb-4"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          Proyectos
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted mb-12 max-w-2xl"
        >
          Proyectos reales donde priorizo rendimiento, diseño y experiencia de usuario.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {personalInfo.projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-accent/5"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent z-10" />
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-300 z-20" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 rounded-md bg-background border border-border text-xs"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 rounded-md bg-accent/10 text-accent text-xs">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex gap-4 pt-2 border-t border-border">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-accent transition-colors"
                  >
                    <ExternalLink size={14} />
                    Demo
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-accent transition-colors"
                  >
                    <Github size={14} />
                    Código
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
'use client'

import { motion } from 'framer-motion'
import { BookOpen, Target, TrendingUp, Sparkles } from 'lucide-react'
import { personalInfo } from '@/data/content'

export default function About() {
  return (
    <section id="sobre-mi" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-accent/3 rounded-full blur-[150px] -translate-y-1/2" />
      </div>

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm mb-8"
          >
            <Sparkles size={14} />
            <span>Sobre mí</span>
          </motion.div>

          <h2
            className="text-4xl md:text-5xl font-bold tracking-tight mb-8"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {personalInfo.about.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-accent to-transparent rounded-full" />
                <p className="text-lg text-muted leading-relaxed whitespace-pre-line">
                  {personalInfo.about.description}
                </p>
              </div>

              <div className="flex items-center gap-4 text-sm">
                <span className="flex items-center gap-2 text-accent">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  Siempre aprendiendo
                </span>
                <span className="text-muted">•</span>
                <span className="text-muted">En constante evolución</span>
              </div>
            </div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-6 rounded-2xl bg-card border border-border"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <BookOpen size={18} className="text-accent" />
                  </div>
                  <h3 className="font-semibold">Aprendiendo actualmente</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {personalInfo.about.currentlyLearning.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="px-3 py-1.5 rounded-lg bg-background border border-border text-sm hover:border-accent/50 transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="p-6 rounded-2xl bg-card border border-border"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-emerald-500/10">
                    <Target size={18} className="text-emerald-500" />
                  </div>
                  <h3 className="font-semibold">Enfoque</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {personalInfo.about.focus.map((item, i) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="px-3 py-1.5 rounded-lg bg-background border border-border text-sm hover:border-emerald-500/50 transition-colors"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-3 text-muted"
              >
                <TrendingUp size={18} className="text-accent" />
                <span className="text-sm">Mi trayectoria: crecimiento constante</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
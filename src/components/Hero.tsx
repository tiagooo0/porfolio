'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Mail, Github, Linkedin, Code2, Zap } from 'lucide-react'
import { personalInfo } from '@/data/content'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-accent/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-purple-500/6 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_70%)]" />
      </div>

      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
              </span>
              {personalInfo.hero.badge}
            </motion.div>

            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Hola, soy{' '}
              <span className="gradient-text">{personalInfo.hero.title}</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted mb-4 max-w-xl mx-auto lg:mx-0">
              {personalInfo.hero.role}
            </p>

            <p className="text-lg text-muted/80 mb-10 max-w-xl mx-auto lg:mx-0">
              {personalInfo.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <motion.a
                href="#proyectos"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all bg-foreground text-background shadow-lg shadow-foreground/20 hover:shadow-xl hover:shadow-foreground/25"
              >
                <Code2 size={18} />
                Ver proyectos
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="#contacto"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all border border-border bg-card/50 hover:bg-card"
              >
                <Zap size={18} />
                Contactar
              </motion.a>
            </div>

            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-card border border-border hover:border-accent/50 hover:bg-card-hover transition-all group"
                aria-label="GitHub"
              >
                <Github size={20} className="group-hover:text-accent transition-colors" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-card border border-border hover:border-accent/50 hover:bg-card-hover transition-all group"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="group-hover:text-accent transition-colors" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3 rounded-xl bg-card border border-border hover:border-accent/50 hover:bg-card-hover transition-all group"
                aria-label="Email"
              >
                <Mail size={20} className="group-hover:text-accent transition-colors" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex-shrink-0 relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent via-purple-500/50 to-transparent blur-2xl opacity-60" />
              
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent/10 to-transparent" />
              
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white/10">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 z-10" />
                <img
                  src={personalInfo.hero.photo}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-3 -right-3 w-12 h-12 rounded-2xl bg-gradient-to-br from-accent to-purple-500 flex items-center justify-center shadow-2xl shadow-accent/40">
                <Code2 size={18} className="text-white" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-muted/50">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 rounded-full border border-border/50 flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 rounded-full bg-muted" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
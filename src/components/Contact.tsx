'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send, Sparkles } from 'lucide-react'
import { personalInfo } from '@/data/content'

export default function Contact() {
  return (
    <section id="contacto" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px]" />
      </div>

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm mb-8"
          >
            <Sparkles size={14} />
            <span>Contacto</span>
          </motion.div>

          <h2
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {personalInfo.contact.title}
          </h2>

          <p className="text-lg text-muted mb-10 max-w-lg mx-auto">
            {personalInfo.contact.description}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.a
              href={`mailto:${personalInfo.contact.email}`}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all bg-foreground text-background shadow-lg shadow-foreground/20 hover:shadow-xl hover:shadow-foreground/30"
            >
              <Mail size={20} />
              Enviar email
              <Send size={18} />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-4"
          >
            <span className="text-sm text-muted">También puedes encontrarme en:</span>
            <div className="flex gap-3">
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-xl bg-card border border-border hover:border-accent/50 hover:bg-card-hover transition-all"
                aria-label="GitHub"
              >
                <Github size={22} />
              </motion.a>
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-xl bg-card border border-border hover:border-accent/50 hover:bg-card-hover transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </motion.a>
              <motion.a
                href={`mailto:${personalInfo.contact.email}`}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-xl bg-card border border-border hover:border-accent/50 hover:bg-card-hover transition-all"
                aria-label="Email"
              >
                <Mail size={22} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
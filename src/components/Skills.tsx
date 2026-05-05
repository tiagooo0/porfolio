'use client'

import { motion } from 'framer-motion'
import { Code2, Wrench, Users, Sparkles } from 'lucide-react'
import { personalInfo } from '@/data/content'

export default function Skills() {
  const { technologies, tools, softSkills } = personalInfo.skills

  const skillCategories = [
    {
      title: 'Tecnologías',
      icon: Code2,
      color: 'accent',
      items: technologies,
    },
    {
      title: 'Herramientas',
      icon: Wrench,
      color: 'purple-500',
      items: tools,
    },
    {
      title: 'Soft Skills',
      icon: Users,
      color: 'emerald-500',
      items: softSkills,
    },
  ]

  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm mb-6"
          >
            <Sparkles size={14} />
            <span>Herramientas que domino</span>
          </motion.div>

          <h2
            className="text-4xl md:text-5xl font-bold tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Habilidades
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.15, duration: 0.5 }}
              className="p-8 rounded-3xl bg-card border border-border hover:border-border/60 transition-all group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl bg-${category.color}/10 group-hover:bg-${category.color}/20 transition-colors`}>
                  <category.icon size={22} className={`text-${category.color}`} />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.items.map((item, i) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.15 + i * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 rounded-xl bg-background border border-border hover:border-accent/50 hover:bg-card-hover transition-all cursor-default text-sm"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
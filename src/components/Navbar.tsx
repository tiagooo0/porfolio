'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, Monitor, Home, FolderKanban, User, Mail } from 'lucide-react'
import { navLinks } from '@/data/content'

type Theme = 'light' | 'dark' | 'system'

const iconMap: Record<string, typeof Home> = {
  '#inicio': Home,
  '#proyectos': FolderKanban,
  '#sobre-mi': User,
  '#contacto': Mail,
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme
    if (stored) setTheme(stored)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'system') {
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      root.classList.toggle('dark', systemDark)
    } else {
      root.classList.toggle('dark', theme === 'dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const cycleTheme = () => {
    const themes: Theme[] = ['light', 'dark', 'system']
    const next = themes[(themes.indexOf(theme) + 1) % themes.length]
    setTheme(next)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed top-0 left-0 right-0 z-50 pt-4 px-4"
      >
        <motion.div
          animate={{ 
            width: scrolled ? 'auto' : 'auto',
            padding: scrolled ? '0.5rem 1rem' : '0.5rem 1rem',
          }}
          className="mx-auto max-w-fit"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-1 p-1.5 rounded-2xl bg-card/80 backdrop-blur-xl border border-border/50 shadow-2xl shadow-black/5"
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl hover:bg-background transition-colors md:hidden"
              aria-label="Menú"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link, index) => {
                const Icon = iconMap[link.href]
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-muted hover:text-foreground hover:bg-background transition-all"
                  >
                    {Icon && <Icon size={16} />}
                    <span>{link.label}</span>
                  </motion.a>
                )
              })}
            </div>

            <div className="w-px h-6 bg-border hidden md:block" />

            <motion.button
              onClick={cycleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2.5 rounded-xl hover:bg-background transition-colors"
              aria-label="Cambiar tema"
            >
              {theme === 'light' && <Sun size={18} />}
              {theme === 'dark' && <Moon size={18} />}
              {theme === 'system' && <Monitor size={18} />}
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-6">
              {navLinks.map((link, i) => {
                const Icon = iconMap[link.href]
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 text-2xl font-semibold"
                  >
                    {Icon && <Icon size={24} />}
                    {link.label}
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
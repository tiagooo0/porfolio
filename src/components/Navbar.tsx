'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, Monitor } from 'lucide-react'
import { personalInfo, navLinks } from '@/data/content'

type Theme = 'light' | 'dark' | 'system'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
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
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-background/80 backdrop-blur-xl border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom flex items-center justify-between h-16 md:h-20">
          <a
            href="#inicio"
            className="text-xl md:text-2xl font-bold tracking-tight"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            {personalInfo.name}
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={cycleTheme}
              className="p-2 rounded-lg hover:bg-card-hover transition-colors"
              aria-label="Cambiar tema"
            >
              {theme === 'light' && <Sun size={20} />}
              {theme === 'dark' && <Moon size={20} />}
              {theme === 'system' && <Monitor size={20} />}
            </button>

            <button
              className="md:hidden p-2 rounded-lg hover:bg-card-hover transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menú"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-semibold"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'
import { Menu, X, Sun, Moon, Monitor } from 'lucide-react'
import { navLinks } from '@/data/content'

type Theme = 'light' | 'dark' | 'system'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState<Theme>('dark')
  const navbarRef = useRef<HTMLElement>(null)

  const scrollProgress = useMotionValue(0)
  const smoothProgress = useSpring(scrollProgress, { stiffness: 100, damping: 30 })

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setScrolled(scrollY > 50)
      
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? scrollY / docHeight : 0
      scrollProgress.set(Math.min(Math.max(progress, 0), 1))
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrollProgress])

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

  const NavContent = () => (
    <>
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="text-sm font-medium text-muted hover:text-foreground transition-colors"
        >
          {link.label}
        </a>
      ))}
    </>
  )

  return (
    <>
      <motion.nav
        ref={navbarRef}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent opacity-0 transition-opacity duration-300"
             style={{ opacity: scrolled ? 1 : 0 }} />
        
        <motion.div
          className="absolute inset-x-0 bottom-0 h-[1px] bg-accent origin-left"
          style={{ scaleX: smoothProgress, opacity: scrolled ? 0.3 : 0 }}
        />

        <header className={`transition-all duration-500 ${
          scrolled 
            ? 'bg-background/70 backdrop-blur-xl border-b border-border/30 py-3' 
            : 'bg-transparent py-6'
        }`}>
          <div className="container-custom flex items-center justify-between">
            <a href="#inicio" className="text-sm font-semibold tracking-tight">
              TH
            </a>

            <nav className="hidden md:flex items-center gap-8">
              <NavContent />
            </nav>

            <div className="flex items-center gap-2">
              <button
                onClick={cycleTheme}
                className="p-2 rounded-lg hover:bg-card-hover transition-colors"
                aria-label="Cambiar tema"
              >
                {theme === 'light' && <Sun size={16} />}
                {theme === 'dark' && <Moon size={16} />}
                {theme === 'system' && <Monitor size={16} />}
              </button>

              <button
                className="p-2 rounded-lg hover:bg-card-hover transition-colors md:hidden"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Menú"
              >
                {isOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </header>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              <NavContent />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
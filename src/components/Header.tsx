import React, { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Logo } from './Logo'
import { NAVIGATION_LINKS } from '../data/navigation'
import { useScrollBehavior } from '../hooks/useScrollBehavior'

export const Header: React.FC = () => {
  const { isScrolled, scrollToSection } = useScrollBehavior()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [mobileMenuOpen])

  const handleNavClick = (href: string) => {
    const sectionId = href.replace('#', '')
    scrollToSection(sectionId)
    setMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-primary-950 bg-opacity-95 backdrop-blur-md border-b border-primary-800 shadow-lg border-glow'
          : 'bg-transparent'
      }`}
    >
      {/* Glow effect on scroll */}
      {isScrolled && (
        <div className="absolute inset-x-0 -bottom-8 h-8 bg-gradient-to-b from-accent/20 to-transparent blur-lg" />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="transform hover:scale-105 transition-transform">
            <Logo onClick={() => scrollToSection('hero')} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center">
            {NAVIGATION_LINKS.map((link, idx) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="relative text-neutral-100 hover:text-white transition-colors text-sm font-display font-medium focus:outline-none focus:ring-2 focus:ring-accent rounded px-2 py-1 group"
              >
                <span className="relative z-10">{link.label}</span>
                {/* Hover underline animation */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-accent-light group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#contact')}
              className="relative bg-gradient-to-r from-accent to-accent-softer text-white px-6 py-2 rounded-lg font-display font-bold text-sm hover:shadow-lg hover:shadow-white/40 transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary-950 group overflow-hidden border-t-2 border-l-2 border-white/40 border-b-2 border-r-2 border-accent-light/20 hover:border-t-2 hover:border-l-2 hover:border-white/60 hover:border-b-2 hover:border-r-2 hover:border-accent-light/40"
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative group-hover:scale-105 inline-block transition-transform">Hablemos</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-neutral-100 p-2 rounded-lg hover:bg-white/15 transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-primary-900 border-b border-primary-800">
          <nav className="flex flex-col p-4 gap-2">
            {NAVIGATION_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-neutral-100 hover:bg-white/15 hover:text-white transition-all px-4 py-2 rounded-lg text-left font-display font-medium focus:outline-none focus:ring-2 focus:ring-accent"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#contact')}
              className="bg-gradient-to-r from-accent to-accent-softer text-white px-4 py-2 rounded-lg font-display font-bold hover:shadow-lg hover:shadow-white/40 transition-all mt-2 w-full focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary-800 border-t-2 border-l-2 border-white/40 border-b-2 border-r-2 border-accent-light/20 hover:border-t-2 hover:border-l-2 hover:border-white/60 hover:border-b-2 hover:border-r-2 hover:border-accent-light/40"
            >
              Hablemos
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}

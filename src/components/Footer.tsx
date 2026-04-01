import React from 'react'
import { Logo } from './Logo'
import { NAVIGATION_LINKS } from '../data/navigation'
import { useScrollBehavior } from '../hooks/useScrollBehavior'

export const Footer: React.FC = () => {
  const { scrollToSection } = useScrollBehavior()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-950 border-t border-primary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Content Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <Logo className="mb-4" onClick={() => scrollToSection('hero')} />
            <p className="text-neutral-200 text-sm leading-relaxed">
              Somos la nueva generación de la tecnología.           
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="font-display font-bold text-white mb-4 text-base">Navegación</h3>
            <nav className="space-y-2">
              {NAVIGATION_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href.replace('#', ''))}
                  className="block text-neutral-100 hover:text-accent-light transition-colors text-sm font-body focus:outline-none focus:ring-2 focus:ring-accent rounded px-2 py-1"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Info Column */}
          <div>
            <h3 className="font-display font-bold text-white mb-4 text-base">Contacto</h3>
            <div className="space-y-2 text-neutral-200 text-sm">
              <p>
                <a href="mailto:argendevelopers@gmail.com" className="hover:text-accent-light transition-colors">
                  argendevelopers@gmail.com
                </a>
              </p>
              <p>
                Disponible para consultas y presupuestos personalizados
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-800 pt-8 pb-24 md:pb-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-neutral-500 text-xs md:text-sm">
              © {currentYear} Argendevs. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

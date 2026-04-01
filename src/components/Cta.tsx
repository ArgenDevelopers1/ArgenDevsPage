import React from 'react'
import { ArrowRight } from 'lucide-react'
import { useScrollBehavior } from '../hooks/useScrollBehavior'

export const Cta: React.FC = () => {
  const { scrollToSection } = useScrollBehavior()

  return (
    <section id="cta" className="py-20 md:py-32 bg-primary-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6 text-glow">
          ¿Listo para empezar tu próximo proyecto?
        </h2>
        <p className="text-neutral-300 text-lg md:text-xl mb-10">
          Hablemos de cómo podemos ayudarte a alcanzar tus objetivos.
        </p>
        <button
          onClick={() => scrollToSection('contact')}
          className="group bg-gradient-to-r from-accent to-accent-softer text-white px-8 py-4 rounded-xl font-display font-bold text-lg hover:shadow-2xl hover:shadow-white/30 transition-all flex items-center gap-2 mx-auto focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary-950 overflow-hidden relative border-t-2 border-l-2 border-white/40 border-b-2 border-r-2 border-accent-light/20 hover:border-t-2 hover:border-l-2 hover:border-white/60 hover:border-b-2 hover:border-r-2 hover:border-accent-light/40"
        >
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="relative">Contactanos</span>
          <ArrowRight
            size={20}
            className="relative group-hover:translate-x-1 transition-transform"
          />
        </button>
      </div>
    </section>
  )
}

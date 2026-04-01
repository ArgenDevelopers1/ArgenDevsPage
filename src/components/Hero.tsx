import React, { useState } from 'react'
import { ArrowRight, MessageCircle, Zap, Code2, Gauge } from 'lucide-react'
import { useScrollBehavior } from '../hooks/useScrollBehavior'

export const Hero: React.FC = () => {
  const { scrollToSection } = useScrollBehavior()
  const [currentWhatsAppIndex, setCurrentWhatsAppIndex] = useState(0)

  const whatsappNumbers = ['+5491138482738', '+541126290810']

  const handleWhatsAppClick = () => {
    const number = whatsappNumbers[currentWhatsAppIndex]
    window.open(`https://wa.me/${number}?text=Hola%2C%20quisiera%20hablar%20sobre%20un%20proyecto.`, '_blank')
    setCurrentWhatsAppIndex((prev) => (prev + 1) % whatsappNumbers.length)
  }

  return (
    <section
      id="hero"
      className="min-h-screen bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950 pt-20 relative overflow-hidden flex items-center"
    >
      {/* Animated Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent opacity-10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-dark opacity-10 rounded-full blur-3xl animate-bounce-slow" />
        
        {/* Floating accent elements */}
        <div className="absolute top-20 right-20 w-32 h-32 rounded-full border-2 border-white/10 animate-sway" />
        <div className="absolute bottom-32 left-20 w-24 h-24 rounded-full border-2 border-accent-light/20 animate-float-down" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="text-center py-16 md:py-24">
          {/* Badge */}
          <div className="inline-block mb-4 animate-slide-down">
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border-2 border-accent-light/20 hover:border-accent-light/50 transition-colors">
              <Zap size={14} className="text-accent animate-pulse-glow" />
              <span className="text-xs font-semibold text-white">Impulsá tu negocio</span>
            </div>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-white animate-slide-up">
            <span className="text-glow">Automatizá tu negocio.</span>{' '}
            <span className="bg-gradient-to-r from-accent to-accent-softer bg-clip-text text-transparent animate-gradient-shift text-glow">
              Escalá sin límites.
            </span>
          </h1>

          <p className="text-base md:text-lg text-neutral-300 max-w-3xl mx-auto mb-8 leading-relaxed font-body animate-blur-in" style={{ animationDelay: '0.2s' }}>
            Soluciones de desarrollo y automatización a medida para emprendedores y pymes. Ahorra tiempo, reduce costos y lleva tu negocio al siguiente nivel con nuestras apps, webs, sistemas empresariales y bots personalizados.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={() => scrollToSection('services')}
              className="group relative bg-gradient-to-r from-accent to-accent-softer text-white px-6 py-2.5 rounded-xl font-display font-bold text-sm hover:shadow-2xl hover:shadow-accent/50 transition-all flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary-950 overflow-hidden border-t-2 border-l-2 border-white/40 border-b-2 border-r-2 border-accent-light/20 hover:border-t-2 hover:border-l-2 hover:border-white/60 hover:border-b-2 hover:border-r-2 hover:border-accent-light/40"
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative">Ver servicios</span>
              <ArrowRight
                size={18}
                className="relative group-hover:translate-x-1 transition-transform"
              />
            </button>

            <button
              onClick={handleWhatsAppClick}
              className="border-2 border-white text-white px-6 py-2.5 rounded-xl font-display font-bold text-sm hover:bg-white hover:text-primary-950 hover:shadow-xl hover:shadow-white/30 transition-all flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary-950"
            >
              <MessageCircle size={18} />
              WhatsApp
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-4 mt-12 max-w-2xl mx-auto" style={{ animation: 'fade-in 0.8s ease-out 0.6s both' }}>
            {[
              { icon: Code2, label: 'Proyectos', value: '25+' },
              { icon: Gauge, label: 'Automatizaciones', value: '50+' },
              { icon: Zap, label: 'Tiempo Ahorrado', value: '1000 hrs+' },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="group p-3 rounded-lg border-2 border-white/30 hover:border-white/70 bg-primary-800/50 transition-all hover-glow neon-glow hover:shadow-xl hover:shadow-white/40"
                style={{ animationDelay: `${0.7 + idx * 0.1}s` }}
              >
                <stat.icon className="w-5 h-5 mx-auto text-accent-light mb-1 group-hover:animate-pulse" />
                <p className="text-xs text-white mb-0.5">{stat.label}</p>
                <p className="text-lg font-bold text-accent-light">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

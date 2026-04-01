import React from 'react'
import * as LucideIcons from 'lucide-react'
import { SERVICES } from '../data/services'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export const Services: React.FC = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section
      id="services"
      className="py-10 md:py-16 bg-primary-900 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent-dark/5 rounded-full blur-3xl animate-float-up" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-10 md:mb-12 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 animate-slide-down text-glow">
            Nuestros Servicios
          </h2>
          <p className="text-neutral-300 text-base md:text-lg max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Soluciones técnicas a medida para acelerar tu crecimiento
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={gridRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 transition-all duration-700 ${
            gridVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {SERVICES.map((service, index) => {
            // Obtener el ícono de Lucide React
            const IconComponent =
              LucideIcons[service.icon as keyof typeof LucideIcons] as React.ElementType

            return (
              <div
                key={service.id}
                className="group stagger-item bg-primary-800 border-2 border-accent-light/20 rounded-2xl p-5 md:p-6 hover:border-accent-light/80 hover:shadow-2xl hover:shadow-accent-light/40 transition-all duration-300 hover:bg-accent/8 animate-scale-in relative overflow-hidden hover:-translate-y-1"
                style={{
                  animationDelay: gridVisible ? `${index * 0.1}s` : '0s',
                }}
              >
                {/* Animated background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  {/* Icon */}
                  {IconComponent && (
                    <div className="w-11 h-11 bg-gradient-to-br from-accent to-accent-dark rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 group-hover:animate-glow-pulse transition-all duration-300 neon-glow">
                      <IconComponent size={20} className="text-white" />
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="font-display text-lg md:text-xl font-bold text-white mb-1.5">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-300 mb-3 leading-relaxed text-sm">
                    {service.description}
                  </p>

                  {/* Use Cases */}
                  <div className="space-y-1">
                    <p className="text-accent-light font-display font-semibold text-xs uppercase tracking-wide">
                      Casos de uso
                    </p>
                    <ul className="space-y-1">
                      {service.useCases.map((useCase, idx) => (
                        <li
                          key={idx}
                          className="text-neutral-400 flex items-start gap-2 text-xs hover:text-neutral-200 transition-colors"
                        >
                          <span className="text-accent mt-0.5 flex-shrink-0 font-bold">✓</span>
                          <span>{useCase}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

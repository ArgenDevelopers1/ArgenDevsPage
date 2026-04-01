import React from 'react'
import { Check } from 'lucide-react'
import { PRICING_PLANS } from '../data/pricing'
import { useScrollBehavior } from '../hooks/useScrollBehavior'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export const Pricing: React.FC = () => {
  const { scrollToSection } = useScrollBehavior()
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section
      id="pricing"
      className="py-8 md:py-12 bg-primary-900 relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent-dark opacity-5 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent opacity-5 rounded-full blur-3xl animate-bounce-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-8 md:mb-12 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 animate-slide-down text-glow">
            Planes y Precios
          </h2>
          <p className="text-neutral-300 text-base md:text-lg max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Opciones de contratación flexibles adaptadas a tu necesidad
          </p>
          <p className="text-white text-sm md:text-base mt-3 font-semibold drop-shadow-lg">
            💵 Los precios se estiman en USD
          </p>
        </div>

        {/* Plans Grid */}
        <div
          ref={gridRef}
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 transition-all duration-700 ${
            gridVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {PRICING_PLANS.map((plan, index) => (
            <div
              key={plan.id}
              className={`rounded-2xl border transition-all duration-300 animate-scale-in hover-glow neon-glow relative group overflow-hidden stagger-item ${
                plan.recommended
                  ? 'border-2 border-white/40 bg-primary-800/60 scale-105 md:scale-110 shadow-2xl shadow-white/20 hover:shadow-white/40 hover:shadow-2xl hover:-translate-y-2 hover:border-white/60 ring-1 ring-white/10'
                  : 'border-2 border-accent-light/30 bg-primary-800/60 hover:border-white/40 hover:shadow-xl hover:shadow-white/30 hover:-translate-y-2 hover:bg-white/10'
              } p-5 md:p-6 flex flex-col h-full`}
              style={{
                animationDelay: gridVisible ? `${index * 0.1}s` : '0s',
              }}
            >
              {/* Animated background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                {/* Recommended Badge */}
                {plan.recommended && (
                  <div className="mb-2 inline-block animate-bounce-slow">
                    <div className="bg-gradient-to-r from-accent to-accent-softer text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-xl shadow-accent/30">
                      Recomendado
                    </div>
                  </div>
                )}

                {/* Plan Name */}
                <h3 className="font-display text-lg md:text-xl font-bold text-white mb-1.5 text-glow">
                  {plan.name}
                </h3>

                {/* Description */}
                <p className="text-neutral-100 text-xs mb-3 leading-relaxed">
                  {plan.description}
                </p>

                {/* Price - HIDDEN */}
                {/* <div className="mb-4">
                  <div className="text-2xl md:text-3xl font-bold text-white">
                    {plan.price}
                  </div>
                  <p className="text-neutral-200 text-xs mt-1">{plan.billing}</p>
                </div> */}

                {/* CTA Button */}
                <button
                  onClick={() => scrollToSection('contact')}
                  className={`w-full py-2 rounded-lg font-display font-bold mb-4 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-800 overflow-hidden relative group/btn ${
                    plan.recommended
                      ? 'bg-gradient-to-r from-accent to-accent-softer text-white shadow-xl shadow-accent/30 hover:shadow-2xl hover:shadow-accent/40 hover:-translate-y-0.5 border-t-2 border-l-2 border-white/40 border-b-2 border-r-2 border-accent-light/20 hover:border-t-2 hover:border-l-2 hover:border-white/60 hover:border-b-2 hover:border-r-2 hover:border-accent-light/40'
                      : 'border-2 border-accent-light/60 text-accent-light hover:border-accent-light hover:shadow-lg hover:shadow-accent-light/40'
                  }`}
                >
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                  <span className="relative">Solicitar información</span>
                </button>

                {/* Features */}
                <div className="space-y-1.5 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check
                        size={16}
                        className="text-accent flex-shrink-0 mt-0.5"
                      />
                      <span className="text-neutral-100 text-xs">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

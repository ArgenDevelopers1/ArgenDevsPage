import React, { useState } from 'react'
import * as LucideIcons from 'lucide-react'
import { PROCESS_STEPS } from '../data/process'

export const Process: React.FC = () => {
  const [selectedStepId, setSelectedStepId] = useState(PROCESS_STEPS[0].id)
  const [imageLoaded, setImageLoaded] = useState(false)

  const selectedStep = PROCESS_STEPS.find(s => s.id === selectedStepId)

  return (
    <section id="process" className="py-8 md:py-12 bg-primary-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-2 text-glow">
            Nuestro Proceso
          </h2>
          <p className="text-neutral-300 text-sm md:text-base max-w-3xl mx-auto">
            Una metodología probada que garantiza resultados desde el diagnóstico hasta el soporte post-lanzamiento.
          </p>
        </div>

        {/* Desktop: Interactive Steps */}
        <div className="hidden md:block">
          {/* Step Selectors */}
          <div className="grid grid-cols-5 gap-4 mb-8">
            {PROCESS_STEPS.map((step, idx) => {
              const IconComponent = LucideIcons[step.icon as keyof typeof LucideIcons] as React.ElementType
              const isSelected = step.id === selectedStepId
              return (
                <div
                  key={step.id}
                  onClick={() => { setImageLoaded(false); setSelectedStepId(step.id) }}
                  className="relative cursor-pointer group"
                >
                  {/* Connector Line */}
                  {idx < PROCESS_STEPS.length - 1 && (
                    <div className={`absolute top-8 left-1/2 w-full h-1 transition-all duration-300 ${isSelected ? 'bg-gradient-to-r from-accent to-accent-dark' : 'bg-accent-light/20 group-hover:bg-accent-light/60'}`} />
                  )}

                  <div className="relative z-10 flex flex-col items-center text-center">
                    <span className={`text-sm font-semibold mb-2 transition-all duration-300 text-white`}>
                      PASO {idx + 1}
                    </span>
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center border-3 transition-all duration-300 ${isSelected ? 'bg-accent border-accent-dark shadow-lg shadow-white/50' : 'bg-white border-neutral-200 group-hover:bg-gradient-to-r group-hover:from-accent group-hover:to-accent-softer group-hover:border-accent-light'}`}>
                      {IconComponent && <IconComponent size={24} className={isSelected ? 'text-white' : 'text-neutral-950 group-hover:text-white'} />}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Step Details Display */}
          {selectedStep && (
            <div className="bg-primary-800/60 border-l-4 border-accent rounded-3xl p-6 md:p-8 backdrop-blur-lg grid md:grid-cols-2 gap-6 items-center border-t-2 border-r-2 border-b-2 border-neutral-700/50 hover:border-neutral-600/80 transition-all duration-300 min-h-[350px]">
              <div className="animate-fade-in">
                <div className={`relative overflow-hidden rounded-2xl shadow-2xl bg-neutral-900 ${!imageLoaded ? 'animate-pulse' : ''}`} style={{ aspectRatio: '16/9' }}>
                  <picture>
                    <source
                      srcSet={selectedStep.image.replace(/\.(png|jpg)$/, '.webp')}
                      type="image/webp"
                    />
                    <img
                      src={selectedStep.image}
                      alt="Paso del proceso"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                      onLoad={() => setImageLoaded(true)}
                      onError={() => setImageLoaded(true)}
                    />
                  </picture>
                </div>
              </div>
              <div className="animate-fade-in flex flex-col space-y-4 group/details">
                <div>
                  <span className="text-white text-sm font-bold uppercase tracking-widest block mb-2">PASO {PROCESS_STEPS.findIndex(s => s.id === selectedStep.id) + 1}</span>
                  <h3 className="text-white text-xl md:text-2xl font-bold group-hover/details:text-white group-hover/details:drop-shadow-lg transition-all">{selectedStep.title}</h3>
                </div>
                <p className="text-neutral-300 leading-relaxed text-sm md:text-base group-hover/details:text-white group-hover/details:drop-shadow-lg transition-colors duration-300">{selectedStep.detailedDescription}</p>
              </div>
            </div>
          )}
        </div>

        {/* Mobile: Simple List */}
        <div className="md:hidden space-y-6">
          {PROCESS_STEPS.map((step) => {
            const IconComponent = LucideIcons[step.icon as keyof typeof LucideIcons] as React.ElementType
            return (
              <div key={step.id} className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-dark rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  {IconComponent && <IconComponent size={24} className="text-white" />}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1">{step.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

